import { Link } from 'react-router-dom'
import { useApp } from '../App'
import { Toggle } from '../components/ui'
import { isCloud } from '../lib/store'

export default function Profile() {
  const { student, setStudent, settings, setSettings } = useApp()
  const set = (k) => (v) => setSettings({ ...settings, [k]: v })
  return (
    <div className="page narrow">
      <div className="card row" style={{ marginBottom: 16 }}>
        <span className="icon-box" style={{ width: 56, height: 56, fontSize: 28 }}>{student.avatar}</span>
        <h2 className="grow">{student.name}</h2>
        <button className="btn sm" onClick={() => setStudent(null)}>Đổi người</button>
      </div>

      <div className="list" style={{ marginBottom: 16 }}>
        <Link to="/lich-su" className="list-item"><span className="icon-box">🕘</span><b>Lịch sử làm bài</b><span className="chev">›</span></Link>
        <Link className="list-item" to="/admin"><span className="icon-box">🧑‍🏫</span><b>Trang gia sư</b><span className="chev">›</span></Link>
      </div>

      <div className="section-label">Dễ nhìn</div>
      <div className="list">
        <div className="list-item">
          <span className="icon-box">🔠</span><b className="grow">Cỡ chữ</b>
          <div className="seg">
            <button className={!settings.bigText ? 'on' : ''} onClick={() => set('bigText')(false)}>Thường</button>
            <button className={settings.bigText ? 'on' : ''} onClick={() => set('bigText')(true)}>Lớn</button>
          </div>
        </div>
      </div>

      <div className="section-label">Cảm giác</div>
      <div className="list">
        <div className="list-item"><span className="icon-box">✨</span><b className="grow">Hiệu ứng (pháo giấy khi đúng)</b><Toggle on={settings.effects} onChange={set('effects')} label="Hiệu ứng" /></div>
        <div className="list-item"><span className="icon-box">🔊</span><b className="grow">Âm thanh</b><Toggle on={settings.sound} onChange={set('sound')} label="Âm thanh" /></div>
      </div>

      <div className="section-label">Tiếng Anh</div>
      <div className="list">
        <div className="list-item">
          <span className="icon-box">🗣️</span><b className="grow">Giọng đọc</b>
          <div className="seg">
            <button className={settings.accent !== 'en-US' ? 'on' : ''} onClick={() => set('accent')('en-GB')}>🇬🇧 Anh</button>
            <button className={settings.accent === 'en-US' ? 'on' : ''} onClick={() => set('accent')('en-US')}>🇺🇸 Mỹ</button>
          </div>
        </div>
      </div>

      <div className="section-label">Nhắc học</div>
      <div className="list">
        <div className="list-item">
          <span className="icon-box">⏰</span>
          <div className="grow"><b>Nhắc lúc 19:00</b><div className="small muted">Nếu hôm đó chưa học, app hiện lời nhắc và gửi thông báo (khi app đang mở hoặc đã cài lên màn hình chính).</div></div>
          <Toggle on={settings.remind} onChange={async (v) => { if (v && 'Notification' in window && Notification.permission !== 'granted') await Notification.requestPermission(); set('remind')(v) }} label="Nhắc học" />
        </div>
      </div>

      <p className="small muted center" style={{ marginTop: 20 }}>
        {isCloud ? 'Dữ liệu đồng bộ qua Supabase.' : 'Chế độ chạy thử – dữ liệu lưu trên máy này.'} · Học 8 v0.1
      </p>
    </div>
  )
}
