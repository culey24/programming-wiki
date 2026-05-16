# Chapter 6: Go Arrays & Slices

While Go has arrays, **Slices** are much more common because they are dynamic and more flexible.

## 1. Arrays

An array has a fixed size. The size is part of its type.

```go
var a [5]int // An array of 5 integers
a[4] = 100

b := [2]string{"hello", "world"}
```

---

## 2. Slices

A slice is a dynamically-sized, flexible view into the elements of an array. In practice, slices are much more common than arrays.

```go
s := []int{2, 3, 5, 7, 11, 13}
```

### Slicing a Slice
Slices can be created by "slicing" an existing array or slice.

```go
primes := [6]int{2, 3, 5, 7, 11, 13}
var s []int = primes[1:4] // contains [3, 5, 7]
```

---

## 3. Creating Slices with `make`

Slices can be created with the built-in `make` function; this is how you create dynamically sized arrays.

```go
a := make([]int, 5)    // length 5, capacity 5
b := make([]int, 0, 5) // length 0, capacity 5
```

---

## 4. Appending to a Slice

It is common to append new elements to a slice. Go provides a built-in `append` function.

```go
var s []int
s = append(s, 0)
s = append(s, 1)
s = append(s, 2, 3, 4)
```

---

## 5. Length and Capacity

A slice has both a **length** and a **capacity**.
- **Length**: The number of elements it contains (`len(s)`).
- **Capacity**: The number of elements in the underlying array, counting from the first element in the slice (`cap(s)`).

```go
s := []int{2, 3, 5, 7, 11, 13}
fmt.Println(len(s), cap(s)) // 6 6
```
