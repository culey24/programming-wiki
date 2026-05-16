# Chapter 4: Java Control Flow & Loops

Java uses standard control flow structures to control the execution path of a program.

## 1. Boolean Expressions

A Boolean expression is a Java expression that returns a Boolean value: `true` or `false`.

```java
int x = 10;
int y = 9;
System.out.println(x > y); // returns true, because 10 is higher than 9
```

---

## 2. If...Else Statements

- `if`: to specify a block of code to be executed, if a specified condition is true.
- `else`: to specify a block of code to be executed, if the same condition is false.
- `else if`: to specify a new condition to test, if the first condition is false.
- `switch`: to specify many alternative blocks of code to be executed.

### Ternary Operator
```java
String result = (time < 18) ? "Good day." : "Good evening.";
```

---

## 3. Switch Statement

Use the `switch` statement to select one of many code blocks to be executed.

```java
int day = 4;
switch (day) {
  case 6: System.out.println("Today is Saturday"); break;
  case 7: System.out.println("Today is Sunday"); break;
  default: System.out.println("Looking forward to the Weekend");
}
```

---

## 4. While and Do/While Loops

- `while`: loops through a block of code as long as a specified condition is `true`.
- `do/while`: This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.

```java
int i = 0;
while (i < 5) {
  System.out.println(i);
  i++;
}
```

---

## 5. For Loops

### Standard For Loop
```java
for (int i = 0; i < 5; i++) {
  System.out.println(i);
}
```

### For-Each Loop
Used exclusively to loop through elements in an **array** (or other data sets).

```java
String[] cars = {"Volvo", "BMW", "Ford", "Mazda"};
for (String i : cars) {
  System.out.println(i);
}
```

---

## 6. Break and Continue

- `break`: can also be used to jump out of a loop.
- `continue`: breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop.
