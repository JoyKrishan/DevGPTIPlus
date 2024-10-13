import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SettingsButton from './SettingsButton';

describe('SettingsButton', () => {
  test('renders the button with correct classes and elements', () => {
    render(<SettingsButton />);

    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveClass('settingsnav'); // assuming 'settingsnav' is a class in your CSS module
    expect(buttonElement).toHaveAttribute('id', 'settings_button');

    const imgElement = screen.getByRole('img');
    expect(imgElement).toHaveClass('settingsIcon'); // assuming 'settingsIcon' is a class in your CSS module
    expect(imgElement).toHaveAttribute('src', '/settings-icon.svg');
    expect(imgElement).toHaveAttribute('alt', '');
  });
});