import React from 'react';
import { cn } from '../../lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const Section = ({ children, className, id }: SectionProps) => {
  return (
    <section 
      id={id}
      className={cn(
        "relative py-20 bg-black",
        className
      )}
    >
      {children}
    </section>
  );
};

export default Section;