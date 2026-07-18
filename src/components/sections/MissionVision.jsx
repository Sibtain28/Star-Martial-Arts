import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import BeltStripe from "../ui/BeltStripe";


const PANELS = [
  {
    icon: Target,
    label: "Our Mission",
    heading: "FORGE STRENGTH THROUGH DISCIPLINE",
    body: "To make authentic martial arts training accessible to every person in Hyderabad — building physical strength, mental focus and genuine self-defense ability inside a supportive, disciplined community.",
    direction: -30,
  },
  {
    icon: Eye,
    label: "Our Vision",
    heading: "A CITY OF CONFIDENT, DISCIPLINED ATHLETES",
    body: "To be recognised as Telangana's most trusted martial arts institution — producing champions in competition and, more importantly, disciplined, confident individuals in everyday life.",
    direction: 30,
  },
];

export default function MissionVision() {
  return (
    <section className="relative bg-ink-soft py-12 sm:py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Mission &amp; Vision"
          title="WHAT DRIVES EVERY CLASS WE TEACH"
          light
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {PANELS.map(({ icon: Icon, label, heading, body, direction }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, x: direction }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="card-shadow-dark relative overflow-hidden rounded-sm border border-white/10 bg-surface p-8 sm:p-10"
            >
              <div
                className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold/10 blur-3xl"
                aria-hidden="true"
              />
              <Icon className="h-8 w-8 text-gold" strokeWidth={1.5} aria-hidden="true" />
              <p className="mt-6 font-mono text-xs uppercase tracking-[0.3em] text-gold">
                {label}
              </p>
              <h3 className="mt-3 font-display text-2xl leading-tight tracking-wide text-bone sm:text-3xl">
                {heading}
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-bone-dim">
                {body}
              </p>
              <BeltStripe variant="divider" className="mt-8 w-16 opacity-70" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
