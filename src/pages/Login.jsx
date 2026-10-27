import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useApp } from '../App'
import { AVATARS } from '../data/subjects'
import { loginStudent, listStudents, isCloud } from '../lib/store'

export default function Login() {
  const { setStudent } = useApp()
  const [name, setName] = useState('')
  const [avatar, setAvatar] = useState(AVATARS[0])
  const [recent, setRecent] = useState([])
  const [busy, setBusy] = useState(false)

  useEffect(() => { listStudents().then((l) => setRecent(l.slice(0, 6))) }, [])

  const go = async (n, a) => {
    if (!n.trim() || busy) return
    setBusy(true)
    try { setStudent(await loginStudent(n, a)) } finally { setBusy(false) }
  }

  return (
    <div className="page narrow" style={{ paddingTop: 48 }}>
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="stack" style={{ gap: 20 }}>
        <div className="center">
          <div className="brand" style={{ justifyContent: 'center', fontSize: '1.6em' }}><span className="logo">H8</span> Học 8</div>
          <p className="muted" style={{ marginTop: 6 }}>Toán · Văn · Anh · KHTN · Sử–Địa · Công nghệ · Tin · GDCD · HĐTN</p>
        </div>

        <div className="card stack">
          <h2>Em tên gì?</h2>
          <input className="field" placeholder="Nhập tên của em" value={name} autoFocus
            onChange={(e) => setName(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && go(name, avatar)} />
          <div>
            <div className="small muted" style={{ marginBottom: 6 }}>Chọn linh vật</div>
            <div className="row wrap" style={{ gap: 8 }}>
              {AVATARS.map((a) => (
                <button key={a} className={`choice ${a === avatar ? 'sel' : ''}`} style={{ width: 52, height: 52, justifyContent: 'center', fontSize: 24, padding: 0 }}
                  onClick={() => setAvatar(a)} aria-label={`Linh vật ${a}`}>{a}</button>
              ))}
            </div>
          </div>
          <button className="btn primary block" disabled={!name.trim() || busy} onClick={() => go(name, avatar)}>Vào học</button>
        </div>

        {recent.length > 0 && (
          <div>
            <div className="section-label">Đã từng học ở đây</div>
            <div className="list">
              {recent.map((s) => (
                <button key={s.id} className="list-item" onClick={() => go(s.name, s.avatar)}>
                  <span className="icon-box">{s.avatar}</span>
                  <b>{s.name}</b>
                  <span className="chev">›</span>
                </button>
              ))}
            </div>
          </div>
        )}

        <p className="center small muted">
          {isCloud ? 'Kết quả được lưu trên đám mây, học ở máy nào cũng thấy.' : 'Đang chạy thử: kết quả chỉ lưu trên máy này.'}
          {' '}<Link to="/admin" style={{ textDecoration: "underline" }}>Trang gia sư</Link>
        </p>
      </motion.div>
    </div>
  )
}
