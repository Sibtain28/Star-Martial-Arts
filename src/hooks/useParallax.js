import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

/**
 * Lightweight parallax offset for decorative elements (background orbs,
 * watermarks). Uses the element's own scroll position relative to the
 * viewport so it works inside any section — not just the page root.
 *
 * @param {number} factor  How many px to move per 100px of scroll.
 *                         Positive = element moves down (slower than scroll).
 *                         Negative = element moves up (faster than scroll).
 * @param {string} margin  IntersectionObserver margin for early trigger.
 *
 * Usage:
 *   const { ref, y } = useParallax(0.3);
 *   <motion.div ref={ref} style={{ y }} />
 */
export function useParallax(factor = 0.3, _margin = "0px") {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Map scroll progress [0, 1] to a pixel offset range
  const range = 120 * factor;
  const y = useTransform(scrollYProgress, [0, 1], [-range, range]);

  return { ref, y };
}
