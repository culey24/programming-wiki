# Chapter 7: Swift OOP: Classes & Structures

Swift uses classes and structures to represent custom data types. A key difference in Swift is that **Structures** are much more powerful than in other languages.

## 1. Comparing Classes and Structures

Both can:
- Define properties to store values.
- Define methods to provide functionality.
- Define subscripts to provide access to their values.
- Define initializers to set up their initial state.
- Be extended and conform to protocols.

Classes have additional capabilities:
- **Inheritance**: One class can inherit the characteristics of another.
- **Deinitializers**: Allow an instance of a class to free up any resources it has assigned.
- **Reference counting**: Allows more than one reference to a class instance.

---

## 2. Definition Syntax

```swift
struct Resolution {
    var width = 0
    var height = 0
}

class VideoMode {
    var resolution = Resolution()
    var interlaced = false
    var frameRate = 0.0
    var name: String?
}
```

---

## 3. Value vs. Reference Types

### Structures are Value Types
A value type is a type whose value is **copied** when it's assigned to a variable or constant, or when it's passed to a function.

```swift
let hd = Resolution(width: 1920, height: 1080)
var cinema = hd
cinema.width = 2048
// hd.width is still 1920
```

### Classes are Reference Types
Reference types are **not** copied when they're assigned to a variable or constant, or when they're passed to a function. Instead, a reference to the same existing instance is used.

---

## 4. Properties

- **Stored Properties**: Store constant and variable values as part of an instance.
- **Computed Properties**: Calculate (rather than store) a value.
- **Property Observers**: Respond to changes in a property's value (`willSet`, `didSet`).

```swift
class StepCounter {
    var totalSteps: Int = 0 {
        didSet {
            print("Just added \(totalSteps - oldValue) steps")
        }
    }
}
```

---

## 5. Methods

Methods are functions that are associated with a particular type.

### Mutating Methods
Structures and enumerations are value types. By default, the properties of a value type cannot be modified from within its instance methods. If you need to modify the properties of your structure or enumeration within a particular method, you can opt in to **mutating** behavior for that method.

```swift
struct Point {
    var x = 0.0, y = 0.0
    mutating func moveBy(x deltaX: Double, y deltaY: Double) {
        x += deltaX
        y += deltaY
    }
}
```
