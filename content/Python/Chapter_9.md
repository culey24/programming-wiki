# Chapter 9: Python Mini Project: Task Manager

In this final chapter, we will build a simple command-line Task Manager to apply what we've learned.

## 1. Project Requirements

We want to build a tool that allows users to:
- Add a task.
- View all tasks.
- Remove a task.
- Save tasks to a file.

---

## 2. The Code

```python
import os

class TaskManager:
    def __init__(self, filename="tasks.txt"):
        self.filename = filename
        self.tasks = self.load_tasks()

    def load_tasks(self):
        if not os.path.exists(self.filename):
            return []
        with open(self.filename, "r") as f:
            return [line.strip() for line in f.readlines()]

    def save_tasks(self):
        with open(self.filename, "w") as f:
            for task in self.tasks:
                f.write(task + "\n")

    def add_task(self, task):
        self.tasks.append(task)
        self.save_tasks()
        print(f"Task '{task}' added.")

    def view_tasks(self):
        if not self.tasks:
            print("No tasks found.")
        else:
            print("\nYour Tasks:")
            for idx, task in enumerate(self.tasks, 1):
                print(f"{idx}. {task}")

    def remove_task(self, index):
        try:
            removed = self.tasks.pop(index - 1)
            self.save_tasks()
            print(f"Task '{removed}' removed.")
        except IndexError:
            print("Invalid task number.")

def main():
    manager = TaskManager()
    while True:
        print("\n--- Task Manager ---")
        print("1. Add Task")
        print("2. View Tasks")
        print("3. Remove Task")
        print("4. Exit")
        choice = input("Choose an option: ")

        if choice == "1":
            task = input("Enter task: ")
            manager.add_task(task)
        elif choice == "2":
            manager.view_tasks()
        elif choice == "3":
            manager.view_tasks()
            idx = int(input("Enter task number to remove: "))
            manager.remove_task(idx)
        elif choice == "4":
            break
        else:
            print("Invalid choice.")

if __name__ == "__main__":
    main()
```

---

## 3. Key Concepts Used

- **Classes and Objects**: Encapsulating task data and logic.
- **File I/O**: Persisting tasks in a text file.
- **Error Handling**: Using `try...except` for user input.
- **Lists and Loops**: Managing and displaying tasks.

---

## 4. Python Summary

Congratulations! You have completed the Python course. You have learned:
- Syntax, variables, and data types.
- Control flow and functions.
- Collections (Lists, Dicts, Tuples, Sets).
- Object-Oriented Programming.
- File handling and error handling.
- Practical application with a mini project.

### What's Next?
- Explore **Web Frameworks** (Django, Flask, FastAPI).
- Learn **Data Science** (Pandas, NumPy, Matplotlib).
- Study **Machine Learning** (Scikit-learn, TensorFlow).
- Build desktop apps with **Tkinter** or **PyQt**.
