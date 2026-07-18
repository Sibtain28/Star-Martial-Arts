import { motion, AnimatePresence } from "framer-motion";

/**
 * A premium alternative to a native <select> for short option lists —
 * used for program / experience / timing selection on the Join Now form.
 * Shares the same animated-pill pattern as TimetableFilter/GalleryFilter.
 */
export default function ChipSelect({ label, name, options, value, onChange, error, required, columns = "grid-cols-2 sm:grid-cols-3" }) {
  return (
    <div id={name} className="flex flex-col gap-3">
      <label className="font-mono text-[11px] uppercase tracking-[0.2em] text-bone-dim">
        {label}
        {required && <span className="ml-1 text-red-hi">*</span>}
      </label>

      <div className={`grid gap-2.5 ${columns}`}>
        {options.map((opt) => {
          const isActive = value === opt.value;
          const Icon = opt.icon;

          return (
            <button
              key={opt.value}
              type="button"
              onClick={() => onChange(name, opt.value)}
              aria-pressed={isActive}
              className={`relative flex items-center gap-2 overflow-hidden rounded-sm border px-3.5 py-3 text-left font-mono text-[11px] uppercase tracking-[0.12em] transition-colors duration-300 ${
                isActive
                  ? "border-transparent text-ink"
                  : "border-white/15 text-bone-dim hover:border-gold/40 hover:text-bone"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId={`${name}-chip-active`}
                  className="absolute inset-0 bg-gold"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative flex items-center gap-2">
                {Icon && <Icon className="h-3.5 w-3.5 shrink-0" strokeWidth={2} />}
                {opt.label}
              </span>
            </button>
          );
        })}
      </div>

      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -4, height: 0 }}
            transition={{ duration: 0.2 }}
            className="font-mono text-[11px] text-red-hi"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
