# Chapter 4: TypeScript Classes & Modifiers

TypeScript adds access modifiers and other features to standard JavaScript classes.

## 1. Member Modifiers

Modifiers control the visibility of class members (properties and methods).

- **`public`**: (Default) Accessible anywhere.
- **`private`**: Accessible only within the class.
- **`protected`**: Accessible within the class and its subclasses.

```typescript
class Animal {
  private name: string;
  constructor(theName: string) { this.name = theName; }
}

// new Animal("Cat").name; // Error: 'name' is private
```

---

## 2. Parameter Properties

You can declare and initialize properties directly in the constructor parameters.

```typescript
class Person {
  constructor(public name: string, private age: number) {}
}

const bob = new Person("Bob", 30);
console.log(bob.name); // Bob
```

---

## 3. Readonly Modifiers

Properties can be marked as `readonly`. They must be initialized at their declaration or in the constructor.

```typescript
class Octopus {
  readonly name: string;
  readonly numberOfLegs: number = 8;
  constructor(theName: string) {
    this.name = theName;
  }
}
```

---

## 4. Getters and Setters

TypeScript supports getters and setters to control access to a member.

```typescript
class User {
  private _fullName: string = "";

  get fullName(): string {
    return this._fullName;
  }

  set fullName(newName: string) {
    this._fullName = newName;
  }
}
```

---

## 5. Abstract Classes

Abstract classes are base classes from which other classes may be derived. They may not be instantiated directly.

```typescript
abstract class Department {
  constructor(public name: string) {}
  printName(): void { console.log(this.name); }
  abstract printMeeting(): void; // Must be implemented in derived classes
}

class AccountingDepartment extends Department {
  printMeeting(): void { console.log("Meeting at 10 AM"); }
}
```
