# Chapter 8: C++ OOP: Inheritance & Polymorphism

Inheritance and Polymorphism are two major pillars of Object-Oriented Programming that promote code reusability and flexibility.

## 1. Inheritance

In C++, it is possible to inherit attributes and methods from one class to another.
- **Base Class** (parent): the class being inherited from.
- **Derived Class** (child): the class that inherits from another class.

To inherit from a class, use the `:` symbol.

```cpp
// Base class
class Vehicle {
  public:
    string brand = "Ford";
    void honk() {
      cout << "Tuut, tuut! \n";
    }
};

// Derived class
class Car: public Vehicle {
  public:
    string model = "Mustang";
};

int main() {
  Car myCar;
  myCar.honk();
  cout << myCar.brand + " " + myCar.model;
  return 0;
}
```

---

## 2. Multilevel and Multiple Inheritance

- **Multilevel**: A class can also be derived from one class, which is already derived from another class.
- **Multiple**: A class can also be derived from more than one base class, using a comma-separated list.

```cpp
class MyChild: public MyBaseClass, public MyOtherBaseClass {};
```

---

## 3. Polymorphism

Polymorphism means "many forms", and it occurs when we have many classes that are related to each other by inheritance. Polymorphism uses inherited methods to perform different tasks. This allows us to perform a single action in different ways.

```cpp
class Animal {
  public:
    void animalSound() {
      cout << "The animal makes a sound \n";
    }
};

class Pig : public Animal {
  public:
    void animalSound() {
      cout << "The pig says: wee wee \n";
    }
};
```

---

## 4. Virtual Functions

To achieve true polymorphism in C++, we use the `virtual` keyword. A virtual function is a member function which is declared within a base class and is re-defined (overridden) by a derived class.

```cpp
class Animal {
  public:
    virtual void animalSound() { // Virtual function
      cout << "The animal makes a sound \n";
    }
};
```

---

## 5. Friend Classes and Functions

A friend class or function can access the private and protected members of other classes in which it is declared as a friend.

```cpp
class MyClass {
  private:
    int secret;
  friend class MyFriend; // MyFriend can now access 'secret'
};
```
