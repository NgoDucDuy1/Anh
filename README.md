# 🎯 English Practice Exam - Ứng Dụng Luyện Thi Trắc Nghiệm Trực Tuyến

Ứng dụng web làm bài thi trắc nghiệm tiếng Anh tương tác cao cấp, được thiết kế theo phong cách hiện đại (Clean & Modern UI/UX), hỗ trợ đầy đủ 3 Unit với toàn bộ câu hỏi trắc nghiệm, bài đọc, sắp xếp câu và viết lại câu kèm lời giải chi tiết.

---

## 🌟 Tính Năng Nổi Bật

- **Giao diện hiện đại, tối giản & sang trọng:** Không có nội dung thừa thãi (không đồng hồ đếm ngược, không thông tin trường lớp rườm rà). Người dùng chỉ việc cuộn trang và chọn đáp án.
- **Trải nghiệm chọn đáp án mượt mà:** Các thẻ đáp án (A, B, C, D) có hiệu ứng hover, click chọn rõ ràng, thân thiện trên cả điện thoại di động và máy tính.
- **Tích hợp trọn vẹn 3 Units:**
  - **Unit 1:** Life Stories We Admire
  - **Unit 2:** A Multicultural World
  - **Unit 3:** Green Living
- **Chấm điểm tức thì (Instant Grading):** Nộp bài để xem điểm trên thang 10, số câu đúng/sai, cùng lời giải thích chi tiết cho từng câu hỏi.
- **Chế độ Sáng / Tối (Dark / Light Theme):** Chuyển đổi giao diện dễ dàng với 1 cú click, tự động lưu cấu hình.
- **Tự động lưu tiến độ (Auto-Save LocalStorage):** Khi tải lại trang web, các đáp án đã chọn không bị mất đi.
- **Sẵn sàng 100% cho GitHub & Vercel:** Cấu trúc web tĩnh thuần (HTML5, CSS3, ES6 JavaScript) không cần cài đặt `node_modules`, không lo lỗi build.

---

## 🚀 Hướng Dẫn Tự Đưa Lên GitHub & Vercel

### Bước 1: Khởi tạo và đưa code lên GitHub

Mở Terminal (hoặc Git Bash / PowerShell) tại thư mục này và chạy các lệnh sau:

```bash
# 1. Khởi tạo Git repository (nếu chưa có)
git init

# 2. Thêm toàn bộ file vào git
git add .

# 3. Tạo commit đầu tiên
git commit -m "feat: complete interactive english exam web app"

# 4. Đổi tên nhánh chính thành main
git branch -M main

# 5. Tạo một repository mới trên GitHub (ví dụ: english-exam), sau đó liên kết:
git remote add origin https://github.com/<tên-tài-khoản-github-của-bạn>/<tên-repo>.git

# 6. Đẩy code lên GitHub
git push -u origin main
```

---

### Bước 2: Triển khai trực tuyến lên Vercel (Miễn Phí 100%)

1. Truy cập vào **[vercel.com](https://vercel.com/)** và đăng nhập bằng tài khoản GitHub của bạn.
2. Nhấn vào nút **"Add New..."** → chọn **"Project"**.
3. Chọn Repository vừa tạo ở Bước 1 và nhấn **"Import"**.
4. Ở phần cấu hình (Build and Output Settings): **Để mặc định (không cần chỉnh sửa gì vì đây là trang web tĩnh)**.
5. Nhấn nút **"Deploy"**.
6. Sau khoảng 10 giây, Vercel sẽ cung cấp cho bạn một đường link website chính thức (ví dụ: `https://your-project.vercel.app`) để bạn chia sẻ cho bất kỳ ai làm bài thi!

---

## 📁 Cấu Trúc Thư Mục

```text
├── index.html        # Giao diện chính của ứng dụng
├── css/
│   └── style.css     # Toàn bộ hệ thống thiết kế, màu sắc, animation, Dark Mode
├── js/
│   ├── data.js       # Toàn bộ nội dung đề bài, câu hỏi, đáp án, lời giải 3 Units
│   └── app.js        # Logic điều khiển, chuyển Unit, chấm điểm, lưu trữ
├── vercel.json       # Cấu hình bảo mật và tối ưu cho Vercel
└── README.md         # Hướng dẫn chi tiết
```
