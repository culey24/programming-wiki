# Chapter 2: JavaScript Operators

Operators are used to perform operations on variables and values.

## 1. Arithmetic Operators

Used to perform common mathematical operations.

| Operator | Description | Example |
| :--- | :--- | :--- |
| `+` | Addition | `5 + 2 = 7` |
| `-` | Subtraction | `5 - 2 = 3` |
| `*` | Multiplication | `5 * 2 = 10` |
| `/` | Division | `10 / 2 = 5` |
| `%` | Modulus (Remainder) | `10 % 3 = 1` |
| `**` | Exponentiation | `5 ** 2 = 25` |
| `++` | Increment | `x++` |
| `--` | Decrement | `x--` |

---

## 2. Assignment Operators

Used to assign values to variables.

| Operator | Example | Equivalent |
| :--- | :--- | :--- |
| `=` | `x = 10` | `x = 10` |
| `+=` | `x += 5` | `x = x + 5` |
| `-=` | `x -= 5` | `x = x - 5` |
| `*=` | `x *= 5` | `x = x * 5` |
| `/=` | `x /= 5` | `x = x / 5` |

---

## 3. Comparison Operators

Used in logical statements to determine equality or difference between variables or values.

| Operator | Description | Result |
| :--- | :--- | :--- |
| `==` | Equal to | `5 == "5"` is `true` |
| `===` | Strict equal to (type and value) | `5 === "5"` is `false` |
| `!=` | Not equal to | `5 != 8` is `true` |
| `!==` | Strict not equal | `5 !== "5"` is `true` |
| `>` | Greater than | `5 > 3` is `true` |
| `<` | Less than | `5 < 8` is `true` |
| `>=` | Greater than or equal to | `5 >= 5` is `true` |
| `<=` | Less than or equal to | `3 <= 5` is `true` |

> **Pro Tip:** Always use `===` and `!==` in JavaScript to avoid unexpected type coercion issues.

---

## 4. Logical Operators

Used to determine the logic between variables or values.

| Operator | Description | Example |
| :--- | :--- | :--- |
| `&&` | Logical AND | `(5 < 10 && 3 > 1)` is `true` |
| `||` | Logical OR | `(5 < 10 || 3 < 1)` is `true` |
| `!` | Logical NOT | `!(5 == 5)` is `false` |

---

## 5. String Concatenation

The `+` operator can also be used to add (concatenate) strings.

```javascript
let text1 = "Hello";
let text2 = "World";
let result = text1 + " " + text2; // "Hello World"
```

If you add a number and a string, JavaScript will treat the number as a string and concatenate them.

```javascript
let x = 5 + 5;       // 10
let y = "5" + 5;     // "55"
let z = "Hello" + 5; // "Hello5"
```
