// TextInput.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TextInput from './TextInput';

test('input field updates state correctly', () => {
  const { getByRole } = render(<TextInput />);

  const inputField = getByRole('textbox');

  // Simulate typing into the input field
  fireEvent.change(inputField, { target: { value: 'Test input' } });

  // Ensure that the state has been updated correctly
  expect(inputField.value).toBe('Test input');
});