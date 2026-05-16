# Chapter 1: JavaScript Variables & Data Types

JavaScript is a versatile, high-level language primarily used for web development. This chapter covers how to store and manage data.

## 1. What is a Variable?

Variables are containers for storing data values. In JavaScript, there are three ways to declare a variable: `var`, `let`, and `const`.

### `let` and `const`

- **`let`**: Used for variables that can change later.
- **`const`**: Used for variables that should remain constant.

```javascript
let score = 10;
score = 15; // This is allowed

const pi = 3.14;
// pi = 3.15; // This would cause an error
```

### `var` (Old Way)

Before 2015 (ES6), `var` was the only way to declare variables. Today, it is recommended to use `let` and `const` as they have better scoping rules.

---

## 2. Naming Rules

- Names must begin with a letter, `$`, or `_`.
- Names are case-sensitive (`y` and `Y` are different).
- Use **camelCase** for multi-word names (e.g., `userAge`, `totalPrice`).
- Reserved words (like `if`, `for`, `class`) cannot be used as names.

---

## 3. Data Types

JavaScript variables can hold many data types:

### Primitive Types
- **String**: Textual data, enclosed in quotes.
- **Number**: Integers or floating-point numbers.
- **Boolean**: Either `true` or `false`.
- **Undefined**: A variable that has been declared but not assigned a value.
- **Null**: Represents the intentional absence of any object value.

```javascript
let name = "Alice";    // String
let age = 25;          // Number
let isStudent = true;  // Boolean
let x;                 // Undefined
let y = null;          // Null
```

### Dynamic Typing
JavaScript is a dynamic language, meaning a variable can change its data type during execution.

```javascript
let data = 42;    // data is a Number
data = "Hello";   // now data is a String
```

---

## 4. Strings in Detail

Strings can be created using single quotes, double quotes, or backticks (template literals).

### Template Literals
Backticks allow for easy variable interpolation using `${}`.

```javascript
let user = "John";
let welcomeMessage = `Hello, ${user}!`;
console.log(welcomeMessage); // Output: Hello, John!
```

---

## 5. Basic Math with Numbers

JavaScript supports standard arithmetic operators: `+`, `-`, `*`, `/`, `%` (remainder), and `**` (exponentiation).

```javascript
let a = 10;
let b = 3;
console.log(a % b); // Output: 1 (remainder of 10/3)
console.log(a ** 2); // Output: 100 (10 squared)
```

---

## 6. Type Conversion

Sometimes you need to convert data from one type to another.

```javascript
let input = "10";
let num = Number(input); // Converts string to number
let str = String(42);    // Converts number to string
```
