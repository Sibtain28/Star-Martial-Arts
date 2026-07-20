import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import DifficultyBadge from "../ui/DifficultyBadge";
import mmaImg from "../../assets/mma.png";
import boxingImg from "../../assets/boxing.png";
import kickboxingImg from "../../assets/kickboxing.jpg";
import fitnessImg from "../../assets/fitness.png";
import kidsImg from "../../assets/kids.png";
import selfDefenceImg from "../../assets/self-defence.png";
import unarmedCombatImg from "../../assets/unarmed-combat.png";
import muayBoranImg from "../../assets/muay-boran.png";
import crossfitImg from "../../assets/crossfit.png";
import weightLossImg from "../../assets/weight-loss.png";
import strengthImg from "../../assets/strength.png";
import personalTrainingImg from "../../assets/personal-training.png";
import fightPrepImg from "../../assets/fight-prep.png";
import juJitsuImg from "../../assets/ju-jitsu.png";

const PROGRAM_SLUGS = [
  "mma",
  "boxing",
  "kickboxing",
  "self-defence",
  "unarmed-combat",
  "muay-boran",
  "crossfit",
  "weight-loss",
  "strength",
  "personal-training",
  "fight-prep",
  "ju-jitsu",
  "fitness",
  "kids",
];

const PROGRAM_IMAGES = {
  mma: mmaImg,
  boxing: boxingImg,
  kickboxing: kickboxingImg,
  fitness: fitnessImg,
  kids: kidsImg,
  "self-defence": selfDefenceImg,
  "unarmed-combat": unarmedCombatImg,
  "muay-boran": muayBoranImg,
  crossfit: crossfitImg,
  "weight-loss": weightLossImg,
  strength: strengthImg,
  "personal-training": personalTrainingImg,
  "fight-prep": fightPrepImg,
  "ju-jitsu": juJitsuImg,
};

const PROGRAM_IMAGE_POSITIONS = {
  mma: "center 20%",
  boxing: "center 20%",
  kickboxing: "center 10%",
  fitness: "center 20%",
  kids: "center 20%",
  "self-defence": "center 20%",
  "unarmed-combat": "center 20%",
  "muay-boran": "center 20%",
  crossfit: "center 20%",
  "weight-loss": "center 20%",
  strength: "center 20%",
  "personal-training": "center 20%",
  "fight-prep": "center 20%",
  "ju-jitsu": "center 20%",
};

export default function ProgramCard({ program, index = 0 }) {
  const {
    name,
    fullName,
    icon: Icon,
    difficulty,
    description,
    accent,
    slug,
  } = program;
  const prefersReducedMotion = useReducedMotion();
  const hoverY = prefersReducedMotion ? 0 : -8;

  const cardNumber = String(PROGRAM_SLUGS.indexOf(slug) + 1).padStart(2, "0");

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.07,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: hoverY }}
      className="group card-shadow-dark relative flex flex-col overflow-hidden rounded-sm border border-white/10 bg-surface transition-colors duration-300 hover:border-gold/50"
      aria-label={`${fullName} program`}
    >
      {/* Program image / gradient header */}
      <div
        className={`relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-gradient-to-br ${accent}`}
        aria-hidden="true"
      >
        {PROGRAM_IMAGES[slug] && (
          <img
            src={PROGRAM_IMAGES[slug]}
            alt={fullName}
            style={{ objectPosition: PROGRAM_IMAGE_POSITIONS[slug] || "center center" }}
            className="absolute inset-0 h-full w-full object-cover opacity-50 grayscale contrast-[1.15] transition-all duration-500 group-hover:scale-105 group-hover:opacity-75 group-hover:grayscale-0"
          />
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-80" />
        <div className="pointer-events-none absolute inset-0 bg-noise opacity-70" />
        <span className="pointer-events-none absolute inset-3 border border-white/10 transition-colors duration-300 group-hover:border-gold/30" />

        {/* Large background letter */}
        <span className="pointer-events-none absolute -bottom-4 -right-2 select-none font-display text-stroke-gold text-8xl leading-none opacity-10 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
          {name.slice(0, 1)}
        </span>

        {/* Icon badge - only render if program has no photo backdrop */}
        {!PROGRAM_IMAGES[slug] && (
          <motion.span
            className="relative flex h-16 w-16 items-center justify-center rounded-full border border-gold/40 bg-ink/60 backdrop-blur-sm"
            whileHover={prefersReducedMotion ? {} : { scale: 1.08, rotate: 6 }}
            transition={{ duration: 0.3 }}
          >
            <Icon className="h-7 w-7 text-gold" strokeWidth={1.5} />
          </motion.span>
        )}

        {/* Card index */}
        <span className="absolute left-4 top-4 font-mono text-[10px] uppercase tracking-[0.25em] text-bone/60">
          {cardNumber}
        </span>
      </div>

      {/* Card body */}
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold/80">
          {fullName}
        </p>
        <h3 className="mt-1.5 font-display text-2xl tracking-wide text-bone">
          {name}
        </h3>

        <div className="mt-3">
          <DifficultyBadge level={difficulty} />
        </div>

        <p
          className="mt-4 flex-1 text-[15px] leading-relaxed text-bone-dim"
          dangerouslySetInnerHTML={{ __html: description }}
        />

        <a
          href={`/#programs`}
          className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-bone transition-colors duration-300 hover:text-gold focus-visible:text-gold"
          aria-label={`View ${name} program details`}
        >
          View Program
          <ArrowUpRight
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </a>
      </div>
    </motion.article>
  );
}
