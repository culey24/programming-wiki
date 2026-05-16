# Chapter 2: Swift Variables & Data Types

Swift uses constants (`let`) and variables (`var`) to store values. It is a type-safe language, meaning it helps you be clear about the types of values your code can work with.

## 1. Constants and Variables

### Constants (`let`)
Use `let` for values that will never change.

```swift
let maximumNumberOfLoginAttempts = 10
```

### Variables (`var`)
Use `var` for values that can change.

```swift
var currentLoginAttempt = 0
```

---

## 2. Type Annotations

You can provide a type annotation when you declare a constant or variable, to be clear about the kind of values the constant or variable can store.

```swift
var welcomeMessage: String
welcomeMessage = "Hello"
```

---

## 3. Basic Data Types

| Type | Description |
| :--- | :--- |
| `Int` | Whole numbers |
| `Double` | 64-bit floating-point numbers (15 decimal digits) |
| `Float` | 32-bit floating-point numbers (6 decimal digits) |
| `String` | An ordered collection of characters |
| `Bool` | `true` or `false` |

```swift
let age: Int = 25
let pi: Double = 3.14159
let isSwiftFun: Bool = true
```

---

## 4. Numeric Literals

Swift provides several ways to write numeric literals to make them more readable.

```swift
let decimalInteger = 17
let binaryInteger = 0b10001       // 17 in binary
let octalInteger = 0o21           // 17 in octal
let hexadecimalInteger = 0x11     // 17 in hexadecimal

let largeNumber = 1_000_000       // Use underscores for readability
```

---

## 5. Type Safety and Type Inference

Because Swift is type-safe, it performs type checks when compiling your code and flags any mismatched types as errors.

```swift
let meaningOfLife = 42
// meaningOfLife = "The answer" // Error: cannot assign value of type 'String' to type 'Int'
```

---

## 6. Type Aliases

Type aliases define an alternative name for an existing type.

```swift
typealias AudioSample = UInt16
var maxAmplitudeFound = AudioSample.min // 0
```
