# Chapter 3: C# Operators & Strings

Operators are used to perform operations on variables and values. C# treats strings as objects.

## 1. C# Operators

- **Arithmetic**: `+`, `-`, `*`, `/`, `%`, `++`, `--`
- **Assignment**: `=`, `+=`, `-=`, `*=`, `/=`, `%=`, `&=`, `|=`, `^=`, `>>=`, `<<=`
- **Comparison**: `==`, `!=`, `>`, `<`, `>=`, `<=`
- **Logical**: `&&`, `||`, `!`

---

## 2. C# Strings

A `string` variable contains a collection of characters surrounded by double quotes.

### String Methods
- `Length`: Property that returns the length of a string.
- `ToUpper()` / `ToLower()`: Methods to change case.
- `IndexOf()`: Returns the position of a character/substring.

```csharp
string txt = "Hello World";
Console.WriteLine(txt.Length); // 11
Console.WriteLine(txt.ToUpper()); // "HELLO WORLD"
```

---

## 3. String Interpolation

Another option of string concatenation is **string interpolation**, which substitutes values of variables into placeholders in a string. Use the `$` symbol when declaring a string.

```csharpsharp
string firstName = "John";
string lastName = "Doe";
string name = $"My full name is: {firstName} {lastName}";
```

---

## 4. Accessing Strings

You can access the characters in a string by referring to its index number inside square brackets `[]`.

```csharp
string myString = "Hello";
Console.WriteLine(myString[0]); // Outputs H
```

---

## 5. Math Class

The C# `Math` class has many methods that allow you to perform mathematical tasks on numbers.

```csharp
Math.Max(5, 10);
Math.Min(5, 10);
Math.Sqrt(64);
Math.Abs(-4.7);
Math.Round(9.99);
```

---

## 6. Special Characters

Use the backslash `\` escape character for special characters:
- `\'`: Single quote
- `\"`: Double quote
- `\\`: Backslash
- `\n`: New Line
- `\t`: Tab
