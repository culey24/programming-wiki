# Chapter 3: JavaScript Control Flow

Control flow statements allow you to run code based on conditions or repeat code multiple times.

## 1. Conditional Statements

### The `if` Statement
Executes a block of code if a condition is true.

```javascript
let hour = 14;
if (hour < 18) {
  console.log("Good day");
}
```

### The `else` Statement
Executes a block of code if the condition is false.

```javascript
if (hour < 18) {
  console.log("Good day");
} else {
  console.log("Good evening");
}
```

### The `else if` Statement
Allows you to check for multiple conditions.

```javascript
if (hour < 10) {
  console.log("Good morning");
} else if (hour < 20) {
  console.log("Good day");
} else {
  console.log("Good evening");
}
```

### The `switch` Statement
Used to perform different actions based on different conditions (better for many fixed values).

```javascript
let day;
switch (new Date().getDay()) {
  case 0: day = "Sunday"; break;
  case 1: day = "Monday"; break;
  case 6: day = "Saturday"; break;
  default: day = "Weekday";
}
```

---

## 2. Loops

### The `for` Loop
Loops through a block of code a specified number of times.

```javascript
for (let i = 0; i < 5; i++) {
  console.log("Number: " + i);
}
```

### The `while` Loop
Loops through a block of code while a specified condition is true.

```javascript
let i = 0;
while (i < 5) {
  console.log("Value: " + i);
  i++;
}
```

### The `do...while` Loop
Executes the code block once before checking the condition.

```javascript
let x = 0;
do {
  console.log(x);
  x++;
} while (x < 5);
```

### The `for...of` Loop
Iterates over the values of an iterable object (like an array).

```javascript
const cars = ["BMW", "Volvo", "Mini"];
for (let car of cars) {
  console.log(car);
}
```

---

## 3. Break and Continue

- **`break`**: Exits the loop entirely.
- **`continue`**: Skips the current iteration and moves to the next one.

```javascript
for (let i = 0; i < 10; i++) {
  if (i === 3) { break; } // Loop stops at 3
  if (i === 1) { continue; } // Skips 1
  console.log(i);
}
```
