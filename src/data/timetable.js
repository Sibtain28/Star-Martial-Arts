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
  { id: "t1", label: "07:00 &ndash; 08:30 AM", period: "Morning" },
  { id: "t2", label: "07:00 &ndash; 08:30 PM", period: "Evening" },
];

export const SCHEDULE = [
  // Monday
  { day: "Monday", timeId: "t1", program: "mma", level: "All Levels" },
  // Tuesday
  { day: "Tuesday", timeId: "t2", program: "kickboxing", level: "All Levels" },
  // Wednesday
  { day: "Wednesday", timeId: "t1", program: "self-defence", level: "All Levels" },
  // Thursday
  { day: "Thursday", timeId: "t2", program: "crossfit", level: "All Levels" },
  // Friday
  { day: "Friday", timeId: "t1", program: "muay-boran", level: "All Levels" },
  // Saturday
  { day: "Saturday", timeId: "t2", program: "fitness", level: "All Levels" },
];

export function getClass(day, timeId) {
  return SCHEDULE.find((entry) => entry.day === day && entry.timeId === timeId) ?? null;
}

export function isDayClosed(day) {
  return !SCHEDULE.some((entry) => entry.day === day);
}
