import Link from 'next/link';
import { NavItem } from '../types';

type NavProps = {
  items: NavItem[];
};

const Nav = ({ items = [], ...props }: NavProps) => (
  <nav aria-label="navigation" {...props}>
    <ul className="flex mx-auto">
      {items.map(({ id, label, url }) => (
        <li key={id}>
          <Link href={url}>
            <a
              className="ease-in-out hover:text-sm hover:text-gray-50  px-5 transition-all text-gray-200 text-xs"
              data-testid={`nav-item-${label}`}
            >
              {label}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Nav;
