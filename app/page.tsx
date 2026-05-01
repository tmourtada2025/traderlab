import Link from "next/link";
import { COURSES } from "@/lib/courses";
import { whatsappLink, GENERAL_INQUIRY_MSG } from "@/lib/site";
import CourseCard from "@/components/CourseCard";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="border-b border-ink/10">
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-20 md:pt-24 md:pb-28">
          <div className="grid md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-9">
              <div className="text-[10px] font-mono uppercase tracking-widest2 text-muted mb-8 rise rise-1">
                Live · In-Person · Choueifat
              </div>
              <h1 className="font-display text-[clamp(3rem,9vw,7.5rem)] leading-[0.95] tracking-tight rise rise-2">
                Trade with<br />
                <span className="italic font-light">structure</span>,<br />
                not luck.
              </h1>
            </div>
            <div className="md:col-span-3 rise rise-3">
              <p className="text-sm leading-relaxed text-ink/80 max-w-sm">
                A live, in-person forex curriculum built for traders who want to operate
                with discipline, repeatable process, and actual edge.
              </p>
              <Link
                href="#courses"
                className="mt-6 inline-flex items-center gap-3 text-sm border border-ink px-5 py-3 hover:bg-ink hover:text-paper transition-colors"
              >
                See the curriculum
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden>
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
              {[
                "Live in-person sessions",
                "MWF · 18:00–20:00",
                "Capped at 20 students",
                "Spot Mall, Choueifat",
                "Certificate of attendance",
                "Lifetime LMS access",
              ].map((item, j) => (
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
                Curriculum
              </div>
              <h2 className="font-display text-5xl md:text-6xl leading-[0.95]">
                Four courses,<br />one progression.
              </h2>
            </div>
            <div className="md:col-span-7 md:col-start-6 self-end">
              <p className="text-base leading-relaxed text-ink/80">
                Each course can be taken on its own, but the sequence is intentional.
                Foundations first, then chart-reading, then a system, then the discipline
                to run that system without breaking it.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-ink/15">
            {COURSES.map((course) => (
              <div key={course.slug} className="bg-paper">
                <CourseCard course={course} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="border-b border-ink/10">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="text-[10px] font-mono uppercase tracking-widest2 text-muted mb-3">
            How enrollment works
          </div>
          <h2 className="font-display text-5xl md:text-6xl leading-[0.95] mb-16 max-w-3xl">
            Four steps. No friction.
          </h2>

          <div className="grid md:grid-cols-4 gap-px bg-ink/15">
            {[
              { n: "01", t: "Pick a course", d: "Review the curriculum and confirm the level fits where you are." },
              { n: "02", t: "Message us", d: "Tap the WhatsApp button. We'll confirm seat availability and answer questions." },
              { n: "03", t: "Pay via Whish", d: "We send a Whish payment link. Once payment clears, your seat is confirmed." },
              { n: "04", t: "Show up & learn", d: "Live sessions in Choueifat. Mandatory attendance. No recordings." },
            ].map((s) => (
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
                Cohort 01 — Forming now
              </div>
              <h2 className="font-display text-5xl md:text-6xl leading-[0.95]">
                The next cohort runs<br />
                <span className="italic font-light">when 10 traders commit.</span>
              </h2>
            </div>
            <div className="md:col-span-4 md:text-right">
              <a
                href={whatsappLink(GENERAL_INQUIRY_MSG)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-sm border border-paper px-6 py-4 hover:bg-paper hover:text-ink transition-colors"
              >
                Reserve your seat
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden>
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
