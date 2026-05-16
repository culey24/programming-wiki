# Chapter 4: JavaScript Functions

Functions are blocks of code designed to perform a particular task. They are executed when they are called (invoked).

## 1. Function Declaration

A function is defined with the `function` keyword, followed by a name, and parentheses `()`.

```javascript
function greet(name) {
  return "Hello, " + name + "!";
}

let message = greet("Alice");
console.log(message); // Output: Hello, Alice!
```

---

## 2. Function Parameters and Arguments

- **Parameters** are names listed in the function definition.
- **Arguments** are the real values passed to the function when it is called.

### Default Parameters
You can assign default values to parameters in case no argument is provided.

```javascript
function welcome(user = "Guest") {
  console.log(`Welcome, ${user}`);
}

welcome(); // Output: Welcome, Guest
```

---

## 3. Arrow Functions (ES6)

Arrow functions provide a shorter syntax for writing function expressions.

```javascript
// Traditional Function
let add = function(a, b) {
  return a + b;
};

// Arrow Function
let addArrow = (a, b) => a + b;

console.log(addArrow(5, 10)); // 15
```

If the function has only one statement and returns a value, you can remove the brackets and the `return` keyword.

---

## 4. Scope

Scope determines the accessibility of variables.

- **Global Scope**: Variables declared outside a function are global and can be accessed anywhere.
- **Local Scope**: Variables declared inside a function are local to that function.

```javascript
let globalVar = "I am global";

function testScope() {
  let localVar = "I am local";
  console.log(globalVar); // Accessible
  console.log(localVar);  // Accessible
}

testScope();
// console.log(localVar); // Error: localVar is not defined
```

---

## 5. Callback Functions

A callback is a function passed as an argument to another function.

```javascript
function processInput(callback) {
  let name = "Developer";
  callback(name);
}

processInput((n) => {
  console.log("Processing: " + n);
});
```
