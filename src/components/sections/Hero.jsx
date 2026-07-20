import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown, ArrowRight, PlayCircle } from "lucide-react";
import Button from "../ui/Button";
import Counter from "../ui/Counter";
import BeltStripe from "../ui/BeltStripe";
import { useParallax } from "../../hooks/useParallax";

const STATS = [
  { label: "Established", display: "1969", isYear: true },
  { label: "Students Trained", value: 250, suffix: "K+" },
  { label: "Spectators per Event", value: 5000, suffix: "+" },
  { label: "Fighters per Event", value: 500, suffix: "+" },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const statsContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.6 },
  },
};

const statItem = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  // Parallax refs for decorative orbs (no effect if reduced motion)
  const { ref: orbRedRef, y: orbRedY } = useParallax(prefersReducedMotion ? 0 : 0.25);
  const { ref: orbGoldRef, y: orbGoldY } = useParallax(prefersReducedMotion ? 0 : -0.2);
  const { ref: watermarkRef, y: watermarkY } = useParallax(prefersReducedMotion ? 0 : 0.15);

  return (
    <section
      className="relative flex min-h-screen items-center overflow-hidden bg-ink pt-28 pb-16"
      aria-labelledby="hero-heading"
    >
      {/* Ambient background — noise texture */}
      <div className="pointer-events-none absolute inset-0 bg-noise" aria-hidden="true" />

      {/* Parallax orbs */}
      <motion.div
        ref={orbRedRef}
        style={{ y: orbRedY }}
        className="pointer-events-none absolute -top-40 right-[-10%] h-[560px] w-[560px] rounded-full bg-red/20 blur-[140px] will-change-transform"
        aria-hidden="true"
      />
      <motion.div
        ref={orbGoldRef}
        style={{ y: orbGoldY }}
        className="pointer-events-none absolute bottom-[-10%] left-[-10%] h-[480px] w-[480px] rounded-full bg-gold/10 blur-[140px] will-change-transform"
        aria-hidden="true"
      />

      {/* Heritage year watermark with parallax */}
      <motion.span
        ref={watermarkRef}
        style={{ y: watermarkY }}
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 top-1/2 -translate-y-1/2 select-none font-display text-stroke-gold text-[26vw] leading-none opacity-[0.08] will-change-transform sm:text-[22vw] lg:text-[18vw]"
      >
        1969
      </motion.span>

      <div className="relative mx-auto flex w-full max-w-7xl flex-col px-6 lg:px-10">
        {/* Main headline block */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          <motion.div variants={item} className="mb-6 flex items-center gap-3">
            <span className="belt-stripe h-1.5 w-10 rounded-full flex-shrink-0" aria-hidden="true" />
            <span className="font-mono text-xs uppercase tracking-[0.35em] text-gold">
              Hyderabad&rsquo;s Dojo Since 1969
            </span>
          </motion.div>

          <motion.h1
            id="hero-heading"
            variants={item}
            className="font-display text-[clamp(3rem,13vw,5.5rem)] leading-[1.1] tracking-wide text-bone"
          >
            WHERE DISCIPLINE
            <br />
            BECOMES{" "}
            <span className="text-stroke-gold">STRENGTH</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-[15px] leading-relaxed text-bone-dim sm:text-lg"
          >
            We have trained Hyderabad in karate, self-defense, and fitness since 1969.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button href="/#join" variant="primary" size="lg" icon={ArrowRight}>
              Book a Free Trial
            </Button>
            <Button href="/#programs" variant="outline" size="lg" icon={PlayCircle}>
              Explore Programs
            </Button>
          </motion.div>
        </motion.div>

        {/* Stats bar */}
        <motion.dl
          variants={statsContainer}
          initial="hidden"
          animate="show"
          className="mt-20 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-white/10 pt-8 sm:grid-cols-4"
        >
          {STATS.map((stat) => (
            <motion.div key={stat.label} variants={statItem}>
              <dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-bone-dim">
                {stat.label}
              </dt>
              <dd className="mt-2 font-display text-3xl text-gold sm:text-4xl">
                {stat.isYear ? (
                  stat.display
                ) : (
                  <Counter value={stat.value} suffix={stat.suffix} />
                )}
              </dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#cta"
        aria-label="Scroll to next section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-bone-dim transition-colors duration-300 hover:text-gold sm:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.span
          animate={prefersReducedMotion ? {} : { y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ChevronDown className="h-4 w-4" aria-hidden="true" />
        </motion.span>
      </motion.a>

      <BeltStripe variant="divider" className="absolute bottom-0 left-0" />
    </section>
  );
}
