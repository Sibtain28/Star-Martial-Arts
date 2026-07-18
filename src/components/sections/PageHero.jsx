import { motion } from "framer-motion";
import BeltStripe from "../ui/BeltStripe";
import { useScrollReveal } from "../../hooks/useScrollReveal";

/**
 * Compact hero banner used to open interior sections (About, Programs, etc.).
 * Keeps the same visual language as the homepage Hero — noise texture,
 * heritage watermark, belt-stripe eyebrow — at a smaller scale.
 */
export default function PageHero({ eyebrow, title, description, watermark }) {
  const { fadeUp, delayed } = useScrollReveal({ margin: "-50px" });

  return (
    <section className="relative overflow-hidden bg-ink pt-20 pb-16 sm:pt-24 sm:pb-20">
      <div className="pointer-events-none absolute inset-0 bg-noise" />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-red/15 blur-[130px]" />

      {watermark && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-16 right-[-4%] select-none font-display text-stroke-gold text-[22vw] leading-none opacity-[0.07] sm:text-[16vw] lg:text-[12vw]"
        >
          {watermark}
        </span>
      )}

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-10">
        <motion.div
          {...fadeUp}
          className="mb-6 flex items-center justify-center gap-3"
        >
          <span className="belt-stripe h-1.5 w-10 rounded-full" />
          <span className="font-mono text-xs uppercase tracking-[0.35em] text-gold">
            {eyebrow}
          </span>
          <span className="belt-stripe h-1.5 w-10 rounded-full" />
        </motion.div>

        <motion.h1
          {...delayed(0.1)}
          className="font-display text-5xl leading-[1.1] tracking-wide text-bone sm:text-6xl lg:text-7xl"
        >
          {title}
        </motion.h1>

        {description && (
          <motion.p
            {...delayed(0.2)}
            className="mx-auto mt-6 max-w-2xl text-[15px] leading-relaxed text-bone-dim sm:text-lg"
          >
            {description}
          </motion.p>
        )}
      </div>

      <BeltStripe variant="divider" className="absolute bottom-0 left-0" />
    </section>
  );
}
