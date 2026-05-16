# Chapter 3: HTML Headings, Paragraphs & Formatting

This chapter explains how to structure text content in HTML.

## 1. HTML Headings

HTML headings are defined with the `<h1>` to `<h6>` tags.
`<h1>` defines the most important heading. `<h6>` defines the least important heading.

```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
```

> **Important:** Use HTML headings for headings only. Don't use headings to make text **BIG** or **bold**. Search engines use headings to index the structure and content of your web pages.

---

## 2. HTML Paragraphs

The HTML `<p>` element defines a paragraph.

```html
<p>This is a paragraph.</p>
<p>This is another paragraph.</p>
```

Browsers automatically add some white space (a margin) before and after a paragraph.

---

## 3. HTML Display

You cannot be sure how HTML will be displayed. Large or small screens, and resized windows will create different results. With HTML, you cannot change the display by adding extra spaces or extra lines in your HTML code. The browser will remove any extra spaces and extra lines when the page is displayed.

---

## 4. HTML Text Formatting

HTML contains several elements for defining text with a special meaning.

### Bold and Italic
- `<b>`: Bold text (without extra importance).
- `<strong>`: Important text (displayed as bold).
- `<i>`: Italic text.
- `<em>`: Emphasized text (displayed as italic).

```html
<p>This text is <b>bold</b>.</p>
<p>This text is <strong>important</strong>.</p>
```

### Other Formatting Elements
- `<mark>`: Marked/Highlighted text.
- `<small>`: Smaller text.
- `<del>`: Deleted/Struck-through text.
- `<ins>`: Inserted/Underlined text.
- `<sub>`: Subscript text.
- `<sup>`: Superscript text.

```html
<p>Do not forget to buy <mark>milk</mark> today.</p>
<p>This is <sub>subscript</sub> and <sup>superscript</sup>.</p>
```
