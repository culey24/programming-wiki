# Chapter 2: Java Variables & Data Types

Variables are containers for storing data values. Java is a strongly-typed language, so every variable must have a declared type.

## 1. Variables

### Declaration
```java
String name = "John";
int myNum = 15;
float myFloatNum = 5.99f;
char myLetter = 'D';
boolean myBool = true;
```

Note: For `float`, you must end the value with an "f".

---

## 2. Basic Data Types

Data types are divided into two groups:
- **Primitive data types**: includes `byte`, `short`, `int`, `long`, `float`, `double`, `boolean` and `char`.
- **Non-primitive data types**: such as `String`, `Arrays` and `Classes`.

| Type | Size | Description |
| :--- | :--- | :--- |
| `int` | 4 bytes | Whole numbers |
| `long` | 8 bytes | Whole numbers (requires 'L' suffix) |
| `float` | 4 bytes | Fractional numbers (6-7 decimal digits) |
| `double` | 8 bytes | Fractional numbers (15 decimal digits) |
| `boolean` | 1 bit | true / false |
| `char` | 2 bytes | Single character/ASCII value |

---

## 3. Java Type Casting

Type casting is when you assign a value of one primitive data type to another type.

### Widening Casting (automatically)
Converting a smaller type to a larger type size:
`byte` -> `short` -> `char` -> `int` -> `long` -> `float` -> `double`

```java
int myInt = 9;
double myDouble = myInt; // Automatic casting: int to double
```

### Narrowing Casting (manually)
Converting a larger type to a smaller size type:
`double` -> `float` -> `long` -> `int` -> `char` -> `short` -> `byte`

```java
double myDouble = 9.78d;
int myInt = (int) myDouble; // Manual casting: double to int
```

---

## 4. Final Variables

If you don't want others (or yourself) to overwrite existing values, use the `final` keyword (this will declare the variable as "final" or "constant", which means unchangeable and read-only).

```java
final int myNum = 15;
// myNum = 20; // error: cannot assign a value to final variable
```

---

## 5. Non-Primitive Data Types

Non-primitive data types are called **reference types** because they refer to objects.
- Primitive types are predefined (already defined) in Java. Non-primitive types are created by the programmer and is not defined by Java (except for `String`).
- Non-primitive types can be used to call methods to perform certain operations, while primitive types cannot.
- A primitive type always has a value, while non-primitive types can be `null`.
