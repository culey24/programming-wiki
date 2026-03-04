# 🦀 Chapter 3: Functions

Functions are the building blocks of any Rust program.

You've already seen one: the `main` function, which is the entry point
of every executable.\
In this chapter, we'll learn how to write our own.

------------------------------------------------------------------------

# 3.1 Defining a Function

In Rust, we define functions using the `fn` keyword.

-   Function names use `snake_case`.
-   Functions can be defined before or after `main`.
-   Order does NOT matter in Rust source files.

## Example

``` rust
fn main() {
    println!("Starting the program...");
    say_hello();
}

fn say_hello() {
    println!("Hello from a function!");
}
```

------------------------------------------------------------------------

# 3.2 Parameters (Passing Data In)

To pass information into a function, we use parameters.

In Rust: - Every parameter MUST have a type. - This improves readability
and compile-time safety.

## Example

``` rust
fn main() {
    print_sum(5, 10);
}

fn print_sum(x: i32, y: i32) {
    println!("The sum is: {}", x + y);
}
```

Here: - `x` and `y` are parameters. - Both are explicitly typed as
`i32`.

------------------------------------------------------------------------

# 3.3 Statements vs. Expressions

This is one of the MOST important concepts in Rust.

## 🧾 Statements

-   Perform an action
-   Do NOT return a value
-   End with a semicolon `;`

## 🔢 Expressions

-   Evaluate to a value
-   Do NOT end with a semicolon

## Example

``` rust
fn main() {
    let y = {
        let x = 3;
        x + 1
    };

    println!("The value of y is: {}", y);
}
```

Explanation:

-   `let x = 3;` → statement\
-   `x + 1` → expression\
-   Since there is no semicolon, `x + 1` becomes the return value of the
    block.\
-   Therefore, `y = 4`.

------------------------------------------------------------------------

# 3.4 Return Values

Functions can return values.

We declare return types using `->`.

## Example

``` rust
fn main() {
    let x = five();
    let y = add_one(x);

    println!("The value of y is: {}", y);
}

fn five() -> i32 {
    5
}

fn add_one(x: i32) -> i32 {
    x + 1
}
```

### Important Rules

-   The final expression (without `;`) becomes the return value.
-   You can return early using `return value;`
-   Most Rust developers prefer the implicit (final expression) style.

------------------------------------------------------------------------

## ⚠️ Common Beginner Mistake

If you accidentally add a semicolon:

``` rust
fn add_one(x: i32) -> i32 {
    x + 1; // ❌ Wrong!
}
```

This turns the expression into a statement.

The function will return `()` (empty tuple) instead of `i32`, causing a
compiler error.

------------------------------------------------------------------------

# 3.5 Quick Reference

  Feature           Syntax             Purpose
  ----------------- ------------------ -------------------------
  Declaration       `fn name() {}`     Define a block of code
  Parameters        `(name: type)`     Input data
  Return Type       `-> type`          Specify output type
  Implicit Return   `value` (no `;`)   Return final expression
  Explicit Return   `return value;`    Return early

------------------------------------------------------------------------

# 🛠 Practice: "The Unit Converter"

Write a function called `celsius_to_fahrenheit` that:

-   Takes an `f64` as a parameter
-   Returns an `f64`
-   Uses the formula:

F = (C × 1.8) + 32

## Starter Code

``` rust
fn main() {
    let celsius = 25.0;
    let fahrenheit = celsius_to_fahrenheit(celsius);
    println!("{}°C is {}°F", celsius, fahrenheit);
}

// YOUR CODE HERE
```

------------------------------------------------------------------------

## ✅ One Possible Solution

``` rust
fn celsius_to_fahrenheit(c: f64) -> f64 {
    (c * 1.8) + 32.0
}
```

------------------------------------------------------------------------

# 🎯 Key Takeaways

-   Use `fn` to define functions.
-   Parameters must always include types.
-   Rust distinguishes between statements and expressions.
-   The final expression (without `;`) becomes the return value.
-   Avoid unnecessary semicolons when returning values.

------------------------------------------------------------------------

🚀 End of Chapter 3
