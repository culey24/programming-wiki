# Chapter 7: Kotlin OOP: Classes & Objects

Kotlin's approach to OOP is concise and modern. Classes, properties, and constructors are defined in a very compact way.

## 1. Classes and Constructors

```kotlin
class Person(val firstName: String, val lastName: String, var age: Int) {
    // Class body
}
```

The parameters in the header are part of the **primary constructor**.

### Init Block
The primary constructor cannot contain any code. Initialization code can be placed in `init` blocks.

```kotlin
class Customer(name: String) {
    init {
        println("Customer initialized with value $name")
    }
}
```

---

## 2. Properties: Getters and Setters

When you declare a property, Kotlin automatically generates a field and default getter/setter for you.

```kotlin
class User {
    var name: String = "Guest"
        get() = field.uppercase() // custom getter
        set(value) {              // custom setter
            if (value.isNotEmpty()) field = value
        }
}
```

---

## 3. Data Classes

We often create classes whose main purpose is to hold data. In Kotlin, this is called a **data class**.

```kotlin
data class User(val name: String, val age: Int)
```

The compiler automatically derives the following members:
- `equals()` / `hashCode()`
- `toString()` of the form "User(name=John, age=42)"
- `componentN()` functions corresponding to the properties in their order of declaration.
- `copy()` function.

---

## 4. Objects

### Object Declarations (Singletons)
You can create a singleton using the `object` keyword.

```kotlin
object DatabaseManager {
    fun connect() { /*...*/ }
}
```

### Companion Objects
An object declaration inside a class can be marked with the `companion` keyword. This makes it similar to static members in Java.

```kotlin
class MyClass {
    companion object Factory {
        fun create(): MyClass = MyClass()
    }
}
```

---

## 5. Visibility Modifiers

- `public`: (Default) Visible everywhere.
- `private`: Visible only inside the class/file.
- `protected`: Same as private + subclasses.
- `internal`: Visible anywhere within the same **module**.
