# Chapter 7: SQL Table Management

These commands (DDL - Data Definition Language) allow you to create and manage the structure of your database.

## 1. CREATE DATABASE

The `CREATE DATABASE` statement is used to create a new SQL database.

```sql
CREATE DATABASE testDB;
```

---

## 2. DROP DATABASE

The `DROP DATABASE` statement is used to drop an existing SQL database.

```sql
DROP DATABASE testDB;
```

---

## 3. CREATE TABLE

The `CREATE TABLE` statement is used to create a new table in a database.

```sql
CREATE TABLE Persons (
    PersonID int,
    LastName varchar(255),
    FirstName varchar(255),
    Address varchar(255),
    City varchar(255)
);
```

---

## 4. DROP TABLE

The `DROP TABLE` statement is used to drop an existing table in a database.

```sql
DROP TABLE Persons;
```

---

## 5. ALTER TABLE

The `ALTER TABLE` statement is used to add, delete, or modify columns in an existing table.

### Add Column
```sql
ALTER TABLE Customers
ADD Email varchar(255);
```

### Drop Column
```sql
ALTER TABLE Customers
DROP COLUMN Email;
```

### Modify Column (Syntax varies by database)
```sql
-- For SQL Server / MS Access:
ALTER TABLE Persons
ALTER COLUMN DateOfBirth year;

-- For MySQL / Oracle:
ALTER TABLE Persons
MODIFY COLUMN DateOfBirth year;
```

---

## 6. Common Data Types

- `INT`: Integer
- `VARCHAR(size)`: Variable-length string
- `TEXT`: Long string
- `DATE`: YYYY-MM-DD
- `DATETIME`: YYYY-MM-DD HH:MI:SS
- `DECIMAL(p,s)`: Exact numeric
- `BOOLEAN`: true / false
