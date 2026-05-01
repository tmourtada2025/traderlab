import Link from "next/link";
import { whatsappLink, GENERAL_INQUIRY_MSG } from "@/lib/site";

export const metadata = {
  title: "About — TraderLab",
  description:
    "Our mission: help new and existing traders build real skill, not false confidence.",
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-ink/10">
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-20 md:pt-24 md:pb-28">
          <div className="text-[10px] font-mono uppercase tracking-widest2 text-muted mb-8">
            About TraderLab
          </div>
          <h1 className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.95] tracking-tight max-w-5xl">
            Skill is built<br />
            <span className="italic font-light">on purpose.</span>
          </h1>
        </div>
      </section>

      <section className="border-b border-ink/10">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-5">
              <div className="text-[10px] font-mono uppercase tracking-widest2 text-muted mb-4">
                Mission
              </div>
              <h2 className="font-display text-4xl md:text-5xl leading-[0.95]">
                Help traders trade better.
              </h2>
            </div>
            <div className="md:col-span-7">
              <p className="text-lg leading-relaxed mb-6">
                Most traders lose. Not because the market is too hard, but because they were
                taught it was easy. They were given indicators without context, signals without
                structure, and confidence without competence.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                TraderLab exists to close that gap. We teach forex the way it should be taught:
                live, in-person, with real accountability. Small cohorts. Mandatory attendance.
                A curriculum that moves from fundamentals to a working system.
              </p>
              <p className="text-lg leading-relaxed">
                Our students leave with three things: a clear framework for reading the market,
                a documented process for entering and exiting trades, and the discipline to
                follow that process when it matters.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-ink/10">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <div className="text-[10px] font-mono uppercase tracking-widest2 text-muted mb-4">
            How we teach
          </div>
          <h2 className="font-display text-4xl md:text-5xl leading-[0.95] mb-14 max-w-3xl">
            Four principles. Held without exception.
          </h2>

          <div className="grid md:grid-cols-2 gap-px bg-ink/15">
            <Principle
              n="01"
              t="Live, in-person only"
              d="No recordings. No replays. If you're not in the room, you're not in the cohort. This is how attention is enforced."
            />
            <Principle
              n="02"
              t="Cohorts capped at 20"
              d="Every student gets answered. Every chart gets reviewed. The economics work because the room is small."
            />
            <Principle
              n="03"
              t="Process over prediction"
              d="We don't teach you to call tops and bottoms. We teach you to define a setup, size a position, and exit on rules."
            />
            <Principle
              n="04"
              t="Real markets, real platforms"
              d="MT4/MT5 walkthroughs in every session. Demo accounts running alongside. You learn by doing, not by watching."
            />
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <div className="bg-ink text-paper p-10 md:p-16 grid md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-8">
              <div className="text-[10px] font-mono uppercase tracking-widest2 text-paper/60 mb-4">
                Where we are
              </div>
              <h2 className="font-display text-4xl md:text-5xl leading-[0.95]">
                Spot Mall, Choueifat<br />
                <span className="italic font-light">1st Floor.</span>
              </h2>
              <p className="text-paper/70 mt-6 max-w-xl leading-relaxed">
                A dedicated classroom built for trading instruction. Whiteboard, projector,
                live MT4/MT5 demonstrations. Bring your laptop.
              </p>
            </div>
            <div className="md:col-span-4 md:text-right space-y-3">
              <Link
                href="/#courses"
                className="inline-flex items-center gap-3 text-sm border border-paper px-6 py-4 hover:bg-paper hover:text-ink transition-colors w-full md:w-auto justify-center"
              >
                Browse courses
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden>
                  <path d="M0 5h13M9 1l4 4-4 4" stroke="currentColor" strokeWidth="1" />
                </svg>
              </Link>
              <a
                href={whatsappLink(GENERAL_INQUIRY_MSG)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-sm bg-paper text-ink px-6 py-4 hover:opacity-90 transition-opacity w-full md:w-auto justify-center"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.002-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413"/>
                </svg>
                Message us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Principle({ n, t, d }: { n: string; t: string; d: string }) {
  return (
    <div className="bg-paper p-10">
      <div className="font-mono text-xs text-accent mb-4">{n}</div>
      <h3 className="font-display text-2xl mb-4">{t}</h3>
      <p className="text-sm text-muted leading-relaxed">{d}</p>
    </div>
  );
}
