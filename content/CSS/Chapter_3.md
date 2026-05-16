# Chapter 3: CSS Colors, Backgrounds & Borders

This chapter covers how to apply visual styles to elements using colors, backgrounds, and borders.

## 1. CSS Colors

Colors are specified using predefined color names, or RGB, HEX, HSL, RGBA, HSLA values.

```css
h1 { color: Tomato; }
p { color: #ff6347; }
div { color: rgb(255, 99, 71); }
```

### Background Color
You can set the background color for any HTML element:

```css
body { background-color: lightblue; }
```

---

## 2. CSS Backgrounds

The CSS background properties are used to add background effects for elements.

- `background-image`: Specifies an image to use as the background of an element.
- `background-repeat`: Sets if/how a background image will be repeated.
- `background-size`: Specifies the size of the background images.
- `background-position`: Sets the starting position of a background image.

```css
body {
  background-image: url("img_tree.png");
  background-repeat: no-repeat;
  background-position: right top;
}
```

---

## 3. CSS Borders

The CSS border properties allow you to specify the style, width, and color of an element's border.

### Border Style
The `border-style` property specifies what kind of border to display.
Values: `dotted`, `dashed`, `solid`, `double`, `none`.

```css
p {
  border-style: solid;
  border-width: 5px;
  border-color: red;
}
```

### Border Shorthand
You can also specify all the individual border properties in one property.

```css
p { border: 5px solid red; }
```

### Rounded Borders
The `border-radius` property is used to add rounded borders to an element:

```css
p {
  border: 2px solid red;
  border-radius: 5px;
}
```

---

## 4. Opacity

The `opacity` property specifies the opacity/transparency of an element. It can take a value from 0.0 to 1.0. The lower value, the more transparent.

```css
img { opacity: 0.5; }
```
