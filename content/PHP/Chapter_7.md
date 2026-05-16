# Chapter 7: PHP OOP: Classes & Objects

PHP is an object-oriented language. OOP is faster and easier to execute and provides a clear structure for the programs.

## 1. Classes and Objects

A class is a template for objects, and an object is an instance of a class.

```php
class Fruit {
  // Properties
  public $name;
  public $color;

  // Methods
  function set_name($name) {
    $this->name = $name;
  }
  function get_name() {
    return $this->name;
  }
}

$apple = new Fruit();
$apple->set_name('Apple');
echo $apple->get_name();
```

---

## 2. The `$this` Keyword

The `$this` keyword refers to the current object, and is only available inside methods.

---

## 3. Constructor and Destructor

- **`__construct()`**: allows you to initialize an object's properties upon creation of the object.
- **`__destruct()`**: is called when the object is destructed or the script is stopped or exited.

```php
class Fruit {
  public $name;
  function __construct($name) {
    $this->name = $name; 
  }
  function __destruct() {
    echo "The fruit is {$this->name}."; 
  }
}

$apple = new Fruit("Apple");
```

---

## 4. Access Modifiers

- `public`: the property or method can be accessed from everywhere. This is default.
- `protected`: the property or method can be accessed within the class and by classes derived from that class.
- `private`: the property or method can ONLY be accessed within the class.

---

## 5. Inheritance

Inheritance in OOP = When a class derives from another class. The child class will inherit all the public and protected properties and methods from the parent class. Use the `extends` keyword.

```php
class Strawberry extends Fruit {
  public function message() {
    echo "Am I a fruit or a berry? "; 
  }
}
```

---

## 6. Static Methods and Properties

Static methods and properties can be called directly - without creating an instance of the class first. Use the `static` keyword and the scope resolution operator (`::`).

```php
class greeting {
  public static function welcome() {
    echo "Hello World!";
  }
}

greeting::welcome();
```
