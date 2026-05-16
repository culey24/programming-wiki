# Chapter 8: Swift Protocols & Extensions

Protocols and extensions are fundamental to Swift's design, often called "Protocol-Oriented Programming".

## 1. Protocols

A **protocol** defines a blueprint of methods, properties, and other requirements that suit a particular task or piece of functionality. The protocol can then be **adopted** by a class, structure, or enumeration to provide an actual implementation of those requirements.

```swift
protocol SomeProtocol {
    var mustBeSettable: Int { get set }
    func someMethod()
}

struct SomeStructure: SomeProtocol {
    var mustBeSettable: Int = 0
    func someMethod() {
        print("Implementation")
    }
}
```

---

## 2. Protocol as a Type

You can use a protocol as a type in your code. This is very common in Swift.

```swift
func printProtocol(item: SomeProtocol) {
    print(item.mustBeSettable)
}
```

---

## 3. Extensions

Extensions add new functionality to an existing class, structure, enumeration, or protocol type. This includes the ability to extend types for which you don't have access to the original source code (retroactive modeling).

Extensions in Swift can:
- Add computed instance properties and computed type properties.
- Define instance methods and type methods.
- Provide new initializers.
- Define subscripts.
- Define and use new nested types.
- Make an existing type conform to a protocol.

```swift
extension Int {
    func repetitions(task: () -> Void) {
        for _ in 0..<self {
            task()
        }
    }
}

3.repetitions {
    print("Hello!")
}
```

---

## 4. Protocol Extensions

You can extend a protocol itself to provide default implementations for its requirements.

```swift
extension SomeProtocol {
    func someMethod() {
        print("Default implementation")
    }
}
```

---

## 5. Generics

Generic code enables you to write flexible, reusable functions and types that can work with any type, subject to requirements that you define.

```swift
func swapTwoValues<T>(_ a: inout T, _ b: inout T) {
    let temporaryA = a
    a = b
    b = temporaryA
}
```
