## Component Testing Plan and documentation

Hello and wellcome, Welcome to the testing documentation for Todo app in react

Tools used are jest and RTL

## Footer Component Testing
<details>
<summary>Click to expand</summary>
  
  ### Test 1: Footer component renders correctly with active todos count
  Ensure that the Footer component renders with the correct count of active todos.
  Render Footer component, retrieve footer element and active todos count element, calculate active todos count, assert footer element presence, assert correct text in active todos count element.
  <br/>

  ### Test 2: Footer component dispatches remove completed action when clear completed button is clicked
  Verify that the Footer component dispatches the appropriate action when "Clear completed" button is clicked.
  Render Footer component, retrieve "Clear completed" button, simulate click on "Clear completed" button, assert dispatch function called with correct action.
   <br/>

  ### Test 3: Footer component changes route URL when all, active and completed buttons are clicked
  Ensure clicking on filter buttons updates route URL correctly.
  Render Footer component, simulate clicks on "All", "Active", and "Completed" buttons, assert correct URL after each click.
  <br/>
</details>

## Input Component Testing
<details>
<summary>Click to expand</summary>
  
### Test 1: Renders input field with placeholder and label
Ensure that the Input component renders with the correct placeholder, label, and accessibility attributes.
Render Input component with specified placeholder and label, assert presence of placeholder text, text input element, and label.
<br/>

### Test 2: Calls onSubmit when Enter key is pressed with valid input
Verify that the onSubmit callback is called when the Enter key is pressed with valid input.
Render Input component with onSubmit callback, simulate input change with valid value, simulate pressing Enter key, assert onSubmit callback called with valid input.
<br/>

### Test 3: Does not call onSubmit when Enter key is pressed with invalid input
Ensure that the onSubmit callback is not called when the Enter key is pressed with invalid input.
Render Input component with onSubmit callback, simulate input change with invalid value, simulate pressing Enter key, assert onSubmit callback not called.
<br/>

### Test 4: Calls onBlur callback when input loses focus
Verify that the onBlur callback is called when the input element loses focus.
Render Input component with onBlur callback, simulate blur event on input element, assert onBlur callback called.
<br/>

### Test 5: Does not call onSubmit when input loses focus without pressing Enter key
Ensure that the onSubmit callback is not called when the input element loses focus without pressing Enter key.
Render Input component with onSubmit callback, simulate blur event on input element, assert onSubmit callback not called.
<br/>

### Test 6: Does not call onSubmit when Enter key is pressed with empty input
Ensure that the onSubmit callback is not called when the Enter key is pressed with an empty input.
Render Input component with onSubmit callback, simulate pressing Enter key on empty input, assert onSubmit callback not called.
<br/>

</details>

## Item Component Testing

<details>
<summary>Click to expand</summary>

### Test 1: Renders todo item correctly
Ensure that the Item component renders the todo item with the correct title, toggle button, and remove button.
Render Item component with a todo item, assert presence of todo title, todo item toggle button, and todo item remove button.
<br/>

### Test 2: Toggles todo item completion
Verify that the toggle button in the Item component toggles the completion status of the todo item.
Render Item component with a todo item, simulate click on todo item toggle button, assert dispatch function called with correct action.
<br/>

### Test 3: Removes todo item
Ensure that clicking the remove button in the Item component dispatches the action to remove the todo item.
Render Item component with a todo item, simulate click on todo item remove button, assert dispatch function called with correct action.
<br/>

### Test 4: Allows editing todo item
Verify that double-clicking on the todo item label in the Item component allows editing.
Render Item component with a todo item, simulate double-click on todo item label, assert presence of editable input field.
<br/>

</details>

## Main Component Testing
<details>
<summary>Click to expand</summary>

### Test 1: Renders all todo tasks in route #/
Ensure that all todo tasks are rendered when the route is "#/".
Render Main component without specifying a route, assert current window location hash, assert presence of todo list, and check if the number of rendered todo items matches the number of todos in the state.
<br/>

### Test 2: Renders active todo in #/active
Ensure that only active todo tasks are rendered when the route is "#/active".
Render Main component with route "#/active", assert current window location hash, assert presence of todo list, and check if the number of rendered active todo items matches the number of active todos in the state.
<br/>

### Test 3: Renders completed tasks in #/completed
Ensure that only completed todo tasks are rendered when the route is "#/completed".
Render Main component with route "#/completed", assert current window location hash, assert presence of todo list, and check if the number of rendered completed todo items matches the number of completed todos in the state.
<br/>

### Test 4: Toggle all is visible in #/active when there are active todos and working
Verify that the "Toggle all" checkbox is visible in the "#/active" route when there are active todos and functional.
Render Main component with route "#/active", assert current window location hash, assert presence of "Toggle all" checkbox, simulate click on "Toggle all" checkbox, and assert that the dispatch function is called with the correct action.
<br/>

### Test 5: Toggle all is not visible when there are no todos
Ensure that the "Toggle all" checkbox is not visible when there are no todos.
<br/>


</details>

## Header Component Testing
<details>
<summary>Click to expand</summary>

### Test: Renders with correct title
Ensure that the Header component renders with the correct title and elements.
Render the Header component.
Assert the presence of the header element.
Assert that the text "Todos" is present.
Assert that the text "New Todo Input" is present.
