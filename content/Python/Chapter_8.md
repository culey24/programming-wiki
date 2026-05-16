# Chapter 8: Functions

## 1. Defining a Function

Here’s a simple function named `greet_user()` that prints a greeting:

```python
def greet_user():
    """Display a simple greeting."""
    print("Hello!")

greet_user()
```

### Analysis:

- **The `def` Keyword:** This keyword tells Python that you’re defining a function.
- **Function Definition:** The line `def greet_user():` provides the function name and any information it needs to perform its task.
- **Docstring:** The comment inside triple quotes is a *docstring*, which describes what the function does.
- **Function Body:** The indented lines following `def greet_user():` make up the body of the function.
- **Function Call:** To run the code inside a function, you must call it: `greet_user()`.

## 2. Passing Information to a Function

You can pass data to a function so it can perform more specific tasks.

```python
def greet_user(username):
    """Display a simple greeting."""
    print(f"Hello, {username.title()}!")

greet_user('jesse')
```

### Arguments and Parameters

- **Parameter:** The variable `username` in the function definition is a *parameter*—a piece of information the function needs to do its job.
- **Argument:** The value `'jesse'` is an *argument*—a piece of information that is passed from a function call to a function.

## 3. Passing Arguments

Because a function definition can have multiple parameters, a function call may need multiple arguments. You can pass arguments to your functions in several ways: **positional arguments**, **keyword arguments**, and **default values**.

### Positional Arguments

Python must match each argument in the function call with a parameter in the function definition. The simplest way to do this is based on the order of the arguments provided.

### Keyword Arguments

A *keyword argument* is a name-value pair that you pass to a function. You directly associate the name and the value within the argument, so there’s no confusion.

```python
def describe_pet(animal_type, pet_name):
    """Display information about a pet."""
    print(f"\nI have a {animal_type}.")
    print(f"My {animal_type}'s name is {pet_name.title()}.")

describe_pet(animal_type='hamster', pet_name='harry')
```

### Default Values

When writing a function, you can define a *default value* for each parameter. If an argument for a parameter is provided in the function call, Python uses the argument value. If not, it uses the parameter’s default value.

## 4. Return Values

A function doesn’t always have to display its output directly. Instead, it can process some data and then return a value or set of values. The value the function returns is called a **return value**.

```python
def get_formatted_name(first_name, last_name):
    """Return a full name, neatly formatted."""
    full_name = f"{first_name} {last_name}"
    return full_name.title()

musician = get_formatted_name('jimi', 'hendrix')
print(musician)
```
