# Chapter 1: Kotlin Introduction & Syntax

Kotlin is a modern, cross-platform, statically typed programming language designed to interoperate fully with Java. It is developed by JetBrains and is the preferred language for Android development.

## 1. What is Kotlin?

- Kotlin was released in 2011 and became an official language for Android in 2017.
- It is concise, safe, and interoperable with Java (you can use Java libraries in Kotlin and vice versa).
- Kotlin is designed to eliminate common programming errors such as null pointer exceptions.

---

## 2. Hello World in Kotlin

Like Swift, Kotlin doesn't require a class for simple programs.

```kotlin
fun main() {
    println("Hello, World!")
}
```

### Explanation:
- `fun`: The keyword used to declare a function.
- `main()`: The entry point of the program.
- `println()`: Prints a message to the console followed by a newline.
- Semicolons are **optional** in Kotlin.

---

## 3. Kotlin Syntax Basics

### Variables and Constants
- `val`: Used for **read-only** variables (constants).
- `var`: Used for **mutable** variables.

```kotlin
val pi = 3.14
var score = 0
score = 10 // OK
// pi = 3.1415 // Error: Val cannot be reassigned
```

### Type Inference
Kotlin is statically typed, but it can infer types from the initial value.

```kotlin
val message = "Hello" // Kotlin infers 'String'
```

---

## 4. Compilation and Execution

Kotlin code is typically compiled into **Java Bytecode** and runs on the JVM.

1. Write code in `hello.kt`.
2. Compile: `kotlinc hello.kt -include-runtime -d hello.jar`
3. Run: `java -jar hello.jar`

---

## 5. Comments

- Single-line: `//`
- Multi-line: `/* ... */`
