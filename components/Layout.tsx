import { ReactNode } from 'react';
import { navItems } from '../config';
import Header from './Header';
import Nav from './Nav';

interface LayoutProps {
  children?: ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <div>
    <Header nav={<Nav items={navItems} />} />
    <main className="max-w-screen-md mx-auto">{children}</main>
  </div>
);

export default Layout;
