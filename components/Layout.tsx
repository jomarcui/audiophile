import { ReactNode } from 'react';
import { navItems } from '../config';
import PrimaryButton from './Button';
import Header from './Header';
import Nav from './Nav';

interface HeroLayoutProps {
  children?: ReactNode;
}

export const HeroLayout = ({ children }: HeroLayoutProps) => {
  const hero = (
    <div className="container flex flex-col h-[353px] justify-center mx-auto relative">
      <div className="animate-hero-image-intro h-full bg-no-repeat bg-[right] bg-[length:768px_353px] bg-[url('/resources/hero.jpg')] flex right-5 w-full"></div>
      <div className="animate-hero-text-intro flex flex-col absolute">
        <div className="mb-3">
          <span className="text-gray-500 tracking-[0.2rem] uppercase">
            New product
          </span>
        </div>
        <div className="my-3">
          <h4 className="font-normal text-6xl text-white uppercase">
            Airpods pro
          </h4>
        </div>
        <div className="my-3">
          <p className="text-gray-500">
            AirPods Pro take the listening experience
            <br />
            to a new level of individuality.
          </p>
        </div>
        <div className="my-3">
          <PrimaryButton>See Product</PrimaryButton>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-zinc-200 h-screen">
      <Header hero={hero} nav={<Nav items={navItems} />} />
      <main>{children}</main>
    </div>
  );
};

interface LayoutProps {
  children?: ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <div className="h-screen">
    <Header nav={<Nav items={navItems} />} />
    <main className="max-w-screen-md mx-auto">{children}</main>
  </div>
);

export default Layout;
