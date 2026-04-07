# 2. Danh sách là gì

Trong Python, một **List** là một tập hợp các mục (items) được sắp xếp theo một thứ tự cụ thể.

- Ta có thể tạo một danh sách chứa các chữ cái, các con số từ 0 đến 9, hoặc tên của tất cả các thành viên trong gia đình mình.

- Có thể đưa bất cứ thứ gì mình muốn vào một danh sách, và các mục trong đó không nhất thiết phải có mối liên hệ nào với nhau.

## 1. Cách khai báo một List

Trong Python, dấu ngoặc vuông `[]` được dùng để biểu thị một danh sách, và các phần tử riêng lẻ trong danh sách được ngăn cách với nhau bằng **dấu phẩy**.

> **Mẹo nhỏ:** Vì một danh sách thường chứa nhiều hơn một phần tử, bạn nên đặt tên biến ở dạng **số nhiều** (ví dụ: `letters`, `digits`, hoặc `names`).

```Python
bicycles = ['trek', 'cannondale', 'redline', 'specialized']
print(bicycles)
```

- Khi yêu cầu Python in một danh sách, nó sẽ trả về đại diện của danh sách đó bao gồm cả dấu ngoặc vuông:
```
['trek', 'cannondale', 'redline', 'specialized']
```
## 2. Truy cập các phần tử trong List

Vì danh sách là một tập hợp có thứ tự, ta có thể truy cập bất kỳ phần tử nào bằng cách cho Python biết vị trí (**index**) của mục đó. Để truy cập một phần tử, hãy viết tên danh sách, sau đó là chỉ số index được đặt trong **dấu ngoặc vuông**.

```Python
bicycles = ['trek', 'cannondale', 'redline', 'specialized']
print(bicycles[0])

# Kết quả: trek
```

> Lưu ý: Khi truy cập một phần tử đơn lẻ, Python chỉ trả về giá trị của phần tử đó mà không kèm theo dấu ngoặc vuông.

### Kết hợp với các phương thức chuỗi

Bạn có thể sử dụng các phương thức xử lý chuỗi (như `title()`, `upper()`, `lower()`) trên bất kỳ phần tử nào trong danh sách.

```Python
print(bicycles[0].title()) # Kết quả: Trek
```

## 3. Vị trí Index bắt đầu từ 0, không phải 1

Trong Python (và hầu hết các ngôn ngữ lập trình khác), phần tử đầu tiên trong danh sách được coi là ở **vị trí 0**, không phải vị trí 1.    

```Python

bicycles = ['trek', 'cannondale', 'redline', 'specialized']
print(bicycles[1]) # Trả về phần tử thứ hai: cannondale
print(bicycles[3]) # Trả về phần tử thứ tư: specialized
```

### Chỉ số Index âm (Truy cập từ cuối danh sách)

Python cung cấp một cú pháp đặc biệt để truy cập phần tử cuối cùng của danh sách bằng cách sử dụng chỉ số **-1**.

- Index `-1`: Trả về phần tử cuối cùng.

- Index `-2`: Trả về phần tử thứ hai tính từ cuối lên.

- Index `-3`: Trả về phần tử thứ ba tính từ cuối lên.

```Python
print(bicycles[-1]) # Kết quả: specialized
```

_Cú pháp này cực kỳ hữu ích khi muốn lấy phần tử cuối cùng mà không cần biết chính xác danh sách dài bao nhiêu._

---
## THAY ĐỔI, THÊM VÀ XÓA CÁC PHẦN TỬ TRONG LIST

Hầu hết các danh sách tạo ra sẽ mang tính **năng động (dynamic)**. Điều này có nghĩa sau khi xây dựng một danh sách, có thể thêm hoặc xóa các phần tử khi chương trình chạy (ví dụ: thêm quái vật mới vào trò chơi hoặc xóa người dùng khi họ hủy tài khoản).

## 1. Thay đổi phần tử trong List (Modifying Elements)

Cú pháp để thay đổi một phần tử tương tự như cú pháp truy cập phần tử đó. 

- Sử dụng tên danh sách kèm theo chỉ số (index) của phần tử muốn thay đổi, sau đó gán giá trị mới.
```Python
motorcycles = ['honda', 'yamaha', 'suzuki']
print(motorcycles)

# Thay đổi phần tử đầu tiên thành 'ducati'
motorcycles[0] = 'ducati'
print(motorcycles)
```
```
# Kết quả
['honda', 'yamaha', 'suzuki']

['ducati', 'yamaha', 'suzuki'] (Phần tử đầu tiên đã bị thay thế).
```

## 2. Thêm phần tử vào List (Adding Elements)

Python cung cấp nhiều cách để thêm dữ liệu mới vào một danh sách hiện có.

### Thêm vào cuối danh sách với `append()`

Phương pháp đơn giản nhất là dùng `.append()`, nó sẽ đưa phần tử mới vào vị trí cuối cùng.

``` Python
motorcycles = ['honda', 'yamaha', 'suzuki']
motorcycles.append('ducati')
print(motorcycles)
# Kết quả: ['honda', 'yamaha', 'suzuki', 'ducati']
```

Ta cũng có thể bắt đầu với một danh sách trống và thêm dần các phần tử:
```Python
motorcycles = []
motorcycles.append('honda')
motorcycles.append('yamaha')
motorcycles.append('suzuki')
print(motorcycles)

# Kết quả: ['honda', 'yamaha', 'suzuki']
```

### Chèn phần tử vào vị trí bất kỳ với `insert()`

Thêm một phần tử mới vào bất kỳ vị trí nào bằng cách dùng `insert()` và chỉ định **chỉ số (index)** và **giá trị**. Phương pháp này sẽ đẩy các phần tử còn lại sang bên phải.

```Python
motorcycles = ['honda', 'yamaha', 'suzuki']
motorcycles.insert(0, 'ducati')
print(motorcycles)
# Kết quả: ['ducati', 'honda', 'yamaha', 'suzuki']
```

## 3. Xóa phần tử khỏi List (Removing Elements)

Tùy vào nhu cầu (biết vị trí hay biết giá trị), có các cách xóa sau:

### Sử dụng câu lệnh `del` (Biết vị trí)

Nếu biết rõ vị trí của phần tử cần xóa và **không cần dùng lại** giá trị đó sau khi xóa.

```Python
motorcycles = ['honda', 'yamaha', 'suzuki']
del motorcycles[0] # Xóa phần tử đầu tiên
print(motorcycles)
# Kết quả: ['yamaha', 'suzuki']
```

### Sử dụng phương thức `pop()` (Xóa và lấy giá trị)

Phương thức `.pop()` xóa phần tử cuối cùng khỏi danh sách, nhưng nó **trả về (return)** giá trị đó để bạn có thể tiếp tục sử dụng.

```Python
motorcycles = ['honda', 'yamaha', 'suzuki']
popped_motorcycle = motorcycles.pop()
print(motorcycles)        # Kết quả: ['honda', 'yamaha']
print(popped_motorcycle) # Kết quả: suzuki
```
#### Sử dụng phương thức`.pop(index)` 

Dùng .pop(index) để  xóa ở vị trí và lấy ra bất kỳ phần tử nào.

```Python
motorcycles = ['honda', 'yamaha', 'suzuki']
first_owned = motorcycles.pop(0)
print(f"The first motorcycle I owned was a {first_owned.title()}.")
# Kết quả: The first motorcycle I owned was a Honda.
```

> **Lưu ý:** Khi nào dùng `del` và khi nào dùng `pop()`?
> 
> - Dùng **`del`**: Khi muốn xóa hẳn và không dùng đến phần tử đó nữa.
>     
> - Dùng **`pop()`**: Khi muốn xóa nhưng vẫn cần dùng lại giá trị vừa xóa.
>     

### Xóa phần tử theo giá trị với `remove()`

Nếu không biết vị trí nhưng biết **giá trị** của phần tử cần xóa.

```Python
motorcycles = ['honda', 'yamaha', 'suzuki', 'ducati']
motorcycles.remove('ducati')
print(motorcycles)
# Kết quả: ['honda', 'yamaha', 'suzuki']
```

Cũng có thể lưu giá trị vào biến trước khi xóa để in thông báo:

```Python
motorcycles = ['honda', 'yamaha', 'suzuki', 'ducati']
too_expensive = 'ducati'
motorcycles.remove(too_expensive)
print(f"\nA {too_expensive.title()} is too expensive for me.")
```

> **Ghi chú quan trọng:** Phương thức `remove()` chỉ xóa **lần xuất hiện đầu tiên** của giá trị đó. Nếu giá trị xuất hiện nhiều lần, cần sử dụng vòng lặp.

---
Chào bạn, đây là nội dung bài soạn lý thuyết về chủ đề **"Organizing a List" (Tổ chức một danh sách)** trong Python, được tổng hợp đầy đủ và bám sát theo các ví dụ từ tài liệu bạn đã cung cấp.

---

# TỔ CHỨC VÀ SẮP XẾP DANH SÁCH (ORGANIZING A LIST)

Thông thường, các danh sách (list) được tạo ra sẽ có thứ tự không thể dự đoán trước được. Tuy nhiên, trong quá trình lập trình, chúng ta thường cần trình bày dữ liệu theo một thứ tự nhất định. Python cung cấp nhiều cách để sắp xếp danh sách tùy thuộc vào tình huống cụ thể.

## 1. Sắp xếp danh sách vĩnh viễn với phương thức `sort()`

Phương thức `sort()` giúp việc sắp xếp danh sách trở nên dễ dàng. Nó thay đổi thứ tự của danh sách **vĩnh viễn** (không thể khôi phục lại thứ tự ban đầu).

- **Sắp xếp theo thứ tự bảng chữ cái:**

```Python
cars = ['bmw', 'audi', 'toyota', 'subaru']
cars.sort()
print(cars)
# Kết quả: ['audi', 'bmw', 'subaru', 'toyota']
```

- Sắp xếp theo thứ tự ngược bảng chữ cái:

	-  Chỉ cần truyền thêm đối số reverse=True vào phương thức sort().

```Python
cars = ['bmw', 'audi', 'toyota', 'subaru']
cars.sort(reverse=True)
print(cars)
# Kết quả: ['toyota', 'subaru', 'bmw', 'audi']
```


## 2. Sắp xếp danh sách tạm thời với hàm `sorted()`

Để duy trì thứ tự gốc của danh sách nhưng hiển thị nó theo một thứ tự sắp xếp nhất định, ta sử dụng hàm `sorted()`. Hàm này cho phép bạn hiển thị danh sách theo thứ tự nhưng **không ảnh hưởng** đến thứ tự thực tế của danh sách đó.


```Python
cars = ['bmw', 'audi', 'toyota', 'subaru']

print(cars)
# Kết quả: ['bmw', 'audi', 'toyota', 'subaru']

print(sorted(cars))
# Kết quả: ['audi', 'bmw', 'subaru', 'toyota']

print(cars)
# Kết quả: ['bmw', 'audi', 'toyota', 'subaru']

```

> **Lưu ý:** Hàm `sorted()` cũng có thể nhận đối số `reverse=True` nếu bạn muốn hiển thị danh sách theo thứ tự ngược bảng chữ cái.


> **Ghi chú về chữ hoa/thường:** Việc sắp xếp sẽ khác nếu danh sách có chứa các ký tự viết hoa. Vì trong bảng ASCII thì số thứ tự của chữ hoa luôn nhỏ hơn số thứ tự của chữ thường, do đó chữ hoa luôn đứng trước chữ thường khi dùng phương thức `sort()` hay `sorted()`.
> 	- **Các chữ cái VIẾT HOA** (A-Z) có giá trị từ **65 đến 90**.
> 	- **Các chữ cái viết thường** (a-z) có giá trị từ **97 đến 122**.

## 3. Đảo ngược thứ tự danh sách với phương thức `reverse()`

Để đảo ngược thứ tự ban đầu của một danh sách, có thể dùng phương thức `reverse()`. Cần lưu ý rằng `reverse()` **không sắp xếp** theo bảng chữ cái ngược, nó chỉ đơn giản là đảo ngược vị trí các phần tử từ cuối lên đầu.

```Python
cars = ['bmw', 'audi', 'toyota', 'subaru']
print(cars)

cars.reverse()
print(cars)
# Kết quả: ['subaru', 'toyota', 'audi', 'bmw']
```

- **Đặc điểm:** Phương thức này thay đổi thứ tự danh sách vĩnh viễn, nhưng ta có thể quay lại thứ tự ban đầu bất cứ lúc nào bằng cách gọi lại `reverse()` một lần nữa trên danh sách đó.

## 4. Tìm độ dài của danh sách với hàm `len()`

Tìm ra số lượng phần tử có trong một danh sách bằng cách sử dụng hàm `len()`.

```Python
cars = ['bmw', 'audi', 'toyota', 'subaru']
len(cars)
# Kết quả: 4
```


> Lưu ý: Python bắt đầu đếm các phần tử trong danh sách từ **1**, vì vậy sẽ không gặp lỗi "off-by-one" khi xác định độ dài danh sách.
