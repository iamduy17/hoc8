import { useEffect, useMemo, useState } from "react"
import { Link } from "react-router-dom"
import { SUBJECTS, subjectById } from '../data/subjects'
import { fmtDate, fmtDur } from '../components/ui'
import { listStudents, listAttempts, listReminders, addReminder, deleteStudent, isCloud, listAssignments, addAssignment, deleteAssignment } from '../lib/store'
import { getChapters, hasLesson, getLesson } from '../data/content'
import { TEST_TYPES, MODE_LABEL } from '../lib/tests'
import { todayPlan } from '../lib/schedule'

const PIN = import.meta.env.VITE_ADMIN_PIN || '1234'
const DAY = 86400e3

export default function Admin() {
  const [ok, setOk] = useState(() => sessionStorage.getItem('hoc8_admin') === '1')
  const [pin, setPin] = useState('')
  if (!ok) {
    return (
      <div className="page narrow" style={{ paddingTop: 60 }}>
        <div className="card stack">
          <h2>Trang gia sư</h2>
          <input className="field" type="password" placeholder="Mã PIN" value={pin} onChange={(e) => setPin(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && pin === PIN && (sessionStorage.setItem('hoc8_admin', '1'), setOk(true))} />
          <button className="btn primary" onClick={() => { if (pin === PIN) { sessionStorage.setItem('hoc8_admin', '1'); setOk(true) } else setPin('') }}>Vào</button>
          <Link to="/" className="small muted center">← Về trang học sinh</Link>
        </div>
      </div>
    )
  }
  return <Dashboard />
}

function Dashboard() {
  const [students, setStudents] = useState([])
  const [attempts, setAttempts] = useState([])
  const [sel, setSel] = useState(null)
  const plan = todayPlan()
  const reload = () => { listStudents().then(setStudents); listAttempts().then(setAttempts) }
  useEffect(reload, [])

  const rows = useMemo(() => students.map((s) => {
    const mine = attempts.filter((a) => a.student_id === s.id)
    const week = mine.filter((a) => Date.now() - new Date(a.created_at) < 7 * DAY)
    const acc = mine.length ? Math.round((mine.reduce((x, a) => x + a.score / a.total, 0) / mine.length) * 100) : null
    const idle = Math.floor((Date.now() - new Date(s.last_seen)) / DAY)
    return { s, mine, week, acc, idle, time: week.reduce((x, a) => x + (a.duration || 0), 0) }
  }), [students, attempts])

  const selRow = rows.find((r) => r.s.id === sel)

  return (
    <div className="page">
      <header className="topbar">
        <div className="brand"><span className="logo">H8</span> Gia sư</div>
        <div className="row">
          <span className={`pill ${isCloud ? 'good' : 'gray'}`}>{isCloud ? '☁️ Supabase' : '💾 máy này'}</span>
          <Link to="/" className="btn sm">Trang học sinh</Link>
        </div>
      </header>

      <div className="card" style={{ marginBottom: 16 }}>
        <div className="card-title">Hôm nay ({plan.dayName.toLowerCase()}) học sinh nên</div>
        <div className="row wrap">
          <span>Ôn: <b>{plan.review.map((id) => subjectById(id).short).join(', ') || '—'}</b></span>
          <span>·</span>
          <span>Chuẩn bị {plan.nextDayName}: <b>{plan.prepare.map((id) => subjectById(id).short).join(', ') || '—'}</b></span>
        </div>
      </div>

      <div className="layout">
        <div className="card scroll-x">
          <div className="row between" style={{ marginBottom: 8 }}><h2>Học sinh ({students.length})</h2><button className="btn sm" onClick={reload}>↻ Tải lại</button></div>
          {rows.length === 0 ? <div className="empty">Chưa có học sinh nào đăng nhập.</div> : (
            <table className="tbl">
              <thead><tr><th>Tên</th><th>Lần cuối</th><th>Lượt (7 ngày)</th><th>Thời gian (7 ngày)</th><th>Đúng TB</th><th></th></tr></thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.s.id} style={{ cursor: 'pointer', background: sel === r.s.id ? 'var(--accent-soft)' : '' }} onClick={() => setSel(r.s.id)}>
                    <td>{r.s.avatar} <b>{r.s.name}</b></td>
                    <td><span className={`pill ${r.idle >= 3 ? 'bad' : r.idle >= 1 ? 'gray' : 'good'}`}>{r.idle === 0 ? 'hôm nay' : `${r.idle} ngày trước`}</span></td>
                    <td>{r.week.length}</td>
                    <td>{fmtDur(r.time)}</td>
                    <td>{r.acc == null ? '—' : `${r.acc}%`}</td>
                    <td>›</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        <aside className="stack">
          {selRow ? <StudentDetail row={selRow} onDeleted={() => { setSel(null); reload() }} /> : (
            <div className="card empty"><div className="em">👈</div>Chọn một học sinh để xem chi tiết và gửi lời nhắc.</div>
          )}
        </aside>
      </div>
    </div>
  )
}

function StudentDetail({ row, onDeleted }) {
  const { s, mine } = row
  const [msg, setMsg] = useState('')
  const [reminders, setReminders] = useState([])
  const [sent, setSent] = useState(false)
  const [assignments, setAssignments] = useState([])
  const [asSubject, setAsSubject] = useState('toan')
  const [asLesson, setAsLesson] = useState('')
  const [asDue, setAsDue] = useState('')
  const [asNote, setAsNote] = useState('')
  const loadAs = () => listAssignments(s.id).then(setAssignments)
  useEffect(() => { listReminders(s.id).then(setReminders); loadAs() }, [s.id])

  const lessonOptions = [
    ...getChapters(asSubject).flatMap((c) => c.lessons.filter((l) => hasLesson(l.id)).map((l) => ({ id: l.id, title: l.title }))),
    ...TEST_TYPES.map((t) => ({ id: `test:${asSubject}:${t.id}`, title: `📝 ${t.name}` })),
  ]
  const giveAssignment = async () => {
    if (!asLesson) return
    const opt = lessonOptions.find((o) => o.id === asLesson)
    await addAssignment({ student_id: s.id, subject: asSubject, lesson_id: asLesson.startsWith('test:') ? `test:${asSubject}` : asLesson, lesson_title: `${opt.title} · ${subjectById(asSubject).short}`, level: 'all', note: asNote.trim() || null, due_date: asDue || null })
    setAsLesson(''); setAsNote(''); setAsDue(''); loadAs()
  }

  const bySubject = SUBJECTS.map((sub) => {
    const a = mine.filter((x) => x.subject === sub.id)
    return { sub, n: a.length, acc: a.length ? Math.round((a.reduce((x, y) => x + y.score / y.total, 0) / a.length) * 100) : null }
  }).filter((x) => x.n)

  const weak = {}
  for (const a of mine) for (const t of a.wrong_tags || []) weak[t] = (weak[t] || 0) + 1
  const weakList = Object.entries(weak).sort((a, b) => b[1] - a[1]).slice(0, 6)

  const send = async () => {
    if (!msg.trim()) return
    await addReminder(s.id, msg.trim())
    setMsg(''); setSent(true); setTimeout(() => setSent(false), 2000)
    listReminders(s.id).then(setReminders)
  }

  return (
    <>
      <div className="card stack">
        <div className="row"><span className="icon-box" style={{ width: 48, height: 48, fontSize: 24 }}>{s.avatar}</span><h2>{s.name}</h2></div>
        <div className="small muted">Tham gia {fmtDate(s.created_at)} · {mine.length} lượt làm</div>
        {bySubject.length > 0 && (
          <div className="stack" style={{ gap: 6 }}>
            {bySubject.map(({ sub, n, acc }) => (
              <div key={sub.id} className="row">
                <span className="icon-box" style={{ background: sub.color, width: 28, height: 28, fontSize: '.85em' }}>{sub.icon}</span>
                <span className="small grow">{sub.short} · {n} lượt</span>
                <div className="progress" style={{ width: 90 }}><div style={{ width: `${acc}%` }} /></div>
                <b className="small">{acc}%</b>
              </div>
            ))}
          </div>
        )}
        {weakList.length > 0 && (
          <div>
            <div className="small muted" style={{ marginBottom: 4 }}>Hay sai ở</div>
            <div className="row wrap" style={{ gap: 6 }}>{weakList.map(([t, n]) => <span key={t} className="pill bad">{t} ×{n}</span>)}</div>
          </div>
        )}
      </div>

      <div className="card stack">
        <div className="card-title">Gửi lời nhắc</div>
        <textarea className="field" rows={3} placeholder="VD: Tối nay ôn lại Đơn thức mức Khó nhé, thứ tư có Toán." value={msg} onChange={(e) => setMsg(e.target.value)} />
        <button className={`btn ${sent ? 'good' : 'primary'}`} onClick={send}>{sent ? '✓ Đã gửi' : 'Gửi'}</button>
        {reminders.length > 0 && (
          <div className="stack" style={{ gap: 4 }}>
            {reminders.slice(0, 5).map((r) => <div key={r.id} className="small muted">{r.read ? '✓' : '•'} {r.message}</div>)}
          </div>
        )}
      </div>

      <div className="card stack">
        <div className="card-title">Giao bài</div>
        <div className="row">
          <select className="field" value={asSubject} onChange={(e) => { setAsSubject(e.target.value); setAsLesson('') }}>
            {SUBJECTS.map((x) => <option key={x.id} value={x.id}>{x.icon} {x.short}</option>)}
          </select>
          <select className="field" value={asLesson} onChange={(e) => setAsLesson(e.target.value)}>
            <option value="">Chọn bài…</option>
            {lessonOptions.map((o) => <option key={o.id} value={o.id}>{o.title}</option>)}
          </select>
        </div>
        <div className="row">
          <input className="field" type="date" value={asDue} onChange={(e) => setAsDue(e.target.value)} aria-label="Hạn nộp" />
          <input className="field" placeholder="Ghi chú (vd: làm mức Khó)" value={asNote} onChange={(e) => setAsNote(e.target.value)} />
        </div>
        <button className="btn primary" disabled={!asLesson} onClick={giveAssignment}>Giao bài</button>
        {assignments.length > 0 && (
          <div className="stack" style={{ gap: 4 }}>
            {assignments.map((a) => (
              <div key={a.id} className="row small">
                <span className={`pill ${a.done ? 'good' : 'star'}`}>{a.done ? '✓ xong' : 'chưa'}</span>
                <span className="grow">{a.lesson_title}{a.due_date ? ` · hạn ${a.due_date}` : ''}</span>
                <button className="btn ghost sm" aria-label="Xóa" onClick={() => deleteAssignment(a.id).then(loadAs)}>✕</button>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="card stack">
        <div className="card-title">Lượt làm gần nhất</div>
        {mine.slice(0, 8).map((a) => (
          <div key={a.id} className="row small">
            <span className="grow">{a.lesson_title} <span className="muted">· {MODE_LABEL[a.mode] || a.mode}</span></span>
            <span className="muted">{fmtDate(a.created_at)}</span>
            <span className={`pill ${a.score / a.total >= .8 ? 'good' : a.score / a.total >= .5 ? '' : 'bad'}`}>{a.score}/{a.total}</span>
          </div>
        ))}
        {mine.length === 0 && <span className="muted small">Chưa làm bài nào.</span>}
      </div>

      <button className="btn ghost sm" style={{ color: 'var(--bad)' }} onClick={() => confirm(`Xóa ${s.name} và toàn bộ kết quả?`) && deleteStudent(s.id).then(onDeleted)}>Xóa học sinh</button>
    </>
  )
}
