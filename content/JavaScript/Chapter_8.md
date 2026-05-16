# Chapter 8: JavaScript Standard Library

JavaScript provides several built-in objects that offer essential functionality without needing external libraries.

## 1. The `Math` Object

The `Math` object allows you to perform mathematical tasks on numbers.

```javascript
Math.PI;            // 3.141592653589793
Math.round(4.7);    // 5
Math.pow(8, 2);     // 64
Math.sqrt(64);      // 8
Math.abs(-4.7);     // 4.7
Math.ceil(4.4);     // 5 (Round up)
Math.floor(4.7);    // 4 (Round down)
Math.min(0, 150, 30, 20, -8, -200); // -200
Math.max(0, 150, 30, 20, -8, -200); // 150
```

### Random Numbers
`Math.random()` returns a random number between 0 (inclusive) and 1 (exclusive).

```javascript
// Random integer between 0 and 10
let x = Math.floor(Math.random() * 11);
```

---

## 2. The `Date` Object

The `Date` object works with dates and times.

```javascript
const now = new Date();
console.log(now.toString());

now.getFullYear();  // Get year (yyyy)
now.getMonth();     // Get month (0-11)
now.getDate();      // Get day (1-31)
now.getDay();       // Get weekday (0-6)
```

---

## 3. The `JSON` Object

JSON (JavaScript Object Notation) is a format for storing and transporting data.

- **`JSON.stringify()`**: Converts a JavaScript object into a string.
- **`JSON.parse()`**: Converts a string into a JavaScript object.

```javascript
const obj = { name: "John", age: 30 };
const myJSON = JSON.stringify(obj); // '{"name":"John","age":30}'

const myObj = JSON.parse(myJSON);
console.log(myObj.name); // "John"
```

---

## 4. Promises and Async/Await

Handling asynchronous operations (like fetching data from a server).

### Promises
```javascript
const myPromise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("Data received");
  } else {
    reject("Error occurred");
  }
});

myPromise
  .then(value => console.log(value))
  .catch(error => console.log(error));
```

### Async/Await
A cleaner way to handle promises.

```javascript
async function fetchData() {
  try {
    let response = await fetch("https://api.example.com/data");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Fetch failed", error);
  }
}
```
