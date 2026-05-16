# Chapter 4: Conditional Tests

## 1. Introduction to Conditional Tests

At the heart of every `if` statement is an expression that can be evaluated as **True** or **False**. This expression is called a **Conditional Test**.

## 2. Checking for Equality

To check whether the value of a variable is equal to a specific value, use the equality operator **(`==`)**.

> **Important:** Don’t confuse a single equals sign (`=`) with a double equals sign (`==`).
> 
> - `=` is an assignment: "Set the value of car to 'audi'".
> - `==` is a question: "Is the value of car equal to 'bmw'?".

```python
car = 'bmw'
print(car == 'bmw')  # Output: True

car = 'audi'
print(car == 'bmw')  # Output: False
```

### Case Sensitivity

In Python, equality testing is case-sensitive.

```python
car = 'Audi'
print(car == 'audi') # Output: False
```

To check for equality regardless of case, use the `.lower()` method:

```python
car = 'Audi'
print(car.lower() == 'audi') # Output: True
```

## 3. Checking for Inequality

To check whether two values are not equal, use the inequality operator **(`!=`)**.

```python
requested_topping = 'mushrooms'

if requested_topping != 'anchovies':
    print("Hold the anchovies!")
```

## 4. Numerical Comparisons

Checking numerical values is straightforward. You can use the following mathematical operators:

- `==` (Equal)
- `!=` (Not equal)
- `<` (Less than)
- `<=` (Less than or equal to)
- `>` (Greater than)
- `>=` (Greater than or equal to)

```python
age = 18
print(age == 18) # True

answer = 17
if answer != 42:
    print("That is not the correct answer. Please try again!")
```

## 5. Checking Multiple Conditions

You can check multiple conditions simultaneously using the `and` and `or` keywords.

### Using `and`

For the overall expression to be `True`, **all** individual conditions must be true.

```python
age_0 = 22
age_1 = 18
print(age_0 >= 21 and age_1 >= 21) # Output: False (because age_1 < 21)
```

### Using `or`

The expression returns `True` if **at least one** of the individual conditions is true.

```python
age_0 = 22
age_1 = 18
print(age_0 >= 21 or age_1 >= 21) # Output: True (because age_0 satisfies it)
```

## 6. Checking Whether a Value Is in a List

### Using `in`

Use the `in` keyword to see if a specific value is already in a list.

```python
requested_toppings = ['mushrooms', 'onions', 'pineapple']
print('mushrooms' in requested_toppings) # True
```

### Using `not in`

Use `not in` to check if a value does not appear in a list.

```python
banned_users = ['andrew', 'carolina', 'david']
user = 'marie'

if user not in banned_users:
    print(f"{user.title()}, you can post a response if you wish.")
```

---

# IF STATEMENTS

## 1. Simple `if` Statements

```python
if conditional_test:
    do something
```

Indentation is crucial. Every line indented after the `if` statement will be executed if the condition is `True`.

## 2. `if-else` Statements

Use this when you want to take one action if a condition passes and another action if it fails.

```python
age = 17
if age >= 18:
    print("You are old enough to vote!")
else:
    print("Sorry, you are too young to vote.")
```

## 3. The `if-elif-else` Chain

Use this when you have more than two situations to handle. Python runs each condition in order until it finds one that is true.

```python
age = 12

if age < 4:
    price = 0
elif age < 18:
    price = 25
else:
    price = 40

print(f"Your admission cost is ${price}.")
```

## 4. Omitting the `else` Block

The `else` block is a catch-all. For safety and clarity, you can replace `else` with a specific `elif` block.

```python
if age < 4:
    price = 0
elif age < 18:
    price = 25
elif age < 65:
    price = 40
elif age >= 65: # Specific condition instead of else
    price = 20
```

## 5. Testing Multiple Conditions

The `if-elif-else` chain is only appropriate when you **only need one** condition to pass. If you want to check and act on **all** conditions that are met, use independent `if` statements.

---

# USING IF STATEMENTS WITH LISTS

## 1. Checking for Special Items

You can use a `for` loop to check for special items within a list and handle them accordingly.

```python
requested_toppings = ['mushrooms', 'green peppers', 'extra cheese']

for requested_topping in requested_toppings:
    if requested_topping == 'green peppers':
        print("Sorry, we are out of green peppers right now.")
    else:
        print(f"Adding {requested_topping}.")
```

## 2. Checking That a List Is Not Empty

In Python, an empty list returns `False` when placed in a conditional test.

```python
requested_toppings = []

if requested_toppings:
    # Perform actions if list is not empty
    pass
else:
    print("Are you sure you want a plain pizza?")
```

## 3. Using Multiple Lists

You can check values from one list against another.

```python
available_toppings = ['mushrooms', 'olives', 'green peppers', 'pepperoni']
requested_toppings = ['mushrooms', 'french fries']

for requested_topping in requested_toppings:
    if requested_topping in available_toppings:
        print(f"Adding {requested_topping}.")
    else:
        print(f"Sorry, we don't have {requested_topping}.")
```
