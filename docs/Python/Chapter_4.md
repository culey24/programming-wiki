# 4. Kiểm tra điều kiện

## 1. Giới thiệu về Kiểm tra điều kiện

Trọng tâm của mọi câu lệnh `if` là một biểu thức có thể được đánh giá là **True** (Đúng) hoặc **False** (Sai). Biểu thức này được gọi là một **Conditional Test** (Kiểm tra điều kiện).

## 2. Kiểm tra sự bằng nhau (Equality)

Để kiểm tra xem giá trị của một biến có bằng một giá trị cụ thể hay không, ta sử dụng toán tử bằng **(`==`)**.

> **Lưu ý quan trọng:** Đừng nhầm lẫn giữa một dấu bằng (`=`) và hai dấu bằng (`==`).
> 
> - `=` là lệnh gán: "Gán giá trị của car bằng 'audi'".
>     
> - `==` là một câu hỏi: "Giá trị của car có bằng 'bmw' không?".
>     

```Python
car = 'bmw'
print(car == 'bmw')  # Kết quả: True

car = 'audi'
print(car == 'bmw')  # Kết quả: False
```

### Bỏ qua sự phân biệt chữ hoa chữ thường

Trong Python, việc kiểm tra sự bằng nhau có phân biệt chữ hoa và chữ thường.

```Python
car = 'Audi'
print(car == 'audi') # Kết quả: False
```

Nếu muốn kiểm tra mà không quan tâm đến định dạng chữ, hãy sử dụng phương thức `.lower()`:

```Python
car = 'Audi'
print(car.lower() == 'audi') # Kết quả: True
```

> **Lưu ý**: Phương thức `.lower()` không làm thay đổi giá trị gốc được lưu trong biến.

## 3. Kiểm tra sự không bằng nhau (Inequality)

Để kiểm tra xem hai giá trị có khác nhau hay không, ta sử dụng toán tử **(`!=`)**.

```Python
requested_topping = 'mushrooms'

if requested_topping != 'anchovies':
    print("Hold the anchovies!")
```

- Kết quả: Python so sánh 'mushrooms' với 'anchovies'. Vì chúng không khớp nhau, biểu thức trả về `True` và thực thi lệnh `print`.

## 4. So sánh các giá trị số (Numerical Comparisons)

Việc kiểm tra các giá trị số rất trực quan. Ta có thể sử dụng các toán tử toán học sau:

- `==` (Bằng)
    
- `!=` (Khác)
    
- `<` (Nhỏ hơn)
    
- `<=` (Nhỏ hơn hoặc bằng)
    
- `>` (Lớn hơn)
    
- `>=` (Lớn hơn hoặc bằng)


```Python
age = 18
print(age == 18) # True

answer = 17
if answer != 42:
    print("That is not the correct answer. Please try again!")

age = 19
print(age < 21)  # True
print(age <= 21) # True
print(age > 21)  # False
print(age >= 21) # False
```

## 5. Kiểm tra nhiều điều kiện cùng lúc

Đôi khi ta cần kiểm tra nhiều điều kiện đồng thời bằng cách sử dụng các từ khóa `and` và `or`.

### Sử dụng `and` (VÀ)

Để biểu thức tổng quát là `True`, **tất cả** các điều kiện thành phần phải cùng đúng. Nếu một trong hai sai, kết quả sẽ là `False`.

```Python
age_0 = 22
age_1 = 18
print(age_0 >= 21 and age_1 >= 21) # Kết quả: False (vì age_1 < 21)

age_1 = 22
print(age_0 >= 21 and age_1 >= 21) # Kết quả: True (cả hai đều >= 21)
```

### Sử dụng `or` (HOẶC)

Biểu thức sẽ trả về `True` nếu **ít nhất một** trong các điều kiện thành phần là đúng. Nó chỉ trả về `False` khi tất cả các điều kiện đều sai.


```Python
age_0 = 22
age_1 = 18
print(age_0 >= 21 or age_1 >= 21) # Kết quả: True (vì age_0 thỏa mãn)

age_0 = 18
print(age_0 >= 21 or age_1 >= 21) # Kết quả: False (cả hai đều sai)
```

## 6. Kiểm tra giá trị trong danh sách (List)

### Kiểm tra sự tồn tại với `in`

Sử dụng từ khóa `in` để biết một giá trị cụ thể đã có trong danh sách hay chưa.

```Python
requested_toppings = ['mushrooms', 'onions', 'pineapple']
print('mushrooms' in requested_toppings) # True
print('pepperoni' in requested_toppings) # False
```

### Kiểm tra sự không tồn tại với `not in`

Sử dụng `not in` để kiểm tra nếu một giá trị không xuất hiện trong danh sách.

```Python
banned_users = ['andrew', 'carolina', 'david']
user = 'marie'

if user not in banned_users:
    print(f"{user.title()}, you can post a response if you wish.")
```

# Cấu trúc Điều kiện trong Python (If Statements)

## 1. Câu lệnh `if` đơn giản (Simple if Statements)

```Python
if conditional_test:
	do something
```

- Thụt lề (indentation) đóng vai trò cực kỳ quan trọng. Mọi dòng code được thụt lề sau câu lệnh `if` sẽ được thực thi nếu điều kiện là `True`.

```Python
age = 19
if age >= 18:
    print("You are old enough to vote!")
    print("Have you registered to vote yet?")
```

## 2. Câu lệnh `if-else`

Sử dụng khi muốn thực hiện một hành động khi điều kiện vượt qua và một hành động khác khi điều kiện thất bại.

```Python
age = 17
if age >= 18:
    print("You are old enough to vote!")
else:
    print("Sorry, you are too young to vote.")
    print("Please register to vote as soon as you turn 18!")
```

## 3. Chuỗi `if-elif-else` (The if-elif-else Chain)

Sử dụng khi có nhiều hơn hai tình huống cần xử lý. Python sẽ chạy các điều kiện theo thứ tự từ trên xuống dưới cho đến khi tìm thấy điều kiện đúng. Khi một điều kiện đã thỏa mãn, các khối còn lại sẽ bị bỏ qua.

**Ví dụ: Giá vé công viên theo độ tuổi**

- Dưới 4 tuổi: Miễn phí ($0).
    
- Từ 4 đến 18 tuổi: $25.
    
- Từ 18 tuổi trở lên: $40.

```Python
age = 12

if age < 4:
    price = 0
elif age < 18:
    price = 25
else:
    price = 40

print(f"Your admission cost is ${price}.")
```

## 4. Sử dụng nhiều khối `elif`

Ta có thể sử dụng bao nhiêu khối `elif` tùy thích trong một chuỗi.

**Ví dụ:** Thêm mức giá ưu đãi cho người cao tuổi (từ 65 tuổi trở lên trả $20).

```Python
age = 12

if age < 4:
    price = 0
elif age < 18:
    price = 25
elif age < 65:
    price = 40
else:
    price = 20

print(f"Your admission cost is ${price}.")
```

## 5. Bỏ qua khối `else` (Omitting the else Block)

Khối `else` là một "chiếc lưới" bắt tất cả mọi trường hợp không khớp với các điều kiện trên. Tuy nhiên, đôi khi nó có thể bao hàm cả những dữ liệu không hợp lệ hoặc không mong muốn. Để an toàn và rõ ràng hơn, bạn có thể thay `else` bằng một khối `elif` cụ thể.


```Python
if age < 4:
    price = 0
elif age < 18:
    price = 25
elif age < 65:
    price = 40
elif age >= 65: # Thay thế else bằng điều kiện cụ thể
    price = 20

print(f"Your admission cost is ${price}.")
```

> **Lợi ích:** Bạn sẽ tự tin hơn vì code chỉ chạy dưới những điều kiện chính xác mà bạn đã xác định.


## 6. Kiểm tra nhiều điều kiện (Testing Multiple Conditions)

Chuỗi `if-elif-else` chỉ phù hợp khi bạn **chỉ cần một** điều kiện thỏa mãn. Nếu muốn kiểm tra và thực hiện **tất cả** các điều kiện thỏa mãn, hãy sử dụng các câu lệnh `if` độc lập.

**Ví dụ: Chọn topping cho Pizza**

```Python
requested_toppings = ['mushrooms', 'extra cheese']

if 'mushrooms' in requested_toppings:
    print("Adding mushrooms.")
if 'pepperoni' in requested_toppings:
    print("Adding pepperoni.")
if 'extra cheese' in requested_toppings:
    print("Adding extra cheese.")

print("\nFinished making your pizza!")
```

Tại sao không dùng elif ở đây?

Nếu dùng elif, ngay khi Python tìm thấy 'mushrooms', nó sẽ bỏ qua tất cả các lựa chọn topping còn lại, dẫn đến việc thiếu toppings của khách hàng.

# Sử dụng câu lệnh `if` với Danh sách (Lists)

## 1. Kiểm tra các phần tử đặc biệt (Checking for Special Items)

Thông thường, chúng ta sử dụng vòng lặp `for` để duyệt qua tất cả các phần tử trong danh sách. Tuy nhiên, đôi khi bạn cần xử lý một số phần tử theo cách riêng.

**Ví dụ:** Một cửa hàng pizza đang chuẩn bị đơn hàng. Nếu cửa hàng hết một loại nguyên liệu nào đó (ví dụ: ớt chuông xanh), chúng ta cần thông báo cho khách hàng thay vì chỉ thêm nó vào một cách bình thường.

```Python
requested_toppings = ['mushrooms', 'green peppers', 'extra cheese']

for requested_topping in requested_toppings:
    if requested_topping == 'green peppers':
        print("Sorry, we are out of green peppers right now.")
    else:
        print(f"Adding {requested_topping}.")

print("\nFinished making your pizza!")
```

``` 
# Kết quả
Adding mushrooms.
Sorry, we are out of green peppers right now.
Adding extra cheese.

Finished making your pizza!
```
## 2. Kiểm tra danh sách không rỗng (Checking That a List Is Not Empty)

Trước khi thực hiện các thao tác với danh sách, đôi khi chúng ta cần đảm bảo rằng danh sách đó thực sự có chứa dữ liệu. Trong Python, một danh sách trống sẽ trả về giá trị `False` khi được đặt trong một điều kiện kiểm tra.

**Ví dụ:** Nếu khách hàng chưa chọn bất kỳ loại topping nào, chúng ta nên hỏi xác nhận xem họ có muốn một chiếc pizza không nhân hay không.

```Python
requested_toppings = []

if requested_toppings:
    for requested_topping in requested_toppings:
        print(f"Adding {requested_topping}.")
    print("\nFinished making your pizza!")
else:
    print("Are you sure you want a plain pizza?")
```

```
# Kết quả 
Are you sure you want a plain pizza?
```

> **Lưu ý:** Khi tên của một danh sách được sử dụng trong câu lệnh `if`, Python sẽ trả về `True` nếu danh sách có ít nhất một phần tử và `False` nếu danh sách rỗng.

## 3. Sử dụng nhiều danh sách (Using Multiple Lists)

Trong các bài toán thực tế, ta thường phải đối chiếu dữ liệu giữa hai danh sách khác nhau. 

**Ví dụ:** Kiểm tra xem các yêu cầu của khách hàng có nằm trong danh sách nguyên liệu có sẵn hay không.

```Python
available_toppings = ['mushrooms', 'olives', 'green peppers', 
                      'pepperoni', 'pineapple', 'extra cheese']

requested_toppings = ['mushrooms', 'french fries', 'extra cheese']

for requested_topping in requested_toppings:
    if requested_topping in available_toppings:
        print(f"Adding {requested_topping}.")
    else:
        print(f"Sorry, we don't have {requested_topping}.")

print("\nFinished making your pizza!")
```

```
# Kết quả 
Adding mushrooms.
Sorry, we don't have french fries.
Adding extra cheese.

Finished making your pizza!
```

> **Lưu ý sử dụng Tuple:** Danh sách `available_toppings` có thể được khai báo dưới dạng một **tuple** nếu cửa hàng có một danh sách nguyên liệu cố định và không thay đổi.
