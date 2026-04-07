# 7. Tạo và sử dụng lớp

## 1. Tạo lớp Dog (Creating the Dog Class)

Mỗi thực thể được tạo từ lớp `Dog` sẽ lưu trữ tên và tuổi, đồng thời có khả năng thực hiện hành động `sit()` và `roll_over()`.

```Python
class Dog:
    """Một nỗ lực đơn giản để mô hình hóa một con chó."""

    def __init__(self, name, age):
        """Khởi tạo thuộc tính tên và tuổi."""
        self.name = name
        self.age = age

    def sit(self):
        """Mô phỏng hành động ngồi khi được ra lệnh."""
        print(f"{self.name} is now sitting.")

    def roll_over(self):
        """Mô phỏng hành động lăn tròn khi được ra lệnh."""
        print(f"{self.name} rolled over!")
```

### Các lưu ý quan trọng:

- **Quy ước đặt tên:** Trong Python, tên lớp thường được viết hoa chữ cái đầu (ví dụ: `Dog`). Không có dấu ngoặc đơn trong định nghĩa lớp vì chúng ta đang tạo lớp này từ đầu.

- **Docstring:** Dòng nằm trong dấu ngoặc kép `"""..."""` mô tả chức năng của lớp.

## 2. Phương thức `__init__()`

Phương thức `__init__()` là một phương thức đặc biệt mà Python sẽ **tự động chạy** bất cứ khi nào chúng ta tạo một thực thể mới dựa trên lớp `Dog`.

- **Dấu gạch dưới:** Nó có hai dấu gạch dưới phía trước và hai dấu phía sau (`__init__`). Đây là quy ước để ngăn các tên phương thức mặc định của Python xung đột với tên phương thức của chúng ta.
    
- **Tham số `self`:** Đây là tham số bắt buộc và phải đứng đầu tiên. Khi Python gọi phương thức này sau đó, nó sẽ tự động truyền đối số `self` vào. Nó là một tham chiếu đến chính thực thể đang được tạo, giúp thực thể truy cập vào các thuộc tính và phương thức trong lớp.
    
- **Thuộc tính (Attributes):** Các biến có tiền tố `self` (như `self.name` và `self.age`) được gọi là thuộc tính. Chúng có thể truy cập được bởi mọi phương thức trong lớp và thông qua bất kỳ thực thể nào được tạo từ lớp đó.

## 3. Tạo một thực thể từ một Lớp (Making an Instance)

Hãy coi lớp như một bộ hướng dẫn cách tạo ra một thực thể.

```Python
my_dog = Dog('Willie', 6)

print(f"My dog's name is {my_dog.name}.")
print(f"My dog is {my_dog.age} years old.")
```

**Quy trình hoạt động:**

1. Khi Python đọc dòng `Dog('Willie', 6)`, nó gọi phương thức `__init__()` trong lớp `Dog` với các đối số 'Willie' và 6.
    
2. Phương thức `__init__()` tạo ra một thực thể đại diện cho con chó này và thiết lập các thuộc tính `name` và `age`.
    
3. Python trả về thực thể đó và chúng ta gán nó vào biến `my_dog`.
    

## 4. Làm việc với Thực thể (Instance)

### Truy cập thuộc tính (Accessing Attributes)

Để truy cập thuộc tính, chúng ta sử dụng **ký hiệu dấu chấm** (`.`).

- Ví dụ: my_dog.name
    
    Python sẽ tìm đến thực thể my_dog và tìm giá trị của thuộc tính name gắn liền với nó.
    

### Gọi phương thức (Calling Methods)

Chúng ta cũng dùng ký hiệu dấu chấm để gọi bất kỳ phương thức nào đã định nghĩa trong lớp.

```Python
my_dog = Dog('Willie', 6)
my_dog.sit()
my_dog.roll_over()
```

**Kết quả đầu ra:**

> Willie is now sitting.
> 
> Willie rolled over!

## 5. Tạo nhiều thực thể (Creating Multiple Instances)

Ta có thể tạo bao nhiêu thực thể từ một lớp tùy ý.

```Python
my_dog = Dog('Willie', 6)
your_dog = Dog('Lucy', 3)

print(f"My dog's name is {my_dog.name}.")
my_dog.sit()

print(f"\nYour dog's name is {your_dog.name}.")
your_dog.sit()
```

**Đặc điểm:**

- Mỗi thực thể là một bản thể riêng biệt với bộ thuộc tính riêng, ngay cả khi chúng có cùng tên hoặc tuổi.
    
- Chúng đều có khả năng thực hiện các hành động giống nhau (các phương thức chung).

Chào ta, đây là nội dung chi tiết cho bài học **"Working with Classes and Instances" (Làm việc với Lớp và Thực thể)** trong Python, được biên soạn bám sát theo tài liệu và ví dụ từ các hình ảnh ta đã cung cấp.

---
# LÀM VIỆC VỚI LỚP (CLASSES) VÀ THỰC THỂ (INSTANCES)
## Làm việc với Lớp (Classes) và Thực thể (Instances)

Khi xây dựng một lớp, phần lớn thời gian ta sẽ dành cho việc làm việc với các **thực thể (instances)** được tạo ra từ lớp đó. Một trong những nhiệm vụ quan trọng nhất là sửa đổi các thuộc tính (attributes) gắn liền với một thực thể cụ thể. ta có thể thay đổi thuộc tính trực tiếp hoặc viết các phương thức để cập nhật chúng theo những cách cụ thể.

### 1. Lớp Car (The Car Class)

Hãy bắt đầu với một lớp đại diện cho một chiếc xe hơi. Lớp này sẽ lưu trữ thông tin về loại xe và có một phương thức để tóm tắt thông tin đó.

```Python
class Car:
    """Một nỗ lực đơn giản để đại diện cho một chiếc xe hơi."""

    def __init__(self, make, model, year):
        """Khởi tạo các thuộc tính để mô tả một chiếc xe."""
        self.make = make
        self.model = model
        self.year = year

    def get_descriptive_name(self):
        """Trả về một tên mô tả được định dạng gọn gàng."""
        long_name = f"{self.year} {self.make} {self.model}"
        return long_name.title()

my_new_car = Car('audi', 'a4', 2024)
print(my_new_car.get_descriptive_name())
```

```
Kết quả

2024 Audi A4
```

**Giải thích:**

- **`__init__()`**: Phương thức khởi tạo với tham số `self` đầu tiên, theo sau là các thông số cụ thể của xe: `make` (hãng), `model` (dòng xe), và `year` (năm sản xuất).
    
- **`get_descriptive_name()`**: Phương thức này kết hợp năm, hãng và dòng xe thành một chuỗi văn bản mô tả.
    

### 2. Thiết lập giá trị mặc định cho thuộc tính

Không phải mọi thuộc tính đều cần được truyền vào qua tham số. ta có thể định nghĩa giá trị mặc định cho thuộc tính ngay trong phương thức `__init__()`.

**Ví dụ**: chúng ta thêm thuộc tính `odometer_reading` (số dặm trên đồng hồ) với giá trị khởi tạo luôn là 0:

``` Python
class Car:
    def __init__(self, make, model, year):
        self.make = make
        self.model = model
        self.year = year
        self.odometer_reading = 0  # Giá trị mặc định

    def read_odometer(self):
        """In một câu thông báo về số dặm của xe."""
        print(f"This car has {self.odometer_reading} miles on it.")

my_new_car = Car('audi', 'a4', 2024)
my_new_car.read_odometer()
```

### 3. Thay đổi giá trị của thuộc tính (Modifying Attribute Values)

ta có thể thay đổi giá trị của thuộc tính theo ba cách:

#### Cách 1: Thay đổi giá trị trực tiếp thông qua thực thể

Đây là cách đơn giản nhất, sử dụng ký hiệu dấu chấm để truy cập và gán giá trị mới.
```Python
my_new_car.odometer_reading = 23
my_new_car.read_odometer()
```
```
Kết quả

This car has 23 miles on it.
```


#### Cách 2: Thay đổi thông qua một phương thức (Method)

Việc sử dụng phương thức giúp ta kiểm soát cách giá trị được cập nhật và có thể thêm logic kiểm tra.

```Python
class Car:
    # --snip--
    def update_odometer(self, mileage):
        """
        Đặt giá trị đồng hồ quãng đường thành giá trị đã cho.
        Từ chối thay đổi nếu có ý định quay ngược đồng hồ.
        """
        if mileage >= self.odometer_reading:
            self.odometer_reading = mileage
        else:
            print("You can't roll back an odometer!")

my_new_car.update_odometer(23)
my_new_car.read_odometer()
```

#### Cách 3: Tăng giá trị thông qua một phương thức

Đôi khi ta muốn cộng thêm một lượng nhất định vào giá trị hiện tại thay vì đặt một giá trị hoàn toàn mới.

```Python
class Car:
    # --snip--
    def increment_odometer(self, miles):
        """Cộng thêm một lượng nhất định vào số quãng đường."""
        self.odometer_reading += miles

my_used_car = Car('subaru', 'outback', 2019)
print(my_used_car.get_descriptive_name())

my_used_car.update_odometer(23_500)
my_used_car.read_odometer()

my_used_car.increment_odometer(100)
my_used_car.read_odometer()
```
```

 Kết quả: 
 
 2019 Subaru Outback
 
 This car has 23500 miles on it.
 
 This car has 23600 miles on it.
```

# KẾ THỪA (INHERITANCE)
## 1. Kế thừa (Inheritance) là gì?

Khi ta viết một lớp (class) mới dựa trên một lớp đã có sẵn, ta có thể sử dụng **kế thừa**. Lớp ban đầu được gọi là **lớp cha (parent class/superclass)** và lớp mới được gọi là **lớp con (child class/subclass)**.

Lớp con sẽ tự động thừa hưởng tất cả các thuộc tính và phương thức của lớp cha, đồng thời nó cũng có thể định nghĩa thêm các thuộc tính và phương thức riêng của mình.

## 2. Phương thức `__init__()` cho lớp con

Khi tạo một lớp con, ta thường muốn gọi phương thức `__init__()` từ lớp cha để khởi tạo các thuộc tính đã được định nghĩa trong lớp cha.

**Ví dụ:** Chúng ta có lớp cha là `Car` và lớp con là `ElectricCar`.

```Python
class Car:
    """Một nỗ lực đơn giản để đại diện cho một chiếc xe hơi."""
    def __init__(self, make, model, year):
        self.make = make
        self.model = model
        self.year = year
        self.odometer_reading = 0

    def get_descriptive_name(self):
        long_name = f"{self.year} {self.make} {self.model}"
        return long_name.title()

    def read_odometer(self):
        print(f"This car has {self.odometer_reading} miles on it.")

class ElectricCar(Car):
    """Đại diện cho các khía cạnh của xe hơi, cụ thể là xe điện."""
    def __init__(self, make, model, year):
        """Khởi tạo các thuộc tính của lớp cha."""
        super().__init__(make, model, year)

my_leaf = ElectricCar('nissan', 'leaf', 2024)
print(my_leaf.get_descriptive_name())
```

> **Lưu ý:** Hàm `super()` là một hàm đặc biệt giúp Python gọi phương thức từ lớp cha. Dòng `super().__init__(...)` cho phép thực hiện mọi thiết lập từ lớp cha cho thực thể của lớp con.

## 3. Định nghĩa thuộc tính và phương thức riêng cho lớp con

Sau khi lớp con kế thừa từ lớp cha, ta có thể thêm bất kỳ thuộc tính hoặc phương thức mới nào để làm cho lớp con khác biệt.

**Ví dụ:** Thêm thuộc tính dung lượng pin cho xe điện.

```Python
class ElectricCar(Car):
    def __init__(self, make, model, year):
        super().__init__(make, model, year)
        # Thêm thuộc tính riêng cho lớp con
        self.battery_size = 40 

    def describe_battery(self):
        """In một thông báo mô tả về dung lượng pin."""
        print(f"This car has a {self.battery_size}-kWh battery.")

my_leaf = ElectricCar('nissan', 'leaf', 2024)
print(my_leaf.get_descriptive_name())
my_leaf.describe_battery()
```

## 4. Ghi đè phương thức từ lớp cha (Overriding)

Nếu một phương thức từ lớp cha không phù hợp với lớp con, ta có thể **ghi đè (override)** nó bằng cách định nghĩa một phương thức có cùng tên trong lớp con. Python sẽ bỏ qua phương thức ở lớp cha và chỉ chạy mã ta định nghĩa trong lớp con.12

**Ví dụ:** Xe điện không có bình xăng, nên ta ghi đè phương thức `fill_gas_tank()`.

```Python
class ElectricCar(Car):
    # ... (các phần khác của lớp)
    def fill_gas_tank(self):
        """Xe điện không có bình xăng."""
        print("This car doesn't have a gas tank!")
```
## 5. Sử dụng thực thể làm thuộc tính (Composition)

Khi lớp của ta trở nên quá phức tạp với nhiều thuộc tính và phương thức, ta có thể tách một phần của lớp đó thành một lớp riêng biệt và sử dụng thực thể của nó như một thuộc tính trong lớp lớn hơn.

**Ví dụ:** Tách các thuộc tính liên quan đến pin thành lớp `Battery`.

```Python
class Battery:
    """Một nỗ lực đơn giản để mô hình hóa pin cho xe điện."""
    def __init__(self, battery_size=40):
        self.battery_size = battery_size

    def describe_battery(self):
        print(f"This car has a {self.battery_size}-kWh battery.")
        
    def get_range(self):
        """In ra thông tin về quãng đường xe đi được dựa trên dung lượng pin."""
        if self.battery_size == 40:
            range = 150
        elif self.battery_size == 65:
            range = 225
        print(f"This car can go about {range} miles on a full charge.")

class ElectricCar(Car):
    def __init__(self, make, model, year):
        super().__init__(make, model, year)
        # Sử dụng thực thể lớp Battery làm thuộc tính
        self.battery = Battery()

my_leaf = ElectricCar('nissan', 'leaf', 2024)
print(my_leaf.get_descriptive_name())
my_leaf.battery.describe_battery()
my_leaf.battery.get_range()
```

# NHẬP CÁC CLASS

Khi ta thêm càng nhiều chức năng vào chương trình, file mã nguồn sẽ trở nên rất dài. Theo triết lý của Python, nên giữ cho các file của mình gọn gàng nhất có thể. Để hỗ trợ việc này, Python cho phép lưu trữ các class trong các **module** (các file riêng biệt) và sau đó **import** (nhập) chúng vào chương trình chính.

## 1. Import một Class đơn lẻ

Giả sử chúng ta có một module tên là `car.py` chứa class `Car`. Để sử dụng class này ở một file khác, chúng ta sử dụng cú pháp `from ... import ...`.

**File `car.py`:**

```Python
"""Một lớp dùng để đại diện cho ô tô."""

class Car:
    """Một nỗ lực đơn giản để mô phỏng một chiếc ô tô."""
    def __init__(self, make, model, year):
        self.make = make
        self.model = model
        self.year = year
        self.odometer_reading = 0

    def get_descriptive_name(self):
        long_name = f"{self.year} {self.make} {self.model}"
        return long_name.title()

    def read_odometer(self):
        print(f"This car has {self.odometer_reading} miles on it.")

    def update_odometer(self, mileage):
        if mileage >= self.odometer_reading:
            self.odometer_reading = mileage
        else:
            print("You can't roll back an odometer!")

    def increment_odometer(self, miles):
        self.odometer_reading += miles
```

**File chương trình chính `my_car.py`:**



```Python
from car import Car

my_new_car = Car('audi', 'a4', 2024)
print(my_new_car.get_descriptive_name())

my_new_car.odometer_reading = 23
my_new_car.read_odometer()
```

> **Lợi ích:** Việc import class giúp chương trình chính sạch sẽ, dễ đọc và tách biệt logic xử lý dữ liệu sang các file riêng.

---

## 2. Lưu trữ và Import nhiều Class từ một Module

ta có thể lưu trữ nhiều class có liên quan đến nhau trong cùng một module. Ví dụ, module `car.py` có thể chứa thêm các class `Battery` và `ElectricCar`.

### Import nhiều class cụ thể:

Để sử dụng cả xe xăng và xe điện trong cùng một file, ta liệt kê các class cách nhau bằng dấu phẩy.

**File `my_cars.py`:**



```Python
from car import Car, ElectricCar

my_mustang = Car('ford', 'mustang', 2024)
print(my_mustang.get_descriptive_name())

my_leaf = ElectricCar('nissan', 'leaf', 2024)
print(my_leaf.get_descriptive_name())
```

---

## 3. Các cách Import khác

### Import toàn bộ Module

ta có thể import toàn bộ module và truy cập các class bằng **dấu chấm** (`dot notation`). Cách này giúp tránh xung đột tên gọi.



```Python
import car

my_mustang = car.Car('ford', 'mustang', 2024)
my_leaf = car.ElectricCar('nissan', 'leaf', 2024)
```

### Import tất cả Class (Không khuyến khích)

Cú pháp: `from module_name import *`

- **Tại sao không nên dùng?** Nó làm mã nguồn khó đọc (không rõ class nào được dùng từ đâu) và dễ gây lỗi nếu tên class trùng với các tên khác trong file của ta.
    
## 4. Import một Module vào một Module khác

Đôi khi ta muốn chia nhỏ các class hơn nữa. Ví dụ: `ElectricCar` cần kế thừa từ `Car`, nên module chứa `ElectricCar` sẽ phải import `Car`.

**File `electric_car.py`:**



```Python
from car import Car

class Battery:
    # --snip--
    pass

class ElectricCar(Car):
    # --snip--
    pass
```

## 5. Sử dụng Alias (Bí danh)

Khi tên class hoặc tên module quá dài, ta c ó thể đặt bí danh bằng từ khóa `as` để viết code nhanh hơn.

- **Cho Class:**
    
    
    
    ```Python
    from electric_car import ElectricCar as EC
    my_leaf = EC('nissan', 'leaf', 2024)
    ```
    
- **Cho Module:**
    
    
    
    ```Python
    import electric_car as ec
    my_leaf = ec.ElectricCar('nissan', 'leaf', 2024)
    ```
    

---

## 6. Tìm kiếm quy trình làm việc (Workflow) hiệu quả

Python cung cấp nhiều cách để cấu trúc code. Lời khuyên:

1. **Bắt đầu đơn giản:** Hãy viết mọi thứ trong một file.
    
2. **Tách nhỏ khi cần:** Khi các class đã hoạt động tốt và file trở nên quá dài, hãy di chuyển chúng sang các module riêng biệt.
    
3. **Giữ cấu trúc gọn gàng:** Chỉ lưu trữ những class có liên quan chặt chẽ với nhau trong cùng một module.
