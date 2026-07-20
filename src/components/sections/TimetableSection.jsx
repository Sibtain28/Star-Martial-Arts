import { useState } from "react";
import SectionHeading from "../ui/SectionHeading";
import TimetableFilter from "./TimetableFilter";
import TimetableGrid from "./TimetableGrid";
import TimetableMobile from "./TimetableMobile";

export default function TimetableSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  return (
    <section className="relative overflow-hidden bg-ink-soft py-12 sm:py-14">
      <div className="pointer-events-none absolute inset-0 bg-noise" />
      <div className="pointer-events-none absolute -top-24 right-[-8%] h-[420px] w-[420px] rounded-full bg-gold/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Weekly Schedule"
          title="FIND YOUR CLASS, PICK YOUR TIME"
          description="Filter our weekly schedule by program to find the best slot."
          light
          align="center"
        />

        <div className="mt-10">
          <TimetableFilter active={activeFilter} onChange={setActiveFilter} />
        </div>

        <div className="mt-10">
          <TimetableGrid activeFilter={activeFilter} />
          <TimetableMobile activeFilter={activeFilter} />
        </div>

        <p className="mt-8 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-bone-dim/60">
          Timings may shift on public holidays &mdash; check with the front desk or your class WhatsApp group.
        </p>
      </div>
    </section>
  );
}
