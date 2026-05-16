# Chapter 8: PHP Form Handling & Security

The PHP superglobals `$_GET` and `$_POST` are used to collect form-data.

## 1. PHP Form Handling

When a user fills out the form and clicks the submit button, the form data is sent to a PHP file.

```html
<form action="welcome.php" method="post">
Name: <input type="text" name="name"><br>
E-mail: <input type="text" name="email"><br>
<input type="submit">
</form>
```

In `welcome.php`, you can access the data like this:

```php
Welcome <?php echo $_POST["name"]; ?><br>
Your email address is: <?php echo $_POST["email"]; ?>
```

---

## 2. GET vs. POST

- **GET**: Information is visible to everyone (all variable names and values are displayed in the URL). It has limits on the amount of information to send.
- **POST**: Information is invisible to others (all names/values are embedded within the body of the HTTP request). It has no limits on the amount of information to send.

---

## 3. Form Validation and Security

**Security Risk**: The `$_SERVER["PHP_SELF"]` variable can be used by hackers to run Cross-site Scripting (XSS) attacks.

To prevent this, use the `htmlspecialchars()` function. It converts special characters to HTML entities.

```php
<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
```

---

## 4. Validating Form Data

You should always validate user input.

```php
$name = test_input($_POST["name"]);
$email = test_input($_POST["email"]);

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
```

---

## 5. Required Fields and Error Messages

You can check if a field is empty using the `empty()` function and display error messages accordingly.

```php
if (empty($_POST["name"])) {
  $nameErr = "Name is required";
} else {
  $name = test_input($_POST["name"]);
}
```
