# Chapter 7: TypeScript Advanced Types

TypeScript provides several advanced ways to combine and manipulate types.

## 1. Union Types

A union type describes a value that can be one of several types. We use the vertical bar `|` to separate each type.

```typescript
function printId(id: number | string) {
  console.log("Your ID is: " + id);
}

printId(101);    // OK
printId("202");  // OK
```

### Narrowing Unions
If you have a union, you might need to check which type you have before performing operations.

```typescript
function printId(id: number | string) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}
```

---

## 2. Literal Types

You can specify exact values that a string, number, or boolean must have.

```typescript
let alignment: "left" | "right" | "center";
alignment = "left"; // OK
// alignment = "up"; // Error
```

Combined with unions, literal types allow you to define a set of allowed values for a variable.

---

## 3. Discriminated Unions

When working with complex objects in a union, you can use a "discriminant" property to help TypeScript narrow down the type.

```typescript
interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  sideLength: number;
}

type Shape = Circle | Square;

function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
  }
}
```

---

## 4. Nullable Types

With `strictNullChecks` enabled, you must explicitly include `null` or `undefined` in a union if a value can be empty.

```typescript
let name: string | null = null;
```

### Non-null Assertion Operator (`!`)
You can tell TypeScript that a value is definitely not null using `!`.

```typescript
function fixed(name: string | null) {
  console.log(name!.charAt(0)); // Trust me, name is not null
}
```

---

## 5. Type Guards

A type guard is an expression that performs a runtime check that guarantees the type in some scope.

```typescript
function isString(test: any): test is string {
  return typeof test === "string";
}

let value: any = "hello";
if (isString(value)) {
  console.log(value.length); // value is 'string' here
}
```
