# Chapter 9: C File I/O & Summary

Handling files is an important part of many programs. In C, you can open, read, write, and close files using built-in functions.

## 1. File Handling Functions

To work with files, you need to use a pointer of type `FILE`.

```c
FILE *fptr;
```

### Opening a File
Use the `fopen()` function.
Modes:
- `w`: Write (creates a new file or overwrites an existing one).
- `a`: Append (adds data to the end of a file).
- `r`: Read (opens an existing file for reading).

```c
fptr = fopen("filename.txt", "w");
```

### Writing to a File
Use `fprintf()` or `fputs()`.

```c
fprintf(fptr, "Some text");
```

### Reading from a File
Use `fgets()`.

```c
char myString[100];
fgets(myString, 100, fptr);
```

### Closing a File
Always close the file when you are finished with it.

```c
fclose(fptr);
```

---

## 2. Standard Streams

C has three standard streams that are automatically opened:
- `stdin`: Standard input (keyboard).
- `stdout`: Standard output (screen).
- `stderr`: Standard error (screen).

---

## 3. Preprocessor Directives

Directives like `#include` and `#define` are processed before the actual compilation starts.

```c
#define PI 3.14
```

---

## 4. C Summary

Congratulations! You have completed the C programming course. You now know:
- Basic syntax, data types, and variables.
- How to use operators and control flow.
- How to create and use functions.
- How to work with arrays and strings.
- The power of pointers and memory addresses.
- How to group data using structures and unions.
- How to perform file input and output operations.

### What's Next?
A great next step is to learn **C++**, which adds object-oriented features to C, or **Data Structures and Algorithms** to become a more efficient programmer.
