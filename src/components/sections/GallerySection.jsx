import { useMemo, useState, useCallback } from "react";
import SectionHeading from "../ui/SectionHeading";
import GalleryFilter from "./GalleryFilter";
import GalleryGrid from "./GalleryGrid";
import GalleryLightbox from "./GalleryLightbox";
import { GALLERY_ITEMS } from "../../data/gallery";

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [activeId, setActiveId] = useState(null);

  const items = useMemo(
    () =>
      activeFilter === "all"
        ? GALLERY_ITEMS
        : GALLERY_ITEMS.filter((item) => item.category === activeFilter),
    [activeFilter]
  );

  const handleNavigate = useCallback(
    (direction) => {
      const index = items.findIndex((item) => item.id === activeId);
      if (index === -1) return;
      const nextIndex = (index + direction + items.length) % items.length;
      setActiveId(items[nextIndex].id);
    },
    [items, activeId]
  );

  return (
    <section className="relative overflow-hidden bg-ink py-12 sm:py-14">
      <div className="pointer-events-none absolute inset-0 bg-noise" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Gallery"
          title="LIFE INSIDE THE DOJO"
          description="A look at training, tournaments, and life on the mat at our club."
          light
          align="center"
        />

        <div className="mt-10">
          <GalleryFilter active={activeFilter} onChange={setActiveFilter} />
        </div>

        <div className="mt-10">
          <GalleryGrid items={items} onOpen={setActiveId} />
        </div>
      </div>

      <GalleryLightbox
        items={items}
        activeId={activeId}
        onClose={() => setActiveId(null)}
        onNavigate={handleNavigate}
      />
    </section>
  );
}
