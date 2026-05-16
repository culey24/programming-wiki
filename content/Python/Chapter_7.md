# Chapter 7: Classes

Object-oriented programming is one of the most effective approaches to writing software. In object-oriented programming, you write **classes** that represent real-world things and situations, and you create **objects** based on these classes.

## 1. Creating and Using a Class

Let's create a simple `Dog` class that represents a dog—not one specific dog, but any dog.

```python
class Dog:
    """A simple attempt to model a dog."""

    def __init__(self, name, age):
        """Initialize name and age attributes."""
        self.name = name
        self.age = age

    def sit(self):
        """Simulate a dog sitting in response to a command."""
        print(f"{self.name} is now sitting.")

    def roll_over(self):
        """Simulate rolling over in response to a command."""
        print(f"{self.name} rolled over!")
```

### The `__init__()` Method

The `__init__()` method is a special method that Python runs automatically whenever we create a new instance based on the `Dog` class. 

- **The `self` Parameter:** The `self` parameter is required in the method definition, and it must come before any other parameters. It is a reference to the instance itself; it gives the individual instance access to the attributes and methods in the class.

## 2. Making an Instance from a Class

Think of a class as a set of instructions for how to make an instance. The class `Dog` is a set of instructions that tells Python how to make individual instances representing specific dogs.

```python
my_dog = Dog('Willie', 6)

print(f"My dog's name is {my_dog.name}.")
print(f"My dog is {my_dog.age} years old.")

my_dog.sit()
my_dog.roll_over()
```

## 3. Working with Classes and Instances

You can use classes to represent many real-world objects. Once you write a class, you’ll spend most of your time working with instances created from that class.

### Setting a Default Value for an Attribute

Every attribute in a class needs an initial value, even if that value is 0 or an empty string. In some cases, it makes sense to specify a default value in the `__init__()` method.

```python
class Car:
    def __init__(self, make, model, year):
        self.make = make
        self.model = model
        self.year = year
        self.odometer_reading = 0 # Default value
```

### Modifying Attribute Values

You can change an attribute’s value in three ways: 
1. Changing the value directly through an instance.
2. Setting the value through a method.
3. Incrementing the value through a method.

---

# INHERITANCE

If the class you’re writing is a specialized version of another class you wrote, you can use **inheritance**. When one class inherits from another, it takes on the attributes and methods of the first class.

## 1. The `__init__()` Method for a Child Class

When you’re writing a child class, you’ll often want to call the `__init__()` method from the parent class.

```python
class ElectricCar(Car):
    """Represent aspects of a car, specific to electric vehicles."""
    def __init__(self, make, model, year):
        """Initialize attributes of the parent class."""
        super().__init__(make, model, year)
```

The `super()` function is a special function that allows you to call a method from the parent class.

## 2. Defining Attributes and Methods for the Child Class

Once you have a child class that inherits from a parent class, you can add any new attributes and methods necessary to differentiate the child class from the parent class.

## 3. Overriding Methods from the Parent Class

You can override any method from the parent class that doesn't fit the behavior you're trying to model with the child class. To do this, define a method in the child class with the same name as the method you want to override in the parent class.

---

# IMPORTING CLASSES

Python lets you store classes in **modules** and then **import** them into your main program.

## 1. Importing a Single Class

```python
from car import Car
```

## 2. Storing Multiple Classes in a Module

You can store as many classes as you need in a single module, although each class in a module should be related to the others.

```python
from car import Car, ElectricCar
```

## 3. Importing an Entire Module

You can also import an entire module and then access the classes you need using dot notation.

```python
import car
my_beetle = car.Car('volkswagen', 'beetle', 1966)
```
---

# THE PYTHON STANDARD LIBRARY

The **Python standard library** is a set of modules that comes with every Python installation. You can use any function or class in the standard library by including a simple `import` statement at the top of your file.
