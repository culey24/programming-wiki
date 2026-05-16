# Chapter 3: PHP Operators & Strings

Operators are used to perform operations on variables and values. PHP also has a rich set of built-in string functions.

## 1. PHP Operators

- **Arithmetic**: `+`, `-`, `*`, `/`, `%`, `**`
- **Assignment**: `=`, `+=`, `-=`, `*=`, `/=`, `%=`
- **Comparison**: `==`, `===` (identical), `!=`, `<>`, `!==` (not identical), `>`, `<`, `>=`, `<=`
- **Increment/Decrement**: `++$x`, `$x++`, `--$x`, `$x--`
- **Logical**: `and`, `or`, `xor`, `!`, `&&`, `||`
- **String**: `.` (concatenation), `.=` (concatenation assignment)

---

## 2. PHP Strings

A string is a sequence of characters, like "Hello world!".

### Common String Functions
- `strlen()`: Returns the length of a string.
- `str_word_count()`: Counts words in a string.
- `strrev()`: Reverses a string.
- `strpos()`: Searches for a specific text within a string.
- `str_replace()`: Replaces some characters with some other characters in a string.

```php
echo strlen("Hello world!"); // 12
echo strpos("Hello world!", "world"); // 6
echo str_replace("world", "Dolly", "Hello world!"); // Hello Dolly!
```

---

## 3. PHP Numbers

PHP provides automatic data type conversion.

- `is_int()`: Check if a variable is an integer.
- `is_float()`: Check if a variable is a float.
- `is_numeric()`: Check if a variable is a number or a numeric string.

```php
$x = 5985;
var_dump(is_int($x)); // bool(true)
```

---

## 4. PHP Math

The `Math` functions can perform mathematical tasks on numbers.

```php
echo(pi()); // 3.1415926535898
echo(min(0, 150, 30, 20, -8, -200));  // -200
echo(max(0, 150, 30, 20, -8, -200));  // 150
echo(abs(-6.7));  // 6.7
echo(sqrt(64));  // 8
echo(round(0.60));  // 1
echo(rand()); // Random number
```

---

## 5. Casting Strings and Floats to Integers

Sometimes you need to cast a numerical value into another data type.

```php
$x = 23465.768;
$int_cast = (int)$x;
echo $int_cast; // 23465

$x = "23465.768";
$int_cast = (int)$x;
echo $int_cast; // 23465
```
