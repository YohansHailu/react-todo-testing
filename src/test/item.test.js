import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Item } from '../todo/components/item';

test('renders todo item correctly', () => {
  const todo = { id: 1, title: 'Buy groceries', completed: false };
  const dispatch = jest.fn();
  const { getByText, getByTestId } = render(<Item todo={todo} dispatch={dispatch} index={0} />);

  expect(getByText('Buy groceries')).toBeInTheDocument();
  expect(getByTestId('todo-item-toggle')).toBeInTheDocument();
  expect(getByTestId('todo-item-button')).toBeInTheDocument();
});

test('toggles todo item completion', () => {
  const todo = { id: 1, title: 'Buy groceries', completed: false };
  const dispatch = jest.fn();
  const { getByTestId } = render(<Item todo={todo} dispatch={dispatch} index={0} />);

  fireEvent.click(getByTestId('todo-item-toggle'));

  expect(dispatch).toHaveBeenCalledWith({ type: 'TOGGLE_ITEM', payload: { id: 1 } });
});

test('removes todo item', () => {
  const todo = { id: 1, title: 'Buy groceries', completed: false };
  const dispatch = jest.fn();
  const { getByTestId } = render(<Item todo={todo} dispatch={dispatch} index={0} />);

  fireEvent.click(getByTestId('todo-item-button'));

  expect(dispatch).toHaveBeenCalledWith({ type: 'REMOVE_ITEM', payload: { id: 1 } });
});

test('allows editing todo item', () => {
  const todo = { id: 1, title: 'Buy groceries', completed: false };
  const dispatch = jest.fn();
  const { getByText, getByTestId } = render(<Item todo={todo} dispatch={dispatch} index={0} />);

  fireEvent.doubleClick(getByTestId('todo-item-label'));

  expect(getByText("Edit Todo Input")).toBeInTheDocument();
});
