# 🦀 Chapter 1: Variables and Mutability in Rust

Welcome to the first step of your Rust journey!

In many programming languages, a variable is just a name for a value.\
In **Rust**, we use the concept of **variable binding** --- a name is
*bound* to a value, and the rules of that bond are strict to guarantee
memory safety and prevent bugs.

------------------------------------------------------------------------

# 1.1 The Basics: `let` and `snake_case`

To create a variable in Rust, we use the `let` keyword.

Rust follows the **snake_case** naming convention: - all lowercase -
words separated by underscores

## Example

``` rust
fn main() {
    let favorite_number = 7;
    println!("My favorite number is: {}", favorite_number);
}
```

### 💡 Type Inference

Notice we did not specify the type of `7`.

Rust automatically infers the type based on the value and usage.

Example with explicit type:

``` rust
let favorite_number: i32 = 7;
```

------------------------------------------------------------------------

# 1.2 Immutability: Safe by Default

By default, Rust variables are **immutable**.

> Once a value is bound to a name, it cannot be changed.

## ❌ This Will NOT Compile

``` rust
fn main() {
    let x = 5;
    x = 6; // Error!
}
```

### Why?

Rust prevents accidental modification of data.

Benefits: - Easier reasoning about code - Fewer bugs - Safer
concurrency - Clearer data flow

------------------------------------------------------------------------

# 1.3 The `mut` Keyword

If you need to change a variable's value, you must explicitly opt-in to
mutability.

Use `mut` after `let`.

## Example

``` rust
fn main() {
    let mut score = 0;

    println!("Score is: {}", score);

    score = 10;
    println!("New score is: {}", score);
}
```

### Key Rule

-   `let` → cannot change value
-   `let mut` → can change value
-   Even `let mut` cannot change the variable's type

------------------------------------------------------------------------

# 1.4 Constants (`const`)

Constants: - Are always immutable - Must have a type annotation - Can
exist in global scope - Use SCREAMING_SNAKE_CASE naming

## Comparison Table

  Feature           `let`                 `const`
  ----------------- --------------------- ----------------------
  Default           Immutable             Always Immutable
  Type Annotation   Optional (inferred)   Required
  Naming            snake_case            SCREAMING_SNAKE_CASE
  Global Scope      No                    Yes

## Example

``` rust
const MAX_PLAYER_HEALTH: u32 = 100;

fn main() {
    println!("Max health is {}", MAX_PLAYER_HEALTH);
}
```

------------------------------------------------------------------------

# 1.5 Variable Shadowing

Shadowing allows you to declare a new variable with the same name as a
previous one.

## Changing Types Example

``` rust
fn main() {
    let spaces = "   ";
    let spaces = spaces.len();

    println!("Number of spaces: {}", spaces);
}
```

## Transforming Without `mut`

``` rust
let x = 5;
let x = x + 1;
```

------------------------------------------------------------------------

# 1.6 Summary Table

  Keyword     Can Change Value?   Can Change Type?         Example
  ----------- ------------------- ------------------------ ---------------------
  `let`       ❌ No               ✅ Yes (via shadowing)   `let x = 5;`
  `let mut`   ✅ Yes              ❌ No                    `let mut x = 5;`
  `const`     ❌ No               ❌ No                    `const X: i32 = 5;`

------------------------------------------------------------------------

# 🛠 Mini-Exercise: "The Broken Calculator"

This code will NOT compile:

``` rust
fn main() {
    let x = 10;
    println!("X is: {}", x);
    
    x = x + 5; 
    println!("X + 5 is: {}", x);
}
```

## ✅ Fix Method 1: Using `mut`

``` rust
fn main() {
    let mut x = 10;

    println!("X is: {}", x);

    x = x + 5;
    println!("X + 5 is: {}", x);
}
```

## ✅ Fix Method 2: Using Shadowing

``` rust
fn main() {
    let x = 10;

    println!("X is: {}", x);

    let x = x + 5;
    println!("X + 5 is: {}", x);
}
```

------------------------------------------------------------------------

# 🎯 Key Takeaways

-   Rust variables are immutable by default.
-   Use `mut` to allow value changes.
-   Use `const` for compile-time constants.
-   Use shadowing for transformations or type changes.
-   Rust forces explicit mutation for safety.

------------------------------------------------------------------------

🚀 End of Chapter 1
