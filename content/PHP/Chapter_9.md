# Chapter 9: PHP MySQL Database & Summary

PHP combined with MySQL is a powerful tool for creating dynamic and interactive web pages.

## 1. Connecting to a MySQL Database

PHP 5 and later can work with a MySQL database using:
- **MySQLi extension** (the "i" stands for improved)
- **PDO** (PHP Data Objects)

### MySQLi (Object-Oriented)
```php
$servername = "localhost";
$username = "username";
$password = "password";

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";
```

---

## 2. Executing SQL Queries

You can use the `query()` method to execute SQL statements.

```php
$sql = "SELECT id, firstname, lastname FROM MyGuests";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
    echo "id: " . $row["id"]. " - Name: " . $row["firstname"]. " " . $row["lastname"]. "<br>";
  }
} else {
  echo "0 results";
}
$conn->close();
```

---

## 3. Prepared Statements

Prepared statements are very useful against SQL injections.

```php
$stmt = $conn->prepare("INSERT INTO MyGuests (firstname, lastname, email) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $firstname, $lastname, $email);

// set parameters and execute
$firstname = "John";
$lastname = "Doe";
$email = "john@example.com";
$stmt->execute();
```

---

## 4. Sessions and Cookies

- **Cookies**: Used to identify a user. A cookie is a small file that the server embeds on the user's computer.
- **Sessions**: A session is a way to store information (in variables) to be used across multiple pages. Unlike a cookie, the information is not stored on the users computer.

```php
session_start();
$_SESSION["favcolor"] = "green";
```

---

## 5. PHP Summary

Congratulations! You have completed the PHP course. You have learned:
- PHP syntax, variables, and data types.
- Control flow, loops, and arrays.
- Functions and Object-Oriented Programming.
- Form handling and security best practices.
- How to interact with a MySQL database.

### What's Next?
- Learn a PHP Framework like **Laravel** or **Symfony**.
- Explore **REST APIs** with PHP.
- Deep dive into **Composer** for dependency management.
- Study **WordPress Development**.
