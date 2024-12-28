import React from 'react';

const GradientBackground = () => {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-cyan-400/20 via-transparent to-transparent animate-pulse" />
      <div className="absolute w-full h-full bg-[url('/grid.svg')] opacity-20" />
    </>
  );
};

export default GradientBackground;