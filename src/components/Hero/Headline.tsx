import React from 'react';

const Headline = () => {
  return (
    <>
      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
        <span className="text-cyan-400">Supercharge</span> Your Business with{' '}
        <span className="text-cyan-400">Intelligent AI Chatbots</span>
      </h1>
      
      <p className="text-xl sm:text-2xl text-white/80 mb-12 max-w-3xl mx-auto animate-fade-in-up">
        From lead generation to seamless eCommerce integrations, XAmplify AI powers your business 
        with cutting-edge AI solutions.
      </p>
    </>
  );
};

export default Headline;