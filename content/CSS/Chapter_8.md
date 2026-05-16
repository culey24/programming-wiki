# Chapter 8: CSS Grid

The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier to design web pages without having to use floats and positioning.

## 1. Grid Container

To make an HTML element behave as a grid container, you have to set the `display` property to `grid` or `inline-grid`.

```css
.grid-container {
  display: grid;
}
```

---

## 2. Grid Columns and Rows

### `grid-template-columns`
Defines the number of columns in your grid layout, and it can define the width of each column.

```css
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto; /* 3 columns */
}
```

### `grid-template-rows`
Defines the height of each row.

```css
.grid-container {
  display: grid;
  grid-template-rows: 100px 200px;
}
```

---

## 3. Grid Gaps

The spaces between each column/row are called gaps. You can adjust the gap size by using one of the following properties:
- `column-gap`
- `row-gap`
- `gap` (Shorthand for both)

```css
.grid-container {
  display: grid;
  gap: 50px 100px; /* row gap is 50px, column gap is 100px */
}
```

---

## 4. Grid Items

### `grid-column`
Defines on which column(s) to place an item. You can define where the item will start, and where the item will end.

```css
.item1 {
  grid-column: 1 / 3; /* Item starts on column 1 and ends before column 3 */
}
```

### `grid-row`
Defines on which row(s) to place an item.

```css
.item1 {
  grid-row: 1 / 3;
}
```

---

## 5. Grid Area

The `grid-area` property can be used as a shorthand property for the `grid-row-start`, `grid-column-start`, `grid-row-end` and the `grid-column-end` properties.

```css
.item1 {
  grid-area: 1 / 2 / 5 / 6;
}
```

It can also be used to assign names to grid items.

```css
.item1 { grid-area: myArea; }

.grid-container {
  display: grid;
  grid-template-areas: 'myArea myArea . . .';
}
```
