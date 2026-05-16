# Chapter 6: PHP Functions

PHP has more than 1000 built-in functions, and in addition you can create your own custom functions.

## 1. Creating and Calling a Function

A user-defined function declaration starts with the word `function`.

```php
function writeMsg() {
  echo "Hello world!";
}

writeMsg(); // call the function
```

---

## 2. Function Arguments

Information can be passed to functions through arguments. An argument is just like a variable.

```php
function familyName($fname) {
  echo "$fname Refsnes.<br>";
}

familyName("Jani");
familyName("Hege");
```

### Default Argument Value
You can specify a default value for a parameter.

```php
function setHeight($minheight = 50) {
  echo "The height is : $minheight <br>";
}
```

---

## 3. Returning Values

To let a function return a value, use the `return` statement.

```php
function sum($x, $y) {
  $z = $x + $y;
  return $z;
}

echo "5 + 10 = " . sum(5, 10);
```

---

## 4. Strict Typing

In PHP 7, type declarations were added. This gives us an option to specify the expected data type when declaring a function.

```php
declare(strict_types=1); // must be at the very top of the file

function addNumbers(int $a, int $b) {
  return $a + $b;
}

echo addNumbers(5, "5 days"); // throws an error because strict is enabled
```

---

## 5. Anonymous Functions (Closures)

An anonymous function is a function without a specified name.

```php
$greet = function($name) {
    printf("Hello %s\r\n", $name);
};

$greet('World');
```

They can also "use" variables from the parent scope.

```php
$message = 'hello';
$example = function () use ($message) {
    var_dump($message);
};
$example();
```
