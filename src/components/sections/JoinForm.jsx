import { AnimatePresence, motion } from "framer-motion";
import {
  Send,
  CheckCircle2,
  Sparkle,
  Flame,
  ShieldCheck,
  Trophy,
  Sunrise,
  Sunset,
  CalendarClock,
} from "lucide-react";
import FormField from "../ui/FormField";
import ChipSelect from "../ui/ChipSelect";
import Button from "../ui/Button";

import { PROGRAMS } from "../../data/programs";
import { useForm } from "../../hooks/useForm";
import {
  required,
  email as validEmail,
  phone as validPhone,
  minLength,
  numberRange,
} from "../../utils/validation";

const EXPERIENCE_OPTIONS = [
  { value: "new", label: "New to Martial Arts", icon: Sparkle },
  { value: "some", label: "Some Experience", icon: Flame },
  { value: "experienced", label: "Experienced", icon: ShieldCheck },
  { value: "competitive", label: "Competitive Athlete", icon: Trophy },
];

const TIMING_OPTIONS = [
  { value: "morning", label: "Morning (6–8 AM)", icon: Sunrise },
  { value: "evening", label: "Evening (5–9 PM)", icon: Sunset },
  { value: "flexible", label: "Flexible", icon: CalendarClock },
];

const PROGRAM_OPTIONS = PROGRAMS.map((p) => ({ value: p.slug, label: p.name, icon: p.icon }));

const INITIAL_VALUES = {
  name: "",
  email: "",
  phone: "",
  age: "",
  program: "",
  experience: "",
  timing: "",
  message: "",
};

const RULES = {
  name: [(v) => required(v), (v) => minLength(v, 2, "Name")],
  email: [(v) => required(v), (v) => validEmail(v)],
  phone: [(v) => required(v), (v) => validPhone(v)],
  age: [(v) => required(v), (v) => numberRange(v, 5, 70, "Age")],
  program: [(v) => required(v, "Please select a program")],
  experience: [(v) => required(v, "Please select your experience level")],
  timing: [(v) => required(v, "Please select a preferred timing")],
};

/** Small section-separator label with belt tick */
function StepLabel({ step, label }) {
  return (
    <p className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-gold/80">
      <span className="belt-stripe h-1 w-5 rounded-full flex-shrink-0" aria-hidden="true" />
      {step} &mdash; {label}
    </p>
  );
}

export default function JoinForm() {
  const { values, errors, submitted, handlers, handleSubmit, setField, reset } = useForm(
    INITIAL_VALUES,
    RULES
  );

  return (
    <div
      className="relative overflow-hidden rounded-sm border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl sm:p-9"
      aria-live="polite"
    >
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center py-14 text-center"
            role="status"
            aria-live="polite"
          >
            <span
              className="flex h-16 w-16 items-center justify-center rounded-full border border-gold/40 bg-gold/10"
              aria-hidden="true"
            >
              <CheckCircle2 className="h-8 w-8 text-gold" strokeWidth={1.5} />
            </span>
            <h3 className="mt-6 font-display text-3xl tracking-wide text-bone">
              WELCOME TO STAR
            </h3>
            <p className="mt-3 max-w-md text-[15px] leading-relaxed text-bone-dim">
              Your registration is in. Our team will call you within 24 hours to confirm
              your first free trial class.
            </p>
            <button
              type="button"
              onClick={reset}
              className="mt-7 font-mono text-xs uppercase tracking-[0.2em] text-gold underline decoration-gold/40 underline-offset-4 transition-colors duration-200 hover:decoration-gold"
            >
              Submit another registration
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onSubmit={handleSubmit}
            noValidate
            className="flex flex-col gap-8"
            aria-label="Join Now registration form"
          >
            {/* Step 01 — Personal details */}
            <div className="flex flex-col gap-5">
              <StepLabel step="01" label="Your Details" />
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <FormField
                  label="Full Name"
                  name="name"
                  required
                  value={values.name}
                  error={errors.name}
                  placeholder="Your name"
                  {...handlers}
                />
                <FormField
                  label="Age"
                  name="age"
                  type="number"
                  required
                  min={5}
                  max={70}
                  value={values.age}
                  error={errors.age}
                  placeholder="e.g. 24"
                  {...handlers}
                />
                <FormField
                  label="Email"
                  name="email"
                  type="email"
                  required
                  value={values.email}
                  error={errors.email}
                  placeholder="you@example.com"
                  {...handlers}
                />
                <FormField
                  label="Phone"
                  name="phone"
                  type="tel"
                  required
                  value={values.phone}
                  error={errors.phone}
                  placeholder="+91 98765 43210"
                  {...handlers}
                />
              </div>
            </div>

            {/* Step 02 — Program selection */}
            <div className="flex flex-col gap-5 border-t border-white/10 pt-8">
              <StepLabel step="02" label="Choose Your Program" />
              <ChipSelect
                label="Program"
                name="program"
                required
                options={PROGRAM_OPTIONS}
                value={values.program}
                onChange={setField}
                error={errors.program}
                columns="grid-cols-2 sm:grid-cols-4"
              />
            </div>

            {/* Step 03 — Experience & timing */}
            <div className="flex flex-col gap-8 border-t border-white/10 pt-8 sm:flex-row">
              <div className="flex-1">
                <ChipSelect
                  label="Experience Level"
                  name="experience"
                  required
                  options={EXPERIENCE_OPTIONS}
                  value={values.experience}
                  onChange={setField}
                  error={errors.experience}
                  columns="grid-cols-2"
                />
              </div>
              <div className="flex-1">
                <ChipSelect
                  label="Preferred Timing"
                  name="timing"
                  required
                  options={TIMING_OPTIONS}
                  value={values.timing}
                  onChange={setField}
                  error={errors.timing}
                  columns="grid-cols-1 sm:grid-cols-3"
                />
              </div>
            </div>

            {/* Step 04 — Optional message */}
            <div className="flex flex-col gap-5 border-t border-white/10 pt-8">
              <StepLabel step="03" label="Anything Else?" />
              <FormField
                label="Message (optional)"
                name="message"
                type="textarea"
                rows={4}
                value={values.message}
                placeholder="Injuries, goals, questions — anything we should know before your first class."
                {...handlers}
              />
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              icon={Send}
              className="self-start"
            >
              Complete Registration
            </Button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
