it('handles error on failed login', async () => {
    const { getByText, getByPlaceholderText } = render(<LoginPage />);
    const emailInput = getByPlaceholderText(/Email/i);
    const passwordInput = getByPlaceholderText(/Password/i);

    // Simulate typing into input fields
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    // Mock failed login response
    axios.post.mockRejectedValueOnce(new Error('Unauthorized'));

    // Trigger form submission
    fireEvent.click(getByText('Login'));

    // Wait for error handling
    await waitFor(() => {
        expect(console.log).toHaveBeenCalledWith(new Error('Unauthorized'));
    });
});