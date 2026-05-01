import Link from "next/link";
import { isLocale, localePath, type Locale } from "@/lib/i18n";
import { getDict } from "@/lib/dictionaries";
import { PROGRAM, pick } from "@/lib/courses";
import { whatsappLink, SITE } from "@/lib/site";
import HeroChart from "@/components/HeroChart";
import { notFound } from "next/navigation";

export default function HomePage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale: Locale = params.locale;
  const dict = getDict(locale);
  const programHref = localePath(locale, "/the-program");

  return (
    <>
      {/* HERO */}
      <section className="border-b border-border/60 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-20 md:pt-20 md:pb-24">
          <div className="grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-7 relative z-10">
              <div className="text-[10px] font-mono uppercase tracking-widest2 text-accent mb-6 rise rise-1">
                {dict.hero.kicker}
              </div>
              <h1 className="font-display text-[clamp(2.75rem,7vw,5.5rem)] leading-[1.02] tracking-tight font-bold rise rise-2">
                {dict.hero.line1}{" "}
                <span className="text-accent">{dict.hero.line2Accent}</span>
                {locale === "ar" ? "،" : ","}
                <br />
                {dict.hero.line3}
              </h1>
              <p className="text-base md:text-lg leading-relaxed text-muted max-w-xl mt-6 rise rise-3">
                {dict.hero.intro}
              </p>
              <div className="mt-8 flex items-center gap-4 rise rise-4">
                <Link
                  href={programHref}
                  className="inline-flex items-center gap-2 text-sm bg-accent text-bg font-semibold px-6 py-3.5 hover:bg-accent/90 transition-colors rounded-sm"
                >
                  {dict.hero.cta}
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden className="icon-arrow-flip">
                    <path d="M0 5h13M9 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </Link>
                <a
                  href={whatsappLink(dict.whatsapp.generalInquiry)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted hover:text-ink transition-colors px-3 py-3.5 link-underline"
                >
                  {dict.cta.messageUs}
                </a>
              </div>
            </div>
            <div className="md:col-span-5 rise rise-3 relative">
              <HeroChart className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="border-b border-border/60 bg-bg2/50 overflow-hidden">
        <div className="flex whitespace-nowrap py-3.5 marquee-track">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center shrink-0">
              {dict.marquee.map((item, j) => (
                <span key={j} className="flex items-center px-8 text-xs font-mono uppercase tracking-widest2 text-muted">
                  {item}
                  <span className="ml-8 text-accent">◆</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* PROGRAM STATS */}
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            <div className="stat-card">
              <div className="font-display text-3xl md:text-4xl font-bold numeric text-ink">24h</div>
              <div className="text-xs text-muted mt-1.5">{dict.programStats.liveHours}</div>
            </div>
            <div className="stat-card">
              <div className="font-display text-3xl md:text-4xl font-bold numeric text-ink">12</div>
              <div className="text-xs text-muted mt-1.5">{dict.programStats.sessions}</div>
            </div>
            <div className="stat-card">
              <div className="font-display text-3xl md:text-4xl font-bold numeric text-accent">$500</div>
              <div className="text-xs text-muted mt-1.5">{dict.programStats.perSeat}</div>
            </div>
            <div className="stat-card">
              <div className="font-display text-3xl md:text-4xl font-bold text-ink whitespace-nowrap">
                <span className="numeric">4w</span>
                <span className="text-muted text-2xl mx-2">·</span>
                <span className="text-2xl numeric">MWF</span>
              </div>
              <div className="text-xs text-muted mt-1.5">{dict.programStats.cohort}</div>
            </div>
          </div>
        </div>
      </section>

      {/* WEEKS PREVIEW */}
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-8 mb-14">
            <div className="md:col-span-5">
              <div className="text-[10px] font-mono uppercase tracking-widest2 text-accent mb-3">
                {dict.weeksPreview.kicker}
              </div>
              <h2 className="font-display text-4xl md:text-5xl leading-[1.05] font-bold">
                {dict.weeksPreview.title1}
                <br />
                <span className="text-accent">{dict.weeksPreview.title2Accent}</span>
              </h2>
            </div>
            <div className="md:col-span-6 md:col-start-7 self-end">
              <p className="text-base leading-relaxed text-muted">
                {dict.weeksPreview.intro}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {dict.weeksPreview.weeks.map((w, i) => {
              const accentColors = ["#1D9E75", "#378ADD", "#7F77DD", "#F59E0B"];
              return (
                <div
                  key={w.n}
                  className="session-card p-7"
                  style={{ ["--cat-color" as any]: accentColors[i] }}
                >
                  <div className="text-[10px] font-mono uppercase tracking-widest2 text-dim mb-4">{w.n}</div>
                  <h3 className="font-display text-xl mb-3 font-semibold leading-snug">{w.t}</h3>
                  <p className="text-sm text-muted leading-relaxed">{w.d}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link
              href={programHref}
              className="inline-flex items-center gap-2 text-sm border border-border text-ink px-6 py-3.5 hover:border-accent hover:text-accent transition-colors rounded-sm"
            >
              {dict.cta.seeFullProgram}
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden className="icon-arrow-flip">
                <path d="M0 5h13M9 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* HOW ENROLLMENT WORKS */}
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="text-[10px] font-mono uppercase tracking-widest2 text-accent mb-3">
            {dict.enrollSteps.kicker}
          </div>
          <h2 className="font-display text-4xl md:text-5xl leading-[1.05] font-bold mb-14 max-w-3xl">
            {dict.enrollSteps.title}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {dict.enrollSteps.steps.map((s) => (
              <div key={s.n} className="bg-bg2/40 border border-border p-7 rounded-sm">
                <div className="font-mono text-xs text-accent mb-4">{s.n}</div>
                <h3 className="font-display text-lg mb-3 font-semibold">{s.t}</h3>
                <p className="text-sm text-muted leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <div className="bg-bg2 border border-border p-10 md:p-14 grid md:grid-cols-12 gap-8 items-end rounded-sm relative overflow-hidden">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse 60% 80% at 0% 100%, rgba(29,158,117,0.18), transparent 70%)" }}
            />
            <div className="md:col-span-8 relative">
              <div className="text-[10px] font-mono uppercase tracking-widest2 text-accent mb-4">
                {dict.homeCtaBlock.kicker}
              </div>
              <h2 className="font-display text-4xl md:text-5xl leading-[1.05] font-bold">
                {dict.homeCtaBlock.title1}
                <br />
                <span className="text-accent">{dict.homeCtaBlock.title2Accent}</span>
              </h2>
              <p className="text-muted mt-5 max-w-xl leading-relaxed">{dict.homeCtaBlock.body}</p>
            </div>
            <div className="md:col-span-4 md:text-right rtl:md:text-left relative">
              <a
                href={whatsappLink(dict.whatsapp.reserveProgram)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm bg-accent text-bg font-semibold px-6 py-4 hover:bg-accent/90 transition-colors rounded-sm"
              >
                {dict.cta.reserveSeat}
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden className="icon-arrow-flip">
                  <path d="M0 5h13M9 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
