import { DIFFICULTY } from "../../data/programs";

/**
 * Renders difficulty as a belt-colored dot + label instead of a generic
 * "easy/medium/hard" tag, keeping the rank language consistent site-wide.
 */
export default function DifficultyBadge({ level, className = "" }) {
  const { label, belt, dot } = DIFFICULTY[level] ?? DIFFICULTY.all;

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-bone-dim ${className}`}
    >
      <span
        className={`h-2 w-2 rounded-full border ${dot}`}
        style={{ backgroundColor: belt }}
        aria-hidden="true"
      />
      {label}
    </span>
  );
}
