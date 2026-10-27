import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useApp } from '../App'
import { SUBJECTS, subjectById } from '../data/subjects'
import { SubjectCard, SubjectChips, fmtDate } from '../components/ui'
import { todayPlan, dueForReview } from '../lib/schedule'
import { listAttempts, listReminders, markReminderRead, listAssignments, markAssignmentDone } from '../lib/store'
import { getLesson } from '../data/content'

export default function Home() {
  const { student, settings } = useApp()
  const plan = todayPlan()
  const [attempts, setAttempts] = useState([])
  const [reminders, setReminders] = useState([])
  const [assignments, setAssignments] = useState([])

  useEffect(() => {
    listAttempts(student.id).then(setAttempts)
    listReminders(student.id).then((r) => setReminders(r.filter((x) => !x.read)))
    listAssignments(student.id).then(setAssignments)
  }, [student.id])

  // Tự đánh dấu bài giao đã xong khi có lượt làm sau lúc giao
  useEffect(() => {
    const doneIds = assignments.filter((as) => !as.done && attempts.some((a) => a.lesson_id === as.lesson_id && new Date(a.created_at) > new Date(as.created_at))).map((as) => as.id)
    if (!doneIds.length) return
    doneIds.forEach(markAssignmentDone)
    setAssignments((list) => list.map((as) => (doneIds.includes(as.id) ? { ...as, done: true } : as)))
  }, [assignments, attempts])

  const studiedToday = attempts.some((a) => new Date(a.created_at).toDateString() === new Date().toDateString())
  const lateEvening = new Date().getHours() >= 19
  useEffect(() => {
    if (!settings.remind || studiedToday || !lateEvening) return
    if ('Notification' in window && Notification.permission === 'granted') {
      try { new Notification('Học 8', { body: 'Hôm nay chưa học. Làm 5 câu thôi cũng được!' }) } catch {}
    }
  }, [settings.remind, studiedToday, lateEvening])
  const pendingAs = assignments.filter((a) => !a.done)

  const due = dueForReview(attempts).slice(0, 3)
  const streak = calcStreak(attempts)

  return (
    <div className="page">
      <header className="topbar">
        <div className="brand"><span className="logo">H8</span> Học 8</div>
        <Link to="/toi" className="btn sm" aria-label="Hồ sơ">{student.avatar} {student.name}</Link>
      </header>

      <div className="layout">
        <section>
          <div className="row between" style={{ marginBottom: 12 }}>
            <h2>Môn học</h2>
            {streak > 0 && <span className="pill">🔥 {streak} ngày liên tiếp</span>}
          </div>
          <motion.div className="subject-grid" initial="hide" animate="show" variants={{ show: { transition: { staggerChildren: 0.04 } } }}>
            {SUBJECTS.map((s) => (
              <motion.div key={s.id} variants={{ hide: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}>
                <SubjectCard subject={s} />
              </motion.div>
            ))}
          </motion.div>
        </section>

        <aside className="stack" style={{ gap: 14 }}>
          {settings.remind && lateEvening && !studiedToday && (
            <div className="banner"><b>⏰ Hôm nay chưa học</b><p className="small">Làm 5 câu thôi cũng được. Giữ chuỗi 🔥 nhé!</p></div>
          )}
          {pendingAs.length > 0 && (
            <div className="card stack">
              <div className="card-title">Bài gia sư giao</div>
              {pendingAs.map((as) => {
                const s = subjectById(as.subject)
                const late = as.due_date && new Date(as.due_date) < new Date(new Date().toDateString())
                return (
                  <Link key={as.id} to={getLesson(as.lesson_id) ? `/bai/${as.lesson_id}/luyen` : `/kiem-tra/${as.subject}`} className="row">
                    <span className="icon-box" style={{ background: s.color }}>{s.icon}</span>
                    <div className="grow"><b className="small">{as.lesson_title}</b><div className="small muted">{as.note || ''}{as.due_date ? ` · hạn ${new Date(as.due_date).getDate()}/${new Date(as.due_date).getMonth() + 1}` : ''}</div></div>
                    <span className={`pill ${late ? 'bad' : 'star'}`}>{late ? 'Trễ' : 'Cần làm'}</span>
                  </Link>
                )
              })}
            </div>
          )}
          {reminders.map((r) => (
            <div key={r.id} className="banner stack" style={{ gap: 6 }}>
              <b>📣 Lời nhắn từ gia sư</b>
              <p>{r.message}</p>
              <button className="btn sm" style={{ alignSelf: 'flex-end' }} onClick={() => { markReminderRead(r.id); setReminders((l) => l.filter((x) => x.id !== r.id)) }}>Đã đọc</button>
            </div>
          ))}

          <div className="card stack">
            <div className="card-title">Hôm nay, {plan.dayName.toLowerCase()}</div>
            {plan.isSchoolDay ? (
              <>
                <div>
                  <b>Ôn lại môn vừa học</b>
                  <p className="small muted" style={{ marginBottom: 6 }}>Ôn trong 24 giờ là nhớ lâu nhất.</p>
                  <SubjectChips ids={plan.review} emptyText="Hôm nay không có môn nào trong app." />
                </div>
                <div>
                  <b>Đọc trước cho {plan.nextDayName}</b>
                  <p className="small muted" style={{ marginBottom: 6 }}>Đọc tóm tắt 30 giây và keyword là đủ.</p>
                  <SubjectChips ids={plan.prepare} emptyText="Không có." />
                </div>
              </>
            ) : (
              <div>
                <b>Cuối tuần, không có tiết</b>
                <p className="small muted" style={{ marginBottom: 6 }}>Chuẩn bị cho {plan.nextDayName}:</p>
                <SubjectChips ids={plan.prepare} emptyText="Không có." />
              </div>
            )}
          </div>

          {due.length > 0 && (
            <div className="card stack">
              <div className="card-title">Đến hạn ôn lại</div>
              {due.map((d) => {
                const s = subjectById(d.subject)
                return (
                  <Link key={d.lesson_id} to={`/bai/${d.lesson_id}/luyen`} className="row">
                    <span className="icon-box" style={{ background: s.color }}>{s.icon}</span>
                    <div className="grow"><b className="small">{d.lesson_title}</b><div className="small muted">Lần trước {d.score}/{d.total}</div></div>
                    <span className="chev">›</span>
                  </Link>
                )
              })}
            </div>
          )}

          <div>
            <div className="section-label">Vừa làm</div>
            {attempts.length === 0 ? (
              <div className="card empty"><div className="em">🐣</div>Chưa làm bài nào. Bắt đầu với Toán nhé!</div>
            ) : (
              <div className="list">
                {attempts.slice(0, 4).map((a) => {
                  const s = subjectById(a.subject)
                  return (
                    <Link key={a.id} to="/lich-su" className="list-item">
                      <span className="icon-box" style={{ background: s.color }}>{s.icon}</span>
                      <div className="grow"><b className="small">{a.lesson_title}</b><div className="small muted">{fmtDate(a.created_at)}</div></div>
                      <span className={`pill ${a.score / a.total >= 0.8 ? 'good' : a.score / a.total >= 0.5 ? '' : 'bad'}`}>{a.score}/{a.total}</span>
                    </Link>
                  )
                })}
              </div>
            )}
          </div>
        </aside>
      </div>
    </div>
  )
}

function calcStreak(attempts) {
  const days = new Set(attempts.map((a) => new Date(a.created_at).toDateString()))
  let n = 0
  const d = new Date()
  while (days.has(d.toDateString())) { n++; d.setDate(d.getDate() - 1) }
  return n
}
