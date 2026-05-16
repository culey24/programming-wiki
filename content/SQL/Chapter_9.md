# Chapter 9: SQL Advanced Topics & Summary

Advanced SQL concepts allow for more complex data management and automation.

## 1. SQL Views

In SQL, a view is a virtual table based on the result-set of an SQL statement. A view contains rows and columns, just like a real table. The fields in a view are fields from one or more real tables in the database.

```sql
CREATE VIEW [Brazil Customers] AS
SELECT CustomerName, ContactName
FROM Customers
WHERE Country = 'Brazil';

-- Query the view
SELECT * FROM [Brazil Customers];
```

---

## 2. Stored Procedures

A stored procedure is a prepared SQL code that you can save, so the code can be reused over and over again. So if you have an SQL query that you write over and over again, save it as a stored procedure, and then just call it to execute it.

```sql
CREATE PROCEDURE SelectAllCustomers
AS
SELECT * FROM Customers
GO;

-- Execute the procedure
EXEC SelectAllCustomers;
```

---

## 3. SQL Injection

SQL injection is a type of vulnerability that occurs when an attacker can interfere with the queries that an application makes to its database. It generally allows an attacker to view data they are not normally able to retrieve.

**Prevention**: Always use **parameterized queries** (prepared statements) instead of concatenating strings to build queries.

---

## 4. SQL Case Statement

The `CASE` statement goes through conditions and returns a value when the first condition is met (like an if-then-else statement).

```sql
SELECT OrderID, Quantity,
CASE
    WHEN Quantity > 30 THEN 'The quantity is greater than 30'
    WHEN Quantity = 30 THEN 'The quantity is 30'
    ELSE 'The quantity is under 30'
END AS QuantityText
FROM OrderDetails;
```

---

## 5. SQL Summary

Congratulations! You have completed the SQL course. You have learned:
- How to select and filter data using `SELECT` and `WHERE`.
- How to sort data and use aggregate functions.
- The power of `JOIN` to combine data from multiple tables.
- Data modification using `INSERT`, `UPDATE`, and `DELETE`.
- Table management and constraints.
- Advanced topics like Views and Stored Procedures.

### What's Next?
- Learn about **NoSQL** databases (like MongoDB).
- Explore **Database Design** and **Normalization**.
- Learn a specific database engine in depth (PostgreSQL, MySQL, MS SQL Server).
- Study **Query Optimization** to improve performance.
