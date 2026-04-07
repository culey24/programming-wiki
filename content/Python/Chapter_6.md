# 6. Cách hàm input() hoạt động

Hàm `input()` tạm dừng chương trình và đợi người dùng nhập văn bản từ bàn phím. Sau khi nhận được dữ liệu, Python sẽ gán dữ liệu đó vào một biến để có thể làm việc dễ dàng.

Hàm này nhận một đối số duy nhất là **prompt** (lời nhắc) - nội dung hiển thị để người dùng biết họ cần nhập gì.

```Python
message = input("Tell me something, and I will repeat it back to you: ")
print(message)
```


```
Kết quả:

Tell me something, and I will repeat it back to you: Hello everyone!
 
Hello everyone!
```

## 1. Sử dụng `int()` để nhận dữ liệu kiểu số

Một điều quan trọng cần nhớ: **Python luôn diễn giải mọi thứ người dùng nhập vào là một chuỗi (string)**.

Nếu yêu cầu nhập tuổi và người dùng nhập 21, Python sẽ hiểu đó là chuỗi '21'. 
- Nếu ta dùng nó để so sánh số học, chương trình sẽ báo lỗi: 
			TypeError: '>=' not supported between instances of 'str' and 'int'

### Cách giải quyết bằng hàm `int()`

Để xử lý vấn đề này, ta dùng hàm `int()` để chuyển đổi chuỗi số thành kiểu số nguyên thực sự.

```Python
>>> age = input("How old are you? ")
How old are you? 21
>>> age = int(age) # Chuyển đổi từ chuỗi '21' sang số 21
>>> age >= 18
True
```

Chào bạn, đây là nội dung chi tiết bài soạn về **"Vòng lặp while trong Python"** được biên soạn bám sát và đầy đủ theo các ví dụ từ tài liệu bạn đã cung cấp.

---

# Vòng lặp while trong Python

## 1. Cách vòng lặp while hoạt động

```Python
current_number = 1
while current_number <= 5:
    print(current_number)
    current_number += 1
```

```
Kết quả
1 
2 
3 
4 
5
```

- **Giải thích:** Ta bắt đầu với `current_number = 1`.
    
    - Vòng lặp kiểm tra: liệu `1 <= 5`? Vì đúng, Python in số 1 và cộng thêm 1 vào biến (thành 2).
        
    - Quá trình lặp lại cho đến khi `current_number` bằng 6. Lúc này điều kiện `6 <= 5` là **Sai (False)**, vòng lặp dừng lại.

## 2. Sử dụng break để thoát vòng lặp ngay lập tức

Để thoát khỏi vòng lặp ngay lập tức mà không cần kiểm tra lại điều kiện ở đầu vòng lặp, ta dùng lệnh **`break`**.

```Python

prompt = "\nVui lòng nhập tên thành phố bạn đã ghé thăm:"
prompt += "\n(Nhập 'quit' khi bạn muốn kết thúc.) "

while True:
    city = input(prompt)
    
    if city == 'quit':
        break
    else:
        print(f"Tôi rất muốn đến thăm {city.title()}!")
```

- Vòng lặp `while True` sẽ chạy vô tận trừ khi gặp lệnh `break`.

```
Please enter the name of a city you have visited: 
(Enter 'quit' when you are finished.) New York 
I'd love to go to New York! 

Please enter the name of a city you have visited: 
(Enter 'quit' when you are finished.) San Francisco 
I'd love to go to San Francisco! 

Please enter the name of a city you have visited: 
(Enter 'quit' when you are finished.) quit
```
## 3. Sử dụng continue trong vòng lặp

Khác với `break` (thoát hẳn), lệnh **`continue`** dùng để bỏ qua các câu lệnh còn lại trong lần lặp hiện tại và quay trở lại kiểm tra điều kiện ở đầu vòng lặp.

``` Python
current_number = 0
while current_number < 10:
    current_number += 1
    if current_number % 2 == 0:
        continue
        
    print(current_number)
```

- Nếu số đó chia hết cho 2 (số chẵn), lệnh `continue` được thực thi, Python sẽ bỏ qua lệnh `print` và quay lại đầu vòng lặp.

```
1 
3 
5 
7 
9
```

---
# Sử dụng vòng lặp `while` với List và Dictionary?

Vòng lặp `for` rất hiệu quả để duyệt qua một danh sách, nhưng ta **không nên sửa đổi** một danh sách bên trong vòng lặp `for` vì Python sẽ gặp khó khăn trong việc theo dõi các phần tử.

Để sửa đổi một danh sách trong khi bạn đang làm việc với nó, hãy sử dụng **vòng lặp `while`**. Việc kết hợp vòng lặp `while` với danh sách và từ điển cho phép bạn thu thập, lưu trữ và tổ chức một lượng lớn dữ liệu đầu vào một cách hệ thống.

## 1. Di chuyển các phần tử từ danh sách này sang danh sách khác

Giả sử chúng ta có một danh sách người dùng mới đăng ký nhưng chưa được xác minh. Sau khi xác minh, chúng ta cần chuyển họ sang một danh sách người dùng đã xác minh riêng biệt.


```Python
# Bắt đầu với danh sách người dùng chưa xác minh 
# và một danh sách trống để chứa người dùng đã xác minh.
unconfirmed_users = ['alice', 'brian', 'candace']
confirmed_users = []

# Xác minh từng người dùng cho đến khi không còn người dùng nào trong danh sách chưa xác minh.
# Di chuyển mỗi người dùng đã xác minh vào danh sách đã xác minh.
while unconfirmed_users:
    current_user = unconfirmed_users.pop()
    
    print(f"Verifying user: {current_user.title()}")
    confirmed_users.append(current_user)

# Hiển thị tất cả người dùng đã xác minh.
print("\nThe following users have been confirmed:")
for confirmed_user in confirmed_users:
    print(confirmed_user.title())
```

```
Verifying user: Candace 
Verifying user: Brian 
Verifying user: Alice 

The following users have been confirmed: 
Candace 
Brian 
Alice
```

**Giải thích:**

- Vòng lặp `while` chạy cho đến khi danh sách `unconfirmed_users` trống.
    
- Phương thức `.pop()` loại bỏ người dùng cuối cùng từ danh sách `unconfirmed_users`.
    
- Vì 'candace' ở cuối danh sách, cô ấy sẽ là người đầu tiên được lấy ra và thêm vào `confirmed_users`.
    
- Kết quả là danh sách `unconfirmed_users` sẽ thu hẹp lại và `confirmed_users` sẽ lớn dần lên.
    
## 2. Loại bỏ tất cả các thực thể của một giá trị cụ thể khỏi một danh sách

Thông thường, phương thức `.remove()` chỉ xóa được một giá trị đầu tiên mà nó tìm thấy. Nếu muốn xóa tất cả các thực thể của một giá trị (ví dụ: xóa tất cả các từ 'cat' trong danh sách thú cưng), ta cần dùng vòng lặp `while`.

```Python
pets = ['dog', 'cat', 'dog', 'goldfish', 'cat', 'rabbit', 'cat']
print(pets)

# Lặp cho đến khi không còn 'cat' nào trong danh sách
while 'cat' in pets:
    pets.remove('cat')

print(pets)
```

**Kết quả:**

- Danh sách ban đầu: `['dog', 'cat', 'dog', 'goldfish', 'cat', 'rabbit', 'cat']`
    
- Danh sách sau khi xóa: `['dog', 'dog', 'goldfish', 'rabbit']`
    
## 3. Lưu trữ kết quả nhập liệu (User Input) vào Từ điển

Ta có thể sử dụng vòng lặp `while` để thu thập thông tin từ người dùng và lưu trữ vào từ điển để kết nối mỗi phản hồi với một người dùng cụ thể.

```Python
responses = {}

# Thiết lập một cờ (flag) để chỉ định cuộc thăm dò đang hoạt động.
polling_active = True

while polling_active:
    # Nhập tên và câu trả lời của người tham gia.
    name = input("\nWhat is your name? ")
    response = input("Which mountain would you like to climb someday? ")
    
    # Lưu trữ câu trả lời vào từ điển.
    responses[name] = response
    
    # Kiểm tra xem có ai muốn tham gia nữa không.
    repeat = input("Would you like to let another person respond? (yes/ no) ")
    if repeat == 'no':
        polling_active = False

# Thăm dò kết thúc. Hiển thị kết quả.
print("\n--- Poll Results ---")
for name, response in responses.items():
    print(f"{name} would like to climb {response}.")
```

```
What is your name? Eric 
Which mountain would you like to climb someday? Denali 
Would you like to let another person respond? (yes/ no) yes 

What is your name? Lynn 
Which mountain would you like to climb someday? Devil's Thumb 
Would you like to let another person respond? (yes/ no) no 

--- Poll Results --- 
Eric would like to climb Denali. 
Lynn would like to climb Devil's Thumb
```
**Quy trình hoạt động:**

1. Chương trình định nghĩa một từ điển trống (`responses`) và một cờ `polling_active`.
    
2. Bên trong vòng lặp, người dùng nhập tên và ngọn núi họ muốn leo.
    
3. Dữ liệu được lưu vào từ điển với cấu trúc `{tên: ngọn núi}`.
    
4. Chương trình hỏi người dùng có muốn tiếp tục không. Nếu nhập 'no', cờ `polling_active` chuyển thành `False` và vòng lặp kết thúc.
    
5. Cuối cùng, một vòng lặp `for` duyệt qua từ điển để in ra kết quả tổng hợp.
    
