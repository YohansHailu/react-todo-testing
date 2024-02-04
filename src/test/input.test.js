import React from 'react';
import { render, fireEvent, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Input } from '../todo/components/input';

test('renders input field with placeholder and label', () => {
  const { getByPlaceholderText, getByLabelText } = render(<Input placeholder="Enter text" label="Input Label" />);
  const input = getByPlaceholderText('Enter text');
  const label = getByLabelText('Input Label');

  expect(input).toBeInTheDocument();
  expect(label).toBeInTheDocument();
});

test('calls onSubmit when Enter key is pressed with valid input', () => {
  const onSubmit = jest.fn();
  const { getByTestId } = render(<Input onSubmit={onSubmit} placeholder="Enter text" label="Input Label" />);
  const input = getByTestId('text-input');

  fireEvent.change(input, { target: { value: 'Valid Input' } });
  fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

  expect(onSubmit).toHaveBeenCalledWith('Valid Input');
});

test('does not call onSubmit when Enter key is pressed with invalid input', () => {
  const onSubmit = jest.fn();
  const { getByTestId } = render(<Input onSubmit={onSubmit} placeholder="Enter text" label="Input Label" />);
  const input = getByTestId('text-input');

  fireEvent.change(input, { target: { value: 'A' } });
  fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

  expect(onSubmit).not.toHaveBeenCalled();
});



test('calls onBlur callback when input loses focus', () => {
  const onBlur = jest.fn();
  const { getByTestId } = render(<Input onBlur={onBlur} placeholder="Enter text" label="Input Label" />);
  const input = getByTestId('text-input');

  fireEvent.blur(input);

  expect(onBlur).toHaveBeenCalledTimes(1);
});

test('does not call onSubmit when input loses focus without pressing Enter key', () => {
  const onSubmit = jest.fn();
  const { getByTestId } = render(<Input onSubmit={onSubmit} placeholder="Enter text" label="Input Label" />);
  const input = getByTestId('text-input');

  fireEvent.blur(input);

  expect(onSubmit).not.toHaveBeenCalled();
});

test('does not call onSubmit when Enter key is pressed with empty input', () => {
  const onSubmit = jest.fn();
  const { getByTestId } = render(<Input onSubmit={onSubmit} placeholder="Enter text" label="Input Label" />);
  const input = getByTestId('text-input');

  fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

  expect(onSubmit).not.toHaveBeenCalled();
});

