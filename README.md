## Overview
You are tasked with completing the implementation of the `SignUp.vue` component. Below you will find the requirements for the page.

## User Interface Requirements
1. The name input should be automatically focused when loading the page
1. Fields should show an error when any of the validation rules are violated
1. Errors should not appear until one of the following occurs:
   - a `blur` event has occurred for the associated field
   - the "sign up" button has been clicked
1. Only one error message should appear for a field at any given time
1. The "sign up" button should not submit the form if there are errors
1. If a `prefilledEmail` is provided, that should be the initial value of the email input

## Validation Rules
- name
  - required
  - must be at least 3 characters
  - must consist of only letters and whitespace
- email
  - required
  - must be formatted as an email address
  - the domain must consist of at least 2 parts
    - invalid: `test@test`
    - valid: `test@test.test`
- password
  - required
  - must be at least 11 characters
  - must contain at least one of each of the following character groups:
    - lower case letters
    - upper case letters
    - numbers
    - special characters
- confirm password field must match the value of the password field

## [Vue Documentation](https://v2.vuejs.org/v2/guide/)