# Chapter 4: PHP Control Flow & Loops

Conditional statements are used to perform different actions based on different conditions.

## 1. Conditional Statements

### If Statement
```php
if ($t < "20") {
  echo "Have a good day!";
}
```

### If...Else and If...Elseif...Else
```php
if ($t < "10") {
  echo "Have a good morning!";
} elseif ($t < "20") {
  echo "Have a good day!";
} else {
  echo "Have a good night!";
}
```

### Switch Statement
```php
switch ($favcolor) {
  case "red":
    echo "Your favorite color is red!";
    break;
  case "blue":
    echo "Your favorite color is blue!";
    break;
  default:
    echo "Your favorite color is neither red, nor blue!";
}
```

---

## 2. PHP Loops

### While Loop
Loops through a block of code as long as the specified condition is true.
```php
$x = 1;
while($x <= 5) {
  echo "The number is: $x <br>";
  $x++;
}
```

### Do...While Loop
Will always execute the block of code once, then check the condition.
```php
do {
  echo "The number is: $x <br>";
  $x++;
} while ($x <= 5);
```

### For Loop
```php
for ($x = 0; $x <= 10; $x++) {
  echo "The number is: $x <br>";
}
```

### Foreach Loop
Used to loop through each element in an array.
```php
$colors = array("red", "green", "blue", "yellow");
foreach ($colors as $value) {
  echo "$value <br>";
}
```

---

## 3. Break and Continue

- `break`: Jumps out of a loop.
- `continue`: Skips one iteration in the loop.
