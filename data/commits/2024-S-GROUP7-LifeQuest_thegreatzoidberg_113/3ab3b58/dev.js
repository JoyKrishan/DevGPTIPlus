import { render, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios'
jest.mock('axios');
console.log = jest.fn();
    });
        
        // ai-gen again (Antonio)
        // Conversation Link ->    https://chat.openai.com/share/740a955d-f5a6-4747-8cdd-4b62356f2ea1

        it('submits login form and redirects on successful login', async () => {
            const { getByText, getByPlaceholderText } = render(<LoginPage />);
            const emailInput = getByPlaceholderText(/Email/i);
            const passwordInput = getByPlaceholderText(/Password/i);

            // Simulate typing into input fields
            fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
            fireEvent.change(passwordInput, { target: { value: 'password123' } });

            // Mock successful login response
            axios.post.mockResolvedValueOnce({ data: { user: { id: 1, username: 'test_user', email: 'test@example.com' }, token: 'mock-auth-token' } } );

            const url = "http://localhost:3000.com";     // <- Fernando's code
            
            Object.defineProperty(window, 'location', {  // <- Fernando's code
              value: {
                href: url
              }
            });
            
            // Trigger form submission
            fireEvent.click(getByText('Login'));

            // Wait for redirect (if successful)
            await waitFor(() => {
                expect(window.location.href).toBe('/home');
            });
        });
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
    // End ai-gen (Antonio) 
});