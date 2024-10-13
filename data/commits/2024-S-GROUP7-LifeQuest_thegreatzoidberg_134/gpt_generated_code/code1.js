import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios'; // Import axios for mocking
import SettingsPage from '../pages/settings/SettingsPage';
import '@testing-library/jest-dom/extend-expect';
import styles from '../pages/settings/SettingsPage.module.css';

// Mock axios post function
jest.mock('axios');

jest.mock('../contexts/FontSizeContext', () => ({
  useFontSize: () => ({
    fontSize: 16,
    increaseFontSize: jest.fn(),
    decreaseFontSize: jest.fn(),
    resetFontSize: jest.fn(),
    darkMode: true,
    toggleDarkMode: jest.fn(),
  }),
}));

describe('SettingsPage Component', () => {
  // Existing tests...

  it('triggers handleDeleteAccountClick function when delete account button is clicked', async () => {
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

    fireEvent.click(deleteAccountButton);

    // Ensure that the user is redirected to the login page on unauthorized error
    await waitFor(() => {
      expect(window.location.href).toBe('/');
    });
  });
});