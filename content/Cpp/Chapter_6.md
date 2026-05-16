# Chapter 6: C++ Functions & Overloading

Functions in C++ are similar to C, but with powerful additions like default parameters and overloading.

## 1. Creating and Calling Functions

```cpp
void myFunction() {
  cout << "I just got executed!";
}

int main() {
  myFunction();
  return 0;
}
```

---

## 2. Parameters and Arguments

Information can be passed to functions as parameters.

```cpp
void myFunction(string fname, int age) {
  cout << fname << " is " << age << " years old. \n";
}
```

### Default Parameters
You can use a default parameter value, by using the equals sign (`=`). If we call the function without an argument, it uses the default value.

```cpp
void myFunction(string country = "Norway") {
  cout << country << "\n";
}
```

---

## 3. Pass By Reference

You can also pass a reference to the function. This can be useful when you need to change the value of the arguments.

```cpp
void swapNums(int &x, int &y) {
  int z = x;
  x = y;
  y = z;
}

int main() {
  int firstNum = 10;
  int secondNum = 20;
  swapNums(firstNum, secondNum);
  // firstNum is now 20, secondNum is 10
}
```

---

## 4. Function Overloading

With function overloading, multiple functions can have the same name with different parameters.

```cpp
int plusFunc(int x, int y) {
  return x + y;
}

double plusFunc(double x, double y) {
  return x + y;
}

int main() {
  int myNum1 = plusFunc(8, 5);
  double myNum2 = plusFunc(4.3, 6.26);
}
```

---

## 5. Recursion

Recursion is the technique of making a function call itself. This technique provides a way to break complicated problems down into simple problems which are easier to solve.

```cpp
int sum(int k) {
  if (k > 0) {
    return k + sum(k - 1);
  } else {
    return 0;
  }
}
```
