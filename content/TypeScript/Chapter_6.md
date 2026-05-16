# Chapter 6: TypeScript Enums & Tuples

TypeScript adds `Enums` and `Tuples` to help manage specific sets of values and fixed-length arrays.

## 1. Enums

Enums allow us to define a set of named constants. Using enums can make it easier to document intent or create a set of distinct cases.

### Numeric Enums
By default, enums are numeric and start at 0.

```typescript
enum Direction {
  Up,    // 0
  Down,  // 1
  Left,  // 2
  Right, // 3
}

let move = Direction.Up;
```

### String Enums
In a string enum, each member must be constant-initialized with a string literal.

```typescript
enum Response {
  No = "NO",
  Yes = "YES",
}
```

---

## 2. Tuples

Tuple types allow you to express an array with a fixed number of elements whose types are known, but need not be the same.

```typescript
let x: [string, number];
x = ["hello", 10]; // OK
// x = [10, "hello"]; // Error: Type 'number' is not assignable to type 'string'.
```

### Destructuring Tuples
```typescript
const [name, age] = x;
```

---

## 3. Tuple Optional Elements

Tuples can have optional elements specified with `?`.

```typescript
let coord: [number, number, number?];
coord = [10, 20];      // OK
coord = [10, 20, 30];  // OK
```

---

## 4. Tuple Rest Elements

Tuples can have rest elements, which must be an array/tuple type.

```typescript
type StringNumberPair = [string, number, ...boolean[]];
const a: StringNumberPair = ["hello", 1, true, false, true];
```

---

## 5. Readonly Tuples

You can make a tuple readonly.

```typescript
const point: readonly [number, number] = [10, 20];
// point[0] = 30; // Error: Index signature in type 'readonly [number, number]' only permits reading.
```
