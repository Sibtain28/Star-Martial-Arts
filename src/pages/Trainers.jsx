import PageHero from "../components/sections/PageHero";
import TrainersGrid from "../components/sections/TrainersGrid";
import CallToAction from "../components/sections/CallToAction";

export default function Trainers() {
  return (
    <>
      <PageHero
        eyebrow="Our Trainers"
        title="THE COACHES BEHIND EVERY BELT"
        description="Black belts, state champions and certified specialists &mdash; meet the instructors who've shaped Star Martial Arts for over five decades."
        watermark="道"
      />
      <TrainersGrid />
      <CallToAction />
    </>
  );
}
