# Chapter 5: PHP Arrays

An array stores multiple values in one single variable.

## 1. What is an Array?

In PHP, there are three types of arrays:
- **Indexed arrays**: Arrays with a numeric index.
- **Associative arrays**: Arrays with named keys.
- **Multidimensional arrays**: Arrays containing one or more arrays.

---

## 2. Indexed Arrays

```php
$cars = array("Volvo", "BMW", "Toyota");
echo "I like " . $cars[0] . ", " . $cars[1] . " and " . $cars[2] . ".";
```

### Loop Through an Indexed Array
```php
$arrlength = count($cars);
for($x = 0; $x < $arrlength; $x++) {
  echo $cars[$x];
}
```

---

## 3. Associative Arrays

Associative arrays are arrays that use named keys that you assign to them.

```php
$age = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43");
echo "Peter is " . $age['Peter'] . " years old.";
```

### Loop Through an Associative Array
```php
foreach($age as $x => $x_value) {
  echo "Key=" . $x . ", Value=" . $x_value;
}
```

---

## 4. Sorting Arrays

PHP has several functions that sort arrays:
- `sort()`: Sort arrays in ascending order.
- `rsort()`: Sort arrays in descending order.
- `asort()`: Sort associative arrays in ascending order, according to the value.
- `ksort()`: Sort associative arrays in ascending order, according to the key.
- `arsort()`: Sort associative arrays in descending order, according to the value.
- `krsort()`: Sort associative arrays in descending order, according to the key.

---

## 5. Superglobals

Some predefined variables in PHP are "superglobals", which means that they are always accessible, regardless of scope - and you can access them from any function, class or file without having to do anything special.

- `$GLOBALS`
- `$_SERVER`
- `$_REQUEST`
- `$_POST`
- `$_GET`
- `$_FILES`
- `$_ENV`
- `$_COOKIE`
- `$_SESSION`
