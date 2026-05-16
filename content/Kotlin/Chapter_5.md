# Chapter 5: Kotlin Collections

Kotlin collections are categorized into **mutable** and **read-only** (immutable) types.

## 1. List

A `List` is an ordered collection of elements.

### Read-only List
```kotlin
val numbers = listOf("one", "two", "three", "four")
println("Number of elements: ${numbers.size}")
println("Third element: ${numbers[2]}")
```

### Mutable List
```kotlin
val numbers = mutableListOf(1, 2, 3, 4)
numbers.add(5)
numbers.removeAt(1)
numbers[0] = 0
```

---

## 2. Set

A `Set` is a collection of unique elements. Its order is generally undefined.

```kotlin
val numbers = setOf(1, 2, 3, 4, 1) // 1 will be stored only once
val mutableSet = mutableSetOf(1, 2)
```

---

## 3. Map

A `Map` is a set of key-value pairs. Keys are unique, and each of them maps to exactly one value.

```kotlin
val numbersMap = mapOf("key1" to 1, "key2" to 2, "key3" to 3)
println("Value for key2: ${numbersMap["key2"]}")

val mutableMap = mutableMapOf("Alice" to 20, "Bob" to 25)
mutableMap["Charlie"] = 30
```

---

## 4. Collection Operations

Kotlin provides a rich set of extension functions for collections.

### Filtering
```kotlin
val numbers = listOf("one", "two", "three", "four")
val longerThanThree = numbers.filter { it.length > 3 }
```

### Mapping
```kotlin
val numbers = setOf(1, 2, 3)
val doubled = numbers.map { it * 2 }
```

### Sorting
```kotlin
val numbers = listOf(5, 2, 10, 1)
val sorted = numbers.sorted()
```

---

## 5. Sequence

For large collections, you can use `Sequence` for lazy evaluation to improve performance.

```kotlin
val numbersSequence = sequenceOf("four", "three", "two", "one")
```
