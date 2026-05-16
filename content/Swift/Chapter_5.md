# Chapter 5: Swift Collections

Swift provides three primary collection types: **Arrays**, **Sets**, and **Dictionaries**, for storing collections of values.

## 1. Arrays

An array stores values of the same type in an ordered list.

```swift
var shoppingList = ["Eggs", "Milk"]
shoppingList.append("Flour")
shoppingList += ["Baking Powder"]
```

### Accessing and Modifying an Array
```swift
let firstItem = shoppingList[0]
shoppingList[0] = "Six eggs"
shoppingList.remove(at: 0)
```

---

## 2. Sets

A set stores distinct values of the same type in a collection with no defined ordering. Use a set instead of an array when the order of items is not important, or when you need to ensure that an item only appears once.

```swift
var letters = Set<Character>()
letters.insert("a")

var favoriteGenres: Set<String> = ["Rock", "Classical", "Hip hop"]
```

### Set Operations
You can efficiently perform set operations, such as combining two sets together, or determining which values two sets have in common.
- `intersection`: Create a new set with values both sets have in common.
- `union`: Create a new set with all values in both sets.
- `subtracting`: Create a new set with values not in the specified set.

---

## 3. Dictionaries

A dictionary stores associations between keys of the same type and values of the same type in a collection with no defined ordering. Each value is associated with a unique key.

```swift
var airports: [String: String] = ["YYZ": "Toronto Pearson", "DUB": "Dublin"]
```

### Accessing and Modifying a Dictionary
```swift
airports["LHR"] = "London" // Adds a new item
airports["LHR"] = "London Heathrow" // Updates the value

if let oldValue = airports.updateValue("Dublin Airport", forKey: "DUB") {
    print("The old value for DUB was \(oldValue).")
}
```

---

## 4. Tuples

Tuples group multiple values into a single compound value. The values within a tuple can be of any type and don't have to be of the same type as each other.

```swift
let http404Error = (404, "Not Found")
let (statusCode, statusMessage) = http404Error
print("The status code is \(statusCode)")
```

---

## 5. Iterating Over Collections

You can use the `for-in` loop to iterate over any collection.

```swift
for (airportCode, airportName) in airports {
    print("\(airportCode): \(airportName)")
}
```
