# Chapter 7: C++ OOP: Classes & Objects

C++ is an object-oriented programming language. Everything in C++ is associated with classes and objects, along with its attributes and methods.

## 1. Classes and Objects

A class is a user-defined data type that we can use in our program, and it works as an object constructor, or a "blueprint" for creating objects.

```cpp
class MyClass {       // The class
  public:             // Access specifier
    int myNum;        // Attribute (int variable)
    string myString;  // Attribute (string variable)
};

int main() {
  MyClass myObj;     // Create an object of MyClass

  // Access attributes and set values
  myObj.myNum = 15; 
  myObj.myString = "Some text";

  // Print attribute values
  cout << myObj.myNum << "\n";
  cout << myObj.myString;
  return 0;
}
```

---

## 2. Class Methods

Methods are functions that belong to the class. There are two ways to define functions that belong to a class:
- **Inside** class definition.
- **Outside** class definition (using the `::` scope resolution operator).

```cpp
class MyClass {
  public:
    void myMethod() { // Method defined inside the class
      cout << "Hello World!";
    }
};
```

---

## 3. Constructors

A constructor in C++ is a special method that is automatically called when an object of a class is created. It has the same name as the class.

```cpp
class Car {
  public:
    string brand;
    string model;
    int year;
    Car(string x, string y, int z) { // Constructor with parameters
      brand = x;
      model = y;
      year = z;
    }
};

int main() {
  Car carObj1("BMW", "X5", 1999);
  return 0;
}
```

---

## 4. Access Specifiers

In C++, there are three access specifiers:
- `public`: members are accessible from outside the class.
- `private`: members cannot be accessed (or viewed) from outside the class (Default).
- `protected`: members cannot be accessed from outside the class, however, they can be accessed in inherited classes.

---

## 5. Encapsulation

The meaning of Encapsulation is to make sure that "sensitive" data is hidden from users. To achieve this, you must declare class variables/attributes as `private`. If you want others to read or modify the value of a private member, you can provide public **get** and **set** methods.
