# Chapter 2: SQL SELECT & Filters (WHERE)

The `SELECT` statement is used to fetch data, and the `WHERE` clause is used to filter records.

## 1. SELECT DISTINCT

The `SELECT DISTINCT` statement is used to return only distinct (different) values.

```sql
SELECT DISTINCT Country FROM Customers;
```

---

## 2. The WHERE Clause

The `WHERE` clause is used to filter records. It is used to extract only those records that fulfill a specified condition.

```sql
SELECT * FROM Customers
WHERE Country='Mexico';
```

Note: SQL requires single quotes around text values (most database systems will also allow double quotes). However, numeric fields should not be enclosed in quotes.

---

## 3. Operators in The WHERE Clause

The following operators can be used in the `WHERE` clause:

| Operator | Description |
| :--- | :--- |
| `=` | Equal |
| `>` | Greater than |
| `<` | Less than |
| `>=` | Greater than or equal |
| `<=` | Less than or equal |
| `<>` | Not equal. Note: In some versions of SQL this operator may be written as `!=` |
| `BETWEEN` | Between a certain range |
| `LIKE` | Search for a pattern |
| `IN` | To specify multiple possible values for a column |

---

## 4. AND, OR and NOT Operators

- **AND**: Displays a record if all the conditions separated by AND are TRUE.
- **OR**: Displays a record if any of the conditions separated by OR is TRUE.
- **NOT**: Displays a record if the condition(s) is NOT TRUE.

```sql
SELECT * FROM Customers
WHERE Country='Germany' AND City='Berlin';

SELECT * FROM Customers
WHERE City='Berlin' OR City='München';

SELECT * FROM Customers
WHERE NOT Country='Germany';
```

---

## 5. The LIKE Operator

The `LIKE` operator is used in a `WHERE` clause to search for a specified pattern in a column. There are two wildcards often used in conjunction with the `LIKE` operator:
- `%`: The percent sign represents zero, one, or multiple characters.
- `_`: The underscore represents a single character.

```sql
SELECT * FROM Customers
WHERE CustomerName LIKE 'a%'; -- Finds any values that start with "a"

SELECT * FROM Customers
WHERE CustomerName LIKE '%or%'; -- Finds any values that have "or" in any position
```
