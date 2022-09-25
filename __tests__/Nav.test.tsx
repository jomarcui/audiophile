import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Nav from '../components/Nav';
import { navItems } from '../config';

describe('Nav', () => {
  it('renders navigation links', () => {
    const { getByText } = render(<Nav items={navItems} />);

    navItems.forEach(({ label }) => {
      expect(getByText(label)).toBeInTheDocument();
    });
  });
});
