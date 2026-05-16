# Chapter 6: C# Methods (Functions)

A method is a block of code which only runs when it is called. You can pass data, known as parameters, into a method.

## 1. Creating and Calling a Method

A method is defined with the name of the method, followed by parentheses `()`.

```csharp
class Program
{
  static void MyMethod() 
  {
    Console.WriteLine("I just got executed!");
  }

  static void Main(string[] args)
  {
    MyMethod();
  }
}
```

- `static`: means that the method belongs to the Program class and not an object of the Program class.
- `void`: means that this method does not have a return value.

---

## 2. Parameters and Arguments

Information can be passed to methods as parameter. Parameters act as variables inside the method.

```csharp
static void MyMethod(string fname) 
{
  Console.WriteLine(fname + " Doe");
}

static void Main(string[] args)
{
  MyMethod("Liam");
  MyMethod("Jenny");
}
```

### Default Parameter Value
You can use a default parameter value, by using the equals sign (`=`).

```csharp
static void MyMethod(string country = "Norway") 
{
  Console.WriteLine(country);
}
```

---

## 3. Return Values

If you want the method to return a value, you can use a primitive data type instead of `void`, and use the `return` keyword inside the method.

```csharp
static int MyMethod(int x) 
{
  return 5 + x;
}

static void Main(string[] args)
{
  Console.WriteLine(MyMethod(3)); // Outputs 8
}
```

---

## 4. Named Arguments

You can also send arguments with the `key: value` syntax. That way, the order of the arguments does not matter.

```csharp
static void MyMethod(string child1, string child2, string child3) 
{
  Console.WriteLine("The youngest child is: " + child3);
}

static void Main(string[] args)
{
  MyMethod(child3: "John", child1: "Liam", child2: "Liam");
}
```

---

## 5. Method Overloading

Multiple methods can have the same name with different parameters.

```csharp
static int PlusMethod(int x, int y) 
{
  return x + y;
}

static double PlusMethod(double x, double y) 
{
  return x + y;
}
```
