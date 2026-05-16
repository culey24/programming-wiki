# Chapter 4: C# Control Flow & Loops

Control flow statements allow you to run code based on conditions and repeat blocks of code.

## 1. Conditions and If Statements

- `if`: executes a block of code if a specified condition is true.
- `else`: executes a block of code if the same condition is false.
- `else if`: specifies a new condition to test, if the first condition is false.
- `switch`: specifies many alternative blocks of code to be executed.

### Ternary Operator
```csharp
string result = (time < 18) ? "Good day." : "Good evening.";
```

---

## 2. Switch Statement

Use the `switch` statement to select one of many code blocks to be executed.

```csharp
int day = 4;
switch (day) 
{
  case 6: Console.WriteLine("Today is Saturday"); break;
  case 7: Console.WriteLine("Today is Sunday"); break;
  default: Console.WriteLine("Looking forward to the Weekend"); break;
}
```

---

## 3. While and Do/While Loop

- `while`: loops through a block of code as long as a specified condition is `true`.
- `do/while`: executes the code block once, before checking if the condition is true.

```csharp
int i = 0;
while (i < 5) 
{
  Console.WriteLine(i);
  i++;
}
```

---

## 4. For Loop

### Standard For Loop
```csharp
for (int i = 0; i < 5; i++) 
{
  Console.WriteLine(i);
}
```

### Foreach Loop
Used exclusively to loop through elements in an **array** (or other data sets).

```csharp
string[] cars = {"Volvo", "BMW", "Ford", "Mazda"};
foreach (string i in cars) 
{
  Console.WriteLine(i);
}
```

---

## 5. Break and Continue

- `break`: jumps out of a loop.
- `continue`: skips one iteration in the loop.
