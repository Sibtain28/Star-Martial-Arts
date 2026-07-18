import { AnimatePresence, motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import FormField from "../ui/FormField";
import Button from "../ui/Button";
import { useForm } from "../../hooks/useForm";
import {
  required,
  email as validEmail,
  phone as validPhone,
  minLength,
} from "../../utils/validation";

const INITIAL_VALUES = { name: "", email: "", phone: "", subject: "", message: "" };

const RULES = {
  name: [(v) => required(v), (v) => minLength(v, 2, "Name")],
  email: [(v) => required(v), (v) => validEmail(v)],
  phone: [(v) => validPhone(v)],
  subject: [(v) => required(v)],
  message: [(v) => required(v), (v) => minLength(v, 10, "Message")],
};

export default function ContactForm() {
  const { values, errors, submitted, handlers, handleSubmit, reset } = useForm(
    INITIAL_VALUES,
    RULES
  );

  return (
    <div
      className="relative overflow-hidden rounded-sm border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl sm:p-8"
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
            className="flex flex-col items-center py-10 text-center"
            role="status"
            aria-live="polite"
          >
            <span
              className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-gold/10"
              aria-hidden="true"
            >
              <CheckCircle2 className="h-7 w-7 text-gold" strokeWidth={1.5} />
            </span>
            <h3 className="mt-5 font-display text-2xl tracking-wide text-bone">
              MESSAGE SENT
            </h3>
            <p className="mt-2 max-w-sm text-[15px] leading-relaxed text-bone-dim">
              Thanks for reaching out &mdash; our front desk will get back to you within
              one business day.
            </p>
            <button
              type="button"
              onClick={reset}
              className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-gold underline decoration-gold/40 underline-offset-4 transition-colors duration-200 hover:decoration-gold"
            >
              Send another message
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
            className="flex flex-col gap-5"
            aria-label="Contact form"
          >
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
                label="Email"
                name="email"
                type="email"
                required
                value={values.email}
                error={errors.email}
                placeholder="you@example.com"
                {...handlers}
              />
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <FormField
                label="Phone (optional)"
                name="phone"
                type="tel"
                value={values.phone}
                error={errors.phone}
                placeholder="+91 98765 43210"
                {...handlers}
              />
              <FormField
                label="Subject"
                name="subject"
                type="select"
                required
                value={values.subject}
                error={errors.subject}
                options={[
                  { value: "", label: "Select a topic" },
                  { value: "trial", label: "Book a Free Trial" },
                  { value: "programs", label: "Programs & Pricing" },
                  { value: "membership", label: "Existing Membership" },
                  { value: "other", label: "Something Else" },
                ]}
                {...handlers}
              />
            </div>

            <FormField
              label="Message"
              name="message"
              type="textarea"
              required
              rows={5}
              value={values.message}
              error={errors.message}
              placeholder="Tell us what you're looking for&hellip;"
              {...handlers}
            />

            <Button type="submit" variant="primary" size="lg" icon={Send} className="self-start">
              Send Message
            </Button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
