# Chapter 8: C Structures & Unions

Structures and Unions are used to group variables of different types under a single name.

## 1. C Structures (structs)

A structure is a user-defined data type that allows you to combine data items of different kinds.

### Creating a Struct
```c
struct MyStructure {
  int myNum;
  char myLetter;
  char myString[30];
};
```

### Using a Struct
To use the structure, you must create a variable of it.

```c
struct MyStructure s1;

// Assign values to members
s1.myNum = 13;
s1.myLetter = 'B';
strcpy(s1.myString, "Some text");

// Access values
printf("%d %c %s", s1.myNum, s1.myLetter, s1.myString);
```

---

## 2. Typedef

The `typedef` keyword allows you to create alias names for data types. This is commonly used with structures to make code cleaner.

```c
typedef struct {
  int x;
  int y;
} Point;

Point p1 = {10, 20};
```

---

## 3. C Unions

A Union is a special data type that allows to store different data types in the **same memory location**. You can define a union with many members, but only one member can contain a value at any given time.

### Creating a Union
```c
union MyUnion {
  int myInt;
  float myFloat;
  char myChar;
};
```

The size of the union will be equal to the size of its largest member.

---

## 4. Structs vs. Unions

| Feature | Struct | Union |
| :--- | :--- | :--- |
| **Memory** | Each member has its own memory location. | All members share the same memory location. |
| **Size** | Sum of the sizes of all members. | Size of the largest member. |
| **Access** | You can access all members at any time. | Only one member can be accessed at a time. |

---

## 5. Bit Fields

C allows us to specify the number of bits for a struct member. This is useful for memory-constrained systems.

```c
struct {
  unsigned int widthConfirmed : 1;
  unsigned int heightConfirmed : 1;
} status;
```
