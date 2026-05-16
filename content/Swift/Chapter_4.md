# Chapter 4: Swift Control Flow & Optionals

Swift provides all the standard control flow statements and introduces a powerful concept called **Optionals**.

## 1. Conditional Statements

### If Statement
```swift
var temperature = 30
if temperature >= 30 {
    print("It's hot outside.")
} else {
    print("It's not that hot.")
}
```

### Switch Statement
The `switch` statement in Swift is very powerful and must be exhaustive (it must cover all possible values).

```swift
let vegetable = "red pepper"
switch vegetable {
case "celery":
    print("Add some raisins.")
case "cucumber", "watercress":
    print("That would make a good tea sandwich.")
case let x where x.hasSuffix("pepper"):
    print("Is it a spicy \(x)?")
default:
    print("Everything tastes good in soup.")
}
```

---

## 2. Loops

### For-In Loop
```swift
let names = ["Anna", "Alex", "Brian", "Jack"]
for name in names {
    print("Hello, \(name)!")
}
```

### While and Repeat-While
```swift
var n = 2
while n < 100 {
    n *= 2
}

repeat {
    n *= 2
} while n < 100
```

---

## 3. Optionals

An optional represents two possibilities: either there is a value, or there isn't a value at all (`nil`). You write optionals by appending a question mark `?` to the name of the type.

```swift
var surveyAnswer: String? = "Yes"
surveyAnswer = nil // Now it contains no value
```

---

## 4. Unwrapping Optionals

### Optional Binding
Use `if let` to check if an optional contains a value, and if so, make that value available as a temporary constant.

```swift
if let actualAnswer = surveyAnswer {
    print("The answer is \(actualAnswer)")
} else {
    print("The answer is nil")
}
```

### Force Unwrapping
If you are sure that the optional contains a value, you can access it by adding an exclamation mark `!` to the end of the optional's name.

```swift
print(surveyAnswer!) // DANGEROUS: If nil, the app will crash!
```

---

## 5. Nil-Coalescing Operator

The nil-coalescing operator (`a ?? b`) unwraps an optional `a` if it contains a value, or returns a default value `b` if `a` is `nil`.

```swift
let defaultColorName = "red"
var userDefinedColorName: String? // defaults to nil

var colorNameToUse = userDefinedColorName ?? defaultColorName
// colorNameToUse is "red"
```
