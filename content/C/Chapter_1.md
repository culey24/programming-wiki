# Chapter 1: C Introduction & Syntax

C is a general-purpose programming language that is extremely popular, simple, and flexible to use. It was developed by Dennis Ritchie at Bell Labs in 1972.

## 1. What is C?

- C is a **compiled language**, which means you need a compiler to translate your code into machine-readable format.
- It is often called a **middle-level language** because it combines elements of high-level languages with the functionality of assembly language.
- Many modern languages like C++, Java, and Python are based on C.

---

## 2. Hello World in C

Let's look at the basic structure of a C program:

```c
#include <stdio.h>

int main() {
  printf("Hello, World!");
  return 0;
}
```

### Explanation:
- `#include <stdio.h>`: A header file library that lets us work with input and output functions (like `printf`).
- `int main()`: The main function where execution starts. Every C program must have one.
- `printf()`: A function used to print text to the screen.
- `return 0;`: Ends the `main` function and returns the value 0 to the operating system (indicating success).

---

## 3. C Syntax Basics

### Semicolons
Every statement in C must end with a semicolon `;`.

### Case Sensitivity
C is case-sensitive. `Variable` and `variable` are different.

### Comments
- Single-line: `// comment`
- Multi-line: `/* comment */`

---

## 4. Compilation Process

To run a C program, you typically follow these steps:
1. Write the code in a `.c` file.
2. Compile it using a compiler like `gcc`:
   ```bash
   gcc hello.c -o hello
   ```
3. Run the executable:
   ```bash
   ./hello
   ```

---

## 5. Keywords

C has a set of reserved words (like `int`, `return`, `if`, `while`) that have special meanings and cannot be used as variable names.
