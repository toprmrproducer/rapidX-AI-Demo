import React from 'react';
import Section from '../layout/Section';
import SolutionContent from './SolutionContent';

const Solution = () => {
  return (
    <Section id="solutions">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/5 to-transparent" />
      <SolutionContent />
    </Section>
  );
};

export default Solution;