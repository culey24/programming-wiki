# Chapter 3: C Operators

Operators are used to perform operations on variables and values.

## 1. Arithmetic Operators

Used to perform common mathematical operations.

| Operator | Description | Example |
| :--- | :--- | :--- |
| `+` | Addition | `x + y` |
| `-` | Subtraction | `x - y` |
| `*` | Multiplication | `x * y` |
| `/` | Division | `x / y` |
| `%` | Modulus (Remainder) | `x % y` |
| `++` | Increment | `++x` |
| `--` | Decrement | `--x` |

---

## 2. Assignment Operators

Used to assign values to variables.

| Operator | Example | Same As |
| :--- | :--- | :--- |
| `=` | `x = 5` | `x = 5` |
| `+=` | `x += 3` | `x = x + 3` |
| `-=` | `x -= 3` | `x = x - 3` |
| `*=` | `x *= 3` | `x = x * 3` |

---

## 3. Comparison Operators

Used to compare two values. The return value is either 1 (true) or 0 (false).

| Operator | Description | Example |
| :--- | :--- | :--- |
| `==` | Equal to | `x == y` |
| `!=` | Not equal | `x != y` |
| `>` | Greater than | `x > y` |
| `<` | Less than | `x < y` |
| `>=` | Greater than or equal to | `x >= y` |
| `<=` | Less than or equal to | `x <= y` |

---

## 4. Logical Operators

Used to determine the logic between variables or values.

- `&&`: Logical AND (Returns 1 if both statements are true).
- `||`: Logical OR (Returns 1 if one of the statements is true).
- `!`: Logical NOT (Reverse the result).

```c
int x = 5;
int y = 3;
printf("%d", x > 3 && x < 10); // Returns 1 (true)
```

---

## 5. Sizeof Operator

The `sizeof` operator returns the size of data types or variables in bytes.

```c
int myInt;
printf("%lu", sizeof(myInt)); // Returns 4 (on most systems)
```
