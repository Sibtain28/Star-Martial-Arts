/**
 * Shared stagger container + item variants for card grids.
 * Eliminates the copy-pasted `container` / `item` objects scattered
 * throughout Benefits, WhyChooseUs, Statistics, ProgramsGrid, etc.
 *
 * Usage:
 *   const { container, item } = useStagger();
 *   <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
 *     {items.map(i => <motion.div variants={item} key={i.id} />)}
 *   </motion.div>
 *
 * @param {number} staggerDelay  seconds between each child
 * @param {number} childDuration animation duration per child
 * @param {string} margin        IntersectionObserver root margin
 */
export function useStagger({
  staggerDelay = 0.1,
  childDuration = 0.6,
  margin = "-80px",
} = {}) {
  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: staggerDelay },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: childDuration, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const rowItem = {
    hidden: { opacity: 0, x: -12 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const viewport = { once: true, margin };

  return { container, item, rowItem, viewport };
}
