# Chapter 5: HTML Links & Images

Links and images are essential for creating an interactive and visually appealing web experience.

## 1. HTML Hyperlinks

HTML links are hyperlinks. You can click on a link and jump to another document.

### Syntax
```html
<a href="url">link text</a>
```

- `href`: Specifies the destination address.
- `target`: Specifies where to open the linked document.
  - `_self`: (Default) Opens in the same window/tab.
  - `_blank`: Opens in a new window/tab.

```html
<a href="https://www.google.com" target="_blank">Open Google in New Tab</a>
```

---

## 2. HTML Images

Images are not technically inserted into a web page; images are linked to web pages. The `<img>` tag creates a holding space for the referenced image.

### Syntax
```html
<img src="url" alt="description" width="500" height="600">
```

- `src`: Specifies the path to the image.
- `alt`: Specifies an alternate text for an image, if the image cannot be displayed.
- `width` and `height`: Specify the size of the image.

---

## 3. Image Map

An image map allows you to create clickable areas on an image.

```html
<img src="workplace.jpg" alt="Workplace" usemap="#workmap">

<map name="workmap">
  <area shape="rect" coords="34,44,270,350" alt="Computer" href="computer.htm">
  <area shape="circle" coords="337,300,44" alt="Cup" href="coffee.htm">
</map>
```

---

## 4. Favicon

A favicon is a small image displayed next to the page title in the browser tab.

```html
<link rel="icon" type="image/x-icon" href="/images/favicon.ico">
```

---

## 5. The Picture Element

The `<picture>` element gives web developers more flexibility in specifying image resources.

```html
<picture>
  <source media="(min-width: 650px)" srcset="img_food.jpg">
  <source media="(min-width: 465px)" srcset="img_car.jpg">
  <img src="img_girl.jpg" alt="Flowers" style="width:auto;">
</picture>
```

The browser will use the first `<source>` element with matching attribute values, and ignore any following elements.
