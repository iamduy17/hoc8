# Học 8 – web học bài lớp 8 (Kết nối tri thức)

React + Vite, không framework nặng, deploy lên Netlify bằng cách kéo thả hoặc nối Git.

## Chạy thử trên máy

```bash
npm install
npm run dev        # mở http://localhost:5173
```

Chưa cấu hình Supabase thì app tự chạy ở chế độ lưu trên máy (localStorage).
Mã PIN trang gia sư mặc định: `1234` (đổi bằng biến `VITE_ADMIN_PIN`).

## Deploy lên Netlify

1. Đẩy thư mục này lên GitHub (hoặc kéo thả thư mục `dist` sau khi `npm run build`).
2. Netlify > Add new site > Import from Git. Build command và publish dir đã có trong `netlify.toml`.
3. Site settings > Environment variables, thêm:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
   - `VITE_ADMIN_PIN` (mã vào trang gia sư)
4. Deploy lại. Xong.

## Cấu hình Supabase (để theo dõi học sinh từ xa)

1. Tạo project miễn phí tại supabase.com.
2. SQL Editor > dán nội dung `supabase/schema.sql` > Run.
3. Project Settings > API: copy `Project URL` và `anon public key` vào biến môi trường ở trên.

## Thêm bài học mới

Mỗi môn là một file trong `src/data/content/` (xem `toan.js` làm mẫu), gồm:

```js
{
  id: 'toan-c1-b2', subject: 'toan', chapter: 'Chương I. Đa thức', title: 'Bài 2. Đa thức', minutes: 12,
  summary: ['3–5 ý, mỗi ý 1 dòng'],
  keywords: [{ term, def }],
  cards: [{ title, body, example, emoji | svg }],   // mỗi thẻ 1 ý, có hình
  traps: ['lỗi hay gặp'],
  mindmap: { root, branches: [{ label, children: [] }] },
  quickCheck: ['q1', 'q4', 'q8'],                     // 3 câu kiểm tra nhanh
  questions: [ ... ]
}
```

Dạng câu hỏi (`type`) và trường đi kèm:

| type | trường | ghi chú |
|---|---|---|
| `single` | `options`, `answer` (index) | 1 đáp án |
| `multi` | `options`, `answer` (mảng index) | nhiều đáp án |
| `truefalse` | `answer` (true/false) | |
| `fill` | `answer` (mảng chuỗi chấp nhận) | so sánh bỏ khoảng trắng, `^2` = `²` |
| `order` | `items` (theo thứ tự đúng) | app tự xáo |
| `match` | `pairs` ([[trái, phải], …]) | |

Mỗi câu có `level` (1 Dễ · 2 Vừa · 3 Khó · 4 Cao thủ), `tag` (chủ đề, dùng để admin thấy học sinh yếu chỗ nào), `hint`, `explanation`.

Sau khi viết file, đăng ký vào `src/data/content/index.js` (LESSONS và CHAPTERS).

## Thời khóa biểu

`src/data/timetable.js`. Khi trường đổi TKB chỉ sửa file này. Tên tiết → môn trong app nằm ở `PERIOD_TO_SUBJECT`.

## Bản demo 1 file

```bash
SINGLE=1 VITE_ROUTER=memory npm run build   # dist/index.html mở trực tiếp không cần server
```

## Lộ trình tiếp theo

- [x] Khung, đăng nhập theo tên, lịch hôm nay / ngày mai, cài đặt
- [x] Bài học (tóm tắt, keyword flashcard, thẻ, bẫy, sơ đồ, kiểm tra nhanh)
- [x] Bài tập 6 dạng, 4 mức, luyện tập / kiểm tra tính giờ, lịch sử, ôn lại theo 1-3-7 ngày
- [x] Admin: danh sách học sinh, tiến độ, chỗ hay sai, gửi lời nhắc
- [x] In / xuất PDF bài học + bài tập + đáp án (nút 🖨️ trong bài)
- [x] Kiểm tra 15', giữa kì, cuối kì theo ma trận đề; in đề + đáp án cho gia sư
- [x] Giao bài có hạn nộp từ trang admin, tự đánh dấu xong khi học sinh làm
- [x] PWA (cài lên màn hình chính) + nhắc 19h nếu chưa học + âm thanh
- [x] Mục lục cả năm 9 môn (236 bài) trong `src/data/content/toc.js`
- [x] Nội dung bài học: đủ 236/236 bài, khoảng 2 860 câu hỏi (xem TIẾN ĐỘ bên dưới)

## Tiến độ nội dung

| Môn | Có bài / tổng | Ghi chú |
|---|---|---|
| Toán | 39 / 39 | Hoàn tất cả năm |
| Văn | 48 / 48 | Hoàn tất cả năm |
| Anh | 12 / 12 | Hoàn tất, từ vựng có IPA + nghĩa + ví dụ |
| KHTN | 47 / 47 | Hoàn tất cả năm |
| Sử – Địa | 33 / 33 | Hoàn tất cả năm |
| Công nghệ | 18 / 18 | Hoàn tất cả năm |
| Tin học | 20 / 20 | Hoàn tất (gồm cả hai nhánh 8a–11a và 8b–11b; có câu đọc mã chương trình) |
| GDCD | 10 / 10 | Hoàn tất |
| HĐTN – HN | 9 / 9 | Hoàn tất |
| **Tổng** | **236 / 236** | **khoảng 2 860 câu hỏi** |

Mỗi bài mới: thêm vào file của môn trong `src/data/content/`, spread vào `LESSONS` ở `index.js`.

## Tính năng nhập liệu

- Tiếng Anh: nút 🔊 nghe từ, nghe chậm, nghe câu ví dụ, nghe cả danh sách; câu hỏi phát âm có nút nghe từng đáp án. Dùng Web Speech API sẵn trong trình duyệt; đổi giọng Anh/Mỹ trong mục Tôi.
- Toán: ô điền có bàn phím x, y, ², ³, ⁴, +, −, ·, /, (, ), √; gõ `x^2` tự thành `x²`; bật "xⁿ mũ" để số gõ vào thành số mũ. Chấm điểm bỏ qua khoảng trắng và dấu nhân.
- KHTN: gõ thường `H2SO4` vẫn được chấm đúng; có phím chỉ số dưới ₂ ₃ ₄ và →.

## Ma trận đề kiểm tra

`src/lib/tests.js`: 15 phút = 10 câu (40% dễ, 40% vừa, 20% khó); giữa kì = 20 câu; cuối kì = 30 câu. Đề rút từ tất cả bài đã có của môn, ngân hàng nhỏ thì tự bù bằng câu mức khác.
