# Chapter 9: C++ Exceptions & Summary

Exception handling in C++ is a process to handle runtime errors, such as divide by zero, array out of bounds, etc.

## 1. C++ Exceptions

Exception handling in C++ consists of three keywords: `try`, `throw` and `catch`:
- The `try` statement allows you to define a block of code to be tested for errors while it is being executed.
- The `throw` keyword throws an exception when a problem is detected, which lets us create a custom error.
- The `catch` statement allows you to define a block of code to be executed if an error occurs in the try block.

```cpp
try {
  int age = 15;
  if (age >= 18) {
    cout << "Access granted - you are old enough.";
  } else {
    throw (age);
  }
}
catch (int myNum) {
  cout << "Access denied - You must be at least 18 years old.\n";
  cout << "Age is: " << myNum;
}
```

---

## 2. Catching Any Exception

If you do not know the throw type used in the try block, you can use the "three dots" syntax (`...`) inside the catch block, which will handle any type of exception.

```cpp
catch (...) {
  cout << "An unknown exception occurred.";
}
```

---

## 3. Standard Library Exceptions

C++ provides a list of standard exceptions defined in `<exception>` which we can use in our programs (e.g., `bad_alloc`, `runtime_error`).

---

## 4. Templates

Templates are a powerful feature in C++ which allows you to write generic programs. You can create a single function or a class to work with different data types.

```cpp
template <typename T>
T myMax(T x, T y) {
  return (x > y) ? x : y;
}
```

---

## 5. C++ Summary

Congratulations! You have completed the C++ course. You have learned:
- Basic C++ syntax, input/output, and data types.
- Control flow and loops.
- Functions, references, and overloading.
- Object-Oriented Programming (Classes, Objects, Encapsulation, Inheritance, Polymorphism).
- How to handle errors using Exceptions.

### What's Next?
C++ is a massive language. You can now explore:
- The **Standard Template Library (STL)** for advanced data structures (vectors, maps, etc.).
- **Modern C++** (C++11, C++14, C++17, C++20) features like lambdas and smart pointers.
- Building desktop applications with **Qt** or games with **Unreal Engine**.
