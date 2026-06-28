import type { APIRoute } from "astro";
// Astro 7 + adaptador Cloudflare: los bindings/vars se leen desde el runtime de Workers.
import { env as cfEnv } from "cloudflare:workers";

// Endpoint dinámico (no se prerenderiza).
export const prerender = false;

interface ContactEnv {
  TURNSTILE_SECRET?: string;
  RESEND_API_KEY?: string;
  CONTACT_TO?: string;
  RL?: {
    get(key: string): Promise<string | null>;
    put(key: string, value: string, opts?: { expirationTtl?: number }): Promise<void>;
  };
}

const json = (status: number, body: Record<string, unknown>) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json; charset=utf-8" },
  });

// Caracteres de control a eliminar. Con saltos de línea permitidos conservamos
// tabulador (\x09) y salto de línea (\x0A).
const CTRL_ALL = /[\x00-\x1F\x7F]/g;
const CTRL_KEEP_NL = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g;

/** Saneado: recorta, limita longitud y elimina caracteres de control. */
function clean(value: unknown, max: number, allowNewlines = false): string {
  const s = String(value ?? "");
  return s.replace(allowNewlines ? CTRL_KEEP_NL : CTRL_ALL, "").trim().slice(0, max);
}

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

/** Verifica el token de Cloudflare Turnstile. Sin secreto (dev local) no bloquea. */
async function verifyTurnstile(secret: string | undefined, token: string, ip: string | null): Promise<boolean> {
  if (!secret) return true;
  const body = new FormData();
  body.append("secret", secret);
  body.append("response", token);
  if (ip) body.append("remoteip", ip);
  try {
    const r = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      body,
    });
    const data = (await r.json()) as { success?: boolean };
    return data.success === true;
  } catch {
    return false;
  }
}

/** Rate-limit progresivo por IP (ventana deslizante de 10 min, máx. 6). Requiere binding KV `RL`. */
async function rateLimit(env: ContactEnv, ip: string | null): Promise<{ ok: boolean; retry?: number }> {
  if (!env.RL || !ip) return { ok: true };
  const key = `contact:${ip}`;
  const windowMs = 10 * 60 * 1000;
  const ttl = 10 * 60;
  const now = Date.now();
  let rec = { n: 0, t: now };
  try {
    const raw = await env.RL.get(key);
    if (raw) rec = JSON.parse(raw);
  } catch {
    /* registro corrupto: se reinicia */
  }
  if (now - rec.t > windowMs) rec = { n: 0, t: now };
  rec.n += 1;
  await env.RL.put(key, JSON.stringify(rec), { expirationTtl: ttl });
  if (rec.n > 6) return { ok: false, retry: ttl };
  return { ok: true };
}

/** Notificación por email (Resend). Sin API key (dev) se registra por consola. */
async function notify(env: ContactEnv, p: { name: string; email: string; message: string }): Promise<boolean> {
  if (!env.RESEND_API_KEY || !env.CONTACT_TO) {
    console.log("[contact] (dev) mensaje recibido:", p);
    return true;
  }
  try {
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        from: "Portfolio <onboarding@resend.dev>",
        to: [env.CONTACT_TO],
        reply_to: p.email,
        subject: `Nuevo mensaje de ${p.name}`,
        text: `De: ${p.name} <${p.email}>\n\n${p.message}`,
      }),
    });
    return r.ok;
  } catch {
    return false;
  }
}

export const POST: APIRoute = async ({ request }) => {
  const env = cfEnv as unknown as ContactEnv;
  // El adaptador Cloudflare no expone Astro.clientAddress; la IP llega por cabecera.
  const ip = request.headers.get("cf-connecting-ip");

  // Solo aceptamos JSON.
  if (!request.headers.get("content-type")?.includes("application/json")) {
    return json(415, { ok: false, error: "unsupported_media_type" });
  }

  let raw: Record<string, unknown>;
  try {
    raw = (await request.json()) as Record<string, unknown>;
  } catch {
    return json(400, { ok: false, error: "bad_json" });
  }

  // Honeypot: si el campo oculto viene relleno, es un bot (respondemos OK en silencio).
  if (clean(raw.company, 100)) return json(200, { ok: true });

  // Validación whitelist-first: solo campos conocidos.
  const name = clean(raw.name, 80);
  const email = clean(raw.email, 120);
  const message = clean(raw.message, 2000, true);

  if (!name || !EMAIL_RE.test(email) || message.length < 2) {
    return json(422, { ok: false, error: "validation" });
  }

  // Rate-limit antes de gastar la verificación de Turnstile.
  const rl = await rateLimit(env, ip);
  if (!rl.ok) {
    return new Response(JSON.stringify({ ok: false, error: "rate_limited" }), {
      status: 429,
      headers: { "content-type": "application/json", "retry-after": String(rl.retry ?? 600) },
    });
  }

  // Verificación humana (Turnstile).
  const token = clean(raw["cf-turnstile-response"], 2048);
  if (!(await verifyTurnstile(env.TURNSTILE_SECRET, token, ip))) {
    return json(403, { ok: false, error: "turnstile" });
  }

  if (!(await notify(env, { name, email, message }))) {
    return json(502, { ok: false, error: "delivery" });
  }

  return json(200, { ok: true });
};

// Método no permitido para el resto de verbos.
export const ALL: APIRoute = () => json(405, { ok: false, error: "method_not_allowed" });
