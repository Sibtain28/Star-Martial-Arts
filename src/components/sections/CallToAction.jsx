import { motion } from "framer-motion";
import { ArrowRight, PhoneCall } from "lucide-react";
import Button from "../ui/Button";
import { useScrollReveal } from "../../hooks/useScrollReveal";

export default function CallToAction() {
  const { delayed } = useScrollReveal({ margin: "-100px" });

  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-red py-12 sm:py-14"
      aria-labelledby="cta-heading"
    >
      {/* Diagonal ink panel for depth */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-2/3 origin-top-right -skew-x-12 bg-ink/90"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-60" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-[1.4fr_1fr] lg:gap-6 lg:px-10">
        {/* Copy */}
        <motion.div {...delayed(0)}>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.35em] text-bone/70">
            Your First Class Is On Us
          </p>
          <h2
            id="cta-heading"
            className="font-display text-4xl leading-[1.1] tracking-wide text-bone sm:text-5xl lg:text-6xl"
          >
            STEP ON THE MAT.
            <br />
            <span className="text-stroke-gold">START TODAY.</span>
          </h2>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-bone/80">
            No experience needed, no long-term contracts required. Come train
            with the coaches who&rsquo;ve shaped Hyderabad&rsquo;s martial
            artists for over five decades.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          {...delayed(0.15)}
          className="flex flex-col items-start gap-4 lg:items-end"
        >
          <Button href="/#join" variant="primary" size="lg" icon={ArrowRight}>
            Claim Free Trial
          </Button>
          <a
            href="tel:+919000000837"
            className="group inline-flex items-center gap-2 font-mono text-sm text-bone/90 transition-colors duration-300 hover:text-gold"
            aria-label="Call us at +91 90000 00837"
          >
            <PhoneCall className="h-4 w-4 text-gold" aria-hidden="true" />
            <span className="underline decoration-gold/40 underline-offset-4 transition-colors duration-300 group-hover:decoration-gold">
              +91 90000 00837
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
