import React from 'react';
import Section from '../layout/Section';
import Background from './Background';
import Content from './Content';

const Hero = () => {
  return (
    <Section className="min-h-screen flex items-center justify-center overflow-hidden">
      <Background />
      <Content />
    </Section>
  );
};

export default Hero;