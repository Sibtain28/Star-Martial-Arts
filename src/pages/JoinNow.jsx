import PageHero from "../components/sections/PageHero";
import JoinSection from "../components/sections/JoinSection";

export default function JoinNow() {
  return (
    <>
      <PageHero
        eyebrow="Join Now"
        title="YOUR FIRST STEP ON THE MAT"
        description="No contracts, no pressure &mdash; just one free class to see if Star is the right fit for you."
        watermark="始"
      />
      <JoinSection />
    </>
  );
}
