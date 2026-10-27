import { NavLink, Link } from 'react-router-dom'
import confetti from 'canvas-confetti'
import { subjectById } from '../data/subjects'
import { countLessons, totalLessons } from '../data/content'
import { settings } from '../lib/store'

export function BottomNav() {
  const tabs = [
    { to: '/', icon: '🎮', label: 'Học' },
    { to: '/lich-su', icon: '🕘', label: 'Lịch sử' },
    { to: '/toi', icon: '👤', label: 'Tôi' },
  ]
  return (
    <nav className="bottom-nav no-print" aria-label="Điều hướng">
      {tabs.map((t) => (
        <NavLink key={t.to} to={t.to} end={t.to === '/'} className={({ isActive }) => (isActive ? 'active' : '')} aria-label={t.label} title={t.label}>
          {t.icon}
        </NavLink>
      ))}
    </nav>
  )
}

export function SubjectCard({ subject }) {
  const n = countLessons(subject.id)
  const t = totalLessons(subject.id)
  return (
    <Link to={`/mon/${subject.id}`} className={`subject-card ${n ? '' : 'empty'}`}>
      <span className="count">{n ? `${n}/${t} bài` : `0/${t} bài`}</span>
      <div className="icon" style={{ background: subject.color }}>{subject.icon}</div>
      <div className="name">{subject.short}</div>
    </Link>
  )
}

export function SubjectChips({ ids, emptyText }) {
  if (!ids.length) return <span className="muted small">{emptyText}</span>
  return (
    <div className="row wrap" style={{ gap: 6 }}>
      {ids.map((id) => {
        const s = subjectById(id)
        return (
          <Link key={id} to={`/mon/${id}`} className="pill" style={{ background: s.color, color: s.ink }}>
            {s.icon} {s.short}
          </Link>
        )
      })}
    </div>
  )
}

export function Toggle({ on, onChange, label }) {
  return <button className={`toggle ${on ? 'on' : ''}`} role="switch" aria-checked={on} aria-label={label} onClick={() => onChange(!on)} />
}

export function BackButton({ to, onClick }) {
  const inner = <span aria-hidden>←</span>
  return to ? <Link to={to} className="btn icon-btn no-print" aria-label="Quay lại">{inner}</Link>
            : <button className="btn icon-btn no-print" aria-label="Quay lại" onClick={onClick}>{inner}</button>
}

export function celebrate(big = false) {
  if (!settings.get().effects) return
  confetti({ particleCount: big ? 160 : 50, spread: big ? 90 : 60, origin: { y: 0.7 }, colors: ['#FF8A1E', '#2E9E5B', '#1F5FA8', '#FFD6A8'] })
}

export function fmtDate(iso) {
  const d = new Date(iso)
  return `${d.getHours()}:${String(d.getMinutes()).padStart(2, '0')} ${d.getDate()} thg ${d.getMonth() + 1}`
}
export function fmtDur(s) {
  s = Math.round(s || 0)
  return s < 60 ? `${s}s` : `${Math.floor(s / 60)}p ${s % 60}s`
}
