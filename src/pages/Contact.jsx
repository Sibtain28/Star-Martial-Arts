import PageHero from "../components/sections/PageHero";
import ContactSection from "../components/sections/ContactSection";

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="COME TRAIN WITH US"
        description="Drop by the dojo, call the front desk, or send a message below &mdash; we're happy to help you find the right program."
        watermark="話"
      />
      <ContactSection />
    </>
  );
}
