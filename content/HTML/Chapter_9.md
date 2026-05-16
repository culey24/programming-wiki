# Chapter 9: HTML Layout & Summary

Websites often display content in multiple columns (like a magazine or newspaper). HTML has several semantic elements that define the different parts of a web page.

## 1. HTML Layout Elements

- `<header>`: Defines a header for a document or a section.
- `<nav>`: Defines a container for navigation links.
- `<section>`: Defines a section in a document.
- `<article>`: Defines an independent self-contained article.
- `<aside>`: Defines content aside from the content (like a sidebar).
- `<footer>`: Defines a footer for a document or a section.
- `<details>`: Defines additional details.
- `<summary>`: Defines a heading for the `<details>` element.

---

## 2. Techniques to Create Layouts

### HTML Tables (Not Recommended)
The `<table>` element was once used for layouts, but it was not designed for this purpose. Do not use tables for layouts!

### CSS Frameworks
If you want to create your layout quickly, you can use a CSS framework like Bootstrap or Tailwind CSS.

### CSS Floats (Legacy)
Using the CSS `float` property was common for a long time, but it has been replaced by Flexbox and Grid.

### CSS Flexbox
Ensures that elements behave predictably when the page layout must accommodate different screen sizes and display devices.

### CSS Grid
The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier to design web pages without having to use floats and positioning.

---

## 3. HTML Responsive Design

Responsive web design is about creating web pages that look good on all devices (desktops, tablets, and phones). You can make your HTML responsive by using the **viewport** meta tag:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

---

## 4. HTML Summary

Congratulations! You have completed the HTML course. You now know how to:
- Structure a web page using elements and tags.
- Use attributes to provide extra information.
- Format text, create lists, and build tables.
- Add images and hyperlinks.
- Create forms to collect user input.
- Use semantic elements for better structure and SEO.

### What's Next?
The next logical step is to learn **CSS** to style your HTML pages and make them look beautiful.
