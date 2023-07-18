import Link from 'next/link';
import { NavItem } from '../types';

type NavProps = {
  selectedId?: string;
  items: NavItem[];
};

const Nav = ({ items = [], selectedId = 'home', ...props }: NavProps) => (
  <nav aria-label="navigation" {...props}>
    <ul className="flex mx-auto">
      {items.map(({ id, label, url }) => (
        <li key={id}>
          <Link href={url}>
            <a
              className={`ease-in-out hover:text-[#d87d4a] px-5 transition-colors text-gray-200 ${
                selectedId === id && 'text-[#d87d4a]'
              }`}
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
