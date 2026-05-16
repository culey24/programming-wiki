# Chapter 3: TypeScript Functions

TypeScript adds type safety to function parameters and return values.

## 1. Typing Parameters and Returns

You can specify types for arguments and the return type of a function.

```typescript
function add(x: number, y: number): number {
  return x + y;
}
```

If a function doesn't return anything, its return type is `void`.

---

## 2. Optional and Default Parameters

### Optional Parameters
Use `?` after a parameter name to make it optional. Optional parameters must follow required parameters.

```typescript
function greet(name: string, greeting?: string) {
  if (greeting) {
    return `${greeting}, ${name}`;
  }
  return `Hello, ${name}`;
}
```

### Default Parameters
```typescript
function multiply(x: number, y: number = 10): number {
  return x * y;
}
```

---

## 3. Function Types

You can define the type of a function itself.

```typescript
type MathOperation = (a: number, b: number) => number;

const sub: MathOperation = (a, b) => a - b;
```

---

## 4. Function Overloads

TypeScript allows you to define multiple signatures for a single function. This is useful when a function can accept different types or combinations of arguments.

```typescript
function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}

const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);
```

---

## 5. Rest Parameters

Rest parameters allow a function to accept an indefinite number of arguments as an array.

```typescript
function sum(...numbers: number[]): number {
  return numbers.reduce((prev, curr) => prev + curr, 0);
}

console.log(sum(1, 2, 3, 4)); // 10
```
