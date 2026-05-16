# Chapter 9: CSS Responsive Design & Summary

Responsive Web Design is about using HTML and CSS to automatically resize, hide, shrink, or enlarge a website, to make it look good on all devices (desktops, tablets, and phones).

## 1. The Viewport

The viewport is the user's visible area of a web page. It varies with the device, and will be smaller on a mobile phone than on a computer screen. You should include the following `<meta>` viewport element in all your web pages:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

---

## 2. Media Queries

Media queries are the most popular method for creating a responsive website. They allow you to define different styles for different browser sizes.

```css
/* If screen size is 600px or less, set the background color to olive */
@media only screen and (max-width: 600px) {
  body {
    background-color: olive;
  }
}
```

---

## 3. Responsive Images and Videos

Images and videos can be made responsive by setting their `width` to `100%` and `height` to `auto`.

```css
img {
  max-width: 100%;
  height: auto;
}
```

---

## 4. Responsive Grid and Flexbox

Both Grid and Flexbox are inherently good for responsive design. For example, using `grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));` will automatically adjust the number of columns based on the available space.

---

## 5. CSS Summary

Congratulations! You have completed the CSS course. You now know how to:
- Use selectors to target HTML elements.
- Apply colors, backgrounds, and borders.
- Understand and use the Box Model (padding, margins, borders).
- Style text and use custom fonts.
- Position elements using static, relative, absolute, fixed, and sticky.
- Build modern layouts using Flexbox and Grid.
- Create responsive websites using Media Queries.

### What's Next?
Now that you know how to build and style web pages, the next step is to learn **JavaScript** to make them interactive and dynamic!
