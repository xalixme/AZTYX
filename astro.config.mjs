// @ts-check
import { defineConfig, envField } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import tailwindcss from "@tailwindcss/vite";

// Configuración del portfolio + CV.
// - Astro 7 (última) + adaptador Cloudflare 14.
// - Tailwind v4 vía su plugin de Vite (sustituye a @astrojs/tailwind, descontinuado).
// - output "server" + prerender en páginas de contenido → Lighthouse alto, /api dinámico.
// - i18n por ruta: ES por defecto (sin prefijo) y EN bajo /en/.
export default defineConfig({
  site: "https://aztyx.dev", // {{SITE}} — sustituir por el dominio real
  output: "server",
  adapter: cloudflare({
    platformProxy: { enabled: true }, // emula bindings (KV, vars) en local
  }),
  devToolbar: { enabled: false },
  env: {
    schema: {
      PUBLIC_TURNSTILE_SITE_KEY: envField.string({ context: 'client', access: 'public', default: '1x00000000000000000000AA' })
    }
  },

  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: { prefixDefaultLocale: false },
  },
  image: { service: { entrypoint: "astro/assets/services/noop" } },
  vite: {
    plugins: [tailwindcss()],
    ssr: { external: ["node:path", "node:fs", "node:url"] },
  },
});
