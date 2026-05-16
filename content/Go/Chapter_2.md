# Chapter 2: Go Variables & Data Types

In Go, there are different ways to declare variables depending on whether you want to specify the type or let Go infer it.

## 1. Declaring Variables

### Using the `var` Keyword
```go
var name string = "John"
var age int = 25
```

You can also declare multiple variables at once:
```go
var a, b, c, d = 1, 2, 3, "Hello"
```

### Short Variable Declaration (`:=`)
Inside a function, you can use the `:=` operator to declare and initialize a variable without specifying the type.

```go
func main() {
    message := "Hello World" // Go infers 'string'
    count := 10              // Go infers 'int'
}
```

Note: `:=` cannot be used outside of a function.

---

## 2. Basic Data Types

| Group | Types |
| :--- | :--- |
| **Integers** | `int`, `int8`, `int16`, `int32`, `int64`, `uint`, etc. |
| **Float** | `float32`, `float64` |
| **String** | `string` |
| **Boolean** | `bool` (true/false) |

---

## 3. Zero Values

In Go, if a variable is declared without an initial value, it is automatically assigned a "zero value":
- `0` for numeric types
- `false` for booleans
- `""` (empty string) for strings

```go
var x int // x is 0
var s string // s is ""
```

---

## 4. Constants

Constants are declared with the `const` keyword. They cannot be changed once declared.

```go
const Pi = 3.14
```

---

## 5. Type Conversion

Go is very strict about types. You cannot perform operations on different types (like adding an `int` to a `float64`) without explicit conversion.

```go
var i int = 42
var f float64 = float64(i)
var u uint = uint(f)
```
