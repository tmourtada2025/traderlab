import Link from "next/link";
import { SITE, whatsappLink, GENERAL_INQUIRY_MSG } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 mt-20">
      <div className="mx-auto max-w-7xl px-6 py-12 grid md:grid-cols-3 gap-10">
        <div>
          <div className="font-display text-2xl mb-3">TraderLab</div>
          <p className="text-sm text-muted leading-relaxed max-w-xs">
            Live forex education for traders who treat the market as a craft, not a lottery.
          </p>
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-widest2 text-muted mb-4">Visit</div>
          <p className="text-sm leading-relaxed">
            {SITE.location.line1}<br />
            {SITE.location.line2}<br />
            {SITE.location.country}
          </p>
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-widest2 text-muted mb-4">Contact</div>
          <div className="flex flex-col gap-2 text-sm">
            <a
              href={whatsappLink(GENERAL_INQUIRY_MSG)}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline w-fit"
            >
              WhatsApp · {SITE.whatsappDisplay}
            </a>
            <Link href="/" className="link-underline w-fit">Home</Link>
            <Link href="/#courses" className="link-underline w-fit">Courses</Link>
            <Link href="/about" className="link-underline w-fit">About</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-ink/10">
        <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between text-xs text-muted">
          <span>© {new Date().getFullYear()} TraderLab</span>
          <span className="font-mono">{SITE.schedule.short}</span>
        </div>
      </div>
    </footer>
  );
}
