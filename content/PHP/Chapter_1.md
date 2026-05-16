# Chapter 1: PHP Introduction & Syntax

PHP is a widely-used, open-source scripting language. It stands for **PHP: Hypertext Preprocessor**.

## 1. What is PHP?

- PHP is a **server-side** scripting language. This means the code is executed on the server, and the result is sent to the browser as plain HTML.
- It is powerful enough to be at the core of the biggest blogging system on the web (WordPress)!
- It is deep enough to run the largest social network (Facebook)!
- It is also easy enough to be a beginner's first server-side language!

---

## 2. Basic PHP Syntax

A PHP script starts with `<?php` and ends with `?>`.

```php
<?php
// PHP code goes here
echo "Hello, World!";
?>
```

### Explanation:
- `<?php ... ?>`: These tags tell the server to interpret the code inside as PHP.
- `echo`: A built-in function used to output text to the browser.
- `;`: Every PHP statement must end with a semicolon.

---

## 3. PHP in HTML

You can mix PHP and HTML. The PHP code is executed on the server, and the output is embedded into the HTML.

```html
<!DOCTYPE html>
<html>
<body>

<h1>My first PHP page</h1>

<?php
echo "Hello World!";
?>

</body>
</html>
```

---

## 4. Case Sensitivity

In PHP, keywords (e.g., `if`, `else`, `while`, `echo`), classes, and functions are **not** case-sensitive.

```php
ECHO "Hello World!<br>";
echo "Hello World!<br>";
EcHo "Hello World!<br>";
```

However; all **variable names** are case-sensitive!

```php
$color = "red";
echo "My car is " . $color;
echo "My house is " . $COLOR; // Error: $COLOR is undefined
```

---

## 5. Comments

- Single-line: `//` or `#`
- Multi-line: `/* ... */`
