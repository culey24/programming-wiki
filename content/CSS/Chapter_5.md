# Chapter 5: CSS Text & Typography

This chapter explains how to style text, including fonts, colors, alignment, and more.

## 1. Text Color and Alignment

### Text Color
The `color` property is used to set the color of the text.

```css
body { color: blue; }
```

### Text Alignment
The `text-align` property is used to set the horizontal alignment of a text.
Values: `left`, `right`, `center`, `justify`.

```css
h1 { text-align: center; }
```

---

## 2. Text Decoration and Transformation

### Text Decoration
The `text-decoration` property is used to set or remove decorations from text.

```css
a { text-decoration: none; } /* Remove underline from links */
h1 { text-decoration: underline; }
```

### Text Transformation
The `text-transform` property is used to specify uppercase and lowercase letters in a text.
Values: `uppercase`, `lowercase`, `capitalize`.

```css
p { text-transform: uppercase; }
```

---

## 3. Fonts

### Font Family
The `font-family` property specifies the font for an element. It should hold several font names as a "fallback" system.

```css
p { font-family: "Times New Roman", Times, serif; }
```

### Font Style and Weight
- `font-style`: Mostly used to specify italic text.
- `font-weight`: Specifies the weight of a font (e.g., `normal`, `bold`).

```css
p { font-style: italic; font-weight: bold; }
```

### Font Size
The `font-size` property sets the size of the text.
- `px` (Pixels): Fixed size.
- `em`: Relative to the font-size of the element (1em is the current font size).
- `rem`: Relative to the root element (`<html>`) font size.

---

## 4. Line Height and Letter Spacing

- `line-height`: Specifies the space between lines.
- `letter-spacing`: Specifies the space between characters in a text.

```css
p {
  line-height: 1.6;
  letter-spacing: 2px;
}
```

---

## 5. Google Fonts

If you do not want to use any of the standard fonts in HTML, you can use Google Fonts. Just add a link in the `<head>` section and refer to the font name in CSS.

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sofia">
<style>
body { font-family: "Sofia", sans-serif; }
</style>
```
