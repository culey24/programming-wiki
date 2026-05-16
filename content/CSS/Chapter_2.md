# Chapter 2: CSS Selectors & Combinators

CSS selectors are used to "find" (or select) the HTML elements you want to style.

## 1. Simple Selectors

### Element Selector
Selects elements based on the element name.

```css
p { text-align: center; color: red; }
```

### Id Selector
Uses the `id` attribute of an HTML element to select a specific element. An id is unique within a page. To select an element with a specific id, write a hash (`#`) character, followed by the id of the element.

```css
#para1 { text-align: center; color: red; }
```

### Class Selector
Selects HTML elements with a specific `class` attribute. To select elements with a specific class, write a period (`.`) character, followed by the name of the class.

```css
.center { text-align: center; color: red; }
```

### Universal Selector
Selects all HTML elements on the page.

```css
* { text-align: center; color: blue; }
```

### Grouping Selector
Selects all the HTML elements with the same style definitions.

```css
h1, h2, p { text-align: center; color: red; }
```

---

## 2. Combinators

A combinator is something that explains the relationship between the selectors.

### Descendant Selector (`space`)
Matches all elements that are descendants of a specified element.

```css
div p { background-color: yellow; } /* All <p> inside <div> */
```

### Child Selector (`>`)
Matches all elements that are children of a specified element.

```css
div > p { background-color: yellow; } /* Only direct <p> children of <div> */
```

### Adjacent Sibling Selector (`+`)
Matches an element that is directly after another specific element.

```css
div + p { background-color: yellow; } /* <p> immediately after <div> */
```

---

## 3. Pseudo-classes

A pseudo-class is used to define a special state of an element.

```css
/* mouse over link */
a:hover { color: #FF00FF; }

/* selected link */
a:active { color: #0000FF; }
```

---

## 4. Pseudo-elements

A pseudo-element is used to style specified parts of an element.

```css
/* Style the first letter of every <p> element */
p::first-letter { color: #ff0000; font-size: xx-large; }
```
