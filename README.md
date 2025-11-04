# 🎬 Torung Phim Web

Kiến trúc frontend theo hướng feature-based với Next.js (App Router).

---

## 📁 Thư mục chính và mục đích sử dụng

- `src/app/`
  - Vỏ ứng dụng và route theo App Router. Đây là nơi lắp ghép các section/feature để tạo nên trang.

- `src/components/`
  - `common/`: Các component UI dùng chung toàn dự án (header, footer, thẻ thông tin, card, navigation...). Không chứa logic dữ liệu, chỉ nhận dữ liệu qua props.
  - `ui/`: Các thành phần UI cơ bản (button, input, dialog, form...). Dùng làm “building blocks” cho component cấp cao hơn.

- `src/features/`
  - Gom nhóm theo tính năng (feature).
  - `home/`: Code cho trang chủ.
    - `components/`: Các section hiển thị (Hero, các carousel Style1..6, TopicSection, CommunityTable...). Mang tính trình bày, nhận data qua props.
    - `constants/`: Dữ liệu mock/const phục vụ trang chủ (anime, movies, topics, comments...). `app/page.tsx` sẽ import và truyền xuống component.
    - `types/`: Kiểu dữ liệu dùng riêng cho feature home (giúp đồng bộ types giữa các component).
  - `auth/`: Màn hình/logic liên quan đăng nhập/đăng ký.
    - `components/`: Modal, form...
    - `hooks/`: State/UI logic cho auth (vd: mở/đóng modal).
    - `constants/`, `services/`, `types/`: Cấu hình, gọi API và kiểu dữ liệu cho auth.

- `src/constants/`
  - Hằng số dùng chung toàn app, không thuộc riêng feature nào (vd: mapping màu, mock data dùng chung).

- `src/hooks/`
  - Hook dùng chung (vd: hook theo dõi scroll cho header). Có thể dùng ở bất kỳ component nào.

- `src/lib/`
  - Tiện ích cấp ứng dụng: helper, utils, validations. Không gắn với UI hay một feature cụ thể.

- `src/services/`, `src/types/`, `src/utils/`
  - Dịch vụ dùng chung (client/API), kiểu dữ liệu toàn cục, và hàm tiện ích dùng lại nhiều nơi.

---

Gợi ý luồng dữ liệu: `src/app/page.tsx` nhập dữ liệu tĩnh từ `features/home/constants` và truyền xuống các component trình bày trong `features/home/components`. Khi tích hợp API thật, tạo hook theo feature (trong `features/<feature>/hooks`) để lấy dữ liệu rồi vẫn truyền xuống component.
