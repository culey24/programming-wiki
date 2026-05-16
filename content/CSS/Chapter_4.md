# Chapter 4: CSS Box Model

All HTML elements can be considered as boxes. In CSS, the term "box model" is used when talking about design and layout.

## 1. What is the Box Model?

The CSS box model is essentially a box that wraps around every HTML element. It consists of: margins, borders, padding, and the actual content.

- **Content**: The content of the box, where text and images appear.
- **Padding**: Clears an area around the content. The padding is transparent.
- **Border**: A border that goes around the padding and content.
- **Margin**: Clears an area outside the border. The margin is transparent.

```
+---------------------------------+
|             Margin              |
|  +---------------------------+  |
|  |          Border           |  |
|  |  +---------------------+  |  |
|  |  |      Padding       |  |  |
|  |  |  +---------------+  |  |  |
|  |  |  |    Content    |  |  |  |
|  |  |  +---------------+  |  |  |
|  |  +---------------------+  |  |
|  +---------------------------+  |
+---------------------------------+
```

---

## 2. Width and Height of an Element

When you set the `width` and `height` properties of an element with CSS, you just set the width and height of the **content area**. To calculate the full size of an element, you must also add padding, borders and margins.

### `box-sizing: border-box`
This property allows us to include the padding and border in an element's total width and height. This makes layout much easier!

```css
* { box-sizing: border-box; }
```

---

## 3. Padding

The `padding` properties are used to generate space around an element's content, inside of any defined borders.

```css
div {
  padding-top: 50px;
  padding-right: 30px;
  padding-bottom: 50px;
  padding-left: 80px;
}
```

**Shorthand**: `padding: 50px 30px 50px 80px;` (Top, Right, Bottom, Left)

---

## 4. Margin

The `margin` properties are used to create space around elements, outside of any defined borders.

```css
p {
  margin: 100px; /* All four sides are 100px */
}
```

### Auto Value
You can set the margin property to `auto` to horizontally center the element within its container.

```css
div {
  width: 300px;
  margin: auto;
  border: 3px solid #73AD21;
}
```
