# Chapter 4: C++ Math & Booleans

C++ has many functions that allow you to perform mathematical tasks on numbers.

## 1. Max and Min

The `max(x, y)` function can be used to find the highest value of `x` and `y`.
The `min(x, y)` function can be used to find the lowest value of `x` and `y`.

```cpp
cout << max(5, 10); // 10
cout << min(5, 10); // 5
```

---

## 2. C++ Math Header

Other functions, such as `sqrt` (square root), `round` (rounds a number) and `log` (natural logarithm), can be found in the `<cmath>` header file.

```cpp
#include <cmath>

cout << sqrt(64);  // 8
cout << round(2.6); // 3
cout << pow(2, 3); // 8 (2 raised to the power of 3)
```

---

## 3. C++ Booleans

A boolean data type is declared with the `bool` keyword and can only take the values `true` or `false`.

### Boolean Expressions
A Boolean expression returns a boolean value: `1` (true) or `0` (false). This is useful to build logic, and find answers.

```cpp
int x = 10;
int y = 9;
cout << (x > y); // Returns 1 (true)
```

---

## 4. Real Life Example

Let's use booleans to check if a person is old enough to vote.

```cpp
int myAge = 25;
int votingAge = 18;

if (myAge >= votingAge) {
  cout << "Old enough to vote!";
} else {
  cout << "Not old enough to vote.";
}
```

---

## 5. Comparison and Logical Operators

Recall from Chapter 3:
- Comparison operators (`==`, `!=`, `<`, `>`, etc.) return booleans.
- Logical operators (`&&`, `||`, `!`) work with boolean values to create complex conditions.
