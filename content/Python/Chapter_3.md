# 3. Vòng lặp với List

Sử dụng vòng lặp là một trong những cách phổ biến nhất để máy tính tự động hóa các tác vụ lặp đi lặp lại. Thay vì xử lý từng mục một cách thủ công, ta sử dụng vòng lặp `for` để thực hiện cùng một hành động trên mọi phần tử trong danh sách.

## 1. Cách hoạt động của vòng lặp `for`

Giả sử ta có một danh sách các tên ảo thuật gia và muốn in từng tên ra màn hình. Thay vì viết lệnh `print` cho từng người, ta sử dụng cấu trúc sau:

```Python
magicians = ['alice', 'david', 'carolina']
for magician in magicians:
    print(magician)
```

**Giải thích cơ chế:**

1. Python lấy giá trị đầu tiên từ danh sách `magicians` (là `'alice'`) và gán vào biến `magician`.
    
2. Python thực thi câu lệnh `print(magician)`, kết quả là in tên "alice".
    
3. Python quay lại dòng đầu tiên của vòng lặp, lấy giá trị tiếp theo (`'david'`), gán vào biến `magician` và thực hiện lệnh `print`.
    
4. Quá trình này lặp lại cho đến khi không còn giá trị nào trong danh sách.

## 2. Tầm quan trọng của việc đặt tên biến

Việc đặt tên biến tạm trong vòng lặp rất quan trọng để mã nguồn dễ hiểu. Nên sử dụng tên số ít cho biến tạm và tên số nhiều cho danh sách:

- `for cat in cats:`
    
- `for dog in dogs:`
    
- `for item in list_of_items:`
    

Quy ước này giúp dễ dàng nhận diện đoạn code đang xử lý một phần tử đơn lẻ hay toàn bộ danh sách.

## 3. Thực hiện nhiều hành động trong vòng lặp

Ta có thể viết bao nhiêu dòng code tùy thích bên trong vòng lặp `for`. **Mọi dòng code được thụt lề (indented)** sau dòng `for` đều được coi là nằm _trong_ vòng lặp và sẽ được thực hiện một lần cho mỗi phần tử.

```Python
magicians = ['alice', 'david', 'carolina']
for magician in magicians:
    print(f"{magician.title()}, that was a great trick!")
    print(f"I can't wait to see your next trick, {magician.title()}.\n")
```

**Kết quả đầu ra:**
```
Alice, that was a great trick!
I can't wait to see your next trick, Alice.

David, that was a great trick!
I can't wait to see your next trick, David.

Carolina, that was a great trick!
I can't wait to see your next trick, Carolina.
```

>**Lưu ý:** Ký tự `\n` giúp chèn một dòng trống sau mỗi lần lặp, giúp các nhóm thông điệp trông gọn gàng hơn.

Chào bạn, dưới đây là nội dung bài học chi tiết về chủ đề **"Tránh các lỗi thụt đầu dòng trong Python" (Avoiding Indentation Errors)**, được biên soạn dựa trên và bám sát nội dung từ các tài liệu bạn đã cung cấp.

---

# TRÁNH CÁC LỖI THỤT ĐẦU DÒNG (INDENTATION ERRORS) TRONG PYTHON

Trong Python, việc **thụt đầu dòng (indentation)** không chỉ để cho đẹp mà là một phần bắt buộc của cú pháp. Python sử dụng khoảng trắng để xác định các dòng code liên quan đến nhau như thế nào trong một cấu trúc (như vòng lặp `for`).

## 1. Quên thụt đầu dòng (Forgetting to Indent)

Đây là lỗi cơ bản nhất. Luôn phải thụt đầu dòng cho dòng code nằm ngay sau câu lệnh `for`. Nếu quên, Python sẽ báo lỗi.

```Python
magicians = ['alice', 'david', 'carolina']
for magician in magicians:
print(magician) # Lỗi: Dòng này lẽ ra phải được thụt đầu dòng
```

- **Thông báo lỗi từ Python:**

> `IndentationError: expected an indented block after 'for' statement on line 2`

## 2. Thụt đầu dòng không cần thiết (Indenting Unnecessarily)

Ngược lại với lỗi trên, nếu thụt đầu dòng cho một dòng code mà nó không thuộc về một khối lệnh nào (như vòng lặp hay hàm), Python cũng sẽ báo lỗi.

``` Python
message = "Hello Python world!"
	print(message) # Lỗi: Thụt đầu dòng không có lý do
```
    
- **Thông báo lỗi từ Python:**

> `IndentationError: unexpected indent`

- Chỉ thụt đầu dòng khi bạn có lý do cụ thể (như khi bắt đầu nội dung của một vòng lặp).

## 3. Quên thụt đầu dòng cho các dòng bổ sung (Forgetting to Indent Additional Lines)

Đây là một **lỗi logic (logical error)**. Code vẫn chạy nhưng kết quả không như ý muốn. Lỗi này xảy ra khi muốn nhiều dòng lệnh cùng nằm trong vòng lặp nhưng lại chỉ thụt đầu dòng cho dòng đầu tiên.

```Python
magicians = ['alice', 'david', 'carolina']
for magician in magicians:
	print(f"{magician.title()}, that was a great trick!")
print(f"I can't wait to see your next trick, {magician.title()}.\n") 
# Dòng trên bị quên thụt đầu dòng, nên nó nằm ngoài vòng lặp
```

- **Kết quả sai:** Câu "I can't wait..." chỉ xuất hiện đúng 1 lần sau khi vòng lặp kết thúc, và nó chỉ dành cho người cuối cùng trong danh sách (`Carolina`).
  
- **Giải thích:** Python thấy dòng đầu tiên được thụt đầu dòng nên nó thực hiện vòng lặp cho dòng đó. Dòng thứ hai không thụt đầu dòng nên Python coi đó là lệnh nằm ngoài vòng lặp.

## 5. Quên dấu hai chấm (Forgetting the Colon)

Dấu hai chấm (`:`) ở cuối câu lệnh `for` là dấu hiệu thông báo cho Python biết rằng dòng tiếp theo sẽ bắt đầu một khối lệnh được thụt đầu dòng. Nếu quên dấu này, sẽ gặp lỗi cú pháp.

```Python
magicians = ['alice', 'david', 'carolina']
for magician in magicians # Lỗi: Thiếu dấu hai chấm ở cuối
	print(magician)
```

- **Thông báo lỗi từ Python:**

> `SyntaxError: expected ':'`

---
# LÝ THUYẾT PYTHON: TẠO DANH SÁCH SỐ (MAKING NUMERICAL LISTS)

## 1. Hàm `range()`

Hàm `range()` trong Python giúp bạn dễ dàng tạo ra một dãy số.

### Cách hoạt động cơ bản

Hàm `range()` bắt đầu đếm từ giá trị đầu tiên được cung cấp và dừng lại khi chạm đến giá trị thứ hai (nhưng **không bao gồm** giá trị đó). Đây là một ví dụ về lỗi "off-by-one" (lệch 1 đơn vị) thường gặp trong lập trình.
```Python
for value in range(1, 5):
    print(value)
```

```  Python
# Kết quả
1
2
3
4
```

> **Lưu ý:** Số 5 không được in ra.

- Để in các số từ 1 đến 5, thì cần viết:
```Python
for value in range(1, 6):
    print(value)
```

### Sử dụng với một tham số

Nếu chỉ truyền một tham số vào hàm range(), nó sẽ bắt đầu đếm từ 0.

- Ví dụ: range(6) sẽ tạo ra các số từ 0 đến 5.

## 2. Sử dụng `range()` để tạo Danh sách số

Ta có thể chuyển trực tiếp kết quả của hàm `range()` thành một danh sách bằng cách sử dụng hàm `list()`.

### Chuyển đổi cơ bản

``` Python
numbers = list(range(1, 6))
print(numbers)

# Kết quả: `[1, 2, 3, 4, 5]`
```

### Sử dụng tham số bước nhảy (step size)

Nếu truyền đối số thứ ba vào hàm `range()`, Python sẽ sử dụng giá trị đó làm bước nhảy khi tạo dãy số.

```Python
even_numbers = list(range(2, 11, 2))
print(even_numbers)

# Kết quả: [2, 4, 6, 8, 10]
```


- Bắt đầu từ 2, cộng thêm 2 cho đến khi đạt hoặc vượt quá giá trị dừng là 11.

## 3. Tạo danh sách số phức tạp hơn (Ví dụ về số bình phương)

Ta có thể tạo ra bất kỳ tập hợp số nào bằng cách kết hợp hàm `range()` và vòng lặp `for`.

**Yêu cầu:** Tạo một danh sách gồm bình phương của các số từ 1 đến 10.

### Cách 1: Sử dụng biến tạm (Chi tiết)

```Python
squares = []
for value in range(1, 11):
    square = value ** 2  # Dấu ** đại diện cho lũy thừa
    squares.append(square)

print(squares)
```

### Cách 2: Viết gọn hơn (Bỏ biến tạm)

```Python
squares = []
for value in range(1, 11):
    squares.append(value**2)

print(squares)
```

_Kết quả chung:_ `[1, 4, 9, 16, 25, 36, 49, 64, 81, 100]`

## 4. Thống kê cơ bản với Danh sách số

Python có một số hàm chuyên dụng để phân tích nhanh các danh sách số:

```Python
digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

min(digits)  # Tìm giá trị nhỏ nhất: 0
max(digits)  # Tìm giá trị lớn nhất: 9
sum(digits)  # Tính tổng các số: 45
```

## 5. List Comprehensions (Danh sách bao hàm)

**List comprehension** là một cách tiếp cận cho phép tạo ra cùng một danh sách như trên nhưng chỉ với **một dòng code**. Nó kết hợp vòng lặp `for` và việc tạo các phần tử mới vào trong một cặp ngoặc vuông.

**Ví dụ: Tạo danh sách số bình phương bằng List Comprehension:**

```Python
squares = [value**2 for value in range(1, 11)]
print(squares)
```

### Cấu trúc của List Comprehension:

1. Bắt đầu bằng một tên biến mô tả danh sách (ví dụ: `squares`).
    
2. Mở ngoặc vuông `[`.
    
3. Định nghĩa biểu thức cho các giá trị bạn muốn lưu trữ (ví dụ: `value**2`).
    
4. Viết vòng lặp `for` để tạo ra các số sẽ đưa vào biểu thức (không có dấu hai chấm ở cuối).
    
5. Đóng ngoặc vuông `]`.

---
# LÀM VIỆC VỚI MỘT PHẦN CỦA DANH SÁCH (SLICING)

Trong Python, ngoài việc truy cập từng phần tử đơn lẻ, ta còn có thể làm việc với một nhóm các phần tử cụ thể trong danh sách. Nhóm này được gọi là một **slice** (lát cắt).

## 1. Cách cắt một danh sách (Slicing a List)

Để tạo một slice, ta cần chỉ định chỉ số (index) của phần tử đầu tiên và phần tử cuối cùng muốn làm việc.

> **Lưu ý quan trọng:** Giống như hàm `range()`, Python sẽ dừng lại ở **trước** chỉ số thứ hai mà bạn chỉ định một đơn vị.

### Ví dụ cơ bản:

Giả sử chúng ta có danh sách các cầu thủ:

```Python
players = ['charles', 'martina', 'michael', 'florence', 'eli']

# Lấy 3 cầu thủ đầu tiên (chỉ số 0, 1, 2)
print(players[0:3]) 
# Kết quả: ['charles', 'martina', 'michael']

# Lấy các cầu thủ từ chỉ số 1 đến 3
print(players[1:4])
# Kết quả: ['martina', 'michael', 'florence']
```

### Các trường hợp đặc biệt khi bỏ trống chỉ số:

- **Bỏ trống chỉ số đầu:** Python sẽ tự động bắt đầu từ đầu danh sách.

```Python
print(players[:4])
# Kết quả: ['charles', 'martina', 'michael', 'florence']
```

- **Bỏ trống chỉ số cuối:** Python sẽ lấy từ chỉ số bắt đầu cho đến hết danh sách.
```Python
print(players[2:])
# Kết quả: ['michael', 'florence', 'eli']
```
    
- **Sử dụng chỉ số âm:** Giúp lấy các phần tử tính từ cuối danh sách lên.
```Python
# Lấy 3 cầu thủ cuối cùng
print(players[-3:])
# Kết quả: ['michael', 'florence', 'eli']
```

> **Ghi chú:** Có thể thêm giá trị thứ ba vào trong ngoặc vuông `[start:stop:step]`. Giá trị này cho Python biết cần nhảy qua bao nhiêu phần tử giữa các khoảng cách được chỉ định.

## 2. Duyệt qua một Slice bằng vòng lặp (Looping Through a Slice)

Ta có thể sử dụng một slice trực tiếp trong vòng lặp `for` nếu chỉ muốn lặp qua một tập hợp con các phần tử.

```Python
players = ['charles', 'martina', 'michael', 'florence', 'eli']

print("Here are the first three players on my team:")
for player in players[:3]:
    print(player.title())
```

```
# Kết quả
Here are the first three players on my team:
Charles
Martina
Michael
```

## 3. Sao chép một danh sách (Copying a List)

Để sao chép một danh sách, bạn có thể tạo một slice bao gồm toàn bộ danh sách gốc bằng cách bỏ trống cả chỉ số đầu và chỉ số cuối `[:]`.

### Cách sao chép đúng:

```Python
my_foods = ['pizza', 'falafel', 'carrot cake']
# Tạo bản sao bằng slice
friend_foods = my_foods[:]

my_foods.append('cannoli')
friend_foods.append('ice cream')

print("My favorite foods are:")
print(my_foods)

print("\nMy friend's favorite foods are:")
print(friend_foods)
```
```
My favorite foods are: 
['pizza', 'falafel', 'carrot cake', 'cannoli', 'ice cream'] 
My friend's favorite foods are: 
['pizza', 'falafel', 'carrot cake', 'cannoli', 'ice cream']
```

- **Kết quả:** Hai danh sách riêng biệt, mỗi danh sách có món ăn mới riêng.

### Sai lầm cần tránh (Assigning vs. Copying):

Nếu chỉ đơn giản gán `friend_foods = my_foods`, ta **không** tạo ra một bản sao. Thay vào đó, cả hai biến sẽ cùng trỏ vào **một danh sách duy nhất** trong bộ nhớ.

```Python
# ĐÂY KHÔNG PHẢI LÀ SAO CHÉP
friend_foods = my_foods 

my_foods.append('cannoli')
# 'cannoli' sẽ xuất hiện ở CẢ HAI danh sách vì chúng thực chất là một.
```


# TUPLE TRONG PYTHON

## 1. Tuple là gì?

Trong Python, trong khi **List** (danh sách) hoạt động tốt cho các tập hợp dữ liệu có thể thay đổi trong suốt vòng đời của chương trình, thì đôi khi chúng ta cần tạo ra một danh sách các mục **không thể thay đổi**.

- **Định nghĩa:** Python gọi các giá trị không thể thay đổi là _immutable_ (bất biến). Một danh sách bất biến được gọi là một **Tuple**.

- **Mục đích:** Sử dụng khi muốn lưu trữ một tập hợp các giá trị mà ta không muốn chúng bị thay đổi trong suốt quá trình chạy chương trình.

## 2. Cách định nghĩa một Tuple

Một Tuple trông giống như một List, ngoại trừ việc bạn sử dụng **ngoặc đơn `()`** thay vì ngoặc vuông `[]`.

### Truy cập phần tử

Ta có thể truy cập từng phần tử của Tuple bằng cách sử dụng chỉ số (index) tương tự như List.


``` Python
dimensions = (200, 50)
print(dimensions[0]) # Kết quả: 200
print(dimensions[1]) # Kết quả: 50
```

### Lưu ý quan trọng: Tuple có một phần tử

Tuple thực chất được định nghĩa bởi **dấu phẩy**, dấu ngoặc đơn giúp nó trông gọn gàng hơn. Nếu muốn định nghĩa một Tuple chỉ có duy nhất một phần tử, **bắt buộc** phải có dấu phẩy đi kèm:

> `my_t = (3,)`

Tuple trống (empty) vẫn được định nghĩa là `my_t = ()`
## 3. Tính bất biến (Immutability)

Điểm khác biệt lớn nhất là không thể thay đổi giá trị của bất kỳ phần tử nào trong Tuple sau khi nó đã được định nghĩa.

Nếu cố gắng thay đổi giá trị, Python sẽ trả về một lỗi **TypeError**.

```Python
dimensions = (200, 50)
dimensions[0] = 250 # Python sẽ báo lỗi tại dòng này
```

- Thông báo lỗi hệ thống: TypeError: 'tuple' object does not support item assignment

## 4. Duyệt qua các giá trị trong Tuple (Looping)

Ta có thể sử dụng vòng lặp `for` để duyệt qua tất cả các phần tử trong một Tuple tương tự như với List.

```Python
dimensions = (200, 50)
for dimension in dimensions:
    print(dimension)
```

```
# Kết quả
200
50
```

## 5. Ghi đè một Tuple (Writing Over a Tuple)

Mặc dù không thể chỉnh sửa các phần tử của một Tuple, nhưng **có thể gán một giá trị mới cho biến** đang đại diện cho Tuple đó. Nói cách khác, chúng ta định nghĩa lại toàn bộ Tuple.

```Python
dimensions = (200, 50)
print("Original dimensions:")
for dimension in dimensions:
    print(dimension)

# Gán lại giá trị mới cho biến dimensions (định nghĩa lại toàn bộ tuple)
dimensions = (400, 100)
print("\nModified dimensions:")
for dimension in dimensions:
    print(dimension)
```

**Giải thích:**

- Đoạn mã trên không gây lỗi vì chúng ta không thay đổi phần tử bên trong Tuple cũ.

- Chúng ta đang tạo ra một Tuple mới `(400, 100)` và liên kết nó với biến `dimensions`. Việc gán lại giá trị cho một biến là hoàn toàn hợp lệ.

```
# Kết quả đầu ra
Original dimensions:
200
50

Modified dimensions:
400
100
```
