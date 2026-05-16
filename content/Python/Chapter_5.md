# Chapter 5: Dictionaries

A **Dictionary** in Python is a collection of **key-value pairs**. Each key is connected to a value, and you can use that key to access the corresponding value.

- **Structure:** Surrounded by curly braces `{}`.
- **Key-Value Pair:** A set of values related to each other, separated by a colon `:`. Pairs are separated by commas `,`.
- **Values:** Can be numbers, strings, lists, or even other dictionaries.

## 1. Accessing Values in a Dictionary

To get the value associated with a key, give the name of the dictionary and place the key inside a set of square brackets `[]`.

```python
alien_0 = {'color': 'green', 'points': 5}
new_points = alien_0['points']
print(f"You just earned {new_points} points!")
# Output: You just earned 5 points!
```

## 2. Adding New Key-Value Pairs

Dictionaries are dynamic. You can add new pairs at any time by specifying the dictionary name, the new key in brackets, and assigning a value.

```python
alien_0 = {'color': 'green', 'points': 5}
alien_0['x_position'] = 0
alien_0['y_position'] = 25
```

## 3. Modifying Values in a Dictionary

To change a value, use the dictionary name with the existing key and assign a new value.

```python
alien_0 = {'color': 'green'}
alien_0['color'] = 'yellow'
```

## 4. Removing Key-Value Pairs

Use the `del` statement to permanently remove a key-value pair.

```python
alien_0 = {'color': 'green', 'points': 5}
del alien_0['points']
```

## 5. Using `get()` to Access Values

Using square brackets `[]` to access a non-existent key will cause a `KeyError`. To avoid this, use the `get()` method.

- **Syntax:** `get(key, default_value)`

```python
alien_0 = {'color': 'green', 'speed': 'slow'}
point_value = alien_0.get('points', 'No point value assigned.')
```

---

# LOOPING THROUGH A DICTIONARY

## 1. Looping Through All Key-Value Pairs (`.items()`)

When you want both the key and its corresponding value, use the `.items()` method.

```python
user_0 = {'username': 'efermi', 'first': 'enrico', 'last': 'fermi'}

for key, value in user_0.items():
    print(f"\nKey: {key}")
    print(f"Value: {value}")
```

## 2. Looping Through All Keys (`.keys()`)

If you only care about the keys, use the `.keys()` method.

```python
for name in favorite_languages.keys():
    print(name.title())
```

## 3. Looping Through All Values (`.values()`)

If you only want the values, use the `.values()` method.

```python
for language in favorite_languages.values():
    print(language.title())
```

### Using a Set for Unique Values

To get a list of unique values without duplicates, wrap `.values()` in a `set()`.

```python
for language in set(favorite_languages.values()):
    print(language.title())
```

---

# NESTING

## 1. A List of Dictionaries

You can store dictionaries inside a list.

```python
alien_0 = {'color': 'green', 'points': 5}
alien_1 = {'color': 'yellow', 'points': 10}
aliens = [alien_0, alien_1]
```

## 2. A List in a Dictionary

You can store a list as a value for a key in a dictionary.

```python
pizza = {
    'crust': 'thick',
    'toppings': ['mushrooms', 'extra cheese'],
}
```

## 3. A Dictionary in a Dictionary

You can nest a dictionary inside another dictionary.

```python
users = {
    'aeinstein': {
        'first': 'albert',
        'last': 'einstein',
        'location': 'princeton',
    },
}
```

> **Note:** Keep your nested structures consistent (same keys) to make processing them with loops easier.
