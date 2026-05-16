# Chapter 7: JavaScript Error Handling

Errors happen! No matter how good we are at programming, our scripts may contain errors. They may occur because of our mistakes, unexpected user input, or an erroneous server response.

## 1. The `try...catch` Statement

The `try` statement allows you to define a block of code to be tested for errors while it is being executed. The `catch` statement allows you to define a block of code to be executed if an error occurs in the `try` block.

```javascript
try {
  // Code to run
  adddlert("Welcome guest!"); // Mistyped 'alert'
} catch (err) {
  // Code to handle errors
  console.log("Error name: " + err.name);
  console.log("Error message: " + err.message);
}
```

---

## 2. The `finally` Statement

The `finally` statement lets you execute code, after `try` and `catch`, regardless of the result.

```javascript
try {
  console.log("Starting process...");
} catch (err) {
  console.log("An error occurred.");
} finally {
  console.log("Process finished.");
}
```

---

## 3. The `throw` Statement

The `throw` statement allows you to create a custom error. Technically you can throw anything (exception), but it is usually an Error object.

```javascript
function checkAge(age) {
  if (age < 18) {
    throw new Error("You must be at least 18 years old.");
  }
  return "Access granted";
}

try {
  checkAge(15);
} catch (err) {
  console.log(err.message); // You must be at least 18 years old.
}
```

---

## 4. Error Objects

JavaScript has built-in error objects that provide error information:
- **`name`**: Sets or returns an error name.
- **`message`**: Sets or returns an error message.

### Common Error Types
- **ReferenceError**: Raised when an illegal reference occurs (e.g., using a variable that hasn't been declared).
- **TypeError**: Raised when a value is not of the expected type.
- **SyntaxError**: Raised when a syntax error occurs.

---

## 5. Debugging with `console.log()`

The most common way to debug JavaScript is by using `console.log()` to print values to the browser console.

```javascript
let x = 10;
let y = 20;
console.log("Value of x + y is:", x + y);
```

You can also use `console.warn()` and `console.error()` for different severity levels.
