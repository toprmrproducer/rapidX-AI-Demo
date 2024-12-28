import React from 'react';
import Section from '../layout/Section';
import ProblemContent from './ProblemContent';

const Problem = () => {
  return (
    <Section id="problem">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/5 to-transparent" />
      <ProblemContent />
    </Section>
  );
};

export default Problem;