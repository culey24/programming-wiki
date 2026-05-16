# Chapter 8: HTML Semantic Elements

Semantic elements are elements with a meaning.

## 1. What are Semantic Elements?

A semantic element clearly describes its meaning to both the browser and the developer.

- **Non-semantic** elements: `<div>` and `<span>` - Tells nothing about its content.
- **Semantic** elements: `<form>`, `<table>`, and `<article>` - Clearly defines its content.

---

## 2. Why Semantic Elements?

- **Accessibility**: Screen readers can use these tags to help disabled users navigate your site.
- **SEO**: Search engines give higher priority to content within semantic tags.
- **Maintainability**: Makes code easier to read and understand.

---

## 3. Common Semantic Elements

### `<header>`
Represents a container for introductory content or a set of navigational links.

### `<nav>`
Defines a set of navigation links.

### `<main>`
Specifies the main content of a document. There should be only one `<main>` element per page.

### `<section>`
Defines a section in a document (e.g., chapters, introduction, news items).

### `<article>`
Defines independent, self-contained content (e.g., blog posts, newspaper articles).

### `<aside>`
Defines content aside from the content it is placed in (like a sidebar).

### `<footer>`
Defines a footer for a document or section.

---

## 4. Figure and Figcaption

The `<figure>` tag specifies self-contained content, like illustrations, diagrams, photos, code listings, etc. The `<figcaption>` tag defines a caption for a `<figure>` element.

```html
<figure>
  <img src="pic_trulli.jpg" alt="Trulli" style="width:100%">
  <figcaption>Fig.1 - Trulli, Puglia, Italy.</figcaption>
</figure>
```

---

## 5. Details and Summary

The `<details>` tag specifies additional details that the user can open and close on demand. The `<summary>` tag defines a visible heading for the `<details>` element.

```html
<details>
  <summary>Click to show more</summary>
  <p>Epcot is a theme park at Walt Disney World Resort...</p>
</details>
```
