# Chapter 5: C Functions

A function is a block of code which only runs when it is called. You can pass data, known as parameters, into a function. Functions are used to perform certain actions, and they are important for reusing code.

## 1. Creating and Calling a Function

A function must be **declared** before it can be called.

```c
// Declaration
void myFunction() {
  printf("I just got executed!");
}

int main() {
  myFunction(); // Call the function
  return 0;
}
```

---

## 2. Function Parameters

Parameters act as variables inside the function. They are specified after the function name, inside the parentheses.

```c
void myFunction(char name[]) {
  printf("Hello %s\n", name);
}

int main() {
  myFunction("Liam");
  myFunction("Jenny");
  return 0;
}
```

---

## 3. Return Values

If you want the function to return a value, you can use a data type (such as `int` or `float`) instead of `void`, and use the `return` keyword inside the function.

```c
int myFunction(int x) {
  return 5 + x;
}

int main() {
  printf("Result is: %d", myFunction(3)); // 8
  return 0;
}
```

---

## 4. Function Declaration vs. Definition

A C function consists of two parts:
- **Declaration**: The function's name, return type, and parameters.
- **Definition**: The body of the function (the code to be executed).

It is good practice to declare functions before `main()` and define them after `main()`.

```c
// Function declaration
int myFunction(int, int);

int main() {
  int result = myFunction(5, 3);
  return 0;
}

// Function definition
int myFunction(int x, int y) {
  return x + y;
}
```

---

## 5. Scope

Variables created inside a function belong to that function and cannot be accessed from outside. Global variables created outside all functions can be accessed from any function.
