import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useApp } from '../App'
import { SUBJECTS, subjectById } from '../data/subjects'
import { fmtDate, fmtDur } from '../components/ui'
import { listAttempts } from '../lib/store'
import { MODE_LABEL } from '../lib/tests'

export default function History() {
  const { student } = useApp()
  const [attempts, setAttempts] = useState([])
  const [filter, setFilter] = useState('all')
  useEffect(() => { listAttempts(student.id).then(setAttempts) }, [student.id])

  const shown = attempts.filter((a) => filter === 'all' || a.subject === filter)
  const totalTime = attempts.reduce((s, a) => s + (a.duration || 0), 0)
  const avg = attempts.length ? Math.round((attempts.reduce((s, a) => s + a.score / a.total, 0) / attempts.length) * 100) : 0

  return (
    <div className="page narrow">
      <div className="topbar"><h1>Lịch sử làm bài</h1></div>
      <div className="row" style={{ marginBottom: 14 }}>
        <div className="card grow center"><div className="small muted">Lượt làm</div><h2>{attempts.length}</h2></div>
        <div className="card grow center"><div className="small muted">Đúng TB</div><h2>{avg}%</h2></div>
        <div className="card grow center"><div className="small muted">Thời gian</div><h2>{fmtDur(totalTime)}</h2></div>
      </div>
      <div className="tabs" style={{ marginBottom: 12 }}>
        <button className={filter === 'all' ? 'on' : ''} onClick={() => setFilter('all')}>Tất cả</button>
        {SUBJECTS.filter((s) => attempts.some((a) => a.subject === s.id)).map((s) => (
          <button key={s.id} className={filter === s.id ? 'on' : ''} onClick={() => setFilter(s.id)}>{s.icon} {s.short}</button>
        ))}
      </div>
      {shown.length === 0 ? (
        <div className="card empty"><div className="em">🕘</div>Chưa có lượt làm nào.</div>
      ) : (
        <div className="list">
          {shown.map((a) => {
            const s = subjectById(a.subject)
            const pct = a.score / a.total
            return (
              <Link key={a.id} to={a.lesson_id.startsWith('test:') ? `/kiem-tra/${a.subject}` : `/bai/${a.lesson_id}/luyen`} className="list-item">
                <span className="icon-box" style={{ background: s.color }}>{s.icon}</span>
                <div className="grow">
                  <b className="small">{a.lesson_title}</b>
                  <div className="small muted">{MODE_LABEL[a.mode] || a.mode} · {fmtDur(a.duration)} · {fmtDate(a.created_at)}</div>
                </div>
                <span className={`pill ${pct >= .8 ? 'good' : pct >= .5 ? '' : 'bad'}`}>{a.score}/{a.total}</span>
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}
