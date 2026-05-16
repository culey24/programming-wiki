# Chapter 8: Go Pointers, Methods & Interfaces

Go supports pointers and allows you to define methods on types. Interfaces provide a way to define behavior.

## 1. Pointers

Go has pointers. A pointer value holds the memory address of a variable.

```go
var p *int
i := 42
p = &i
fmt.Println(*p) // read i through the pointer
*p = 21         // set i through the pointer
```

Note: Unlike C, Go has **no pointer arithmetic**.

---

## 2. Methods

Go does not have classes. However, you can define methods on types. A method is a function with a special **receiver** argument.

```go
type Vertex struct {
    X, Y float64
}

func (v Vertex) Abs() float64 {
    return math.Sqrt(v.X*v.X + v.Y*v.Y)
}

func main() {
    v := Vertex{3, 4}
    fmt.Println(v.Abs())
}
```

---

## 3. Pointer Receivers

You can declare methods with pointer receivers. This means the method can modify the value to which the receiver points.

```go
func (v *Vertex) Scale(f float64) {
    v.X = v.X * f
    v.Y = v.Y * f
}
```

---

## 4. Interfaces

An **interface type** is defined as a set of method signatures. A type implements an interface by implementing its methods. There is no explicit declaration of intent, no "implements" keyword.

```go
type Abser interface {
    Abs() float64
}

// Vertex implicitly implements Abser because it has an Abs() method
```

---

## 5. The Empty Interface

The interface type that specifies zero methods is known as the **empty interface**: `interface{}`. An empty interface can hold values of any type.

```go
var i interface{}
i = 42
i = "hello"
```

This is used by code that handles values of unknown type (like `fmt.Print`).
