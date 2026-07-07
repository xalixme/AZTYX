# AZTYX — Portfolio

Portfolio personal: **sysadmin + full-stack que envía producto real, rápido**, emparejando
criterio técnico con IA de vanguardia (Claude / agentic coding).

Dirección de diseño: **«Spec Sheet»** (estilo tipográfico internacional / Swiss) — papel hueso,
tinta, un único acento **ultramar**, tipografía grotesca + monoespaciada, retícula modular.

## Stack
- **Astro 5** + **Tailwind v3** (design tokens en `src/styles/tokens.css`).
- **Cloudflare Pages** (adaptador `@astrojs/cloudflare`). Páginas estáticas (prerender) + endpoint
  dinámico `/api/contact`.
- **i18n ES/EN por ruta** (`/` y `/en/`), View Transitions, fuentes auto-alojadas (`@fontsource`).
- **Formulario de contacto** con Cloudflare Turnstile, validación whitelist-first, rate-limit (KV
  opcional) y notificación por Resend.

## Desarrollo
```bash
npm install
npm run dev        # http://localhost:4321
npm run build
npm run preview
```

Para el formulario en local: copia `.dev.vars.example` a `.dev.vars`.

## Despliegue (Cloudflare Pages)
```bash
npm run deploy     # astro build && wrangler pages deploy ./dist
```
Configura los secretos en el dashboard o con `wrangler pages secret put`:
`TURNSTILE_SECRET`, `RESEND_API_KEY`, `CONTACT_TO`. (Opcional: binding KV `RL` para rate-limit.)

## Pendiente de personalizar
Buscar y sustituir los placeholders:
- `{{EMAIL}}` y `{{LINKEDIN}}` en `src/i18n/{es,en}.ts`.
- `{{MANUELA_URL}}` y `{{MANUELA_REPO}}` en `src/components/CasoManuela.astro`.
- `site` (dominio) en `astro.config.mjs`.
- Site key real de Turnstile (`PUBLIC_TURNSTILE_SITE_KEY`).
