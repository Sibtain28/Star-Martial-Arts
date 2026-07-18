import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import founderImg from "../../assets/founder.jpg";

export default function ClubIntro() {
  const { slideRight, delayed } = useScrollReveal({ margin: "-100px" });

  return (
    <section className="relative overflow-hidden bg-ink py-12 sm:py-14">
      <div className="pointer-events-none absolute inset-0 bg-noise" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        {/* Text column */}
        <div>
          <SectionHeading
            eyebrow="Club Introduction"
            title="A DOJO BUILT ON FIVE DECADES OF DISCIPLINE"
            light
          />
          <div className="mt-6 max-w-xl space-y-4 text-[15px] leading-relaxed text-bone-dim">
            <p>
              Star Martial Arts &amp; Fitness Club opened its doors in
              Hyderabad in 1969, founded on a simple belief: that martial
              arts should build character as surely as it builds strength.
              What began as a single karate class has grown into one of the
              city&rsquo;s most respected training grounds.
            </p>
            <p>
              Today, three generations of instructors carry that founding
              philosophy forward &mdash; blending traditional karate and
              self-defense with modern strength and conditioning, so every
              student trains with the discipline of the old dojo and the
              science of the new gym.
            </p>
          </div>

          {/* Discipline tags */}
          <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4 font-mono text-xs uppercase tracking-[0.2em] text-bone-dim">
            {["Traditional Karate", "Self-Defense", "Strength & Conditioning"].map((tag) => (
              <span key={tag} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-gold flex-shrink-0" aria-hidden="true" />
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Visual column */}
        <motion.div {...slideRight} className="relative">
          {/* Decorative image frame */}
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm border border-gold/25 bg-gradient-to-br from-surface-hi via-surface to-ink">
            <img
              src={founderImg}
              alt="Founder of Star Martial Arts"
              className="h-full w-full object-cover opacity-85 grayscale contrast-[1.1] transition-all duration-500 hover:scale-105 hover:opacity-100 hover:grayscale-0"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-60" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(198,161,91,0.12),transparent_55%)]" />
            <span className="pointer-events-none absolute inset-6 border border-white/10" />
            <span className="pointer-events-none absolute left-8 top-8 font-mono text-[10px] uppercase tracking-[0.3em] text-gold/90">
              Est. 1969
            </span>
            <span className="pointer-events-none absolute bottom-8 right-8 font-display text-8xl text-stroke-gold opacity-20">
              星
            </span>
          </div>

          {/* Founder quote card */}
          <motion.div
            {...delayed(0.3)}
            className="absolute -bottom-8 -left-6 w-64 rounded-sm border border-white/10 bg-surface-hi p-5 shadow-2xl sm:-left-10 sm:w-72"
          >
            <Quote className="h-5 w-5 text-gold" aria-hidden="true" />
            <blockquote className="mt-3 text-[15px] leading-relaxed text-bone-dim">
              &ldquo;We don&rsquo;t just teach technique &mdash; we build the
              discipline that carries into every part of life.&rdquo;
            </blockquote>
            <cite className="mt-3 block font-mono text-[10px] uppercase tracking-[0.2em] text-gold not-italic">
              Founder, Star Martial Arts
            </cite>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
