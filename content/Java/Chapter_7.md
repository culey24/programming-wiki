# Chapter 7: Java OOP: Classes & Objects

Java is an object-oriented programming language. Everything in Java is associated with classes and objects, along with its attributes and methods.

## 1. Classes and Objects

A class is a "blueprint" for creating objects. An object is an instance of a class.

```java
public class Main {
  int x = 5;

  public static void main(String[] args) {
    Main myObj = new Main(); // Create object
    System.out.println(myObj.x); // Access attribute
  }
}
```

---

## 2. Class Attributes

Another term for class attributes is **fields**.

```java
public class Main {
  int x;
  int y = 3;

  public static void main(String[] args) {
    Main myObj = new Main();
    myObj.x = 40;
    System.out.println(myObj.x);
    System.out.println(myObj.y);
  }
}
```

---

## 3. Class Methods

Methods are used to perform certain actions that belong to a class.

```java
public class Main {
  // Static method
  static void myStaticMethod() {
    System.out.println("Static methods can be called without creating objects");
  }

  // Public method
  public void myPublicMethod() {
    System.out.println("Public methods must be called by creating objects");
  }

  public static void main(String[] args) {
    myStaticMethod(); // Call static

    Main myObj = new Main(); // Create object
    myObj.myPublicMethod(); // Call public
  }
}
```

---

## 4. Constructors

A constructor in Java is a special method that is used to initialize objects. The constructor is called when an object of a class is created. It can be used to set initial values for object attributes.

```java
public class Main {
  int x;

  // Constructor
  public Main() {
    x = 5;
  }

  public static void main(String[] args) {
    Main myObj = new Main();
    System.out.println(myObj.x); // 5
  }
}
```

---

## 5. Access Modifiers

- **For Classes**:
  - `public`: Accessible by any other class.
  - `default`: Accessible only in the same package.
- **For Attributes, Methods, and Constructors**:
  - `public`: Accessible for all classes.
  - `private`: Accessible only within the declared class.
  - `protected`: Accessible in the same package and subclasses.
  - `default`: Accessible only in the same package.
