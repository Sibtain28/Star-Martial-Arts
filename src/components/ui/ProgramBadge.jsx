import { PROGRAMS } from "../../data/programs";
import { PROGRAM_TONES, TONE_STYLES } from "../../data/timetableTheme";

/**
 * Looks up the program by slug so label/icon always match the Programs
 * page. `size="sm"` is used inside grid cells and mobile cards, `"md"` in
 * the filter bar.
 */
export default function ProgramBadge({ slug, size = "sm", className = "" }) {
  const program = PROGRAMS.find((p) => p.slug === slug);
  if (!program) return null;

  const tone = PROGRAM_TONES[slug] ?? "gold";
  const { chip, dot } = TONE_STYLES[tone];
  const Icon = program.icon;

  const sizing =
    size === "md"
      ? "gap-2 px-3.5 py-2 text-xs"
      : "gap-1.5 px-2.5 py-1 text-[10px]";

  return (
    <span
      className={`inline-flex items-center rounded-full border font-mono uppercase tracking-[0.15em] ${chip} ${sizing} ${className}`}
    >
      <Icon className={size === "md" ? "h-3.5 w-3.5" : "h-3 w-3"} strokeWidth={2} />
      {program.name}
      <span className={`ml-0.5 h-1.5 w-1.5 rounded-full ${dot}`} aria-hidden="true" />
    </span>
  );
}
