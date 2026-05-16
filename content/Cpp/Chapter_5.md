# Chapter 5: C++ Control Flow & Loops

Control flow statements allow you to run code based on conditions and repeat blocks of code.

## 1. Conditions

C++ supports the same conditional statements as C:
- `if`: Executes a block of code if a specified condition is true.
- `else`: Executes a block of code if the same condition is false.
- `else if`: Specifies a new condition to test if the first condition is false.
- `switch`: Specifies many alternative blocks of code to be executed.

### Short Hand If...Else (Ternary Operator)
```cpp
string result = (time < 18) ? "Good day." : "Good evening.";
```

---

## 2. Switch Statement

The `switch` statement selects one of many code blocks to be executed.

```cpp
int day = 4;
switch (day) {
  case 6: cout << "Today is Saturday"; break;
  case 7: cout << "Today is Sunday"; break;
  default: cout << "Looking forward to the Weekend";
}
```

---

## 3. While and Do/While Loop

- `while`: Loops through a block of code as long as a specified condition is true.
- `do/while`: A variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.

```cpp
int i = 0;
while (i < 5) {
  cout << i << "\n";
  i++;
}
```

---

## 4. For Loop

When you know exactly how many times you want to loop through a block of code, use the `for` loop instead of a `while` loop.

```cpp
for (int i = 0; i < 5; i++) {
  cout << i << "\n";
}
```

### For-Each Loop
There is also a "for-each loop" (introduced in C++11), which is used exclusively to loop through elements in an array (or other data sets).

```cpp
int myNumbers[5] = {10, 20, 30, 40, 50};
for (int i : myNumbers) {
  cout << i << "\n";
}
```

---

## 5. Break and Continue

- `break`: Jumps out of a loop.
- `continue`: Skips one iteration in the loop.
