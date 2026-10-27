import { TIMETABLE, PERIOD_TO_SUBJECT, DAY_NAMES } from '../data/timetable'

const uniq = (arr) => [...new Set(arr)]

// Môn (id trong app) học trong ngày `dow` (0..6). Cuối tuần -> []
export function subjectsOnDay(dow) {
  const day = TIMETABLE[dow]
  if (!day) return []
  const periods = [...day.sang, ...day.chieu]
  return uniq(periods.map((p) => PERIOD_TO_SUBJECT[p]).filter(Boolean))
}

// Ngày đi học kế tiếp sau `dow`
export function nextSchoolDay(dow) {
  let d = dow
  for (let i = 0; i < 7; i++) {
    d = (d + 1) % 7
    if (TIMETABLE[d]) return d
  }
  return 1
}

// Kết quả cho panel "Hôm nay"
export function todayPlan(date = new Date()) {
  const dow = date.getDay()
  const next = nextSchoolDay(dow)
  const isSchoolDay = Boolean(TIMETABLE[dow])
  return {
    dow,
    dayName: DAY_NAMES[dow],
    isSchoolDay,
    review: subjectsOnDay(dow),          // ôn trong 24h sau khi học
    prepare: subjectsOnDay(next),        // đọc trước cho buổi kế
    nextDayName: next === (dow + 1) % 7 ? 'ngày mai' : DAY_NAMES[next].toLowerCase(),
    periodsToday: TIMETABLE[dow] || null,
    periodsNext: TIMETABLE[next],
  }
}

// Gợi ý ôn lại theo spaced repetition: 1 – 3 – 7 ngày sau lần làm sai
export function dueForReview(attempts, now = Date.now()) {
  const DAY = 86400e3
  const byLesson = {}
  for (const a of attempts) {
    const key = a.lesson_id
    const t = new Date(a.created_at).getTime()
    const acc = a.total ? a.score / a.total : 1
    if (!byLesson[key] || byLesson[key].t < t) byLesson[key] = { ...a, t, acc }
  }
  return Object.values(byLesson)
    .filter((l) => {
      const age = now - l.t
      if (l.acc < 0.6) return age >= 1 * DAY
      if (l.acc < 0.85) return age >= 3 * DAY
      return age >= 7 * DAY
    })
    .sort((a, b) => a.acc - b.acc)
}
