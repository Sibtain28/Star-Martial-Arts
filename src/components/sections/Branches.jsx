import { MapPin } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";

const BRANCHES = [
  "Alijah Kotla",
  "Chandulal Baradari",
  "Falaknuma",
  "Barkas",
  "Chandrayangutta",
  "Attapur",
  "Tolichowki",
  "Suncity",
  "Upperpally",
  "Manikonda",
  "Malkajgiri",
  "Miyapur",
];

export default function Branches() {
  return (
    <section id="branches" className="relative overflow-hidden bg-ink py-12 sm:py-14">
      <div className="pointer-events-none absolute inset-0 bg-noise" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Our Network"
          title="12 DOJO LOCATIONS"
          description="Train at any of our branches across Hyderabad."
          light
          align="center"
        />
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {BRANCHES.map((branch) => (
            <div
              key={branch}
              className="flex items-center gap-3 rounded-sm border border-white/10 bg-white/[0.02] p-4 text-bone transition-colors duration-300 hover:border-gold/40 hover:bg-white/[0.04]"
            >
              <MapPin className="h-4 w-4 text-gold shrink-0" aria-hidden="true" />
              <span className="font-mono text-xs uppercase tracking-wider">{branch}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
