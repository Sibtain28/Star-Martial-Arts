import { motion } from "framer-motion";
import { useScrollReveal } from "../../hooks/useScrollReveal";

/**
 * Shared heading block for content sections: small mono eyebrow with a belt
 * tick, a display title, and an optional supporting line. Animates in when
 * scrolled into view via the shared `useScrollReveal` hook.
 *
 * Props:
 *   eyebrow     — small label above the main title (e.g. "Benefits")
 *   title       — main section headline (display font)
 *   description — optional supporting paragraph
 *   align       — "left" | "center"
 *   light       — if true, renders on dark background (bone/bone-dim)
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}) {
  const { fadeUp } = useScrollReveal({ margin: "-100px" });
  const alignment = align === "center"
    ? "mx-auto text-center items-center"
    : "text-left items-start";

  return (
    <motion.div
      {...fadeUp}
      className={`flex max-w-2xl flex-col ${alignment}`}
    >
      {/* Eyebrow with belt stripe tick */}
      <span className="mb-4 flex items-center gap-3">
        <span className="belt-stripe h-1.5 w-8 rounded-full flex-shrink-0" aria-hidden="true" />
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-gold">
          {eyebrow}
        </span>
      </span>

      <h2
        className={`font-display text-4xl leading-[1.1] tracking-wide sm:text-5xl ${
          light ? "text-bone" : "text-ink"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-4 text-[15px] leading-relaxed sm:text-lg ${
            light ? "text-bone-dim" : "text-ink/70"
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
