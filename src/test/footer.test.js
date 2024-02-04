import React from 'react';
import { render, fireEvent, screen, act } from '@testing-library/react';
import { Footer } from '../todo/components/footer';
import { HashRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

// Mock todos
const mockTodos = [
  { id: 1, text: 'Todo 1', completed: false },
  { id: 2, text: 'Todo 2', completed: true },
];

// Mock dispatch function
const mockDispatch = jest.fn();

// Function to render Footer component
function renderFooter() {
  return render(
    <HashRouter>
      <Footer todos={mockTodos} dispatch={mockDispatch} />
    </HashRouter>
  );
}

test('Footer component renders correctly with active todos count', () => {
  const { getByTestId, getByText } = renderFooter();

  const footerElement = getByTestId('footer');
  expect(footerElement).toBeInTheDocument();

  const activeTodosCount = mockTodos.filter(todo => !todo.completed).length;
  const todoCountElement = getByText(`${activeTodosCount} ${activeTodosCount === 1 ? "item" : "items"} left!`);
  expect(todoCountElement).toBeInTheDocument();
});

test('Footer component dispatches remove completed action when clear completed button is clicked', () => {
  const { getByText } = renderFooter();

  const clearCompletedButton = getByText('Clear completed');
  fireEvent.click(clearCompletedButton);

  expect(mockDispatch).toHaveBeenCalledWith({ type: 'REMOVE_COMPLETED_ITEMS' });
});

test('Footer component changes route URL when all, active and completed buttons are clicked', () => {
  const { getByText } = renderFooter();

  fireEvent.click(getByText(/All/i));
  expect(window.location.hash).toBe('#/');

  fireEvent.click(getByText('Active'));
  expect(window.location.hash).toBe('#/active');

  fireEvent.click(getByText('Completed'));
  expect(window.location.hash).toBe('#/completed');
});
