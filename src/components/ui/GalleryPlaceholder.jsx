import { CATEGORIES } from "../../data/gallery";

const CATEGORY_ACCENT = {
  training: "from-red/20 via-ink to-ink",
  competitions: "from-gold/25 via-ink to-ink",
  fitness: "from-red/15 via-ink to-ink",
  kids: "from-gold/20 via-ink to-ink",
  events: "from-red/25 via-ink to-ink",
};

/**
 * Renders `item.src` as a real, lazily-loaded <img> when present.
 * Otherwise falls back to a styled placeholder panel that matches the
 * gradient + icon + stroke-text language used across Programs/Trainers,
 * so the gallery never needs stock photography to look finished.
 */
export default function GalleryPlaceholder({ item, className = "" }) {
  const category = CATEGORIES.find((c) => c.slug === item.category);
  const Icon = category?.icon;
  const accent = CATEGORY_ACCENT[item.category] ?? "from-gold/15 via-ink to-ink";

  if (item.src) {
    return (
      <img
        src={item.src}
        alt={item.alt ?? item.title}
        loading="lazy"
        decoding="async"
        className={`h-full w-full object-cover ${className}`}
      />
    );
  }

  return (
    <div className={`relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br ${accent} ${className}`}>
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-70" />
      <span
        className="pointer-events-none absolute -bottom-6 -right-4 select-none font-display text-stroke-gold text-[6rem] leading-none opacity-10"
        aria-hidden="true"
      >
        {item.title.slice(0, 1)}
      </span>
      {Icon && (
        <span className="relative flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 bg-ink/50 backdrop-blur-sm">
          <Icon className="h-5 w-5 text-gold" strokeWidth={1.5} />
        </span>
      )}
    </div>
  );
}
