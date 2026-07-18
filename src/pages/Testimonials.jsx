import PageHero from "../components/sections/PageHero";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import CallToAction from "../components/sections/CallToAction";

export default function Testimonials() {
  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title="TRUSTED BY HYDERABAD'S ATHLETES"
        description="From first-time beginners to competitive fighters &mdash; here's what training at Star Martial Arts has meant to our members."
        watermark="信"
      />
      <TestimonialsSection />
      <CallToAction />
    </>
  );
}
