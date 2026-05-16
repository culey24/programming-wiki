# Chapter 4: Kotlin Control Flow & Null Safety

Kotlin provides powerful control flow expressions and is designed to handle `null` values safely to avoid NullPointerExceptions.

## 1. Conditional Expressions

### If as an Expression
In Kotlin, `if` is an expression: it returns a value. Therefore, there is no ternary operator (`condition ? then : else`) because ordinary `if` works fine in this role.

```kotlin
val max = if (a > b) a else b
```

---

## 2. When Expression

`when` replaces the `switch` operator of C-like languages. It matches its argument against all branches consecutively until some branch condition is satisfied.

```kotlin
when (x) {
    1 -> print("x == 1")
    2 -> print("x == 2")
    3, 4 -> print("x is 3 or 4")
    in 5..10 -> print("x is in the range")
    else -> {
        print("x is neither 1 nor 2")
    }
}
```

---

## 3. Loops

### For Loop
```kotlin
val items = listOf("apple", "banana", "kiwi")
for (item in items) {
    println(item)
}
```

### While and Do-While
```kotlin
while (x > 0) { x-- }

do {
    val y = retrieveData()
} while (y != null)
```

---

## 4. Null Safety

Kotlin's type system is aimed at eliminating `NullPointerException`. By default, types are **non-nullable**.

```kotlin
var a: String = "abc"
// a = null // Compilation error
```

To allow nulls, we can declare a variable as a **nullable string**:

```kotlin
var b: String? = "abc"
b = null // OK
```

---

## 5. Checking for Null

### Safe Call Operator (`?.`)
```kotlin
println(b?.length) // If b is null, this returns null instead of crashing.
```

### Elvis Operator (`?:`)
If the expression to the left of `?:` is not null, the elvis operator returns it; otherwise, it returns the expression to the right.

```kotlin
val l = b?.length ?: -1
```

### The `!!` Operator
The "not-null assertion operator" (`!!`) converts any value to a non-nullable type and throws an exception if the value is null.

```kotlin
val l = b!!.length // Crash if b is null
```
