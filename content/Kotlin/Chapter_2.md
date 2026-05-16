# Chapter 2: Kotlin Variables & Data Types

Kotlin uses `val` and `var` to manage data. It is a type-safe language with strong support for type inference.

## 1. Val and Var

- **`val`**: Read-only variables. Their values cannot be changed after assignment.
- **`var`**: Mutable variables. Their values can be updated.

```kotlin
val birthYear = 1995
var currentYear = 2024
```

---

## 2. Basic Data Types

Everything in Kotlin is an object in the sense that you can call member functions and properties on any variable.

| Type | Description |
| :--- | :--- |
| `Int` | 32-bit whole numbers |
| `Long` | 64-bit whole numbers (use 'L' suffix) |
| `Float` | 32-bit floating-point (use 'F' suffix) |
| `Double` | 64-bit floating-point |
| `Boolean` | `true` or `false` |
| `Char` | Single characters |
| `String` | Textual data |

```kotlin
val a: Int = 100
val b: Long = 100L
val c: Double = 12.34
val d: Boolean = true
```

---

## 3. Numeric Literals

Kotlin supports underscores to make large numbers more readable.

```kotlin
val oneMillion = 1_000_000
val creditCardNumber = 1234_5678_9012_3456L
```

---

## 4. Type Conversion

In Kotlin, smaller types are **not** implicitly converted to larger types. You must use explicit conversion functions.

```kotlin
val i: Int = 10
// val j: Long = i // Error: Type mismatch
val j: Long = i.toLong() // OK
```

Common conversion functions: `toByte()`, `toShort()`, `toInt()`, `toLong()`, `toFloat()`, `toDouble()`, `toChar()`.

---

## 5. Any, Unit, and Nothing

- **`Any`**: The root of the Kotlin class hierarchy. Every Kotlin class has `Any` as a superclass.
- **`Unit`**: Represents a function that does not return any useful value (similar to `void` in Java).
- **`Nothing`**: Represents a value that never exists (e.g., a function that always throws an exception).
