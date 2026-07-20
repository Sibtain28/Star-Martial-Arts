import { Star } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import TestimonialsCarousel from "./TestimonialsCarousel";

export default function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-ink py-12 sm:py-14">
      <div className="pointer-events-none absolute inset-0 bg-noise" />
      <div className="pointer-events-none absolute -top-24 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-gold/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Testimonials"
          title="WHAT OUR STUDENTS SAY"
          description="Read feedback from our members about their training experience."
          light
          align="center"
        />

        <div className="mt-6 flex items-center justify-center gap-3">
          <span className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-gold text-gold" strokeWidth={1.5} />
            ))}
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-bone-dim">
            4.9 / 5 from 163 Google reviews
          </span>
        </div>

        <div className="mt-14">
          <TestimonialsCarousel />
        </div>
      </div>
    </section>
  );
}
