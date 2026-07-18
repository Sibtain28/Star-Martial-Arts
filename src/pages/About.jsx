import PageHero from "../components/sections/PageHero";
import ClubIntro from "../components/sections/ClubIntro";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import MissionVision from "../components/sections/MissionVision";
import Benefits from "../components/sections/Benefits";
import Statistics from "../components/sections/Statistics";
import CallToAction from "../components/sections/CallToAction";

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Star Martial Arts"
        title="FIVE DECADES OF DISCIPLINE, IN HYDERABAD"
        description="From a single karate class in 1969 to one of the city's most respected martial arts and fitness clubs — this is the story, the mission and the results behind Star."
        watermark="星"
      />
      <ClubIntro />
      <WhyChooseUs />
      <MissionVision />
      <Benefits />
      <Statistics />
      <CallToAction />
    </>
  );
}
