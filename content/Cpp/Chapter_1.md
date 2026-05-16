# Chapter 1: C++ Introduction & Syntax

C++ is a cross-platform language that can be used to create high-performance applications. It was developed by Bjarne Stroustrup as an extension to the C language.

## 1. What is C++?

- C++ is an **object-oriented programming (OOP)** language, whereas C is procedural.
- It gives programmers a high level of control over system resources and memory.
- C++ is one of the world's most popular programming languages. It can be found in today's operating systems, Graphical User Interfaces, and embedded systems.

---

## 2. Hello World in C++

```cpp
#include <iostream>
using namespace std;

int main() {
  cout << "Hello World!";
  return 0;
}
```

### Explanation:
- `#include <iostream>`: A header file library that lets us work with input and output objects, such as `cout`.
- `using namespace std;`: Means that we can use names for objects and variables from the standard library.
- `cout`: (pronounced "see-out") is an object used together with the insertion operator (`<<`) to output/print text.
- `return 0;`: Ends the main function.

---

## 3. C++ Syntax

### Omit Namespace
You might see some C++ programs that run without the `using namespace std` line. The `std` keyword can be replaced with the `::` operator for certain objects:

```cpp
#include <iostream>

int main() {
  std::cout << "Hello World!";
  return 0;
}
```

### Comments
- Single-line: `//`
- Multi-line: `/* ... */`

---

## 4. Compilation

Like C, C++ is a compiled language. You can use the `g++` compiler:

```bash
g++ hello.cpp -o hello
./hello
```

---

## 5. Why Learn C++?

C++ is close to the hardware, making it very fast. It is widely used in:
- Game Development (Unreal Engine).
- Systems Software.
- High-frequency Trading Applications.
- Browsers (Chrome, Firefox).
