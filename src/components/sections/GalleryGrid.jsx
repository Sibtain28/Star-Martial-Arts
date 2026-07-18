import { AnimatePresence } from "framer-motion";
import GalleryTile from "./GalleryTile";

export default function GalleryGrid({ items, onOpen }) {
  if (items.length === 0) {
    return (
      <p className="py-16 text-center font-mono text-xs uppercase tracking-[0.2em] text-bone-dim/60">
        No photos in this category yet
      </p>
    );
  }

  return (
    <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
      <AnimatePresence mode="popLayout">
        {items.map((item, index) => (
          <GalleryTile key={item.id} item={item} onOpen={onOpen} index={index} />
        ))}
      </AnimatePresence>
    </div>
  );
}
