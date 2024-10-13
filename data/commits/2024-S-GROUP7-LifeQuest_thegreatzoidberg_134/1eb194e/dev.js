import { render, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
jest.mock('axios');
// Start of ChatGPT code (Antonio Tessier) 
// Conversation link -> https://chat.openai.com/share/4bea6d17-2817-454e-94ad-04bd2e9f0c8d

	it('runs delete account temporary function when delete account button is clicked', async () => {
		const { getByText } = render(<SettingsPage />);
		const deleteAccountButton = getByText('Delete Account');

		fireEvent.click(deleteAccountButton);

		// Ensure that handleDeleteAccountClick is called
		await waitFor(() => {
			expect(axios.post).toHaveBeenCalled();
		});
	});

	it('handles unauthorized error correctly', async () => {
		// Mock axios post function to return an error
		axios.post.mockRejectedValue({ response: { status: 401 } });

		const { getByText } = render(<SettingsPage />);
		const deleteAccountButton = getByText('Delete Account');

	        const url = "http://localhost:3000.com";     // <- Fernando's code
	    
	        Object.defineProperty(window, 'location', {  // <- Fernando's code
	          value: {
		    href: url
	          }
	        });	
		
		fireEvent.click(deleteAccountButton);

		// Ensure user is redirected to login page on unauthorized error
		await waitFor(() => {
			expect(window.location.href).toBe('/');
		});
	});
// End of ChatGPT code.
});