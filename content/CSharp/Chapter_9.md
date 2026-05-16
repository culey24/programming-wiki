# Chapter 9: C# Exceptions & Summary

When executing C# code, different errors can occur.

## 1. C# Exceptions

When an error occurs, C# will normally stop and generate an error message. The technical term for this is: C# will throw an **exception** (throw an error).

### Try...Catch
The `try` statement allows you to define a block of code to be tested for errors while it is being executed. The `catch` statement allows you to define a block of code to be executed, if an error occurs in the try block.

```csharp
try
{
  int[] myNumbers = {1, 2, 3};
  Console.WriteLine(myNumbers[10]);
}
catch (Exception e)
{
  Console.WriteLine("Something went wrong.");
}
finally
{
  Console.WriteLine("The 'try catch' is finished.");
}
```

---

## 2. The `throw` Keyword

The `throw` statement allows you to create a custom error.

```csharp
static void checkAge(int age)
{
  if (age < 18)
  {
    throw new ArithmeticException("Access denied - You must be at least 18 years old.");
  }
}
```

---

## 3. Files

The `File` class from the `System.IO` namespace allows us to work with files.

```csharp
using System.IO;

string writeText = "Hello World!";
File.WriteAllText("filename.txt", writeText);

string readText = File.ReadAllText("filename.txt");
Console.WriteLine(readText);
```

---

## 4. LINQ

LINQ (Language Integrated Query) is a powerful tool to work with data from different sources (like arrays, XML, SQL).

```csharp
using System.Linq;

int[] scores = { 90, 71, 82, 93, 75, 82 };

// Query syntax
var highScores = from score in scores
                 where score > 80
                 select score;
```

---

## 5. C# Summary

Congratulations! You have completed the C# course. You have learned:
- C# syntax, data types, and variables.
- Control flow, loops, and arrays.
- Methods, parameters, and overloading.
- Object-Oriented Programming (Classes, Objects, Inheritance, Polymorphism, Interfaces).
- Handling errors with Exceptions.

### What's Next?
- Learn **ASP.NET Core** for web development.
- Explore **Unity** for game development.
- Deep dive into **Entity Framework Core** for database management.
- Master **Asynchronous Programming** (`async`/`await`).
