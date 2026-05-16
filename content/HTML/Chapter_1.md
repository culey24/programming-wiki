# Chapter 1: HTML Introduction & Structure

HTML stands for **HyperText Markup Language**. It is the standard markup language for creating web pages. HTML describes the structure of a web page semantically.

## 1. What is HTML?

- HTML is not a programming language; it is a **markup language**.
- It consists of a series of **elements**.
- Elements tell the browser how to display the content.
- Elements are represented by **tags**.

---

## 2. A Simple HTML Document

Every HTML page has a basic structure. Here is a minimal example:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Page Title</title>
</head>
<body>

  <h1>My First Heading</h1>
  <p>My first paragraph.</p>

</body>
</html>
```

### Explanation:
- `<!DOCTYPE html>`: Defines that this document is an HTML5 document.
- `<html>`: The root element of an HTML page.
- `<head>`: Contains meta-information about the HTML page (not displayed on the page).
- `<title>`: Specifies a title for the HTML page (shown in the browser's title bar).
- `<body>`: Defines the document's body and contains all the visible content.
- `<h1>`: Defines a large heading.
- `<p>`: Defines a paragraph.

---

## 3. HTML Tags

HTML tags are element names surrounded by angle brackets:

`<tagname>content goes here...</tagname>`

- HTML tags normally come in **pairs** like `<p>` and `</p>`.
- The first tag in a pair is the **start tag**, the second tag is the **end tag**.
- The end tag is written like the start tag, but with a **forward slash** inserted before the tag name.

---

## 4. Web Browsers

The purpose of a web browser (Chrome, Firefox, Safari, Edge) is to read HTML documents and display them correctly. A browser does not display the HTML tags but uses them to determine how to help the document.

---

## 5. HTML History

Since the early days of the World Wide Web, there have been many versions of HTML:
- HTML 1.0 (1991)
- HTML 2.0 (1995)
- HTML 3.2 (1997)
- HTML 4.01 (1999)
- XHTML (2000)
- **HTML5 (2014)** - The current standard.
