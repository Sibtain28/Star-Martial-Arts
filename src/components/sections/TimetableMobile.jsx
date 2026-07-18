import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { DAYS, TIME_SLOTS, getClass, isDayClosed } from "../../data/timetable";
import ClassSlot from "./ClassSlot";

export default function TimetableMobile({ activeFilter }) {
  const [openDay, setOpenDay] = useState(DAYS[0]);

  return (
    <div className="flex flex-col gap-3 lg:hidden">
      {DAYS.map((day, i) => {
        const closed = isDayClosed(day);
        const classes = TIME_SLOTS.map((slot) => ({ slot, entry: getClass(day, slot.id) })).filter(
          ({ entry }) => entry
        );
        const visibleClasses =
          activeFilter === "all"
            ? classes
            : classes.filter(({ entry }) => entry.program === activeFilter);

        const isOpen = openDay === day;

        return (
          <motion.div
            key={day}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.04 }}
            className="overflow-hidden rounded-sm border border-white/10 bg-white/[0.03] backdrop-blur-xl"
          >
            <button
              type="button"
              onClick={() => setOpenDay(isOpen ? null : day)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between px-5 py-4"
            >
              <span className="flex items-baseline gap-3">
                <span className="font-display text-xl tracking-wide text-bone">
                  {day}
                </span>
                {!closed && (
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold/70">
                    {visibleClasses.length} class{visibleClasses.length === 1 ? "" : "es"}
                  </span>
                )}
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="h-4 w-4 text-bone-dim" />
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="flex flex-col gap-2.5 px-5 pb-5">
                    {closed && (
                      <p className="py-2 text-center font-mono text-xs uppercase tracking-[0.2em] text-bone-dim/50">
                        Dojo Closed &mdash; Rest Day
                      </p>
                    )}

                    {!closed && visibleClasses.length === 0 && (
                      <p className="py-2 text-center font-mono text-xs uppercase tracking-[0.2em] text-bone-dim/50">
                        No classes match this filter
                      </p>
                    )}

                    {!closed &&
                      visibleClasses.map(({ slot, entry }) => (
                        <ClassSlot key={slot.id} entry={entry} timeLabel={slot.label} />
                      ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
