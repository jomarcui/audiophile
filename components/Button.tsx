import { ReactNode } from 'react';

type ButtonProps = {
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  name?: string;
  type?: 'button' | 'submit' | 'reset';
};

const Button = ({
  children,
  loading,
  type = 'button',
  ...props
}: ButtonProps) => {
  return (
    <button aria-label="see product button" type={type} {...props}>
      <span className="leading-tight text-gray-300 text-[0.625rem] uppercase">
        {children}
      </span>
    </button>
  );
};

const PrimaryButton = ({ children, ...props }: ButtonProps) => (
  <Button className="bg-[#d87c49] flex px-5 py-3" {...props}>
    {children}
  </Button>
);

export default PrimaryButton;
