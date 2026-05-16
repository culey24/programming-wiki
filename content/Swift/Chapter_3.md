# Chapter 3: Swift Operators & Strings

Operators are symbols used to perform calculations or comparisons. Swift also has powerful string handling capabilities.

## 1. Basic Operators

Swift supports standard arithmetic and comparison operators.

- **Arithmetic**: `+`, `-`, `*`, `/`, `%`
- **Assignment**: `=`, `+=`, `-=`
- **Comparison**: `==`, `!=`, `>`, `<`, `>=`, `<=`
- **Logical**: `&&`, `||`, `!`

### Range Operators
Swift includes two range operators, which are shortcuts for expressing a range of values.
- **Closed Range** (`a...b`): Defines a range that runs from `a` to `b`, and includes both values.
- **Half-Open Range** (`a..<b`): Defines a range that runs from `a` to `b`, but doesn't include `b`.

```swift
for index in 1...5 {
    print(index) // 1, 2, 3, 4, 5
}
```

---

## 2. Strings and Characters

A string is a series of characters, such as "hello, world".

```swift
let greeting = "Hello!"
```

### Multiline String Literals
If you need a string that spans several lines, use a multiline string literal—a sequence of characters surrounded by three double quotation marks.

```swift
let quotation = """
The White Rabbit put on his spectacles.  "Where shall I begin,
please your Majesty?" he asked.
"""
```

---

## 3. String Mutability

You specify whether a particular `String` can be modified by assigning it to a variable (in which case it can be modified), or to a constant (in which case it cannot be modified).

```swift
var variableString = "Horse"
variableString += " and carriage" // OK

let constantString = "Highlander"
// constantString += " and another" // Error
```

---

## 4. String Interpolation

String interpolation is a way to construct a new `String` value from a mix of constants, variables, literals, and expressions by including their values inside a string literal.

```swift
let name = "Alice"
let message = "Hello, \(name)!"
print(message) // Hello, Alice!
```

---

## 5. Working with Characters

You can access the individual `Character` values for a `String` by iterating over its `characters` property with a `for-in` loop.

```swift
for character in "Dog!" {
    print(character)
}
```

### String Indexing
Strings in Swift cannot be indexed by integer values (like `s[0]`). Instead, you use `String.Index` types to traverse a string's characters.
