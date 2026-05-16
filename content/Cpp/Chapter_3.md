# Chapter 3: C++ Operators & Strings

Operators are used to perform operations on variables and values. C++ also provides a dedicated `string` class.

## 1. Operators

C++ operators are identical to C operators:
- **Arithmetic**: `+`, `-`, `*`, `/`, `%`, `++`, `--`
- **Assignment**: `=`, `+=`, `-=`, `*=`, `/=`
- **Comparison**: `==`, `!=`, `>`, `<`, `>=`, `<=`
- **Logical**: `&&`, `||`, `!`

---

## 2. C++ Strings

To use strings, you must include an additional header file in the source code, the `<string>` library.

```cpp
#include <string>
string greeting = "Hello";
```

### Concatenation
The `+` operator can be used between strings to add them together to make a new string. This is called concatenation.

```cpp
string firstName = "John ";
string lastName = "Doe";
string fullName = firstName + lastName;
```

You can also concatenate strings with the `append()` function:

```cpp
string fullName = firstName.append(lastName);
```

### String Length
To get the length of a string, use the `length()` or `size()` function.

```cpp
string txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
cout << "The length of the txt string is: " << txt.length();
```

---

## 3. Accessing Strings

You can access the characters in a string by referring to its index number inside square brackets `[]`.

```cpp
string myString = "Hello";
cout << myString[0]; // Outputs H
myString[0] = 'J';   // Changes "Hello" to "Jello"
```

---

## 4. Special Characters

Because strings must be written within quotes, C++ will misunderstand this string:
`string txt = "We are the so-called "Vikings" from the north.";`

The solution to avoid this problem is to use the **backslash escape character**.
- `\'`: Single quote
- `\"`: Double quote
- `\\`: Backslash
- `\n`: New line
- `\t`: Tab

---

## 5. User Input Strings

When using `cin >>`, only the first word is captured (it stops at white space). To read a full line of text, use the `getline()` function.

```cpp
string fullName;
cout << "Type your full name: ";
getline(cin, fullName);
```
