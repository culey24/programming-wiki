# Chapter 3: Kotlin Operators & Strings

Kotlin supports standard operators and provides a rich set of string manipulation features.

## 1. Basic Operators

- **Arithmetic**: `+`, `-`, `*`, `/`, `%`
- **Assignment**: `=`, `+=`, `-=`, `*=`, `/=`, `%=`
- **Increment/Decrement**: `++`, `--`
- **Comparison**: `==`, `!=`, `<`, `>`, `<=`, `>=`
- **Logical**: `&&`, `||`, `!`

---

## 2. Kotlin Strings

A string is a sequence of characters. Strings are immutable.

```kotlin
val s = "Hello, Kotlin!"
```

### Accessing Characters
```kotlin
val firstChar = s[0] // 'H'
```

---

## 3. String Templates

Strings can contain template expressions—pieces of code that are evaluated and whose results are concatenated into the string.

```kotlin
val i = 10
println("i = $i") // i = 10

val s = "abc"
println("$s.length is ${s.length}") // abc.length is 3
```

---

## 4. Raw Strings

A raw string is delimited by a triple quote (`"""`), contains no escaping, and can contain newlines and any other characters.

```kotlin
val text = """
    for (c in "foo")
        print(c)
"""
```

You can remove leading whitespace with the `trimMargin()` function.

---

## 5. String Equality

Kotlin has two types of equality:
- **Structural equality** (`==`): checks for the `equals()` value.
- **Referential equality** (`===`): checks if two references point to the same object.

```kotlin
val s1 = "hello"
val s2 = "hello"
println(s1 == s2) // true
```

---

## 6. Ranges

Kotlin allows you to easily create ranges of values using the `..` operator.

```kotlin
val r1 = 1..5   // 1, 2, 3, 4, 5
val r2 = 1..<5  // 1, 2, 3, 4 (excluding 5)
```
