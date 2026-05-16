# Chapter 5: TypeScript Generics

Generics allow you to create reusable components that can work with a variety of types rather than a single one.

## 1. Why Generics?

Suppose you want a function that returns whatever is passed into it. Without generics, you might use `any`:

```typescript
function identity(arg: any): any {
  return arg;
}
```

However, we lose the information about what the type was. With generics, we use a **Type Variable** (usually `T`):

```typescript
function identity<T>(arg: T): T {
  return arg;
}

let output = identity<string>("myString"); // output is 'string'
let num = identity(42); // Type inference also works
```

---

## 2. Generic Interfaces

You can use generics with interfaces.

```typescript
interface Box<T> {
  content: T;
}

let stringBox: Box<string> = { content: "Hello" };
let numberBox: Box<number> = { content: 123 };
```

---

## 3. Generic Classes

Generics can also be applied to classes.

```typescript
class DataHolder<T> {
  data: T;
  constructor(value: T) {
    this.data = value;
  }
}

const holder = new DataHolder<number>(100);
```

---

## 4. Generic Constraints

You can restrict the types that a generic can accept using the `extends` keyword.

```typescript
interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length); // Now we know 'length' exists
  return arg;
}

// loggingIdentity(3); // Error: number doesn't have .length
loggingIdentity("hello"); // OK
```

---

## 5. Using Type Parameters in Generic Constraints

You can declare a type parameter that is constrained by another type parameter.

```typescript
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

let x = { a: 1, b: 2, c: 3 };
getProperty(x, "a"); // OK
// getProperty(x, "m"); // Error: Argument of type '"m"' is not assignable to 'a' | 'b' | 'c'
```
