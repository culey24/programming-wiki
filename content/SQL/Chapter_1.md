# Chapter 1: SQL Introduction & Basics

SQL stands for **Structured Query Language**. It is the standard language for storing, manipulating, and retrieving data in databases.

## 1. What is SQL?

- SQL lets you access and manipulate databases.
- It became a standard of the American National Standards Institute (ANSI) in 1986, and of the International Organization for Standardization (ISO) in 1987.
- SQL can execute queries against a database, retrieve data, insert records, update records, delete records, and create new databases or tables.

---

## 2. RDBMS

RDBMS stands for **Relational Database Management System**. It is the basis for SQL, and for all modern database systems such as MS SQL Server, IBM DB2, Oracle, MySQL, and Microsoft Access.

The data in RDBMS is stored in database objects called **tables**. A table is a collection of related data entries and it consists of columns and rows.

---

## 3. Basic SQL Commands

Most of the actions you need to perform on a database are done with SQL statements.

- `SELECT`: extracts data from a database.
- `UPDATE`: updates data in a database.
- `DELETE`: deletes data from a database.
- `INSERT INTO`: inserts new data into a database.
- `CREATE DATABASE`: creates a new database.
- `ALTER DATABASE`: modifies a database.
- `CREATE TABLE`: creates a new table.
- `ALTER TABLE`: modifies a table.
- `DROP TABLE`: deletes a table.

---

## 4. SQL Syntax Rules

- SQL is **not** case-sensitive: `SELECT` is the same as `select`.
- Semicolons are the standard way to separate each SQL statement in database systems that allow more than one SQL statement to be executed in the same call to the server.

---

## 5. The SELECT Statement

The `SELECT` statement is used to select data from a database.

```sql
SELECT column1, column2, ...
FROM table_name;
```

If you want to select all the columns available in the table, use the following syntax:

```sql
SELECT * FROM table_name;
```
