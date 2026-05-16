# Chapter 7: HTML Forms & Inputs

An HTML form is used to collect user input. The user input is most often sent to a server for processing.

## 1. The `<form>` Element

The HTML `<form>` element is used to create an HTML form for user input.

```html
<form action="/action_page.php" method="get">
  <!-- form elements -->
</form>
```

- `action`: Defines the action to be performed when the form is submitted.
- `method`: Specifies the HTTP method to be used when submitting the form data (`GET` or `POST`).

---

## 2. The `<input>` Element

The HTML `<input>` element is the most used form element. It can be displayed in many ways, depending on the `type` attribute.

### Text Input
```html
<label for="fname">First name:</label><br>
<input type="text" id="fname" name="fname" value="John">
```

### Radio Buttons
```html
<input type="radio" id="html" name="fav_language" value="HTML">
<label for="html">HTML</label><br>
<input type="radio" id="css" name="fav_language" value="CSS">
<label for="css">CSS</label>
```

### Checkboxes
```html
<input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
<label for="vehicle1"> I have a bike</label><br>
```

### Submit Button
```html
<input type="submit" value="Submit">
```

---

## 3. The `<label>` Element

The `<label>` element defines a label for several form elements. It is useful for screen-reader users and also makes it easier for users to click the input. The `for` attribute of the `<label>` tag should be equal to the `id` attribute of the `<input>` element.

---

## 4. Other Form Elements

### `<select>` (Drop-down list)
```html
<label for="cars">Choose a car:</label>
<select id="cars" name="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="fiat">Fiat</option>
  <option value="audi">Audi</option>
</select>
```

### `<textarea>` (Multi-line input)
```html
<textarea name="message" rows="10" cols="30">
The cat was playing in the garden.
</textarea>
```

---

## 5. Input Attributes

- `value`: Specifies an initial value for an input field.
- `readonly`: Specifies that an input field is read-only.
- `disabled`: Specifies that an input field should be disabled.
- `size`: Specifies the visible width, in characters, for an input field.
- `maxlength`: Specifies the maximum number of characters allowed in an input field.
- `required`: Specifies that an input field must be filled out before submitting the form.
