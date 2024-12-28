import React from 'react';
import Gradient from '../ui/Gradient';

const Background = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <Gradient variant="primary" />
      <Gradient variant="secondary" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
    </div>
  );
};

export default Background;