# Chapter 3: Go Operators

Operators are used to perform operations on variables and values.

## 1. Arithmetic Operators

Used to perform common mathematical operations.

| Operator | Description | Example |
| :--- | :--- | :--- |
| `+` | Addition | `x + y` |
| `-` | Subtraction | `x - y` |
| `*` | Multiplication | `x * y` |
| `/` | Division | `x / y` |
| `%` | Modulus | `x % y` |
| `++` | Increment | `x++` |
| `--` | Decrement | `x--` |

Note: In Go, `++` and `--` are statements, not expressions. You cannot do `y = x++`.

---

## 2. Assignment Operators

Used to assign values to variables.

| Operator | Example | Same As |
| :--- | :--- | :--- |
| `=` | `x = 5` | `x = 5` |
| `+=` | `x += 3` | `x = x + 3` |
| `:=` | `x := 5` | Declare and assign |

---

## 3. Comparison Operators

Used to compare two values. They return a boolean value (`true` or `false`).

| Operator | Description |
| :--- | :--- |
| `==` | Equal to |
| `!=` | Not equal |
| `>` | Greater than |
| `<` | Less than |
| `>=` | Greater than or equal to |
| `<=` | Less than or equal to |

---

## 4. Logical Operators

Used to determine the logic between variables or values.

| Operator | Description |
| :--- | :--- |
| `&&` | Logical AND |
| `||` | Logical OR |
| `!` | Logical NOT |

---

## 5. Bitwise Operators

Used to perform bit-level operations.

| Operator | Description |
| :--- | :--- |
| `&` | AND |
| `|` | OR |
| `^` | XOR |
| `<<` | Left shift |
| `>>` | Right shift |
| `&^` | Bit clear (AND NOT) |
