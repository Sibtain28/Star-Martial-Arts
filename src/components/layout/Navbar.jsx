import { useEffect, useState, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "../ui/Logo";
import Button from "../ui/Button";
import { NAV_LINKS } from "../../data/navigation";
import { useScrollSpy } from "../../hooks/useScrollSpy";

/** Tailwind classes for the active desktop nav link */
const activeClass = "text-gold";
/** Tailwind classes for the inactive desktop nav link */
const inactiveClass = "text-bone-dim hover:text-bone";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Track active section for SPA scroll-spy
  const sectionIds = useMemo(() => NAV_LINKS.map(link => link.href.replace("/#", "")).filter(Boolean), []);
  const activeSectionId = useScrollSpy(sectionIds, 80);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Handle smooth scroll to hash on initial load or manual navigation
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setOpen(false);

    const isHashLink = href.startsWith("/#");
    if (isHashLink) {
      const id = href.replace("/#", "");
      if (location.pathname !== "/") {
        // Navigate to home page with hash if we are on a different route (e.g. /privacy)
        navigate(href);
      } else {
        // Smooth scroll if we are already on the landing page
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          // Update URL hash without causing a hard jump
          window.history.pushState(null, "", `/#${id}`);
        }
      }
    } else {
      navigate(href);
    }
  };

  return (
    <header
      role="banner"
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ink/90 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/20"
          : "bg-gradient-to-b from-ink/60 to-transparent"
      }`}
    >
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10"
      >
        <Logo />

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 lg:flex" role="list">
          {NAV_LINKS.map((link) => {
            const targetId = link.href.replace("/#", "");
            const isActive = location.pathname === "/" && activeSectionId === targetId;

            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  aria-label={link.label}
                  className={`group relative font-mono text-xs uppercase tracking-[0.2em] transition-colors duration-300 ${
                    isActive ? activeClass : inactiveClass
                  }`}
                >
                  {link.label}
                  {/* Animated underline — always rendered but width transitions */}
                  <span
                    className={`absolute -bottom-1.5 left-0 h-[2px] bg-gold transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:block">
          <Button href="/#join" variant="primary" size="md">
            Join Now
          </Button>
        </div>

        {/* Mobile hamburger toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="flex h-10 w-10 items-center justify-center border border-bone/20 text-bone transition-colors duration-200 hover:border-gold hover:text-gold lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 top-[65px] z-40 overflow-y-auto bg-ink lg:hidden"
          >
            <ul
              role="list"
              className="flex flex-col divide-y divide-white/5 px-6 pt-4"
            >
              {NAV_LINKS.map((link, i) => {
                const targetId = link.href.replace("/#", "");
                const isActive = location.pathname === "/" && activeSectionId === targetId;
                
                return (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * i, duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`block py-4 font-display text-2xl tracking-wide transition-colors duration-200 ${
                        isActive ? "text-gold" : "text-bone hover:text-gold"
                      }`}
                    >
                      {link.label}
                    </a>
                  </motion.li>
                );
              })}
            </ul>

            <div className="px-6 pt-8 pb-10">
              <Button
                href="/#join"
                variant="primary"
                size="lg"
                className="w-full"
                onClick={(e) => handleNavClick(e, "/#join")}
              >
                Join Now
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
