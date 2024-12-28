import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent"></div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-cyan-400 mb-6">
          Automate YOUR tomorrow,{' '}
          <span className="block sm:inline">TODAY!</span>
        </h1>
        <p className="text-white text-xl sm:text-2xl mb-8 max-w-3xl mx-auto">
          Empower your business with cutting-edge AI solutions that transform possibilities into reality.
        </p>
        <button className="bg-cyan-400 text-black font-bold py-3 px-8 rounded-lg hover:bg-cyan-300 transition-colors duration-300 flex items-center mx-auto">
          Get Started
          <ArrowRight className="ml-2 h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default Hero;