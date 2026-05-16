# Chapter 9: Kotlin Coroutines & Summary

Kotlin's solution for asynchronous and non-blocking programming is **Coroutines**. They are "lightweight threads" that allow you to write asynchronous code in a sequential way.

## 1. Basics of Coroutines

A coroutine is an instance of a suspendable computation. It is conceptually similar to a thread, but a coroutine is not bound to any particular thread.

```kotlin
import kotlinx.coroutines.*

fun main() = runBlocking { // this: CoroutineScope
    launch { // launch a new coroutine and continue
        delay(1000L) // non-blocking delay for 1 second
        println("World!") 
    }
    println("Hello") // main coroutine continues while a previous one is delayed
}
```

---

## 2. Suspending Functions

A function marked with the `suspend` keyword can be paused and resumed. Suspending functions can only be called from within a coroutine or another suspending function.

```kotlin
suspend fun doWorld() {
    delay(1000L)
    println("World!")
}
```

---

## 3. Scope and Jobs

- `CoroutineScope`: Defines a lifetime for coroutines.
- `Job`: A handle to a background job that can be cancelled.
- `Deferred`: A Job that returns a result (`async` / `await`).

---

## 4. Exceptions in Kotlin

Unlike Java, Kotlin **does not have checked exceptions**. All exceptions are unchecked and you are not forced to catch them.

```kotlin
try {
    // some code
} catch (e: Exception) {
    // handler
} finally {
    // optional
}
```

---

## 5. Kotlin Summary

Congratulations! You have completed the Kotlin course. You have learned:
- Basic Kotlin syntax, val/var, and data types.
- Control flow, when expression, and null safety.
- Collections (Mutable vs Immutable).
- Functions, Lambdas, and High-Order Functions.
- Object-Oriented Programming (Classes, Data Classes, Objects, Extensions).
- Asynchronous programming with Coroutines.

### What's Next?
- Build **Android Apps** with Jetpack Compose.
- Learn about **Ktor** for backend and cross-platform development.
- Explore **Kotlin Multiplatform (KMP)**.
- Deep dive into **Functional Programming** patterns in Kotlin.
