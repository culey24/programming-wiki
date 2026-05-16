# Chapter 2: C# Variables & Data Types

Variables are containers for storing data values. C# is a strongly-typed language, meaning every variable has a declared type.

## 1. Variables

### Declaration
```csharp
string name = "John";
int myNum = 15;
double myDoubleNum = 5.99D;
char myLetter = 'D';
bool myBool = true;
```

---

## 2. Basic Data Types

A data type specifies the size and type of variable values.

| Type | Size | Description |
| :--- | :--- | :--- |
| `int` | 4 bytes | Whole numbers |
| `long` | 8 bytes | Whole numbers (requires 'L' suffix) |
| `float` | 4 bytes | Fractional numbers (requires 'F' suffix) |
| `double` | 8 bytes | Fractional numbers (requires 'D' suffix) |
| `decimal` | 16 bytes | Precise fractional numbers (requires 'M' suffix) |
| `bool` | 1 bit | true / false |
| `char` | 2 bytes | Single character/ASCII value |
| `string` | 2 bytes per char | A sequence of characters |

---

## 3. C# Type Casting

Type casting is when you assign a value of one data type to another type.

### Implicit Casting (automatically)
Converting a smaller type to a larger type size:
`char` -> `int` -> `long` -> `float` -> `double`

```csharp
int myInt = 9;
double myDouble = myInt;
```

### Explicit Casting (manually)
Converting a larger type to a smaller size type:
`double` -> `float` -> `long` -> `int` -> `char`

```csharp
double myDouble = 9.78;
int myInt = (int) myDouble;
```

### Built-in Conversion Methods
You can also convert data types explicitly by using built-in methods: `Convert.ToBoolean`, `Convert.ToDouble`, `Convert.ToString`, `Convert.ToInt32`, etc.

---

## 4. Constants

If you don't want others (or yourself) to overwrite existing values, use the `const` keyword.

```csharp
const int myNum = 15;
// myNum = 20; // error
```

---

## 5. User Input

To get user input in C#, use `Console.ReadLine()`.

```csharp
Console.WriteLine("Enter username:");
string userName = Console.ReadLine();
Console.WriteLine("Username is: " + userName);
```

Note: `Console.ReadLine()` always returns a **string**. If you want a number, you must convert it:

```csharp
int age = Convert.ToInt32(Console.ReadLine());
```
