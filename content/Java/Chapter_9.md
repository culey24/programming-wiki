# Chapter 9: Java Exceptions & Summary

When executing Java code, different errors can occur: coding errors made by the programmer, errors due to wrong input, or other unforeseeable things.

## 1. Java Exceptions

When an error occurs, Java will normally stop and generate an error message. The technical term for this is: Java will throw an **exception** (throw an error).

### Try...Catch
The `try` statement allows you to define a block of code to be tested for errors while it is being executed. The `catch` statement allows you to define a block of code to be executed, if an error occurs in the try block.

```java
public class Main {
  public static void main(String[ ] args) {
    try {
      int[] myNumbers = {1, 2, 3};
      System.out.println(myNumbers[10]);
    } catch (Exception e) {
      System.out.println("Something went wrong.");
    } finally {
      System.out.println("The 'try catch' is finished.");
    }
  }
}
```

- `finally`: lets you execute code, after try...catch, regardless of the result.

---

## 2. The `throw` Keyword

The `throw` statement allows you to create a custom error.

```java
static void checkAge(int age) {
  if (age < 18) {
    throw new ArithmeticException("Access denied - You must be at least 18 years old.");
  } else {
    System.out.println("Access granted - You are old enough!");
  }
}
```

---

## 3. Java Packages and API

A package in Java is used to group related classes. Think of it as a folder in a file directory.
- **Built-in Packages**: Packages from the Java API (e.g., `java.util`, `java.io`).
- **User-defined Packages**: Create your own packages.

To use a class or a package from the library, you need to use the `import` keyword.

```java
import java.util.Scanner; // Import a single class
import java.util.*;       // Import the whole package
```

---

## 4. Java Summary

Congratulations! You have completed the Java course. You have learned:
- Java syntax, data types, and variables.
- Control flow, loops, and arrays.
- Methods and scope.
- Object-Oriented Programming (Classes, Objects, Inheritance, Polymorphism, Interfaces).
- Handling errors with Exceptions.

### What's Next?
- Explore **Java Collections Framework** (ArrayList, HashMap, etc.).
- Learn about **Java Streams and Lambdas** (Java 8+).
- Start building **Android Apps** or backend services with **Spring Boot**.
