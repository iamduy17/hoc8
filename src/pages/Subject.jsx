import { useEffect, useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { useApp } from '../App'
import { subjectById } from '../data/subjects'
import { getChapters, hasLesson } from '../data/content'
import { BackButton } from '../components/ui'
import { listAttempts } from '../lib/store'
import { poolSize } from '../lib/tests'

export default function Subject() {
  const { subjectId } = useParams()
  const { student } = useApp()
  const subject = subjectById(subjectId)
  const [attempts, setAttempts] = useState([])
  useEffect(() => { listAttempts(student.id).then((l) => setAttempts(l.filter((a) => a.subject === subjectId))) }, [student.id, subjectId])
  if (!subject) return <Navigate to="/" />

  const chapters = getChapters(subjectId)
  const best = {}
  for (const a of attempts) {
    const acc = a.score / a.total
    if (!best[a.lesson_id] || acc > best[a.lesson_id]) best[a.lesson_id] = acc
  }

  return (
    <div className="page narrow">
      <div className="topbar"><BackButton to="/" /></div>
      <div className="hero" style={{ background: subject.color, color: subject.ink, marginBottom: 20 }}>
        <div className="row" style={{ gap: 18 }}>
          <div className="big-icon">{subject.icon}</div>
          <div>
            <h1>{subject.name}</h1>
            <p style={{ opacity: .85 }}>Lớp 8 · Kết nối tri thức</p>
          </div>
        </div>
      </div>

      {poolSize(subjectId) > 0 && (
        <Link to={`/kiem-tra/${subjectId}`} className="card sky row" style={{ marginBottom: 6 }}>
          <span className="icon-box" style={{ background: '#fff', width: 44, height: 44, fontSize: 22 }}>📝</span>
          <div className="grow"><b>Kiểm tra định kì</b><div className="small muted">15 phút · giữa kì · cuối kì, đề rút ngẫu nhiên</div></div>
          <span className="chev">›</span>
        </Link>
      )}

      {chapters.length === 0 && (
        <div className="card empty"><div className="em">✏️</div>Môn này đang được biên soạn. Bạn quay lại sau nhé.</div>
      )}

      {chapters.map((c) => (
        <div key={c.id}>
          <div className="section-label">{c.title}</div>
          <div className="list">
            {c.lessons.map((l) => {
              const ready = hasLesson(l.id)
              const acc = best[l.id]
              const inner = (
                <>
                  <span className="icon-box" style={{ background: ready ? subject.color : '#EFE5D2' }}>{acc >= 0.8 ? '⭐' : ready ? '📘' : '🔒'}</span>
                  <div className="grow">
                    <b className="small">{l.title}</b>
                    {acc != null && <div className="progress" style={{ marginTop: 6, maxWidth: 180 }}><div style={{ width: `${Math.round(acc * 100)}%` }} /></div>}
                    {!ready && <div className="small muted">Đang biên soạn</div>}
                  </div>
                  {ready && <span className="chev">›</span>}
                </>
              )
              return ready
                ? <Link key={l.id} to={`/bai/${l.id}`} className="list-item">{inner}</Link>
                : <div key={l.id} className="list-item" style={{ opacity: .6 }}>{inner}</div>
            })}
          </div>
        </div>
      ))}
    </div>
  )
}
