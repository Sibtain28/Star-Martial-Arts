import SectionHeading from "../ui/SectionHeading";
import JoinForm from "./JoinForm";

export default function JoinSection() {
  return (
    <section className="relative overflow-hidden bg-ink py-12 sm:py-14">
      <div className="pointer-events-none absolute inset-0 bg-noise" />
      <div className="pointer-events-none absolute -top-24 right-[-10%] h-[420px] w-[420px] rounded-full bg-red/15 blur-[140px]" />

      <div className="relative mx-auto max-w-4xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Registration"
          title="START YOUR FIRST CLASS, FREE"
          description="Fill in your details below and our team will confirm your first free trial within 24 hours."
          light
          align="center"
        />

        <div className="mt-14">
          <JoinForm />
        </div>
      </div>
    </section>
  );
}
