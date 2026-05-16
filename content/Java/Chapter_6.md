# Chapter 6: Java Methods (Functions)

A method is a block of code which only runs when it is called. You can pass data, known as parameters, into a method. Methods are used to perform certain actions, and they are also known as functions.

## 1. Creating and Calling a Method

A method must be declared within a class. It is defined with the name of the method, followed by parentheses `()`.

```java
public class Main {
  static void myMethod() { // Definition
    System.out.println("I just got executed!");
  }

  public static void main(String[] args) {
    myMethod(); // Call
  }
}
```

- `static`: means that the method belongs to the `Main` class and not an object of the `Main` class.
- `void`: means that this method does not have a return value.

---

## 2. Parameters and Arguments

Information can be passed to methods as parameter. Parameters act as variables inside the method.

```java
static void myMethod(String fname) {
  System.out.println(fname + " Doe");
}

public static void main(String[] args) {
  myMethod("Liam");
  myMethod("Jenny");
}
```

---

## 3. Return Values

If you want the method to return a value, you can use a primitive data type (such as `int`, `char`, etc.) instead of `void`, and use the `return` keyword inside the method.

```java
static int myMethod(int x) {
  return 5 + x;
}

public static void main(String[] args) {
  System.out.println(myMethod(3)); // Outputs 8
}
```

---

## 4. Method Overloading

With method overloading, multiple methods can have the same name with different parameters.

```java
static int plusMethod(int x, int y) {
  return x + y;
}

static double plusMethod(double x, double y) {
  return x + y;
}

public static void main(String[] args) {
  int myNum1 = plusMethod(8, 5);
  double myNum2 = plusMethod(4.3, 6.26);
}
```

Instead of defining two methods that should do the same thing, it is better to overload one.

---

## 5. Scope

In Java, variables are only accessible inside the region they are created. This is called scope.

### Method Scope
Variables declared directly inside a method are available anywhere in the method following the line of code in which they were declared.

### Block Scope
Variables declared inside a block of code `{}` are only available inside the block.
