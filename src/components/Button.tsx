import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary';
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  type = 'button',
  variant = 'primary',
  className = '',
  onClick,
}) => {
  const variantStyles = {
    primary:
      'bg-primary-yellow text-primary-black font-semibold hover:bg-primary-yellow/90 active:scale-[0.98]',
    secondary:
      'bg-transparent border-2 border-primary-yellow text-primary-yellow font-semibold hover:bg-primary-yellow hover:text-primary-black active:scale-[0.98]',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`inline-flex items-center justify-center px-6 py-3 rounded-xl transition-all duration-200 ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;