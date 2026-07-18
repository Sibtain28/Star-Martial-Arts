import { useEffect, useRef, useState } from "react";
import { motion, useAnimationFrame, useMotionValue, useReducedMotion } from "framer-motion";
import { Pause, Play } from "lucide-react";
import TestimonialCard from "./TestimonialCard";
import { TESTIMONIALS } from "../../data/testimonials";

const SPEED_PX_PER_SEC = 40;

/**
 * Infinite auto-scrolling testimonials ticker.
 * - Pauses on hover or focus (for keyboard users)
 * - Respects prefers-reduced-motion (starts paused if set)
 * - Announces play/pause state via aria-live
 * - Manual play/pause button with accessible label
 */
export default function TestimonialsCarousel() {
  const prefersReducedMotion = useReducedMotion();
  const [playing, setPlaying] = useState(!prefersReducedMotion);
  const [trackWidth, setTrackWidth] = useState(0);
  const trackRef = useRef(null);
  const x = useMotionValue(0);

  // The track renders the list twice; once we've scrolled the full width
  // of one copy, snap back to 0 for a seamless loop.
  useEffect(() => {
    const measure = () => {
      if (trackRef.current) setTrackWidth(trackRef.current.scrollWidth / 2);
    };
    measure();
    window.addEventListener("resize", measure, { passive: true });
    return () => window.removeEventListener("resize", measure);
  }, []);

  useAnimationFrame((_, delta) => {
    if (!playing || trackWidth === 0) return;
    const next = x.get() - (SPEED_PX_PER_SEC * delta) / 1000;
    x.set(next <= -trackWidth ? next + trackWidth : next);
  });

  const playingLabel = playing ? "Pause testimonial scroll" : "Play testimonial scroll";

  return (
    <div>
      {/* Controls */}
      <div className="mb-6 flex items-center justify-center gap-3 sm:justify-end">
        <span
          id="carousel-hint"
          className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone-dim/60"
          aria-hidden="true"
        >
          Hover to pause
        </span>
        <button
          type="button"
          onClick={() => setPlaying((p) => !p)}
          aria-label={playingLabel}
          aria-pressed={!playing}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-bone-dim transition-colors duration-300 hover:border-gold hover:text-gold focus-visible:ring-2 focus-visible:ring-gold"
        >
          {playing
            ? <Pause className="h-3.5 w-3.5" aria-hidden="true" />
            : <Play className="h-3.5 w-3.5" aria-hidden="true" />
          }
        </button>
      </div>

      {/* Announcement for screen readers when state changes */}
      <div
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      >
        {playing ? "Testimonials are scrolling" : "Testimonials are paused"}
      </div>

      {/* Scrolling track */}
      <div
        className="relative"
        onMouseEnter={() => setPlaying(false)}
        onMouseLeave={() => !prefersReducedMotion && setPlaying(true)}
        onFocus={() => setPlaying(false)}
        onBlur={() => !prefersReducedMotion && setPlaying(true)}
        aria-label="Testimonials"
        aria-roledescription="carousel"
      >
        {/* Edge fades */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-ink to-transparent sm:w-24"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-ink to-transparent sm:w-24"
          aria-hidden="true"
        />

        <div className="overflow-hidden">
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex gap-5 py-2"
            aria-live="off"
          >
            {[...TESTIMONIALS, ...TESTIMONIALS].map((testimonial, i) => (
              <TestimonialCard
                key={`${testimonial.id}-${i}`}
                testimonial={testimonial}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
