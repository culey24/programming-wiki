# Chapter 6: JavaScript Objects & OOP

Objects are variables that can contain many values. These values are written as **name:value** pairs.

## 1. Creating Objects

```javascript
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};
```

---

## 2. Accessing Object Properties

You can access properties in two ways:
- **Dot notation**: `objectName.propertyName`
- **Bracket notation**: `objectName["propertyName"]`

```javascript
console.log(person.firstName);    // John
console.log(person["lastName"]); // Doe
```

---

## 3. Object Methods

Objects can also have **methods**. A method is a function stored as a property.

```javascript
const user = {
  name: "Alice",
  greet: function() {
    return "Hello, I am " + this.name;
  }
};

console.log(user.greet()); // Hello, I am Alice
```

The `this` keyword refers to the object itself.

---

## 4. JavaScript Classes (ES6)

Classes are templates for creating objects. They encapsulate data with code to work on that data.

```javascript
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  
  age() {
    let date = new Date();
    return date.getFullYear() - this.year;
  }
}

const myCar = new Car("Ford", 2014);
console.log(myCar.age());
```

---

## 5. Inheritance

To create a class inheritance, use the `extends` keyword. A class created with inheritance inherits all the methods from another class.

```javascript
class Model extends Car {
  constructor(name, year, mod) {
    super(name, year); // Call the parent constructor
    this.model = mod;
  }
  
  show() {
    return this.name + ", it is a " + this.model;
  }
}

const myModel = new Model("Ford", 2014, "Mustang");
console.log(myModel.show());
```

The `super()` method refers to the parent class. By calling it in the constructor, we call the parent's constructor method and get access to the parent's properties and methods.
