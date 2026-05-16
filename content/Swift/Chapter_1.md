# Chapter 1: Swift Introduction & Syntax

Swift is a powerful and intuitive programming language for iOS, iPadOS, macOS, tvOS, and watchOS. It was created by Apple in 2014.

## 1. What is Swift?

- Swift is designed to be **safe, fast, and interactive**.
- It is a replacement for Apple's earlier programming language, Objective-C.
- Swift is **open-source** and has a very friendly syntax that is easy to read and write.
- It includes modern features like optionals, generics, and type inference.

---

## 2. Hello World in Swift

In Swift, you don't even need a `main` function or a class to start. A single line of code can be a complete program.

```swift
print("Hello, World!")
```

### Explanation:
- `print()`: A global function used to output text to the console.
- Semicolons are **not** required at the end of each statement (unless you want to put multiple statements on the same line).

---

## 3. Swift Syntax Basics

### Variable vs Constant
- `let`: Used to declare a **constant** (value cannot change).
- `var`: Used to declare a **variable** (value can change).

```swift
let pi = 3.14159
var score = 0
score = 10 // OK
// pi = 3.14 // Error: cannot assign to value: 'pi' is a 'let' constant
```

### Type Inference
Swift is a strongly typed language, but it can often infer the type of a variable from its initial value.

```swift
let message = "Hello" // Swift infers 'String'
```

---

## 4. Playgrounds

If you are using a Mac, **Xcode Playgrounds** is the best way to learn Swift. It allows you to write code and see the results immediately without compiling a full app.

---

## 5. Comments

- Single-line: `//`
- Multi-line: `/* ... */`
