# 8. Hàm 
## 1. Định nghĩa một Hàm (Defining a Function)

Để bắt đầu, chúng ta sẽ xem xét một hàm đơn giản có tên là `greet_user()` với nhiệm vụ duy nhất là in ra một lời chào.

```Python
def greet_user():
    """Hiển thị một lời chào đơn giản."""
    print("Hello!")

greet_user()
```

### Phân tích cấu trúc:

- **Từ khóa `def`:** Đây là từ khóa thông báo cho Python biết bạn đang định nghĩa một hàm.
    
- **Định nghĩa hàm (Function Definition):** Dòng đầu tiên (`def greet_user():`) cho biết tên hàm và các thông tin cần thiết để hàm hoạt động (nếu có). Trong ví dụ này, hàm không cần thông tin bổ sung nên dấu ngoặc đơn `()` để trống. Kết thúc dòng định nghĩa luôn là một **dấu hai chấm (:)**.
    
- **Docstring:** Dòng nằm trong cặp dấu nháy kép ba (`"""..."""`) được gọi là _docstring_. Nó dùng để mô tả chức năng của hàm. Python sẽ tìm kiếm chuỗi này khi tạo tài liệu hướng dẫn cho các hàm trong chương trình.
    
- **Thân hàm (Body):** Các dòng code được thụt lề sau dòng `def` chính là thân hàm. Ở ví dụ trên, thân hàm chỉ có một dòng duy nhất là `print("Hello!")`.
    
- **Gọi hàm (Function Call):** Để thực thi mã bên trong hàm, ta cần gọi hàm bằng cách viết tên hàm kèm theo dấu ngoặc đơn: `greet_user()`.

