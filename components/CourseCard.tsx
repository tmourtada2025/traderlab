import Link from "next/link";
import { localePath, type Locale } from "@/lib/i18n";
import { type Course, pick } from "@/lib/courses";
import type { Dict } from "@/lib/dictionaries";

type Props = {
  course: Course;
  locale: Locale;
  dict: Dict;
};

export default function CourseCard({ course, locale, dict }: Props) {
  return (
    <Link
      href={localePath(locale, `/courses/${course.slug}`)}
      className="group block border border-ink/15 bg-paper hover:bg-ink hover:text-paper transition-colors duration-300 p-8 flex flex-col h-full"
    >
      <div className="flex items-baseline justify-between mb-8">
        <span className="text-[10px] font-mono uppercase tracking-widest2 text-muted group-hover:text-paper/60">
          {pick(course.levelLabel, locale)}
        </span>
        <span className="text-xs font-mono numeric text-muted group-hover:text-paper/60">
          ${course.priceUsd}
        </span>
      </div>

      <h3 className="font-display text-3xl leading-[1.1] mb-4 max-w-[14ch]">
        {pick(course.title, locale)}
      </h3>

      <p className="text-sm text-muted group-hover:text-paper/70 leading-relaxed mb-8 flex-1">
        {pick(course.tagline, locale)}
      </p>

      <div className="flex items-center justify-between text-xs font-mono pt-6 border-t border-ink/10 group-hover:border-paper/20">
        <span className="uppercase tracking-widest2">{pick(course.durationShort, locale)}</span>
        <span className="flex items-center gap-2 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform">
          {dict.cta.viewDetails}
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none" aria-hidden className="icon-arrow-flip">
            <path d="M0 4h11M7 1l3 3-3 3" stroke="currentColor" strokeWidth="1" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
