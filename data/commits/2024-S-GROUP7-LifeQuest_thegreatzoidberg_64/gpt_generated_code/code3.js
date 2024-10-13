import { render } from '@testing-library/react';
import Home from '../Home';

it('matches the snapshot', () => {
  const { asFragment } = render(<Home />);
  expect(asFragment()).toMatchSnapshot();
});