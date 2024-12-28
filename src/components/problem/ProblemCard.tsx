import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '../../lib/utils';

interface ProblemCardProps {
  icon: LucideIcon;
  title: string;
  className?: string;
  delay?: number;
}

const ProblemCard = ({ icon: Icon, title, className, delay = 0 }: ProblemCardProps) => {
  return (
    <div 
      className={cn(
        'bg-[#1A1A1A] p-6 rounded-lg border border-cyan-400/20',
        'hover:border-cyan-400/40 transition-all duration-300',
        'group flex items-start gap-4 animate-fade-in-up',
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <Icon className="h-6 w-6 text-cyan-400 group-hover:scale-110 transition-transform" />
      <p className="text-lg text-white/90">{title}</p>
    </div>
  );
};

export default ProblemCard;