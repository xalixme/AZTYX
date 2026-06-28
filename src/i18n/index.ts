// Motor i18n propio: diccionarios estáticos + helpers de ruta para el toggle ES/EN.
import { es } from "./es";
import { en } from "./en";

export type Lang = "es" | "en";
export const LANGS: Lang[] = ["es", "en"];
export const DEFAULT_LANG: Lang = "es";

// "Afloja" los literales de es.ts a sus tipos base para que en.ts (con otros
// textos) encaje en el mismo tipo. Mantiene la estructura como contrato compartido.
type Loosen<T> = T extends readonly (infer U)[]
  ? readonly Loosen<U>[]
  : T extends object
    ? { readonly [K in keyof T]: Loosen<T[K]> }
    : T extends string
      ? string
      : T extends number
        ? number
        : T extends boolean
          ? boolean
          : T;

export type Dict = Loosen<typeof es>;

const dicts: Record<Lang, Dict> = { es, en };

/** Devuelve el diccionario del idioma indicado. */
export function getDict(lang: Lang): Dict {
  return dicts[lang] ?? dicts[DEFAULT_LANG];
}

/** Deduce el idioma a partir de la URL (prefijo /en → en, resto → es). */
export function getLangFromUrl(url: URL): Lang {
  const seg = url.pathname.split("/").filter(Boolean)[0];
  return seg === "en" ? "en" : "es";
}

/**
 * Calcula la ruta equivalente en el idioma destino, preservando el resto del path.
 * ES vive sin prefijo ("/"), EN bajo "/en/".
 */
export function altLangPath(pathname: string, target: Lang): string {
  const stripped = pathname.replace(/^\/en(?=\/|$)/, "") || "/";
  if (target === "en") return stripped === "/" ? "/en/" : `/en${stripped}`;
  return stripped;
}
