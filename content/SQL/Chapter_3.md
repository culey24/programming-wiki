# Chapter 3: SQL Sorting & Aggregation

Sorting data and calculating summary statistics are common tasks in SQL.

## 1. ORDER BY

The `ORDER BY` keyword is used to sort the result-set in ascending or descending order. It sorts the records in ascending order by default. To sort the records in descending order, use the `DESC` keyword.

```sql
SELECT * FROM Products
ORDER BY Price DESC;

SELECT * FROM Customers
ORDER BY Country, CustomerName; -- Sort by Country, then by CustomerName
```

---

## 2. MIN() and MAX() Functions

- `MIN()`: Returns the smallest value of the selected column.
- `MAX()`: Returns the largest value of the selected column.

```sql
SELECT MIN(Price) FROM Products;
```

---

## 3. COUNT(), AVG() and SUM() Functions

- `COUNT()`: Returns the number of rows that matches a specified criterion.
- `AVG()`: Returns the average value of a numeric column.
- `SUM()`: Returns the total sum of a numeric column.

```sql
SELECT COUNT(ProductID) FROM Products;
SELECT AVG(Price) FROM Products;
SELECT SUM(Quantity) FROM OrderDetails;
```

---

## 4. The GROUP BY Statement

The `GROUP BY` statement groups rows that have the same values into summary rows, like "find the number of customers in each country". It is often used with aggregate functions (`COUNT()`, `MAX()`, `MIN()`, `SUM()`, `AVG()`) to group the result-set by one or more columns.

```sql
SELECT COUNT(CustomerID), Country
FROM Customers
GROUP BY Country;
```

---

## 5. The HAVING Clause

The `HAVING` clause was added to SQL because the `WHERE` keyword cannot be used with aggregate functions.

```sql
SELECT COUNT(CustomerID), Country
FROM Customers
GROUP BY Country
HAVING COUNT(CustomerID) > 5;
```

---

## 6. SQL Aliases

SQL aliases are used to give a table, or a column in a table, a temporary name. Aliases are often used to make column names more readable. An alias only exists for the duration of that query. Use the `AS` keyword.

```sql
SELECT CustomerID AS ID, CustomerName AS Customer
FROM Customers;
```
