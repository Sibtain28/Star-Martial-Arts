import SectionHeading from "../ui/SectionHeading";
import ProgramCard from "./ProgramCard";
import { PROGRAMS } from "../../data/programs";

export default function ProgramsGrid() {
  return (
    <section className="relative overflow-hidden bg-ink py-12 sm:py-14">
      <div className="pointer-events-none absolute inset-0 bg-noise" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Our Programs"
          title="FIVE DISCIPLINES, ONE DOJO"
          description="Every program is taught by certified instructors and built on the same foundation of discipline, technique and respect."
          light
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROGRAMS.map((program, index) => (
            <ProgramCard key={program.slug} program={program} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
