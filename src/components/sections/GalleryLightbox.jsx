import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import GalleryPlaceholder from "../ui/GalleryPlaceholder";
import { CATEGORIES } from "../../data/gallery";

/**
 * Full-screen gallery lightbox with:
 *  - Focus trap: first focusable element receives focus on open
 *  - Keyboard navigation: Escape to close, Arrow keys to navigate
 *  - role="dialog" + aria-modal + aria-label for screen readers
 *  - Body scroll lock while open
 */
export default function GalleryLightbox({ items, activeId, onClose, onNavigate }) {
  const index = items.findIndex((item) => item.id === activeId);
  const item = index >= 0 ? items[index] : null;
  const closeBtnRef = useRef(null);

  // Keyboard handling + scroll lock
  useEffect(() => {
    if (!item) return;

    // Focus the close button so keyboard users are immediately in context
    const timer = setTimeout(() => closeBtnRef.current?.focus(), 50);

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate(1);
      if (e.key === "ArrowLeft") onNavigate(-1);
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      clearTimeout(timer);
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [item, onClose, onNavigate]);

  const category = item ? CATEGORIES.find((c) => c.slug === item.category) : null;

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-md sm:p-8"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`Lightbox: ${item.title}`}
        >
          {/* Close button */}
          <button
            ref={closeBtnRef}
            type="button"
            onClick={onClose}
            aria-label="Close lightbox"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-sm border border-white/15 text-bone transition-colors duration-300 hover:border-gold hover:text-gold focus-visible:ring-2 focus-visible:ring-gold sm:right-8 sm:top-8"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>

          {/* Previous */}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); onNavigate(-1); }}
            aria-label={`Previous photo (${index} of ${items.length})`}
            disabled={items.length <= 1}
            className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 text-bone transition-colors duration-300 hover:border-gold hover:text-gold disabled:opacity-30 sm:left-6"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>

          {/* Next */}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); onNavigate(1); }}
            aria-label={`Next photo (${index + 2} of ${items.length})`}
            disabled={items.length <= 1}
            className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 text-bone transition-colors duration-300 hover:border-gold hover:text-gold disabled:opacity-30 sm:right-6"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>

          {/* Image panel */}
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.92, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="flex max-h-[85vh] w-full max-w-3xl flex-col overflow-hidden rounded-sm border border-white/10 bg-surface"
          >
            <div className="aspect-[4/3] w-full sm:aspect-video">
              <GalleryPlaceholder item={item} className="h-full w-full" />
            </div>

            <div className="flex items-center justify-between gap-4 border-t border-white/10 px-6 py-5">
              <div>
                {category && (
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold">
                    {category.label}
                  </p>
                )}
                <h3 className="mt-1 font-display text-xl tracking-wide text-bone">
                  {item.title}
                </h3>
              </div>
              <p
                className="shrink-0 font-mono text-[11px] uppercase tracking-[0.15em] text-bone-dim"
                aria-live="polite"
                aria-atomic="true"
              >
                {index + 1} / {items.length}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
