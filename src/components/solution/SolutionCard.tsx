import React from 'react';
import { LucideIcon } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { cn } from '../../lib/utils';

interface SolutionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  delay?: number;
}

const SolutionCard = ({ icon: Icon, title, description, className, delay = 0 }: SolutionCardProps) => {
  return (
    <div 
      className={cn(
        'bg-[#1A1A1A] p-8 rounded-lg border border-cyan-400/20',
        'hover:border-cyan-400/40 transition-all duration-300',
        'group animate-fade-in-up',
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <Icon className="h-8 w-8 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-white/80 mb-4">{description}</p>
      <a
        href="#"
        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition-colors group/link"
      >
        Learn More
        <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
      </a>
    </div>
  );
};

export default SolutionCard;