import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import SocialIcon from "../ui/SocialIcon";
import { SOCIAL_LINKS } from "../../data/navigation";
import { useScrollReveal } from "../../hooks/useScrollReveal";

const DETAILS = [
  {
    icon: Phone,
    label: "Call Us",
    value: "+91 90000 00837",
    href: "tel:+919000000837",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "hello@starmartialarts.in",
    href: "mailto:hello@starmartialarts.in",
  },
  {
    icon: MapPin,
    label: "Visit The Dojo",
    value: "Masqati Super Market, 4th Floor, Kotla Alijah, Charminar, Hyderabad, Telangana 500002",
  },
  {
    icon: Clock,
    label: "Front Desk Hours",
    value: "Mon – Sat, 6:00 AM – 9:00 PM",
  },
];

export default function ContactInfo() {
  const { fadeUp } = useScrollReveal({ margin: "-80px" });

  return (
    <motion.div {...fadeUp} className="flex flex-col gap-4">
      {DETAILS.map(({ icon: Icon, label, value, href }) => {
        const content = (
          <div className="flex items-start gap-4 rounded-sm border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl transition-colors duration-300 hover:border-gold/40">
            <span
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-gold/30 bg-ink"
              aria-hidden="true"
            >
              <Icon className="h-4 w-4 text-gold" strokeWidth={1.75} />
            </span>
            <div className="min-w-0">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold/80">
                {label}
              </p>
              <p className="mt-1.5 text-[15px] leading-relaxed text-bone-dim">
                {value}
              </p>
            </div>
          </div>
        );

        return href ? (
          <a key={label} href={href} className="block" aria-label={`${label}: ${value}`}>
            {content}
          </a>
        ) : (
          <div key={label}>{content}</div>
        );
      })}

      {/* Social links — shared from navigation data */}
      <div className="flex flex-wrap items-center gap-4 rounded-sm border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold/80">
          Follow Us
        </p>
        <div className="flex items-center gap-2">
          {SOCIAL_LINKS.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`Follow us on ${label}`}
              className="flex h-8 w-8 items-center justify-center rounded-sm border border-white/10 text-bone-dim transition-all duration-300 hover:border-gold hover:text-gold hover:scale-110"
            >
              <SocialIcon name={icon} className="h-3.5 w-3.5" />
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
