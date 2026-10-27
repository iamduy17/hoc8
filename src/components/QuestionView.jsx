import { useMemo, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { levelById } from '../data/subjects'
import { grade, seededShuffle, answerText } from '../lib/grade'
import { speak, canSpeak } from '../lib/speech'

const KEYS = 'ABCDEF'

export default function QuestionView({ q, value, onChange, revealed, seed = '', showLevel = true, subject }) {
  const speakOpts = subject === 'anh' && canSpeak && /phát âm|trọng âm/i.test(q.tag + ' ' + q.prompt)
  const [hint, setHint] = useState(false)
  const correct = revealed ? grade(q, value) : null
  const lv = levelById(q.level)

  return (
    <div className={`stack ${revealed && !correct ? 'shake' : ''}`}>
      <div className="row wrap">
        {showLevel && <span className="pill gray">{lv.icon} {lv.name}</span>}
        <span className="pill info">{q.tag}</span>
        {!revealed && q.hint && (
          <button className="btn ghost sm" onClick={() => setHint((h) => !h)}>💡 {hint ? 'Ẩn gợi ý' : 'Gợi ý'}</button>
        )}
      </div>
      <h3 style={{ fontSize: '1.15em' }}>{q.prompt}</h3>
      {q.code && <pre className="codeblock">{q.code}</pre>}
      <AnimatePresence>
        {hint && !revealed && (
          <motion.div className="hint-box" initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
            💡 {q.hint}
          </motion.div>
        )}
      </AnimatePresence>

      {q.type === 'single' && <Options q={q} value={value} onChange={onChange} revealed={revealed} seed={seed} speakOpts={speakOpts} />}
      {q.type === 'multi' && <Options q={q} value={value || []} onChange={onChange} revealed={revealed} seed={seed} multi />}
      {q.type === 'truefalse' && <TrueFalse q={q} value={value} onChange={onChange} revealed={revealed} />}
      {q.type === 'fill' && <Fill q={q} value={value} onChange={onChange} revealed={revealed} correct={correct} math={subject === 'toan'} chem={subject === 'khtn'} />}
      {q.type === 'order' && <Order q={q} value={value || []} onChange={onChange} revealed={revealed} seed={seed} />}
      {q.type === 'match' && <Match q={q} value={value || []} onChange={onChange} revealed={revealed} seed={seed} />}

      <AnimatePresence>
        {revealed && (
          <motion.div className={`explain ${correct ? 'ok' : 'no'}`} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
            <b>{correct ? '✅ Chính xác!' : `❌ Chưa đúng. Đáp án: ${answerText(q)}`}</b>
            <p style={{ marginTop: 6 }}>{q.explanation}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function Options({ q, value, onChange, revealed, seed, multi, speakOpts }) {
  const order = useMemo(() => seededShuffle(q.options, q.id + seed), [q, seed])
  const isSel = (i) => (multi ? value.includes(i) : value === i)
  const toggle = (i) => {
    if (revealed) return
    if (!multi) return onChange(i)
    onChange(isSel(i) ? value.filter((x) => x !== i) : [...value, i])
  }
  const isAns = (i) => (multi ? q.answer.includes(i) : q.answer === i)
  return (
    <div className="stack" style={{ gap: 8 }}>
      {multi && <p className="muted small">Chọn tất cả đáp án đúng.</p>}
      {order.map(({ x, i }, k) => {
        let cls = 'choice'
        if (revealed) { if (isAns(i)) cls += ' ok'; else if (isSel(i)) cls += ' no' }
        else if (isSel(i)) cls += ' sel'
        return (
          <button key={i} className={cls} onClick={() => toggle(i)} aria-pressed={isSel(i)}>
            <span className="key">{multi ? (isSel(i) ? '☑' : '☐') : KEYS[k]}</span>
            <span className="grow">{x}</span>
            {speakOpts && (
              <span role="button" tabIndex={0} aria-label={`Nghe ${x}`} className="pill info" style={{ cursor: 'pointer' }}
                onClick={(e) => { e.stopPropagation(); speak(x) }}
                onKeyDown={(e) => { if (e.key === 'Enter') { e.stopPropagation(); speak(x) } }}>🔊</span>
            )}
          </button>
        )
      })}
    </div>
  )
}

function TrueFalse({ q, value, onChange, revealed }) {
  return (
    <div className="row" style={{ gap: 10 }}>
      {[true, false].map((v) => {
        let cls = 'choice'
        if (revealed) { if (q.answer === v) cls += ' ok'; else if (value === v) cls += ' no' }
        else if (value === v) cls += ' sel'
        return (
          <button key={String(v)} className={cls} style={{ justifyContent: 'center' }} onClick={() => !revealed && onChange(v)}>
            {v ? '👍 Đúng' : '👎 Sai'}
          </button>
        )
      })}
    </div>
  )
}

const SUP = { 0: '⁰', 1: '¹', 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶', 7: '⁷', 8: '⁸', 9: '⁹', n: 'ⁿ' }
const SUB = { 0: '₀', 1: '₁', 2: '₂', 3: '₃', 4: '₄', 5: '₅', 6: '₆', 7: '₇', 8: '₈', 9: '₉' }
// x^2 -> x², x^10 -> x¹⁰
const autoSup = (s) => s.replace(/\^([0-9n]+)/g, (_, d) => [...d].map((c) => SUP[c]).join(''))

const MATH_KEYS = [
  ['x', 'x'], ['y', 'y'], ['z', 'z'], ['²', '²'], ['³', '³'], ['⁴', '⁴'],
  ['+', ' + '], ['−', ' − '], ['·', '·'], ['/', '/'], ['(', '('], [')', ')'], ['√', '√'], ['a', 'a'],
]
const CHEM_KEYS = [['₂', '₂'], ['₃', '₃'], ['₄', '₄'], ['→', ' → '], ['+', ' + '], ['(', '('], [')', ')']]

function Fill({ value, onChange, revealed, correct, math, chem }) {
  const ref = useRef(null)
  const [mode, setMode] = useState(null) // 'sup' | 'sub' | null
  const v = value || ''

  const insert = (t) => {
    const el = ref.current
    const s = el ? el.selectionStart ?? v.length : v.length
    const e = el ? el.selectionEnd ?? v.length : v.length
    const nv = v.slice(0, s) + t + v.slice(e)
    onChange(nv)
    requestAnimationFrame(() => { if (el) { el.focus(); el.setSelectionRange(s + t.length, s + t.length) } })
  }
  const backspace = () => {
    const el = ref.current
    const s = el ? el.selectionStart ?? v.length : v.length
    const e = el ? el.selectionEnd ?? v.length : v.length
    const from = s === e ? Math.max(0, s - 1) : s
    onChange(v.slice(0, from) + v.slice(e))
    requestAnimationFrame(() => { if (el) { el.focus(); el.setSelectionRange(from, from) } })
  }
  const handleChange = (ev) => {
    let nv = ev.target.value
    const pos = ev.target.selectionStart
    // Ở chế độ mũ/chỉ số dưới: chữ số vừa gõ tự đổi thành ² hoặc ₂
    if (mode && nv.length === v.length + 1 && pos > 0) {
      const ch = nv[pos - 1]
      const map = mode === 'sup' ? SUP : SUB
      if (map[ch]) nv = nv.slice(0, pos - 1) + map[ch] + nv.slice(pos)
    }
    onChange(autoSup(nv))
  }
  const keys = math ? MATH_KEYS : chem ? CHEM_KEYS : null

  return (
    <div className="stack" style={{ gap: 8 }}>
      <input ref={ref} className="field" placeholder="Nhập câu trả lời…" value={v} disabled={revealed}
        autoCapitalize="off" autoCorrect="off" spellCheck={false}
        onChange={handleChange}
        style={{ fontSize: '1.15em', ...(revealed ? { borderColor: correct ? 'var(--good)' : 'var(--bad)' } : {}) }} />
      {keys && !revealed && (
        <>
          <div className="keypad">
            {keys.map(([label, t]) => (
              <button key={label} type="button" className="btn sm key" onMouseDown={(e) => e.preventDefault()} onClick={() => insert(t)}>{label}</button>
            ))}
            <button type="button" className={`btn sm key ${mode === (math ? 'sup' : 'sub') ? 'primary' : ''}`} onMouseDown={(e) => e.preventDefault()}
              onClick={() => setMode((m) => (m ? null : math ? 'sup' : 'sub'))}>{math ? 'xⁿ mũ' : 'H₂ chỉ số'}</button>
            <button type="button" className="btn sm key" onMouseDown={(e) => e.preventDefault()} onClick={backspace} aria-label="Xóa">⌫</button>
          </div>
          <p className="small muted">
            {math
              ? <>Gõ <b>x^2</b> sẽ tự thành <b>x²</b>. Hoặc bật <b>xⁿ mũ</b> rồi gõ số. Dấu nhân (·) có thể bỏ qua.</>
              : <>Có thể gõ thường <b>H2SO4</b>, hệ thống vẫn chấm đúng. Bật <b>H₂ chỉ số</b> để gõ chỉ số dưới.</>}
          </p>
        </>
      )}
    </div>
  )
}

function Order({ q, value, onChange, revealed, seed }) {
  const shuffled = useMemo(() => seededShuffle(q.items, q.id + seed), [q, seed])
  const remaining = shuffled.filter(({ i }) => !value.includes(i))
  return (
    <div className="stack">
      <p className="muted small">Bấm lần lượt theo thứ tự đúng. Bấm vào mục đã chọn để bỏ.</p>
      <div className="stack" style={{ gap: 6 }}>
        {value.map((idx, k) => (
          <button key={idx} className={`choice order-item ${revealed ? (idx === k ? 'ok' : 'no') : ''}`} onClick={() => !revealed && onChange(value.filter((x) => x !== idx))}>
            <span className="n">{k + 1}</span>{q.items[idx]}
          </button>
        ))}
      </div>
      {!revealed && (
        <div className="row wrap">
          {remaining.map(({ x, i }) => (
            <button key={i} className="btn sm" onClick={() => onChange([...value, i])}>{x}</button>
          ))}
        </div>
      )}
    </div>
  )
}

function Match({ q, value, onChange, revealed, seed }) {
  const rights = useMemo(() => seededShuffle(q.pairs.map((p) => p[1]), q.id + seed).map((o) => o.x), [q, seed])
  const set = (i, v) => { const next = [...value]; next[i] = v; onChange(next) }
  return (
    <div className="stack" style={{ gap: 8 }}>
      {q.pairs.map(([left, right], i) => {
        const ok = revealed ? value[i] === right : null
        return (
          <div key={i} className="match-row">
            <div className="choice" style={{ boxShadow: 'none' }}>{left}</div>
            <span>↔</span>
            <select className="field" value={value[i] || ''} disabled={revealed} onChange={(e) => set(i, e.target.value)}
              style={revealed ? { borderColor: ok ? 'var(--good)' : 'var(--bad)' } : {}}>
              <option value="">Chọn…</option>
              {rights.map((r) => <option key={r} value={r}>{r}</option>)}
            </select>
          </div>
        )
      })}
    </div>
  )
}
