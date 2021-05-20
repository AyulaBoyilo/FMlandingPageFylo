# Frontend Mentor - Fylo landing page with two column layout solution

This is a solution to the [Fylo landing page with two column layout challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/fylo-landing-page-with-two-column-layout-5ca5ef041e82137ec91a50f5). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [How I did it](#how-i-did-it)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for all interactive elements on the page
- Validate forms

### Screenshot

![](./design/active-states.jpg)

### Links

- Solution URL: [GitHub repository](https://github.com/AyulaBoyilo/FMlandingPageFylo/)
- Live Site URL: [GitHub Pages](https://ayulaboyilo.github.io/FMlandingPageFylo/)

## My process

### Built with

- Semantic HTML5 markup
- SCSS and CSS3
- CSS Flexbox
- JavaScript

### How I did it

Avoided html email type validation so the default alerts are not triggered. Used a simple email validation using onsubmit in the form to display an alert specified in the design. If statement within validation checks whether the alert is already displayed to avoid duplication.

The second sign-up form has independent validation.

```html
<form onsubmit="return validateEmail();">
  <input
    type="text"
    name="email"
    id="email"
    placeholder="Enter your email..."
  />
  <button class="btn">Get Started</button>
</form>
```

```js
function validateEmail() {
  let emailString = document.querySelector("#email").value;

  if (emailString.includes("@")) {
    document.querySelector("#email").style.borderColor = "#000";
    document.querySelector("#email").innerText = "";
    return true;
  } else {
    if (document.querySelector(".alert")) {
      document.querySelector(".alert").remove();
    }

    document.querySelector("#email").style.borderColor = "#d37fb7";
    document
      .querySelector("#email")
      .insertAdjacentHTML(
        "afterend",
        '<span class="alert">Please check your email</span>'
      );
    return false;
  }
}
```

### Useful resources

- [Client-side form validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation) - MDN Client-side form validation

## Author

- Ayula Boyilo
