import { motion } from "framer-motion";
import { LayoutGrid } from "lucide-react";
import { CATEGORIES } from "../../data/gallery";

const FILTERS = [{ slug: "all", label: "All Photos", icon: LayoutGrid }, ...CATEGORIES];

export default function GalleryFilter({ active, onChange }) {
  return (
    <div
      role="tablist"
      aria-label="Filter gallery by category"
      className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5"
    >
      {FILTERS.map(({ slug, label, icon: Icon }) => {
        const isActive = active === slug;

        return (
          <button
            key={slug}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(slug)}
            className={`relative flex items-center gap-2 rounded-full border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.2em] transition-colors duration-300 ${
              isActive
                ? "border-transparent text-ink"
                : "border-white/15 text-bone-dim hover:border-gold/40 hover:text-bone"
            }`}
          >
            {isActive && (
              <motion.span
                layoutId="gallery-filter-active"
                className="absolute inset-0 rounded-full bg-gold"
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
              />
            )}
            <span className="relative flex items-center gap-2">
              <Icon className="h-3.5 w-3.5" strokeWidth={2} />
              {label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
