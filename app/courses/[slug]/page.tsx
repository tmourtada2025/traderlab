import Link from "next/link";
import { notFound } from "next/navigation";
import { COURSES, getCourseBySlug } from "@/lib/courses";
import { SITE, whatsappLink, reserveMessage } from "@/lib/site";

export function generateStaticParams() {
  return COURSES.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const course = getCourseBySlug(params.slug);
  if (!course) return { title: "Course — TraderLab" };
  return {
    title: `${course.title} — TraderLab`,
    description: course.tagline,
  };
}

export default function CoursePage({ params }: { params: { slug: string } }) {
  const course = getCourseBySlug(params.slug);
  if (!course) notFound();

  const reserveUrl = whatsappLink(reserveMessage(course.title));

  return (
    <>
      {/* HEADER */}
      <section className="border-b border-ink/10">
        <div className="mx-auto max-w-7xl px-6 pt-12 pb-16 md:pt-16 md:pb-20">
          <Link
            href="/#courses"
            className="text-xs font-mono uppercase tracking-widest2 text-muted hover:text-ink transition-colors inline-flex items-center gap-2 mb-12"
          >
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" aria-hidden>
              <path d="M12 4H1M5 1L1 4l4 3" stroke="currentColor" strokeWidth="1" />
            </svg>
            All courses
          </Link>

          <div className="grid md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-9">
              <div className="text-[10px] font-mono uppercase tracking-widest2 text-muted mb-6">
                {course.levelLabel}
              </div>
              <h1 className="font-display text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.98] tracking-tight">
                {course.title}
              </h1>
              <p className="font-display italic text-2xl md:text-3xl text-muted mt-6 max-w-3xl leading-tight">
                {course.tagline}
              </p>
            </div>
            <div className="md:col-span-3">
              <div className="border-l-2 border-ink pl-5">
                <div className="text-[10px] font-mono uppercase tracking-widest2 text-muted mb-2">
                  Tuition
                </div>
                <div className="font-display text-5xl numeric">
                  ${course.priceUsd}
                </div>
                {course.priceNote && (
                  <p className="text-xs text-muted mt-3 leading-relaxed">{course.priceNote}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* META BAR */}
      <section className="border-b border-ink/10 bg-ink text-paper">
        <div className="mx-auto max-w-7xl px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
          <div>
            <div className="text-[10px] font-mono uppercase tracking-widest2 text-paper/50 mb-1">
              Duration
            </div>
            <div>{course.duration}</div>
          </div>
          <div>
            <div className="text-[10px] font-mono uppercase tracking-widest2 text-paper/50 mb-1">
              Schedule
            </div>
            <div>{SITE.schedule.full}</div>
          </div>
          <div>
            <div className="text-[10px] font-mono uppercase tracking-widest2 text-paper/50 mb-1">
              Format
            </div>
            <div>Live · In-person</div>
          </div>
          <div>
            <div className="text-[10px] font-mono uppercase tracking-widest2 text-paper/50 mb-1">
              Cohort
            </div>
            <div>20 seats max · 10 to start</div>
          </div>
        </div>
      </section>

      {/* DESCRIPTION + CURRICULUM */}
      <section className="border-b border-ink/10">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-5">
              <div className="text-[10px] font-mono uppercase tracking-widest2 text-muted mb-4">
                Overview
              </div>
              <p className="text-lg leading-relaxed">{course.description}</p>
              <div className="mt-10 pt-6 border-t border-ink/10">
                <div className="text-[10px] font-mono uppercase tracking-widest2 text-muted mb-2">
                  Prerequisites
                </div>
                <p className="text-sm">{course.prerequisites}</p>
              </div>
            </div>

            <div className="md:col-span-7">
              <div className="text-[10px] font-mono uppercase tracking-widest2 text-muted mb-4">
                What you&apos;ll learn
              </div>
              <ol className="space-y-1">
                {course.curriculum.map((item, i) => (
                  <li
                    key={i}
                    className="grid grid-cols-[auto_1fr] gap-6 py-4 border-b border-ink/10 last:border-0"
                  >
                    <span className="font-mono text-xs text-accent numeric pt-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-base leading-relaxed">{item}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="border-b border-ink/10">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <div className="text-[10px] font-mono uppercase tracking-widest2 text-muted mb-4">
            What&apos;s included
          </div>
          <h2 className="font-display text-4xl md:text-5xl leading-[0.95] mb-12 max-w-3xl">
            Everything you need to leave with a working process.
          </h2>
          <div className="grid md:grid-cols-3 gap-px bg-ink/15">
            {[
              {
                t: "Certificate of attendance",
                d: "Issued upon completion of the course. Recognized across the TraderLab curriculum.",
              },
              {
                t: "Lifetime LMS access",
                d: "Free coupon to our learning platform with ebooks, templates, and pattern checklists.",
              },
              {
                t: "Live MT4/MT5 demos",
                d: "Real-time platform walkthroughs. You'll trade alongside the instructor in demo accounts.",
              },
            ].map((d) => (
              <div key={d.t} className="bg-paper p-8">
                <h3 className="font-display text-xl mb-3">{d.t}</h3>
                <p className="text-sm text-muted leading-relaxed">{d.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESERVE CTA */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <div className="bg-ink text-paper p-10 md:p-16">
            <div className="grid md:grid-cols-12 gap-8 items-end">
              <div className="md:col-span-8">
                <div className="text-[10px] font-mono uppercase tracking-widest2 text-paper/50 mb-4">
                  Reserve your seat
                </div>
                <h2 className="font-display text-4xl md:text-5xl leading-[0.95] mb-6">
                  Twenty seats.<br />
                  <span className="italic font-light">First come, first confirmed.</span>
                </h2>
                <p className="text-paper/70 max-w-xl leading-relaxed">
                  Tap below to message us on WhatsApp. We&apos;ll confirm seat availability and send a
                  Whish payment link. Your seat is confirmed once payment clears.
                </p>
              </div>
              <div className="md:col-span-4 md:text-right">
                <a
                  href={reserveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-sm border border-paper px-6 py-4 hover:bg-paper hover:text-ink transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.002-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413"/>
                  </svg>
                  Reserve via WhatsApp
                </a>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-paper/10 grid grid-cols-2 md:grid-cols-3 gap-6 text-sm">
              <div>
                <div className="text-[10px] font-mono uppercase tracking-widest2 text-paper/50 mb-1">
                  Location
                </div>
                <div>{SITE.location.full}</div>
              </div>
              <div>
                <div className="text-[10px] font-mono uppercase tracking-widest2 text-paper/50 mb-1">
                  Start date
                </div>
                <div>TBD — confirmed once 10 traders commit</div>
              </div>
              <div>
                <div className="text-[10px] font-mono uppercase tracking-widest2 text-paper/50 mb-1">
                  Refund policy
                </div>
                <div>Non-refundable · Deferral available</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
