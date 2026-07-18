import { useState, useEffect } from "react";

/**
 * Custom hook to determine which section is currently active based on scroll position.
 * @param {string[]} sectionIds Array of HTML element IDs to track
 * @param {number} offset Offset in pixels to trigger early/late (e.g., navbar height)
 * @returns {string} The ID of the active section
 */
export function useScrollSpy(sectionIds, offset = 100) {
  const [activeSection, setActiveSection] = useState(sectionIds[0]);

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = sectionIds[0];
      let minDistance = Infinity;

      // Check which section is closest to the top of the viewport (with offset)
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Distance from top of the screen to the top of the section, adjusted by offset
          const distance = Math.abs(rect.top - offset);

          // If the top of the section is near the top of the screen (or above it)
          if (rect.top <= offset + 10 && rect.bottom >= offset) {
            currentSection = id;
            minDistance = 0; // It's clearly the active one
          } else if (distance < minDistance && minDistance !== 0) {
            minDistance = distance;
            currentSection = id;
          }
        }
      });

      // Special case: If user is at the absolute bottom of the page, 
      // the last section should be considered active.
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 10
      ) {
        currentSection = sectionIds[sectionIds.length - 1];
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Trigger once on mount
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds, offset]);

  return activeSection;
}
