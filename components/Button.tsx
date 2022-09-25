import { ReactNode } from 'react';

type ButtonProps = {
  children?: ReactNode;
  disabled?: boolean;
  loading?: boolean;
  name?: string;
  type?: 'button' | 'submit' | 'reset';
};

const Button = ({ children, loading, ...props }: ButtonProps) => {
  return <button {...props}>{children}</button>;
};

export default Button;
