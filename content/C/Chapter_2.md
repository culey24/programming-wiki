# Chapter 2: C Variables & Data Types

Variables are containers for storing data values. In C, you must declare the type of data a variable will hold.

## 1. Declaring Variables

To create a variable, specify the type and assign it a value:

`type variableName = value;`

```c
int myNum = 15;            // Integer
float myFloatNum = 5.99;   // Floating point number
char myLetter = 'D';       // Character
```

You can also declare a variable without assigning a value immediately:

```c
int myNum;
myNum = 15;
```

---

## 2. Basic Data Types

| Data Type | Description | Size | Example |
| :--- | :--- | :--- | :--- |
| `int` | Integers | 2 or 4 bytes | `int x = 5;` |
| `float` | Fractional numbers | 4 bytes | `float y = 5.75;` |
| `double` | Large fractional numbers | 8 bytes | `double z = 19.99;` |
| `char` | Single characters | 1 byte | `char c = 'A';` |

---

## 3. Format Specifiers

Format specifiers are used together with the `printf()` function to tell the compiler what type of data the variable is. They start with a percent sign `%`.

- `%d` or `%i`: For `int`
- `%f`: For `float`
- `%lf`: For `double`
- `%c`: For `char`
- `%s`: For strings (an array of characters)

```c
int myNum = 5;
printf("My favorite number is: %d", myNum);
```

---

## 4. Constants

If you want to prevent others (or yourself) from overriding existing variable values, use the `const` keyword. This will declare the variable as "constant", which means unchangeable and read-only.

```c
const int BIRTHYEAR = 1990;
// BIRTHYEAR = 1991; // Error: assignment of read-only variable
```

---

## 5. Type Conversion

Sometimes you need to convert one data type to another. This is known as **type casting**.

- **Implicit**: Done automatically by the compiler.
- **Explicit**: Done manually by placing the type in parentheses before the value.

```c
float myScore = (float) 5 / 2; // Returns 2.5 instead of 2
```
