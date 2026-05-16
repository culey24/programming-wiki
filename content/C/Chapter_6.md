# Chapter 6: C Arrays & Strings

Arrays are used to store multiple values in a single variable, instead of declaring separate variables for each value.

## 1. Arrays

To create an array, define the data type and specify the name of the array followed by square brackets `[]`.

```c
int myNumbers[] = {25, 50, 75, 100};
```

### Accessing Elements
You access an array element by referring to its index number. Indices start at 0.

```c
printf("%d", myNumbers[0]); // Outputs 25
```

### Changing Elements
```c
myNumbers[0] = 33;
```

### Loop Through an Array
```c
int i;
for (i = 0; i < 4; i++) {
  printf("%d\n", myNumbers[i]);
}
```

---

## 2. Multidimensional Arrays

A multidimensional array is basically an array of arrays.

```c
int matrix[2][3] = { {1, 4, 2}, {3, 6, 8} };
printf("%d", matrix[0][2]); // Outputs 2
```

---

## 3. C Strings

Strings are used for storing text/characters. Unlike many other programming languages, C does not have a String type to easily create string variables. Instead, you must use the `char` type and create an **array of characters**.

```c
char greetings[] = "Hello World!";
```

### Accessing String Characters
```c
printf("%c", greetings[0]); // Outputs H
```

### Modifying Strings
```c
greetings[0] = 'J'; // Becomes "Jello World!"
```

---

## 4. String Functions

C has a set of useful string functions in the `<string.h>` library:

- `strlen()`: Returns the length of a string.
- `strcat()`: Concatenates (joins) two strings.
- `strcpy()`: Copies one string to another.
- `strcmp()`: Compares two strings.

```c
#include <string.h>
char alphabet[] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
printf("%d", strlen(alphabet)); // 26
```

---

## 5. User Input for Strings

To get a string from the user, you can use `scanf()` or `fgets()`. `fgets()` is safer as it prevents buffer overflows.

```c
char fullName[30];
printf("Type your full name: ");
fgets(fullName, sizeof(fullName), stdin);
```
