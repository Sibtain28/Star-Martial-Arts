import { motion } from "framer-motion";
import { PROGRAMS } from "../../data/programs";

const FILTERS = [{ slug: "all", name: "All Classes" }, ...PROGRAMS];

export default function TimetableFilter({ active, onChange }) {
  return (
    <div
      role="tablist"
      aria-label="Filter classes by program"
      className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5"
    >
      {FILTERS.map((program) => {
        const isActive = active === program.slug;
        const Icon = program.icon;

        return (
          <button
            key={program.slug}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(program.slug)}
            className={`relative flex items-center gap-2 rounded-full border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.2em] transition-colors duration-300 ${
              isActive
                ? "border-transparent text-ink"
                : "border-white/15 text-bone-dim hover:border-gold/40 hover:text-bone"
            }`}
          >
            {isActive && (
              <motion.span
                layoutId="timetable-filter-active"
                className="absolute inset-0 rounded-full bg-gold"
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
              />
            )}
            <span className="relative flex items-center gap-2">
              {Icon && <Icon className="h-3.5 w-3.5" strokeWidth={2} />}
              {program.name}
            </span>
          </button>
        );
      })}
    </div>
  );
}
