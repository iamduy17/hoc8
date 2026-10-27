const SUP = { '^0': '⁰', '^1': '¹', '^2': '²', '^3': '³', '^4': '⁴', '^5': '⁵', '^6': '⁶', '^7': '⁷', '^8': '⁸', '^9': '⁹', '^n': 'ⁿ' }
const SUB = { '₀': '0', '₁': '1', '₂': '2', '₃': '3', '₄': '4', '₅': '5', '₆': '6', '₇': '7', '₈': '8', '₉': '9' }

export function normalize(s) {
  let t = String(s ?? '').toLowerCase()
    .replace(/\s+/g, '')
    .replace(/[−–—]/g, '-')
    .replace(/,/g, '.')
    .replace(/[·*×⋅]/g, '')       // dấu nhân không bắt buộc: 2·x = 2x
    .replace(/[₀-₉]/g, (c) => SUB[c]) // H₂O = H2O
  for (const [k, v] of Object.entries(SUP)) t = t.split(k).join(v)
  return t
}

export function isAnswered(q, v) {
  if (v == null) return false
  switch (q.type) {
    case 'multi': return Array.isArray(v) && v.length > 0
    case 'fill': return String(v).trim().length > 0
    case 'order': return Array.isArray(v) && v.length === q.items.length
    case 'match': return Array.isArray(v) && v.every(Boolean) && v.length === q.pairs.length
    default: return true
  }
}

export function grade(q, v) {
  if (!isAnswered(q, v)) return false
  switch (q.type) {
    case 'single': return v === q.answer
    case 'truefalse': return v === q.answer
    case 'multi': {
      const a = [...q.answer].sort().join(','), b = [...v].sort().join(',')
      return a === b
    }
    case 'fill': return q.answer.map(normalize).includes(normalize(v))
    case 'order': return v.every((idx, i) => idx === i)
    case 'match': return v.every((r, i) => r === q.pairs[i][1])
    default: return false
  }
}

// Xáo trộn ổn định theo id câu (để cùng 1 câu luôn hiện cùng thứ tự trong 1 lượt)
export function seededShuffle(arr, seed) {
  let h = 2166136261
  for (const c of String(seed)) h = Math.imul(h ^ c.charCodeAt(0), 16777619)
  const out = arr.map((x, i) => ({ x, i }))
  for (let i = out.length - 1; i > 0; i--) {
    h ^= h << 13; h ^= h >>> 17; h ^= h << 5
    const j = Math.abs(h) % (i + 1)
    ;[out[i], out[j]] = [out[j], out[i]]
  }
  return out
}

export function answerText(q) {
  switch (q.type) {
    case 'single': return q.options[q.answer]
    case 'truefalse': return q.answer ? 'Đúng' : 'Sai'
    case 'multi': return q.answer.map((i) => q.options[i]).join(' ; ')
    case 'fill': return q.answer[0]
    case 'order': return q.items.join(' → ')
    case 'match': return q.pairs.map(([a, b]) => `${a} ↔ ${b}`).join(' ; ')
    default: return ''
  }
}
