import { motion } from "framer-motion";
import ProgramBadge from "../ui/ProgramBadge";

export default function ClassSlot({ entry, timeLabel, dimmed = false }) {
  if (!entry) {
    return (
      <div className="flex h-full min-h-[64px] items-center justify-center rounded-sm border border-dashed border-white/10 text-[10px] font-mono uppercase tracking-[0.2em] text-bone-dim/40">
        Rest
      </div>
    );
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: dimmed ? 0.25 : 1, scale: 1 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      whileHover={dimmed ? {} : { y: -3 }}
      className={`flex h-full flex-col gap-2 rounded-sm border border-white/10 bg-white/[0.04] p-3 backdrop-blur-xl transition-colors duration-300 ${
        dimmed ? "pointer-events-none" : "hover:border-gold/40 hover:bg-white/[0.07]"
      }`}
    >
      {timeLabel && (
        <span
          className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone-dim"
          dangerouslySetInnerHTML={{ __html: timeLabel }}
        />
      )}
      <ProgramBadge slug={entry.program} />
      <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-bone-dim/70">
        {entry.level}
      </span>
    </motion.div>
  );
}
