# Chapter 1: Java Introduction & Syntax

Java is a popular, high-level, class-based, object-oriented programming language. It is designed to have as few implementation dependencies as possible, following the "Write Once, Run Anywhere" (WORA) principle.

## 1. What is Java?

- Java was developed by James Gosling at Sun Microsystems in 1995.
- It is used for mobile applications (especially Android), desktop applications, web applications, web servers, and much more.
- Java is **platform-independent** because its code is compiled into **bytecode**, which runs on the **Java Virtual Machine (JVM)**.

---

## 2. Hello World in Java

```java
public class Main {
  public static void main(String[] args) {
    System.out.println("Hello World");
  }
}
```

### Explanation:
- `public class Main`: Every line of code that runs in Java must be inside a class. In our example, we named the class `Main`. A class should always start with an uppercase first letter.
- `public static void main(String[] args)`: The `main()` method is required and you will see it in every Java program. Any code inside the `main()` method will be executed.
- `System.out.println()`: Used to print text to the screen.

---

## 3. Java Syntax Rules

### The Semicolon
Each code statement must end with a semicolon `;`.

### Case Sensitivity
Java is case-sensitive. `MyClass` and `myclass` have different meanings.

### File Names
The name of the class should match the filename. For example, if your class is `Main`, the file must be named `Main.java`.

---

## 4. Compilation and Execution

1. Write your code in a file named `Main.java`.
2. Compile the code using the Java compiler (`javac`):
   ```bash
   javac Main.java
   ```
   This creates a `Main.class` file containing bytecode.
3. Run the compiled code using the Java launcher (`java`):
   ```bash
   java Main
   ```

---

## 5. Comments

- Single-line: `//`
- Multi-line: `/* ... */`
