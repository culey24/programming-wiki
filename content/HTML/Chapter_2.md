# Chapter 2: HTML Elements & Attributes

HTML elements and attributes are the building blocks of any web page.

## 1. HTML Elements

An HTML **element** is defined by a start tag, some content, and an end tag.

```html
<h1>My Heading</h1>
<p>My paragraph.</p>
```

### Nested Elements
HTML elements can be nested (this means that elements can contain other elements). All HTML documents consist of nested HTML elements.

```html
<body>
  <h1>My Heading</h1>
  <p>My <b>bold</b> paragraph.</p>
</body>
```

### Empty Elements
Some elements do not have any content and no end tag. These are called **empty elements**.

- `<br>`: A line break.
- `<img>`: An image.
- `<hr>`: A horizontal rule.

---

## 2. HTML Attributes

Attributes provide additional information about HTML elements.

- All HTML elements can have attributes.
- Attributes are always specified in the **start tag**.
- Attributes usually come in name/value pairs like: `name="value"`.

### The `href` Attribute
The `<a>` tag defines a hyperlink. The `href` attribute specifies the URL of the page the link goes to:

```html
<a href="https://www.google.com">Visit Google</a>
```

### The `src`, `alt`, `width`, and `height` Attributes
The `<img>` tag is used to embed an image. It uses these attributes:

```html
<img src="img_girl.jpg" alt="Girl in a jacket" width="500" height="600">
```

### The `style` Attribute
The `style` attribute is used to add styles to an element, such as color, font, size, and more.

```html
<p style="color:red;">This is a red paragraph.</p>
```

---

## 3. Global Attributes

Some attributes can be used on any HTML element:

- **`id`**: Specifies a unique id for an element.
- **`class`**: Specifies one or more class names for an element (used in CSS).
- **`title`**: Specifies extra information about an element (displayed as a tooltip).
- **`lang`**: Specifies the language of the element's content.

---

## 4. Single or Double Quotes?

Double quotes around attribute values are the most common in HTML, but single quotes can also be used. In some situations, when the attribute value itself contains double quotes, it is necessary to use single quotes:

```html
<p title='John "Shotgun" Nelson'>
```
