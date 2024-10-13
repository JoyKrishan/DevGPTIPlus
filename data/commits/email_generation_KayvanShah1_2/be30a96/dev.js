test('renders header Text', () => {
  const linkElement = screen.getByText(/Auto generate personalised email sequences/i);

test('renders textarea placeholder', () => {
  render(<App />);
  const textareaElement = screen.getByPlaceholderText(/Write the email prompt/i);
  expect(textareaElement).toBeInTheDocument();
});

test('updates email prompt on textarea change', () => {
  render(<App />);
  const textareaElement = screen.getByPlaceholderText(/Write the email prompt/i);
  
  fireEvent.change(textareaElement, { target: { value: 'New email prompt' } });
  
  expect(textareaElement.value).toBe('New email prompt');
});