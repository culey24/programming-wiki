# Chapter 2: PHP Variables & Data Types

Variables in PHP are used for storing information.

## 1. Creating (Declaring) PHP Variables

In PHP, a variable starts with the `$` sign, followed by the name of the variable.

```php
$txt = "Hello world!";
$x = 5;
$y = 10.5;
```

### Rules for PHP Variables:
- A variable name must start with a letter or the underscore character.
- A variable name cannot start with a number.
- Variable names are case-sensitive (`$age` and `$AGE` are two different variables).

---

## 2. Output Variables

The PHP `echo` statement is often used to output data to the screen.

```php
$txt = "Programming Wiki";
echo "I love $txt!";
```

You can also use the dot `.` operator to concatenate strings:

```php
echo "I love " . $txt . "!";
```

---

## 3. PHP Data Types

Variables can store data of different types. PHP supports the following data types:
- **String**: `$x = "Hello";`
- **Integer**: `$x = 5;`
- **Float** (floating point numbers - also called double): `$x = 10.5;`
- **Boolean**: `$x = true;`
- **Array**: `$cars = array("Volvo","BMW","Toyota");`
- **Object**: Defined by classes.
- **NULL**: A variable that has no value assigned to it.
- **Resource**: Storing a reference to functions and resources external to PHP.

---

## 4. Variable Scope

PHP has three different variable scopes:
- **local**: A variable declared within a function has a LOCAL SCOPE and can only be accessed within that function.
- **global**: A variable declared outside a function has a GLOBAL SCOPE and can only be accessed outside a function.
- **static**: When a function is completed/executed, all of its variables are normally deleted. However, sometimes we want a local variable NOT to be deleted. We need it for a further job. To do this, use the `static` keyword.

### The `global` Keyword
The `global` keyword is used to access a global variable from within a function.

```php
$x = 5;
function myTest() {
  global $x;
  echo $x;
}
```

---

## 5. Constants

Constants are like variables except that once they are defined they cannot be changed or undefined. To create a constant, use the `define()` function.

```php
define("GREETING", "Welcome to Programming Wiki!");
echo GREETING;
```
