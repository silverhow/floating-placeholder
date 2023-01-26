# Floating Placeholder

A simple javascript package allows to show/hide a label during input to a text field to always show a placeholder.

## Installation

`npm install floating-placeholder`

## Usage

This package adds `active` class to your `<label>` element then `<input>` isn't empty and remove `active` class otherwise.

```html
<div>
  <label for="input">Name</label>
  <input type="text" id="input" placeholder="Name">
</div>
```

```javascript
import FloatingPlaceholder from 'floating-placeholder';

new FloatingPlaceholder( {
  element: document.getElementById( 'input' ), // required
  activeClass: "active" // "active" by default
} );
```

The package only adds `active` class, so you can style it however you want. 

```css
label {
  opacity: 0;
  display: block;
  transition: opacity .3s;
}

label.active {
  opacity: 1;
}
```
### Mass applying by selector

```html
<div>
  <label for="input">Name</label>
  <input type="text" id="input" placeholder="Name">
</div>
<div>
  <label for="textarea">Message</label>
  <textarea id="textarea" placeholder="Message"></textarea>
</div>
```
```javascript
import FloatingPlaceholder from 'floating-placeholder';

let elements = document.querySelectorAll('input, textarea');

elements.forEach( el => new FloatingPlaceholder({
  element: el
}) );
```
