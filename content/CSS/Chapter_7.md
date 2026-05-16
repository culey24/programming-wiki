# Chapter 7: CSS Flexbox

The Flexbox Layout (Flexible Box) module makes it easier to design flexible responsive layout structure without using float or positioning.

## 1. Flex Container

To start using the Flexbox model, you need to first define a flex container.

```css
.flex-container {
  display: flex;
}
```

---

## 2. Flexbox Properties (Parent/Container)

### `flex-direction`
Defines in which direction the container wants to stack the flex items.
- `row` (default): horizontal from left to right.
- `row-reverse`: horizontal from right to left.
- `column`: vertical from top to bottom.
- `column-reverse`: vertical from bottom to top.

### `justify-content`
Used to align the flex items horizontally.
- `flex-start` (default): items at the beginning of the container.
- `flex-end`: items at the end of the container.
- `center`: items at the center of the container.
- `space-between`: items with space between the lines.
- `space-around`: items with space before, between, and after the lines.

### `align-items`
Used to align the flex items vertically.
- `stretch` (default): items stretch to fill the container.
- `center`: items in the middle of the container.
- `flex-start`: items at the top of the container.
- `flex-end`: items at the bottom of the container.

---

## 3. Flexbox Properties (Child/Items)

### `flex-grow`
Specifies how much a flex item will grow relative to the rest of the flex items.

### `flex-shrink`
Specifies how much a flex item will shrink relative to the rest of the flex items.

### `flex-basis`
Specifies the initial length of a flex item.

### `align-self`
Specifies the alignment for the selected item inside the flexible container (overrides the `align-items` property).

---

## 4. Example: Centering Everything

Flexbox is famous for how easily it can center elements both horizontally and vertically.

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
}
```
