import SectionHeading from "../ui/SectionHeading";
import TrainerCard from "./TrainerCard";
import { TRAINERS } from "../../data/trainers";

export default function TrainersGrid() {
  return (
    <section className="relative overflow-hidden bg-ink py-12 sm:py-14">
      <div className="pointer-events-none absolute inset-0 bg-noise" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Our Trainers"
          title="LEARN FROM THOSE WHO'VE DONE IT"
          description="Every coach at Star holds a certified rank in their discipline &mdash; and years of experience teaching it, not just competing in it."
          light
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TRAINERS.map((trainer, index) => (
            <TrainerCard key={trainer.slug} trainer={trainer} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
