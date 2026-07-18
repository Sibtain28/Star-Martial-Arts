import { motion } from "framer-motion";
import { Expand } from "lucide-react";
import GalleryPlaceholder from "../ui/GalleryPlaceholder";
import { CATEGORIES } from "../../data/gallery";

export default function GalleryTile({ item, onOpen, index = 0 }) {
  const category = CATEGORIES.find((c) => c.slug === item.category);

  return (
    <motion.button
      type="button"
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{
        duration: 0.45,
        delay: Math.min(index * 0.04, 0.3), // cap delay so large grids don't feel sluggish
        ease: [0.16, 1, 0.3, 1],
      }}
      onClick={() => onOpen(item.id)}
      aria-label={`Open photo: ${item.title}${category ? ` (${category.label})` : ""}`}
      className={`group relative mb-4 block w-full overflow-hidden rounded-sm border border-white/10 text-left transition-colors duration-300 hover:border-gold/50 focus-visible:border-gold focus-visible:ring-2 focus-visible:ring-gold ${item.span} break-inside-avoid`}
    >
      <motion.div
        className="h-full w-full"
        whileHover={{ scale: 1.06, filter: "brightness(1.08)" }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <GalleryPlaceholder item={item} className="h-full w-full" />
      </motion.div>

      {/* Expand icon */}
      <span
        className="pointer-events-none absolute right-3 top-3 flex h-8 w-8 -translate-y-1 items-center justify-center rounded-full border border-white/20 bg-ink/60 text-bone opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
        aria-hidden="true"
      >
        <Expand className="h-3.5 w-3.5" strokeWidth={1.75} />
      </span>
    </motion.button>
  );
}
