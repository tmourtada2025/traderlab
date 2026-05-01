"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n";

type Props = {
  current: Locale;
};

/**
 * Toggle between AR and EN. Strategy:
 * - Read the *current internal pathname* (e.g. /ar/about or /en/about) from usePathname.
 *   On user-facing AR routes, Next sees the rewritten internal path /ar/about.
 *   On EN routes, the path is already /en/about.
 * - Strip the locale segment, then prepend the OTHER locale's prefix.
 *   For Arabic (default), drop the prefix entirely so URL is /about, not /ar/about.
 */
export default function LocaleSwitcher({ current }: Props) {
  const rawPath = usePathname() || "/";

  // Strip leading /ar or /en if present
  let bare = rawPath;
  if (bare === "/ar" || bare === "/en") {
    bare = "/";
  } else if (bare.startsWith("/ar/")) {
    bare = bare.slice(3);
  } else if (bare.startsWith("/en/")) {
    bare = bare.slice(3);
  }

  const otherLocale: Locale = current === "ar" ? "en" : "ar";
  const otherLabel = current === "ar" ? "EN" : "عر";

  // Build target URL
  let target: string;
  if (otherLocale === "ar") {
    // AR has no prefix
    target = bare;
  } else {
    // EN gets /en prefix
    target = bare === "/" ? "/en" : `/en${bare}`;
  }

  return (
    <Link
      href={target}
      hrefLang={otherLocale}
      className="text-xs font-mono uppercase tracking-widest2 border border-ink/30 px-3 py-2 hover:bg-ink hover:text-paper transition-colors"
      aria-label={`Switch to ${otherLocale.toUpperCase()}`}
    >
      {otherLabel}
    </Link>
  );
}
