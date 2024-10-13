import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from '../pages/home/Home';

// Mock components imported into Home
jest.mock('../components/NavigationPanel', () => {
  return function MockNavigationPanel() {
    return <div data-testid="navigation-panel" />;
  };
});

jest.mock('../components/TopPanel', () => {
  return function MockTopPanel() {
    return <div data-testid="top-panel" />;
  };
});

jest.mock('../components/LifeQuestFormTriangle', () => {
  return function MockLifeQuestFormTriangle() {
    return <div data-testid="form-triangle" />;
  };
});

describe('Home Component', () => {
  it('renders without crashing', () => {
    render(<Home />);
    expect(screen.getByTestId('navigation-panel')).toBeInTheDocument();
    expect(screen.getByTestId('top-panel')).toBeInTheDocument();
    expect(screen.getByTestId('form-triangle')).toBeInTheDocument();
    expect(screen.getByText('LifeQuest')).toBeInTheDocument();
  });

  // Add more tests as needed to cover different scenarios and edge cases
});