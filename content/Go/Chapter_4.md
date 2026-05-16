# Chapter 4: Go Control Flow & Loops

Go has a very streamlined set of control flow statements. Notably, `for` is the only looping construct in Go.

## 1. Conditional Statements

### If Statement
In Go, the condition does not need to be surrounded by parentheses `()`, but the braces `{}` are required.

```go
if x > 0 {
    fmt.Println("Positive")
} else if x < 0 {
    fmt.Println("Negative")
} else {
    fmt.Println("Zero")
}
```

### If with Short Statement
A statement can be executed before the condition. Variables declared here are only in scope until the end of the `if`.

```go
if val := calculate(); val > 10 {
    fmt.Println(val)
}
```

---

## 2. Switch Statement

Go's `switch` is like other languages, but it only runs the selected case, not all the cases that follow (it has an implicit `break`).

```go
switch day {
case "Saturday", "Sunday":
    fmt.Println("Weekend")
case "Monday":
    fmt.Println("Back to work")
default:
    fmt.Println("Weekday")
}
```

---

## 3. The For Loop

Go has only one looping construct: the `for` loop.

### Standard For Loop
```go
for i := 0; i < 10; i++ {
    fmt.Println(i)
}
```

### As a While Loop
You can omit the init and post statements.

```go
i := 0
for i < 10 {
    fmt.Println(i)
    i++
}
```

### Infinite Loop
```go
for {
    // Keep doing this forever
}
```

---

## 4. Range

The `range` keyword is used in a `for` loop to iterate over elements of an array, slice, string, map, or channel.

```go
nums := []int{2, 3, 4}
for index, value := range nums {
    fmt.Printf("index: %d, value: %d\n", index, value)
}
```

---

## 5. Defer

Go has a special statement called `defer`. A defer statement defers the execution of a function until the surrounding function returns.

```go
func main() {
    defer fmt.Println("world")
    fmt.Println("hello")
}
// Outputs: hello world
```
