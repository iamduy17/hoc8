import { useEffect, useMemo, useRef, useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useApp } from '../App'
import { subjectById, LEVELS } from '../data/subjects'
import { BackButton, celebrate, fmtDur } from '../components/ui'
import QuestionView from '../components/QuestionView'
import { grade, isAnswered, answerText } from '../lib/grade'
import { TEST_TYPES, buildTest, poolSize } from '../lib/tests'
import { saveAttempt } from '../lib/store'
import { sfx } from '../lib/sound'

export default function Test() {
  const { subjectId } = useParams()
  const { student } = useApp()
  const subject = subjectById(subjectId)
  const [typeId, setTypeId] = useState('test15')
  const [paper, setPaper] = useState(null)
  const [printPaper, setPrintPaper] = useState(null)
  if (!subject) return <Navigate to="/" />
  const pool = poolSize(subjectId)

  if (paper) return <TestRunner paper={paper} subject={subject} student={student} onExit={() => setPaper(null)} />

  const doPrint = () => {
    const p = buildTest(subjectId, typeId)
    setPrintPaper(p)
    setTimeout(() => window.print(), 100)
  }

  return (
    <div className="page narrow">
      <div className="topbar"><BackButton to={`/mon/${subjectId}`} /></div>
      <div className="row" style={{ marginBottom: 16 }}>
        <span className="icon-box" style={{ background: subject.color, width: 48, height: 48, fontSize: 24 }}>{subject.icon}</span>
        <div><div className="small muted">{subject.name}</div><h1 style={{ fontSize: '1.5em' }}>Kiểm tra định kì</h1></div>
      </div>

      {pool === 0 ? (
        <div className="card empty"><div className="em">✏️</div>Môn này chưa có ngân hàng câu hỏi.</div>
      ) : (
        <div className="card stack" style={{ gap: 14 }}>
          <div className="test-type">
            {TEST_TYPES.map((t) => (
              <button key={t.id} className={`choice ${typeId === t.id ? 'sel' : ''}`} style={{ flexDirection: 'column', alignItems: 'flex-start', gap: 2 }} onClick={() => setTypeId(t.id)}>
                <span style={{ fontSize: 24 }}>{t.icon}</span>
                <b>{t.name}</b>
                <span className="small muted">{Math.min(t.count, pool)} câu · {t.minutes} phút</span>
              </button>
            ))}
          </div>
          <p className="small muted">Đề rút ngẫu nhiên từ {pool} câu của các bài đã có, chia theo ma trận dễ → khó. Mỗi lần làm là một đề khác. Hết giờ tự nộp.</p>
          <button className="btn primary block" onClick={() => setPaper(buildTest(subjectId, typeId))}>▶ Bắt đầu làm</button>
          <button className="btn block no-print" onClick={doPrint}>🖨️ In đề + đáp án (cho gia sư)</button>
        </div>
      )}

      {printPaper && <PrintPaper paper={printPaper} subject={subject} />}
    </div>
  )
}

function TestRunner({ paper, subject, student, onExit }) {
  const { type, questions: qs, seed } = paper
  const [i, setI] = useState(0)
  const [vals, setVals] = useState({})
  const [done, setDone] = useState(false)
  const [left, setLeft] = useState(type.minutes * 60)
  const saved = useRef(false)
  const q = qs[i]
  const results = useMemo(() => qs.map((x) => grade(x, vals[x.id])), [qs, vals])
  const score = results.filter(Boolean).length
  const answered = qs.filter((x) => isAnswered(x, vals[x.id])).length

  useEffect(() => {
    if (done) return
    const t = setInterval(() => setLeft((s) => { if (s <= 1) { clearInterval(t); setDone(true); return 0 } if (s <= 11) sfx('tick'); return s - 1 }), 1000)
    return () => clearInterval(t)
  }, [done])

  useEffect(() => {
    if (!done || saved.current) return
    saved.current = true
    if (score / qs.length >= 0.8) { celebrate(true); sfx('win') }
    saveAttempt({
      student_id: student.id, subject: subject.id, lesson_id: `test:${subject.id}`, lesson_title: `${type.name} · ${subject.short}`,
      mode: type.id, level: 'all', score, total: qs.length, duration: type.minutes * 60 - left,
      wrong_tags: qs.filter((_, k) => !results[k]).map((x) => x.tag),
    })
  }, [done])

  const mm = String(Math.floor(left / 60)).padStart(2, '0'), ss = String(left % 60).padStart(2, '0')

  if (done) {
    const pct = Math.round((score / qs.length) * 100)
    const point = Math.round((score / qs.length) * 100) / 10
    return (
      <div className="page narrow">
        <motion.div className="card stack center pop" initial={{ scale: .9 }} animate={{ scale: 1 }}>
          <div style={{ fontSize: 56 }}>{pct >= 80 ? '🏆' : pct >= 50 ? '💪' : '🌱'}</div>
          <h1>{point} điểm</h1>
          <p className="muted">{type.name} · {subject.short} · đúng {score}/{qs.length}</p>
          <div className="row" style={{ justifyContent: 'center', marginTop: 6 }}>
            <button className="btn" onClick={onExit}>Làm đề khác</button>
            <Link to={`/mon/${subject.id}`} className="btn primary">Xong</Link>
          </div>
        </motion.div>
        <div className="section-label">Xem lại từng câu</div>
        <div className="stack">
          {qs.map((x, k) => (
            <div key={x.id} className="card">
              <div className="small muted" style={{ marginBottom: 6 }}>Câu {k + 1} · {x.lessonTitle}</div>
              <QuestionView q={x} subject={subject.id} value={vals[x.id]} onChange={() => {}} revealed seed={seed} />
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="page narrow">
      <div className="topbar">
        <span className="pill gray">{type.icon} {type.name}</span>
        <span className={`timer ${left <= 60 ? 'low' : ''}`} style={{ fontSize: '1.3em' }}>⏱ {mm}:{ss}</span>
        <span className="pill gray">{answered}/{qs.length} đã làm</span>
      </div>
      <div className="progress" style={{ marginBottom: 12 }}><div style={{ width: `${(answered / qs.length) * 100}%` }} /></div>

      <div className="row wrap" style={{ gap: 6, marginBottom: 12 }}>
        {qs.map((x, k) => (
          <button key={x.id} className={`btn sm ${k === i ? 'primary' : ''}`} style={{ width: 40, padding: 6, opacity: isAnswered(x, vals[x.id]) || k === i ? 1 : .5 }} onClick={() => setI(k)}>{k + 1}</button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={q.id} className="card" initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }} transition={{ duration: .15 }}>
          <div className="small muted" style={{ marginBottom: 6 }}>Câu {i + 1} · {q.lessonTitle}</div>
          <QuestionView q={q} subject={subject.id} value={vals[q.id]} onChange={(v) => setVals((s) => ({ ...s, [q.id]: v }))} revealed={false} seed={seed} />
          <div className="row between" style={{ marginTop: 14 }}>
            <button className="btn" disabled={i === 0} onClick={() => setI(i - 1)}>‹ Trước</button>
            {i < qs.length - 1
              ? <button className="btn primary" onClick={() => setI(i + 1)}>Tiếp ›</button>
              : <button className="btn good" onClick={() => confirm(`Nộp bài? Đã làm ${answered}/${qs.length} câu.`) && setDone(true)}>Nộp bài</button>}
          </div>
        </motion.div>
      </AnimatePresence>
      <button className="btn ghost sm" style={{ marginTop: 10 }} onClick={() => confirm('Thoát sẽ không lưu kết quả. Thoát?') && onExit()}>Thoát</button>
    </div>
  )
}

function PrintPaper({ paper, subject }) {
  const { type, questions } = paper
  return (
    <div className="print-only">
      <h1>{type.name} – {subject.name} 8</h1>
      <p>Họ tên: ........................................ Lớp: ........ Thời gian: {type.minutes} phút</p>
      <ol style={{ marginTop: 12 }}>
        {questions.map((q) => (
          <li key={q.id} style={{ marginBottom: 8 }}>
            <span className="small">({LEVELS.find((l) => l.id === q.level).name})</span> {q.prompt}
            {q.code && <pre className="codeblock">{q.code}</pre>}
            {q.options && <div>{q.options.map((o, i) => <span key={i} style={{ marginRight: 16 }}>{'ABCDEF'[i]}. {o}</span>)}</div>}
            {q.items && <div>{q.items.join(' ; ')}</div>}
            {q.pairs && <div>{q.pairs.map((p) => p[0]).join(' ; ')} ↔ {q.pairs.map((p) => p[1]).join(' ; ')}</div>}
            {q.type === 'fill' && <div>Trả lời: ........................</div>}
          </li>
        ))}
      </ol>
      <h2 style={{ breakBefore: 'page' }}>Đáp án</h2>
      <ol>{questions.map((q) => <li key={q.id}><b>{answerText(q)}</b> — {q.explanation}</li>)}</ol>
    </div>
  )
}
