# Chapter 7: C# OOP: Classes & Objects

C# is an object-oriented programming language. Everything in C# is associated with classes and objects, along with its attributes and methods.

## 1. Classes and Objects

A class is like an object constructor, or a "blueprint" for creating objects.

```csharp
class Car 
{
  string color = "red";

  static void Main(string[] args)
  {
    Car myObj = new Car();
    Console.WriteLine(myObj.color);
  }
}
```

---

## 2. Class Members

Fields and methods inside classes are often referred to as "Class Members".

```csharp
class Car
{
  // Field
  string model;

  // Method
  public void fullThrottle()
  {
    Console.WriteLine("The car is going as fast as it can!");
  }
}
```

---

## 3. Constructors

A constructor is a special method that is used to initialize objects. The advantage of a constructor, is that it is called when an object of a class is created. It can be used to set initial values for fields.

```csharp
class Car
{
  public string model;

  // Constructor
  public Car(string modelName)
  {
    model = modelName;
  }

  static void Main(string[] args)
  {
    Car Ford = new Car("Mustang");
    Console.WriteLine(Ford.model);
  }
}
```

---

## 4. Access Modifiers

- `public`: The code is accessible for all classes.
- `private`: The code is only accessible within the same class.
- `protected`: The code is accessible within the same class, or in a class that is inherited from that class.
- `internal`: The code is only accessible within its own assembly.

---

## 5. Properties (Get and Set)

Properties are used to protect your data. A property is like a combination of a variable and a method, and it has two methods: a `get` and a `set` method.

```csharp
class Person
{
  private string name; // field

  public string Name   // property
  {
    get { return name; }
    set { name = value; }
  }
}
```

C# also provides a way to use **Automatic Properties**, where you do not have to define the field for the property, you only have to write `get; set;` inside the property.

```csharp
class Person
{
  public string Name { get; set; }
}
```
