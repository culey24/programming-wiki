# Chapter 6: CSS Positioning

The `position` property specifies the type of positioning method used for an element.

## 1. Static Positioning

HTML elements are positioned **static** by default. Static positioned elements are always positioned according to the normal flow of the page.

```css
div.static { position: static; }
```

---

## 2. Relative Positioning

An element with `position: relative;` is positioned relative to its normal position. Setting the `top`, `right`, `bottom`, and `left` properties of a relatively-positioned element will cause it to be adjusted away from its normal position.

```css
div.relative {
  position: relative;
  left: 30px;
  border: 3px solid #73AD21;
}
```

---

## 3. Fixed Positioning

An element with `position: fixed;` is positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled. The `top`, `right`, `bottom`, and `left` properties are used to position the element.

```css
div.fixed {
  position: fixed;
  bottom: 0;
  right: 0;
  width: 300px;
  border: 3px solid #73AD21;
}
```

---

## 4. Absolute Positioning

An element with `position: absolute;` is positioned relative to the nearest positioned ancestor (instead of positioned relative to the viewport, like fixed). However, if an absolute positioned element has no positioned ancestors, it uses the document body.

```css
div.relative {
  position: relative;
  width: 400px;
  height: 200px;
  border: 3px solid #73AD21;
}

div.absolute {
  position: absolute;
  top: 80px;
  right: 0;
  width: 200px;
  height: 100px;
  border: 3px solid #73AD21;
}
```

---

## 5. Sticky Positioning

An element with `position: sticky;` is positioned based on the user's scroll position. A sticky element toggles between relative and fixed, depending on the scroll position.

```css
div.sticky {
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  background-color: green;
  border: 2px solid #4CAF50;
}
```

---

## 6. Z-Index

The `z-index` property specifies the stack order of an element (which element should be placed in front of, or behind, the others). An element with greater stack order is always in front of an element with a lower stack order.

```css
img {
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: -1;
}
```
