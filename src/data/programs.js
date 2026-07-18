import { Swords, HandFist, Flame, Dumbbell, Baby } from "lucide-react";

/**
 * Difficulty is expressed on the club's own belt scale rather than a
 * generic "easy/medium/hard" label — it's the same rank language used
 * throughout the site (see BeltStripe / SectionHeading).
 */
export const DIFFICULTY = {
  beginner: { label: "Beginner Friendly", belt: "var(--color-belt-white)", dot: "border-ink/20" },
  intermediate: { label: "Intermediate", belt: "var(--color-belt-orange)", dot: "border-transparent" },
  advanced: { label: "Advanced", belt: "var(--color-belt-black)", dot: "border-white/30" },
  all: { label: "All Levels", belt: "var(--color-gold)", dot: "border-transparent" },
};

export const PROGRAMS = [
  {
    slug: "mma",
    name: "MMA",
    fullName: "Mixed Martial Arts",
    icon: Swords,
    difficulty: "advanced",
    duration: "90 min",
    description:
      "Strike, clinch and grapple in one system. Our MMA program blends boxing, Muay Thai and BJJ into complete, fight-tested skill.",
    accent: "from-red/25 via-ink to-ink",
  },
  {
    slug: "boxing",
    name: "Boxing",
    fullName: "Western Boxing",
    icon: HandFist,
    difficulty: "all",
    duration: "60 min",
    description:
      "Footwork, head movement and hand speed built the old-fashioned way &mdash; on pads, on the bag, and in controlled sparring.",
    accent: "from-gold/20 via-ink to-ink",
  },
  {
    slug: "kickboxing",
    name: "Kickboxing",
    fullName: "Kickboxing Conditioning",
    icon: Flame,
    difficulty: "intermediate",
    duration: "60 min",
    description:
      "High-tempo striking rounds combining punches, kicks and knees for a full-body cardio burn and sharper reflexes.",
    accent: "from-red/25 via-ink to-ink",
  },
  {
    slug: "fitness",
    name: "Fitness Training",
    fullName: "Strength & Conditioning",
    icon: Dumbbell,
    difficulty: "all",
    duration: "45 min",
    description:
      "Functional strength, mobility and conditioning circuits built to support every martial art we teach &mdash; and everyday life.",
    accent: "from-red/15 via-ink to-ink",
  },
  {
    slug: "kids",
    name: "Kids Martial Arts",
    fullName: "Ages 6&ndash;12",
    icon: Baby,
    difficulty: "beginner",
    duration: "45 min",
    description:
      "Discipline, focus and confidence taught through age-appropriate karate games, drills and belt milestones.",
    accent: "from-gold/20 via-ink to-ink",
  },
];
