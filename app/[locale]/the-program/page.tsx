import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, localePath, type Locale } from "@/lib/i18n";
import { getDict } from "@/lib/dictionaries";
import { PROGRAM, WEEKS, pick } from "@/lib/courses";
import { SITE, whatsappLink } from "@/lib/site";
import SessionCard from "@/components/SessionCard";

export function generateMetadata({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) return { title: "TraderLab" };
  const dict = getDict(params.locale);
  return {
    title: dict.meta.programTitle,
    description: dict.meta.programDescription,
  };
}

export default function ProgramPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale: Locale = params.locale;
  const dict = getDict(locale);
  const home = localePath(locale, "/");

  return (
    <>
      {/* HEADER */}
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-7xl px-6 pt-12 pb-16 md:pt-16 md:pb-20">
          <Link
            href={home}
            className="text-xs font-mono uppercase tracking-widest2 text-dim hover:text-accent transition-colors inline-flex items-center gap-2 mb-10"
          >
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" aria-hidden className="icon-arrow-flip">
              <path d="M12 4H1M5 1L1 4l4 3" stroke="currentColor" strokeWidth="1" />
            </svg>
            {dict.cta.backToHome}
          </Link>

          <div className="grid md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-9">
              <div className="text-[10px] font-mono uppercase tracking-widest2 text-accent mb-5">
                {dict.program.kicker}
              </div>
              <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] tracking-tight font-bold">
                {pick(PROGRAM.title, locale)}
              </h1>
              <p className="text-xl md:text-2xl text-muted mt-5 max-w-3xl leading-snug font-light">
                {pick(PROGRAM.tagline, locale)}
              </p>
            </div>
            <div className="md:col-span-3">
              <div className="border-l-2 rtl:border-l-0 rtl:border-r-2 border-accent ps-5">
                <div className="text-[10px] font-mono uppercase tracking-widest2 text-dim mb-2">
                  {dict.program.tuition}
                </div>
                <div className="font-display text-5xl numeric font-bold text-accent">
                  ${PROGRAM.priceUsd}
                </div>
                {PROGRAM.priceNote && (
                  <p className="text-xs text-muted mt-3 leading-relaxed">{pick(PROGRAM.priceNote, locale)}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* META BAR */}
      <section className="border-b border-border/60 bg-bg2/40">
        <div className="mx-auto max-w-7xl px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
          <Meta label={dict.program.duration} value={pick(PROGRAM.duration, locale)} />
          <Meta label={dict.program.schedule} value={SITE.scheduleShort} mono />
          <Meta label={dict.program.format} value={dict.program.formatValue} />
          <Meta label={dict.program.cohort} value={dict.program.cohortValue} />
        </div>
      </section>

      {/* OVERVIEW + PREREQUISITES */}
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-5">
              <div className="text-[10px] font-mono uppercase tracking-widest2 text-accent mb-4">
                {dict.program.overview}
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 leading-tight">
                {pick(PROGRAM.title, locale)}
              </h2>
              <div className="mt-8 pt-6 border-t border-border">
                <div className="text-[10px] font-mono uppercase tracking-widest2 text-dim mb-2">
                  {dict.program.prerequisites}
                </div>
                <p className="text-sm text-muted">{pick(PROGRAM.prerequisites, locale)}</p>
              </div>
            </div>
            <div className="md:col-span-7">
              <p className="text-lg leading-relaxed text-ink/90">{pick(PROGRAM.description, locale)}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CURRICULUM — 12 SESSIONS BY WEEK */}
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <div className="text-[10px] font-mono uppercase tracking-widest2 text-accent mb-3">
            {dict.program.curriculum}
          </div>
          <h2 className="font-display text-4xl md:text-5xl leading-[1.05] font-bold mb-6 max-w-3xl">
            {pick(PROGRAM.title, locale)}
          </h2>
          <p className="text-base text-muted leading-relaxed max-w-2xl mb-12">
            {dict.program.curriculumIntro}
          </p>

          {/* Category legend */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 mb-10 text-xs">
            {[
              { color: "#1D9E75", label: dict.tags.foundations },
              { color: "#378ADD", label: dict.tags.technical },
              { color: "#7F77DD", label: dict.tags.institutional },
              { color: "#F59E0B", label: dict.tags.integration },
            ].map((c) => (
              <span key={c.label} className="flex items-center gap-2 text-muted">
                <span className="w-2.5 h-2.5 rounded-sm" style={{ background: c.color }} />
                {c.label}
              </span>
            ))}
          </div>

          {/* Weeks */}
          <div className="space-y-12">
            {WEEKS.map((week) => (
              <div key={week.num}>
                <div className="text-xs font-mono uppercase tracking-widest2 text-dim mb-4 flex items-baseline gap-3">
                  <span className="text-accent">{dict.program.weekLabel(week.num)}</span>
                  <span className="text-muted/40">—</span>
                  <span>{pick(week.label, locale)}</span>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  {week.sessions.map((session) => (
                    <SessionCard key={session.num} session={session} locale={locale} dict={dict} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <div className="text-[10px] font-mono uppercase tracking-widest2 text-accent mb-4">
            {dict.program.whatsIncluded}
          </div>
          <h2 className="font-display text-3xl md:text-4xl leading-[1.05] font-bold mb-12 max-w-3xl">
            {dict.program.whatsIncludedTitle}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {dict.program.deliverables.map((d) => (
              <div key={d.t} className="bg-bg2/40 border border-border p-7 rounded-sm">
                <h3 className="font-display text-lg font-semibold mb-3">{d.t}</h3>
                <p className="text-sm text-muted leading-relaxed">{d.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESERVE CTA */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <div className="bg-bg2 border border-border p-10 md:p-14 rounded-sm relative overflow-hidden">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse 60% 80% at 0% 100%, rgba(29,158,117,0.18), transparent 70%)" }}
            />
            <div className="grid md:grid-cols-12 gap-8 items-end relative">
              <div className="md:col-span-8">
                <div className="text-[10px] font-mono uppercase tracking-widest2 text-accent mb-4">
                  {dict.program.reserveKicker}
                </div>
                <h2 className="font-display text-4xl md:text-5xl leading-[1.05] font-bold mb-6">
                  {dict.program.reserveTitle1}
                  <br />
                  <span className="text-accent">{dict.program.reserveTitle2Accent}</span>
                </h2>
                <p className="text-muted max-w-xl leading-relaxed">{dict.program.reserveBody}</p>
              </div>
              <div className="md:col-span-4 md:text-right rtl:md:text-left">
                <a
                  href={whatsappLink(dict.whatsapp.reserveProgram)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm bg-accent text-bg font-semibold px-6 py-4 hover:bg-accent/90 transition-colors rounded-sm"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.002-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413"/>
                  </svg>
                  {dict.cta.reserveViaWhatsapp}
                </a>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-border/60 grid grid-cols-2 md:grid-cols-3 gap-6 text-sm relative">
              <Meta
                label={dict.program.location}
                value={locale === "ar" ? "سبوت مول، الشويفات — الطابق الأول" : "Spot Mall, Choueifat — 1st Floor"}
              />
              <Meta label={dict.program.startDate} value={dict.program.startDateValue} />
              <Meta label={dict.program.refundPolicy} value={dict.program.refundPolicyValue} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Meta({ label, value, mono }: { label: string; value: string; mono?: boolean }) {
  return (
    <div>
      <div className="text-[10px] font-mono uppercase tracking-widest2 text-dim mb-1">{label}</div>
      <div className={mono ? "numeric font-mono text-sm text-ink" : "text-ink"}>{value}</div>
    </div>
  );
}
