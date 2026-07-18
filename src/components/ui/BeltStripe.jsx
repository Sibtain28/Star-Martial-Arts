import { motion, useScroll, useSpring } from "framer-motion";

/**
 * The site's signature motif: a belt-rank progression (white -> black)
 * borrowed from the dojo itself. Two variants:
 *  - "progress": fixed at the top of the viewport, fills with scroll depth,
 *    standing in for how a student progresses through the ranks.
 *  - "divider": a static, thin decorative rule used between sections.
 */
export default function BeltStripe({ variant = "divider", className = "" }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  });

  if (variant === "progress") {
    return (
      <motion.div
        style={{ scaleX }}
        className={`belt-stripe fixed left-0 right-0 top-0 z-[60] h-[3px] origin-left ${className}`}
        aria-hidden="true"
      />
    );
  }

  return (
    <div
      className={`belt-stripe h-[3px] w-full opacity-90 ${className}`}
      aria-hidden="true"
    />
  );
}
