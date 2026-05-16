# Chapter 5: SQL Set Operators

Set operators are used to combine the results of two or more `SELECT` statements into a single result set.

## 1. UNION

The `UNION` operator is used to combine the result-set of two or more `SELECT` statements.
- Each `SELECT` statement within `UNION` must have the same number of columns.
- The columns must also have similar data types.
- The columns in each `SELECT` statement must also be in the same order.

```sql
SELECT City FROM Customers
UNION
SELECT City FROM Suppliers
ORDER BY City;
```

Note: `UNION` selects only **distinct** values by default. To allow duplicate values, use `UNION ALL`.

---

## 2. INTERSECT

The `INTERSECT` operator is used to return the results of two or more `SELECT` statements. However, it only returns the rows selected by **all** the queries or data sets.

```sql
SELECT City FROM Customers
INTERSECT
SELECT City FROM Suppliers
ORDER BY City;
```

This returns cities where both customers and suppliers are located.

---

## 3. EXCEPT / MINUS

The `EXCEPT` operator (or `MINUS` in some databases like Oracle) returns the distinct rows from the first `SELECT` statement that are **not** returned by the second `SELECT` statement.

```sql
SELECT City FROM Customers
EXCEPT
SELECT City FROM Suppliers
ORDER BY City;
```

This returns cities where there are customers but NO suppliers.

---

## 4. The EXISTS Operator

The `EXISTS` operator is used to test for the existence of any record in a subquery. The `EXISTS` operator returns TRUE if the subquery returns one or more records.

```sql
SELECT SupplierName
FROM Suppliers
WHERE EXISTS (SELECT ProductName FROM Products WHERE Products.SupplierID = Suppliers.supplierID AND Price < 20);
```

---

## 5. The ANY and ALL Operators

- `ANY`: Returns TRUE if any of the subquery values meet the condition.
- `ALL`: Returns TRUE if all of the subquery values meet the condition.

```sql
SELECT ProductName
FROM Products
WHERE ProductID = ANY
  (SELECT ProductID
  FROM OrderDetails
  WHERE Quantity = 10);
```
