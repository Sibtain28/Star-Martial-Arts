import SectionHeading from "../ui/SectionHeading";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import ContactMap from "./ContactMap";

export default function ContactSection() {
  return (
    <section className="relative overflow-hidden bg-ink py-12 sm:py-14">
      <div className="pointer-events-none absolute inset-0 bg-noise" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Get In Touch"
          title="QUESTIONS? LET'S TALK"
          description="Whether you're booking a trial or just curious about a program, our front desk team replies within one business day."
          light
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-[1.4fr_1fr]">
          <ContactForm />
          <ContactInfo />
        </div>

        <div className="mt-6">
          <ContactMap />
        </div>
      </div>
    </section>
  );
}
