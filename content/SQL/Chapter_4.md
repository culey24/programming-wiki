# Chapter 4: SQL Joins

A `JOIN` clause is used to combine rows from two or more tables, based on a related column between them.

## 1. INNER JOIN

The `INNER JOIN` keyword selects records that have matching values in both tables.

```sql
SELECT Orders.OrderID, Customers.CustomerName
FROM Orders
INNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID;
```

---

## 2. LEFT (OUTER) JOIN

The `LEFT JOIN` keyword returns all records from the left table (table1), and the matching records from the right table (table2). The result is 0 records from the right side, if there is no match.

```sql
SELECT Customers.CustomerName, Orders.OrderID
FROM Customers
LEFT JOIN Orders ON Customers.CustomerID = Orders.CustomerID
ORDER BY Customers.CustomerName;
```

---

## 3. RIGHT (OUTER) JOIN

The `RIGHT JOIN` keyword returns all records from the right table (table2), and the matching records from the left table (table1). The result is 0 records from the left side, if there is no match.

```sql
SELECT Orders.OrderID, Employees.LastName, Employees.FirstName
FROM Orders
RIGHT JOIN Employees ON Orders.EmployeeID = Employees.EmployeeID
ORDER BY Orders.OrderID;
```

---

## 4. FULL (OUTER) JOIN

The `FULL OUTER JOIN` keyword returns all records when there is a match in left (table1) or right (table2) table records.

```sql
SELECT Customers.CustomerName, Orders.OrderID
FROM Customers
FULL OUTER JOIN Orders ON Customers.CustomerID=Orders.CustomerID
ORDER BY Customers.CustomerName;
```

---

## 5. Self Join

A self join is a regular join, but the table is joined with itself.

```sql
SELECT A.CustomerName AS CustomerName1, B.CustomerName AS CustomerName2, A.City
FROM Customers A, Customers B
WHERE A.CustomerID <> B.CustomerID
AND A.City = B.City
ORDER BY A.City;
```

---

## 6. Summary of Join Types

| Join Type | Description |
| :--- | :--- |
| **(INNER) JOIN** | Returns records that have matching values in both tables |
| **LEFT (OUTER) JOIN** | Returns all records from the left table, and the matched records from the right table |
| **RIGHT (OUTER) JOIN** | Returns all records from the right table, and the matched records from the left table |
| **FULL (OUTER) JOIN** | Returns all records when there is a match in either left or right table |
| **CROSS JOIN** | Returns the Cartesian product of the two tables |
