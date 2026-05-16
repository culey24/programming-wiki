# Chapter 5: JavaScript Arrays & Collections

Arrays are used to store multiple values in a single variable.

## 1. Creating Arrays

```javascript
const fruits = ["Apple", "Banana", "Orange"];
```

You can also create an empty array and add elements later:

```javascript
const cars = [];
cars[0] = "Saab";
cars[1] = "Volvo";
```

---

## 2. Accessing and Modifying Elements

- Arrays use **zero-based indexing**.
- Access an element using `array[index]`.

```javascript
let fruit = fruits[0]; // "Apple"
fruits[0] = "Mango";   // Changes "Apple" to "Mango"
```

The `length` property returns the number of elements in an array.

```javascript
console.log(fruits.length); // 3
```

---

## 3. Array Methods

JavaScript provides many built-in methods to work with arrays.

### Adding/Removing Elements
- **`push()`**: Adds an element to the end.
- **`pop()`**: Removes the last element.
- **`unshift()`**: Adds an element to the beginning.
- **`shift()`**: Removes the first element.

```javascript
fruits.push("Kiwi");    // Adds Kiwi at the end
fruits.pop();           // Removes the last element
```

### Joining Arrays
- **`concat()`**: Joins two or more arrays.

```javascript
const citrus = ["Orange", "Lemon"];
const mixed = fruits.concat(citrus);
```

---

## 4. Iterating Over Arrays

### `forEach()`
Runs a function for each element.

```javascript
fruits.forEach((fruit) => {
  console.log(fruit);
});
```

### `map()`
Creates a new array by performing a function on each element.

```javascript
const numbers = [1, 2, 3];
const doubled = numbers.map(x => x * 2); // [2, 4, 6]
```

### `filter()`
Creates a new array with elements that pass a test.

```javascript
const bigNumbers = numbers.filter(x => x > 2); // [3]
```

---

## 5. Sets and Maps

### Sets
A collection of unique values.

```javascript
const mySet = new Set(["a", "b", "a"]);
console.log(mySet.size); // 2 (duplicates are removed)
```

### Maps
A collection of key-value pairs where keys can be of any type.

```javascript
const userRoles = new Map();
userRoles.set("alice", "admin");
userRoles.set("bob", "editor");

console.log(userRoles.get("alice")); // "admin"
```
