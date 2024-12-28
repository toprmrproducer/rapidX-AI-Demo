import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

const CallToAction = () => {
  return (
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
  );
};

export default CallToAction;