# 1. Biến

## 1. Biến là gì? (Variables)

- Trong Python, mỗi **biến (variable)** được kết nối với một **giá trị (value)**.
- Khi viết:
```Python
message = "Hello Python world!"
print(message)
```

- Trình thông dịch Python sẽ thực hiện hai việc:
	1. Liên kết biến tên là `message` với dòng chữ "Hello Python world!".
	2. Khi đến lệnh `print`, nó sẽ in giá trị đang được liên kết với biến đó ra màn hình.
    
- **Khả năng thay đổi:** Có thể thay đổi giá trị của biến bất kỳ lúc nào. Python sẽ luôn ghi nhớ giá trị mới nhất của nó.
```python
message = "Hello Python world!" 
print(message) 
message = "Hello Python Crash Course world!" 
print(message)
```
```
Hello Python world! 
Hello Python Crash Course world!
```

## 2. Quy tắc đặt tên biến (Naming Rules)

- **Ký tự cho phép:** Tên biến chỉ có thể chứa chữ cái, số và dấu gạch dưới (`_`).

- **Ký tự bắt đầu:** Có thể bắt đầu bằng chữ cái hoặc dấu gạch dưới, nhưng **không được bắt đầu bằng số** (Ví dụ: `message_1` là hợp lệ, nhưng `1_message` là lỗi).
    
- **Khoảng trắng:** Không được chứa khoảng trắng. Sử dụng dấu gạch dưới để phân cách các từ (Ví dụ: `greeting_message`).
    
- **Từ khóa:** Tránh dùng các từ khóa có sẵn của Python (như `print`, `if`, `while`...) làm tên biến.
    
- **Tính mô tả:** Tên biến nên ngắn gọn nhưng phải có ý nghĩa (Ví dụ: `name` tốt hơn `n`, `student_name` tốt hơn `s_n`).
    
- **Ký tự dễ nhầm lẫn:** Cẩn thận khi dùng chữ `l` (lờ thấp) và chữ `O` (ô) vì chúng dễ bị nhầm với số `1` và số `0`.


> **Lưu ý:** Hiện tại bạn nên đặt tên biến bằng **chữ thường**. Việc **dùng chữ hoa** có ý nghĩa đặc biệt khác mà chúng ta sẽ học sau.

## 3. Tránh lỗi đặt tên (Avoiding Name Errors)

- Lỗi là điều bình thường trong lập trình. Một lỗi phổ biến nhất là **gõ sai tên biến**.

- Khi gặp lỗi, Python sẽ cung cấp một bản **traceback**:

	- Nó cho biết lỗi xảy ra ở dòng nào.
    
	- Loại lỗi thường gặp là `NameError: name '...' is not defined` (Tên biến chưa được định nghĩa).

## 4. Biến là những chiếc "Nhãn" (Variables Are Labels)

- Một quan điểm phổ biến là biến giống như một cái "hộp" để chứa giá trị. Tuy nhiên, trong Python, cách hiểu chính xác hơn là: **Biến là những chiếc nhãn (labels)**.

	- Thay vì nghĩ giá trị nằm trong hộp, hãy nghĩ rằng giá trị là một đối tượng và biến là cái nhãn được dán lên đối tượng đó.
    
	- Có thể nói: "Biến `message` đang **tham chiếu (reference)** đến giá trị đó".
    
---

# CHUỖI (STRING)
## 1. Khái niệm về String (Chuỗi)

Trong Python, một chuỗi (**string**) đơn giản là một loạt các ký tự. Bất kỳ thứ gì nằm trong dấu ngoặc đều được coi là chuỗi.

- **Cách khai báo:** Có thể sử dụng dấu ngoặc đơn (`'`) hoặc dấu ngoặc kép (`"`) để tạo chuỗi.

- **Sự linh hoạt:** Dễ dàng lồng các dấu nháy hoặc dấu cách đoạn vào trong chuỗi.

```Python
"This is a string."
'This is also a string.'
'I told my friend, "Python is my favorite language!"'
"The language 'Python' is named after Monty Python, not the snake."
```

## 2. Thay đổi Case (Chữ hoa/Chữ thường) trong Chuỗi

Python cung cấp các **phương thức (methods)** để thay đổi định dạng chữ viết của chuỗi. 

>Một **_method_** là một hành động mà Python có thể thực hiện trên một mẩu dữ liệu.

- **`.title()`**: Chuyển các chữ cái đầu tiên của mỗi từ thành chữ hoa.

- **`.upper()`**: Chuyển toàn bộ chuỗi thành chữ hoa.

- **`.lower()`**: Chuyển toàn bộ chuỗi thành chữ thường. (Rất hữu ích khi lưu trữ dữ liệu để đảm bảo tính đồng nhất).

``` Python

name = "ada lovelace"
print(name.title()) # Kết quả: Ada Lovelace
# Nếu inputs: ADA LOVELACe thì output vẫn là Ada Lovelace

name = "Ada Lovelace"
print(name.upper()) # Kết quả: ADA LOVELACE
print(name.lower()) # Kết quả: ada lovelace
```

> **Lưu ý:** Dấu chấm (`.`) sau tên biến nói cho Python biết hãy áp dụng phương thức đó lên biến đó. Cặp ngoặc đơn `()` theo sau phương thức là nơi chứa thông tin bổ sung (nếu có).

## 3. Sử dụng Biến trong Chuỗi (f-strings)

Để chèn giá trị của một biến vào trong chuỗi, Python sử dụng **f-strings** (f là viết tắt của _format_).

- **Cú pháp:** Đặt chữ `f` ngay trước dấu ngoặc kép mở "" và đặt tên biến bên trong cặp ngoặc nhọn `{}`.


``` Python
first_name = "ada"
last_name = "lovelace"
full_name = f"{first_name} {last_name}"

print(full_name) # Kết quả: ada lovelace
print(f"Hello, {full_name.title()}!") # Kết quả: Hello, Ada Lovelace!
```

## 4. Thêm Khoảng trắng (Whitespace) bằng Tabs hoặc Newlines

Khoảng trắng trong lập trình bao gồm các ký tự không in ra như dấu cách, phím tab, và ký hiệu xuống dòng.

- **`\t`**: Thêm một khoảng trắng dạng Tab.

- **`\n`**: Xuống dòng mới.

- **Kết hợp `\n\t`**: Xuống dòng và thụt lề vào một khoảng Tab
``` Python
print("Languages:\n\tPython\n\tC\n\tJavaScript")
# Kết quả:
# Languages:
#     Python
#     C
#     JavaScript
```

## 5. Xóa Khoảng trắng thừa (Stripping Whitespace)

Python có thể phát hiện và loại bỏ các khoảng trắng thừa ở hai đầu của chuỗi. Điều này quan trọng khi so sánh dữ liệu (ví dụ: tên đăng nhập).

- **`.rstrip()`**: Loại bỏ khoảng trắng ở bên phải (phía cuối chuỗi).

- **`.lstrip()`**: Loại bỏ khoảng trắng ở bên trái (phía đầu chuỗi).

- **`.strip()`**: Loại bỏ khoảng trắng ở cả hai đầu.

### Tính tạm thời (temporary)

- Nếu chỉ sử dụng method **`.rstrip()`** thông thường, thì khoảng trắng ở bên phải chỉ được xóa tạm thời. 
- Nếu chúng ta hỏi giá trị của biến "favorite_language", thì kết quả vẫn là 'python ' 

```Python
favorite_language = 'python '
favorite_language
# Kết quả: 'python '
favorite_language.rstrip()
# Kết quả: 'python'
favorite_language
# Kết quả: 'python ' 
```

#### Cách khắc phục 

Để thay đổi giá trị của biến một cách vĩnh viễn, ta phải **gán giá trị đã xử lý ngược lại** cho biến đó.

```Python
favorite_language = 'python '
favorite_language = favorite_language.rstrip() 
# Xóa khoảng trắng vĩnh viễn bằng cách gán lại biến
```

## 6. Loại bỏ Tiền tố (Removing Prefixes)

Khi làm việc với các URL có tiền tố thông dụng như "https://" hoặc dữ liệu có cấu trúc lặp lại, ta muốn loại bỏ các tiền tố thông dụng trên để tập trung vào phần URL chính.

- Dùng phương thức `.removeprefix()`: loại bỏ tiền tố trong ngoặc.

```Python
nostarch_url = 'https://nostarch.com'
simple_url = nostarch_url.removeprefix('https://')
print(simple_url) # Kết quả: nostarch.com

# Nếu input đầu vào là 'nostarch.comhttps://' thì kết quả vẫn giữ nguyên như cũ sau khi sử dụng phương thức .removeprefix. 
# Vì 'https://' không phải là tiền tố trong chuỗi 'nostarch.comhttps://'
```
> **Lưu ý**: `.removeprefix()` cũng có tính tạm thời như `.strip()`. Do đó ta cũng cần gán giá trị đã xử lý ngược lại cho biến đó. 


## 7. Tránh lỗi Cú pháp (Syntax Errors) với Chuỗi

Một lỗi phổ biến là sử dụng dấu ngoặc đơn trong một chuỗi cũng được bao bọc bởi dấu ngoặc đơn. Điều này khiến Python không biết đâu là điểm kết thúc của chuỗi.

```Python
# LỖI: Python sẽ hiểu chuỗi kết thúc ở chữ 'n' trong "Python's"
message = 'One of Python's strengths is its diverse community.' 
```

**Cách khắc phục:** Sử dụng dấu ngoặc kép bao bên ngoài nếu bên trong chuỗi có chứa dấu nháy đơn (apostrophe).

```Python
# ĐÚNG:
message = "One of Python's strengths is its diverse community."
```

> **Mẹo:** Các trình soạn thảo code thường có tính năng **syntax highlighting** (tô màu cú pháp). Nếu bạn thấy màu sắc của chuỗi trông lạ thường, rất có thể bạn đang bị thiếu hoặc thừa dấu ngoặc.

---

# SỐ HỌC (NUMBERS)

## 1. Số nguyên (Integers)

Python cho phép bạn thực hiện các phép tính cơ bản như:
- Cộng (`+`).
- Trừ (`-`).
- Nhân (`*`).
- Chia (`/`) với số nguyên.
- Chia lấy dư (%) với số nguyên.

``` Python
>>> 2 + 3
5
>>> 3 - 2
1
>>> 2 * 3
6
>>> 3 / 2
1.5
```
    
- **Phép lũy thừa:** Python sử dụng hai dấu sao (`**`) để biểu diễn lũy thừa.

``` Python
>>> 3 ** 2
9
>>> 3 ** 3
27
>>> 10 ** 6
1000000
```
    
- **Thứ tự thực hiện phép tính:** Python tuân thủ các quy tắc toán học về thứ tự ưu tiên. Bạn có thể sử dụng dấu ngoặc đơn để thay đổi thứ tự này.

``` Python
>>> 2 + 3 * 4
14
>>> (2 + 3) * 4
20
```
    
> **Lưu ý:** Các khoảng trắng trong biểu thức không ảnh hưởng đến việc Python tính toán, chúng chỉ giúp code dễ đọc hơn.
 
## 2. Số thực (Floats)

Python gọi bất kỳ số nào có dấu phẩy thập phân là **float**.

- **Hoạt động của Float:** Đa phần các trường hợp, ta chỉ cần nhập số và Python sẽ thực hiện đúng như mong đợi:

``` Python
>>> 0.1 + 0.1
0.2
>>> 0.2 + 0.2
0.4
>>> 2 * 0.1
0.2
>>> 2 * 0.2
0.4
```
    
- **Lưu ý về độ chính xác:** Đôi khi ta sẽ nhận được kết quả có nhiều chữ số thập phân lẻ do cách máy tính biểu diễn số thập phân trong bộ nhớ:

```Python
>>> 0.2 + 0.1
0.30000000000000004
>>> 3 * 0.1
0.30000000000000004
```

## 3. Kết hợp giữa Số nguyên và Số thực

Khi bạn kết hợp hai loại số này, Python mặc định chuyển kết quả về dạng **float**.

- **Phép chia:** Kết quả của phép chia hai số bất kỳ luôn là một số thực (float), ngay cả khi số bị chia và số chia là số nguyên.

``` Python
>>> 4 / 2
2.0
```
    
- **Phép tính hỗn hợp:** Nếu ta sử dụng số thực trong bất kỳ phép tính nào với số nguyên, kết quả cũng sẽ là số thực.

``` Python
>>> 1 + 2.0
3.0
>>> 2 * 3.0
6.0
>>> 3.0 ** 2
9.0
```

## 4. Dấu gạch dưới trong số (Underscores in Numbers)

Khi viết các con số lớn, ta có thể dùng dấu gạch dưới (`_`) để nhóm các chữ số lại cho dễ đọc hơn.

```Python
>>> universe_age = 14_000_000_000
>>> print(universe_age)
14000000000
```

- Python sẽ bỏ qua các dấu gạch dưới này khi lưu trữ giá trị. (vẫn in ra kết quả là 14000000000)
    
- Cách này hoạt động với cả số nguyên và số thực. 
	- **Ví dụ:** `1000` cũng giống như `1_000` hay `10_00`.
	
## 5. Gán giá trị cho nhiều biến (Multiple Assignment)

Ta có thể gán giá trị cho nhiều biến cùng một lúc trên một dòng mã duy nhất. Điều này giúp code ngắn gọn và dễ đọc hơn:

- Cần tách các tên biến bằng dấu phẩy và làm tương tự với các giá trị.

- Python sẽ tự động khớp thứ tự của biến với giá trị tương ứng.

```Python
>>> x, y, z = 0, 0, 0
```

## 6. Hằng số (Constants)

**Hằng số** là một biến có giá trị không thay đổi trong suốt vòng đời của chương trình.

- **Quy ước:** Python không có kiểu hằng số riêng biệt, nhưng các lập trình viên Python sử dụng **TẤT CẢ CHỮ CÁI VIẾT HOA** để ám chỉ một biến nên được coi là hằng số và không bao giờ được thay đổi.

```Python
MAX_CONNECTIONS = 5000
```

>**Lưu ý:**  Nếu gán MAX_CONNECTIONS ở trên với giá trị 6000, thì chương trình sẽ không báo lỗi như bên C++. Vì constants bên Python chỉ dừng lại ở quy ước, ta cần cẩn thận với điều này

---

# GHI CHÚ TRONG PYTHON (COMMENTS)

### 1. Cách viết Ghi chú

Trong Python, dấu thăng (**#**) được sử dụng để chỉ định một ghi chú.

- Bất kỳ nội dung nào đi sau dấu thăng trong mã nguồn của bạn đều sẽ bị trình thông dịch Python bỏ qua.
```Python
# Say hello to everyone.
print("Hello Python people!")
```

- Trong ví dụ này, Python sẽ bỏ qua dòng đầu tiên và thực thi dòng thứ hai.

- Kết quả đầu ra sẽ chỉ là: `Hello Python people!`.

### 2. Mục đích và Tầm quan trọng của Ghi chú

Lý do chính để viết ghi chú là để giải thích mã của bạn được thiết kế để làm gì và ta đã làm như thế nào để nó hoạt động.

- **Hỗ trợ trí nhớ:** Khi  đang thực hiện một dự án, cần hiểu rõ các phần ghép nối với nhau như thế nào. Tuy nhiên, khi quay lại dự án sau một khoảng thời gian, ta có khả năng sẽ quên mất một số chi tiết.
    
- **Hỗ trợ cộng tác:** Nếu muốn trở thành lập trình viên chuyên nghiệp hoặc cộng tác với những người khác, ta nên viết các ghi chú có ý nghĩa. Các lập trình viên lành nghề luôn kỳ vọng sẽ nhìn thấy các ghi chú trong mã nguồn.
    
- **Tiết kiệm thời gian:** Việc viết các ghi chú tốt có thể giúp  tiết kiệm thời gian bằng cách tóm tắt cách tiếp cận tổng thể một cách rõ ràng.

---

# THE ZEN OF PYTHON (TRIẾT LÝ CỦA PYTHON)
## The Zen of Python là gì

Các lập trình viên Python kinh nghiệm luôn khuyến khích tránh sự phức tạp và hướng tới sự đơn giản bất cứ khi nào có thể. Triết lý của cộng đồng Python được gói gọn trong tập hợp các nguyên tắc gọi là **"The Zen of Python"** do Tim Peters biên soạn.

### 1. Cách truy cập The Zen of Python

Có thể xem toàn bộ các nguyên tắc này bằng cách nhập lệnh sau vào trình thông dịch (interpreter) Python của mình:

```Python
>>> import this
```

Sau khi chạy lệnh, Python sẽ hiển thị nội dung của Tim Peters, bắt đầu với dòng: _"The Zen of Python, by Tim Peters"_.

### 2. Các nguyên tắc cốt lõi dành cho người mới bắt đầu

- **Beautiful is better than ugly (Đẹp tốt hơn xấu):** Các lập trình viên Python tin rằng mã nguồn có thể trở nên đẹp đẽ và thanh lịch. Một giải pháp được thiết kế tốt, hiệu quả và thanh lịch luôn được tôn trọng.
- 
- **Simple is better than complex (Đơn giản tốt hơn phức tạp):** Nếu có lựa chọn giữa một giải pháp đơn giản và một giải pháp phức tạp mà cả hai đều hoạt động tốt, hãy chọn giải pháp đơn giản. Mã nguồn sẽ dễ bảo trì và dễ dàng phát triển thêm sau này.

- **Complex is better than complicated (Phức tạp tốt hơn rắc rối):** Trong thực tế, đôi khi một giải pháp đơn giản là không thể đạt được. Trong trường hợp đó, hãy sử dụng giải pháp đơn giản nhất có thể hoạt động được.

- **Readability counts (Khả năng đọc hiểu rất quan trọng):** Ngay cả khi mã nguồn phức tạp, hãy cố gắng làm cho nó dễ đọc. Khi làm việc trong các dự án phức tạp, hãy tập trung viết các ghi chú (comments) đầy đủ thông tin.
 
- **There should be one-- and preferably only one --obvious way to do it (Nên có một—và ưu tiên duy nhất một—cách rõ ràng để thực hiện việc đó):** Các thành phần cơ bản trong chương trình của bạn nên có ý nghĩa rõ ràng đối với các lập trình viên khác.

- **Now is better than never (Bây giờ tốt hơn là không bao giờ):** Đừng cố gắng viết mã nguồn hoàn hảo ngay từ đầu. Hãy viết mã có thể chạy được, sau đó mới quyết định cải thiện nó hoặc chuyển sang dự án mới.
    
