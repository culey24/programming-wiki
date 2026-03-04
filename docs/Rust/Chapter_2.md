# 🦀 Chapter 2: Control Flow (Conditions)

In Chapter 1, we learned how to store data.\
In this chapter, we learn how to make decisions based on that data.

**Control flow** allows us to run specific parts of code only if certain
conditions are met.

------------------------------------------------------------------------

# 2.1 The `if` Expression

The most basic way to control flow is the `if` statement.

Unlike many other languages: - Rust does NOT require parentheses `()`
around conditions - Rust DOES require curly braces `{}` for code blocks

## Example

``` rust
fn main() {
    let temperature = 30;

    if temperature > 25 {
        println!("It is a hot day!");
    } else {
        println!("It is a nice day.");
    }
}
```

------------------------------------------------------------------------

## 🚫 Strict Boolean Rule

In languages like Python or C, numbers (like `1`) can act as `true`.\
Rust does NOT allow this.

Conditions must always evaluate to a `bool` (`true` or `false`).

### ❌ This Will Fail

``` rust
let number = 3;

if number {
    // Error!
}
```

### ✅ Correct Way

``` rust
if number != 0 {
    println!("Number is not zero.");
}
```

------------------------------------------------------------------------

# 2.2 Multiple Conditions with `else if`

If you have more than two possible paths, you can chain conditions
together.

``` rust
fn main() {
    let score = 85;

    if score >= 90 {
        println!("Grade: A");
    } else if score >= 80 {
        println!("Grade: B");
    } else {
        println!("Grade: C");
    }
}
```

💡 **Pro Tip:**\
If you use too many `else if` blocks, you should probably use `match`
instead.

------------------------------------------------------------------------

# 2.3 Using `if` in a `let` Statement

In Rust, `if` is an **expression**, not just a statement.

This means it returns a value.

``` rust
fn main() {
    let condition = true;

    let number = if condition { 5 } else { 6 };

    println!("The value of number is: {}", number);
}
```

------------------------------------------------------------------------

## ⚠️ Type Consistency Rule

When using `if` to assign a value:

Both branches must return the same type.

### ❌ This Will Fail

``` rust
let result = if condition { 5 } else { "six" };
```

Error: mismatched types

------------------------------------------------------------------------

# 2.4 Intro to `match` (The Power Tool)

While `if` is great for simple checks, `match` is preferred for handling
multiple possibilities.

It is similar to a "switch" statement but more powerful.

``` rust
fn main() {
    let dice_roll = 3;

    match dice_roll {
        1 => println!("You rolled a one!"),
        2 => println!("You rolled a two!"),
        3 => println!("You rolled a three!"),
        _ => println!("You rolled something else."),
    }
}
```

------------------------------------------------------------------------

## 🔎 The `_` Pattern

The underscore `_` means:

> "Match anything else."

Rust requires `match` to be **exhaustive** --- meaning all possible
values must be covered.

The `_` pattern helps cover remaining cases.

------------------------------------------------------------------------

# 2.5 Summary Table

  Feature          `if / else`           `match`
  ---------------- --------------------- ----------------------------
  Best for...      Simple binary logic   Multiple patterns
  Returns value?   Yes                   Yes
  Exhaustive?      No                    Yes (must cover all cases)

------------------------------------------------------------------------

# 🛠 Practice: "The Access Control"

Modify the code below to check:

-   If `is_admin` is true → print **"Access Granted: Full."**
-   Otherwise, if `has_guest_pass` is true → print **"Access Granted:
    Limited."**
-   Otherwise → print **"Access Denied."**

``` rust
fn main() {
    let is_admin = false;
    let has_guest_pass = true;

    // YOUR CODE HERE
}
```

------------------------------------------------------------------------

## ✅ One Possible Solution

``` rust
fn main() {
    let is_admin = false;
    let has_guest_pass = true;

    if is_admin {
        println!("Access Granted: Full.");
    } else if has_guest_pass {
        println!("Access Granted: Limited.");
    } else {
        println!("Access Denied.");
    }
}
```

------------------------------------------------------------------------

# 🎯 Key Takeaways

-   Conditions must always evaluate to `bool`.
-   `if` is an expression and returns a value.
-   Both branches of `if` must return the same type.
-   `match` is powerful and must be exhaustive.
-   Use `_` to handle remaining cases.

------------------------------------------------------------------------

🚀 End of Chapter 2
