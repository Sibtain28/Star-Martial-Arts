import { Star } from "lucide-react";

/**
 * Renders `rating` (0-5) as filled/empty stars. Purely presentational —
 * used on testimonial cards and can be reused anywhere a rating is shown.
 */
export default function StarRating({ rating, max = 5, size = "h-3.5 w-3.5" }) {
  return (
    <div className="flex items-center gap-1" role="img" aria-label={`${rating} out of ${max} stars`}>
      {Array.from({ length: max }).map((_, i) => (
        <Star
          key={i}
          className={`${size} ${i < rating ? "fill-gold text-gold" : "fill-transparent text-bone-dim/30"}`}
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}
