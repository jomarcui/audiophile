import Image from 'next/image';
import { ReactNode } from 'react';
import { navItems } from '../config';
import PrimaryButton from './Button';
import Header from './Header';
import Nav from './Nav';

interface LayoutProps {
  children?: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => (
  <div>
    <Header nav={<Nav items={navItems} />} />
    <main className="max-w-screen-md mx-auto">{children}</main>
  </div>
);

export const HeroLayout = ({ children }: LayoutProps) => {
  const hero = (
    <div className="flex flex-col h-[353px] justify-center max-w-screen-md mx-auto relative">
      <div className="animate-hero-image-intro h-full bg-[center_left_10rem] bg-[length:768px_353px] bg-[url('/resources/hero.jpg')] flex right-5 w-full"></div>
      <div className="animate-hero-text-intro flex flex-col absolute">
        <div className="my-2">
          <span className="font-bold text-gray-500 text-[0.625rem] tracking-[0.2rem]">
            NEW PRODUCT
          </span>
        </div>
        <div className="my-2">
          <h4 className="font-normal text-5xl text-gray-300">AirPods Pro</h4>
          <h5 className="text-2xl text-gray-300">Rebuilt from the sound up.</h5>
        </div>
        <div className="my-2">
          <p className="text-gray-500 text-xs">
            AirPods Pro take the listening experience
            <br />
            to a new level of individuality.
          </p>
        </div>
        <div className="my-2">
          <PrimaryButton>See Product</PrimaryButton>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <Header hero={hero} nav={<Nav items={navItems} />} />
      <main className="max-w-screen-md mx-auto">{children}</main>
    </div>
  );
};

export default Layout;
