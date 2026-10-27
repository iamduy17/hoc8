// 9 môn trong chương trình học. `color` dùng cho nền icon (pastel), `ink` cho chữ/viền.
export const SUBJECTS = [
  { id: 'toan',      name: 'Toán',                       short: 'Toán',    icon: '➗', color: '#DCEBFF', ink: '#1F5FBF' },
  { id: 'van',       name: 'Ngữ văn',                    short: 'Văn',     icon: '📖', color: '#FFE0DB', ink: '#B3362C' },
  { id: 'anh',       name: 'Tiếng Anh',                  short: 'Anh',     icon: '🗣️', color: '#D9F1FF', ink: '#0B6AA8' },
  { id: 'khtn',      name: 'Khoa học tự nhiên',          short: 'KHTN',    icon: '🧪', color: '#D7F3E6', ink: '#178354' },
  { id: 'sudia',     name: 'Lịch sử và Địa lí',          short: 'Sử – Địa',icon: '🗺️', color: '#FFEBC7', ink: '#8A5A14' },
  { id: 'congnghe',  name: 'Công nghệ',                  short: 'Công nghệ',icon: '🔧', color: '#E6DEFB', ink: '#5A3FB0' },
  { id: 'tinhoc',    name: 'Tin học',                    short: 'Tin học', icon: '💻', color: '#D5F4F6', ink: '#0F7A86' },
  { id: 'gdcd',      name: 'Giáo dục công dân',          short: 'GDCD',    icon: '⚖️', color: '#FFF1C2', ink: '#8A6400' },
  { id: 'httnhn',    name: 'Hoạt động trải nghiệm, hướng nghiệp', short: 'HĐTN–HN', icon: '🧭', color: '#FADCEE', ink: '#A0286E' },
]

export const subjectById = (id) => SUBJECTS.find((s) => s.id === id)

export const AVATARS = ['🐥', '🦊', '🐯', '🐼', '🐸', '🦄', '🐙', '🦉', '🐨', '🦖', '🐧', '🐝']

export const LEVELS = [
  { id: 1, name: 'Dễ',      icon: '🐣' },
  { id: 2, name: 'Vừa',     icon: '🦊' },
  { id: 3, name: 'Khó',     icon: '🐯' },
  { id: 4, name: 'Cao thủ', icon: '🐲' },
]
export const levelById = (id) => LEVELS.find((l) => l.id === Number(id))
