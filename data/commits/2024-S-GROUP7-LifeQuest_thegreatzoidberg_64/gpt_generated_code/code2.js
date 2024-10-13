import { render, screen } from '@testing-library/react';
import Home from '../Home'; // Adjust the import path as necessary

describe('Home Component', () => {
  test('renders without crashing', () => {
    render(<Home />);
    expect(screen.getByText('LifeQuest')).toBeInTheDocument();
  });

  test('renders the navigation panel', () => {
    render(<Home />);
    expect(screen.getByTestId('navigation-panel')).toBeInTheDocument(); // Assuming you add data-testid="navigation-panel" to your NavigationPanel component
  });

  test('renders the frame component', () => {
    render(<Home />);
    expect(screen.getByTestId('frame')).toBeInTheDocument(); // Similarly, add data-testid attributes as necessary
  });

  test('renders the life quest form triangle component', () => {
    render(<Home />);
    expect(screen.getByTestId('life-quest-form-triangle')).toBeInTheDocument();
  });
});