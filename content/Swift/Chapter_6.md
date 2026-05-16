# Chapter 6: Swift Functions & Closures

Functions are self-contained chunks of code that perform a specific task. Closures are self-contained blocks of functionality that can be passed around and used in your code.

## 1. Defining and Calling Functions

```swift
func greet(person: String) -> String {
    let greeting = "Hello, " + person + "!"
    return greeting
}

print(greet(person: "Anna"))
```

### Argument Labels and Parameter Names
Each function parameter has both an **argument label** (used when calling the function) and a **parameter name** (used in the implementation of the function).

```swift
func greet(person: String, from hometown: String) -> String {
    return "Hello \(person)! Glad you could visit from \(hometown)."
}
print(greet(person: "Bill", from: "Cupertino"))
```

Use an underscore `_` if you don't want an argument label.

---

## 2. Default Parameter Values

You can define a default value for any parameter in a function by assigning a value to the parameter after that parameter's type.

```swift
func someFunction(parameterWithoutDefault: Int, parameterWithDefault: Int = 12) {
    // ...
}
```

---

## 3. Variadic Parameters

A variadic parameter accepts zero or more values of a specified type. Use three period characters `...` after the parameter's type name.

```swift
func arithmeticMean(_ numbers: Double...) -> Double {
    var total: Double = 0
    for number in numbers {
        total += number
    }
    return total / Double(numbers.count)
}
```

---

## 4. In-Out Parameters

Function parameters are constants by default. If you want a function to modify a parameter's value, and you want those changes to persist after the function call has ended, define that parameter as an **in-out parameter** instead.

```swift
func swapTwoInts(_ a: inout Int, _ b: inout Int) {
    let temporaryA = a
    a = b
    b = temporaryA
}
```

---

## 5. Closures

Closures are similar to blocks in C and Objective-C and to lambdas in other programming languages.

```swift
let names = ["Chris", "Alex", "Ewa", "Barry", "Daniella"]

var reversedNames = names.sorted(by: { (s1: String, s2: String) -> Bool in
    return s1 > s2
})
```

Swift provides shorthand syntax for closures, such as omitting parameter types and using shorthand argument names like `$0` and `$1`.

```swift
reversedNames = names.sorted(by: { $0 > $1 })
```
