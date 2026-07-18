/**
 * Shared scroll-reveal config for consistent entrance animations
 * across every section. Use with `motion` elements via spread:
 *
 *   const reveal = useScrollReveal();
 *   <motion.div {...reveal.fadeUp} />
 *
 * All variants fire once and respect `prefers-reduced-motion` via
 * Framer Motion's built-in hook integration.
 */
export function useScrollReveal({ margin = "-100px", once = true } = {}) {
  const viewport = { once, margin };

  const fadeUp = {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  };

  const fadeIn = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport,
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const slideLeft = {
    initial: { opacity: 0, x: -32 },
    whileInView: { opacity: 1, x: 0 },
    viewport,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  };

  const slideRight = {
    initial: { opacity: 0, x: 32 },
    whileInView: { opacity: 1, x: 0 },
    viewport,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  };

  /** Returns a fadeUp config with an additional `delay` */
  const delayed = (delay = 0) => ({
    ...fadeUp,
    transition: { ...fadeUp.transition, delay },
  });

  return { fadeUp, fadeIn, slideLeft, slideRight, delayed };
}
