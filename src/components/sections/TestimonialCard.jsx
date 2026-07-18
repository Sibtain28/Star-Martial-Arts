import { Quote } from "lucide-react";
import AvatarPlaceholder from "../ui/AvatarPlaceholder";
import StarRating from "../ui/StarRating";
import ProgramBadge from "../ui/ProgramBadge";

export default function TestimonialCard({ testimonial }) {
  const { name, program, tenure, rating, review } = testimonial;

  return (
    <article className="relative flex h-full w-[320px] shrink-0 flex-col overflow-hidden rounded-sm border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition-colors duration-300 hover:border-gold/40 sm:w-[380px] sm:p-7">
      <Quote className="h-6 w-6 text-gold/50" strokeWidth={1.5} />

      <p className="mt-4 flex-1 text-sm leading-relaxed text-bone-dim sm:text-[15px]">
        &ldquo;{review}&rdquo;
      </p>

      <div className="mt-6 flex items-center gap-3.5 border-t border-white/10 pt-5">
        <AvatarPlaceholder name={name} />
        <div className="min-w-0 flex-1">
          <p className="truncate font-display text-base tracking-wide text-bone">
            {name}
          </p>
          <p className="truncate font-mono text-[10px] uppercase tracking-[0.15em] text-bone-dim">
            {tenure}
          </p>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between gap-3">
        <ProgramBadge slug={program} />
        <StarRating rating={rating} />
      </div>
    </article>
  );
}
