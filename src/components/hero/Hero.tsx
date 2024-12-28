import React from 'react';
import GradientBackground from './GradientBackground';
import HeroContent from './HeroContent';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <GradientBackground />
      <HeroContent />
    </section>
  );
};

export default Hero;