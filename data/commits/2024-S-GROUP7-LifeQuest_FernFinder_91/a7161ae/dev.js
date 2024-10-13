    it('input field updates value with current input', () => {
        const {getByPlaceholderText} = render(<LoginPage />);
        const emailInput = getByPlaceholderText(/Email/i);
        const passwordInput = getByPlaceholderText(/Password/i);
        // ai-gen start (ChatGPT-3.5, 1)
        fireEvent.change(emailInput, { target: { value: 'TestUserName' } });
        fireEvent.change(passwordInput, { target: { value: 'Pa$$w0rd' } });

        expect(emailInput.value).toBe('TestUserName');
        expect(passwordInput.value).toBe('Pa$$w0rd');
        // ai-gen end
    });