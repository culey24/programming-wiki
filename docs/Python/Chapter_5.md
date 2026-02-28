# 5. Làm việc với Dictionary

Một **Dictionary** trong Python là một tập hợp các **cặp khóa - giá trị (key-value pairs)**. Mỗi khóa được kết nối với một giá trị và bạn có thể sử dụng khóa đó để truy cập giá trị tương ứng.

- **Cấu trúc:** Được bao quanh bởi dấu ngoặc nhọn `{}`.
    
- **Cặp key-value:** Một cặp giá trị liên quan đến nhau, ngăn cách bởi dấu hai chấm `:`. Các cặp được ngăn cách nhau bởi dấu phẩy `,`.
    
- **Giá trị:** Có thể là số, chuỗi, danh sách hoặc thậm chí là một dictionary khác.
    

# 1. Truy cập các giá trị trong Dictionary

Để lấy giá trị liên quan đến một khóa, ta cung cấp tên dictionary và đặt khóa đó bên trong cặp dấu ngoặc vuông `[]`.

```Python
alien_0 = {'color': 'green', 'points': 5}
new_points = alien_0['points']
print(f"You just earned {new_points} points!")

# Kết quả: `You just earned 5 points!`
```


# 2. Thêm các cặp Key-Value mới

Dictionary là các cấu trúc dữ liệu động. 
- Ta có thể thêm các cặp mới bất cứ lúc nào bằng cách chỉ định tên dictionary, khóa mới trong ngoặc vuông và gán giá trị cho nó.

```Python
alien_0 = {'color': 'green', 'points': 5}
print(alien_0)

alien_0['x_position'] = 0
alien_0['y_position'] = 25
print(alien_0)
```

```
# Kết quả
{'color': 'green', 'points': 5}
{'color': 'green', 'points': 5, 'x_position': 0, 'y_position': 25}
```

## 3. Bắt đầu với một Dictionary rỗng

Cú pháp của một dictionary rỗng là `{}`

```Python
alien_0 = {}

alien_0['color'] = 'green'
alien_0['points'] = 5

print(alien_0)
```

## 4. Chỉnh sửa giá trị trong Dictionary

Để thay đổi một giá trị, hãy sử dụng tên dictionary với khóa hiện có và gán giá trị mới cho nó.

```Python
alien_0 = {'color': 'green'}
print(f"The alien is {alien_0['color']}.")

alien_0['color'] = 'yellow'
print(f"The alien is now {alien_0['color']}.")

# Kết quả
# The alien is green. 
# The alien is now yellow
```

## 5. Xóa các cặp Key-Value

Khi không cần một thông tin nào đó nữa, ta có thể dùng câu lệnh `del` để xóa vĩnh viễn một cặp key-value.

```Python
alien_0 = {'color': 'green', 'points': 5}
print(alien_0)

del alien_0['points']
print(alien_0)
```

```
# Kết quả
{'color': 'green', 'points': 5} 
{'color': 'green'}
```
## 6. Dictionary gồm các đối tượng tương tự

Ta có thể dùng dictionary để lưu trữ một loại thông tin của nhiều đối tượng (ví dụ: kết quả của một cuộc thăm dò).

- **Cách trình bày (Formatting):** Đối với dictionary dài, nên chia thành nhiều dòng để dễ đọc.

```Python
favorite_languages = {
    'jen': 'python',
    'sarah': 'c',
    'edward': 'rust',
    'phil': 'python',
}

language = favorite_languages['sarah'].title()
print(f"Sarah's favorite language is {language}.")

# Kết quả
# Sarah's favorite language is C.
```

## 7. Sử dụng get() để truy cập giá trị

Việc dùng ngoặc vuông `[]` để truy cập khóa không tồn tại sẽ gây lỗi `KeyError`. Để tránh lỗi này, ta sử dụng phương thức `get()`.

- **Cú pháp:** `get(key, default_value)`
    
	- Nếu khóa tồn tại, nó trả về giá trị tương ứng.
    
	- Nếu khóa không tồn tại, nó trả về giá trị mặc định (nếu bạn không cung cấp giá trị mặc định, nó sẽ trả về `None`).


```Python
alien_0 = {'color': 'green', 'speed': 'slow'}

point_value = alien_0.get('points', 'No point value assigned.')
print(point_value)

# Kết quả: No point value assigned.
```


# VÒNG LẶP QUA DICTIONARY 

## 1. Lặp qua tất cả các cặp Key-Value (`.items()`)

Khi muốn truy cập cả khóa (key) và giá trị (value) tương ứng trong vòng lặp, ta sử dụng phương thức `.items()`.

```Python
user_0 = {
    'username': 'efermi',
    'first': 'enrico',
    'last': 'fermi',
}

for key, value in user_0.items():
    print(f"\nKey: {key}")
    print(f"Value: {value}")
```

```
# Kết quả
Key: username Value: efermi 

Key: first Value: enrico 

Key: last Value: fermi
```

- **Giải thích:** Phương thức `.items()` trả về một danh sách các cặp key-value. Vòng lặp `for` sẽ gán key vào biến `key` và giá trị vào biến `value`. Bạn có thể đặt tên biến tùy ý (ví dụ: `for k, v in user_0.items()`).

## 2. Lặp qua tất cả các Key trong Dictionary (`.keys()`)

Nếu chỉ quan tâm đến các khóa (keys), ta có thể sử dụng phương thức `.keys()`.

```Python
for name in favorite_languages.keys():
    print(name.title())
```

> Lưu ý: Lặp qua các key là hành vi mặc định khi lặp qua một dictionary. Vì vậy, mã dưới đây sẽ cho kết quả tương tự:
> 
> `for name in favorite_languages:`

## 3. Lặp qua các Key theo một thứ tự cụ thể (`sorted()`)

Mặc dù từ phiên bản Python 3.7+, dictionary duy trì thứ tự chèn, nhưng đôi khi ta muốn lặp qua các key theo một thứ tự khác (ví dụ: bảng chữ cái). Có thể sử dụng hàm `sorted()`.

```Python
for name in sorted(favorite_languages.keys()):
    print(f"{name.title()}, thank you for taking the poll.")
```

```
Kết quả
Edward, thank you for taking the poll. 
Jen, thank you for taking the poll. 
Phil, thank you for taking the poll. 
Sarah, thank you for taking the poll.
```

## 4. Lặp qua tất cả các Value trong Dictionary (`.values()`)

Nếu mục đích của là chỉ lấy các giá trị (values) mà không cần quan tâm đến key, hãy sử dụng phương thức `.values()`.

```Python
print("The following languages have been mentioned:")
for language in favorite_languages.values():
    print(language.title())
```

```
Kết quả
The following languages have been mentioned: 
Python 
C 
Rust 
Python
```

**Vấn đề:** Cách tiếp cận này sẽ lấy tất cả các giá trị, dẫn đến việc trùng lặp (ví dụ: 'Python' xuất hiện 2 lần).

### Sử dụng Tập hợp (Set) để lấy giá trị duy nhất

Để lấy danh sách các giá trị mà không bị lặp lại, chúng ta có thể bọc phương thức `.values()` trong một hàm `set()`. Một **set** là một tập hợp mà mỗi phần tử trong đó phải là duy nhất.

```Python
print("The following languages have been mentioned:")
# Sử dụng set() để loại bỏ các ngôn ngữ trùng lặp
for language in set(favorite_languages.values()):
    print(language.title())
```

```
Kết quả
The following languages have been mentioned: 
Python 
C 
Rust
```

- Để tạo set rỗng, ta dung: `my_set = set()`
	- Không thể dùng `{}` (vì cách tạo này là của dictionary)
#### Cách tạo một Set trực tiếp

Ta có thể tạo một set trực tiếp bằng cách sử dụng dấu ngoặc nhọn `{}` (giống dictionary nhưng không có cặp key-value):

```Python
languages = {'python', 'rust', 'python', 'c'}
print(languages)
# Kết quả: {'rust', 'python', 'c'} (thứ tự có thể thay đổi)
```

> [!IMPORTANT]
> 
> Phân biệt Set và Dictionary:
> 
> - Cả hai đều sử dụng dấu ngoặc nhọn `{}`.
>     
> - Nếu có các cặp key-value (`'key': 'value'`), đó là **Dictionary**.
>     
> - Nếu chỉ có các giá trị đơn lẻ cách nhau bằng dấu phẩy, đó là **Set**.
>     
> - Khác với List, Set không duy trì thứ tự cụ thể của các phần tử.
>     

# LỒNG NHAU (NESTING)
## 1. Khái niệm về Nesting (Lồng ghép)

Trong Python, đôi khi ta cần lưu trữ một tập hợp các từ điển (dictionaries) bên trong một danh sách (list), hoặc một danh sách các item bên trong một từ điển. Thậm chí, ta có thể lồng một từ điển vào bên trong một từ điển khác. Kỹ thuật này được gọi là **Nesting**. Đây là một tính năng rất mạnh mẽ giúp tổ chức dữ liệu phức tạp một cách khoa học.

## 2. Danh sách các từ điển (A List of Dictionaries)

Đây là trường hợp tạo ra nhiều từ điển, mỗi từ điển đại diện cho một đối tượng, sau đó lưu trữ tất cả chúng vào một danh sách.
```Python
alien_0 = {'color': 'green', 'points': 5}
alien_1 = {'color': 'yellow', 'points': 10}
alien_2 = {'color': 'red', 'points': 15}

# Lưu các từ điển vào một danh sách
aliens = [alien_0, alien_1, alien_2]

for alien in aliens:
    print(alien)

```

```
Kết quả
{'color': 'green', 'points': 5} 
{'color': 'yellow', 'points': 10} 
{'color': 'red', 'points': 15}
```

### Tạo tự động số lượng lớn bằng `range()` và `append()`

Trong thực tế, ta thường sẽ dùng vòng lặp để tạo ra hàng loạt đối tượng có cấu trúc giống nhau:

```Python
# Tạo danh sách trống để chứa aliens
aliens = []

# Tạo ra 30 aliens màu xanh
for alien_number in range(30):
    new_alien = {'color': 'green', 'points': 5, 'speed': 'slow'}
    aliens.append(new_alien)

# Hiển thị 5 aliens đầu tiên
for alien in aliens[:5]:
    print(alien)
print("...")

# Kiểm tra tổng số lượng aliens đã tạo
print(f"Total number of aliens: {len(aliens)}")
```

```
Kết quả
{'color': 'green', 'points': 5, 'speed': 'slow'} 
{'color': 'green', 'points': 5, 'speed': 'slow'} 
{'color': 'green', 'points': 5, 'speed': 'slow'} 
{'color': 'green', 'points': 5, 'speed': 'slow'} 
{'color': 'green', 'points': 5, 'speed': 'slow'} 
... 
Total number of aliens: 30
```
### Chỉnh sửa các đối tượng trong danh sách

Ta có thể dùng vòng lặp và câu lệnh điều kiện để thay đổi thuộc tính của một nhóm đối tượng cụ thể:

```Python
# Thay đổi thông số cho 3 aliens đầu tiên
for alien in aliens[:3]:
    if alien['color'] == 'green':
        alien['color'] = 'yellow'
        alien['speed'] = 'medium'
        alien['points'] = 10

# Show the first 5 aliens. 
for alien in aliens[:5]: 
	print(alien) 
	print("...")
```

```
Kết quả:

{'color': 'yellow', 'points': 10, 'speed': 'medium'} 
{'color': 'yellow', 'points': 10, 'speed': 'medium'}  
{'color': 'yellow', 'points': 10, 'speed': 'medium'} 
{'color': 'green', 'points': 5, 'speed': 'slow'} 
{'color': 'green', 'points': 5, 'speed': 'slow'} 
...
```

## 3. Danh sách trong từ điển (A List in a Dictionary)

Thay vì đặt một từ điển vào danh sách, ta có thể đặt một danh sách làm giá trị (value) của một khóa (key) trong từ điển. Điều này hữu ích khi một đối tượng có một thuộc tính chứa nhiều giá trị.

### Ví dụ 1: Đặt món Pizza

```Python
# Lưu trữ thông tin về một chiếc pizza đang được đặt
pizza = {
    'crust': 'thick',
    'toppings': ['mushrooms', 'extra cheese'],
}

# Tóm tắt đơn hàng
print(f"You ordered a {pizza['crust']}-crust pizza "
      "with the following toppings:")

for topping in pizza['toppings']:
    print(f"\t{topping}")
```

```
Kết quả

You odered a thick-crust pizza with the following toppings: 
	mushrooms 
	extra cheese
```

## 4. Từ điển trong từ điển (A Dictionary in a Dictionary)

Ta có thể lồng một từ điển vào bên trong một từ điển khác. 
### Ví dụ: Quản lý thông tin người dùng

```Python
users = {
    'aeinstein': {
        'first': 'albert',
        'last': 'einstein',
        'location': 'princeton',
    },
    'mcurie': {
        'first': 'marie',
        'last': 'curie',
        'location': 'paris',
    },
}

for username, user_info in users.items():
    print(f"\nUsername: {username}")
    full_name = f"{user_info['first']} {user_info['last']}"
    location = user_info['location']
    
    print(f"\tFull name: {full_name.title()}")
    print(f"\tLocation: {location.title()}")
```

```
Username: aeinstein 
	Full name: Albert Einstein 
	Location: Princeton Dictionaries   

Username: mcurie 
	Full name: Marie Curie 
	Location: Paris
```

> **Lưu ý quan trọng:**
> 
> - **Tính đồng nhất:** Cấu trúc của các từ điển lồng nhau nên giống hệt nhau (cùng các key) để việc xử lý bằng vòng lặp trở nên đơn giản.
>     
> - **Độ sâu:** Không nên lồng các danh sách và từ điển quá sâu (nhiều tầng). Nếu bạn thấy mình đang lồng quá nhiều lớp, có khả năng đang tồn tại một cách giải quyết đơn giản hơn hoặc bạn nên cân nhắc sử dụng Class (lớp).


