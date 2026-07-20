import { motion } from "framer-motion";
import { ShieldCheck, Users, Trophy, Clock, Dumbbell, HeartPulse } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import { useStagger } from "../../hooks/useStagger";

const FEATURES = [
  {
    icon: ShieldCheck,
    title: "Certified Instructors",
    desc: "Every coach is a certified black belt with extensive teaching experience.",
  },
  {
    icon: Users,
    title: "Every Age Welcome",
    desc: "We offer dedicated programs for kids, teens, and adults.",
  },
  {
    icon: Trophy,
    title: "Proven Competition Record",
    desc: "Our students regularly compete at state and national levels.",
  },
  {
    icon: Clock,
    title: "Flexible Class Timings",
    desc: "Morning, evening, and weekend sessions fit any schedule.",
  },
  {
    icon: Dumbbell,
    title: "Modern Training Floor",
    desc: "A traditional dojo meets a fully equipped strength facility.",
  },
  {
    icon: HeartPulse,
    title: "Whole-Person Coaching",
    desc: "We focus on character, discipline, and fitness alongside technique.",
  },
];

export default function WhyChooseUs() {
  const { container, item, viewport } = useStagger({ staggerDelay: 0.09, margin: "-80px" });

  return (
    <section className="relative bg-bone py-12 sm:py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="TRAINING THAT EARNS ITS REPUTATION"
          description="Here is what sets Star Martial Arts apart."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {FEATURES.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              variants={item}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.22 }}
              className="group card-shadow-light ring-gold-glow rounded-sm border border-ink/10 bg-white p-7"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-sm bg-ink transition-colors duration-300 group-hover:bg-gold" aria-hidden="true">
                <Icon
                  className="h-5 w-5 text-gold transition-colors duration-300 group-hover:text-ink"
                  strokeWidth={1.75}
                />
              </span>
              <h3 className="mt-5 font-display text-xl tracking-wide text-ink">
                {title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink/70">
                {desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
