// Locale configuration. Default = Arabic.
// English lives at /en/...

export const LOCALES = ["ar", "en"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "ar";

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

/**
 * Direction for HTML dir attribute.
 */
export function dirFor(locale: Locale): "rtl" | "ltr" {
  return locale === "ar" ? "rtl" : "ltr";
}

/**
 * Build a localized path. Arabic (default) has no prefix.
 *   localePath("ar", "/about")  -> "/about"
 *   localePath("en", "/about")  -> "/en/about"
 *   localePath("ar", "/")       -> "/"
 *   localePath("en", "/")       -> "/en"
 */
export function localePath(locale: Locale, path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (locale === DEFAULT_LOCALE) return clean === "/" ? "/" : clean;
  return clean === "/" ? `/${locale}` : `/${locale}${clean}`;
}
