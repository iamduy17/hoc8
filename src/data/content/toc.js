// Mục lục cả năm theo SGK Kết nối tri thức lớp 8. id bài = <môn>-<chương>-<bài>.
// Bài có nội dung nằm trong các file lessons; bài chưa có hiện "đang biên soạn".
const ch = (id, title, lessons) => ({ id, title, lessons: lessons.map(([lid, t]) => ({ id: lid, title: t })) })

export const TOC = {
  toan: [
    ch('c1', 'Chương I. Đa thức', [
      ['toan-c1-b1', 'Bài 1. Đơn thức'], ['toan-c1-b2', 'Bài 2. Đa thức'], ['toan-c1-b3', 'Bài 3. Phép cộng và phép trừ đa thức'],
      ['toan-c1-b4', 'Bài 4. Phép nhân đa thức'], ['toan-c1-b5', 'Bài 5. Phép chia đa thức cho đơn thức']]),
    ch('c2', 'Chương II. Hằng đẳng thức đáng nhớ và ứng dụng', [
      ['toan-c2-b6', 'Bài 6. Hiệu hai bình phương. Bình phương của một tổng hay một hiệu'],
      ['toan-c2-b7', 'Bài 7. Lập phương của một tổng. Lập phương của một hiệu'],
      ['toan-c2-b8', 'Bài 8. Tổng và hiệu hai lập phương'], ['toan-c2-b9', 'Bài 9. Phân tích đa thức thành nhân tử']]),
    ch('c3', 'Chương III. Tứ giác', [
      ['toan-c3-b10', 'Bài 10. Tứ giác'], ['toan-c3-b11', 'Bài 11. Hình thang cân'], ['toan-c3-b12', 'Bài 12. Hình bình hành'],
      ['toan-c3-b13', 'Bài 13. Hình chữ nhật'], ['toan-c3-b14', 'Bài 14. Hình thoi và hình vuông']]),
    ch('c4', 'Chương IV. Định lí Thalès', [
      ['toan-c4-b15', 'Bài 15. Định lí Thalès trong tam giác'], ['toan-c4-b16', 'Bài 16. Đường trung bình của tam giác'],
      ['toan-c4-b17', 'Bài 17. Tính chất đường phân giác của tam giác']]),
    ch('c5', 'Chương V. Dữ liệu và biểu đồ', [
      ['toan-c5-b18', 'Bài 18. Thu thập và phân loại dữ liệu'], ['toan-c5-b19', 'Bài 19. Biểu diễn dữ liệu bằng bảng, biểu đồ'],
      ['toan-c5-b20', 'Bài 20. Phân tích số liệu thống kê dựa vào biểu đồ']]),
    ch('c6', 'Chương VI. Phân thức đại số', [
      ['toan-c6-b21', 'Bài 21. Phân thức đại số'], ['toan-c6-b22', 'Bài 22. Tính chất cơ bản của phân thức đại số'],
      ['toan-c6-b23', 'Bài 23. Phép cộng và phép trừ phân thức đại số'], ['toan-c6-b24', 'Bài 24. Phép nhân và phép chia phân thức đại số']]),
    ch('c7', 'Chương VII. Phương trình bậc nhất và hàm số bậc nhất', [
      ['toan-c7-b25', 'Bài 25. Phương trình bậc nhất một ẩn'], ['toan-c7-b26', 'Bài 26. Giải bài toán bằng cách lập phương trình'],
      ['toan-c7-b27', 'Bài 27. Khái niệm hàm số và đồ thị của hàm số'], ['toan-c7-b28', 'Bài 28. Hàm số bậc nhất và đồ thị của hàm số bậc nhất'],
      ['toan-c7-b29', 'Bài 29. Hệ số góc của đường thẳng']]),
    ch('c8', 'Chương VIII. Mở đầu về tính xác suất của biến cố', [
      ['toan-c8-b30', 'Bài 30. Kết quả có thể và kết quả thuận lợi'], ['toan-c8-b31', 'Bài 31. Cách tính xác suất của biến cố bằng tỉ số'],
      ['toan-c8-b32', 'Bài 32. Mối liên hệ giữa xác suất thực nghiệm với xác suất và ứng dụng']]),
    ch('c9', 'Chương IX. Tam giác đồng dạng', [
      ['toan-c9-b33', 'Bài 33. Hai tam giác đồng dạng'], ['toan-c9-b34', 'Bài 34. Ba trường hợp đồng dạng của hai tam giác'],
      ['toan-c9-b35', 'Bài 35. Định lí Pythagore và ứng dụng'], ['toan-c9-b36', 'Bài 36. Các trường hợp đồng dạng của hai tam giác vuông'],
      ['toan-c9-b37', 'Bài 37. Hình đồng dạng']]),
    ch('c10', 'Chương X. Một số hình khối trong thực tiễn', [
      ['toan-c10-b38', 'Bài 38. Hình chóp tam giác đều'], ['toan-c10-b39', 'Bài 39. Hình chóp tứ giác đều']]),
  ],

  van: [
    ch('b1', 'Bài 1. Câu chuyện của lịch sử', [
      ['van-b1-1', 'Lá cờ thêu sáu chữ vàng (Nguyễn Huy Tưởng)'], ['van-b1-2', 'Quang Trung đại phá quân Thanh (Ngô gia văn phái)'],
      ['van-b1-3', 'Ta đi tới (Tố Hữu)'], ['van-b1-4', 'Tiếng Việt: Biệt ngữ xã hội, từ ngữ địa phương'], ['van-b1-5', 'Viết: Bài văn kể lại một chuyến đi']]),
    ch('b2', 'Bài 2. Vẻ đẹp cổ điển', [
      ['van-b2-1', 'Thu điếu (Nguyễn Khuyến)'], ['van-b2-2', 'Thiên Trường vãn vọng (Trần Nhân Tông)'], ['van-b2-3', 'Ca Huế trên sông Hương'],
      ['van-b2-4', 'Tiếng Việt: Từ tượng hình, từ tượng thanh; đảo ngữ'], ['van-b2-5', 'Viết: Phân tích một bài thơ thất ngôn bát cú / tứ tuyệt Đường luật']]),
    ch('b3', 'Bài 3. Lời sông núi', [
      ['van-b3-1', 'Hịch tướng sĩ (Trần Quốc Tuấn)'], ['van-b3-2', 'Tinh thần yêu nước của nhân dân ta (Hồ Chí Minh)'], ['van-b3-3', 'Nam quốc sơn hà'],
      ['van-b3-4', 'Tiếng Việt: Đoạn văn diễn dịch, quy nạp, song song, phối hợp'], ['van-b3-5', 'Viết: Bài văn nghị luận về một vấn đề đời sống']]),
    ch('b4', 'Bài 4. Tiếng cười trào phúng trong thơ', [
      ['van-b4-1', 'Lễ xướng danh khoa Đinh Dậu (Trần Tế Xương)'], ['van-b4-2', 'Lai Tân (Hồ Chí Minh)'],
      ['van-b4-3', 'Một số giọng điệu của tiếng cười trong thơ trào phúng'], ['van-b4-4', 'Tiếng Việt: Từ Hán Việt; sắc thái nghĩa'], ['van-b4-5', 'Viết: Phân tích một tác phẩm văn học (thơ trào phúng)']]),
    ch('b5', 'Bài 5. Những câu chuyện hài', [
      ['van-b5-1', 'Trưởng giả học làm sang (Mô-li-e)'], ['van-b5-2', 'Chùm truyện cười dân gian Việt Nam'], ['van-b5-3', 'Chùm ca dao trào phúng'],
      ['van-b5-4', 'Tiếng Việt: Nghĩa tường minh và nghĩa hàm ẩn; câu hỏi tu từ'], ['van-b5-5', 'Viết: Bài văn nghị luận về một hiện tượng đời sống']]),
    ch('b6', 'Bài 6. Chân dung cuộc sống', [
      ['van-b6-1', 'Mắt sói (Đa-ni-en Pen-nắc)'], ['van-b6-2', 'Lặng lẽ Sa Pa (Nguyễn Thành Long)'], ['van-b6-3', 'Bếp lửa (Bằng Việt)'],
      ['van-b6-4', 'Tiếng Việt: Trợ từ, thán từ'], ['van-b6-5', 'Viết: Phân tích một tác phẩm truyện']]),
    ch('b7', 'Bài 7. Tin yêu và ước vọng', [
      ['van-b7-1', 'Đồng chí (Chính Hữu)'], ['van-b7-2', 'Lá đỏ (Nguyễn Đình Thi)'], ['van-b7-3', 'Những ngôi sao xa xôi (Lê Minh Khuê)'],
      ['van-b7-4', 'Tiếng Việt: Biện pháp tu từ; từ địa phương'], ['van-b7-5', 'Viết: Đoạn văn ghi lại cảm nghĩ về một bài thơ tự do']]),
    ch('b8', 'Bài 8. Nhà văn và trang viết', [
      ['van-b8-1', 'Nhà thơ của quê hương làng cảnh Việt Nam (Xuân Diệu)'], ['van-b8-2', 'Đọc văn – cuộc chơi tìm ý nghĩa (Trần Đình Sử)'], ['van-b8-3', 'Xe đêm (Pau-tốp-xki)'],
      ['van-b8-4', 'Tiếng Việt: Thành phần biệt lập'], ['van-b8-5', 'Viết: Bài văn phân tích một tác phẩm (truyện)']]),
    ch('b9', 'Bài 9. Hôm nay và ngày mai', [
      ['van-b9-1', 'Miền châu thổ sông Cửu Long cần chuyển đổi từ sống chung sang chào đón lũ'], ['van-b9-2', 'Choáng ngợp và đau đớn những cảnh báo từ loạt phim Hành tinh của chúng ta'],
      ['van-b9-3', 'Diễn từ ứng khẩu của thủ lĩnh da đỏ Xi-át-tơn'], ['van-b9-4', 'Tiếng Việt: Câu phủ định, câu khẳng định'], ['van-b9-5', 'Viết: Văn bản kiến nghị về một vấn đề đời sống']]),
    ch('b10', 'Bài 10. Sách – người bạn đồng hành', [
      ['van-b10-1', 'Đọc sách: Thách thức và cơ hội'], ['van-b10-2', 'Viết: Giới thiệu một cuốn sách'], ['van-b10-3', 'Ôn tập học kì II']]),
  ],

  anh: [
    ch('hk1', 'Học kì I (Global Success)', [
      ['anh-u1', 'Unit 1. Leisure Time'], ['anh-u2', 'Unit 2. Life in the Countryside'], ['anh-u3', 'Unit 3. Teenagers'],
      ['anh-u4', 'Unit 4. Ethnic Groups of Viet Nam'], ['anh-u5', 'Unit 5. Our Customs and Traditions'], ['anh-u6', 'Unit 6. Lifestyles']]),
    ch('hk2', 'Học kì II', [
      ['anh-u7', 'Unit 7. Environmental Protection'], ['anh-u8', 'Unit 8. Shopping'], ['anh-u9', 'Unit 9. Natural Disasters'],
      ['anh-u10', 'Unit 10. Communication in the Future'], ['anh-u11', 'Unit 11. Science and Technology'], ['anh-u12', 'Unit 12. Life on Other Planets']]),
  ],

  khtn: [
    ch('c1', 'Chương I. Phản ứng hoá học', [
      ['khtn-b1', 'Bài 1. Sử dụng một số hoá chất, thiết bị cơ bản trong phòng thí nghiệm'], ['khtn-b2', 'Bài 2. Phản ứng hoá học'],
      ['khtn-b3', 'Bài 3. Mol và tỉ khối chất khí'], ['khtn-b4', 'Bài 4. Dung dịch và nồng độ'],
      ['khtn-b5', 'Bài 5. Định luật bảo toàn khối lượng và phương trình hoá học'], ['khtn-b6', 'Bài 6. Tính theo phương trình hoá học'],
      ['khtn-b7', 'Bài 7. Tốc độ phản ứng và chất xúc tác']]),
    ch('c2', 'Chương II. Một số hợp chất thông dụng', [
      ['khtn-b8', 'Bài 8. Acid'], ['khtn-b9', 'Bài 9. Base. Thang pH'], ['khtn-b10', 'Bài 10. Oxide'], ['khtn-b11', 'Bài 11. Muối'], ['khtn-b12', 'Bài 12. Phân bón hoá học']]),
    ch('c3', 'Chương III. Khối lượng riêng và áp suất', [
      ['khtn-b13', 'Bài 13. Khối lượng riêng'], ['khtn-b14', 'Bài 14. Thực hành xác định khối lượng riêng'], ['khtn-b15', 'Bài 15. Áp suất trên một bề mặt'],
      ['khtn-b16', 'Bài 16. Áp suất chất lỏng. Áp suất khí quyển'], ['khtn-b17', 'Bài 17. Lực đẩy Archimedes']]),
    ch('c4', 'Chương IV. Tác dụng làm quay của lực', [
      ['khtn-b18', 'Bài 18. Tác dụng làm quay của lực. Moment lực'], ['khtn-b19', 'Bài 19. Đòn bẩy và ứng dụng']]),
    ch('c5', 'Chương V. Điện', [
      ['khtn-b20', 'Bài 20. Hiện tượng nhiễm điện do cọ xát'], ['khtn-b21', 'Bài 21. Dòng điện, nguồn điện'], ['khtn-b22', 'Bài 22. Mạch điện đơn giản'],
      ['khtn-b23', 'Bài 23. Tác dụng của dòng điện'], ['khtn-b24', 'Bài 24. Cường độ dòng điện và hiệu điện thế'], ['khtn-b25', 'Bài 25. Thực hành đo cường độ dòng điện và hiệu điện thế']]),
    ch('c6', 'Chương VI. Nhiệt', [
      ['khtn-b26', 'Bài 26. Năng lượng nhiệt và nội năng'], ['khtn-b27', 'Bài 27. Thực hành đo năng lượng nhiệt bằng joulemeter'],
      ['khtn-b28', 'Bài 28. Sự truyền nhiệt'], ['khtn-b29', 'Bài 29. Sự nở vì nhiệt']]),
    ch('c7', 'Chương VII. Sinh học cơ thể người', [
      ['khtn-b30', 'Bài 30. Khái quát về cơ thể người'], ['khtn-b31', 'Bài 31. Hệ vận động ở người'], ['khtn-b32', 'Bài 32. Dinh dưỡng và tiêu hoá ở người'],
      ['khtn-b33', 'Bài 33. Máu và hệ tuần hoàn của cơ thể người'], ['khtn-b34', 'Bài 34. Hệ hô hấp ở người'], ['khtn-b35', 'Bài 35. Hệ bài tiết ở người'],
      ['khtn-b36', 'Bài 36. Điều hoà môi trường trong của cơ thể người'], ['khtn-b37', 'Bài 37. Hệ thần kinh và các giác quan ở người'],
      ['khtn-b38', 'Bài 38. Hệ nội tiết ở người'], ['khtn-b39', 'Bài 39. Da và điều hoà thân nhiệt ở người'], ['khtn-b40', 'Bài 40. Sinh sản ở người']]),
    ch('c8', 'Chương VIII. Sinh vật và môi trường', [
      ['khtn-b41', 'Bài 41. Môi trường và các nhân tố sinh thái'], ['khtn-b42', 'Bài 42. Quần thể sinh vật'], ['khtn-b43', 'Bài 43. Quần xã sinh vật'],
      ['khtn-b44', 'Bài 44. Hệ sinh thái'], ['khtn-b45', 'Bài 45. Sinh quyển'], ['khtn-b46', 'Bài 46. Cân bằng tự nhiên'], ['khtn-b47', 'Bài 47. Bảo vệ môi trường']]),
  ],

  sudia: [
    ch('ls1', 'Lịch sử – Chương 1. Châu Âu và Bắc Mỹ từ nửa sau thế kỉ XVI đến thế kỉ XVIII', [
      ['su-b1', 'Bài 1. Cách mạng tư sản Anh và chiến tranh giành độc lập của 13 thuộc địa Anh ở Bắc Mỹ'],
      ['su-b2', 'Bài 2. Cách mạng tư sản Pháp cuối thế kỉ XVIII'], ['su-b3', 'Bài 3. Cách mạng công nghiệp']]),
    ch('ls2', 'Lịch sử – Chương 2. Đông Nam Á từ nửa sau thế kỉ XVI đến giữa thế kỉ XIX', [
      ['su-b4', 'Bài 4. Đông Nam Á từ nửa sau thế kỉ XVI đến giữa thế kỉ XIX']]),
    ch('ls3', 'Lịch sử – Chương 3. Việt Nam từ đầu thế kỉ XVI đến thế kỉ XVIII', [
      ['su-b5', 'Bài 5. Cuộc xung đột Nam – Bắc triều và Trịnh – Nguyễn'], ['su-b6', 'Bài 6. Công cuộc khai phá vùng đất phía Nam từ thế kỉ XVI đến thế kỉ XVIII'],
      ['su-b7', 'Bài 7. Khởi nghĩa nông dân ở Đàng Ngoài thế kỉ XVIII'], ['su-b8', 'Bài 8. Phong trào Tây Sơn']]),
    ch('ls4', 'Lịch sử – Chương 4. Châu Âu và nước Mỹ từ cuối thế kỉ XVIII đến đầu thế kỉ XX', [
      ['su-b9', 'Bài 9. Tình hình kinh tế, chính trị, xã hội Pháp, Anh, Đức, Mỹ cuối thế kỉ XIX – đầu thế kỉ XX'], ['su-b10', 'Bài 10. Sự hình thành chủ nghĩa đế quốc ở các nước Âu – Mỹ'],
      ['su-b11', 'Bài 11. Phong trào công nhân từ cuối thế kỉ XVIII đến đầu thế kỉ XX và sự ra đời của chủ nghĩa xã hội khoa học'],
      ['su-b12', 'Bài 12. Chiến tranh thế giới thứ nhất (1914 – 1918) và Cách mạng tháng Mười Nga năm 1917']]),
    ch('ls5', 'Lịch sử – Chương 5. Sự phát triển của khoa học, kĩ thuật, văn học, nghệ thuật trong các thế kỉ XVIII – XIX', [
      ['su-b13', 'Bài 13. Sự phát triển của khoa học, kĩ thuật, văn học, nghệ thuật trong các thế kỉ XVIII – XIX']]),
    ch('ls6', 'Lịch sử – Chương 6. Châu Á từ nửa sau thế kỉ XIX đến đầu thế kỉ XX', [
      ['su-b14', 'Bài 14. Trung Quốc và Nhật Bản từ nửa sau thế kỉ XIX đến đầu thế kỉ XX'], ['su-b15', 'Bài 15. Ấn Độ và Đông Nam Á từ nửa sau thế kỉ XIX đến đầu thế kỉ XX']]),
    ch('ls7', 'Lịch sử – Chương 7. Việt Nam từ thế kỉ XIX đến đầu thế kỉ XX', [
      ['su-b16', 'Bài 16. Việt Nam dưới thời Nguyễn (nửa đầu thế kỉ XIX)'], ['su-b17', 'Bài 17. Cuộc kháng chiến chống thực dân Pháp xâm lược từ năm 1858 đến năm 1884'],
      ['su-b18', 'Bài 18. Phong trào chống Pháp trong những năm 1885 – 1896'], ['su-b19', 'Bài 19. Phong trào yêu nước chống Pháp ở Việt Nam từ đầu thế kỉ XX đến năm 1917']]),
    ch('dl1', 'Địa lí – Chương 1. Vị trí địa lí và phạm vi lãnh thổ, địa hình và khoáng sản Việt Nam', [
      ['dia-b1', 'Bài 1. Vị trí địa lí và phạm vi lãnh thổ Việt Nam'], ['dia-b2', 'Bài 2. Địa hình Việt Nam'], ['dia-b3', 'Bài 3. Khoáng sản Việt Nam']]),
    ch('dl2', 'Địa lí – Chương 2. Khí hậu và thuỷ văn Việt Nam', [
      ['dia-b4', 'Bài 4. Khí hậu Việt Nam'], ['dia-b5', 'Bài 5. Thực hành: Vẽ và phân tích biểu đồ khí hậu'], ['dia-b6', 'Bài 6. Thuỷ văn Việt Nam'],
      ['dia-b7', 'Bài 7. Vai trò của tài nguyên khí hậu và tài nguyên nước đối với sự phát triển kinh tế – xã hội'], ['dia-b8', 'Bài 8. Tác động của biến đổi khí hậu đối với khí hậu và thuỷ văn Việt Nam']]),
    ch('dl3', 'Địa lí – Chương 3. Thổ nhưỡng và sinh vật Việt Nam', [
      ['dia-b9', 'Bài 9. Thổ nhưỡng Việt Nam'], ['dia-b10', 'Bài 10. Sinh vật Việt Nam']]),
    ch('dl4', 'Địa lí – Chương 4. Biển đảo Việt Nam', [
      ['dia-b11', 'Bài 11. Phạm vi Biển Đông. Vùng biển đảo và đặc điểm tự nhiên vùng biển đảo Việt Nam'], ['dia-b12', 'Bài 12. Môi trường và tài nguyên biển đảo Việt Nam']]),
    ch('cd', 'Chủ đề chung', [
      ['sudia-cd1', 'Chủ đề 1. Văn minh châu thổ sông Hồng và sông Cửu Long'], ['sudia-cd2', 'Chủ đề 2. Bảo vệ chủ quyền, các quyền và lợi ích hợp pháp của Việt Nam ở Biển Đông']]),
  ],

  congnghe: [
    ch('c1', 'Chương I. Vẽ kĩ thuật', [
      ['cn-b1', 'Bài 1. Một số tiêu chuẩn trình bày bản vẽ kĩ thuật'], ['cn-b2', 'Bài 2. Hình chiếu vuông góc'], ['cn-b3', 'Bài 3. Bản vẽ chi tiết'],
      ['cn-b4', 'Bài 4. Bản vẽ lắp'], ['cn-b5', 'Bài 5. Bản vẽ nhà']]),
    ch('c2', 'Chương II. Cơ khí', [
      ['cn-b6', 'Bài 6. Vật liệu cơ khí'], ['cn-b7', 'Bài 7. Truyền và biến đổi chuyển động'], ['cn-b8', 'Bài 8. Gia công cơ khí bằng tay'],
      ['cn-b9', 'Bài 9. Ngành nghề phổ biến trong lĩnh vực cơ khí'], ['cn-b10', 'Bài 10. Dự án: Gia công chi tiết bằng dụng cụ cầm tay']]),
    ch('c3', 'Chương III. An toàn điện', [
      ['cn-b11', 'Bài 11. Tai nạn điện'], ['cn-b12', 'Bài 12. Biện pháp an toàn điện'], ['cn-b13', 'Bài 13. Sơ cứu người bị tai nạn điện']]),
    ch('c4', 'Chương IV. Kĩ thuật điện', [
      ['cn-b14', 'Bài 14. Khái quát về mạch điện'], ['cn-b15', 'Bài 15. Cảm biến và mô đun cảm biến'], ['cn-b16', 'Bài 16. Mạch điện điều khiển sử dụng mô đun cảm biến'],
      ['cn-b17', 'Bài 17. Ngành nghề trong lĩnh vực kĩ thuật điện'], ['cn-b18', 'Bài 18. Dự án: Lắp ráp mạch điện điều khiển sử dụng mô đun cảm biến']]),
  ],

  tinhoc: [
    ch('cd1', 'Chủ đề 1. Máy tính và cộng đồng', [['th-b1', 'Bài 1. Lược sử công cụ tính toán']]),
    ch('cd2', 'Chủ đề 2. Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin', [['th-b2', 'Bài 2. Thông tin trong môi trường số'], ['th-b3', 'Bài 3. Thực hành: Khai thác thông tin số']]),
    ch('cd3', 'Chủ đề 3. Đạo đức, pháp luật và văn hoá trong môi trường số', [['th-b4', 'Bài 4. Đạo đức và văn hoá trong sử dụng công nghệ kĩ thuật số']]),
    ch('cd4', 'Chủ đề 4. Ứng dụng tin học', [
      ['th-b5', 'Bài 5. Sử dụng bảng tính giải quyết bài toán thực tế'], ['th-b6', 'Bài 6. Sắp xếp và lọc dữ liệu'], ['th-b7', 'Bài 7. Trực quan hoá dữ liệu'],
      ['th-b8a', 'Bài 8a. Làm việc với danh sách dạng liệt kê và hình ảnh trong văn bản'], ['th-b9a', 'Bài 9a. Tạo đầu trang, chân trang cho văn bản'],
      ['th-b10a', 'Bài 10a. Định dạng nâng cao cho trang chiếu'], ['th-b11a', 'Bài 11a. Sử dụng bản mẫu tạo bài trình chiếu'],
      ['th-b8b', 'Bài 8b. Phần mềm chỉnh sửa ảnh (tự chọn)'], ['th-b9b', 'Bài 9b. Thay đổi khung hình, kích thước ảnh (tự chọn)'],
      ['th-b10b', 'Bài 10b. Thêm văn bản, tạo hiệu ứng cho ảnh (tự chọn)'], ['th-b11b', 'Bài 11b. Thực hành tổng hợp (tự chọn)']]),
    ch('cd5', 'Chủ đề 5. Giải quyết vấn đề với sự trợ giúp của máy tính', [
      ['th-b12', 'Bài 12. Từ thuật toán đến chương trình'], ['th-b13', 'Bài 13. Biểu diễn dữ liệu'], ['th-b14', 'Bài 14. Cấu trúc điều khiển'], ['th-b15', 'Bài 15. Gỡ lỗi']]),
    ch('cd6', 'Chủ đề 6. Hướng nghiệp với tin học', [['th-b16', 'Bài 16. Tin học với nghề nghiệp']]),
  ],

  gdcd: [
    ch('hk1', 'Học kì I', [
      ['gdcd-b1', 'Bài 1. Tự hào về truyền thống dân tộc Việt Nam'], ['gdcd-b2', 'Bài 2. Tôn trọng sự đa dạng của các dân tộc'],
      ['gdcd-b3', 'Bài 3. Lao động cần cù, sáng tạo'], ['gdcd-b4', 'Bài 4. Bảo vệ lẽ phải'], ['gdcd-b5', 'Bài 5. Bảo vệ môi trường và tài nguyên thiên nhiên']]),
    ch('hk2', 'Học kì II', [
      ['gdcd-b6', 'Bài 6. Xác định mục tiêu cá nhân'], ['gdcd-b7', 'Bài 7. Phòng, chống bạo lực gia đình'], ['gdcd-b8', 'Bài 8. Lập kế hoạch chi tiêu'],
      ['gdcd-b9', 'Bài 9. Phòng ngừa tai nạn vũ khí, cháy, nổ và các chất độc hại'], ['gdcd-b10', 'Bài 10. Quyền và nghĩa vụ lao động của công dân']]),
  ],

  httnhn: [
    ch('hk1', 'Học kì I', [
      ['hd-cd1', 'Chủ đề 1. Em với nhà trường'], ['hd-cd2', 'Chủ đề 2. Khám phá bản thân'], ['hd-cd3', 'Chủ đề 3. Trách nhiệm với bản thân'],
      ['hd-cd4', 'Chủ đề 4. Rèn luyện bản thân'], ['hd-cd5', 'Chủ đề 5. Em với gia đình']]),
    ch('hk2', 'Học kì II', [
      ['hd-cd6', 'Chủ đề 6. Em với cộng đồng'], ['hd-cd7', 'Chủ đề 7. Em với thiên nhiên và môi trường'],
      ['hd-cd8', 'Chủ đề 8. Khám phá thế giới nghề nghiệp'], ['hd-cd9', 'Chủ đề 9. Hiểu bản thân – chọn đúng nghề']]),
  ],
}
