import { MapPin, Mail, Phone } from "lucide-react";

import Logo from "../ui/Logo";
import BeltStripe from "../ui/BeltStripe";
import SocialIcon from "../ui/SocialIcon";
import { NAV_LINKS, SOCIAL_LINKS } from "../../data/navigation";

const PROGRAM_LINKS = [
  { label: "Kids Karate", href: "/#programs" },
  { label: "Adult Self-Defense", href: "/#programs" },
  { label: "Competitive Team", href: "/#programs" },
  { label: "Strength & Conditioning", href: "/#programs" },
];

export default function Footer() {
  return (
    <footer className="relative bg-ink-soft pt-16" aria-label="Site footer">
      <BeltStripe variant="divider" />

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">

          {/* Brand column */}
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-bone-dim">
              Hyderabad&rsquo;s martial arts and fitness home since 1969.
              Karate, self-defense and strength training for every age and
              belt level.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {SOCIAL_LINKS.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`Follow us on ${label}`}
                  className="flex h-9 w-9 items-center justify-center rounded-sm border border-white/10 text-bone-dim transition-all duration-300 hover:border-gold hover:text-gold hover:scale-110"
                >
                  <SocialIcon name={icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Explore column */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-gold">
              Explore
            </h3>
            <ul className="mt-5 space-y-3" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-bone-dim transition-colors duration-300 hover:text-bone"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs column */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-gold">
              Programs
            </h3>
            <ul className="mt-5 space-y-3" role="list">
              {PROGRAM_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-bone-dim transition-colors duration-300 hover:text-bone"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-gold">
              Visit The Dojo
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-bone-dim" role="list">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <address className="not-italic">
                  Masqati Super Market, 4th Floor,
                  <br />
                  Kotla Alijah, Charminar, Hyderabad, Telangana 500002
                </address>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <a
                  href="tel:+919000000837"
                  className="transition-colors duration-300 hover:text-bone"
                  aria-label="Call us at +91 90000 00837"
                >
                  +91 90000 00837
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <a
                  href="mailto:hello@starmartialarts.in"
                  className="transition-colors duration-300 hover:text-bone"
                  aria-label="Email us at hello@starmartialarts.in"
                >
                  hello@starmartialarts.in
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 text-center font-mono text-[11px] uppercase tracking-[0.15em] text-bone-dim sm:flex-row sm:text-left lg:px-10">
          <p>&copy; {new Date().getFullYear()} Star Martial Arts &amp; Fitness Club. All rights reserved.</p>
          <p>Est. 1969 &middot; Hyderabad, India</p>
        </div>
      </div>
    </footer>
  );
}
