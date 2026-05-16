# Chapter 5: C# Arrays

Arrays are used to store multiple values in a single variable, instead of declaring separate variables for each value.

## 1. Creating an Array

To declare an array, define the variable type with **square brackets**.

```csharp
string[] cars;
```

To insert values to it, you can use an array literal:

```csharp
string[] cars = {"Volvo", "BMW", "Ford", "Mazda"};
int[] myNum = {10, 20, 30, 40};
```

---

## 2. Accessing and Changing Elements

### Accessing Elements
You access an array element by referring to the index number. Array indexes start with 0.

```csharp
string[] cars = {"Volvo", "BMW", "Ford", "Mazda"};
Console.WriteLine(cars[0]); // Outputs Volvo
```

### Changing Elements
```csharp
cars[0] = "Opel"; // Now cars[0] is Opel
```

---

## 3. Array Length

To find out how many elements an array has, use the `Length` property.

```csharp
Console.WriteLine(cars.Length); // Outputs 4
```

---

## 4. Loop Through an Array

### For Loop
```csharp
for (int i = 0; i < cars.Length; i++) 
{
  Console.WriteLine(cars[i]);
}
```

### Foreach Loop
```csharp
foreach (string i in cars) 
{
  Console.WriteLine(i);
}
```

---

## 5. Sorting an Array

The `System.Linq` namespace provides many methods for arrays. The `Array.Sort()` method sorts an array alphabetically or in ascending order.

```csharp
using System;
using System.Linq;

Array.Sort(cars);
```

---

## 6. Multidimensional Arrays

To create a 2D array, use a comma inside the square brackets.

```csharp
int[,] numbers = { {1, 4, 2}, {3, 6, 8} };
Console.WriteLine(numbers[0, 2]); // Outputs 2
```
