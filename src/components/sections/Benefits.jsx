import { motion } from "framer-motion";
import { CheckCircle2, Dumbbell, BrainCircuit } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import { useStagger } from "../../hooks/useStagger";

const BENEFIT_GROUPS = [
  {
    icon: Dumbbell,
    title: "Physical Benefits",
    items: [
      "Full-body strength and functional conditioning",
      "Improved flexibility, balance and coordination",
      "Real, practical self-defense skills",
      "Sustainable weight management and stamina",
    ],
  },
  {
    icon: BrainCircuit,
    title: "Mental & Life Benefits",
    items: [
      "Sharper focus, discipline and goal-setting",
      "Genuine confidence that carries beyond the dojo",
      "Respect, patience and emotional control",
      "A close, supportive training community",
    ],
  },
];

export default function Benefits() {
  const { container, rowItem, viewport } = useStagger({ staggerDelay: 0.08 });

  return (
    <section className="relative bg-bone py-12 sm:py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Benefits"
          title="MORE THAN A WORKOUT"
          description="Martial arts training builds both physical strength and mental discipline."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {BENEFIT_GROUPS.map(({ icon: Icon, title, items }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="card-shadow-light rounded-sm border border-ink/10 bg-white p-8 sm:p-10"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-sm bg-ink" aria-hidden="true">
                <Icon className="h-5 w-5 text-gold" strokeWidth={1.75} />
              </span>
              <h3 className="mt-5 font-display text-2xl tracking-wide text-ink">
                {title}
              </h3>

              <motion.ul
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={viewport}
                className="mt-6 space-y-4"
                role="list"
              >
                {items.map((text) => (
                  <motion.li
                    key={text}
                    variants={rowItem}
                    className="flex items-start gap-3 text-[15px] leading-relaxed text-ink/70"
                  >
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-red"
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                    {text}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
