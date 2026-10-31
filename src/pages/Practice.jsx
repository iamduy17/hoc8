import { useEffect, useMemo, useRef, useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useApp } from '../App'
import { getLesson } from '../data/content'
import { subjectById, LEVELS } from '../data/subjects'
import { BackButton, celebrate, fmtDur } from '../components/ui'
import QuestionView from '../components/QuestionView'
import { grade, isAnswered, seededShuffle } from '../lib/grade'
import { saveAttempt } from '../lib/store'
import { sfx } from '../lib/sound'

export default function Practice() {
  const { lessonId } = useParams()
  const lesson = getLesson(lessonId)
  const { student } = useApp()
  const [level, setLevel] = useState('all')
  const [mode, setMode] = useState('practice')
  const [count, setCount] = useState(10) // Infinity = every question at this level
  const [run, setRun] = useState(null) // { qs, seed }
  if (!lesson) return <Navigate to="/" />
  const subject = subjectById(lesson.subject)

  const avail = (lv) => lesson.questions.filter((q) => lv === 'all' || q.level === lv).length
  const max = avail(level === 'all' ? 'all' : Number(level))
  const n = Math.min(count, max)
  const counts = [5, 10, 20].filter((c) => c < max)

  const start = () => {
    const seed = Date.now().toString(36)
    let pool = lesson.questions.filter((q) => level === 'all' || q.level === Number(level))
    pool = seededShuffle(pool, seed).map((o) => o.x).slice(0, n).sort((a, b) => a.level - b.level)
    setRun({ qs: pool, seed })
  }

  if (run) return <Runner lesson={lesson} subject={subject} student={student} mode={mode} level={level} qs={run.qs} seed={run.seed} onExit={() => setRun(null)} />

  return (
    <div className="page narrow">
      <div className="topbar"><BackButton to={`/bai/${lesson.id}`} /></div>
      <div className="row" style={{ marginBottom: 16 }}>
        <span className="icon-box" style={{ background: subject.color, width: 48, height: 48, fontSize: 24 }}>{subject.icon}</span>
        <div><div className="small muted">{lesson.chapter}</div><h1 style={{ fontSize: '1.5em' }}>{lesson.title}</h1></div>
      </div>

      <div className="card stack" style={{ gap: 14 }}>
        <div>
          <b>Chọn độ khó</b>
          <div className="row wrap" style={{ marginTop: 8 }}>
            <button className={`choice ${level === 'all' ? 'sel' : ''}`} style={{ width: 'auto' }} onClick={() => setLevel('all')}>🎲 Trộn ({avail('all')})</button>
            {LEVELS.map((lv) => (
              <button key={lv.id} className={`choice ${level === String(lv.id) ? 'sel' : ''}`} style={{ width: 'auto' }} disabled={!avail(lv.id)} onClick={() => setLevel(String(lv.id))}>
                {lv.icon} {lv.name} ({avail(lv.id)})
              </button>
            ))}
          </div>
        </div>
        <div>
          <b>Cách làm</b>
          <div className="seg" style={{ display: 'flex', marginTop: 8 }}>
            <button className={mode === 'practice' ? 'on' : ''} style={{ flex: 1 }} onClick={() => setMode('practice')}>📝 Luyện tập<br /><span className="small" style={{ fontWeight: 500 }}>xem giải ngay sau mỗi câu</span></button>
            <button className={mode === 'exam' ? 'on' : ''} style={{ flex: 1 }} onClick={() => setMode('exam')}>⏱ Kiểm tra<br /><span className="small" style={{ fontWeight: 500 }}>tính giờ, chấm ở cuối</span></button>
          </div>
        </div>
        <div>
          <b>Số câu</b>
          {counts.length ? (
            <div className="seg" style={{ marginTop: 8 }}>
              {counts.map((c) => <button key={c} className={n === c ? 'on' : ''} onClick={() => setCount(c)}>{c}</button>)}
              <button className={n === max ? 'on' : ''} onClick={() => setCount(Infinity)}>Tất cả ({max})</button>
            </div>
          ) : (
            <div className="small muted" style={{ marginTop: 8 }}>Làm hết {max} câu của mức này</div>
          )}
        </div>
        <button className="btn primary block" onClick={start}>▶ Bắt đầu</button>
      </div>
    </div>
  )
}

function Runner({ lesson, subject, student, mode, level, qs, seed, onExit }) {
  const [i, setI] = useState(0)
  const [vals, setVals] = useState({})
  const [revealed, setRevealed] = useState({})
  const [done, setDone] = useState(false)
  const [paused, setPaused] = useState(false)
  const [elapsed, setElapsed] = useState(0)
  const saved = useRef(false)
  const q = qs[i]
  const exam = mode === 'exam'

  useEffect(() => {
    if (done || paused) return
    const t = setInterval(() => setElapsed((e) => e + 1), 1000)
    return () => clearInterval(t)
  }, [done, paused])

  const results = useMemo(() => qs.map((q) => grade(q, vals[q.id])), [qs, vals])
  const score = results.filter(Boolean).length

  const check = () => {
    setRevealed((r) => ({ ...r, [q.id]: true }))
    if (grade(q, vals[q.id])) { celebrate(); sfx('ok') } else sfx('no')
  }
  const nextQ = () => (i < qs.length - 1 ? setI(i + 1) : finish())
  const finish = () => {
    setDone(true)
    if (score / qs.length >= 0.8) { celebrate(true); sfx('win') }
  }

  useEffect(() => {
    if (!done || saved.current) return
    saved.current = true
    saveAttempt({
      student_id: student.id, subject: lesson.subject, lesson_id: lesson.id, lesson_title: lesson.title,
      mode, level, score, total: qs.length, duration: elapsed,
      wrong_tags: qs.filter((q, k) => !results[k]).map((q) => q.tag),
    })
  }, [done])

  if (done) {
    const pct = Math.round((score / qs.length) * 100)
    const wrong = qs.filter((_, k) => !results[k])
    return (
      <div className="page narrow">
        <motion.div className="card stack center pop" initial={{ scale: .9 }} animate={{ scale: 1 }}>
          <div style={{ fontSize: 56 }}>{pct >= 80 ? '🏆' : pct >= 50 ? '💪' : '🌱'}</div>
          <h1>{score}/{qs.length}</h1>
          <p className="muted">{pct >= 80 ? 'Quá đỉnh! Em nắm bài rồi.' : pct >= 50 ? 'Khá ổn. Xem lại các câu sai rồi làm lần nữa nhé.' : 'Chưa sao, đọc lại tóm tắt và bẫy rồi thử lại.'}</p>
          <div className="row" style={{ justifyContent: 'center' }}><span className="pill gray">⏱ {fmtDur(elapsed)}</span>{level !== 'all' && <span className="pill gray">{LEVELS.find((l) => String(l.id) === level)?.name}</span>}</div>
          <div className="row" style={{ justifyContent: 'center', marginTop: 6 }}>
            <button className="btn" onClick={onExit}>Làm lại</button>
            <Link to={`/bai/${lesson.id}`} className="btn">Xem bài</Link>
            <Link to={`/mon/${lesson.subject}`} className="btn primary">Xong</Link>
          </div>
        </motion.div>
        {wrong.length > 0 && (
          <>
            <div className="section-label">Xem lại {wrong.length} câu sai</div>
            <div className="stack">
              {wrong.map((w) => (
                <div key={w.id} className="card"><QuestionView q={w} subject={lesson.subject} value={vals[w.id]} onChange={() => {}} revealed seed={seed} /></div>
              ))}
            </div>
          </>
        )}
      </div>
    )
  }

  return (
    <div className="page narrow">
      <div className="topbar">
        <button className="btn icon-btn" onClick={() => setPaused((p) => !p)} aria-label="Tạm dừng">{paused ? '▶' : '⏸'}</button>
        <div className="grow" style={{ margin: '0 12px' }}><div className="progress"><div style={{ width: `${((i + (revealed[q.id] ? 1 : 0)) / qs.length) * 100}%` }} /></div></div>
        <span className="pill gray">{i + 1}/{qs.length}</span>
      </div>
      <div className="score-row" style={{ marginBottom: 14 }}>
        <div className="row"><span className="icon-box" style={{ background: subject.color }}>{subject.icon}</span><b className="small">{lesson.title}</b></div>
        <div className="row"><span className="pill gray">⏱ {fmtDur(elapsed)}</span>{!exam && <span className="pill good">✓ {score}</span>}</div>
      </div>

      {paused ? (
        <div className="card empty"><div className="em">⏸</div>Đang tạm dừng. Nghỉ chút rồi bấm ▶ tiếp nhé.</div>
      ) : (
        <AnimatePresence mode="wait">
          <motion.div key={q.id} className="card" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: .18 }}>
            <QuestionView q={q} subject={lesson.subject} value={vals[q.id]} onChange={(v) => setVals((x) => ({ ...x, [q.id]: v }))} revealed={!exam && !!revealed[q.id]} seed={seed} />
            <div className="row" style={{ marginTop: 14, justifyContent: 'flex-end' }}>
              {exam ? (
                <>
                  {i > 0 && <button className="btn" onClick={() => setI(i - 1)}>‹ Trước</button>}
                  <button className="btn primary" disabled={!isAnswered(q, vals[q.id])} onClick={nextQ}>{i === qs.length - 1 ? 'Nộp bài' : 'Tiếp ›'}</button>
                </>
              ) : revealed[q.id] ? (
                <button className="btn primary" onClick={nextQ}>{i === qs.length - 1 ? 'Xem kết quả' : 'Tiếp ›'}</button>
              ) : (
                <button className="btn primary" disabled={!isAnswered(q, vals[q.id])} onClick={check}>Kiểm tra</button>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      )}
      <button className="btn ghost sm" style={{ marginTop: 10 }} onClick={onExit}>Thoát</button>
    </div>
  )
}
