import { useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { getLesson } from '../data/content'
import { subjectById, LEVELS } from '../data/subjects'
import { BackButton, celebrate } from '../components/ui'
import QuestionView from '../components/QuestionView'
import { grade } from '../lib/grade'
import { answerText } from '../lib/grade'
import { sfx } from '../lib/sound'
import { speak, speakList, canSpeak, wordOf, exampleOf, speakableLine } from '../lib/speech'

const TABS = [
  ['tomtat', '⚡ Tóm tắt 30s'], ['keyword', '🔑 Keyword'], ['baihoc', '📖 Bài học'],
  ['bay', '⚠️ Bẫy'], ['sodo', '🧠 Sơ đồ'], ['nhanh', '✅ Kiểm tra nhanh'],
]

export default function Lesson() {
  const { lessonId } = useParams()
  const lesson = getLesson(lessonId)
  const [tab, setTab] = useState('tomtat')
  if (!lesson) return <Navigate to="/" />
  const subject = subjectById(lesson.subject)
  const idx = TABS.findIndex(([k]) => k === tab)
  const next = () => setTab(TABS[Math.min(idx + 1, TABS.length - 1)][0])

  return (
    <div className="page narrow">
      <div className="topbar">
        <BackButton to={`/mon/${lesson.subject}`} />
        <div className="row no-print">
          <button className="btn sm" onClick={() => window.print()}>🖨️ In / PDF</button>
          <Link to={`/bai/${lesson.id}/luyen`} className="btn sm primary">Luyện tập</Link>
        </div>
      </div>

      <div className="row" style={{ marginBottom: 14 }}>
        <span className="icon-box" style={{ background: subject.color, width: 48, height: 48, fontSize: 24 }}>{subject.icon}</span>
        <div>
          <div className="small muted">{subject.name} · {lesson.chapter}</div>
          <h1 style={{ fontSize: '1.5em' }}>{lesson.title}</h1>
        </div>
        <span className="pill gray" style={{ marginLeft: 'auto' }}>⏱ {lesson.minutes}p</span>
      </div>

      <div className="tabs no-print" style={{ marginBottom: 14 }}>
        {TABS.map(([k, label]) => <button key={k} className={k === tab ? 'on' : ''} onClick={() => setTab(k)}>{label}</button>)}
      </div>

      <div className="no-print">
        <AnimatePresence mode="wait">
          <motion.div key={tab} initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -12 }} transition={{ duration: .18 }}>
            {tab === 'tomtat' && <Summary lesson={lesson} />}
            {tab === 'keyword' && <Keywords lesson={lesson} />}
            {tab === 'baihoc' && <Slides lesson={lesson} />}
            {tab === 'bay' && <Traps lesson={lesson} />}
            {tab === 'sodo' && <Mindmap lesson={lesson} />}
            {tab === 'nhanh' && <QuickCheck lesson={lesson} />}
          </motion.div>
        </AnimatePresence>
        {idx < TABS.length - 1 && (
          <button className="btn block" style={{ marginTop: 16 }} onClick={next}>Tiếp: {TABS[idx + 1][1]}</button>
        )}
        {idx === TABS.length - 1 && (
          <Link to={`/bai/${lesson.id}/luyen`} className="btn primary block" style={{ marginTop: 16 }}>▶ Vào luyện tập</Link>
        )}
      </div>

      <PrintVersion lesson={lesson} subject={subject} />
    </div>
  )
}

function Summary({ lesson }) {
  return (
    <div className="card stack">
      <div className="card-title">Đọc cái này là nắm được 80% bài</div>
      {lesson.summary.map((s, i) => (
        <div key={i} className="row" style={{ alignItems: 'flex-start' }}>
          <span className="icon-box" style={{ width: 28, height: 28, fontSize: '.8em' }}>{i + 1}</span>
          <p>{s}</p>
        </div>
      ))}
    </div>
  )
}

function Keywords({ lesson }) {
  const [i, setI] = useState(0)
  const [flip, setFlip] = useState(false)
  const [playing, setPlaying] = useState(-1)
  const stopRef = useState({ fn: null })[0]
  const kw = lesson.keywords
  const en = lesson.subject === 'anh' && canSpeak
  const go = (d) => { setFlip(false); setI((i + d + kw.length) % kw.length) }
  const playAll = () => {
    if (playing >= 0) { stopRef.fn?.(); return }
    stopRef.fn = speakList(kw.map((k) => wordOf(k.term)), (idx) => { setPlaying(idx); if (idx >= 0) { setI(idx); setFlip(false) } })
  }
  return (
    <div className="stack">
      {en && (
        <div className="row wrap">
          <button className="btn sm" onClick={() => speak(wordOf(kw[i].term))}>🔊 Nghe từ</button>
          <button className="btn sm" onClick={() => speak(wordOf(kw[i].term), { slow: true })}>🐢 Nghe chậm</button>
          {exampleOf(kw[i].def) && <button className="btn sm" onClick={() => speak(exampleOf(kw[i].def))}>💬 Nghe câu ví dụ</button>}
          <button className={`btn sm ${playing >= 0 ? 'primary' : ''}`} onClick={playAll}>{playing >= 0 ? '⏹ Dừng' : '▶ Nghe cả danh sách'}</button>
        </div>
      )}
      <div className="row wrap kw-list">{kw.map((k, j) => <button key={k.term} className="kw" style={{ opacity: j === i ? 1 : .6 }} onClick={() => { setI(j); setFlip(false); if (en) speak(wordOf(k.term)) }}>{k.term}</button>)}</div>
      <motion.div className="card flash" onClick={() => { setFlip((f) => !f); if (en && flip) speak(wordOf(kw[i].term)) }} key={i + '' + flip} initial={{ rotateY: 90, opacity: 0 }} animate={{ rotateY: 0, opacity: 1 }} transition={{ duration: .2 }}>
        {flip ? <p>{kw[i].def}</p> : <div><div className="term">{kw[i].term}</div><p className="small muted">Bấm để xem nghĩa</p></div>}
      </motion.div>
      <div className="row between">
        <button className="btn sm" onClick={() => go(-1)}>‹ Trước</button>
        <span className="muted small">{i + 1} / {kw.length}</span>
        <button className="btn sm" onClick={() => go(1)}>Sau ›</button>
      </div>
    </div>
  )
}

function Slides({ lesson }) {
  const [i, setI] = useState(0)
  const c = lesson.cards[i]
  return (
    <div className="stack">
      <AnimatePresence mode="wait">
        <motion.div key={i} className="card slide-card stack" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
          <div className="row"><span className="pill gray">{i + 1}/{lesson.cards.length}</span><h2>{c.title}</h2></div>
          {c.svg && <div dangerouslySetInnerHTML={{ __html: c.svg }} />}
          {c.emoji && !c.svg && <div className="center" style={{ fontSize: 56 }}>{c.emoji}</div>}
          <p>{c.body}</p>
          {c.example && (lesson.subject === 'anh' && canSpeak ? (
            <div className="ex stack" style={{ gap: 4 }}>
              {c.example.split('\n').map((line, k) => {
                const say = speakableLine(line)
                return (
                  <div key={k} className="row" style={{ alignItems: 'flex-start' }}>
                    <span className="grow">{line}</span>
                    {say && <button className="btn ghost sm" style={{ padding: '2px 6px' }} aria-label="Nghe" onClick={() => speak(say)}>🔊</button>}
                  </div>
                )
              })}
            </div>
          ) : <div className="ex">{c.example}</div>)}
        </motion.div>
      </AnimatePresence>
      <div className="dots">{lesson.cards.map((_, k) => <span key={k} className={k === i ? 'on' : ''} />)}</div>
      <div className="row between">
        <button className="btn sm" disabled={i === 0} onClick={() => setI(i - 1)}>‹ Trước</button>
        <button className="btn sm primary" disabled={i === lesson.cards.length - 1} onClick={() => setI(i + 1)}>Tiếp ›</button>
      </div>
    </div>
  )
}

function Traps({ lesson }) {
  return (
    <div className="card">
      <div className="card-title">Chỗ hay sai, nhìn kỹ một lần là tránh được</div>
      {lesson.traps.map((t, i) => <div key={i} className="trap"><span>⚠️</span><p>{t}</p></div>)}
    </div>
  )
}

function Mindmap({ lesson }) {
  const m = lesson.mindmap
  return (
    <div className="card mind">
      <div className="root">{m.root}</div>
      <div className="branches">
        {m.branches.map((b) => (
          <div key={b.label} className="branch"><b>{b.label}</b><ul>{b.children.map((c) => <li key={c}>{c}</li>)}</ul></div>
        ))}
      </div>
    </div>
  )
}

function QuickCheck({ lesson }) {
  const qs = lesson.quickCheck.map((id) => lesson.questions.find((q) => q.id === id))
  const [vals, setVals] = useState({})
  const [shown, setShown] = useState({})
  const reveal = (q) => {
    setShown((s) => ({ ...s, [q.id]: true }))
    if (grade(q, vals[q.id])) { celebrate(); sfx('ok') } else sfx('no')
  }
  return (
    <div className="stack">
      <p className="muted small">3 câu để kiểm tra em đã nắm ý chính chưa.</p>
      {qs.map((q, i) => (
        <div key={q.id} className="card stack">
          <div className="muted small">Câu {i + 1}</div>
          <QuestionView q={q} subject={lesson.subject} value={vals[q.id]} onChange={(v) => setVals((x) => ({ ...x, [q.id]: v }))} revealed={!!shown[q.id]} showLevel={false} />
          {!shown[q.id] && <button className="btn primary" onClick={() => reveal(q)}>Kiểm tra</button>}
        </div>
      ))}
    </div>
  )
}

// Bản in: toàn bộ bài + bài tập theo mức + đáp án ở cuối (để gia sư in ra dạy)
function PrintVersion({ lesson, subject }) {
  return (
    <div className="print-only">
      <h1>{lesson.title}</h1>
      <p>{subject.name} 8 · {lesson.chapter} · Kết nối tri thức</p>
      <h2 style={{ marginTop: 16 }}>Tóm tắt</h2>
      <ol>{lesson.summary.map((s, i) => <li key={i}>{s}</li>)}</ol>
      <h2>Từ khóa</h2>
      <ul>{lesson.keywords.map((k) => <li key={k.term}><b>{k.term}:</b> {k.def}</li>)}</ul>
      <h2>Nội dung</h2>
      {lesson.cards.map((c) => (
        <div key={c.title} style={{ marginBottom: 10 }}>
          <h3>{c.title}</h3>
          {c.svg && <div style={{ maxWidth: 320 }} dangerouslySetInnerHTML={{ __html: c.svg }} />}
          <p>{c.body}</p>
          {c.example && <p style={{ whiteSpace: 'pre-line', fontStyle: 'italic' }}>{c.example}</p>}
        </div>
      ))}
      <h2>Bẫy thường gặp</h2>
      <ul>{lesson.traps.map((t, i) => <li key={i}>{t}</li>)}</ul>
      <h2 style={{ breakBefore: 'page' }}>Bài tập</h2>
      {LEVELS.map((lv) => {
        const qs = lesson.questions.filter((q) => q.level === lv.id)
        if (!qs.length) return null
        return (
          <div key={lv.id}>
            <h3>{lv.icon} Mức {lv.name}</h3>
            <ol>{qs.map((q) => <li key={q.id}>{q.prompt}{q.options && <div> {q.options.map((o, i) => <span key={i} style={{ marginRight: 14 }}>{'ABCDEF'[i]}. {o}</span>)}</div>}{q.items && <div>{q.items.join(' ; ')}</div>}{q.pairs && <div>{q.pairs.map((p) => p[0]).join(' ; ')} ↔ {q.pairs.map((p) => p[1]).join(' ; ')}</div>}</li>)}</ol>
          </div>
        )
      })}
      <h2 style={{ breakBefore: 'page' }}>Đáp án và lời giải</h2>
      <ol>{lesson.questions.map((q) => <li key={q.id}><b>{answerText(q)}</b> — {q.explanation}</li>)}</ol>
    </div>
  )
}
