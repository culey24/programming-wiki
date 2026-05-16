# Chapter 6: Kotlin Functions & Lambdas

Kotlin functions are first-class citizens, meaning they can be stored in variables and passed as arguments.

## 1. Function Declaration

```kotlin
fun sum(a: Int, b: Int): Int {
    return a + b
}
```

### Default Arguments
```kotlin
fun read(b: Array<Byte>, off: Int = 0, len: Int = b.size) { /*...*/ }
```

---

## 2. Single-Expression Functions

When a function returns a single expression, the curly braces can be omitted and the body is specified after an `=` symbol.

```kotlin
fun double(x: Int): Int = x * 2
```

---

## 3. Named Arguments

You can name one or more of a function's arguments when calling it.

```kotlin
reformat(str,
    normalizeCase = true,
    upperCaseFirstLetter = 1,
    divideByCamelHumps = false,
    wordSeparator = '_'
)
```

---

## 4. Lambda Expressions

Lambdas are anonymous functions that can be used as values.

```kotlin
val sum = { x: Int, y: Int -> x + y }
println(sum(1, 2))
```

If a lambda is the last argument to a function, it can be placed outside the parentheses.

```kotlin
val product = items.fold(1) { acc, e -> acc * e }
```

---

## 5. High-Order Functions

A higher-order function is a function that takes functions as parameters, or returns a function.

```kotlin
fun <T, R> Iterable<T>.map(transform: (T) -> R): List<R> {
    val result = arrayListOf<R>()
    for (item in this)
        result.add(transform(item))
    return result
}
```

---

## 6. Inline Functions

Using high-order functions imposes certain runtime penalties. To reduce this overhead, you can use the `inline` keyword.

```kotlin
inline fun <T> lock(lock: Lock, body: () -> T): T { /*...*/ }
```
