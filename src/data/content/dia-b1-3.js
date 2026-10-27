// Lịch sử và Địa lí 8 KNTT – Phần Địa lí, bài 1–3
const CH = 'Địa lí – Chương 1. Vị trí địa lí và phạm vi lãnh thổ, địa hình và khoáng sản Việt Nam'
const F = 'font-family="Quicksand, sans-serif" font-weight="700" font-size="12" fill="#1C2B3A"'
const svgDiaHinh = `<svg viewBox="0 0 360 120" xmlns="http://www.w3.org/2000/svg"><text x="10" y="18" ${F} fill="#4C6478">Cơ cấu diện tích phần đất liền</text><rect x="10" y="30" width="255" height="34" fill="#C9A86A"/><rect x="265" y="30" width="85" height="34" fill="#9AD6B7"/><text x="80" y="52" ${F}>Đồi núi ~ 3/4</text><text x="270" y="52" ${F}>Đồng bằng ~1/4</text><text x="10" y="90" ${F} fill="#4C6478">Trong đồi núi: thấp dưới 1000 m chiếm phần lớn;</text><text x="10" y="106" ${F} fill="#4C6478">núi cao trên 2000 m chỉ khoảng 1% diện tích.</text></svg>`
const svgBien = `<svg viewBox="0 0 360 130" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="20" width="40" height="90" fill="#C9A86A"/><text x="4" y="14" ${F}>Đất liền</text><rect x="40" y="20" width="30" height="90" fill="#BFE3FF"/><rect x="70" y="20" width="60" height="90" fill="#9FD0F5"/><rect x="130" y="20" width="60" height="90" fill="#7DBBEB"/><rect x="190" y="20" width="160" height="90" fill="#5AA5E0"/><line x1="40" y1="15" x2="40" y2="115" stroke="#E25555" stroke-width="2" stroke-dasharray="4 3"/><text x="28" y="125" ${F} font-size="10" fill="#E25555">đường cơ sở</text><text x="44" y="70" ${F} font-size="10">nội</text><text x="44" y="82" ${F} font-size="10">thủy</text><text x="76" y="62" ${F} font-size="10">lãnh hải</text><text x="80" y="76" ${F} font-size="10">12 hải lí</text><text x="134" y="62" ${F} font-size="10">tiếp giáp</text><text x="140" y="76" ${F} font-size="10">12 hải lí</text><text x="200" y="62" ${F} font-size="10">vùng đặc quyền kinh tế</text><text x="200" y="76" ${F} font-size="10">rộng đến 200 hải lí</text></svg>`

export const diaB13 = {
  'dia-b1': {
    id: 'dia-b1', subject: 'sudia', chapter: CH, title: 'Bài 1. Vị trí địa lí và phạm vi lãnh thổ Việt Nam', minutes: 13,
    summary: ['Việt Nam nằm ở rìa phía đông bán đảo Đông Dương, gần trung tâm Đông Nam Á; trong vùng nội chí tuyến bán cầu Bắc, khu vực nhiệt đới gió mùa.', 'Bốn điểm cực phần đất liền (theo SGK): Bắc – xã Lũng Cú (Hà Giang) khoảng 23°23′B; Nam – xã Đất Mũi (Cà Mau) khoảng 8°34′B; Tây – xã Sín Thầu (Điện Biên) khoảng 102°09′Đ; Đông – xã Vạn Thạnh (Khánh Hòa) khoảng 109°24′Đ. (Từ năm 2025 nhiều tỉnh đã sáp nhập, tên tỉnh có thể thay đổi.)', 'Phần đất liền khoảng 331 nghìn km²; biên giới với Trung Quốc, Lào, Cam-pu-chia; đường bờ biển dài khoảng 3 260 km.', 'Vùng biển gồm: nội thủy, lãnh hải (12 hải lí), vùng tiếp giáp lãnh hải (12 hải lí), vùng đặc quyền kinh tế (200 hải lí tính từ đường cơ sở) và thềm lục địa; có hàng nghìn đảo, hai quần đảo xa bờ Hoàng Sa và Trường Sa.', 'Ảnh hưởng: khí hậu nhiệt đới ẩm gió mùa; sinh vật, khoáng sản phong phú; thuận lợi giao lưu, hội nhập; nhưng chịu nhiều thiên tai (bão, lũ) và đòi hỏi bảo vệ chủ quyền.'],
    keywords: [
      { term: 'Nội chí tuyến', def: 'Nằm giữa chí tuyến Bắc và chí tuyến Nam → khí hậu nhiệt đới.' },
      { term: 'Điểm cực Bắc', def: 'Lũng Cú, khoảng 23°23′B.' },
      { term: 'Điểm cực Nam', def: 'Đất Mũi, khoảng 8°34′B.' },
      { term: 'Lãnh hải', def: 'Rộng 12 hải lí tính từ đường cơ sở; chủ quyền đầy đủ như trên đất liền.' },
      { term: 'Vùng đặc quyền kinh tế', def: 'Rộng 200 hải lí tính từ đường cơ sở; quyền chủ quyền về kinh tế.' },
    ],
    cards: [
      { title: 'Bốn điểm cực', emoji: '🧭', body: 'Bắc: Lũng Cú. Nam: Đất Mũi. Tây: Sín Thầu. Đông: Vạn Thạnh. Lãnh thổ kéo dài khoảng 15 vĩ độ, hẹp ngang.', example: 'Mẹo: "Lũng – Mũi – Sín – Vạn" theo thứ tự Bắc – Nam – Tây – Đông.' },
      { title: 'Các vùng biển', svg: svgBien, body: 'Từ đường cơ sở ra khơi: nội thủy → lãnh hải (12 hải lí) → tiếp giáp lãnh hải (12 hải lí) → vùng đặc quyền kinh tế (đến 200 hải lí). Thềm lục địa nằm dưới đáy biển.', example: '1 hải lí ≈ 1 852 m.' },
      { title: 'Ý nghĩa vị trí', emoji: '🌏', body: 'Thuận lợi: khí hậu nhiệt đới ẩm, tài nguyên đa dạng, nằm trên đường hàng hải quốc tế, cửa ngõ ra biển của Lào, Đông Bắc Thái Lan. Khó khăn: thiên tai, bảo vệ chủ quyền biển rộng.', example: 'Liên hệ Chủ đề chung 2: bảo vệ chủ quyền Biển Đông.' },
    ],
    traps: ['Nhầm thứ tự các vùng biển.', 'Nghĩ vùng đặc quyền kinh tế là lãnh hải.', 'Nhớ sai tên tỉnh sau sáp nhập (đọc kĩ yêu cầu đề: theo SGK hay hiện nay).'],
    mindmap: { root: 'Vị trí – lãnh thổ', branches: [{ label: 'Vị trí', children: ['rìa đông Đông Dương', 'nội chí tuyến'] }, { label: 'Đất liền', children: ['4 điểm cực', '331 nghìn km²', '3 nước láng giềng'] }, { label: 'Biển', children: ['nội thủy', 'lãnh hải 12 hl', 'đặc quyền 200 hl', 'Hoàng Sa, Trường Sa'] }, { label: 'Ảnh hưởng', children: ['nhiệt đới gió mùa', 'giao lưu', 'thiên tai'] }] },
    quickCheck: ['d1q1', 'd1q2', 'd1q5'],
    questions: [
      { id: 'd1q1', level: 1, type: 'single', tag: 'Điểm cực', prompt: 'Điểm cực Bắc phần đất liền nước ta ở:', options: ['Lũng Cú', 'Đất Mũi', 'Sín Thầu', 'Vạn Thạnh'], answer: 0, hint: 'Cột cờ nổi tiếng.', explanation: 'Lũng Cú, khoảng 23°23′B.' },
      { id: 'd1q2', level: 1, type: 'single', tag: 'Vùng biển', prompt: 'Lãnh hải nước ta rộng:', options: ['12 hải lí', '24 hải lí', '200 hải lí', '3 hải lí'], answer: 0, hint: 'Hẹp nhất sau nội thủy.', explanation: 'Lãnh hải rộng 12 hải lí tính từ đường cơ sở.' },
      { id: 'd1q3', level: 1, type: 'truefalse', tag: 'Vị trí', prompt: 'Việt Nam nằm trong vùng nội chí tuyến bán cầu Bắc.', answer: true, hint: 'Nhiệt đới.', explanation: 'Đúng, vì vậy có khí hậu nhiệt đới.' },
      { id: 'd1q4', level: 1, type: 'fill', tag: 'Vùng biển', prompt: 'Vùng đặc quyền kinh tế rộng bao nhiêu hải lí tính từ đường cơ sở?', answer: ['200'], hint: 'Lớn nhất.', explanation: 'Vùng đặc quyền kinh tế rộng 200 hải lí tính từ đường cơ sở.' },
      { id: 'd1q5', level: 2, type: 'match', tag: 'Điểm cực', prompt: 'Ghép điểm cực với địa danh:', pairs: [['cực Bắc', 'Lũng Cú'], ['cực Nam', 'Đất Mũi'], ['cực Tây', 'Sín Thầu'], ['cực Đông', 'Vạn Thạnh']], hint: 'Lũng – Mũi – Sín – Vạn.', explanation: 'Bốn điểm cực phần đất liền.' },
      { id: 'd1q6', level: 2, type: 'order', tag: 'Vùng biển', prompt: 'Sắp xếp các vùng biển từ đường cơ sở ra khơi:', items: ['nội thủy', 'lãnh hải', 'vùng tiếp giáp lãnh hải', 'vùng đặc quyền kinh tế'], hint: 'Trong → ngoài.', explanation: 'Thứ tự các vùng biển theo Luật Biển.' },
      { id: 'd1q7', level: 2, type: 'multi', tag: 'Biên giới', prompt: 'Chọn các nước có chung đường biên giới trên đất liền với Việt Nam:', options: ['Trung Quốc', 'Lào', 'Cam-pu-chia', 'Thái Lan'], answer: [0, 1, 2], hint: 'Ba nước.', explanation: 'Thái Lan không giáp đất liền Việt Nam.' },
      { id: 'd1q8', level: 2, type: 'single', tag: 'Vị trí', prompt: 'Việt Nam nằm ở rìa phía đông của:', options: ['bán đảo Đông Dương', 'bán đảo Mã Lai', 'bán đảo Triều Tiên', 'châu Phi'], answer: 0, hint: 'Đông Dương.', explanation: 'Rìa đông bán đảo Đông Dương.' },
      { id: 'd1q9', level: 3, type: 'single', tag: 'Ảnh hưởng', prompt: 'Vị trí nội chí tuyến và giáp biển làm cho khí hậu nước ta:', options: ['nhiệt đới ẩm gió mùa', 'ôn đới lục địa', 'hoang mạc khô hạn', 'cận cực'], answer: 0, hint: 'Nóng ẩm.', explanation: 'Nhiệt đới, ẩm do biển, có gió mùa.' },
      { id: 'd1q10', level: 3, type: 'truefalse', tag: 'Vùng biển', prompt: 'Vùng đặc quyền kinh tế là một phần của lãnh hải.', answer: false, hint: 'Hai vùng khác nhau.', explanation: 'Sai, lãnh hải chỉ rộng 12 hải lí; đặc quyền kinh tế rộng hơn và chế độ pháp lí khác.' },
      { id: 'd1q11', level: 4, type: 'single', tag: 'Ảnh hưởng', prompt: 'Khó khăn lớn do vị trí địa lí đem lại:', options: ['nhiều thiên tai như bão, lũ; bảo vệ chủ quyền vùng biển rộng', 'thiếu ánh sáng', 'không có biển', 'khí hậu quá lạnh'], answer: 0, hint: 'Đường đi của bão.', explanation: 'Nằm trên đường bão, vùng biển rộng cần bảo vệ.' },
      { id: 'd1q12', level: 4, type: 'fill', tag: 'Kĩ năng', prompt: 'Lãnh thổ phần đất liền kéo dài từ khoảng 8°34′B đến 23°23′B, tức khoảng bao nhiêu vĩ độ (làm tròn)?', answer: ['15'], hint: '23 − 8.', explanation: 'Khoảng 15 vĩ độ, nên khí hậu khác biệt Bắc – Nam.' },
    ],
  },

  'dia-b2': {
    id: 'dia-b2', subject: 'sudia', chapter: CH, title: 'Bài 2. Địa hình Việt Nam', minutes: 13,
    summary: ['Đồi núi chiếm khoảng 3/4 diện tích phần đất liền, chủ yếu là đồi núi thấp; đồng bằng chiếm khoảng 1/4.', 'Hai hướng chính: tây bắc – đông nam (Hoàng Liên Sơn, Trường Sơn Bắc) và vòng cung (các cánh cung vùng Đông Bắc, Trường Sơn Nam).', 'Bốn khu vực đồi núi: Đông Bắc (đồi núi thấp, cánh cung); Tây Bắc (cao nhất, có Phan-xi-păng 3 143 m); Trường Sơn Bắc (núi thấp, hẹp ngang); Trường Sơn Nam (các cao nguyên badan xếp tầng).', 'Đồng bằng: sông Hồng (có hệ thống đê), sông Cửu Long (rộng nhất, không có đê, nhiều kênh rạch), đồng bằng duyên hải miền Trung (nhỏ hẹp, bị chia cắt).', 'Ảnh hưởng: địa hình đồi núi tạo phân hóa khí hậu, nhiều tài nguyên (rừng, khoáng sản, thủy điện) nhưng gây khó khăn giao thông, thiên tai (lũ quét, sạt lở).'],
    keywords: [
      { term: 'Đồi núi thấp', def: 'Chiếm phần lớn diện tích đồi núi; núi cao trên 2 000 m rất ít.' },
      { term: 'Hướng tây bắc – đông nam', def: 'Hoàng Liên Sơn, Trường Sơn Bắc…' },
      { term: 'Hướng vòng cung', def: 'Các cánh cung Đông Bắc (sông Gâm, Ngân Sơn, Bắc Sơn, Đông Triều), Trường Sơn Nam.' },
      { term: 'Phan-xi-păng', def: 'Đỉnh núi cao nhất Việt Nam, 3 143 m, ở dãy Hoàng Liên Sơn.' },
      { term: 'Cao nguyên badan', def: 'Đặc trưng Trường Sơn Nam (Tây Nguyên), đất đỏ badan màu mỡ.' },
    ],
    cards: [
      { title: 'Đồi núi chiếm ưu thế', svg: svgDiaHinh, body: 'Đồi núi nhiều nhưng chủ yếu thấp, nên thiên nhiên vẫn mang tính nhiệt đới.', example: 'Nhiều đồi núi ⇒ nhiều tài nguyên, nhiều thủy điện, nhưng giao thông khó.' },
      { title: 'Bốn khu vực đồi núi', emoji: '⛰️', body: 'Đông Bắc: cánh cung, đồi thấp. Tây Bắc: cao, đồ sộ. Trường Sơn Bắc: thấp, hẹp ngang. Trường Sơn Nam: cao nguyên badan.', example: 'Mẹo: Đông Bắc "cung", Tây Bắc "cao", Trường Sơn Bắc "hẹp", Trường Sơn Nam "bằng (cao nguyên)".' },
      { title: 'Hai đồng bằng lớn', emoji: '🌾', body: 'Sông Hồng: có đê, nhiều ô trũng. Sông Cửu Long: rộng khoảng 40 nghìn km², không đê, kênh rạch chằng chịt, chịu ngập lũ mùa nước nổi.', example: 'Liên hệ Văn bài 9: lũ ở đồng bằng sông Cửu Long.' },
    ],
    traps: ['Nghĩ phần lớn núi Việt Nam là núi cao.', 'Nhầm hướng vòng cung với tây bắc – đông nam.', 'Nghĩ đồng bằng sông Cửu Long có đê như sông Hồng.'],
    mindmap: { root: 'Địa hình', branches: [{ label: 'Đặc điểm', children: ['đồi núi 3/4', 'chủ yếu thấp', '2 hướng'] }, { label: 'Khu vực núi', children: ['Đông Bắc', 'Tây Bắc', 'Trường Sơn Bắc', 'Trường Sơn Nam'] }, { label: 'Đồng bằng', children: ['sông Hồng', 'sông Cửu Long', 'duyên hải'] }, { label: 'Ảnh hưởng', children: ['tài nguyên', 'thiên tai'] }] },
    quickCheck: ['d2q1', 'd2q2', 'd2q5'],
    questions: [
      { id: 'd2q1', level: 1, type: 'single', tag: 'Đặc điểm', prompt: 'Đồi núi chiếm khoảng bao nhiêu diện tích phần đất liền?', options: ['3/4', '1/4', '1/2', '1/10'], answer: 0, hint: 'Phần lớn.', explanation: 'Đồi núi chiếm khoảng 3/4.' },
      { id: 'd2q2', level: 1, type: 'single', tag: 'Khu vực', prompt: 'Đỉnh Phan-xi-păng thuộc dãy núi:', options: ['Hoàng Liên Sơn', 'Trường Sơn', 'Bạch Mã', 'Đông Triều'], answer: 0, hint: 'Tây Bắc.', explanation: 'Phan-xi-păng (3 143 m) thuộc dãy Hoàng Liên Sơn.' },
      { id: 'd2q3', level: 1, type: 'truefalse', tag: 'Đặc điểm', prompt: 'Địa hình nước ta chủ yếu là đồi núi thấp.', answer: true, hint: 'Núi cao rất ít.', explanation: 'Đúng; núi trên 2 000 m chỉ khoảng 1% diện tích.' },
      { id: 'd2q4', level: 1, type: 'fill', tag: 'Khu vực', prompt: 'Độ cao của đỉnh Phan-xi-păng là bao nhiêu mét?', answer: ['3143', '3 143'], hint: 'Hơn 3 000 m.', explanation: 'Khoảng 3 143 m – nóc nhà Đông Dương.' },
      { id: 'd2q5', level: 2, type: 'match', tag: 'Khu vực', prompt: 'Ghép khu vực đồi núi với đặc điểm:', pairs: [['Đông Bắc', 'các cánh cung, đồi núi thấp'], ['Tây Bắc', 'cao và đồ sộ nhất'], ['Trường Sơn Bắc', 'núi thấp, hẹp ngang'], ['Trường Sơn Nam', 'các cao nguyên badan']], hint: 'Mẹo nhớ.', explanation: 'Bốn khu vực đồi núi.' },
      { id: 'd2q6', level: 2, type: 'multi', tag: 'Hướng', prompt: 'Chọn các dãy núi có hướng vòng cung:', options: ['sông Gâm', 'Ngân Sơn', 'Bắc Sơn', 'Hoàng Liên Sơn'], answer: [0, 1, 2], hint: 'Hoàng Liên Sơn hướng TB – ĐN.', explanation: 'Các cánh cung vùng Đông Bắc.' },
      { id: 'd2q7', level: 2, type: 'single', tag: 'Đồng bằng', prompt: 'Đồng bằng có hệ thống đê ven sông là:', options: ['đồng bằng sông Hồng', 'đồng bằng sông Cửu Long', 'đồng bằng duyên hải miền Trung', 'cả ba'], answer: 0, hint: 'Ô trũng.', explanation: 'Đê sông Hồng có từ lâu đời.' },
      { id: 'd2q8', level: 3, type: 'single', tag: 'Đồng bằng', prompt: 'Đồng bằng duyên hải miền Trung nhỏ hẹp vì:', options: ['núi lan sát biển, chia cắt đồng bằng', 'không có sông', 'quá nhiều đê', 'khí hậu lạnh'], answer: 0, hint: 'Trường Sơn.', explanation: 'Các nhánh núi đâm ra biển chia cắt đồng bằng.' },
      { id: 'd2q9', level: 3, type: 'truefalse', tag: 'Đồng bằng', prompt: 'Đồng bằng sông Cửu Long có diện tích lớn nhất nước ta.', answer: true, hint: 'Khoảng 40 nghìn km².', explanation: 'Đúng, lớn hơn đồng bằng sông Hồng (khoảng 15 nghìn km²).' },
      { id: 'd2q10', level: 3, type: 'order', tag: 'Khu vực', prompt: 'Sắp xếp các khu vực theo hướng từ Bắc vào Nam:', items: ['Đông Bắc và Tây Bắc', 'Trường Sơn Bắc', 'Trường Sơn Nam'], hint: 'Bắc → Nam.', explanation: 'Phân bố các khu vực đồi núi.' },
      { id: 'd2q11', level: 4, type: 'single', tag: 'Ảnh hưởng', prompt: 'Khó khăn do địa hình đồi núi dốc gây ra:', options: ['lũ quét, sạt lở đất, giao thông khó khăn', 'thiếu ánh sáng', 'không có sông', 'không trồng được cây'], answer: 0, hint: 'Mưa lớn trên sườn dốc.', explanation: 'Đặc biệt nghiêm trọng ở vùng núi phía Bắc mùa mưa.' },
      { id: 'd2q12', level: 4, type: 'single', tag: 'Ảnh hưởng', prompt: 'Thế mạnh của địa hình đồi núi với phát triển kinh tế:', options: ['phát triển thủy điện, lâm nghiệp, du lịch, cây công nghiệp', 'trồng lúa nước quy mô lớn', 'nuôi tôm', 'làm muối'], answer: 0, hint: 'Sông dốc, rừng.', explanation: 'Sông dốc nhiều thác ghềnh – tiềm năng thủy điện.' },
    ],
  },

  'dia-b3': {
    id: 'dia-b3', subject: 'sudia', chapter: CH, title: 'Bài 3. Khoáng sản Việt Nam', minutes: 11,
    summary: ['Khoáng sản nước ta phong phú, đa dạng (khoảng 60 loại), phần lớn trữ lượng vừa và nhỏ; một số loại có trữ lượng lớn: than, dầu khí, bô-xít, đá vôi, a-pa-tít, titan.', 'Phân bố: than (Quảng Ninh); dầu mỏ, khí tự nhiên (thềm lục địa phía Nam); bô-xít (Tây Nguyên); sắt (Thái Nguyên, Hà Tĩnh); a-pa-tít (Lào Cai); đá vôi (miền núi phía Bắc, Bắc Trung Bộ); titan (ven biển miền Trung).', 'Nguyên nhân phong phú: lịch sử phát triển địa chất lâu dài, phức tạp; nằm ở nơi giao nhau giữa hai vành đai sinh khoáng lớn.', 'Vấn đề: khai thác chưa hợp lí, lãng phí, gây ô nhiễm môi trường (bụi than, nước thải mỏ), cạn kiệt tài nguyên.', 'Giải pháp: khai thác, sử dụng tiết kiệm, hợp lí; áp dụng công nghệ hiện đại; bảo vệ môi trường; xử lí nghiêm khai thác trái phép.'],
    keywords: [
      { term: 'Khoáng sản năng lượng', def: 'Than, dầu mỏ, khí tự nhiên.' },
      { term: 'Khoáng sản kim loại', def: 'Sắt, bô-xít (nhôm), titan, thiếc…' },
      { term: 'Khoáng sản phi kim loại', def: 'A-pa-tít (làm phân lân), đá vôi (xi măng)…' },
      { term: 'Trữ lượng vừa và nhỏ', def: 'Đặc điểm của phần lớn mỏ khoáng sản nước ta.' },
      { term: 'Khai thác bền vững', def: 'Tiết kiệm, hợp lí, bảo vệ môi trường.' },
    ],
    cards: [
      { title: 'Bản đồ khoáng sản chính', emoji: '🗺️', body: 'Than – Quảng Ninh. Dầu khí – thềm lục địa phía Nam. Bô-xít – Tây Nguyên. A-pa-tít – Lào Cai. Sắt – Thái Nguyên, Hà Tĩnh. Titan – ven biển miền Trung.', example: 'Mẹo: "Than Quảng, Dầu Nam, Bô Tây, A-pa Lào".' },
      { title: 'Vì sao phong phú?', emoji: '🪨', body: 'Lịch sử địa chất lâu dài, nhiều chu kì kiến tạo; vị trí giao nhau của hai vành đai sinh khoáng Thái Bình Dương và Địa Trung Hải.', example: 'Nhiều loại nhưng phần lớn mỏ nhỏ, phân tán.' },
      { title: 'Khai thác và môi trường', emoji: '⚠️', body: 'Khai thác than gây bụi, nước thải; khai thác cát trái phép gây sạt lở bờ sông. Cần công nghệ sạch, hoàn thổ sau khai thác.', example: 'Khoáng sản là tài nguyên không tái tạo – dùng hết là mất.' },
    ],
    traps: ['Nhầm a-pa-tít ở Quảng Ninh (đúng là Lào Cai).', 'Nghĩ mọi mỏ khoáng sản nước ta đều trữ lượng lớn.', 'Coi khoáng sản là tài nguyên tái tạo.'],
    mindmap: { root: 'Khoáng sản', branches: [{ label: 'Đặc điểm', children: ['~60 loại', 'trữ lượng vừa – nhỏ'] }, { label: 'Phân bố', children: ['than – Quảng Ninh', 'dầu khí – thềm lục địa', 'bô-xít – Tây Nguyên', 'a-pa-tít – Lào Cai'] }, { label: 'Vấn đề', children: ['ô nhiễm', 'lãng phí'] }, { label: 'Giải pháp', children: ['tiết kiệm', 'công nghệ', 'bảo vệ MT'] }] },
    quickCheck: ['d3q1', 'd3q2', 'd3q5'],
    questions: [
      { id: 'd3q1', level: 1, type: 'single', tag: 'Phân bố', prompt: 'Than đá tập trung chủ yếu ở:', options: ['Quảng Ninh', 'Tây Nguyên', 'Lào Cai', 'Cà Mau'], answer: 0, hint: 'Vùng mỏ lớn nhất.', explanation: 'Quảng Ninh là vùng than lớn nhất.' },
      { id: 'd3q2', level: 1, type: 'single', tag: 'Phân bố', prompt: 'Bô-xít có trữ lượng lớn ở:', options: ['Tây Nguyên', 'Quảng Ninh', 'đồng bằng sông Hồng', 'Lào Cai'], answer: 0, hint: 'Đất đỏ badan.', explanation: 'Tây Nguyên có trữ lượng bô-xít lớn.' },
      { id: 'd3q3', level: 1, type: 'truefalse', tag: 'Đặc điểm', prompt: 'Phần lớn các mỏ khoáng sản nước ta có trữ lượng vừa và nhỏ.', answer: true, hint: 'Phân tán.', explanation: 'Đúng, chỉ một số loại có trữ lượng lớn.' },
      { id: 'd3q4', level: 1, type: 'fill', tag: 'Phân bố', prompt: 'A-pa-tít (nguyên liệu làm phân lân) tập trung ở tỉnh Lào …', answer: ['Cai', 'cai'], hint: 'Lào …', explanation: 'A-pa-tít tập trung ở Lào Cai, là nguyên liệu sản xuất phân lân.' },
      { id: 'd3q5', level: 2, type: 'match', tag: 'Phân bố', prompt: 'Ghép khoáng sản với nơi phân bố:', pairs: [['than', 'Quảng Ninh'], ['dầu mỏ, khí tự nhiên', 'thềm lục địa phía Nam'], ['bô-xít', 'Tây Nguyên'], ['a-pa-tít', 'Lào Cai']], hint: 'Mẹo nhớ.', explanation: 'Phân bố khoáng sản chính.' },
      { id: 'd3q6', level: 2, type: 'multi', tag: 'Loại', prompt: 'Chọn các khoáng sản năng lượng:', options: ['than', 'dầu mỏ', 'khí tự nhiên', 'a-pa-tít'], answer: [0, 1, 2], hint: 'Nhiên liệu.', explanation: 'A-pa-tít là khoáng sản phi kim loại.' },
      { id: 'd3q7', level: 2, type: 'single', tag: 'Nguyên nhân', prompt: 'Nguyên nhân khoáng sản nước ta phong phú:', options: ['lịch sử địa chất lâu dài, phức tạp, vị trí giao nhau hai vành đai sinh khoáng', 'mưa nhiều', 'dân số đông', 'có nhiều sông'], answer: 0, hint: 'Địa chất.', explanation: 'Do điều kiện địa chất.' },
      { id: 'd3q8', level: 3, type: 'single', tag: 'Vấn đề', prompt: 'Khai thác than lộ thiên ở Quảng Ninh có thể gây:', options: ['ô nhiễm bụi, nước thải, ảnh hưởng du lịch vịnh Hạ Long', 'tăng diện tích rừng', 'làm sạch nước biển', 'không ảnh hưởng'], answer: 0, hint: 'Bụi than.', explanation: 'Cần quản lí chặt chẽ và hoàn thổ.' },
      { id: 'd3q9', level: 3, type: 'truefalse', tag: 'Đặc điểm', prompt: 'Khoáng sản là tài nguyên có thể tái tạo nhanh nên khai thác bao nhiêu cũng được.', answer: false, hint: 'Hàng triệu năm.', explanation: 'Sai, khoáng sản hình thành rất lâu, là tài nguyên không tái tạo.' },
      { id: 'd3q10', level: 3, type: 'order', tag: 'Giải pháp', prompt: 'Sắp xếp các bước khai thác khoáng sản bền vững:', items: ['thăm dò, đánh giá trữ lượng', 'lập quy hoạch, đánh giá tác động môi trường', 'khai thác bằng công nghệ hiện đại, tiết kiệm', 'hoàn thổ, phục hồi môi trường sau khai thác'], hint: 'Trước – trong – sau.', explanation: 'Quy trình khai thác có trách nhiệm.' },
      { id: 'd3q11', level: 4, type: 'multi', tag: 'Giải pháp', prompt: 'Chọn các giải pháp sử dụng hợp lí khoáng sản:', options: ['khai thác tiết kiệm, tránh lãng phí', 'áp dụng công nghệ hiện đại', 'xử lí nghiêm khai thác trái phép', 'xuất khẩu thô càng nhiều càng tốt'], answer: [0, 1, 2], hint: 'Chế biến sâu.', explanation: 'Xuất khẩu thô gây lãng phí giá trị.' },
      { id: 'd3q12', level: 4, type: 'single', tag: 'Liên hệ', prompt: 'A-pa-tít được dùng chủ yếu để sản xuất:', options: ['phân lân', 'xăng dầu', 'nhôm', 'xi măng'], answer: 0, hint: 'KHTN bài 12.', explanation: 'A-pa-tít chứa phosphorus, làm phân lân.' },
    ],
  },
}
