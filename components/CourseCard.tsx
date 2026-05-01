import Link from "next/link";
import type { Course } from "@/lib/courses";

type Props = {
  course: Course;
};

export default function CourseCard({ course }: Props) {
  return (
    <Link
      href={`/courses/${course.slug}`}
      className="group block border border-ink/15 bg-paper hover:bg-ink hover:text-paper transition-colors duration-300 p-8 flex flex-col h-full"
    >
      <div className="flex items-baseline justify-between mb-8">
        <span className="text-[10px] font-mono uppercase tracking-widest2 text-muted group-hover:text-paper/60">
          {course.levelLabel}
        </span>
        <span className="text-xs font-mono numeric text-muted group-hover:text-paper/60">
          ${course.priceUsd}
        </span>
      </div>

      <h3 className="font-display text-3xl leading-[1.05] mb-4 max-w-[14ch]">
        {course.title}
      </h3>

      <p className="text-sm text-muted group-hover:text-paper/70 leading-relaxed mb-8 flex-1">
        {course.tagline}
      </p>

      <div className="flex items-center justify-between text-xs font-mono pt-6 border-t border-ink/10 group-hover:border-paper/20">
        <span className="uppercase tracking-widest2">{course.durationShort}</span>
        <span className="flex items-center gap-2 group-hover:translate-x-1 transition-transform">
          View details
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none" aria-hidden>
            <path d="M0 4h11M7 1l3 3-3 3" stroke="currentColor" strokeWidth="1" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
