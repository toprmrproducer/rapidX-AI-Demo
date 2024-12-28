import React from 'react';
import Button from '../ui/Button';
import { Calendar, ArrowRight } from 'lucide-react';

const HeroContent = () => {
  return (
    <div className="relative z-10 max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
        <span className="text-cyan-400">Supercharge</span> Your Business with{' '}
        <span className="text-cyan-400">Intelligent AI Chatbots</span>
      </h1>
      
      <p className="text-xl sm:text-2xl text-white/80 mb-12 max-w-3xl mx-auto animate-fade-in-up">
        From lead generation to seamless eCommerce integrations, XAmplify AI powers your business 
        with cutting-edge AI solutions.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up">
        <Button className="group">
          <span className="flex items-center">
            Schedule Your Free Consultation
            <Calendar className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
          </span>
        </Button>
        
        <Button variant="secondary" className="group">
          <span className="flex items-center">
            Explore Our Solutions
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </span>
        </Button>
      </div>
    </div>
  );
};

export default HeroContent;