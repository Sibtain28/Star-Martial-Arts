import Hero from "../components/sections/Hero";
import ClubIntro from "../components/sections/ClubIntro";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import MissionVision from "../components/sections/MissionVision";
import Benefits from "../components/sections/Benefits";
import Statistics from "../components/sections/Statistics";
import ProgramsGrid from "../components/sections/ProgramsGrid";
import TrainersGrid from "../components/sections/TrainersGrid";
import TimetableSection from "../components/sections/TimetableSection";
import GallerySection from "../components/sections/GallerySection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import ContactSection from "../components/sections/ContactSection";
import JoinSection from "../components/sections/JoinSection";
import CallToAction from "../components/sections/CallToAction";
import Branches from "../components/sections/Branches";

export default function LandingPage() {
  return (
    <div className="flex flex-col">
      <section id="home">
        <Hero />
      </section>
      
      <section id="about">
        <ClubIntro />
        <WhyChooseUs />
        <MissionVision />
        <Benefits />
        <Statistics />
      </section>

      <section id="programs">
        <ProgramsGrid />
      </section>

      <section id="trainers">
        <TrainersGrid />
      </section>

      <section id="timetable">
        <TimetableSection />
      </section>

      <section id="gallery">
        <GallerySection />
      </section>

      <section id="testimonials">
        <TestimonialsSection />
      </section>

      <section id="contact">
        <Branches />
        <ContactSection />
      </section>

      <section id="join">
        <JoinSection />
      </section>

      <CallToAction />
    </div>
  );
}
