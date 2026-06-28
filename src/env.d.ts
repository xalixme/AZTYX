/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  /** Site key pública de Cloudflare Turnstile (segura en cliente). */
  readonly PUBLIC_TURNSTILE_SITE_KEY?: string;
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
