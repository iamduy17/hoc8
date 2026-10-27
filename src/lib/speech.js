// Đọc phát âm tiếng Anh bằng Web Speech API của trình duyệt (miễn phí, không cần mạng trên đa số máy).
import { settings } from './store'

export const canSpeak = typeof window !== 'undefined' && 'speechSynthesis' in window

let voices = []
function loadVoices() {
  if (!canSpeak) return
  voices = window.speechSynthesis.getVoices()
}
if (canSpeak) {
  loadVoices()
  window.speechSynthesis.onvoiceschanged = loadVoices
}

function pickVoice(lang) {
  if (!voices.length) loadVoices()
  const exact = voices.filter((v) => v.lang?.toLowerCase().replace('_', '-') === lang.toLowerCase())
  // ưu tiên giọng "Google"/"Natural" nghe tự nhiên hơn
  return exact.find((v) => /google|natural|enhanced|premium/i.test(v.name)) || exact[0]
    || voices.find((v) => v.lang?.toLowerCase().startsWith('en'))
}

export function speak(text, { slow = false } = {}) {
  if (!canSpeak || !text) return
  const lang = settings.get().accent || 'en-GB'
  const synth = window.speechSynthesis
  synth.cancel()
  const u = new SpeechSynthesisUtterance(text)
  const v = pickVoice(lang)
  if (v) u.voice = v
  u.lang = v?.lang || lang
  u.rate = slow ? 0.6 : 0.9
  synth.speak(u)
}

// Phát lần lượt nhiều từ, trả về hàm dừng
export function speakList(items, onIndex) {
  if (!canSpeak || !items.length) return () => {}
  let stopped = false
  let i = 0
  const lang = settings.get().accent || 'en-GB'
  const next = () => {
    if (stopped || i >= items.length) { onIndex?.(-1); return }
    onIndex?.(i)
    const u = new SpeechSynthesisUtterance(items[i])
    const v = pickVoice(lang)
    if (v) u.voice = v
    u.lang = v?.lang || lang
    u.rate = 0.85
    u.onend = () => { i++; setTimeout(next, 600) }
    u.onerror = () => { i++; setTimeout(next, 100) }
    window.speechSynthesis.speak(u)
  }
  window.speechSynthesis.cancel()
  next()
  return () => { stopped = true; window.speechSynthesis.cancel(); onIndex?.(-1) }
}

// "detest /dɪˈtest/ (v)" -> "detest"
export const wordOf = (term) => term.split(' /')[0].trim()
// "ghét – She detests housework. (Cô ấy…)" -> "She detests housework."
export function exampleOf(def) {
  const m = def.match(/–\s*(.+?)\s*\([^()]*\)\s*$/)
  return m ? m[1] : ''
}
// Dòng ví dụ có chữ Latin, không đánh dấu sai (✗), bỏ kí hiệu ✓
export function speakableLine(line) {
  if (/✗/.test(line)) return ''
  const clean = line.replace(/[✓→↗↘]/g, ' ').replace(/^[^A-Za-z]*\/[a-z]+\/:\s*/i, '').trim()
  return /[A-Za-z]{2,}/.test(clean) && !/[ăâđêôơưàáạảãèéẹẻẽìíịỉĩòóọỏõùúụủũỳýỵỷỹ]/i.test(clean) ? clean : ''
}
