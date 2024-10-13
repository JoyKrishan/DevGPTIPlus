import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('updates email prompt on textarea change', () => {
  render(<App />);
  
  // Find the textarea element by placeholder text
  const textareaElement = screen.getByPlaceholderText(/Write the email prompt/i);
  
  // Simulate a change event on the textarea
  fireEvent.change(textareaElement, { target: { value: 'New email prompt' } });
  
  // Check if the value of the textarea has been updated
  expect(textareaElement.value).toBe('New email prompt');
});