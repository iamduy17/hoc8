// Lịch sử và Địa lí 8 KNTT – Phần Địa lí, bài 4–8
const CH = 'Địa lí – Chương 2. Khí hậu và thuỷ văn Việt Nam'
const F = 'font-family="Quicksand, sans-serif" font-weight="700" font-size="11" fill="#1C2B3A"'

// Biểu đồ khí hậu minh họa (số liệu làm tròn, gần với Hà Nội)
const T = [16, 17, 20, 24, 28, 29, 29, 29, 28, 25, 22, 18]
const R = [19, 26, 44, 90, 188, 240, 288, 318, 265, 130, 43, 23]
function svgKhiHau() {
  const x0 = 40, w = 24, h = 120, y0 = 150
  const bars = R.map((r, i) => `<rect x="${x0 + i * w + 3}" y="${y0 - (r / 350) * h}" width="${w - 6}" height="${(r / 350) * h}" fill="#7DBBEB"/>`).join('')
  const pts = T.map((t, i) => `${x0 + i * w + w / 2},${y0 - ((t - 0) / 35) * h}`).join(' ')
  const labels = T.map((_, i) => `<text x="${x0 + i * w + w / 2}" y="${y0 + 14}" ${F} text-anchor="middle" font-size="9">${i + 1}</text>`).join('')
  const ticks = [0, 100, 200, 300].map((v) => `<text x="${x0 - 4}" y="${y0 - (v / 350) * h + 4}" ${F} text-anchor="end" font-size="9" fill="#1F5FBF">${v}</text><line x1="${x0}" y1="${y0 - (v / 350) * h}" x2="${x0 + 12 * w}" y2="${y0 - (v / 350) * h}" stroke="#E3ECF3"/>`).join('') + [0, 10, 20, 30].map((v) => `<text x="${x0 + 12 * w + 4}" y="${y0 - (v / 35) * h + 4}" ${F} font-size="9" fill="#E25555">${v}</text>`).join('')
  return `<svg viewBox="0 0 360 180" xmlns="http://www.w3.org/2000/svg"><line x1="${x0}" y1="${y0}" x2="${x0 + 12 * w}" y2="${y0}" stroke="#4C6478"/><line x1="${x0}" y1="${y0}" x2="${x0}" y2="25" stroke="#1F5FBF"/><line x1="${x0 + 12 * w}" y1="${y0}" x2="${x0 + 12 * w}" y2="25" stroke="#E25555"/>${ticks}${bars}<polyline points="${pts}" fill="none" stroke="#E25555" stroke-width="2.5"/>${labels}<text x="2" y="20" ${F} fill="#1F5FBF">mm</text><text x="${x0 + 12 * w + 4}" y="20" ${F} fill="#E25555">°C</text><text x="${x0 + 2}" y="176" ${F} fill="#4C6478" font-size="10">Cột: lượng mưa – Đường: nhiệt độ (minh họa Hà Nội)</text></svg>`
}

export const diaB48 = {
  'dia-b4': {
    id: 'dia-b4', subject: 'sudia', chapter: CH, title: 'Bài 4. Khí hậu Việt Nam', minutes: 13,
    summary: ['Khí hậu nhiệt đới ẩm gió mùa: nhiệt độ trung bình năm phần lớn trên 20 °C; nhiều nắng; lượng mưa lớn (khoảng 1 500–2 000 mm/năm); độ ẩm không khí cao (trên 80%).', 'Gió mùa mùa đông (khoảng tháng 11 – tháng 4): gió mùa Đông Bắc lạnh, khô (đầu mùa) và lạnh ẩm, mưa phùn (cuối mùa) ở miền Bắc; miền Nam chủ yếu gió Tín phong, mùa khô.', 'Gió mùa mùa hạ (khoảng tháng 5 – tháng 10): hướng tây nam và đông nam, nóng ẩm, mưa nhiều trên cả nước; gió phơn Tây Nam (gió Lào) khô nóng ở Bắc Trung Bộ và Tây Bắc.', 'Phân hóa Bắc – Nam (ranh giới dãy Bạch Mã): miền khí hậu phía Bắc có mùa đông lạnh; miền khí hậu phía Nam nóng quanh năm, có mùa mưa và mùa khô rõ rệt.', 'Phân hóa Đông – Tây (do các dãy núi chắn gió) và theo độ cao (càng lên cao càng lạnh, ví dụ Sa Pa, Đà Lạt).'],
    keywords: [
      { term: 'Nhiệt đới ẩm gió mùa', def: 'Nóng, ẩm, mưa nhiều, khí hậu thay đổi theo mùa gió.' },
      { term: 'Gió mùa Đông Bắc', def: 'Thổi vào mùa đông, gây lạnh cho miền Bắc.' },
      { term: 'Gió Tây khô nóng', def: 'Gió phơn (gió Lào), mùa hạ ở Bắc Trung Bộ, Tây Bắc.' },
      { term: 'Dãy Bạch Mã', def: 'Ranh giới khí hậu hai miền Bắc – Nam.' },
      { term: 'Phân hóa theo độ cao', def: 'Lên cao 100 m nhiệt độ giảm khoảng 0,6 °C.' },
    ],
    cards: [
      { title: 'Hai mùa gió', emoji: '🌬️', body: 'Mùa đông: gió mùa Đông Bắc – miền Bắc lạnh. Mùa hạ: gió tây nam, đông nam – nóng ẩm, mưa nhiều.', example: 'Mưa phùn cuối đông ở đồng bằng Bắc Bộ do gió mùa Đông Bắc đi qua biển.' },
      { title: 'Hai miền khí hậu', emoji: '🗺️', body: 'Phía Bắc dãy Bạch Mã: có mùa đông lạnh, nhiệt độ thay đổi nhiều trong năm. Phía Nam: cận xích đạo, nóng quanh năm, mùa mưa – mùa khô.', example: 'Hà Nội có tháng 1 khoảng 16 °C; TP Hồ Chí Minh quanh năm khoảng 26–29 °C.' },
      { title: 'Lên cao thì lạnh', emoji: '⛰️', body: 'Sa Pa, Đà Lạt mát mẻ quanh năm vì ở độ cao lớn.', example: 'Đà Lạt cao khoảng 1 500 m nên mát hơn đồng bằng khoảng 9 °C.' },
    ],
    traps: ['Nghĩ cả nước đều có mùa đông lạnh.', 'Nhầm ranh giới khí hậu là đèo Hải Vân với dãy Bạch Mã (SGK dùng dãy Bạch Mã).', 'Nhầm gió Lào là gió mùa Đông Bắc.'],
    mindmap: { root: 'Khí hậu', branches: [{ label: 'Tính chất', children: ['nhiệt đới', 'ẩm', 'gió mùa'] }, { label: 'Gió', children: ['mùa đông: Đông Bắc', 'mùa hạ: tây nam, đông nam', 'gió Tây khô nóng'] }, { label: 'Phân hóa', children: ['Bắc – Nam (Bạch Mã)', 'Đông – Tây', 'độ cao'] }] },
    quickCheck: ['d4q1', 'd4q2', 'd4q5'],
    questions: [
      { id: 'd4q1', level: 1, type: 'single', tag: 'Tính chất', prompt: 'Khí hậu Việt Nam là khí hậu:', options: ['nhiệt đới ẩm gió mùa', 'ôn đới hải dương', 'hoang mạc', 'cận cực'], answer: 0, hint: 'Nóng, ẩm, gió mùa.', explanation: 'Do vị trí nội chí tuyến, giáp biển, chịu ảnh hưởng gió mùa.' },
      { id: 'd4q2', level: 1, type: 'single', tag: 'Phân hóa', prompt: 'Ranh giới giữa miền khí hậu phía Bắc và phía Nam là:', options: ['dãy Bạch Mã', 'dãy Hoàng Liên Sơn', 'sông Hồng', 'sông Gianh'], answer: 0, hint: 'Gần Huế – Đà Nẵng.', explanation: 'Dãy Bạch Mã (khoảng vĩ tuyến 16°B).' },
      { id: 'd4q3', level: 1, type: 'truefalse', tag: 'Gió', prompt: 'Gió mùa Đông Bắc gây ra mùa đông lạnh ở miền Bắc.', answer: true, hint: 'Mùa đông.', explanation: 'Đúng, gió lạnh từ phương bắc tràn xuống.' },
      { id: 'd4q4', level: 1, type: 'fill', tag: 'Tính chất', prompt: 'Độ ẩm không khí nước ta thường trên bao nhiêu %?', answer: ['80'], hint: 'Rất ẩm.', explanation: 'Độ ẩm trung bình trên 80%.' },
      { id: 'd4q5', level: 2, type: 'match', tag: 'Gió', prompt: 'Ghép loại gió với đặc điểm:', pairs: [['gió mùa Đông Bắc', 'lạnh, mùa đông miền Bắc'], ['gió mùa mùa hạ', 'nóng ẩm, mưa nhiều'], ['gió Tây khô nóng', 'khô nóng ở Bắc Trung Bộ']], hint: 'Mùa và tính chất.', explanation: 'Các loại gió chính.' },
      { id: 'd4q6', level: 2, type: 'multi', tag: 'Phân hóa', prompt: 'Chọn các đặc điểm của miền khí hậu phía Nam:', options: ['nóng quanh năm', 'có mùa mưa và mùa khô rõ rệt', 'không có mùa đông lạnh', 'có mưa phùn mùa đông'], answer: [0, 1, 2], hint: 'Mưa phùn ở miền Bắc.', explanation: 'Mưa phùn là đặc điểm miền Bắc cuối đông.' },
      { id: 'd4q7', level: 2, type: 'single', tag: 'Phân hóa', prompt: 'Đà Lạt, Sa Pa mát mẻ quanh năm chủ yếu do:', options: ['ở độ cao lớn', 'gần biển', 'ở phía Nam', 'nhiều rừng'], answer: 0, hint: 'Độ cao.', explanation: 'Khí hậu phân hóa theo độ cao.' },
      { id: 'd4q8', level: 3, type: 'single', tag: 'Gió', prompt: 'Mưa phùn cuối mùa đông ở đồng bằng Bắc Bộ là do:', options: ['gió mùa Đông Bắc đi qua biển, trở nên ẩm', 'gió Tây khô nóng', 'bão', 'gió mùa hạ'], answer: 0, hint: 'Lạnh ẩm.', explanation: 'Gió lệch đông đi qua biển mang hơi ẩm.' },
      { id: 'd4q9', level: 3, type: 'truefalse', tag: 'Phân hóa', prompt: 'TP Hồ Chí Minh có mùa đông lạnh như Hà Nội.', answer: false, hint: 'Miền Nam.', explanation: 'Sai, phía Nam nóng quanh năm.' },
      { id: 'd4q10', level: 3, type: 'fill', tag: 'Độ cao', prompt: 'Lên cao khoảng 1 000 m, nhiệt độ giảm khoảng bao nhiêu °C (biết cứ 100 m giảm 0,6 °C)?', answer: ['6'], hint: '10 × 0,6.', explanation: 'Giảm khoảng 6 °C.' },
      { id: 'd4q11', level: 4, type: 'single', tag: 'Ảnh hưởng', prompt: 'Vì sao miền Bắc trồng được cây vụ đông (su hào, bắp cải)?', options: ['có mùa đông lạnh phù hợp cây cận nhiệt, ôn đới', 'vì nóng quanh năm', 'vì không có mưa', 'vì đất phèn'], answer: 0, hint: 'Mùa đông lạnh.', explanation: 'Mùa đông lạnh là lợi thế đa dạng cây trồng.' },
      { id: 'd4q12', level: 4, type: 'single', tag: 'Ảnh hưởng', prompt: 'Gió Tây khô nóng ảnh hưởng mạnh nhất đến vùng:', options: ['Bắc Trung Bộ', 'đồng bằng sông Cửu Long', 'Đông Nam Bộ', 'đồng bằng sông Hồng'], answer: 0, hint: 'Gió Lào.', explanation: 'Gió vượt dãy Trường Sơn trở nên khô nóng.' },
    ],
  },

  'dia-b5': {
    id: 'dia-b5', subject: 'sudia', chapter: CH, title: 'Bài 5. Thực hành: Vẽ và phân tích biểu đồ khí hậu', minutes: 11,
    summary: ['Biểu đồ khí hậu kết hợp: lượng mưa vẽ bằng cột (trục bên trái, mm), nhiệt độ vẽ bằng đường (trục bên phải, °C), trục hoành là 12 tháng.', 'Các bước vẽ: kẻ hệ trục, chia thang đo hợp lí; vẽ cột mưa; chấm điểm nhiệt độ giữa mỗi tháng và nối thành đường; ghi tên biểu đồ, chú giải.', 'Phân tích nhiệt độ: nhiệt độ trung bình năm, tháng cao nhất, tháng thấp nhất, biên độ nhiệt năm (cao nhất − thấp nhất).', 'Phân tích lượng mưa: tổng lượng mưa năm; mùa mưa là các tháng có lượng mưa từ 100 mm trở lên; tháng mưa nhiều nhất, ít nhất.', 'Rút ra nhận xét: kiểu khí hậu, có mùa đông lạnh hay không, mùa mưa – mùa khô.'],
    keywords: [
      { term: 'Biểu đồ kết hợp', def: 'Cột (mưa) và đường (nhiệt độ) trên cùng hệ trục.' },
      { term: 'Biên độ nhiệt năm', def: 'Nhiệt độ tháng cao nhất trừ tháng thấp nhất.' },
      { term: 'Mùa mưa', def: 'Các tháng liên tục có lượng mưa ≥ 100 mm.' },
      { term: 'Nhiệt độ trung bình năm', def: 'Tổng nhiệt độ 12 tháng chia 12.' },
    ],
    cards: [
      { title: 'Đọc biểu đồ mẫu', svg: svgKhiHau(), body: 'Nhiệt độ thấp nhất tháng 1 (~16 °C), cao nhất tháng 6–8 (~29 °C). Mưa nhiều tháng 5–10.', example: 'Biên độ nhiệt ≈ 29 − 16 = 13 °C ⇒ có mùa đông lạnh (miền Bắc).' },
      { title: 'Các bước vẽ', emoji: '✏️', body: 'Hệ trục → thang chia → cột mưa → điểm nhiệt độ ở giữa cột, nối đường → tên biểu đồ, chú giải, đơn vị.', example: 'Thường lấy 1 vạch = 50 mm (mưa) và 5 °C (nhiệt độ).' },
      { title: 'Mẫu nhận xét', emoji: '📝', body: 'Nhiệt độ TB năm … °C, cao nhất tháng …, thấp nhất tháng …, biên độ … °C. Tổng mưa … mm; mùa mưa từ tháng … đến tháng …', example: 'Biên độ lớn → miền Bắc; biên độ nhỏ, nóng quanh năm → miền Nam.' },
    ],
    traps: ['Vẽ nhiệt độ bằng cột, mưa bằng đường (ngược).', 'Quên chú giải, đơn vị.', 'Xác định mùa mưa sai ngưỡng (phải ≥ 100 mm).'],
    mindmap: { root: 'Biểu đồ khí hậu', branches: [{ label: 'Vẽ', children: ['cột: mưa', 'đường: nhiệt', 'chú giải'] }, { label: 'Nhiệt độ', children: ['TB năm', 'max, min', 'biên độ'] }, { label: 'Mưa', children: ['tổng năm', 'mùa mưa ≥ 100 mm'] }] },
    quickCheck: ['d5q1', 'd5q2', 'd5q5'],
    questions: [
      { id: 'd5q1', level: 1, type: 'single', tag: 'Vẽ', prompt: 'Trong biểu đồ khí hậu, lượng mưa thường được thể hiện bằng:', options: ['cột', 'đường', 'hình tròn', 'miền'], answer: 0, hint: 'Cột xanh.', explanation: 'Mưa vẽ cột, nhiệt độ vẽ đường.' },
      { id: 'd5q2', level: 1, type: 'fill', tag: 'Biên độ', prompt: 'Tháng nóng nhất 29 °C, tháng lạnh nhất 16 °C. Biên độ nhiệt năm (°C) là:', answer: ['13'], hint: '29 − 16.', explanation: 'Biên độ = 29 − 16 = 13 °C.' },
      { id: 'd5q3', level: 1, type: 'truefalse', tag: 'Mùa mưa', prompt: 'Tháng mùa mưa là tháng có lượng mưa từ 100 mm trở lên.', answer: true, hint: 'Ngưỡng 100 mm.', explanation: 'Đúng, đây là quy ước thường dùng.' },
      { id: 'd5q4', level: 2, type: 'order', tag: 'Vẽ', prompt: 'Sắp xếp các bước vẽ biểu đồ khí hậu:', items: ['kẻ hệ trục và chia thang đo', 'vẽ các cột lượng mưa', 'chấm điểm nhiệt độ và nối thành đường', 'ghi tên biểu đồ, chú giải'], hint: 'Trục → cột → đường → tên.', explanation: 'Trình tự: kẻ trục và chia thang, vẽ cột mưa, vẽ đường nhiệt độ, cuối cùng ghi tên và chú giải.' },
      { id: 'd5q5', level: 2, type: 'single', tag: 'Phân tích', prompt: 'Một trạm có nhiệt độ quanh năm 26–29 °C, mưa từ tháng 5 đến 11. Trạm đó thuộc:', options: ['miền khí hậu phía Nam', 'miền khí hậu phía Bắc', 'vùng núi cao', 'vùng ôn đới'], answer: 0, hint: 'Nóng quanh năm.', explanation: 'Biên độ nhỏ, có mùa mưa – mùa khô.' },
      { id: 'd5q6', level: 2, type: 'match', tag: 'Thuật ngữ', prompt: 'Ghép đại lượng với cách tính:', pairs: [['nhiệt độ trung bình năm', 'tổng 12 tháng chia 12'], ['biên độ nhiệt năm', 'cao nhất trừ thấp nhất'], ['tổng lượng mưa năm', 'cộng mưa 12 tháng']], hint: 'Công thức.', explanation: 'Các phép tính cơ bản.' },
      { id: 'd5q7', level: 2, type: 'multi', tag: 'Vẽ', prompt: 'Một biểu đồ khí hậu đầy đủ cần có:', options: ['tên biểu đồ', 'đơn vị trên các trục', 'chú giải', 'màu sắc thật nhiều'], answer: [0, 1, 2], hint: 'Không cần nhiều màu.', explanation: 'Nhiều màu không phải yêu cầu.' },
      { id: 'd5q8', level: 3, type: 'fill', tag: 'Phân tích', prompt: 'Lượng mưa các tháng 5–10 lần lượt 188, 240, 288, 318, 265, 130 mm. Tháng mưa nhiều nhất là tháng:', answer: ['8', 'tám'], hint: '318 mm.', explanation: 'Tháng 8 có 318 mm.' },
      { id: 'd5q9', level: 3, type: 'truefalse', tag: 'Phân tích', prompt: 'Biên độ nhiệt năm lớn (khoảng 12–13 °C) cho thấy nơi đó có mùa đông lạnh.', answer: true, hint: 'Miền Bắc.', explanation: 'Đúng, đặc trưng khí hậu miền Bắc.' },
      { id: 'd5q10', level: 3, type: 'single', tag: 'Vẽ', prompt: 'Điểm nhiệt độ của mỗi tháng được chấm ở:', options: ['giữa cột của tháng đó', 'mép trái cột', 'đáy trục', 'bất kì'], answer: 0, hint: 'Cân đối.', explanation: 'Chấm giữa để đường đẹp, đúng vị trí tháng.' },
      { id: 'd5q11', level: 4, type: 'single', tag: 'Phân tích', prompt: 'Nhiệt độ 12 tháng có tổng 276 °C. Nhiệt độ trung bình năm:', options: ['23 °C', '27,6 °C', '12 °C', '30 °C'], answer: 0, hint: '276/12.', explanation: '276 : 12 = 23 °C.' },
      { id: 'd5q12', level: 4, type: 'single', tag: 'Kĩ năng', prompt: 'Nhận xét nào đầy đủ nhất cho biểu đồ mẫu (Hà Nội)?', options: ['Nhiệt độ TB khoảng 24 °C, biên độ ~13 °C, có mùa đông lạnh; mưa nhiều tháng 5–10, mùa khô tháng 11–4', 'Trời nóng', 'Có mưa', 'Có 12 tháng'], answer: 0, hint: 'Đủ nhiệt và mưa.', explanation: 'Nhận xét cần có số liệu cụ thể cả nhiệt độ và lượng mưa.' },
    ],
  },

  'dia-b6': {
    id: 'dia-b6', subject: 'sudia', chapter: CH, title: 'Bài 6. Thuỷ văn Việt Nam', minutes: 12,
    summary: ['Mạng lưới sông ngòi dày đặc, nhiều sông nhưng chủ yếu là sông nhỏ, ngắn, dốc (do lãnh thổ hẹp ngang, nhiều đồi núi).', 'Hai hướng chính: tây bắc – đông nam (sông Hồng, sông Đà, sông Mã…) và vòng cung (sông Lô, sông Gâm, sông Cầu…).', 'Chế độ nước theo mùa: mùa lũ (mưa lớn) và mùa cạn; thời gian mùa lũ khác nhau: Bắc Bộ khoảng tháng 6–10, Trung Bộ khoảng tháng 9–12, Nam Bộ khoảng tháng 7–11. Sông giàu phù sa.', 'Các hệ thống sông lớn: sông Hồng, sông Thái Bình, sông Mã, sông Cả, sông Thu Bồn, sông Đà Rằng, sông Đồng Nai, sông Mê Công (Cửu Long).', 'Hồ, đầm: hồ tự nhiên (Ba Bể, hồ Tây), hồ nhân tạo (Hòa Bình, Trị An, Dầu Tiếng); nước ngầm khá phong phú.'],
    keywords: [
      { term: 'Sông nhỏ, ngắn, dốc', def: 'Đặc điểm phổ biến do địa hình và lãnh thổ hẹp ngang.' },
      { term: 'Chế độ nước theo mùa', def: 'Mùa lũ tương ứng mùa mưa, mùa cạn tương ứng mùa khô.' },
      { term: 'Hệ thống sông Hồng', def: 'Sông lớn ở Bắc Bộ, nhiều phù sa (màu đỏ).' },
      { term: 'Sông Mê Công', def: 'Đoạn chảy qua Việt Nam gọi là Cửu Long, đổ ra biển qua nhiều cửa.' },
      { term: 'Hồ nhân tạo', def: 'Hòa Bình, Trị An, Dầu Tiếng… phục vụ thủy điện, thủy lợi.' },
    ],
    cards: [
      { title: 'Bốn đặc điểm sông ngòi', emoji: '🌊', body: 'Dày đặc – nhỏ, ngắn, dốc; hai hướng chính; chế độ nước theo mùa; nhiều phù sa.', example: 'Sông miền Trung ngắn, dốc nên lũ lên nhanh, rút nhanh.' },
      { title: 'Mùa lũ ba miền', emoji: '📅', body: 'Bắc Bộ: tháng 6–10. Trung Bộ: tháng 9–12 (lũ muộn, đột ngột). Nam Bộ: tháng 7–11 (lũ lên chậm, kéo dài).', example: 'Lũ Trung Bộ thường gắn với bão, áp thấp nhiệt đới cuối năm.' },
      { title: 'Hồ và nước ngầm', emoji: '💧', body: 'Hồ tự nhiên: Ba Bể (lớn nhất tự nhiên), hồ Tây. Hồ nhân tạo: Hòa Bình, Trị An, Thác Bà, Dầu Tiếng.', example: 'Hồ nhân tạo vừa làm thủy điện vừa cấp nước tưới, điều tiết lũ.' },
    ],
    traps: ['Nghĩ mùa lũ cả nước cùng thời gian.', 'Nhầm hồ Hòa Bình là hồ tự nhiên.', 'Quên hướng vòng cung của sông Lô, Gâm, Cầu.'],
    mindmap: { root: 'Thủy văn', branches: [{ label: 'Sông', children: ['dày đặc', 'nhỏ, ngắn, dốc', '2 hướng', 'theo mùa'] }, { label: 'Hệ thống lớn', children: ['Hồng', 'Mê Công', 'Đồng Nai'] }, { label: 'Hồ', children: ['tự nhiên: Ba Bể', 'nhân tạo: Hòa Bình'] }, { label: 'Nước ngầm', children: ['phong phú'] }] },
    quickCheck: ['d6q1', 'd6q2', 'd6q5'],
    questions: [
      { id: 'd6q1', level: 1, type: 'single', tag: 'Đặc điểm', prompt: 'Phần lớn sông ngòi nước ta là:', options: ['sông nhỏ, ngắn, dốc', 'sông lớn, dài, phẳng', 'sông băng', 'sông ngầm'], answer: 0, hint: 'Lãnh thổ hẹp ngang.', explanation: 'Do địa hình đồi núi và lãnh thổ hẹp ngang.' },
      { id: 'd6q2', level: 1, type: 'single', tag: 'Hồ', prompt: 'Hồ nào là hồ nhân tạo?', options: ['Hòa Bình', 'Ba Bể', 'hồ Tây', 'hồ Gươm'], answer: 0, hint: 'Thủy điện.', explanation: 'Hồ Hòa Bình được tạo ra khi xây đập thủy điện.' },
      { id: 'd6q3', level: 1, type: 'truefalse', tag: 'Đặc điểm', prompt: 'Sông ngòi nước ta có chế độ nước theo mùa.', answer: true, hint: 'Mùa lũ, mùa cạn.', explanation: 'Đúng, tương ứng với mùa mưa và mùa khô.' },
      { id: 'd6q4', level: 1, type: 'fill', tag: 'Hệ thống', prompt: 'Đoạn sông Mê Công chảy qua Việt Nam còn gọi là sông Cửu …', answer: ['Long', 'long'], hint: 'Chín rồng.', explanation: 'Đoạn sông Mê Công chảy qua Việt Nam gọi là sông Cửu Long, đổ ra biển qua nhiều cửa.' },
      { id: 'd6q5', level: 2, type: 'match', tag: 'Mùa lũ', prompt: 'Ghép miền với thời gian mùa lũ (khoảng):', pairs: [['Bắc Bộ', 'tháng 6 – 10'], ['Trung Bộ', 'tháng 9 – 12'], ['Nam Bộ', 'tháng 7 – 11']], hint: 'Trung Bộ muộn nhất.', explanation: 'Mùa lũ khác nhau theo mùa mưa từng miền.' },
      { id: 'd6q6', level: 2, type: 'multi', tag: 'Hướng', prompt: 'Chọn các sông chảy theo hướng vòng cung:', options: ['sông Lô', 'sông Gâm', 'sông Cầu', 'sông Đà'], answer: [0, 1, 2], hint: 'Đông Bắc.', explanation: 'Sông Đà chảy hướng tây bắc – đông nam.' },
      { id: 'd6q7', level: 2, type: 'single', tag: 'Đặc điểm', prompt: 'Sông ngòi miền Trung thường có lũ lên nhanh, rút nhanh vì:', options: ['sông ngắn, dốc', 'sông dài, bằng phẳng', 'ít mưa', 'có nhiều hồ'], answer: 0, hint: 'Địa hình.', explanation: 'Núi sát biển, sông ngắn và dốc.' },
      { id: 'd6q8', level: 3, type: 'single', tag: 'Hồ', prompt: 'Vai trò của hồ thủy điện Hòa Bình:', options: ['phát điện, điều tiết lũ, cấp nước, giao thông, du lịch', 'chỉ để nuôi cá', 'chỉ để tắm', 'không có vai trò'], answer: 0, hint: 'Đa mục tiêu.', explanation: 'Hồ nhân tạo có nhiều chức năng.' },
      { id: 'd6q9', level: 3, type: 'truefalse', tag: 'Đặc điểm', prompt: 'Sông Hồng có nhiều phù sa nên nước có màu đỏ nâu.', answer: true, hint: 'Tên sông.', explanation: 'Đúng, phù sa nhiều tạo màu đỏ nâu.' },
      { id: 'd6q10', level: 3, type: 'order', tag: 'Mùa lũ', prompt: 'Sắp xếp các miền theo thời điểm bắt đầu mùa lũ (sớm → muộn):', items: ['Bắc Bộ', 'Nam Bộ', 'Trung Bộ'], hint: '6 → 7 → 9.', explanation: 'Bắc Bộ sớm nhất, Trung Bộ muộn nhất.' },
      { id: 'd6q11', level: 4, type: 'single', tag: 'Vận dụng', prompt: 'Vì sao lũ ở đồng bằng sông Cửu Long lên chậm, rút chậm?', options: ['sông dài, lưu vực rộng, địa hình thấp phẳng, có Biển Hồ điều tiết', 'sông ngắn, dốc', 'ít mưa', 'có đê cao'], answer: 0, hint: 'Mê Công dài.', explanation: 'Đặc điểm lưu vực sông Mê Công.' },
      { id: 'd6q12', level: 4, type: 'single', tag: 'Liên hệ', prompt: 'Hiểu đặc điểm thủy văn giúp người dân miền Trung:', options: ['chủ động phòng chống lũ quét, lũ cuối năm', 'không cần làm gì', 'trồng lúa quanh năm', 'xây nhà sát bờ sông'], answer: 0, hint: 'Phòng tránh thiên tai.', explanation: 'Chủ động phòng tránh thiên tai.' },
    ],
  },

  'dia-b7': {
    id: 'dia-b7', subject: 'sudia', chapter: CH, title: 'Bài 7. Vai trò của tài nguyên khí hậu và tài nguyên nước đối với sự phát triển kinh tế – xã hội', minutes: 11,
    summary: ['Khí hậu với nông nghiệp: nhiệt ẩm dồi dào giúp cây trồng phát triển quanh năm, thâm canh, tăng vụ, đa dạng cây (nhiệt đới, cận nhiệt, ôn đới ở vùng núi và mùa đông miền Bắc). Khó khăn: thiên tai, sâu bệnh.', 'Khí hậu với du lịch: nhiều nắng, khí hậu mát vùng núi (Sa Pa, Đà Lạt), biển ấm quanh năm ở phía Nam; tính mùa vụ của du lịch.', 'Tài nguyên nước với nông nghiệp: tưới tiêu, nuôi trồng thủy sản; với công nghiệp: thủy điện (sông dốc, nhiều nước), nước cho sản xuất.', 'Với giao thông, du lịch, sinh hoạt: giao thông đường sông (đồng bằng sông Cửu Long), du lịch sông nước, cấp nước sinh hoạt.', 'Sử dụng hợp lí: quản lí theo lưu vực sông, chống ô nhiễm, tiết kiệm nước, bảo vệ rừng đầu nguồn.'],
    keywords: [
      { term: 'Thâm canh, tăng vụ', def: 'Trồng nhiều vụ trong năm nhờ khí hậu nóng ẩm.' },
      { term: 'Thủy điện', def: 'Khai thác sức nước sông dốc, lưu lượng lớn: Hòa Bình, Sơn La.' },
      { term: 'Tính mùa vụ du lịch', def: 'Lượng khách thay đổi theo mùa do khí hậu.' },
      { term: 'Quản lí lưu vực sông', def: 'Quản lí tổng hợp tài nguyên nước từ thượng nguồn đến hạ nguồn.' },
    ],
    cards: [
      { title: 'Khí hậu: lợi và hại', emoji: '☀️', body: 'Lợi: nông nghiệp quanh năm, đa dạng cây trồng, du lịch. Hại: bão, lũ, hạn hán, sâu bệnh phát triển.', example: 'Mùa đông lạnh giúp miền Bắc có vụ đông với rau ôn đới.' },
      { title: 'Nước: nhiều vai trò', emoji: '💧', body: 'Tưới tiêu, thủy sản, thủy điện, giao thông, du lịch, sinh hoạt.', example: 'Thủy điện Sơn La, Hòa Bình trên sông Đà.' },
      { title: 'Dùng nước hợp lí', emoji: '🚰', body: 'Bảo vệ rừng đầu nguồn, xử lí nước thải, tiết kiệm nước, quản lí theo lưu vực.', example: 'Mỗi học sinh: khóa vòi khi không dùng, không xả rác xuống sông.' },
    ],
    traps: ['Chỉ nêu thuận lợi mà quên khó khăn.', 'Nghĩ tài nguyên nước vô tận.', 'Nhầm vai trò khí hậu và vai trò nước.'],
    mindmap: { root: 'Vai trò KH & nước', branches: [{ label: 'Khí hậu', children: ['nông nghiệp', 'du lịch', 'thiên tai'] }, { label: 'Nước', children: ['tưới tiêu', 'thủy điện', 'giao thông', 'sinh hoạt'] }, { label: 'Sử dụng', children: ['lưu vực', 'tiết kiệm', 'chống ô nhiễm'] }] },
    quickCheck: ['d7q1', 'd7q2', 'd7q5'],
    questions: [
      { id: 'd7q1', level: 1, type: 'single', tag: 'Khí hậu', prompt: 'Khí hậu nóng ẩm giúp nông nghiệp nước ta:', options: ['thâm canh, tăng vụ, sản xuất quanh năm', 'chỉ trồng một vụ', 'không trồng được lúa', 'chỉ trồng cây ôn đới'], answer: 0, hint: 'Nhiệt ẩm dồi dào.', explanation: 'Cây trồng phát triển quanh năm.' },
      { id: 'd7q2', level: 1, type: 'single', tag: 'Nước', prompt: 'Sông dốc, nhiều nước là điều kiện để phát triển:', options: ['thủy điện', 'khai thác than', 'trồng lúa mì', 'chăn nuôi cừu'], answer: 0, hint: 'Sức nước.', explanation: 'Tiềm năng thủy điện lớn.' },
      { id: 'd7q3', level: 1, type: 'truefalse', tag: 'Khí hậu', prompt: 'Khí hậu nóng ẩm cũng tạo điều kiện cho sâu bệnh phát triển.', answer: true, hint: 'Hai mặt.', explanation: 'Đúng, đây là một khó khăn của nông nghiệp nhiệt đới.' },
      { id: 'd7q4', level: 1, type: 'fill', tag: 'Du lịch', prompt: 'Thành phố nghỉ mát nổi tiếng trên cao nguyên Lâm Viên là Đà …', answer: ['Lạt', 'lat'], hint: 'Thành phố ngàn hoa.', explanation: 'Đà Lạt có khí hậu mát mẻ quanh năm.' },
      { id: 'd7q5', level: 2, type: 'match', tag: 'Vai trò', prompt: 'Ghép tài nguyên với ví dụ sử dụng:', pairs: [['khí hậu mát vùng núi', 'du lịch nghỉ dưỡng Sa Pa'], ['sông dốc, lưu lượng lớn', 'thủy điện Sơn La'], ['mạng lưới kênh rạch', 'giao thông đường thủy ở đồng bằng sông Cửu Long'], ['mùa đông lạnh', 'trồng rau vụ đông ở miền Bắc']], hint: 'Ứng dụng.', explanation: 'Vai trò tài nguyên khí hậu và nước.' },
      { id: 'd7q6', level: 2, type: 'multi', tag: 'Khó khăn', prompt: 'Chọn các khó khăn do khí hậu gây ra:', options: ['bão', 'lũ lụt', 'hạn hán', 'đất feralit'], answer: [0, 1, 2], hint: 'Đất không phải khí hậu.', explanation: 'Đất feralit thuộc thổ nhưỡng.' },
      { id: 'd7q7', level: 2, type: 'single', tag: 'Du lịch', prompt: 'Tính mùa vụ của du lịch biển miền Bắc thể hiện ở:', options: ['đông khách vào mùa hè, vắng vào mùa đông lạnh', 'đông khách quanh năm', 'chỉ đông vào mùa đông', 'không có khách'], answer: 0, hint: 'Mùa đông lạnh.', explanation: 'Khí hậu chi phối mùa du lịch.' },
      { id: 'd7q8', level: 3, type: 'single', tag: 'Sử dụng', prompt: 'Bảo vệ rừng đầu nguồn giúp:', options: ['điều tiết dòng chảy, giảm lũ, giữ nước mùa khô', 'tăng lũ', 'làm sông khô', 'không liên quan'], answer: 0, hint: 'Rừng giữ nước.', explanation: 'Rừng là "bể chứa" tự nhiên.' },
      { id: 'd7q9', level: 3, type: 'truefalse', tag: 'Sử dụng', prompt: 'Tài nguyên nước là vô tận nên không cần tiết kiệm.', answer: false, hint: 'Ô nhiễm, cạn kiệt.', explanation: 'Sai, nước sạch đang bị ô nhiễm và thiếu hụt ở nhiều nơi.' },
      { id: 'd7q10', level: 3, type: 'order', tag: 'Sử dụng', prompt: 'Sắp xếp các việc theo hướng quản lí nước từ thượng nguồn đến hạ nguồn:', items: ['bảo vệ rừng đầu nguồn', 'xây hồ chứa điều tiết nước', 'phân phối nước tưới, sinh hoạt', 'xử lí nước thải trước khi đổ ra biển'], hint: 'Trên → dưới.', explanation: 'Quản lí tổng hợp theo lưu vực.' },
      { id: 'd7q11', level: 4, type: 'single', tag: 'Vận dụng', prompt: 'Hành động phù hợp nhất của học sinh để bảo vệ tài nguyên nước:', options: ['khóa vòi khi không dùng, không xả rác xuống sông hồ', 'tắm thật lâu', 'đổ dầu thải xuống cống', 'không quan tâm'], answer: 0, hint: 'Tiết kiệm, giữ sạch.', explanation: 'Việc nhỏ, làm hằng ngày.' },
      { id: 'd7q12', level: 4, type: 'multi', tag: 'Vai trò', prompt: 'Vai trò của tài nguyên nước:', options: ['tưới tiêu nông nghiệp', 'thủy điện', 'giao thông đường thủy', 'tạo ra khoáng sản kim loại'], answer: [0, 1, 2], hint: 'Khoáng sản không do nước.', explanation: 'Khoáng sản do quá trình địa chất.' },
    ],
  },

  'dia-b8': {
    id: 'dia-b8', subject: 'sudia', chapter: CH, title: 'Bài 8. Tác động của biến đổi khí hậu đối với khí hậu và thuỷ văn Việt Nam', minutes: 12,
    summary: ['Biến đổi khí hậu là sự thay đổi của khí hậu trong thời gian dài, chủ yếu do con người làm tăng khí nhà kính.', 'Tác động đến khí hậu Việt Nam: nhiệt độ trung bình tăng; lượng mưa thay đổi (nơi tăng, nơi giảm); thiên tai cực đoan tăng: bão mạnh, mưa lớn bất thường, nắng nóng, hạn hán, rét đậm rét hại thất thường.', 'Tác động đến thủy văn: lưu lượng dòng chảy biến động mạnh, lũ lớn và lũ quét tăng, mùa cạn khắc nghiệt hơn; nước biển dâng, xâm nhập mặn sâu ở đồng bằng sông Cửu Long.', 'Ảnh hưởng: nông nghiệp, đời sống, hạ tầng, sức khỏe; vùng ven biển và đồng bằng sông Cửu Long chịu ảnh hưởng nặng.', 'Giải pháp: giảm nhẹ (giảm phát thải, năng lượng tái tạo, trồng rừng, tiết kiệm năng lượng) và thích ứng (chuyển đổi cơ cấu cây trồng, công trình phòng chống thiên tai, cảnh báo sớm, nâng cao nhận thức).'],
    keywords: [
      { term: 'Biến đổi khí hậu', def: 'Thay đổi khí hậu lâu dài, chủ yếu do khí nhà kính từ hoạt động con người.' },
      { term: 'Thời tiết cực đoan', def: 'Hiện tượng bất thường, mạnh: nắng nóng kỉ lục, mưa lớn, bão mạnh.' },
      { term: 'Xâm nhập mặn', def: 'Nước mặn lấn sâu vào sông, đồng ruộng khi mùa khô kéo dài, nước biển dâng.' },
      { term: 'Giảm nhẹ', def: 'Giảm nguyên nhân: giảm khí nhà kính.' },
      { term: 'Thích ứng', def: 'Điều chỉnh để sống chung, giảm thiệt hại: đổi giống, nuôi tôm – lúa.' },
    ],
    cards: [
      { title: 'Biểu hiện ở Việt Nam', emoji: '🌡️', body: 'Nhiệt độ tăng; mưa thất thường; bão mạnh hơn; hạn hán, xâm nhập mặn ở đồng bằng sông Cửu Long; nước biển dâng.', example: 'Những đợt hạn mặn lịch sử ở miền Tây làm thiếu nước ngọt sinh hoạt.' },
      { title: 'Giảm nhẹ và thích ứng', emoji: '🛡️', body: 'Giảm nhẹ: điện mặt trời, điện gió, trồng rừng, tiết kiệm điện. Thích ứng: giống lúa chịu mặn, mô hình tôm – lúa, đê biển, nhà chống lũ.', example: 'Liên hệ Văn bài 9: "chào đón lũ" là một cách thích ứng.' },
      { title: 'Học sinh làm gì?', emoji: '🌱', body: 'Tiết kiệm điện, đi xe đạp, trồng cây, giảm rác nhựa, tìm hiểu kĩ năng phòng tránh thiên tai.', example: 'Liên hệ KHTN bài 47.' },
    ],
    traps: ['Nhầm thời tiết (ngắn hạn) với khí hậu (dài hạn).', 'Chỉ nêu nhiệt độ tăng, quên tác động thủy văn.', 'Nhầm giảm nhẹ với thích ứng.'],
    mindmap: { root: 'Biến đổi khí hậu', branches: [{ label: 'Khí hậu', children: ['nhiệt độ tăng', 'mưa thất thường', 'cực đoan'] }, { label: 'Thủy văn', children: ['lũ lớn', 'cạn kiệt', 'xâm nhập mặn'] }, { label: 'Giải pháp', children: ['giảm nhẹ', 'thích ứng'] }] },
    quickCheck: ['d8q1', 'd8q2', 'd8q5'],
    questions: [
      { id: 'd8q1', level: 1, type: 'single', tag: 'Khái niệm', prompt: 'Nguyên nhân chủ yếu của biến đổi khí hậu hiện nay:', options: ['con người làm tăng khí nhà kính', 'núi lửa', 'Trái Đất quay chậm', 'Mặt Trăng'], answer: 0, hint: 'Hoạt động con người.', explanation: 'Đốt nhiên liệu hóa thạch, phá rừng làm tăng CO₂.' },
      { id: 'd8q2', level: 1, type: 'single', tag: 'Thủy văn', prompt: 'Vùng chịu xâm nhập mặn nghiêm trọng nhất nước ta:', options: ['đồng bằng sông Cửu Long', 'Tây Bắc', 'Tây Nguyên', 'Đông Bắc'], answer: 0, hint: 'Vùng thấp ven biển.', explanation: 'Địa hình thấp, nhiều cửa sông.' },
      { id: 'd8q3', level: 1, type: 'truefalse', tag: 'Khí hậu', prompt: 'Biến đổi khí hậu làm gia tăng các hiện tượng thời tiết cực đoan.', answer: true, hint: 'Bão, hạn.', explanation: 'Đúng: bão mạnh, nắng nóng, mưa lớn bất thường tăng.' },
      { id: 'd8q4', level: 2, type: 'match', tag: 'Giải pháp', prompt: 'Ghép biện pháp với nhóm giải pháp:', pairs: [['phát triển điện mặt trời, điện gió', 'giảm nhẹ – cắt giảm phát thải'], ['trồng rừng', 'giảm nhẹ – hấp thụ CO₂'], ['dùng giống lúa chịu mặn', 'thích ứng – thay đổi sản xuất'], ['xây đê biển, nhà chống lũ', 'thích ứng – xây công trình']], hint: 'Giảm nguyên nhân hay sống chung?', explanation: 'Phân biệt giảm nhẹ và thích ứng.' },
      { id: 'd8q5', level: 2, type: 'multi', tag: 'Thủy văn', prompt: 'Chọn tác động của biến đổi khí hậu đến thủy văn:', options: ['lũ lớn, lũ quét tăng', 'mùa cạn khắc nghiệt hơn', 'xâm nhập mặn', 'sông ngòi biến mất hoàn toàn'], answer: [0, 1, 2], hint: 'Không biến mất.', explanation: 'Sông không biến mất mà chế độ nước biến động.' },
      { id: 'd8q6', level: 2, type: 'single', tag: 'Khái niệm', prompt: 'Khác nhau giữa thời tiết và khí hậu:', options: ['thời tiết là trạng thái ngắn hạn, khí hậu là quy luật nhiều năm', 'hai khái niệm giống hệt', 'khí hậu thay đổi từng giờ', 'thời tiết kéo dài trăm năm'], answer: 0, hint: 'Thời gian.', explanation: 'Khí hậu là chế độ thời tiết trung bình nhiều năm.' },
      { id: 'd8q7', level: 2, type: 'single', tag: 'Ảnh hưởng', prompt: 'Nước biển dâng ảnh hưởng nặng nhất đến:', options: ['vùng ven biển, đồng bằng thấp', 'vùng núi cao', 'cao nguyên', 'thung lũng núi'], answer: 0, hint: 'Thấp.', explanation: 'Nguy cơ ngập, mặn hóa đất.' },
      { id: 'd8q8', level: 3, type: 'order', tag: 'Chuỗi tác động', prompt: 'Sắp xếp chuỗi tác động:', items: ['khí nhà kính tăng', 'nhiệt độ toàn cầu tăng', 'băng tan, nước biển dâng', 'xâm nhập mặn ở đồng bằng sông Cửu Long'], hint: 'Nhân → quả.', explanation: 'Chuỗi nguyên nhân – hậu quả.' },
      { id: 'd8q9', level: 3, type: 'truefalse', tag: 'Giải pháp', prompt: 'Mô hình luân canh tôm – lúa là một cách thích ứng với xâm nhập mặn.', answer: true, hint: 'Mùa mặn nuôi tôm.', explanation: 'Đúng, tận dụng nước mặn mùa khô.' },
      { id: 'd8q10', level: 3, type: 'single', tag: 'Giải pháp', prompt: 'Trồng rừng ngập mặn ven biển có tác dụng:', options: ['chắn sóng, giảm xói lở, hấp thụ CO₂', 'làm nước biển dâng', 'tăng mặn', 'không tác dụng'], answer: 0, hint: 'Đa tác dụng.', explanation: 'Vừa giảm nhẹ vừa thích ứng.' },
      { id: 'd8q11', level: 4, type: 'single', tag: 'Vận dụng', prompt: 'Hành động giảm nhẹ biến đổi khí hậu của học sinh:', options: ['tắt điện khi không dùng, đi xe đạp, trồng cây', 'bật điều hòa cả ngày', 'đốt rác', 'dùng nhiều túi ni lông'], answer: 0, hint: 'Giảm phát thải.', explanation: 'Tiết kiệm năng lượng giảm khí nhà kính.' },
      { id: 'd8q12', level: 4, type: 'single', tag: 'Liên hệ', prompt: 'Câu "chuyển từ sống chung sang chào đón lũ" (Văn bài 9) thể hiện:', options: ['tư duy thích ứng chủ động với tự nhiên', 'từ bỏ đồng bằng', 'xây đê ngăn hết lũ', 'không quan tâm lũ'], answer: 0, hint: 'Thích ứng.', explanation: 'Thích ứng, khai thác lợi ích của lũ.' },
    ],
  },
}
