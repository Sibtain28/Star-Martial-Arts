import PageHero from "../components/sections/PageHero";
import ProgramsGrid from "../components/sections/ProgramsGrid";
import CallToAction from "../components/sections/CallToAction";

export default function Programs() {
  return (
    <>
      <PageHero
        eyebrow="Programs"
        title="TRAIN IN EVERY DISCIPLINE, UNDER ONE ROOF"
        description="From striking to grappling to strength &mdash; find the program that fits your goals, or combine a few, all taught by certified black-belt instructors."
        watermark="拳"
      />
      <ProgramsGrid />
      <CallToAction />
    </>
  );
}
