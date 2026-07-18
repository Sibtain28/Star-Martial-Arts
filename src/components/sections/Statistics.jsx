import { motion } from "framer-motion";
import { Medal, Users, Award, Trophy } from "lucide-react";
import Counter from "../ui/Counter";
import { useStagger } from "../../hooks/useStagger";

const STATS = [
  { icon: Medal, value: 56, suffix: "+", label: "Years of Legacy" },
  { icon: Users, value: 800, suffix: "+", label: "Active Students" },
  { icon: Award, value: 400, suffix: "+", label: "Black Belts Produced" },
  { icon: Trophy, value: 120, suffix: "+", label: "Tournaments Won" },
];

export default function Statistics() {
  const { container, item, viewport } = useStagger({ staggerDelay: 0.1 });

  return (
    <section className="relative overflow-hidden bg-ink py-12 sm:py-14" aria-label="Club statistics">
      <div className="pointer-events-none absolute inset-0 bg-noise" aria-hidden="true" />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red/15 blur-[140px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <motion.dl
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="grid grid-cols-2 gap-8 divide-y divide-white/10 sm:grid-cols-4 sm:gap-6 sm:divide-y-0 sm:divide-x"
        >
          {STATS.map(({ icon: Icon, value, suffix, label }) => (
            <motion.div
              key={label}
              variants={item}
              className="flex flex-col items-center gap-3 pt-8 text-center first:pt-0 sm:px-6 sm:pt-0"
            >
              <Icon className="h-6 w-6 text-gold" strokeWidth={1.5} aria-hidden="true" />
              <dd className="font-display text-4xl text-bone sm:text-5xl">
                <Counter value={value} suffix={suffix} />
              </dd>
              <dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-bone-dim">
                {label}
              </dt>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
