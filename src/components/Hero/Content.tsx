import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import CallToAction from './CallToAction';
import Headline from './Headline';

const Content = () => {
  return (
    <div className="relative z-10 max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
      <Headline />
      <CallToAction />
    </div>
  );
};

export default Content;