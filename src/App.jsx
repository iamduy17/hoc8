import { createContext, useContext, useEffect, useState } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { session, settings as settingsStore, touchStudent } from './lib/store'
import { BottomNav } from './components/ui'
import Login from './pages/Login'
import Home from './pages/Home'
import Subject from './pages/Subject'
import Lesson from './pages/Lesson'
import Practice from './pages/Practice'
import History from './pages/History'
import Profile from './pages/Profile'
import Admin from './pages/Admin'
import Test from './pages/Test'

const Ctx = createContext(null)
export const useApp = () => useContext(Ctx)

export default function App() {
  const [student, setStudentState] = useState(() => session.get())
  const [settings, setSettingsState] = useState(() => settingsStore.get())
  const loc = useLocation()

  const setStudent = (s) => { s ? session.set(s) : session.clear(); setStudentState(s) }
  const setSettings = (s) => { settingsStore.set(s); setSettingsState(s) }

  useEffect(() => { document.documentElement.classList.toggle('big', settings.bigText) }, [settings.bigText])
  useEffect(() => { if (student) touchStudent(student.id) }, [student?.id])
  useEffect(() => { window.scrollTo(0, 0) }, [loc.pathname])

  const isAdmin = loc.pathname.startsWith('/admin')
  if (!student && !isAdmin) return <Ctx.Provider value={{ student, setStudent, settings, setSettings }}><Login /></Ctx.Provider>

  return (
    <Ctx.Provider value={{ student, setStudent, settings, setSettings }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mon/:subjectId" element={<Subject />} />
        <Route path="/bai/:lessonId" element={<Lesson />} />
        <Route path="/bai/:lessonId/luyen" element={<Practice />} />
        <Route path="/kiem-tra/:subjectId" element={<Test />} />
        <Route path="/lich-su" element={<History />} />
        <Route path="/toi" element={<Profile />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      {!isAdmin && <BottomNav />}
    </Ctx.Provider>
  )
}
