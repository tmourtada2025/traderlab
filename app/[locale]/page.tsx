import Link from "next/link";
import { isLocale, localePath, type Locale } from "@/lib/i18n";
import { getDict } from "@/lib/dictionaries";
import { COURSES } from "@/lib/courses";
import { whatsappLink } from "@/lib/site";
import CourseCard from "@/components/CourseCard";
import { notFound } from "next/navigation";

export default function HomePage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale: Locale = params.locale;
  const dict = getDict(locale);
  const home = localePath(locale, "/");
  const coursesHref = `${home === "/" ? "" : home}#courses`;

  return (
    <>
      {/* HERO */}
      <section className="border-b border-ink/10">
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-20 md:pt-24 md:pb-28">
          <div className="grid md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-9">
              <div className="text-[10px] font-mono uppercase tracking-widest2 text-muted mb-8 rise rise-1">
                {dict.hero.kicker}
              </div>
              <h1 className="font-display text-[clamp(3rem,9vw,7.5rem)] leading-[0.95] tracking-tight rise rise-2">
                {dict.hero.line1}<br />
                <span className="italic font-light">{dict.hero.line2Italic}</span>,<br />
                {dict.hero.line3}
              </h1>
            </div>
            <div className="md:col-span-3 rise rise-3">
              <p className="text-sm leading-relaxed text-ink/80 max-w-sm">
                {dict.hero.intro}
              </p>
              <Link
                href={coursesHref}
                className="mt-6 inline-flex items-center gap-3 text-sm border border-ink px-5 py-3 hover:bg-ink hover:text-paper transition-colors"
              >
                {dict.cta.seeCurriculum}
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden className="icon-arrow-flip">
                  <path d="M0 5h13M9 1l4 4-4 4" stroke="currentColor" strokeWidth="1" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="border-b border-ink/10 bg-ink text-paper overflow-hidden">
        <div className="flex whitespace-nowrap py-4 marquee-track">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center shrink-0">
              {dict.marquee.map((item, j) => (
                <span key={j} className="flex items-center px-8 text-sm font-mono uppercase tracking-widest2">
                  {item}
                  <span className="ml-8 text-accent">◆</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* COURSES */}
      <section id="courses" className="border-b border-ink/10">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-8 mb-14">
            <div className="md:col-span-4">
              <div className="text-[10px] font-mono uppercase tracking-widest2 text-muted mb-3">
                {dict.curriculumSection.kicker}
              </div>
              <h2 className="font-display text-5xl md:text-6xl leading-[0.98]">
                {dict.curriculumSection.title1}<br />{dict.curriculumSection.title2}
              </h2>
            </div>
            <div className="md:col-span-7 md:col-start-6 self-end">
              <p className="text-base leading-relaxed text-ink/80">
                {dict.curriculumSection.intro}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-ink/15">
            {COURSES.map((course) => (
              <div key={course.slug} className="bg-paper">
                <CourseCard course={course} locale={locale} dict={dict} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="border-b border-ink/10">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="text-[10px] font-mono uppercase tracking-widest2 text-muted mb-3">
            {dict.enrollSteps.kicker}
          </div>
          <h2 className="font-display text-5xl md:text-6xl leading-[0.98] mb-16 max-w-3xl">
            {dict.enrollSteps.title}
          </h2>

          <div className="grid md:grid-cols-4 gap-px bg-ink/15">
            {dict.enrollSteps.steps.map((s) => (
              <div key={s.n} className="bg-paper p-8">
                <div className="font-mono text-xs text-accent mb-4">{s.n}</div>
                <h3 className="font-display text-2xl mb-3">{s.t}</h3>
                <p className="text-sm text-muted leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="bg-ink text-paper p-10 md:p-16 grid md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-8">
              <div className="text-[10px] font-mono uppercase tracking-widest2 text-paper/60 mb-4">
                {dict.ctaBlock.kicker}
              </div>
              <h2 className="font-display text-5xl md:text-6xl leading-[0.98]">
                {dict.ctaBlock.title1}<br />
                <span className="italic font-light">{dict.ctaBlock.title2Italic}</span>
              </h2>
            </div>
            <div className="md:col-span-4 md:text-right rtl:md:text-left">
              <a
                href={whatsappLink(dict.whatsapp.generalInquiry)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-sm border border-paper px-6 py-4 hover:bg-paper hover:text-ink transition-colors"
              >
                {dict.cta.reserveSeat}
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden className="icon-arrow-flip">
                  <path d="M0 5h13M9 1l4 4-4 4" stroke="currentColor" strokeWidth="1" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
