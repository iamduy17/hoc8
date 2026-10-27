// Một API duy nhất cho dữ liệu. Có VITE_SUPABASE_URL -> dùng Supabase (đồng bộ mọi máy).
// Không có -> localStorage (chỉ trên máy này, dùng để chạy thử).
import { createClient } from '@supabase/supabase-js'

const URL = import.meta.env.VITE_SUPABASE_URL
const KEY = import.meta.env.VITE_SUPABASE_ANON_KEY
export const isCloud = Boolean(URL && KEY)
const sb = isCloud ? createClient(URL, KEY) : null

// ---------- localStorage helpers ----------
const LS = {
  get(k, d) { try { return JSON.parse(localStorage.getItem(k)) ?? d } catch { return d } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)) } catch {} },
}
const uid = () => Math.random().toString(36).slice(2) + Date.now().toString(36)
const now = () => new Date().toISOString()

// ---------- Students ----------
export async function listStudents() {
  if (isCloud) {
    const { data } = await sb.from('students').select('*').order('last_seen', { ascending: false })
    return data || []
  }
  return LS.get('hoc8_students', []).sort((a, b) => (b.last_seen > a.last_seen ? 1 : -1))
}

export async function loginStudent(name, avatar) {
  name = name.trim()
  if (isCloud) {
    const { data: found } = await sb.from('students').select('*').ilike('name', name).maybeSingle()
    if (found) {
      await sb.from('students').update({ last_seen: now(), avatar: avatar || found.avatar }).eq('id', found.id)
      return { ...found, avatar: avatar || found.avatar }
    }
    const { data } = await sb.from('students').insert({ name, avatar }).select().single()
    return data
  }
  const list = LS.get('hoc8_students', [])
  let s = list.find((x) => x.name.toLowerCase() === name.toLowerCase())
  if (s) { s.last_seen = now(); s.avatar = avatar || s.avatar }
  else { s = { id: uid(), name, avatar, created_at: now(), last_seen: now() }; list.push(s) }
  LS.set('hoc8_students', list)
  return s
}

export async function touchStudent(id) {
  if (isCloud) return sb.from('students').update({ last_seen: now() }).eq('id', id)
  const list = LS.get('hoc8_students', [])
  const s = list.find((x) => x.id === id)
  if (s) { s.last_seen = now(); LS.set('hoc8_students', list) }
}

export async function deleteStudent(id) {
  if (isCloud) return sb.from('students').delete().eq('id', id)
  LS.set('hoc8_students', LS.get('hoc8_students', []).filter((s) => s.id !== id))
  LS.set('hoc8_attempts', LS.get('hoc8_attempts', []).filter((a) => a.student_id !== id))
  LS.set('hoc8_reminders', LS.get('hoc8_reminders', []).filter((a) => a.student_id !== id))
}

// ---------- Attempts ----------
export async function saveAttempt(a) {
  const row = { ...a, created_at: now() }
  if (isCloud) { const { data } = await sb.from('attempts').insert(row).select().single(); return data }
  row.id = uid()
  LS.set('hoc8_attempts', [row, ...LS.get('hoc8_attempts', [])])
  return row
}

export async function listAttempts(studentId) {
  if (isCloud) {
    let q = sb.from('attempts').select('*').order('created_at', { ascending: false }).limit(500)
    if (studentId) q = q.eq('student_id', studentId)
    const { data } = await q
    return data || []
  }
  const all = LS.get('hoc8_attempts', [])
  return studentId ? all.filter((a) => a.student_id === studentId) : all
}

// ---------- Reminders ----------
export async function listReminders(studentId) {
  if (isCloud) {
    const { data } = await sb.from('reminders').select('*').eq('student_id', studentId).order('created_at', { ascending: false })
    return data || []
  }
  return LS.get('hoc8_reminders', []).filter((r) => r.student_id === studentId)
}

export async function addReminder(studentId, message) {
  const row = { student_id: studentId, message, read: false, created_at: now() }
  if (isCloud) return sb.from('reminders').insert(row)
  row.id = uid()
  LS.set('hoc8_reminders', [row, ...LS.get('hoc8_reminders', [])])
}

export async function markReminderRead(id) {
  if (isCloud) return sb.from('reminders').update({ read: true }).eq('id', id)
  const list = LS.get('hoc8_reminders', [])
  const r = list.find((x) => x.id === id)
  if (r) { r.read = true; LS.set('hoc8_reminders', list) }
}

// ---------- Assignments (giao bài) ----------
export async function listAssignments(studentId) {
  if (isCloud) {
    let q = sb.from('assignments').select('*').order('due_date', { ascending: true })
    if (studentId) q = q.eq('student_id', studentId)
    const { data } = await q
    return data || []
  }
  const all = LS.get('hoc8_assignments', [])
  return studentId ? all.filter((a) => a.student_id === studentId) : all
}
export async function addAssignment(a) {
  const row = { ...a, done: false, created_at: now() }
  if (isCloud) return sb.from('assignments').insert(row)
  row.id = uid()
  LS.set('hoc8_assignments', [row, ...LS.get('hoc8_assignments', [])])
}
export async function markAssignmentDone(id) {
  if (isCloud) return sb.from('assignments').update({ done: true, done_at: now() }).eq('id', id)
  const list = LS.get('hoc8_assignments', [])
  const r = list.find((x) => x.id === id)
  if (r) { r.done = true; r.done_at = now(); LS.set('hoc8_assignments', list) }
}
export async function deleteAssignment(id) {
  if (isCloud) return sb.from('assignments').delete().eq('id', id)
  LS.set('hoc8_assignments', LS.get('hoc8_assignments', []).filter((x) => x.id !== id))
}

// ---------- Session & settings (luôn ở máy này) ----------
export const session = {
  get: () => LS.get('hoc8_session', null),
  set: (s) => LS.set('hoc8_session', s),
  clear: () => localStorage.removeItem('hoc8_session'),
}
export const settings = {
  get: () => ({ bigText: false, effects: true, sound: true, remind: false, accent: 'en-GB', ...LS.get('hoc8_settings', {}) }),
  set: (s) => LS.set('hoc8_settings', s),
}
