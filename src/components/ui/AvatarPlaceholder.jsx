const ACCENTS = [
  "from-gold/30 via-ink to-ink",
  "from-red/30 via-ink to-ink",
];

/**
 * No student photography yet, so this renders a monogram on a gradient
 * disc instead — consistent with the placeholder language used for
 * programs/trainers/gallery. Swap in a real <img> here once photos exist.
 */
export default function AvatarPlaceholder({ name, size = "h-14 w-14" }) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);

  const accent = ACCENTS[name.length % ACCENTS.length];

  return (
    <span
      className={`flex ${size} shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gradient-to-br ${accent} font-display text-lg tracking-wide text-bone`}
      aria-hidden="true"
    >
      {initials}
    </span>
  );
}
