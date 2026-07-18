/**
 * Lightweight, hand-drawn social glyphs. lucide-react no longer ships brand
 * marks, so these simple line-icon stand-ins keep the footer dependency-free.
 */
const PATHS = {
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </>
  ),
  facebook: (
    <path d="M14 9h2.5V6H14c-1.93 0-3.5 1.57-3.5 3.5V11H8v3h2.5v6h3v-6H16l.5-3h-3V9.6c0-.33.27-.6.5-.6z" />
  ),
  youtube: (
    <>
      <rect x="3" y="6.5" width="18" height="11" rx="3" />
      <path d="M10.5 9.75l4.5 2.25-4.5 2.25v-4.5z" fill="currentColor" stroke="none" />
    </>
  ),
};

export default function SocialIcon({ name, className = "h-4 w-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {PATHS[name]}
    </svg>
  );
}
