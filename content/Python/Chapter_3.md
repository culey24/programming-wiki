# Chapter 3: Working with Lists

Using loops is one of the most common ways to automate repetitive tasks. Instead of processing each item manually, we use a `for` loop to perform the same action on every element in a list.

## 1. How a `for` Loop Works

Suppose we have a list of magicians' names and want to print each name. Instead of writing a `print` statement for each person, we use the following structure:

```python
magicians = ['alice', 'david', 'carolina']
for magician in magicians:
    print(magician)
```

**Explanation:**

1. Python pulls the first value from the list `magicians` (which is `'alice'`) and assigns it to the variable `magician`.
2. Python executes the command `print(magician)`, which prints "alice".
3. Python returns to the first line of the loop, pulls the next value (`'david'`), assigns it to `magician`, and executes the `print` command.
4. This process repeats until no values are left in the list.

## 2. Importance of Variable Naming

Naming the temporary variable in a loop is important for readability. You should use singular names for the temporary variable and plural names for the list:

- `for cat in cats:`
- `for dog in dogs:`
- `for item in list_of_items:`

This convention makes it easy to identify whether a line of code is processing a single element or the entire list.

## 3. Doing More Work Within a `for` Loop

You can write as many lines of code as you want inside a `for` loop. **Every line that is indented** after the `for` statement is considered part of the loop and will be executed once for each item.

```python
magicians = ['alice', 'david', 'carolina']
for magician in magicians:
    print(f"{magician.title()}, that was a great trick!")
    print(f"I can't wait to see your next trick, {magician.title()}.\n")
```

**Output:**
```
Alice, that was a great trick!
I can't wait to see your next trick, Alice.

David, that was a great trick!
I can't wait to see your next trick, David.

Carolina, that was a great trick!
I can't wait to see your next trick, Carolina.
```

---

# AVOIDING INDENTATION ERRORS

In Python, **indentation** is a mandatory part of the syntax. Python uses whitespace to determine how lines of code are related to each other in a structure (like a `for` loop).

## 1. Forgetting to Indent

Always indent the line of code immediately following a `for` statement. If you forget, Python will report an error.

```python
magicians = ['alice', 'david', 'carolina']
for magician in magicians:
print(magician) # Error: This line should be indented
```

**Error Message:**
> `IndentationError: expected an indented block after 'for' statement on line 2`

## 2. Indenting Unnecessarily

If you indent a line of code that doesn't belong to a block (like a loop or function), Python will also report an error.

```python
message = "Hello Python world!"
    print(message) # Error: Unnecessary indentation
```

**Error Message:**
> `IndentationError: unexpected indent`

## 3. Forgetting to Indent Additional Lines

This is a **logical error**. The code runs, but the result is not what you intended. This happens when you want multiple lines to be inside the loop but only indent the first one.

```python
magicians = ['alice', 'david', 'carolina']
for magician in magicians:
    print(f"{magician.title()}, that was a great trick!")
print(f"I can't wait to see your next trick, {magician.title()}.\n") 
# This line is not indented, so it's outside the loop
```

## 4. Forgetting the Colon

The colon (`:`) at the end of a `for` statement tells Python that the next line begins an indented block.

---

# MAKING NUMERICAL LISTS

## 1. The `range()` Function

Python's `range()` function makes it easy to generate a series of numbers.

### Basic Usage

The `range()` function starts counting at the first value provided and stops when it reaches the second value (**but does not include it**).

```python
for value in range(1, 5):
    print(value)
```
Output: `1, 2, 3, 4`

### Using `range()` to Create a List of Numbers

You can convert the results of `range()` directly into a list using the `list()` function.

```python
numbers = list(range(1, 6))
print(numbers)
# Output: [1, 2, 3, 4, 5]
```

### Using a Step Size

You can also provide a third argument to `range()` to specify a step size.

```python
even_numbers = list(range(2, 11, 2))
print(even_numbers)
# Output: [2, 4, 6, 8, 10]
```

## 2. Basic Statistics with a List of Numbers

```python
digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
min(digits)  # 0
max(digits)  # 9
sum(digits)  # 45
```

## 3. List Comprehensions

A **list comprehension** allows you to generate a list in just one line of code.

```python
squares = [value**2 for value in range(1, 11)]
print(squares)
```

---

# WORKING WITH PART OF A LIST (SLICING)

In Python, you can work with a specific group of items in a list, called a **slice**.

## 1. Slicing a List

To create a slice, specify the index of the first and last elements you want to work with.

```python
players = ['charles', 'martina', 'michael', 'florence', 'eli']
print(players[0:3]) # Output: ['charles', 'martina', 'michael']
```

- **Omitting the first index:** Starts from the beginning.
- **Omitting the last index:** Goes to the end.
- **Negative indexes:** Starts from the end.

## 2. Copying a List

To copy a list, you can create a slice that includes the entire original list by omitting both indexes `[:]`.

```python
my_foods = ['pizza', 'falafel', 'carrot cake']
friend_foods = my_foods[:]
```

---

# TUPLES

## 1. What is a Tuple?

Sometimes you want to create a list of items that **cannot change**. Python refers to values that cannot change as *immutable*. An immutable list is called a **tuple**.

## 2. Defining a Tuple

A tuple looks just like a list except you use **parentheses `()`** instead of square brackets `[]`.

```python
dimensions = (200, 50)
print(dimensions[0]) # 200
```

> **Note:** If you want to define a tuple with one element, you **must** include a trailing comma: `my_t = (3,)`.

## 3. Immutability

You cannot change the value of an element in a tuple. If you try, Python will raise a `TypeError`.

## 4. Writing Over a Tuple

Although you can't modify a tuple, you can assign a new value to the variable that represents the tuple.

```python
dimensions = (200, 50)
dimensions = (400, 100) # This is valid
```
