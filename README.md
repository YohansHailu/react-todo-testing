
# Component Testing Plan and documentation

Hello and wellcome, Welcome to the testing documentation for Todo app in react

Tools used are jest and RTL

## Table of Contents

- [Footer Component Testing](#footer-component-testing)
- [Input Component Testing](#input-component-testing)
- [Item Component Testing](#item-component-testing)
- [Main Component Testing](#main-component-testing)
- [Header Component Testing](#header-component-testing)


# Footer Component Testing

This document explains the tests written for the Footer component.

## Test 1: Footer component renders correctly with active todos count

### Description
Ensure that the Footer component renders with the correct count of active todos.

### Steps
Render Footer component, retrieve footer element and active todos count element, calculate active todos count, assert footer element presence, assert correct text in active todos count element.

## Test 2: Footer component dispatches remove completed action when clear completed button is clicked

### Description
Verify that the Footer component dispatches the appropriate action when "Clear completed" button is clicked.

### Steps
Render Footer component, retrieve "Clear completed" button, simulate click on "Clear completed" button, assert dispatch function called with correct action.

## Test 3: Footer component changes route URL when all, active and completed buttons are clicked

### Description
Ensure clicking on filter buttons updates route URL correctly.

### Steps
Render Footer component, simulate clicks on "All", "Active", and "Completed" buttons, assert correct URL after each click.

# Input Component Testing

## Test 1: Renders input field with placeholder and label

### Description
Ensure that the Input component renders with the correct placeholder, label, and accessibility attributes.

### Steps
Render Input component with specified placeholder and label, assert presence of placeholder text, text input element, and label.

## Test 2: Calls onSubmit when Enter key is pressed with valid input

### Description
Verify that the onSubmit callback is called when the Enter key is pressed with valid input.

### Steps
Render Input component with onSubmit callback, simulate input change with valid value, simulate pressing Enter key, assert onSubmit callback called with valid input.

## Test 3: Does not call onSubmit when Enter key is pressed with invalid input

### Description
Ensure that the onSubmit callback is not called when the Enter key is pressed with invalid input.

### Steps
Render Input component with onSubmit callback, simulate input change with invalid value, simulate pressing Enter key, assert onSubmit callback not called.

## Test 4: Calls onBlur callback when input loses focus

### Description
Verify that the onBlur callback is called when the input element loses focus.

### Steps
Render Input component with onBlur callback, simulate blur event on input element, assert onBlur callback called.

## Test 5: Does not call onSubmit when input loses focus without pressing Enter key

### Description
Ensure that the onSubmit callback is not called when the input element loses focus without pressing Enter key.

### Steps
Render Input component with onSubmit callback, simulate blur event on input element, assert onSubmit callback not called.

## Test 6: Does not call onSubmit when Enter key is pressed with empty input

### Description
Ensure that the onSubmit callback is not called when the Enter key is pressed with an empty input.

### Steps
Render Input component with onSubmit callback, simulate pressing Enter key on empty input, assert onSubmit callback not called.


# Item Component Testing

## Test 1: Renders todo item correctly

### Description
Ensure that the Item component renders the todo item with the correct title, toggle button, and remove button.

### Steps
Render Item component with a todo item, assert presence of todo title, todo item toggle button, and todo item remove button.

## Test 2: Toggles todo item completion

### Description
Verify that the toggle button in the Item component toggles the completion status of the todo item.

### Steps
Render Item component with a todo item, simulate click on todo item toggle button, assert dispatch function called with correct action.

## Test 3: Removes todo item

### Description
Ensure that clicking the remove button in the Item component dispatches the action to remove the todo item.

### Steps
Render Item component with a todo item, simulate click on todo item remove button, assert dispatch function called with correct action.

## Test 4: Allows editing todo item

### Description
Verify that double-clicking on the todo item label in the Item component allows editing.

### Steps
Render Item component with a todo item, simulate double-click on todo item label, assert presence of editable input field.


# Main Component Testing

## Test 1: Renders all todo tasks in route #/

### Description
Ensure that all todo tasks are rendered when the route is "#/".

### Steps
Render Main component without specifying a route, assert current window location hash, assert presence of todo list, and check if the number of rendered todo items matches the number of todos in the state.

## Test 2: Renders active todo in #/active

### Description
Ensure that only active todo tasks are rendered when the route is "#/active".

### Steps
Render Main component with route "#/active", assert current window location hash, assert presence of todo list, and check if the number of rendered active todo items matches the number of active todos in the state.

## Test 3: Renders completed tasks in #/completed

### Description
Ensure that only completed todo tasks are rendered when the route is "#/completed".

### Steps
Render Main component with route "#/completed", assert current window location hash, assert presence of todo list, and check if the number of rendered completed todo items matches the number of completed todos in the state.

## Test 4: Toggle all is visible in #/active when there are active todos and working

### Description
Verify that the "Toggle all" checkbox is visible in the "#/active" route when there are active todos and functional.

### Steps
Render Main component with route "#/active", assert current window location hash, assert presence of "Toggle all" checkbox, simulate click on "Toggle all" checkbox, and assert that the dispatch function is called with the correct action.

## Test 5: Toggle all is not visible when there are no todos

### Description
Ensure that the "Toggle all" checkbox is not visible when there are no todos.

### Steps
Render Main component with an empty todos array, assert absence of "Toggle all" checkbox.



# Header Component Testing

## Test: Renders with correct title

### Description
Ensure that the Header component renders with the correct title and elements.

### Steps
Render the Header component.
Assert the presence of the header element.
Assert that the text "Todos" is present.
Assert that the text "New Todo Input" is present.
