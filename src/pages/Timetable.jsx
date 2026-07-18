import PageHero from "../components/sections/PageHero";
import TimetableSection from "../components/sections/TimetableSection";
import CallToAction from "../components/sections/CallToAction";

export default function Timetable() {
  return (
    <>
      <PageHero
        eyebrow="Class Timetable"
        title="A CLASS FOR EVERY SCHEDULE"
        description="Morning and evening sessions, six days a week. Find your discipline, pick a slot, and step on the mat."
        watermark="時"
      />
      <TimetableSection />
      <CallToAction />
    </>
  );
}
