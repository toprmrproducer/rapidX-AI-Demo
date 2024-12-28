import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

const Button = ({ variant = 'primary', children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(
        'px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-lg',
        variant === 'primary' && 'bg-cyan-400 text-black hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/20',
        variant === 'secondary' && 'border-2 border-white text-white hover:bg-white/10',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;