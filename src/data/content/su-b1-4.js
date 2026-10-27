// Lịch sử và Địa lí 8 KNTT – Phần Lịch sử, bài 1–4
const C1 = 'Lịch sử – Chương 1. Châu Âu và Bắc Mỹ từ nửa sau thế kỉ XVI đến thế kỉ XVIII'
const C2 = 'Lịch sử – Chương 2. Đông Nam Á từ nửa sau thế kỉ XVI đến giữa thế kỉ XIX'

// Vẽ trục thời gian đơn giản: [[năm, nhãn], ...]
export function timeline(title, events) {
  const F = 'font-family="Quicksand, sans-serif" font-weight="700" fill="#1C2B3A"'
  const n = events.length
  const step = 270 / (n - 1)
  const items = events.map(([y, label], i) => {
    const x = 45 + i * step
    const up = i % 2 === 0
    return `<circle cx="${x}" cy="80" r="6" fill="#E25555"/><text x="${x}" y="${up ? 60 : 108}" ${F} font-size="12" text-anchor="middle" fill="#B3362C">${y}</text><text x="${x}" y="${up ? 44 : 124}" ${F} font-size="10" text-anchor="middle">${label}</text>`
  }).join('')
  return `<svg viewBox="0 0 360 140" xmlns="http://www.w3.org/2000/svg"><text x="180" y="16" ${F} font-size="12" text-anchor="middle" fill="#4C6478">${title}</text><line x1="10" y1="80" x2="350" y2="80" stroke="#8AA0B2" stroke-width="3"/>${items}</svg>`
}

export const suB14 = {
  'su-b1': {
    id: 'su-b1', subject: 'sudia', chapter: C1, title: 'Bài 1. Cách mạng tư sản Anh và chiến tranh giành độc lập của 13 thuộc địa Anh ở Bắc Mỹ', minutes: 14,
    summary: ['Cách mạng tư sản Anh (1642–1688): nguyên nhân là mâu thuẫn giữa chế độ quân chủ chuyên chế (vua Sác-lơ I) với tư sản và quý tộc mới.', 'Diễn biến chính: 1642 nội chiến bùng nổ; 1649 vua Sác-lơ I bị xử tử, nước Anh thành cộng hòa; 1688 "Cách mạng vinh quang" xác lập chế độ quân chủ lập hiến.', 'Ý nghĩa: mở đường cho chủ nghĩa tư bản phát triển ở Anh. Hạn chế: chưa triệt để, quyền lợi nông dân chưa được giải quyết.', 'Chiến tranh giành độc lập của 13 thuộc địa Anh ở Bắc Mỹ (1775–1783): nguyên nhân là chính sách kìm hãm, đánh thuế của Anh; sự kiện chè Bô-xtơn (1773).', 'Diễn biến – kết quả: 1775 chiến tranh bùng nổ; 4/7/1776 Tuyên ngôn Độc lập; G. Oa-sinh-tơn chỉ huy; 1783 Anh công nhận độc lập, Hợp chủng quốc Mỹ ra đời; Hiến pháp 1787.'],
    keywords: [
      { term: 'Quân chủ chuyên chế', def: 'Vua nắm toàn bộ quyền lực, không bị hạn chế.' },
      { term: 'Quân chủ lập hiến', def: 'Vua "trị vì nhưng không cai trị"; quyền lực thuộc nghị viện theo hiến pháp.' },
      { term: 'Quý tộc mới', def: 'Quý tộc kinh doanh theo lối tư bản, liên minh với tư sản trong cách mạng Anh.' },
      { term: 'Sự kiện chè Bô-xtơn', def: '1773, người dân Bô-xtơn đổ các thùng chè của Anh xuống biển để phản đối thuế.' },
      { term: 'Tuyên ngôn Độc lập 1776', def: 'Do T. Giép-phéc-xơn soạn, công bố ngày 4/7/1776, khẳng định quyền con người và độc lập.' },
    ],
    cards: [
      { title: 'Trục thời gian cách mạng Anh', svg: timeline('Cách mạng tư sản Anh', [['1642', 'nội chiến'], ['1649', 'xử tử vua, cộng hòa'], ['1688', 'quân chủ lập hiến']]), body: 'Từ nội chiến đến "Cách mạng vinh quang": nước Anh chuyển từ quân chủ chuyên chế sang quân chủ lập hiến.', example: 'Liên minh tư sản – quý tộc mới lãnh đạo cách mạng.' },
      { title: 'Trục thời gian Bắc Mỹ', svg: timeline('Chiến tranh giành độc lập Bắc Mỹ', [['1773', 'chè Bô-xtơn'], ['1775', 'chiến tranh'], ['1776', 'Tuyên ngôn'], ['1783', 'Anh công nhận']]), body: 'Từ phản đối thuế đến chiến tranh và độc lập; nước Mỹ ra đời.', example: 'Ngày 4/7 là Quốc khánh Hoa Kì.' },
      { title: 'So sánh nhanh', emoji: '⚖️', body: 'Anh: cách mạng trong nước, kết quả quân chủ lập hiến. Bắc Mỹ: vừa giải phóng dân tộc vừa là cách mạng tư sản, kết quả nước cộng hòa.', example: 'Cả hai đều mở đường cho chủ nghĩa tư bản phát triển.' },
    ],
    traps: ['Nhầm năm 1649 (xử tử vua) với 1688 (quân chủ lập hiến).', 'Nghĩ cách mạng Anh lập nên nhà nước cộng hòa lâu dài.', 'Nhầm 1776 (Tuyên ngôn) với 1783 (được công nhận độc lập).'],
    mindmap: { root: 'Bài 1', branches: [{ label: 'CM Anh', children: ['1642 nội chiến', '1649 cộng hòa', '1688 quân chủ lập hiến'] }, { label: 'Bắc Mỹ', children: ['1773 chè Bô-xtơn', '1776 Tuyên ngôn', '1783 độc lập'] }, { label: 'Ý nghĩa', children: ['mở đường CNTB', 'chưa triệt để'] }] },
    quickCheck: ['s1q1', 's1q3', 's1q5'],
    questions: [
      { id: 's1q1', level: 1, type: 'single', tag: 'Cách mạng Anh', prompt: 'Cách mạng tư sản Anh diễn ra trong khoảng thời gian:', options: ['1642–1688', '1775–1783', '1789–1794', '1914–1918'], answer: 0, hint: 'Thế kỉ XVII.', explanation: 'Cách mạng tư sản Anh kéo dài từ 1642 đến 1688.' },
      { id: 's1q2', level: 1, type: 'single', tag: 'Cách mạng Anh', prompt: 'Kết quả cuối cùng của cách mạng tư sản Anh là xác lập chế độ:', options: ['quân chủ lập hiến', 'cộng hòa', 'quân chủ chuyên chế', 'phong kiến'], answer: 0, hint: '1688.', explanation: 'Năm 1688 nước Anh thành quân chủ lập hiến.' },
      { id: 's1q3', level: 1, type: 'truefalse', tag: 'Bắc Mỹ', prompt: 'Tuyên ngôn Độc lập của Mỹ được công bố ngày 4/7/1776.', answer: true, hint: 'Quốc khánh Mỹ.', explanation: 'Đúng, do T. Giép-phéc-xơn soạn thảo.' },
      { id: 's1q4', level: 1, type: 'fill', tag: 'Bắc Mỹ', prompt: 'Năm Anh công nhận nền độc lập của 13 thuộc địa ở Bắc Mỹ là năm:', answer: ['1783'], hint: 'Hiệp ước Véc-xai.', explanation: 'Năm 1783, Anh kí hiệp ước công nhận độc lập.' },
      { id: 's1q5', level: 2, type: 'order', tag: 'Bắc Mỹ', prompt: 'Sắp xếp các sự kiện theo trình tự thời gian:', items: ['sự kiện chè Bô-xtơn', 'chiến tranh giành độc lập bùng nổ', 'công bố Tuyên ngôn Độc lập', 'Anh công nhận độc lập của Mỹ'], hint: '1773 → 1775 → 1776 → 1783.', explanation: 'Trình tự diễn biến chiến tranh giành độc lập.' },
      { id: 's1q6', level: 2, type: 'match', tag: 'Mốc', prompt: 'Ghép năm với sự kiện:', pairs: [['1642', 'nội chiến ở Anh bùng nổ'], ['1649', 'vua Sác-lơ I bị xử tử'], ['1688', 'Cách mạng vinh quang'], ['1776', 'Tuyên ngôn Độc lập của Mỹ']], hint: 'Trục thời gian.', explanation: 'Các mốc quan trọng của bài.' },
      { id: 's1q7', level: 2, type: 'multi', tag: 'Nguyên nhân', prompt: 'Chọn các nguyên nhân dẫn đến chiến tranh giành độc lập ở Bắc Mỹ:', options: ['Anh kìm hãm kinh tế thuộc địa', 'Anh đánh thuế nặng', 'mâu thuẫn giữa thuộc địa với chính quốc', 'Pháp xâm lược Bắc Mỹ'], answer: [0, 1, 2], hint: 'Mâu thuẫn với Anh.', explanation: 'Nguyên nhân chủ yếu là mâu thuẫn với chính quốc Anh.' },
      { id: 's1q8', level: 2, type: 'single', tag: 'Bắc Mỹ', prompt: 'Người chỉ huy quân đội thuộc địa trong chiến tranh giành độc lập là:', options: ['G. Oa-sinh-tơn', 'Sác-lơ I', 'Rô-be-xpie', 'Na-pô-lê-ông'], answer: 0, hint: 'Tổng thống đầu tiên.', explanation: 'G. Oa-sinh-tơn, sau này là tổng thống đầu tiên của Mỹ.' },
      { id: 's1q9', level: 3, type: 'single', tag: 'Ý nghĩa', prompt: 'Hạn chế của cách mạng tư sản Anh là:', options: ['chưa triệt để, quyền lợi của nông dân chưa được đáp ứng', 'không lật đổ được vua', 'không có tư sản tham gia', 'làm Anh mất thuộc địa'], answer: 0, hint: 'Không triệt để.', explanation: 'Tư sản và quý tộc mới hưởng lợi, nông dân vẫn khổ cực.' },
      { id: 's1q10', level: 3, type: 'truefalse', tag: 'Bản chất', prompt: 'Chiến tranh giành độc lập của 13 thuộc địa vừa là cuộc giải phóng dân tộc vừa là cuộc cách mạng tư sản.', answer: true, hint: 'Hai tính chất.', explanation: 'Đúng: giành độc lập khỏi Anh và mở đường cho chủ nghĩa tư bản phát triển.' },
      { id: 's1q11', level: 4, type: 'single', tag: 'So sánh', prompt: 'Điểm khác nhau về kết quả giữa cách mạng Anh và chiến tranh giành độc lập Bắc Mỹ:', options: ['Anh thành quân chủ lập hiến; Mỹ thành nước cộng hòa', 'cả hai đều thành cộng hòa', 'cả hai đều quân chủ chuyên chế', 'Mỹ thành quân chủ lập hiến'], answer: 0, hint: 'Hình thức nhà nước.', explanation: 'Hình thức nhà nước sau cách mạng khác nhau.' },
      { id: 's1q12', level: 4, type: 'single', tag: 'Ý nghĩa', prompt: 'Câu "vua trị vì nhưng không cai trị" mô tả chế độ:', options: ['quân chủ lập hiến', 'quân chủ chuyên chế', 'cộng hòa', 'phong kiến phân quyền'], answer: 0, hint: 'Anh sau 1688.', explanation: 'Vua là biểu tượng, quyền lực thuộc nghị viện.' },
    ],
  },

  'su-b2': {
    id: 'su-b2', subject: 'sudia', chapter: C1, title: 'Bài 2. Cách mạng tư sản Pháp cuối thế kỉ XVIII', minutes: 14,
    summary: ['Nguyên nhân: chế độ quân chủ chuyên chế dưới thời vua Lu-i XVI khủng hoảng; xã hội chia ba đẳng cấp (tăng lữ, quý tộc có đặc quyền; Đẳng cấp thứ ba gồm tư sản, nông dân, bình dân thành thị bị áp bức); trào lưu Triết học Ánh sáng (Mông-te-xki-ơ, Vôn-te, Rút-xô) chuẩn bị tư tưởng.', 'Bùng nổ: ngày 14/7/1789 quần chúng tấn công ngục Ba-xti – biểu tượng của chế độ chuyên chế. Tháng 8/1789 thông qua Tuyên ngôn Nhân quyền và Dân quyền.', 'Phát triển: 1792 nền cộng hòa thứ nhất được thành lập; 1793–1794 chuyên chính dân chủ Gia-cô-banh (Rô-be-xpie) – đỉnh cao của cách mạng, giải quyết ruộng đất cho nông dân.', 'Kết thúc: 27/7/1794 phái tư sản phản cách mạng đảo chính, cách mạng kết thúc.', 'Ý nghĩa: lật đổ chế độ phong kiến, mở đường cho chủ nghĩa tư bản; được coi là cuộc cách mạng tư sản triệt để nhất, ảnh hưởng sâu rộng ra thế giới.'],
    keywords: [
      { term: 'Ba đẳng cấp', def: 'Tăng lữ, quý tộc (có đặc quyền) và Đẳng cấp thứ ba (tư sản, nông dân, bình dân).' },
      { term: 'Triết học Ánh sáng', def: 'Trào lưu tư tưởng phê phán phong kiến: Mông-te-xki-ơ, Vôn-te, Rút-xô.' },
      { term: 'Ngục Ba-xti', def: 'Nhà tù biểu tượng chế độ chuyên chế; bị tấn công ngày 14/7/1789 (Quốc khánh Pháp).' },
      { term: 'Gia-cô-banh', def: 'Phái cách mạng triệt để, đứng đầu là Rô-be-xpie (1793–1794).' },
      { term: 'Tuyên ngôn Nhân quyền và Dân quyền', def: 'Văn kiện 1789 khẳng định quyền tự do, bình đẳng của con người.' },
    ],
    cards: [
      { title: 'Trục thời gian', svg: timeline('Cách mạng tư sản Pháp', [['14/7/1789', 'Ba-xti'], ['8/1789', 'Tuyên ngôn'], ['1792', 'cộng hòa'], ['1793–94', 'Gia-cô-banh'], ['27/7/1794', 'kết thúc']]), body: 'Năm giai đoạn quan trọng; đỉnh cao là chuyên chính Gia-cô-banh.', example: 'Ngày 14/7 là Quốc khánh nước Pháp.' },
      { title: 'Vì sao "triệt để nhất"?', emoji: '🏆', body: 'Lật đổ hoàn toàn chế độ quân chủ, xóa bỏ đặc quyền phong kiến, giải quyết ruộng đất cho nông dân (thời Gia-cô-banh), quần chúng tham gia đông đảo.', example: 'So với cách mạng Anh vẫn giữ vua và chưa giải quyết ruộng đất.' },
      { title: 'Tư tưởng dẫn đường', emoji: '💡', body: 'Mông-te-xki-ơ: tam quyền phân lập. Vôn-te: phê phán nhà thờ. Rút-xô: chủ quyền thuộc về nhân dân.', example: 'Các tư tưởng này còn ảnh hưởng đến hiến pháp nhiều nước.' },
    ],
    traps: ['Nhầm 14/7/1789 với 4/7/1776 (Mỹ).', 'Nghĩ cách mạng kết thúc năm 1789.', 'Nhầm tên các nhà tư tưởng Ánh sáng.'],
    mindmap: { root: 'CM tư sản Pháp', branches: [{ label: 'Nguyên nhân', children: ['Lu-i XVI', 'ba đẳng cấp', 'Triết học Ánh sáng'] }, { label: 'Diễn biến', children: ['14/7/1789 Ba-xti', '1792 cộng hòa', '1793–1794 Gia-cô-banh', '27/7/1794 kết thúc'] }, { label: 'Ý nghĩa', children: ['lật đổ phong kiến', 'triệt để nhất'] }] },
    quickCheck: ['s2q1', 's2q2', 's2q5'],
    questions: [
      { id: 's2q1', level: 1, type: 'single', tag: 'Diễn biến', prompt: 'Cách mạng tư sản Pháp bùng nổ với sự kiện:', options: ['quần chúng tấn công ngục Ba-xti (14/7/1789)', 'sự kiện chè Bô-xtơn', 'vua Sác-lơ I bị xử tử', 'kí hiệp ước Véc-xai'], answer: 0, hint: 'Quốc khánh Pháp.', explanation: 'Ngày 14/7/1789 mở đầu cách mạng.' },
      { id: 's2q2', level: 1, type: 'single', tag: 'Nguyên nhân', prompt: 'Vua Pháp khi cách mạng bùng nổ là:', options: ['Lu-i XVI', 'Sác-lơ I', 'Na-pô-lê-ông', 'Lu-i XIV'], answer: 0, hint: 'Lu-i …', explanation: 'Lu-i XVI, sau bị xử tử năm 1793.' },
      { id: 's2q3', level: 1, type: 'truefalse', tag: 'Đỉnh cao', prompt: 'Chuyên chính Gia-cô-banh là đỉnh cao của cách mạng tư sản Pháp.', answer: true, hint: '1793–1794.', explanation: 'Đúng, thời kì giải quyết triệt để nhiệm vụ cách mạng.' },
      { id: 's2q4', level: 1, type: 'fill', tag: 'Diễn biến', prompt: 'Nền cộng hòa thứ nhất ở Pháp được thành lập năm:', answer: ['1792'], hint: 'Sau khi lật đổ vua.', explanation: 'Năm 1792, chế độ quân chủ bị xóa bỏ, nền cộng hòa thứ nhất ở Pháp được thành lập.' },
      { id: 's2q5', level: 2, type: 'match', tag: 'Nhân vật', prompt: 'Ghép nhân vật với vai trò:', pairs: [['Mông-te-xki-ơ', 'tư tưởng tam quyền phân lập'], ['Rút-xô', 'chủ quyền thuộc về nhân dân'], ['Rô-be-xpie', 'lãnh đạo phái Gia-cô-banh'], ['Lu-i XVI', 'vua chuyên chế bị lật đổ']], hint: 'Tư tưởng – cách mạng – vua.', explanation: 'Các nhân vật gắn với cách mạng Pháp.' },
      { id: 's2q6', level: 2, type: 'order', tag: 'Diễn biến', prompt: 'Sắp xếp các sự kiện theo thời gian:', items: ['tấn công ngục Ba-xti', 'thông qua Tuyên ngôn Nhân quyền và Dân quyền', 'thành lập nền cộng hòa thứ nhất', 'chuyên chính Gia-cô-banh', 'đảo chính 27/7/1794'], hint: '1789 → 1794.', explanation: 'Tiến trình cách mạng Pháp.' },
      { id: 's2q7', level: 2, type: 'multi', tag: 'Xã hội', prompt: 'Đẳng cấp thứ ba gồm:', options: ['tư sản', 'nông dân', 'bình dân thành thị', 'tăng lữ'], answer: [0, 1, 2], hint: 'Không có đặc quyền.', explanation: 'Tăng lữ là đẳng cấp thứ nhất, có đặc quyền.' },
      { id: 's2q8', level: 2, type: 'single', tag: 'Ý nghĩa', prompt: 'Cách mạng tư sản Pháp được đánh giá là:', options: ['cuộc cách mạng tư sản triệt để nhất', 'không có ý nghĩa', 'cuộc cải cách của vua', 'chiến tranh xâm lược'], answer: 0, hint: 'Triệt để.', explanation: 'Lật đổ hoàn toàn phong kiến, giải quyết ruộng đất.' },
      { id: 's2q9', level: 3, type: 'single', tag: 'Nguyên nhân', prompt: 'Trào lưu Triết học Ánh sáng có vai trò:', options: ['chuẩn bị về tư tưởng cho cách mạng', 'cung cấp vũ khí', 'trực tiếp lãnh đạo', 'ủng hộ nhà vua'], answer: 0, hint: 'Tư tưởng.', explanation: 'Phê phán phong kiến, đề cao tự do, bình đẳng.' },
      { id: 's2q10', level: 3, type: 'truefalse', tag: 'So sánh', prompt: 'Cách mạng Pháp triệt để hơn cách mạng Anh vì đã lật đổ chế độ quân chủ và giải quyết ruộng đất cho nông dân.', answer: true, hint: 'So sánh bài 1.', explanation: 'Đúng. Cách mạng Anh vẫn giữ vua và chưa giải quyết ruộng đất, còn cách mạng Pháp làm được cả hai.' },
      { id: 's2q11', level: 4, type: 'single', tag: 'Vận dụng', prompt: 'Câu mở đầu Tuyên ngôn Độc lập 1945 của Việt Nam có trích dẫn tinh thần của:', options: ['Tuyên ngôn Độc lập Mỹ và Tuyên ngôn Nhân quyền và Dân quyền Pháp', 'Hiến chương Liên hợp quốc', 'Hịch tướng sĩ', 'Bình Ngô đại cáo'], answer: 0, hint: 'Quyền con người.', explanation: 'Chủ tịch Hồ Chí Minh dẫn hai bản tuyên ngôn này.' },
      { id: 's2q12', level: 4, type: 'single', tag: 'Ý nghĩa', prompt: 'Lực lượng giữ vai trò quyết định thắng lợi trong cách mạng Pháp là:', options: ['quần chúng nhân dân', 'nhà vua', 'giáo hội', 'quân đội nước ngoài'], answer: 0, hint: 'Ba-xti.', explanation: 'Quần chúng nhân dân là động lực chủ yếu.' },
    ],
  },

  'su-b3': {
    id: 'su-b3', subject: 'sudia', chapter: C1, title: 'Bài 3. Cách mạng công nghiệp', minutes: 12,
    summary: ['Cách mạng công nghiệp bắt đầu ở Anh vào nửa sau thế kỉ XVIII, sau đó lan sang Pháp, Đức, Mỹ (thế kỉ XIX).', 'Thành tựu tiêu biểu: máy kéo sợi Gien-ni (Giêm Ha-gri-vơ, 1764); máy hơi nước (Giêm Oát hoàn thiện, 1784); máy dệt chạy bằng sức nước (Ét-mơn Các-rai, 1785); đầu máy xe lửa (Xti-phen-xơn, 1814).', 'Bản chất: chuyển từ lao động thủ công sang lao động bằng máy móc, từ công trường thủ công sang nền sản xuất công xưởng.', 'Hệ quả kinh tế: năng suất lao động tăng, nhiều trung tâm công nghiệp, đô thị ra đời; giao thông vận tải phát triển.', 'Hệ quả xã hội: hình thành hai giai cấp cơ bản là tư sản và vô sản; mâu thuẫn giữa hai giai cấp dẫn đến đấu tranh của công nhân.'],
    keywords: [
      { term: 'Cách mạng công nghiệp', def: 'Chuyển từ thủ công sang máy móc; bắt đầu ở Anh.' },
      { term: 'Máy hơi nước', def: 'Giêm Oát hoàn thiện năm 1784, nguồn động lực mới cho nhà máy, tàu thủy, xe lửa.' },
      { term: 'Máy kéo sợi Gien-ni', def: 'Giêm Ha-gri-vơ chế tạo (1764), tăng năng suất kéo sợi nhiều lần.' },
      { term: 'Giai cấp vô sản', def: 'Công nhân làm thuê trong nhà máy, không có tư liệu sản xuất.' },
      { term: 'Đô thị hóa', def: 'Dân cư tập trung ở các thành phố công nghiệp.' },
    ],
    cards: [
      { title: 'Trục thời gian phát minh', svg: timeline('Các phát minh tiêu biểu', [['1764', 'máy kéo sợi'], ['1784', 'máy hơi nước'], ['1785', 'máy dệt'], ['1814', 'đầu máy xe lửa']]), body: 'Bắt đầu từ ngành dệt, máy hơi nước là "trái tim" của cách mạng công nghiệp.', example: 'Có máy hơi nước, nhà máy không phải xây cạnh sông nữa.' },
      { title: 'Vì sao bắt đầu ở Anh?', emoji: '🇬🇧', body: 'Anh có điều kiện: tư sản nắm quyền sau cách mạng, vốn tích lũy từ thuộc địa, nhân công dồi dào, nhu cầu thị trường lớn.', example: 'Cách mạng tư sản Anh (bài 1) tạo tiền đề chính trị.' },
      { title: 'Hệ quả hai mặt', emoji: '⚖️', body: 'Tích cực: năng suất cao, giao thông phát triển. Tiêu cực: công nhân bị bóc lột, điều kiện sống khổ cực, ô nhiễm.', example: 'Mâu thuẫn tư sản – vô sản là nguồn gốc phong trào công nhân (bài 11).' },
    ],
    traps: ['Nhầm người phát minh: máy hơi nước là Giêm Oát.', 'Nghĩ cách mạng công nghiệp bắt đầu ở Pháp.', 'Chỉ nêu hệ quả kinh tế mà quên hệ quả xã hội.'],
    mindmap: { root: 'CM công nghiệp', branches: [{ label: 'Nơi bắt đầu', children: ['Anh, nửa sau TK XVIII'] }, { label: 'Phát minh', children: ['Gien-ni 1764', 'máy hơi nước 1784', 'xe lửa 1814'] }, { label: 'Hệ quả', children: ['năng suất, đô thị', 'tư sản – vô sản'] }] },
    quickCheck: ['s3q1', 's3q2', 's3q5'],
    questions: [
      { id: 's3q1', level: 1, type: 'single', tag: 'Khởi đầu', prompt: 'Cách mạng công nghiệp bắt đầu ở nước:', options: ['Anh', 'Pháp', 'Đức', 'Mỹ'], answer: 0, hint: 'Nửa sau TK XVIII.', explanation: 'Anh là nơi khởi đầu cách mạng công nghiệp.' },
      { id: 's3q2', level: 1, type: 'single', tag: 'Phát minh', prompt: 'Người hoàn thiện máy hơi nước năm 1784 là:', options: ['Giêm Oát', 'Xti-phen-xơn', 'Giêm Ha-gri-vơ', 'Ét-mơn Các-rai'], answer: 0, hint: 'Đơn vị công suất mang tên ông.', explanation: 'Giêm Oát (James Watt).' },
      { id: 's3q3', level: 1, type: 'truefalse', tag: 'Hệ quả', prompt: 'Cách mạng công nghiệp làm hình thành hai giai cấp tư sản và vô sản.', answer: true, hint: 'Hệ quả xã hội.', explanation: 'Đúng. Tư sản sở hữu nhà máy; vô sản là công nhân làm thuê, hình thành từ cách mạng công nghiệp.' },
      { id: 's3q4', level: 1, type: 'fill', tag: 'Phát minh', prompt: 'Máy kéo sợi Gien-ni ra đời năm:', answer: ['1764'], hint: 'Mở đầu.', explanation: 'Năm 1764, Giêm Ha-gri-vơ chế tạo.' },
      { id: 's3q5', level: 2, type: 'match', tag: 'Phát minh', prompt: 'Ghép phát minh với người sáng chế:', pairs: [['máy kéo sợi Gien-ni', 'Giêm Ha-gri-vơ'], ['máy hơi nước', 'Giêm Oát'], ['máy dệt chạy bằng sức nước', 'Ét-mơn Các-rai'], ['đầu máy xe lửa', 'Xti-phen-xơn']], hint: 'Trục thời gian.', explanation: 'Các phát minh tiêu biểu.' },
      { id: 's3q6', level: 2, type: 'order', tag: 'Phát minh', prompt: 'Sắp xếp các phát minh theo thời gian:', items: ['máy kéo sợi Gien-ni', 'máy hơi nước', 'máy dệt', 'đầu máy xe lửa'], hint: '1764 → 1814.', explanation: 'Trình tự phát minh.' },
      { id: 's3q7', level: 2, type: 'multi', tag: 'Hệ quả', prompt: 'Chọn các hệ quả của cách mạng công nghiệp:', options: ['năng suất lao động tăng', 'nhiều đô thị mới ra đời', 'giao thông vận tải phát triển', 'chế độ phong kiến được củng cố'], answer: [0, 1, 2], hint: 'Tư bản phát triển.', explanation: 'Cách mạng công nghiệp thúc đẩy chủ nghĩa tư bản, không củng cố phong kiến.' },
      { id: 's3q8', level: 2, type: 'single', tag: 'Bản chất', prompt: 'Bản chất của cách mạng công nghiệp là:', options: ['chuyển từ lao động thủ công sang lao động bằng máy móc', 'lật đổ nhà vua', 'mở rộng thuộc địa', 'phát triển nông nghiệp'], answer: 0, hint: 'Máy móc.', explanation: 'Cơ khí hóa sản xuất.' },
      { id: 's3q9', level: 3, type: 'single', tag: 'Khởi đầu', prompt: 'Một tiền đề giúp Anh tiến hành cách mạng công nghiệp sớm:', options: ['giai cấp tư sản đã nắm chính quyền sau cách mạng', 'Anh không có thuộc địa', 'thiếu nhân công', 'không có vốn'], answer: 0, hint: 'Bài 1.', explanation: 'Chính trị ổn định, tư sản nắm quyền, có vốn từ thuộc địa.' },
      { id: 's3q10', level: 3, type: 'truefalse', tag: 'Lan tỏa', prompt: 'Trong thế kỉ XIX, cách mạng công nghiệp lan sang Pháp, Đức, Mỹ.', answer: true, hint: 'Lan rộng.', explanation: 'Đúng. Sang thế kỉ XIX, cách mạng công nghiệp lan rộng sang Pháp, Đức, Mỹ và nhiều nước khác.' },
      { id: 's3q11', level: 4, type: 'single', tag: 'Ý nghĩa', prompt: 'Vì sao máy hơi nước được coi là phát minh quan trọng nhất?', options: ['cung cấp nguồn động lực mới cho nhà máy và giao thông, không phụ thuộc sức nước, sức gió', 'vì rẻ nhất', 'vì nhỏ gọn nhất', 'vì ra đời đầu tiên'], answer: 0, hint: 'Động lực.', explanation: 'Thay đổi toàn bộ sản xuất và vận tải.' },
      { id: 's3q12', level: 4, type: 'single', tag: 'Hệ quả', prompt: 'Mâu thuẫn chủ yếu trong xã hội tư bản sau cách mạng công nghiệp:', options: ['giữa tư sản và vô sản', 'giữa nông dân và địa chủ', 'giữa vua và quý tộc', 'giữa các nước'], answer: 0, hint: 'Hai giai cấp mới.', explanation: 'Dẫn đến phong trào đấu tranh của công nhân.' },
    ],
  },

  'su-b4': {
    id: 'su-b4', subject: 'sudia', chapter: C2, title: 'Bài 4. Đông Nam Á từ nửa sau thế kỉ XVI đến giữa thế kỉ XIX', minutes: 13,
    summary: ['Từ thế kỉ XVI, thực dân phương Tây (Bồ Đào Nha, Tây Ban Nha, Hà Lan, Anh, Pháp) tìm cách xâm nhập Đông Nam Á, ban đầu qua buôn bán, truyền giáo rồi xâm lược.', 'Quá trình xâm lược: Tây Ban Nha chiếm Phi-líp-pin; Hà Lan chiếm In-đô-nê-xi-a; Anh chiếm Mã Lai, Miến Điện (Myanmar), Xin-ga-po; Pháp sau này xâm lược ba nước Đông Dương. Xiêm (Thái Lan) giữ được độc lập.', 'Chính sách cai trị: bóc lột kinh tế (thuế, độc quyền buôn bán, đồn điền), chia để trị, đồng hóa văn hóa, truyền bá tôn giáo.', 'Tình hình các nước: chế độ phong kiến khủng hoảng, suy yếu; kinh tế hàng hóa có phát triển; văn hóa có giao lưu với phương Tây.', 'Đấu tranh: nhân dân Đông Nam Á liên tục nổi dậy chống thực dân (In-đô-nê-xi-a, Phi-líp-pin…), tuy thất bại nhưng thể hiện tinh thần yêu nước.'],
    keywords: [
      { term: 'Thực dân phương Tây', def: 'Bồ Đào Nha, Tây Ban Nha, Hà Lan, Anh, Pháp.' },
      { term: 'Xâm nhập', def: 'Qua thương mại, truyền giáo rồi tiến tới xâm lược, cai trị.' },
      { term: 'Chia để trị', def: 'Chính sách gây chia rẽ dân tộc, tôn giáo để dễ cai trị.' },
      { term: 'Xiêm', def: 'Nước duy nhất ở Đông Nam Á giữ được độc lập (Thái Lan).' },
    ],
    cards: [
      { title: 'Ai chiếm nước nào?', emoji: '🗺️', body: 'Tây Ban Nha → Phi-líp-pin. Hà Lan → In-đô-nê-xi-a. Anh → Mã Lai, Miến Điện, Xin-ga-po. Pháp → Việt Nam, Lào, Cam-pu-chia (nửa sau XIX).', example: 'Mẹo: "Tây – Phi, Hà – Indo, Anh – Mã Miến, Pháp – Đông Dương".' },
      { title: 'Từ buôn bán đến xâm lược', emoji: '⛵', body: 'Ban đầu lập thương điếm, truyền đạo; khi phong kiến bản xứ suy yếu thì dùng vũ lực chiếm đất.', example: 'Công ty Đông Ấn Hà Lan đóng vai trò lớn ở In-đô-nê-xi-a.' },
      { title: 'Chính sách cai trị', emoji: '⛓️', body: 'Vơ vét tài nguyên, độc quyền buôn bán, lập đồn điền; chia để trị; truyền bá tôn giáo, văn hóa phương Tây.', example: 'Ở Phi-líp-pin, Tây Ban Nha truyền bá Công giáo rộng rãi.' },
    ],
    traps: ['Nhầm nước thực dân chiếm từng nước.', 'Quên Xiêm giữ được độc lập.', 'Nghĩ thực dân vào Đông Nam Á ngay bằng chiến tranh.'],
    mindmap: { root: 'Đông Nam Á XVI–XIX', branches: [{ label: 'Xâm nhập', children: ['buôn bán', 'truyền giáo', 'xâm lược'] }, { label: 'Thực dân', children: ['TBN – Phi-líp-pin', 'Hà Lan – Indonesia', 'Anh – Mã Lai, Miến Điện'] }, { label: 'Cai trị', children: ['bóc lột', 'chia để trị'] }, { label: 'Đấu tranh', children: ['nhiều cuộc nổi dậy'] }] },
    quickCheck: ['s4q1', 's4q2', 's4q5'],
    questions: [
      { id: 's4q1', level: 1, type: 'single', tag: 'Thực dân', prompt: 'Nước thực dân chiếm Phi-líp-pin là:', options: ['Tây Ban Nha', 'Hà Lan', 'Anh', 'Pháp'], answer: 0, hint: 'Tây – Phi.', explanation: 'Tây Ban Nha cai trị Phi-líp-pin.' },
      { id: 's4q2', level: 1, type: 'single', tag: 'Độc lập', prompt: 'Nước Đông Nam Á giữ được độc lập trong thời kì này là:', options: ['Xiêm (Thái Lan)', 'In-đô-nê-xi-a', 'Miến Điện', 'Phi-líp-pin'], answer: 0, hint: 'Thái Lan.', explanation: 'Xiêm giữ được độc lập.' },
      { id: 's4q3', level: 1, type: 'truefalse', tag: 'Thực dân', prompt: 'Hà Lan xâm chiếm In-đô-nê-xi-a.', answer: true, hint: 'Hà – Indo.', explanation: 'Đúng. Hà Lan, thông qua Công ty Đông Ấn, từng bước xâm chiếm In-đô-nê-xi-a.' },
      { id: 's4q4', level: 1, type: 'fill', tag: 'Thực dân', prompt: 'Thực dân chiếm Mã Lai, Miến Điện, Xin-ga-po là thực dân … (tên nước)', answer: ['Anh', 'anh'], hint: 'Anh – Mã Miến.', explanation: 'Thực dân Anh chiếm Mã Lai, Miến Điện và Xin-ga-po.' },
      { id: 's4q5', level: 2, type: 'match', tag: 'Thực dân', prompt: 'Ghép nước thực dân với thuộc địa:', pairs: [['Tây Ban Nha', 'Phi-líp-pin'], ['Hà Lan', 'In-đô-nê-xi-a'], ['Anh', 'Miến Điện'], ['Pháp', 'ba nước Đông Dương']], hint: 'Mẹo nhớ.', explanation: 'Phân chia thuộc địa ở Đông Nam Á.' },
      { id: 's4q6', level: 2, type: 'order', tag: 'Xâm nhập', prompt: 'Sắp xếp các bước thực dân xâm nhập Đông Nam Á:', items: ['buôn bán, lập thương điếm', 'truyền giáo', 'can thiệp chính trị khi phong kiến suy yếu', 'xâm lược, đặt ách cai trị'], hint: 'Từ mềm đến cứng.', explanation: 'Quá trình xâm nhập từng bước.' },
      { id: 's4q7', level: 2, type: 'multi', tag: 'Cai trị', prompt: 'Chọn các chính sách cai trị của thực dân:', options: ['vơ vét tài nguyên', 'chia để trị', 'độc quyền buôn bán', 'trao trả độc lập ngay'], answer: [0, 1, 2], hint: 'Bóc lột.', explanation: 'Thực dân không trao trả độc lập.' },
      { id: 's4q8', level: 2, type: 'single', tag: 'Tình hình', prompt: 'Tình hình chế độ phong kiến ở các nước Đông Nam Á thời kì này:', options: ['khủng hoảng, suy yếu', 'cực thịnh', 'mới hình thành', 'không tồn tại'], answer: 0, hint: 'Tạo cơ hội cho thực dân.', explanation: 'Phong kiến suy yếu tạo điều kiện cho thực dân xâm lược.' },
      { id: 's4q9', level: 3, type: 'single', tag: 'Cai trị', prompt: 'Chính sách "chia để trị" nhằm:', options: ['gây chia rẽ giữa các dân tộc, tôn giáo để dễ cai trị', 'chia ruộng cho nông dân', 'chia đều lợi nhuận', 'phát triển giáo dục'], answer: 0, hint: 'Chia rẽ.', explanation: 'Làm suy yếu sức mạnh đoàn kết chống thực dân.' },
      { id: 's4q10', level: 3, type: 'truefalse', tag: 'Đấu tranh', prompt: 'Nhân dân Đông Nam Á không có cuộc đấu tranh nào chống thực dân trong thời kì này.', answer: false, hint: 'Nổi dậy.', explanation: 'Sai, có nhiều cuộc khởi nghĩa ở In-đô-nê-xi-a, Phi-líp-pin…' },
      { id: 's4q11', level: 4, type: 'single', tag: 'Liên hệ', prompt: 'Thực dân phương Tây xâm nhập Đông Nam Á chủ yếu vì:', options: ['tài nguyên phong phú, vị trí giao thương quan trọng, thị trường lớn', 'muốn giúp phát triển', 'du lịch', 'tránh chiến tranh ở châu Âu'], answer: 0, hint: 'Lợi ích kinh tế.', explanation: 'Mục đích bóc lột tài nguyên và thị trường.' },
      { id: 's4q12', level: 4, type: 'single', tag: 'Liên hệ', prompt: 'Việt Nam bị thực dân nào xâm lược vào nửa sau thế kỉ XIX?', options: ['Pháp', 'Hà Lan', 'Tây Ban Nha', 'Bồ Đào Nha'], answer: 0, hint: '1858.', explanation: 'Thực dân Pháp nổ súng xâm lược năm 1858 (học ở bài 17).' },
    ],
  },
}
