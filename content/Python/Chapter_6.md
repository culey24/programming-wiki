# Chapter 6: User Input and while Loops

## 1. How the `input()` Function Works

The `input()` function pauses your program and waits for the user to enter some text. Once Python receives the input, it assigns it to a variable so you can work with it.

The function takes one argument: the **prompt**—the instructions we display to the user so they know what to do.

```python
message = input("Tell me something, and I will repeat it back to you: ")
print(message)
```

## 2. Using `int()` to Accept Numerical Input

When you use the `input()` function, Python interprets everything the user enters as a **string**. If you want to use the input as a number, you must convert it using the `int()` function.

```python
age = input("How old are you? ")
age = int(age) # Converts the string '21' to the integer 21

if age >= 18:
    print("You are eligible to vote!")
```

---

# THE while LOOP

The `for` loop takes a collection of items and executes a block of code once for each item. In contrast, the **`while` loop** runs as long as, or *while*, a certain condition is true.

## 1. Basic Usage

```python
current_number = 1
while current_number <= 5:
    print(current_number)
    current_number += 1
```

## 2. Using `break` to Exit a Loop

To exit a `while` loop immediately without running any remaining code in the loop, regardless of the results of any conditional test, use the **`break`** statement.

```python
while True:
    city = input("Enter a city you have visited (or 'quit' to exit): ")
    if city == 'quit':
        break
    else:
        print(f"I'd love to visit {city.title()}!")
```

## 3. Using `continue` in a Loop

Rather than breaking out of a loop entirely without executing the rest of its code, you can use the **`continue`** statement to return to the beginning of the loop based on the result of a conditional test.

```python
current_number = 0
while current_number < 10:
    current_number += 1
    if current_number % 2 == 0:
        continue # Skip the rest of the loop for even numbers
        
    print(current_number)
```

---

# USING A while LOOP WITH LISTS AND DICTIONARIES

A `for` loop is effective for looping through a list, but you shouldn’t modify a list inside a `for` loop because Python will have trouble keeping track of the items. To modify a list as you work through it, use a **`while` loop**.

## 1. Moving Items from One List to Another

```python
unconfirmed_users = ['alice', 'brian', 'candace']
confirmed_users = []

while unconfirmed_users:
    current_user = unconfirmed_users.pop()
    print(f"Verifying user: {current_user.title()}")
    confirmed_users.append(current_user)
```

## 2. Removing All Instances of a Specific Value from a List

The `remove()` method only deletes the first occurrence of a value. To remove all instances, use a `while` loop.

```python
pets = ['dog', 'cat', 'dog', 'goldfish', 'cat', 'rabbit', 'cat']

while 'cat' in pets:
    pets.remove('cat')
```

## 3. Filling a Dictionary with User Input

You can use a `while` loop to collect data from users and store it in a dictionary.

```python
responses = {}
polling_active = True

while polling_active:
    name = input("\nWhat is your name? ")
    response = input("Which mountain would you like to climb someday? ")
    
    responses[name] = response
    
    repeat = input("Would you like to let another person respond? (yes/no) ")
    if repeat == 'no':
        polling_active = False
```
