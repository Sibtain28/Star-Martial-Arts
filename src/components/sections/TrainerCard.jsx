import { motion, useReducedMotion } from "framer-motion";
import { Award, Trophy, CalendarClock } from "lucide-react";
import SocialIcon from "../ui/SocialIcon";
import trainer1Img from "../../assets/Trainer_1.jpg";
import trainer2Img from "../../assets/Trainer_2.png";
import trainer3Img from "../../assets/Trainer_3.png";
import founderImg from "../../assets/founder.jpg";
import directorImg from "../../assets/director.jpg";

const TRAINER_IMAGES = {
  "ms-jaweed": founderImg,
  "imaduddin-naveed": directorImg,
  "saqib-ali": trainer1Img,
  "afroz-mohammed": trainer2Img,
  "ashwin-kumar": trainer3Img,
};

export default function TrainerCard({ trainer, index = 0 }) {
  const {
    name,
    role,
    discipline,
    rank,
    experience,
    bio,
    certifications,
    achievements,
    accent,
    socials,
    slug,
  } = trainer;
  const prefersReducedMotion = useReducedMotion();

  const initials = name
    .replace(/^(Sensei|Coach)\s/, "")
    .split(" ")
    .map((w) => w[0])
    .join("");

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={prefersReducedMotion ? {} : { y: -8 }}
      className="card-shadow-dark group flex flex-col overflow-hidden rounded-sm border border-white/10 bg-surface transition-colors duration-300 hover:border-gold/50"
      aria-label={`${name}, ${role}`}
    >
      {/* Portrait area */}
      <div
        className={`relative aspect-[4/5] overflow-hidden bg-gradient-to-br ${accent}`}
        aria-hidden="true"
      >
        {TRAINER_IMAGES[slug] && (
          <img
            src={TRAINER_IMAGES[slug]}
            alt={name}
            style={{ objectPosition: "center 20%" }}
            className="absolute inset-0 h-full w-full object-cover opacity-60 grayscale contrast-[1.1] transition-all duration-500 group-hover:scale-105 group-hover:opacity-85 group-hover:grayscale-0"
          />
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-80" />
        <div className="pointer-events-none absolute inset-0 bg-noise opacity-70" />
        <span className="pointer-events-none absolute inset-3 border border-white/10 transition-colors duration-300 group-hover:border-gold/30" />

        {/* Initials watermark - only render if no image backdrop */}
        {!TRAINER_IMAGES[slug] && (
          <span
            className="pointer-events-none absolute inset-0 flex select-none items-center justify-center font-display text-stroke-gold text-[7rem] leading-none opacity-20 transition-transform duration-500 group-hover:scale-105"
            aria-hidden="true"
          >
            {initials}
          </span>
        )}

        {/* Rank badge */}
        <span className="absolute left-4 top-4 rounded-sm border border-gold/40 bg-ink/60 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-gold backdrop-blur-sm">
          {rank}
        </span>

        {/* Name overlay */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/70 to-transparent px-5 pb-5 pt-10">
          <h3 className="font-display text-2xl leading-none tracking-wide text-bone">
            {name}
          </h3>
          <p className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-gold/80">
            {role}
          </p>
        </div>
      </div>

      {/* Card body */}
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-4 border-b border-white/10 pb-5 font-mono text-[11px] uppercase tracking-[0.15em] text-bone-dim">
          <span className="flex items-center gap-1.5">
            <CalendarClock className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
            {experience}+ yrs experience
          </span>
          <span className="h-1 w-1 rounded-full bg-bone-dim/40" aria-hidden="true" />
          <span>{discipline}</span>
        </div>

        <p
          className="mt-5 text-[15px] leading-relaxed text-bone-dim"
          dangerouslySetInnerHTML={{ __html: bio }}
        />

        {/* Certifications */}
        <div className="mt-5">
          <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-gold/80">
            <Award className="h-3.5 w-3.5" aria-hidden="true" />
            Certifications
          </p>
          <ul className="mt-3 space-y-1.5" role="list">
            {certifications.map((cert) => (
              <li
                key={cert}
                className="flex gap-2 text-xs leading-relaxed text-bone-dim before:mt-1.5 before:h-1 before:w-1 before:shrink-0 before:rounded-full before:bg-gold/60"
                dangerouslySetInnerHTML={{ __html: cert }}
              />
            ))}
          </ul>
        </div>

        {/* Achievements */}
        <div className="mt-5">
          <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-gold/80">
            <Trophy className="h-3.5 w-3.5" aria-hidden="true" />
            Achievements
          </p>
          <ul className="mt-3 space-y-1.5" role="list">
            {achievements.map((achievement) => (
              <li
                key={achievement}
                className="flex gap-2 text-xs leading-relaxed text-bone-dim before:mt-1.5 before:h-1 before:w-1 before:shrink-0 before:rounded-full before:bg-red"
                dangerouslySetInnerHTML={{ __html: achievement }}
              />
            ))}
          </ul>
        </div>

        {/* Social links */}
        <div className="mt-6 flex items-center gap-2 border-t border-white/10 pt-5">
          {Object.entries(socials).map(([platform, href]) => (
            <a
              key={platform}
              href={href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${name} on ${platform}`}
              className="flex h-8 w-8 items-center justify-center rounded-sm border border-white/10 text-bone-dim transition-all duration-300 hover:border-gold hover:text-gold hover:scale-110"
            >
              <SocialIcon name={platform} className="h-3.5 w-3.5" />
            </a>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
