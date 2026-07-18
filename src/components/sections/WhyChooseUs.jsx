import { motion } from "framer-motion";
import { ShieldCheck, Users, Trophy, Clock, Dumbbell, HeartPulse } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import { useStagger } from "../../hooks/useStagger";

const FEATURES = [
  {
    icon: ShieldCheck,
    title: "Certified Instructors",
    desc: "Every coach is a certified black belt with years of teaching experience, not just competing experience.",
  },
  {
    icon: Users,
    title: "Every Age Welcome",
    desc: "Dedicated programs for kids, teens and adults mean every student trains at the right pace, together.",
  },
  {
    icon: Trophy,
    title: "Proven Competition Record",
    desc: "Star students have represented Telangana at state and national karate championships for decades.",
  },
  {
    icon: Clock,
    title: "Flexible Class Timings",
    desc: "Morning, evening and weekend batches fit training around school, work and family life.",
  },
  {
    icon: Dumbbell,
    title: "Modern Training Floor",
    desc: "Traditional dojo etiquette meets a fully equipped fitness floor for strength and conditioning work.",
  },
  {
    icon: HeartPulse,
    title: "Whole-Person Coaching",
    desc: "We track discipline, confidence and fitness milestones alongside belt grading — not just technique.",
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
          description="Fifty-six years in Hyderabad has taught us what actually builds strong, disciplined students — here's what sets Star apart."
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
