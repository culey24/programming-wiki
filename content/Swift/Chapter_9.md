# Chapter 9: Swift Error Handling & Summary

Error handling is the process of responding to and recovering from error conditions in your program.

## 1. Representing and Throwing Errors

In Swift, errors are represented by values of types that conform to the `Error` protocol. This is typically an `enum`.

```swift
enum VendingMachineError: Error {
    case invalidSelection
    case insufficientFunds(coinsNeeded: Int)
    case outOfStock
}
```

Throwing an error lets you indicate that something unexpected happened and the normal flow of execution can't continue.

```swift
throw VendingMachineError.insufficientFunds(coinsNeeded: 5)
```

---

## 2. Handling Errors

There are four ways to handle errors in Swift:
1. Propagate the error from a function to the code that calls that function.
2. Handle the error using a `do-catch` statement.
3. Handle the error as an optional value.
4. Assert that the error will not occur.

### Do-Catch
```swift
do {
    try buyFavoriteSnack(person: "Alice", vendingMachine: vendingMachine)
    print("Success! Yum.")
} catch VendingMachineError.invalidSelection {
    print("Invalid Selection.")
} catch VendingMachineError.outOfStock {
    print("Out of Stock.")
} catch {
    print("Unexpected error: \(error).")
}
```

---

## 3. Converting Errors to Optional Values

You use `try?` to handle an error by converting it to an optional value. If an error is thrown while evaluating the `try?` expression, the value of the expression is `nil`.

```swift
let x = try? someThrowingFunction()
```

---

## 4. Defer Statement

You use a `defer` statement to execute a set of statements just before code execution leaves the current block of code.

```swift
func processFile(filename: String) throws {
    if exists(filename) {
        let file = open(filename)
        defer {
            close(file)
        }
        while let line = try file.readline() {
            // Work with the file.
        }
        // close(file) is called here, at the end of the scope.
    }
}
```

---

## 5. Swift Summary

Congratulations! You have completed the Swift course. You have learned:
- Basic Swift syntax, constants, and variables.
- Strings, collections (Arrays, Sets, Dictionaries), and tuples.
- Control flow and the concept of Optionals.
- Functions and Closures.
- Object-Oriented and Protocol-Oriented Programming (Classes, Structs, Protocols, Extensions).
- Robust error handling.

### What's Next?
- Start building apps with **SwiftUI** or **UIKit**.
- Explore **Apple's Frameworks** (Combine, Core Data, ARKit).
- Learn about **Concurrency** in Swift (`async`/`await`).
- Check out **Swift on the Server** (Vapor, Kitura).
