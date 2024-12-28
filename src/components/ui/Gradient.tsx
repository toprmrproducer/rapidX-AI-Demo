import React from 'react';
import { cn } from '@/lib/utils';

interface GradientProps {
  variant?: 'primary' | 'secondary';
  className?: string;
}

const Gradient = ({ variant = 'primary', className }: GradientProps) => {
  return (
    <div className={cn(
      'absolute inset-0',
      variant === 'primary' && 'bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent',
      variant === 'secondary' && 'bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-cyan-400/20 via-transparent to-transparent animate-pulse',
      className
    )} />
  );
};

export default Gradient;