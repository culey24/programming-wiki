# Chapter 3: Java Operators & Strings

Operators are used to perform operations on variables and values. Strings in Java are objects.

## 1. Java Operators

Java divides the operators into the following groups:
- **Arithmetic**: `+`, `-`, `*`, `/`, `%`, `++`, `--`
- **Assignment**: `=`, `+=`, `-=`, `*=`, `/=`, `%=`, `&=`, `|=`, `^=`, `>>=`, `<<=`
- **Comparison**: `==`, `!=`, `>`, `<`, `>=`, `<=`
- **Logical**: `&&`, `||`, `!`

---

## 2. Java Strings

A `String` in Java is actually an object, which contains methods that can perform certain operations on strings.

```java
String txt = "Hello World";
```

### String Methods
- `length()`: Returns the number of characters.
- `toUpperCase()` / `toLowerCase()`: Changes case.
- `indexOf()`: Returns the index (the position) of the first occurrence of a specified text in a string (including whitespace).

```java
String txt = "Hello World";
System.out.println(txt.length()); // 11
System.out.println(txt.toUpperCase()); // "HELLO WORLD"
System.out.println(txt.indexOf("World")); // 6
```

---

## 3. String Concatenation

The `+` operator can be used between strings to combine them. This is called concatenation.

```java
String firstName = "John";
String lastName = "Doe";
System.out.println(firstName + " " + lastName);
```

You can also use the `concat()` method:

```java
System.out.println(firstName.concat(lastName));
```

---

## 4. Special Characters

Because strings must be written within quotes, Java will misunderstand this string:
`String txt = "We are the so-called "Vikings" from the north.";`

The solution to avoid this problem, is to use the **backslash escape character**.
- `\"`: Double quote
- `\'`: Single quote
- `\\`: Backslash
- `\n`: New line
- `\r`: Carriage return
- `\t`: Tab
- `\b`: Backspace
- `\f`: Form feed

---

## 5. Math Class

The Java `Math` class has many methods that allow you to perform mathematical tasks on numbers.

```java
Math.max(5, 10); // 10
Math.min(5, 10); // 5
Math.sqrt(64);   // 8.0
Math.abs(-4.7);  // 4.7
Math.random();   // Returns a random number between 0.0 (inclusive), and 1.0 (exclusive)
```
