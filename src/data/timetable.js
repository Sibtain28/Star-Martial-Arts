export const DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export const TIME_SLOTS = [
  { id: "t1", label: "06:00 &ndash; 07:00 AM", period: "Morning" },
  { id: "t2", label: "07:00 &ndash; 08:00 AM", period: "Morning" },
  { id: "t3", label: "05:00 &ndash; 06:00 PM", period: "Evening" },
  { id: "t4", label: "06:00 &ndash; 07:00 PM", period: "Evening" },
  { id: "t5", label: "07:00 &ndash; 08:00 PM", period: "Evening" },
  { id: "t6", label: "08:00 &ndash; 09:00 PM", period: "Evening" },
];

/**
 * Flat list of scheduled classes. Each entry references a program by its
 * `slug` from data/programs.js so badge color, icon and label stay in sync
 * with the Programs page automatically.
 */
export const SCHEDULE = [
  // Monday
  { day: "Monday", timeId: "t1", program: "kids", level: "Ages 6-12" },
  { day: "Monday", timeId: "t2", program: "bjj", level: "All Levels" },
  { day: "Monday", timeId: "t4", program: "boxing", level: "All Levels" },
  { day: "Monday", timeId: "t5", program: "mma", level: "Advanced" },
  { day: "Monday", timeId: "t6", program: "fitness", level: "All Levels" },

  // Tuesday
  { day: "Tuesday", timeId: "t1", program: "fitness", level: "All Levels" },
  { day: "Tuesday", timeId: "t2", program: "muay-thai", level: "Intermediate" },
  { day: "Tuesday", timeId: "t4", program: "kickboxing", level: "Intermediate" },
  { day: "Tuesday", timeId: "t5", program: "bjj", level: "Beginner" },
  { day: "Tuesday", timeId: "t6", program: "boxing", level: "All Levels" },

  // Wednesday
  { day: "Wednesday", timeId: "t1", program: "kids", level: "Ages 6-12" },
  { day: "Wednesday", timeId: "t2", program: "bjj", level: "All Levels" },
  { day: "Wednesday", timeId: "t4", program: "mma", level: "Advanced" },
  { day: "Wednesday", timeId: "t5", program: "muay-thai", level: "Intermediate" },
  { day: "Wednesday", timeId: "t6", program: "fitness", level: "All Levels" },

  // Thursday
  { day: "Thursday", timeId: "t1", program: "fitness", level: "All Levels" },
  { day: "Thursday", timeId: "t2", program: "kickboxing", level: "Intermediate" },
  { day: "Thursday", timeId: "t4", program: "boxing", level: "All Levels" },
  { day: "Thursday", timeId: "t5", program: "bjj", level: "Beginner" },
  { day: "Thursday", timeId: "t6", program: "mma", level: "Advanced" },

  // Friday
  { day: "Friday", timeId: "t1", program: "kids", level: "Ages 6-12" },
  { day: "Friday", timeId: "t2", program: "muay-thai", level: "Intermediate" },
  { day: "Friday", timeId: "t4", program: "fitness", level: "All Levels" },
  { day: "Friday", timeId: "t5", program: "kickboxing", level: "Intermediate" },
  { day: "Friday", timeId: "t6", program: "boxing", level: "All Levels" },

  // Saturday
  { day: "Saturday", timeId: "t1", program: "bjj", level: "All Levels" },
  { day: "Saturday", timeId: "t2", program: "kids", level: "Ages 6-12" },
  { day: "Saturday", timeId: "t3", program: "mma", level: "Open Mat" },
  { day: "Saturday", timeId: "t4", program: "muay-thai", level: "All Levels" },
  { day: "Saturday", timeId: "t5", program: "fitness", level: "All Levels" },

  // Sunday — closed
];

export function getClass(day, timeId) {
  return SCHEDULE.find((entry) => entry.day === day && entry.timeId === timeId) ?? null;
}

export function isDayClosed(day) {
  return !SCHEDULE.some((entry) => entry.day === day);
}
