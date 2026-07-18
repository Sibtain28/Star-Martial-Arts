/**
 * The brand palette only has two real accent hues (gold, red) plus neutral
 * bone, so instead of inventing an off-brand color per program, each
 * program is given a tone family + its own icon (from data/programs.js).
 * Icon + label + tone together keep every badge distinguishable without
 * resorting to a rainbow of arbitrary colors.
 */
export const PROGRAM_TONES = {
  mma: "red",
  boxing: "gold",
  kickboxing: "red",
  "muay-thai": "gold",
  bjj: "bone",
  fitness: "red",
  kids: "gold",
};

export const TONE_STYLES = {
  gold: {
    chip: "border-gold/40 bg-gold/10 text-gold",
    dot: "bg-gold",
    glow: "hover:shadow-[0_0_0_1px_rgba(198,161,91,0.35)]",
  },
  red: {
    chip: "border-red-hi/40 bg-red/15 text-red-hi",
    dot: "bg-red-hi",
    glow: "hover:shadow-[0_0_0_1px_rgba(180,50,63,0.4)]",
  },
  bone: {
    chip: "border-bone/30 bg-bone/10 text-bone",
    dot: "bg-bone",
    glow: "hover:shadow-[0_0_0_1px_rgba(238,234,225,0.3)]",
  },
};
