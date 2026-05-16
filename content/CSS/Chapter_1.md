# Chapter 1: CSS Introduction & Syntax

CSS stands for **Cascading Style Sheets**. It describes how HTML elements are to be displayed on screen, paper, or in other media.

## 1. What is CSS?

- CSS saves a lot of work. It can control the layout of multiple web pages all at once.
- External stylesheets are stored in CSS files.
- With CSS, you can define styles for your web pages, including the design, layout, and variations in display for different devices and screen sizes.

---

## 2. CSS Syntax

A CSS rule-set consists of a selector and a declaration block:

`selector { property: value; }`

- The **selector** points to the HTML element you want to style.
- The **declaration block** contains one or more declarations separated by semicolons.
- Each declaration includes a CSS **property** name and a **value**, separated by a colon.

```css
h1 {
  color: blue;
  font-size: 12px;
}
```

In this example, all `<h1>` elements will be blue and have a font size of 12px.

---

## 3. How to Add CSS

There are three ways of inserting a style sheet:

### External CSS
With an external style sheet, you can change the look of an entire website by changing just one file!

```html
<link rel="stylesheet" href="mystyle.css">
```

### Internal CSS
An internal style sheet may be used if one single HTML page has a unique style.

```html
<style>
body {
  background-color: linen;
}
</style>
```

### Inline CSS
An inline style may be used to apply a unique style for a single element.

```html
<h1 style="color:blue;">A Blue Heading</h1>
```

---

## 4. CSS Comments

Comments are used to explain the code and may help when you edit the source code at a later date. Comments are ignored by browsers.

A CSS comment starts with `/*` and ends with `*/`:

```css
/* This is a single-line comment */
p {
  color: red;
}
```

---

## 5. CSS Cascading Order

What style will be used when there is more than one style specified for an HTML element?
Generally speaking, we can say that all the styles will "cascade" into a new "virtual" style sheet by the following rules:
1. Inline style (inside an HTML element).
2. External and internal style sheets (in the head section).
3. Browser default.

So, an inline style has the highest priority and will override external and internal styles.
