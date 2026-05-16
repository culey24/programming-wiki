# Chapter 6: SQL Data Modification

These commands (DML - Data Manipulation Language) allow you to add, change, and remove data from tables.

## 1. INSERT INTO

The `INSERT INTO` statement is used to insert new records in a table.

```sql
INSERT INTO Customers (CustomerName, ContactName, Address, City, PostalCode, Country)
VALUES ('Cardinal', 'Tom B. Erichsen', 'Skagen 21', 'Stavanger', '4006', 'Norway');
```

If you are adding values for all the columns of the table, you do not need to specify the column names in the SQL query.

---

## 2. UPDATE

The `UPDATE` statement is used to modify the existing records in a table.

```sql
UPDATE Customers
SET ContactName = 'Alfred Schmidt', City= 'Frankfurt'
WHERE CustomerID = 1;
```

**WARNING**: Be careful when updating records. If you omit the `WHERE` clause, ALL records in the table will be updated!

---

## 3. DELETE

The `DELETE` statement is used to delete existing records in a table.

```sql
DELETE FROM Customers
WHERE CustomerName='Alfreds Futterkiste';
```

**WARNING**: Be careful when deleting records. If you omit the `WHERE` clause, ALL records in the table will be deleted!

---

## 4. DELETE All Records

It is possible to delete all rows in a table without deleting the table. This means that the table structure, attributes, and indexes will be intact.

```sql
DELETE FROM table_name;
```

Alternatively, use `TRUNCATE TABLE`, which is often faster as it doesn't log individual row deletions.

```sql
TRUNCATE TABLE table_name;
```

---

## 5. SQL NULL Values

A field with a NULL value is a field with no value. It is very important to understand that a NULL value is different from a zero value or a field that contains spaces. A field with a NULL value is one that has been left blank during record creation!

- `IS NULL`: To test for empty values.
- `IS NOT NULL`: To test for non-empty values.

```sql
SELECT CustomerName, ContactName, Address
FROM Customers
WHERE Address IS NULL;
```
