# Chapter 8: TypeScript Utility Types

TypeScript provides several utility types to facilitate common type transformations. These are available globally.

## 1. `Partial<Type>`
Constructs a type with all properties of `Type` set to optional.

```typescript
interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}
```

---

## 2. `Required<Type>`
Constructs a type consisting of all properties of `Type` set to required. (Opposite of `Partial`).

```typescript
interface Props {
  a?: number;
  b?: string;
}

const obj: Required<Props> = { a: 5, b: "hello" }; // Both must be present
```

---

## 3. `Readonly<Type>`
Constructs a type with all properties of `Type` set to readonly.

```typescript
const todo: Readonly<Todo> = {
  title: "Delete inactive users",
  description: "...",
};

// todo.title = "Hello"; // Error: Cannot assign to 'title' because it is a read-only property.
```

---

## 4. `Record<Keys, Type>`
Constructs an object type whose property keys are `Keys` and whose property values are `Type`.

```typescript
interface PageInfo {
  title: string;
}

type Page = "home" | "about" | "contact";

const nav: Record<Page, PageInfo> = {
  about: { title: "about" },
  contact: { title: "contact" },
  home: { title: "home" },
};
```

---

## 5. `Pick<Type, Keys>` and `Omit<Type, Keys>`

- **`Pick`**: Constructs a type by picking the set of properties `Keys` from `Type`.
- **`Omit`**: Constructs a type by picking all properties from `Type` and then removing `Keys`.

```typescript
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo, "title" | "completed">;
type TodoInfo = Omit<Todo, "completed">;
```

---

## 6. `ReturnType<Type>`
Extracts the return type of a function type.

```typescript
declare function f1(): { a: number; b: string };
type T0 = ReturnType<typeof f1>; // { a: number, b: string }
```
