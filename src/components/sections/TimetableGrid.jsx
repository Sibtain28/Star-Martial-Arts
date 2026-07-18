import { motion } from "framer-motion";
import { DAYS, TIME_SLOTS, getClass, isDayClosed } from "../../data/timetable";
import ClassSlot from "./ClassSlot";

export default function TimetableGrid({ activeFilter }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="hidden overflow-x-auto rounded-sm border border-white/10 bg-white/[0.03] p-4 backdrop-blur-xl lg:block"
    >
      <div
        className="grid min-w-[980px] gap-2.5"
        style={{
          gridTemplateColumns: `140px repeat(${DAYS.length}, minmax(0, 1fr))`,
          gridTemplateRows: `auto repeat(${TIME_SLOTS.length}, minmax(0, 1fr))`,
        }}
      >
        {/* Corner cell */}
        <div style={{ gridColumn: 1, gridRow: 1 }} />

        {/* Day headers */}
        {DAYS.map((day, dayIdx) => (
          <div
            key={day}
            style={{ gridColumn: dayIdx + 2, gridRow: 1 }}
            className="flex flex-col items-center justify-end gap-1 border-b border-white/10 pb-3"
          >
            <span className="font-display text-lg tracking-wide text-bone">
              {day.slice(0, 3)}
            </span>
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-bone-dim">
              {day}
            </span>
          </div>
        ))}

        {/* Time labels */}
        {TIME_SLOTS.map((slot, rowIdx) => (
          <div
            key={slot.id}
            style={{ gridColumn: 1, gridRow: rowIdx + 2 }}
            className="flex flex-col justify-center border-r border-white/10 pr-3 text-right"
          >
            <span
              className="font-mono text-[11px] uppercase tracking-[0.1em] text-bone"
              dangerouslySetInnerHTML={{ __html: slot.label }}
            />
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-gold/70">
              {slot.period}
            </span>
          </div>
        ))}

        {/* Class cells */}
        {DAYS.map((day, dayIdx) => {
          if (isDayClosed(day)) {
            return (
              <div
                key={day}
                style={{
                  gridColumn: dayIdx + 2,
                  gridRow: `2 / span ${TIME_SLOTS.length}`,
                }}
                className="flex items-center justify-center rounded-sm border border-dashed border-white/10"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-bone-dim/50">
                  Closed
                </span>
              </div>
            );
          }

          return TIME_SLOTS.map((slot, rowIdx) => {
            const entry = getClass(day, slot.id);
            const dimmed =
              activeFilter !== "all" && entry && entry.program !== activeFilter;

            return (
              <div key={`${day}-${slot.id}`} style={{ gridColumn: dayIdx + 2, gridRow: rowIdx + 2 }}>
                <ClassSlot entry={entry} dimmed={Boolean(dimmed)} />
              </div>
            );
          });
        })}
      </div>
    </motion.div>
  );
}
