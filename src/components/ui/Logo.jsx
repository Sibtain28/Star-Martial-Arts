import logoImg from "../../assets/LOGO.png";

export default function Logo({ className = "" }) {
  return (
    <a
      href="/#home"
      className={`group inline-flex items-center gap-3 ${className}`}
      aria-label="Star Martial Arts & Fitness Club — Home"
    >
      <span className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-sm border border-gold/40 bg-surface transition-colors duration-300 group-hover:border-gold">
        <img
          src={logoImg}
          alt="Star Martial Arts & Fitness Club Logo"
          className="h-full w-full object-contain p-0.5 transition-transform duration-300 group-hover:scale-105"
        />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-xl tracking-wide text-bone">
          STAR
        </span>
        <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-gold/80">
          Martial Arts &amp; Fitness
        </span>
      </span>
    </a>
  );
}
