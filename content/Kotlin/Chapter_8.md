# Chapter 8: Kotlin OOP: Inheritance & Interfaces

In Kotlin, all classes are `final` by default (they cannot be inherited). To make a class inheritable, you must mark it with the `open` keyword.

## 1. Inheritance

```kotlin
open class Base(p: Int)

class Derived(p: Int) : Base(p)
```

### Overriding Methods
Methods must also be marked as `open` to be overridden.

```kotlin
open class Shape {
    open fun draw() { /*...*/ }
    fun fill() { /*...*/ }
}

class Circle() : Shape() {
    override fun draw() { /*...*/ }
}
```

---

## 2. Abstract Classes

A class and some of its members may be declared `abstract`. An abstract member does not have an implementation in its class.

```kotlin
abstract class Polygon {
    abstract fun draw()
}
```

---

## 3. Interfaces

Interfaces in Kotlin can contain declarations of abstract methods, as well as method implementations. What makes them different from abstract classes is that interfaces cannot store state. They can have properties, but these need to be abstract or to provide accessor implementations.

```kotlin
interface MyInterface {
    val prop: Int // abstract

    val propertyWithImplementation: String
        get() = "foo"

    fun bar()
    fun foo() {
        // optional body
    }
}
```

---

## 4. Implementing Interfaces

```kotlin
class Child : MyInterface {
    override val prop: Int = 29
    override fun bar() {
        // body
    }
}
```

---

## 5. Extensions

Kotlin provides the ability to extend a class with new functionality without having to inherit from the class. This is done via special declarations called **extensions**.

```kotlin
fun MutableList<Int>.swap(index1: Int, index2: Int) {
    val tmp = this[index1]
    this[index1] = this[index2]
    this[index2] = tmp
}

val list = mutableListOf(1, 2, 3)
list.swap(0, 2) // Now [3, 2, 1]
```
