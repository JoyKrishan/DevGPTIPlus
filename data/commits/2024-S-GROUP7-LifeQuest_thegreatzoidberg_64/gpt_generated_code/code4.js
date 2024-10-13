test('applies correct styling', () => {
  render(<Home />);
  const homeElement = screen.getByTestId('home'); // You'll need to add data-testid="home" to your top-level div
  expect(homeElement).toHaveClass('home');
});