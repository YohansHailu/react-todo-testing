import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { HashRouter, MemoryRouter, Router } from "react-router-dom";
import { Main } from "../todo/components/main";
import '@testing-library/jest-dom/extend-expect';


function renderMain(path_hash = "#/") {

  const todos = [
    { id: 1, text: "Todo 1", completed: false },
    { id: 2, text: "Todo 2", completed: false },
    { id: 2, text: "Todo 2", completed: true },
    { id: 2, text: "Todo 2", completed: true },
    { id: 2, text: "Todo 2", completed: true },
  ];
  const dispatchMock = jest.fn();

  window.location.hash = path_hash;

  let { getByTestId, getByLabelText } = render(
    < HashRouter >
      <Main todos={todos} dispatch={dispatchMock} />
    </HashRouter >
  );

  return { getByTestId, getByLabelText, dispatchMock, todos };
}

test("renders all todo tasks in route #/", () => {
  let { todos, getByTestId } = renderMain();


  expect(window.location.hash).toBe("#/");
  const todoList = getByTestId("todo-list");
  expect(todoList.children.length).toBe(todos.length); // both will be visible  
});


test("renders  active todo in #/active", () => {
  const { todos, getByTestId } = renderMain("#/active");

  expect(window.location.hash).toBe("#/active");
  const todoList = getByTestId("todo-list");
  let completeTodos = todos.filter((todo) => !todo.completed);
  expect(todoList.children.length).toBe(completeTodos.length); // both will be visible

});

test("renders completed tasks in #/completed", () => {
  const { getByTestId, todos } = renderMain("#/completed");

  expect(window.location.hash).toBe("#/completed");
  const todoList = getByTestId("todo-list");
  let notCompleteTodos = todos.filter((todo) => todo.completed);
  expect(todoList.children.length).toBe(notCompleteTodos.length); // both will be visible  

});




test("toggleall is visible in #/active when there are active todoes and working", () => {

  const { dispatchMock, getByTestId } = renderMain("#/active");

  expect(window.location.hash).toBe("#/active");

  let toggleallcheckbox = getByTestId("toggle-all");
  expect(toggleallcheckbox).toBeInTheDocument();

  fireEvent.click(toggleallcheckbox);
  expect(dispatchMock).toHaveBeenCalledWith({ type: "TOGGLE_ALL", payload: { completed: true } });
});

test("toggleall is not visible when there are not todos", () => {
  render(
    <HashRouter>
      <Main todos={[]} dispatch={jest.fn()} />
    </HashRouter>
  )
  expect(screen.queryByTestId("toggle-all")).toBeNull();
});


