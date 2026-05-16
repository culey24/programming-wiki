# Chapter 1: C# Introduction & Syntax

C# (pronounced "C-Sharp") is a modern, object-oriented programming language developed by Microsoft that runs on the .NET Framework.

## 1. What is C#?

- C# is used for mobile apps, desktop apps, cloud-based services, websites, enterprise software, and **games** (using the Unity engine).
- It is similar to Java and C++, making it easy to learn for developers familiar with those languages.
- C# is an **object-oriented** language, which means it follows a blueprint-based approach to building software.

---

## 2. Hello World in C#

```csharp
using System;

namespace HelloWorld
{
  class Program
  {
    static void main(string[] args)
    {
      Console.WriteLine("Hello World!");    
    }
  }
}
```

### Explanation:
- `using System`: Means that we can use classes from the `System` namespace.
- `namespace HelloWorld`: Used to organize your code, and it is a container for classes and other namespaces.
- `class Program`: A container for data and methods, which brings functionality to your program. Every line of code that runs in C# must be inside a class.
- `static void Main()`: The entry point of your program. Any code inside its curly brackets `{}` will be executed.
- `Console.WriteLine()`: A method of the `Console` class (from the `System` namespace) used to print text.

---

## 3. C# Syntax Rules

- Every statement ends with a semicolon `;`.
- C# is case-sensitive (`MyVar` is different from `myvar`).
- Unlike Java, the file name does not necessarily have to match the class name, but it is often better to keep them consistent.

---

## 4. Compilation and Execution

C# code is compiled into **Intermediate Language (IL)** and then executed by the **Common Language Runtime (CLR)**.

1. Write code in a `.cs` file.
2. Compile and run using the .NET CLI:
   ```bash
   dotnet run
   ```

---

## 5. Comments

- Single-line: `//`
- Multi-line: `/* ... */`
