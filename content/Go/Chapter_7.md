# Chapter 7: Go Structs & Maps

Structs and Maps are the primary way to group and organize data in Go.

## 1. Structs

A `struct` is a collection of fields. It is Go's way of creating custom data types (similar to classes in other languages, but without inheritance).

```go
type Vertex struct {
    X int
    Y int
}

func main() {
    v := Vertex{1, 2}
    v.X = 4
    fmt.Println(v.X)
}
```

---

## 2. Maps

A map maps keys to values. The zero value of a map is `nil`. A `nil` map has no keys, nor can keys be added. The `make` function returns a map of the given type, initialized and ready for use.

```go
m := make(map[string]int)
m["Bell Labs"] = 42

fmt.Println(m["Bell Labs"])
```

### Mutating Maps
- **Insert/Update**: `m[key] = elem`
- **Retrieve**: `elem = m[key]`
- **Delete**: `delete(m, key)`
- **Check presence**: `elem, ok = m[key]` (If `ok` is true, the key exists).

---

## 3. Pointers to Structs

Struct fields can be accessed through a struct pointer.

```go
v := Vertex{1, 2}
p := &v
p.X = 1e9 // No need to write (*p).X
```

---

## 4. Literal Values

You can list only a subset of fields by using the `Name:` syntax.

```go
v1 = Vertex{X: 1}  // Y:0 is implicit
v2 = Vertex{}      // X:0 and Y:0
p  = &Vertex{1, 2} // has type *Vertex
```

---

## 5. Summary of Collections

- **Array**: Fixed length.
- **Slice**: Dynamic length (view into an array).
- **Map**: Key-value pairs.
- **Struct**: Grouped fields of different types.
