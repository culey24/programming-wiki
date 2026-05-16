# Chapter 1: Go Introduction & Syntax

Go, also known as Golang, is an open-source programming language developed by Google. It is designed to be simple, efficient, and reliable.

## 1. What is Go?

- Go was created at Google in 2007 and released in 2009.
- It is a **statically typed**, compiled language.
- Go is famous for its **concurrency** support (Goroutines), making it ideal for cloud services and distributed systems.
- It has a clean syntax and is designed to compile very quickly.

---

## 2. Hello World in Go

Every Go program is made up of packages. The `main` package is where the execution starts.

```go
package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}
```

### Explanation:
- `package main`: Tells the Go compiler that this file should compile as an executable program rather than a shared library.
- `import "fmt"`: Imports the `fmt` (format) package, which contains functions for formatting text, including printing to the console.
- `func main()`: The `main` function is where the program execution begins.
- `fmt.Println()`: Prints text to the console followed by a new line.

---

## 3. Go Syntax Rules

- Go does **not** require semicolons at the end of statements (the compiler adds them automatically).
- Curly braces `{` must be on the same line as the statement (`func`, `if`, `for`).
- Go is case-sensitive.
- Unused imports or variables will cause a compiler error.

---

## 4. Compilation and Execution

1. Write your code in a file named `hello.go`.
2. To run the code directly:
   ```bash
   go run hello.go
   ```
3. To compile the code into an executable:
   ```bash
   go build hello.go
   ./hello
   ```

---

## 5. Comments

- Single-line: `//`
- Multi-line: `/* ... */`
