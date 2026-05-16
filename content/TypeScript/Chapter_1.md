# Chapter 1: TypeScript Basics & Type Annotations

TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.

## 1. What is TypeScript?

TypeScript is a superset of JavaScript. This means that any valid JavaScript code is also valid TypeScript code. The main difference is that TypeScript adds **static types**.

### Why use TypeScript?
- **Catch errors early**: Find bugs during development instead of at runtime.
- **Better Tooling**: Improved autocompletion and refactoring in IDEs.
- **Self-documenting**: Types act as documentation for your code.

---

## 2. Type Annotations

In TypeScript, you can explicitly specify the type of a variable using a colon `:` after the variable name.

```typescript
let name: string = "Alice";
let age: number = 30;
let isStudent: boolean = true;
```

If you don't provide a type, TypeScript will often **infer** the type based on the initial value.

```typescript
let message = "Hello"; // TypeScript infers 'string'
// message = 42; // Error: Type 'number' is not assignable to type 'string'.
```

---

## 3. Basic Types

### `any`
The `any` type allows a variable to be of any type. It is effectively "turning off" type checking. Use it sparingly!

```typescript
let data: any = 42;
data = "string"; // No error
```

### `void`
Used for functions that do not return a value.

```typescript
function logMessage(msg: string): void {
  console.log(msg);
}
```

### `null` and `undefined`
By default, these are sub-types of all other types. However, with `strictNullChecks` enabled, they must be explicitly handled.

---

## 4. Arrays in TypeScript

You can define the type of elements inside an array.

```typescript
let list: number[] = [1, 2, 3];
let names: Array<string> = ["Alice", "Bob"]; // Alternative syntax
```

---

## 5. Objects

You can define the shape of an object.

```typescript
let user: { name: string; age: number };
user = { name: "John", age: 25 };
```

In the next chapter, we'll see how to use **Interfaces** to make this more reusable.
