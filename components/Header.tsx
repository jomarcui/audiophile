import { ReactNode } from 'react';
import Button from './Button';

type HeaderProps = {
  hero?: ReactNode;
  nav?: ReactNode;
};

const Header = ({ hero, nav }: HeaderProps) => {
  return (
    <div className="bg-black">
      <header className="border-b border-gray-800 flex items-center justify-between max-w-screen-md mx-auto">
        <div>
          <h1 className="font-black text-xl text-gray-100">audiophile</h1>
        </div>
        <div className="flex py-5">{nav}</div>
        <div className="flex">
          <Button name="cart-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-gray-100"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </Button>
        </div>
      </header>
      {hero}
    </div>
  );
};

export default Header;
