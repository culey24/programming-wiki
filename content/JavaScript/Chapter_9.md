# Chapter 9: JavaScript Mini Project - Counter App

In this final chapter, we'll build a simple Counter App to apply what we've learned about variables, functions, and DOM manipulation.

## 1. The HTML Structure

First, we need a place to display our counter and some buttons to interact with it.

```html
<div class="counter-container">
  <h1>Counter App</h1>
  <p id="count">0</p>
  <button id="decrement">Decrement</button>
  <button id="reset">Reset</button>
  <button id="increment">Increment</button>
</div>
```

---

## 2. The JavaScript Logic

We will use a variable to keep track of the count and update the HTML element whenever a button is clicked.

```javascript
// 1. Select the elements
const countDisplay = document.getElementById('count');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');

// 2. Initialize the state
let count = 0;

// 3. Define the functions
function updateDisplay() {
  countDisplay.innerText = count;
  
  // Bonus: Change color based on value
  if (count > 0) {
    countDisplay.style.color = "green";
  } else if (count < 0) {
    countDisplay.style.color = "red";
  } else {
    countDisplay.style.color = "black";
  }
}

// 4. Add event listeners
incrementBtn.addEventListener('click', () => {
  count++;
  updateDisplay();
});

decrementBtn.addEventListener('click', () => {
  count--;
  updateDisplay();
});

resetBtn.addEventListener('click', () => {
  count = 0;
  updateDisplay();
});
```

---

## 3. What We've Applied

- **Variables**: `count` stores the current state.
- **Functions**: `updateDisplay` encapsulates the UI update logic.
- **Event Listeners**: Detect user clicks on buttons.
- **Conditionals**: Change the text color based on whether the count is positive, negative, or zero.
- **DOM Manipulation**: Updating `innerText` and `style.color` of HTML elements.

---

## 4. Summary

Congratulations! You've learned the fundamentals of JavaScript. From variables and data types to functions, objects, and handling real-world interaction. 

### Next Steps:
- Learn about **ES6+ features** (Destructuring, Spread/Rest).
- Explore **Web APIs** (LocalStorage, Geolocation).
- Dive into a frontend framework like **React**, **Vue**, or **Angular**.
