# Chapter 8: SQL Constraints & Indexes

Constraints are used to specify rules for the data in a table. Indexes are used to retrieve data from the database more quickly than otherwise.

## 1. SQL Constraints

Constraints can be specified when the table is created with the `CREATE TABLE` statement, or after the table is created with the `ALTER TABLE` statement.

Common Constraints:
- `NOT NULL`: Ensures that a column cannot have a NULL value.
- `UNIQUE`: Ensures that all values in a column are different.
- `PRIMARY KEY`: A combination of a `NOT NULL` and `UNIQUE`. Uniquely identifies each row in a table.
- `FOREIGN KEY`: Uniquely identifies a row/record in another table.
- `CHECK`: Ensures that all values in a column satisfies a specific condition.
- `DEFAULT`: Sets a default value for a column when no value is specified.

```sql
CREATE TABLE Persons (
    ID int NOT NULL,
    LastName varchar(255) NOT NULL,
    Age int,
    PRIMARY KEY (ID),
    CHECK (Age>=18)
);
```

---

## 2. PRIMARY KEY vs. UNIQUE

- Both ensure uniqueness.
- A table can have multiple `UNIQUE` constraints but only **one** `PRIMARY KEY`.
- `PRIMARY KEY` does not allow NULLs; `UNIQUE` usually allows one NULL.

---

## 3. FOREIGN KEY

A `FOREIGN KEY` is a key used to link two tables together. It is a field (or collection of fields) in one table, that refers to the `PRIMARY KEY` in another table.

```sql
CREATE TABLE Orders (
    OrderID int NOT NULL,
    OrderNumber int NOT NULL,
    PersonID int,
    PRIMARY KEY (OrderID),
    FOREIGN KEY (PersonID) REFERENCES Persons(PersonID)
);
```

---

## 4. CREATE INDEX

The `CREATE INDEX` statement is used to create indexes in tables. Indexes allow the database application to find data fast; without reading the whole table.

```sql
CREATE INDEX idx_lastname
ON Persons (LastName);
```

**Note**: Updating a table with indexes takes more time than updating a table without (because the indexes also need an update). So, only create indexes on columns that will be frequently searched against.

---

## 5. AUTO INCREMENT

Auto-increment allows a unique number to be generated automatically when a new record is inserted into a table. Often this is the primary key field that we would like to be created automatically every time a new record is inserted.

```sql
-- MySQL syntax
ID int NOT NULL AUTO_INCREMENT
```
