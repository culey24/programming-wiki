# Chapter 4: HTML Lists

HTML lists allow web developers to group a set of related items in lists.

## 1. Unordered HTML List

An unordered list starts with the `<ul>` tag. Each list item starts with the `<li>` tag. The list items will be marked with bullets (small black circles) by default.

```html
<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>
```

---

## 2. Ordered HTML List

An ordered list starts with the `<ol>` tag. Each list item starts with the `<li>` tag. The list items will be marked with numbers by default.

```html
<ol>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ol>
```

### The `type` Attribute
The `type` attribute of the `<ol>` tag defines the type of the list item marker:
- `type="1"`: Numbers (default)
- `type="A"`: Uppercase letters
- `type="a"`: Lowercase letters
- `type="I"`: Uppercase roman numbers
- `type="i"`: Lowercase roman numbers

---

## 3. HTML Description Lists

A description list is a list of terms, with a description of each term.
- `<dl>`: Defines the description list.
- `<dt>`: Defines the term (name).
- `<dd>`: Describes each term.

```html
<dl>
  <dt>Coffee</dt>
  <dd>- black hot drink</dd>
  <dt>Milk</dt>
  <dd>- white cold drink</dd>
</dl>
```

---

## 4. Nested HTML Lists

Lists can be nested (list inside a list).

```html
<ul>
  <li>Coffee</li>
  <li>Tea
    <ul>
      <li>Black tea</li>
      <li>Green tea</li>
    </ul>
  </li>
  <li>Milk</li>
</ul>
```

---

## 5. List Style Type (CSS)

You can use the CSS property `list-style-type` to define the style of the list item marker.

```html
<ul style="list-style-type:square;">
  <li>Coffee</li>
  <li>Tea</li>
</ul>
```

Common values: `disc`, `circle`, `square`, `none`.
