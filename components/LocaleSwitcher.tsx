"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n";

type Props = { current: Locale };

export default function LocaleSwitcher({ current }: Props) {
  const rawPath = usePathname() || "/";

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

  let target: string;
  if (otherLocale === "ar") {
    target = bare;
  } else {
    target = bare === "/" ? "/en" : `/en${bare}`;
  }

  return (
    <Link
      href={target}
      hrefLang={otherLocale}
      className="text-xs font-mono uppercase tracking-widest2 border border-border px-3 py-2 text-muted hover:text-ink hover:border-accent transition-colors rounded-sm"
      aria-label={`Switch to ${otherLocale.toUpperCase()}`}
    >
      {otherLabel}
    </Link>
  );
}
