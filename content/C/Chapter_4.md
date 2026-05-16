# Chapter 4: C Control Flow

Control flow statements determine the order in which code is executed.

## 1. Conditional Statements

### If Statement
```c
if (condition) {
  // block of code to be executed if the condition is true
}
```

### Else and Else If
```c
int time = 22;
if (time < 10) {
  printf("Good morning.");
} else if (time < 20) {
  printf("Good day.");
} else {
  printf("Good evening.");
}
```

### Switch Statement
The `switch` statement selects one of many code blocks to be executed.

```c
int day = 4;
switch (day) {
  case 1: printf("Monday"); break;
  case 2: printf("Tuesday"); break;
  default: printf("Looking forward to the Weekend");
}
```

---

## 2. Loops

### While Loop
Loops through a block of code as long as a specified condition is true.

```c
int i = 0;
while (i < 5) {
  printf("%d\n", i);
  i++;
}
```

### Do/While Loop
A variant of the while loop which executes the block once before checking the condition.

```c
int i = 0;
do {
  printf("%d\n", i);
  i++;
} while (i < 5);
```

### For Loop
```c
for (int i = 0; i < 5; i++) {
  printf("%d\n", i);
}
```

---

## 3. Break and Continue

- `break`: Used to jump out of a loop or switch.
- `continue`: Breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop.

```c
for (int i = 0; i < 10; i++) {
  if (i == 4) { break; }
  printf("%d\n", i);
}
```
