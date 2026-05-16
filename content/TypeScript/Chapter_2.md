# Chapter 2: TypeScript Interfaces & Types

Interfaces and Type Aliases are used to define the shape of an object or a custom type.

## 1. Interfaces

An `interface` describes the structure of an object.

```typescript
interface User {
  name: string;
  age: number;
  email?: string; // Optional property
}

const alice: User = {
  name: "Alice",
  age: 28
};
```

### Readonly Properties
Properties can be marked as `readonly` to prevent modification after creation.

```typescript
interface Point {
  readonly x: number;
  readonly y: number;
}
```

---

## 2. Type Aliases

Type aliases create a new name for a type. They can be used for objects, unions, primitives, and more.

```typescript
type ID = string | number; // Union type
type Point = {
  x: number;
  y: number;
};
```

### Interface vs Type Alias
- **Interfaces** can be merged (re-opened) to add more properties.
- **Type Aliases** are more flexible for complex types (unions, tuples).
- Generally, use `interface` for object structures and `type` for everything else.

---

## 3. Extending Interfaces

Interfaces can extend one or more other interfaces.

```typescript
interface Person {
  name: string;
}

interface Employee extends Person {
  employeeId: number;
}

const worker: Employee = {
  name: "Bob",
  employeeId: 123
};
```

---

## 4. Intersection Types

You can combine multiple types using `&`.

```typescript
type Admin = { privileges: string[] };
type User = { name: string };

type SuperUser = Admin & User;

const root: SuperUser = {
  name: "Root",
  privileges: ["server", "db"]
};
```

---

## 5. Type Assertions

Sometimes you know more about a value's type than TypeScript does. You can use a "type assertion" to tell TypeScript "trust me, I know what I'm doing."

```typescript
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
```
