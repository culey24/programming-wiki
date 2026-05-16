# Chapter 5: Go Functions

Functions are central to Go programs. They can take multiple arguments and return multiple values.

## 1. Function Declaration

```go
func add(x int, y int) int {
    return x + y
}
```

When consecutive parameters have the same type, you can omit the type from all but the last.

```go
func add(x, y int) int {
    return x + y
}
```

---

## 2. Multiple Return Values

A function can return any number of values.

```go
func swap(x, y string) (string, string) {
    return y, x
}

func main() {
    a, b := swap("hello", "world")
    fmt.Println(a, b)
}
```

---

## 3. Named Return Values

Return values can be named. They are treated as variables defined at the top of the function.

```go
func split(sum int) (x, y int) {
    x = sum * 4 / 9
    y = sum - x
    return // "naked" return returns the named variables
}
```

---

## 4. Variadic Functions

Variadic functions can be called with any number of trailing arguments. `fmt.Println` is a common variadic function.

```go
func sum(nums ...int) {
    total := 0
    for _, num := range nums {
        total += num
    }
    fmt.Println(total)
}
```

---

## 5. Anonymous Functions and Closures

Go supports anonymous functions, which can form **closures**.

```go
func intSeq() func() int {
    i := 0
    return func() int {
        i++
        return i
    }
}

func main() {
    nextInt := intSeq()
    fmt.Println(nextInt()) // 1
    fmt.Println(nextInt()) // 2
}
```
