import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Home from '../pages';

describe('Home', () => {
  it('renders a heading', () => {
    const { getByRole } = render(<Home />);

    const heading = getByRole('heading', {
      name: /audiophile/i,
    });

    expect(heading).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    const { getByRole } = render(<Home />);

    const nav = getByRole('navigation', { name: /navigation/i });

    expect(nav).toBeInTheDocument();
  });
});
