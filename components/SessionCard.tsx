import type { Locale } from "@/lib/i18n";
import { type Session, pick } from "@/lib/courses";
import type { Dict } from "@/lib/dictionaries";

type Props = {
  session: Session;
  locale: Locale;
  dict: Dict;
};

const CATEGORY_HEX: Record<string, string> = {
  foundations: "#1D9E75",
  technical: "#378ADD",
  institutional: "#7F77DD",
  integration: "#F59E0B",
};

const TAG_CLASSES: Record<string, string> = {
  foundations: "bg-cat-foundations-bg text-cat-foundations-fg",
  technical: "bg-cat-technical-bg text-cat-technical-fg",
  institutional: "bg-cat-institutional-bg text-cat-institutional-fg",
  integration: "bg-cat-integration-bg text-cat-integration-fg",
  psychology: "bg-cat-psychology-bg text-cat-psychology-fg",
};

export default function SessionCard({ session, locale, dict }: Props) {
  const accentColor = CATEGORY_HEX[session.primary] ?? "#1D9E75";

  return (
    <div
      className="session-card p-6"
      style={{ ["--cat-color" as any]: accentColor }}
    >
      <div className="text-[10px] font-mono uppercase tracking-widest2 text-dim mb-3">
        {dict.program.sessionLabel(session.num)}
      </div>
      <h3 className="font-display text-lg leading-snug mb-3 font-semibold text-ink">
        {pick(session.title, locale)}
      </h3>
      <div className="flex flex-wrap gap-1.5 mb-4">
        {session.tags.map((tag) => (
          <span
            key={tag}
            className={`text-[10px] font-medium uppercase tracking-wider px-2 py-1 rounded ${TAG_CLASSES[tag]}`}
          >
            {dict.tags[tag]}
          </span>
        ))}
        {session.hasPsychology && (
          <span
            className={`text-[10px] font-medium uppercase tracking-wider px-2 py-1 rounded ${TAG_CLASSES.psychology}`}
          >
            {dict.tags.psychology}
          </span>
        )}
      </div>
      <p className="text-sm text-muted leading-relaxed">
        {pick(session.description, locale)}
      </p>
    </div>
  );
}
