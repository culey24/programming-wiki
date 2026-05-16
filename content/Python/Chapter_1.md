# Chapter 1: Variables and Strings

## 1. What is a Variable?

- In Python, every **variable** is connected to a **value**.
- For example:
```python
message = "Hello Python world!"
print(message)
```

- The Python interpreter does two things:
	1. Associates the variable named `message` with the string "Hello Python world!".
	2. When it encounters the `print` command, it prints the value currently associated with that variable to the screen.
    
- **Mutability:** You can change the value of a variable at any time. Python will always remember its latest value.
```python
message = "Hello Python world!" 
print(message) 
message = "Hello Python Crash Course world!" 
print(message)
```
Output:
```
Hello Python world! 
Hello Python Crash Course world!
```

## 2. Naming Rules

- **Allowed Characters:** Variable names can only contain letters, numbers, and underscores (`_`).
- **Starting Character:** Can start with a letter or an underscore, but **not with a number** (e.g., `message_1` is valid, but `1_message` is not).
- **Whitespace:** Cannot contain spaces. Use underscores to separate words (e.g., `greeting_message`).
- **Keywords:** Avoid using Python's built-in keywords (like `print`, `if`, `while`...) as variable names.
- **Descriptive Names:** Variable names should be short but meaningful (e.g., `name` is better than `n`, `student_name` is better than `s_n`).
- **Confusing Characters:** Be careful when using the letter `l` (lowercase L) and the letter `O` (uppercase O) because they are easily confused with the numbers `1` and `0`.

> **Note:** For now, you should use **lowercase** for variable names. Using **uppercase** has a special meaning that we will learn later.

## 3. Avoiding Name Errors

- Making mistakes is a normal part of programming. One of the most common errors is **misspelling a variable name**.
- When an error occurs, Python provides a **traceback**:
	- It tells you which line the error occurred on.
	- A common error type is `NameError: name '...' is not defined`.

## 4. Variables Are Labels

- A common view is that a variable is like a "box" that stores a value. However, in Python, a more accurate understanding is: **Variables are labels**.
	- Instead of thinking the value is inside a box, think of the value as an object and the variable as a label attached to that object.
	- We can say: "The variable `message` **references** that value."

---

# STRINGS
## 1. Concept of a String

In Python, a **string** is simply a series of characters. Anything inside quotes is considered a string.

- **Declaration:** You can use single quotes (`'`) or double quotes (`"`) to create a string.
- **Flexibility:** This makes it easy to nest quotes or apostrophes within strings.

```python
"This is a string."
'This is also a string.'
'I told my friend, "Python is my favorite language!"'
"The language 'Python' is named after Monty Python, not the snake."
```

## 2. Changing Case in a String

Python provides **methods** to change the case of a string. 

> A **_method_** is an action that Python can perform on a piece of data.

- **`.title()`**: Capitalizes the first letter of each word.
- **`.upper()`**: Converts the entire string to uppercase.
- **`.lower()`**: Converts the entire string to lowercase. (Useful for storing data consistently).

```python
name = "ada lovelace"
print(name.title()) # Output: Ada Lovelace

name = "Ada Lovelace"
print(name.upper()) # Output: ADA LOVELACE
print(name.lower()) # Output: ada lovelace
```

> **Note:** The dot (`.`) after the variable name tells Python to apply that method to that variable. The parentheses `()` following the method name are where you can provide additional information (if any).

## 3. Using Variables in Strings (f-strings)

To insert a variable's value into a string, Python uses **f-strings** (f stands for *format*).

- **Syntax:** Place the letter `f` immediately before the opening quotation mark and place the variable name inside curly braces `{}`.

```python
first_name = "ada"
last_name = "lovelace"
full_name = f"{first_name} {last_name}"

print(full_name) # Output: ada lovelace
print(f"Hello, {full_name.title()}!") # Output: Hello, Ada Lovelace!
```

## 4. Adding Whitespace with Tabs or Newlines

Whitespace in programming includes non-printing characters like spaces, tabs, and newlines.

- **`\t`**: Adds a tab.
- **`\n`**: Adds a newline.
- **Combining `\n\t`**: Adds a newline and then indents with a tab.
```python
print("Languages:\n\tPython\n\tC\n\tJavaScript")
# Output:
# Languages:
#     Python
#     C
#     JavaScript
```

## 5. Stripping Whitespace

Python can detect and remove extra whitespace from the ends of strings. This is important when comparing data (e.g., usernames).

- **`.rstrip()`**: Removes whitespace from the right side.
- **`.lstrip()`**: Removes whitespace from the left side.
- **`.strip()`**: Removes whitespace from both ends.

### Temporariness

- Using these methods only removes whitespace temporarily. The original variable remains unchanged.

```python
favorite_language = 'python '
print(favorite_language.rstrip()) # Output: 'python'
print(favorite_language) # Output: 'python '
```

#### How to fix it 

To permanently change the value, you must **assign the processed value back** to the variable.

```python
favorite_language = 'python '
favorite_language = favorite_language.rstrip() 
```

## 6. Removing Prefixes

When working with common URL prefixes like "https://" or structured data, you may want to remove them to focus on the main part.

- Use the `.removeprefix()` method.

```python
nostarch_url = 'https://nostarch.com'
simple_url = nostarch_url.removeprefix('https://')
print(simple_url) # Output: nostarch.com
```

> **Note**: `.removeprefix()` is also temporary unless reassigned.

## 7. Avoiding Syntax Errors with Strings

A common error is using a single quote inside a string that is already enclosed in single quotes.

```python
# ERROR: Python thinks the string ends at 'n' in "Python's"
message = 'One of Python's strengths is its diverse community.' 
```

**Fix:** Use double quotes to enclose the string if it contains a single quote.

```python
# CORRECT:
message = "One of Python's strengths is its diverse community."
```

---

# NUMBERS

## 1. Integers

Python allows basic arithmetic:
- Addition (`+`).
- Subtraction (`-`).
- Multiplication (`*`).
- Division (`/`).
- Modulo (`%`).

```python
>>> 2 + 3
5
>>> 3 / 2
1.5
```
    
- **Exponents:** Use two asterisks (`**`).

```python
>>> 3 ** 2
9
```
    
- **Order of Operations:** Python follows standard mathematical precedence. Use parentheses to change it.

## 2. Floats

Python calls any number with a decimal point a **float**.

- **Note on Precision:** Sometimes you may get results with many decimal places due to how computers represent floating-point numbers in memory.

```python
>>> 0.2 + 0.1
0.30000000000000004
```

## 3. Combining Integers and Floats

When you combine an integer and a float, Python defaults to a **float**.

- **Division:** The result of dividing any two numbers is always a float, even if both are integers and the result is a whole number.

```python
>>> 4 / 2
2.0
```

## 4. Underscores in Numbers

When writing large numbers, you can use underscores (`_`) to group digits for readability.

```python
>>> universe_age = 14_000_000_000
>>> print(universe_age)
14000000000
```

## 5. Multiple Assignment

You can assign values to multiple variables on a single line.

```python
>>> x, y, z = 0, 0, 0
```

## 6. Constants

A **constant** is a variable whose value does not change throughout the life of a program.

- **Convention:** Use **ALL CAPS** to indicate a variable should be treated as a constant.

```python
MAX_CONNECTIONS = 5000
```

---

# COMMENTS

### 1. How to Write Comments

In Python, the hash mark (**#**) is used to indicate a comment.

```python
# Say hello to everyone.
print("Hello Python people!")
```

### 2. Purpose and Importance

The main reason to write comments is to explain what your code is designed to do and how it works. This helps you (and others) understand the code later.

---

# THE ZEN OF PYTHON

Triết lý của cộng đồng Python được gói gọn trong tập hợp các nguyên tắc gọi là **"The Zen of Python"**.

### 1. How to Access

Type `import this` in your Python interpreter.

### 2. Core Principles for Beginners

- **Beautiful is better than ugly.**
- **Simple is better than complex.**
- **Readability counts.**
- **Now is better than never.**
