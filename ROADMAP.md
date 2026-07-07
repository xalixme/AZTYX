# Hoja de ruta — AZTYX

> Estado actual: portfolio-showroom interactivo en Astro 7 + Tailwind 4 + Cloudflare Workers
> (adaptador 14), i18n ES/EN, formulario `/api/contact` funcional en local.
> Esta hoja de ruta cubre lo que falta para producción y las dos piezas grandes:
> **formulario production-ready** y **chatbot con la IA de Cloudflare**.

---

## Fase 0 — Despliegue base (prerrequisitos)

1. **Dominio**: verificar y registrar `aztyx.dev` / `aztyx.eus` (Cloudflare Registrar) y marca en EUIPO.
2. **Bindings que el adaptador auto-activa** (crearlos o desactivarlos antes del primer deploy):
   - `SESSION` (KV) → `wrangler kv namespace create SESSION` y añadir a `wrangler.toml`,
     o desactivar sesiones en `astro.config.mjs` si no se usan.
   - `IMAGES` → activo por defecto; inofensivo, no requiere binding manual en el plan actual.
3. **Deploy**: `npm run deploy` (build + `wrangler deploy`). Conectar el repo GitHub
   (`xalixme/AZTYX`) a **Workers Builds** para CI/CD por push.
4. `site` en `astro.config.mjs` → dominio real (afecta a canonical/hreflang/OG).

## Fase 1 — Formulario de contacto production-ready

*(la lógica ya existe en `src/pages/api/contact.ts`; esto es configuración + endurecimiento)*

1. **Turnstile real**: crear el widget en el dashboard → `TURNSTILE_SITE_KEY` (pública, en
   `wrangler.toml` / `PUBLIC_TURNSTILE_SITE_KEY`) + `wrangler secret put TURNSTILE_SECRET`.
2. **Rate-limit persistente**: `wrangler kv namespace create RL` → descomentar el binding en
   `wrangler.toml`. (El código ya lo usa si existe: ventana 10 min, máx. 6.)
3. **Entrega de email**: Resend con dominio verificado (SPF + DKIM + DMARC) →
   `wrangler secret put RESEND_API_KEY` y `CONTACT_TO`.
   *Alternativa nativa a evaluar*: **Cloudflare Email Service** (Email Sending desde Workers)
   para eliminar el tercero.
4. **Registro de mensajes en D1** (trazabilidad): tabla `contacts(id, name, email, message,
   ip_hash, created_at)` con prepared statements; retención limitada (RGPD) y sin PII innecesaria.
5. **Confirmación al remitente** (autoresponder) + plantilla de email con la marca.
6. **Pruebas**: suite manual (200/422/403/405/429) + Turnstile real en preview.

## Fase 2 — Chatbot «AZTYX Assist» (Workers AI + RAG)

**Objetivo:** responder 24/7 cualquier duda de un cliente potencial (servicios, módulos, plazos
orientativos, privacidad, stack, el caso Taberna La Manuela) en ES/EN, y **derivar al formulario**
cuando haya intención de contratar. Todo dentro del ecosistema Cloudflare: cero proveedores extra.

### Arquitectura

```
Widget (isla vanilla, streaming SSE)
  → POST /api/chat  (Worker, rate-limit + Turnstile invisible)
      → Vectorize: top-k chunks de la base de conocimiento   [RAG]
      → Workers AI: @cf/meta/llama-3.3-70b-instruct-fp8-fast [generación]
  ← respuesta en streaming (SSE) + fuentes
```

### Pasos

1. **Base de conocimiento** (`kb/`): trocear `PORTFOLIO-CAPACIDADES.md` + servicios + FAQ +
   caso Manuela + política de precios orientativos en chunks de 300–500 tokens (markdown).
2. **Índice vectorial**:
   - `wrangler vectorize create aztyx-kb --dimensions=1024 --metric=cosine`
   - Embeddings con `@cf/baai/bge-m3` (multilingüe ES/EN — clave para nuestro caso).
   - Script de ingesta (Worker o local via API) que sube chunks + metadatos (sección, url).
   - *Alternativa gestionada*: **AutoRAG** de Cloudflare (indexado automático desde R2) si se
     prefiere menos mantenimiento; empezar manual da más control de coste y chunking.
3. **Endpoint `POST /api/chat`** (mismo patrón que `/api/contact`):
   - Validación whitelist + límite de longitud + historial truncado (últimos 6 turnos).
   - Rate-limit KV por IP+sesión (más estricto que el formulario: p. ej. 20 msg/10 min).
   - Retrieve top-5 de Vectorize → prompt de sistema con **tono de marca AZTYX** y guardrails.
   - Generación con `@cf/meta/llama-3.3-70b-instruct-fp8-fast` en **streaming** (SSE).
     Fallback económico: `@cf/meta/llama-3.1-8b-instruct-fast`.
4. **Guardrails (en el prompt de sistema + post-filtro)**:
   - Solo temas del negocio; nunca inventar precios cerrados (rangos orientativos + CTA).
   - Si hay intención de contratación o duda compleja → invitar al formulario/email.
   - No revelar datos personales; responder en el idioma del usuario (ES/EN).
5. **Widget**: botón flotante (esquina) → panel de chat isla vanilla, streaming token a token,
   historial en `sessionStorage`, accesible (focus trap, `aria-live`), `prefers-reduced-motion`,
   estética Spec-Sheet (mono, papel/tinta/ultramar).
6. **Control de coste**: presupuesto Workers AI (neuronas/día) + tope de tokens por respuesta
   (~512) + caché KV de preguntas frecuentes (hash de la pregunta normalizada).
7. **Telemetría y mejora**: log de preguntas SIN PII en D1 → detectar huecos del KB; batería de
   ~20 preguntas de evaluación antes de publicar (precisión + tono + guardrails).

### Coste estimado
Capa gratuita de Workers AI (≈10k neuronas/día) + Vectorize free tier: suficiente para el
tráfico inicial del portfolio. El chatbot **es a la vez una feature y una demo vendible** a
clientes (soporte 24/7 para sus negocios).

## Fase 3 — Extras (opcional)

- Página `/cv` imprimible reutilizando `Trayectoria.astro` + datos ya presentes en i18n
  (el componente se conservó fuera del flujo principal).
- Analítica first-party propia (endpoint + D1) mostrada en el admin — y conectar el contador
  de "señales" del showroom a datos reales.
- Cloudflare **Zaraz** para píxeles/CAPI server-side cuando haya campañas (martech).
- Skills matrix como página /stack para perfiles técnicos (componente conservado).
