// Kiểm tra định kỳ: rút đề ngẫu nhiên theo ma trận từ toàn bộ bài đã có của môn.
import { allLessonsOf } from '../data/content'
import { seededShuffle } from './grade'

export const TEST_TYPES = [
  { id: 'test15', name: 'Kiểm tra 15 phút', icon: '⚡', minutes: 15, count: 10, matrix: { 1: .4, 2: .4, 3: .2, 4: 0 } },
  { id: 'mid',    name: 'Giữa kì',          icon: '📝', minutes: 45, count: 20, matrix: { 1: .3, 2: .4, 3: .2, 4: .1 } },
  { id: 'final',  name: 'Cuối kì',          icon: '🏁', minutes: 60, count: 30, matrix: { 1: .25, 2: .35, 3: .25, 4: .15 } },
]
export const testTypeById = (id) => TEST_TYPES.find((t) => t.id === id)
export const MODE_LABEL = { practice: 'Luyện tập', exam: 'Kiểm tra', quick: 'Nhanh', test15: 'KT 15 phút', mid: 'Giữa kì', final: 'Cuối kì' }

// Trả về mảng câu hỏi, mỗi câu kèm lessonTitle. Nếu ngân hàng ít câu thì lấy hết những gì có.
export function buildTest(subjectId, typeId, seed = Date.now().toString(36)) {
  const type = testTypeById(typeId)
  const lessons = allLessonsOf(subjectId)
  const byLevel = { 1: [], 2: [], 3: [], 4: [] }
  for (const l of lessons) for (const q of l.questions) byLevel[q.level].push({ ...q, lessonTitle: l.title, lessonId: l.id })
  for (const k in byLevel) byLevel[k] = seededShuffle(byLevel[k], seed + k).map((o) => o.x)

  const want = {}
  let total = 0
  for (const k of [1, 2, 3, 4]) { want[k] = Math.round(type.count * type.matrix[k]); total += want[k] }
  want[2] += type.count - total // làm tròn dồn về mức Vừa

  const picked = []
  const leftover = []
  for (const k of [1, 2, 3, 4]) {
    picked.push(...byLevel[k].slice(0, want[k]))
    leftover.push(...byLevel[k].slice(want[k]))
  }
  // thiếu thì bù từ mức khác
  const need = type.count - picked.length
  if (need > 0) picked.push(...seededShuffle(leftover, seed + 'x').map((o) => o.x).slice(0, need))
  return { type, seed, questions: picked.sort((a, b) => a.level - b.level) }
}

export const poolSize = (subjectId) => allLessonsOf(subjectId).reduce((n, l) => n + l.questions.length, 0)
