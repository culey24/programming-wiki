---
sidebar_position: 2
---

# Simple Project: Build a To-Do App

This page walks through a small project to build a simple **To-Do app** using HTML, CSS, and JavaScript. The focus is on structure, interactivity, and how code pieces work together.

## Project Overview

The app lets the user:

- add a new task
- mark a task as complete
- remove a task from the list
- keep the interface simple and responsive

## 1. Create the HTML structure

Start with a simple HTML page that includes a heading, input field, add button, and a list container.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Simple To-Do App</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <main class="app-shell">
      <h1>To-Do App</h1>
      <div class="task-entry">
        <input id="taskInput" type="text" placeholder="What needs to be done?" />
        <button id="addButton">Add</button>
      </div>
      <ul id="taskList" class="task-list"></ul>
    </main>
    <script src="app.js"></script>
  </body>
</html>
```

## 2. Add CSS for styling

Use CSS to make the app look clean and keep the layout centered.

```css
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #0f172a;
  color: #e2e8f0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.app-shell {
  width: min(480px, 90vw);
  padding: 2rem;
  border-radius: 1rem;
  background: #111827;
  box-shadow: 0 20px 60px rgba(15, 23, 42, 0.4);
}

h1 {
  margin-top: 0;
  margin-bottom: 1.5rem;
  font-size: 2rem;
  text-align: center;
}

.task-entry {
  display: flex;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

#taskInput {
  flex: 1;
  padding: 0.9rem 1rem;
  border-radius: 0.75rem;
  border: 1px solid #334155;
  background: #0f172a;
  color: #f8fafc;
}

#addButton {
  padding: 0.9rem 1.2rem;
  border: none;
  border-radius: 0.75rem;
  background: #7c3aed;
  color: white;
  cursor: pointer;
}

#addButton:hover {
  background: #6d28d9;
}

.task-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.task-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 0.9rem 1rem;
  margin-bottom: 0.75rem;
  border-radius: 0.75rem;
  background: #1f2937;
}

.task-item.completed {
  opacity: 0.7;
  text-decoration: line-through;
}

.task-buttons {
  display: flex;
  gap: 0.5rem;
}

.task-buttons button {
  border: none;
  border-radius: 0.65rem;
  padding: 0.55rem 0.75rem;
  cursor: pointer;
  font-size: 0.85rem;
}

.task-buttons .complete {
  background: #10b981;
  color: white;
}

.task-buttons .remove {
  background: #ef4444;
  color: white;
}
```

## 3. Add JavaScript for interactivity

This code adds tasks, toggles completion state, and removes tasks when the button is clicked.

```js
const taskInput = document.getElementById('taskInput')
const addButton = document.getElementById('addButton')
const taskList = document.getElementById('taskList')

function addTask() {
  const taskText = taskInput.value.trim()
  if (!taskText) return

  const taskItem = document.createElement('li')
  taskItem.className = 'task-item'

  const taskLabel = document.createElement('span')
  taskLabel.textContent = taskText

  const taskButtons = document.createElement('div')
  taskButtons.className = 'task-buttons'

  const completeButton = document.createElement('button')
  completeButton.className = 'complete'
  completeButton.textContent = 'Done'
  completeButton.addEventListener('click', () => {
    taskItem.classList.toggle('completed')
  })

  const removeButton = document.createElement('button')
  removeButton.className = 'remove'
  removeButton.textContent = 'Remove'
  removeButton.addEventListener('click', () => {
    taskList.removeChild(taskItem)
  })

  taskButtons.append(completeButton, removeButton)
  taskItem.append(taskLabel, taskButtons)
  taskList.appendChild(taskItem)

  taskInput.value = ''
  taskInput.focus()
}

addButton.addEventListener('click', addTask)

taskInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addTask()
  }
})
```

## 4. How it works

- `taskInput.value.trim()` removes extra spaces from the user input.
- `createElement('li')` creates a new task item in the list.
- `classList.toggle('completed')` switches the completed style on and off.
- `removeChild(taskItem)` deletes the task from the list.
- `keypress` listens for the Enter key to add tasks without clicking the button.

## 5. Run the project

1. Save the files as `index.html`, `styles.css`, and `app.js`.
2. Open `index.html` in your browser.
3. Type a task, press **Add** or **Enter**, then mark it done or remove it.

## 6. Next enhancements

- Store tasks in `localStorage` so they stay after refresh.
- Add a task counter.
- Add a filter for active/completed tasks.
- Use a frontend framework like React or Vue for a more advanced version.
