import Link from "next/link";
import { localePath, type Locale } from "@/lib/i18n";
import type { Dict } from "@/lib/dictionaries";
import { SITE, whatsappLink } from "@/lib/site";

type Props = {
  locale: Locale;
  dict: Dict;
};

export default function Footer({ locale, dict }: Props) {
  const home = localePath(locale, "/");
  const courses = `${home === "/" ? "" : home}#courses`;
  const about = localePath(locale, "/about");

  return (
    <footer className="border-t border-ink/10 mt-20">
      <div className="mx-auto max-w-7xl px-6 py-12 grid md:grid-cols-3 gap-10">
        <div>
          <div className="font-display text-2xl mb-3">TraderLab</div>
          <p className="text-sm text-muted leading-relaxed max-w-xs">
            {dict.footer.tagline}
          </p>
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-widest2 text-muted mb-4 font-mono">
            {dict.footer.visitTitle}
          </div>
          <p className="text-sm leading-relaxed">
            {locale === "ar" ? (
              <>
                سبوت مول، الشويفات<br />
                الطابق الأول<br />
                لبنان
              </>
            ) : (
              <>
                Spot Mall, Choueifat<br />
                1st Floor<br />
                Lebanon
              </>
            )}
          </p>
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-widest2 text-muted mb-4 font-mono">
            {dict.footer.contactTitle}
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <a
              href={whatsappLink(dict.whatsapp.generalInquiry)}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline w-fit"
            >
              <span className="numeric">{dict.footer.whatsappLine} · {SITE.whatsappDisplay}</span>
            </a>
            <Link href={home} className="link-underline w-fit">{dict.nav.home}</Link>
            <Link href={courses} className="link-underline w-fit">{dict.nav.courses}</Link>
            <Link href={about} className="link-underline w-fit">{dict.nav.about}</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-ink/10">
        <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between text-xs text-muted">
          <span className="numeric">© {new Date().getFullYear()} {dict.footer.copyright}</span>
          <span className="font-mono">{SITE.scheduleShort}</span>
        </div>
      </div>
    </footer>
  );
}
