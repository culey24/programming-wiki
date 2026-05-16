# Chapter 8: Java OOP: Inheritance & Interfaces

Inheritance and Interfaces are key concepts in Java that allow for code reusability and complex architectures.

## 1. Inheritance

In Java, it is possible to inherit attributes and methods from one class to another.
- **subclass** (child): the class that inherits from another class.
- **superclass** (parent): the class being inherited from.

To inherit from a class, use the `extends` keyword.

```java
class Vehicle {
  protected String brand = "Ford";
  public void honk() {
    System.out.println("Tuut, tuut!");
  }
}

class Car extends Vehicle {
  private String modelName = "Mustang";
  public static void main(String[] args) {
    Car myCar = new Car();
    myCar.honk();
    System.out.println(myCar.brand + " " + myCar.modelName);
  }
}
```

---

## 2. Polymorphism

Polymorphism uses inherited methods to perform different tasks. This allows us to perform a single action in different ways.

```java
class Animal {
  public void animalSound() {
    System.out.println("The animal makes a sound");
  }
}

class Pig extends Animal {
  public void animalSound() {
    System.out.println("The pig says: wee wee");
  }
}
```

---

## 3. Abstract Classes and Methods

Data abstraction is the process of hiding certain details and showing only essential information to the user.
- **Abstract class**: is a restricted class that cannot be used to create objects (to access it, it must be inherited from another class).
- **Abstract method**: can only be used in an abstract class, and it does not have a body. The body is provided by the subclass (inherited from).

```java
abstract class Animal {
  public abstract void animalSound();
  public void sleep() {
    System.out.println("Zzz");
  }
}
```

---

## 4. Interfaces

An `interface` is a completely "abstract class" that is used to group related methods with empty bodies. To access the interface methods, the interface must be "implemented" (kinda like inherited) by another class with the `implements` keyword.

```java
interface Animal {
  public void animalSound(); // interface method (does not have a body)
  public void run(); // interface method (does not have a body)
}

class Pig implements Animal {
  public void animalSound() {
    System.out.println("The pig says: wee wee");
  }
  public void run() {
    System.out.println("The pig runs");
  }
}
```

---

## 5. Multiple Interfaces

Java does not support "multiple inheritance" (a class can only inherit from one superclass). However, it can be achieved with interfaces, because the class can **implement multiple interfaces**.

```java
class DemoClass implements FirstInterface, SecondInterface {
  // ...
}
```
