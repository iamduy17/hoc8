// Thời khóa biểu lớp 8A7 – HKI, năm học 2026–2027, áp dụng từ 05/10/2026.
// Chỉnh ở đây khi trường đổi TKB. 1 = Thứ hai … 5 = Thứ sáu.
export const TIMETABLE = {
  1: { sang: ['HTTNHN', 'HTTNHN', 'Toán', 'Toán'],            chieu: ['Văn', 'Anh Văn', 'Tin học – QT', 'KHTN'] },
  2: { sang: ['Công nghệ', 'AI', 'GDTC', 'GDTC'],              chieu: ['Tiếng Anh – TH', 'Tiếng Anh – TH', 'Tiếng Anh – TH', 'Văn'] },
  3: { sang: ['Sử – Địa', 'GDĐP', 'Toán TH', 'Toán TH'],       chieu: ['Toán', 'Anh Văn', 'KNS', 'Nhạc'] },
  4: { sang: ['Sử – Địa', 'KHTN', 'Năng Khiếu', 'Năng Khiếu'], chieu: ['Văn', 'Văn', 'Sử – Địa', 'Mỹ Thuật'] },
  5: { sang: ['Khoa học TH', 'Khoa học TH', 'Khoa học TH', 'KHTN'], chieu: ['STEM', 'Tin Học', 'GDCD', 'Công nghệ'] },
}

// Tên tiết trên TKB -> môn trong app (null = môn không có bài trong app)
export const PERIOD_TO_SUBJECT = {
  'Toán': 'toan', 'Toán TH': 'toan',
  'Văn': 'van',
  'Anh Văn': 'anh', 'Tiếng Anh – TH': 'anh',
  'KHTN': 'khtn', 'Khoa học TH': 'khtn',
  'Sử – Địa': 'sudia',
  'Công nghệ': 'congnghe',
  'Tin học – QT': 'tinhoc', 'Tin Học': 'tinhoc',
  'GDCD': 'gdcd',
  'HTTNHN': 'httnhn',
  'AI': null, 'GDTC': null, 'GDĐP': null, 'Năng Khiếu': null, 'KNS': null,
  'Nhạc': null, 'Mỹ Thuật': null, 'STEM': null,
}

export const DAY_NAMES = ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy']
