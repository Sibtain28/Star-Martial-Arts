import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";

export default function ContactMap() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="relative overflow-hidden rounded-sm border border-white/10"
    >
      <div
        className="relative aspect-[16/10] w-full bg-surface sm:aspect-[16/7]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(238,234,225,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(238,234,225,0.06) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      >
        <div className="pointer-events-none absolute inset-0 bg-noise opacity-60" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(198,161,91,0.12),transparent_60%)]" />

        {/* Faux road lines for a map-like feel */}
        <div className="pointer-events-none absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-white/10" />
        <div className="pointer-events-none absolute bottom-0 top-0 left-1/3 w-px bg-white/10" />

        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-full flex-col items-center">
          <motion.span
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-gold bg-ink/80 shadow-lg backdrop-blur-sm"
          >
            <MapPin className="h-5 w-5 text-gold" strokeWidth={2} />
          </motion.span>
          <span className="mt-2 h-2 w-2 rounded-full bg-gold/50 blur-[2px]" />
        </div>

        <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-end justify-between gap-3 sm:bottom-6 sm:left-6 sm:right-6">
          <div className="rounded-sm border border-white/10 bg-ink/70 px-4 py-3 backdrop-blur-sm">
            <p className="font-display text-base tracking-wide text-bone">
              Star Martial Arts &amp; Fitness Club
            </p>
            <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.15em] text-bone-dim">
              Masqati Super Market, 4th Floor, Charminar, Hyderabad
            </p>
          </div>

          <a
            href="https://maps.google.com/maps?vet=10CAAQoqAOahcKEwj4ht7jv9qVAxUAAAAAHQAAAAAQDw..i&pvq=Cg0vZy8xMW4wY2tmel9tIiYKIFN0YXIgTWFydGlhbCBBcnRzICYgRml0bmVzcyBDbHViEAIYAw&lqi=CiBTdGFyIE1hcnRpYWwgQXJ0cyAmIEZpdG5lc3MgQ2x1Ykjz99u4gbSAgAhaOhAAEAEQAhADEAQQBRgAGAEYAhgDGAQYBSIgc3RhciBtYXJ0aWFsIGFydHMgJiBmaXRuZXNzIGNsdWKSAQtzcG9ydHNfY2x1Yg&fvr=1&cs=1&um=1&ie=UTF-8&fb=1&gl=in&sa=X&ftid=0x3bcb991d4530a0db:0x8abde0b3de80ed5"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-sm border border-gold/40 bg-ink/70 px-4 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-gold backdrop-blur-sm transition-colors duration-300 hover:border-gold hover:bg-ink"
          >
            <Navigation className="h-3.5 w-3.5" />
            Get Directions
          </a>
        </div>
      </div>
    </motion.div>
  );
}
