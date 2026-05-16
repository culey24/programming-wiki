# Chapter 8: C# OOP: Inheritance & Interfaces

Inheritance and Interfaces allow for flexible and reusable code structures in C#.

## 1. Inheritance

In C#, it is possible to inherit fields and methods from one class to another.
- **Derived Class** (child): the class that inherits from another class.
- **Base Class** (parent): the class being inherited from.

To inherit from a class, use the `:` symbol.

```csharp
class Vehicle  // base class (parent) 
{
  public string brand = "Ford";
  public void honk() 
  {
    Console.WriteLine("Tuut, tuut!");
  }
}

class Car : Vehicle  // derived class (child)
{
  public string modelName = "Mustang";
}
```

If you don't want other classes to inherit from a class, use the `sealed` keyword.

---

## 2. Polymorphism

Polymorphism uses inherited methods to perform different tasks. To achieve this, use the `virtual` keyword for the base class method and `override` for the derived class method.

```csharp
class Animal 
{
  public virtual void animalSound() 
  {
    Console.WriteLine("The animal makes a sound");
  }
}

class Pig : Animal 
{
  public override void animalSound() 
  {
    Console.WriteLine("The pig says: wee wee");
  }
}
```

---

## 3. Abstract Classes and Methods

- **Abstract class**: is a restricted class that cannot be used to create objects (to access it, it must be inherited from another class).
- **Abstract method**: can only be used in an abstract class, and it does not have a body. The body is provided by the derived class.

---

## 4. Interfaces

An `interface` is a completely "abstract class", which can only contain abstract methods and properties (with empty bodies).

```csharp
interface IAnimal 
{
  void animalSound(); // interface method (does not have a body)
}

class Pig : IAnimal 
{
  public void animalSound() 
  {
    Console.WriteLine("The pig says: wee wee");
  }
}
```

### Why use Interfaces?
- To achieve security - hide certain details and only show the important details of an object.
- **Multiple inheritance**: C# does not support multiple inheritance (a class can only inherit from one base class). However, it can be achieved with interfaces, because the class can implement multiple interfaces.

---

## 5. Enums

An `enum` is a special "class" that represents a group of constants (unchangeable/read-only variables).

```csharp
enum Level 
{
  Low,
  Medium,
  High
}

Level myVar = Level.Medium;
```
