# Chapter 5: Java Arrays

Arrays are used to store multiple values in a single variable, instead of declaring separate variables for each value.

## 1. Creating an Array

To declare an array, define the variable type with **square brackets**.

```java
String[] cars;
```

To insert values to it, you can use an array literal - place the values in a comma-separated list, inside curly braces:

```java
String[] cars = {"Volvo", "BMW", "Ford", "Mazda"};
int[] myNum = {10, 20, 30, 40};
```

---

## 2. Accessing and Changing Elements

### Accessing Elements
You access an array element by referring to the index number. Array indexes start with 0.

```java
String[] cars = {"Volvo", "BMW", "Ford", "Mazda"};
System.out.println(cars[0]); // Outputs Volvo
```

### Changing Elements
```java
cars[0] = "Opel"; // Now cars[0] is Opel
```

---

## 3. Array Length

To find out how many elements an array has, use the `length` property.

```java
System.out.println(cars.length); // Outputs 4
```

---

## 4. Loop Through an Array

### For Loop
```java
for (int i = 0; i < cars.length; i++) {
  System.out.println(cars[i]);
}
```

### For-Each Loop
```java
for (String i : cars) {
  System.out.println(i);
}
```

---

## 5. Multidimensional Arrays

A multidimensional array is an array of arrays. To create a two-dimensional array, add each array within its own set of curly braces:

```java
int[][] myNumbers = { {1, 2, 3, 4}, {5, 6, 7} };
```

### Accessing Elements
To access the elements of the `myNumbers` array, specify two indexes: one for the array, and one for the element inside that array.

```java
System.out.println(myNumbers[1][2]); // Outputs 7
```

---

## 6. Sorting an Array

The `Arrays` class in the `java.util` package has a `sort()` method that sorts an array alphabetically or in ascending order.

```java
import java.util.Arrays;
Arrays.sort(cars);
```
