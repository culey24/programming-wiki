# Chapter 6: HTML Tables

HTML tables allow web developers to arrange data into rows and columns.

## 1. Simple HTML Table

An HTML table is defined with the `<table>` tag.
- Each table row is defined with a `<tr>` tag.
- Each table header is defined with a `<th>` tag. By default, table headings are bold and centered.
- Each table data/cell is defined with a `<td>` tag.

```html
<table>
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
</table>
```

---

## 2. Table Borders

To add borders, use the CSS `border` property.

```html
<style>
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}
</style>
```

---

## 3. Table Headers

Table headers can be used for rows or columns.

### Vertical Table Headers
```html
<table>
  <tr>
    <th>First Name:</th>
    <td>Bill</td>
  </tr>
  <tr>
    <th>Last Name:</th>
    <td>Gates</td>
  </tr>
</table>
```

---

## 4. Cell Spanning

An HTML cell can span multiple rows or columns.

### Colspan
Use the `colspan` attribute to make a cell span more than one column.

```html
<th colspan="2">Name</th>
```

### Rowspan
Use the `rowspan` attribute to make a cell span more than one row.

```html
<th rowspan="2">Phone</th>
```

---

## 5. Table Caption

You can add a caption to your table using the `<caption>` tag.

```html
<table>
  <caption>Monthly Savings</caption>
  <tr>
    <th>Month</th>
    <th>Savings</th>
  </tr>
  <tr>
    <td>January</td>
    <td>$100</td>
  </tr>
</table>
```
