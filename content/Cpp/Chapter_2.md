# Chapter 2: C++ Variables, Data Types & Input

C++ is a statically typed language, which means that the type of a variable is known at compile time.

## 1. Variables

### Declaration
```cpp
int myNum = 5;               // Integer (whole number)
double myFloatNum = 5.99;    // Floating point number
char myLetter = 'D';         // Character
string myText = "Hello";     // String
bool myBoolean = true;       // Boolean
```

### Multiple Variables
You can declare more than one variable of the same type in a single line:

```cpp
int x = 5, y = 6, z = 50;
```

---

## 2. Basic Data Types

| Data Type | Size | Description |
| :--- | :--- | :--- |
| `int` | 4 bytes | Whole numbers |
| `float` | 4 bytes | Fractional numbers (6-7 decimal digits) |
| `double` | 8 bytes | Fractional numbers (15 decimal digits) |
| `boolean` | 1 byte | true / false |
| `char` | 1 byte | Single character/letter/ASCII |

---

## 3. C++ User Input

`cin` is a predefined variable that reads data from the keyboard with the extraction operator (`>>`).

```cpp
int x;
cout << "Type a number: ";
cin >> x; // Get user input from the keyboard
cout << "Your number is: " << x;
```

---

## 4. Scientific Numbers

A floating point number can also be a scientific number with an "e" to indicate the power of 10:

```cpp
float f1 = 35e3;
double d1 = 12E4;
```

---

## 5. Boolean Types

A boolean data type is declared with the `bool` keyword and can only take the values `true` or `false`. When the value is returned, `true` is `1` and `false` is `0`.

```cpp
bool isCodingFun = true;
cout << isCodingFun; // Outputs 1
```
