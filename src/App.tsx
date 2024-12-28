import React from 'react';
import { useScrollEffect } from './hooks/useScrollEffect';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/problem';
import Solution from './components/solution';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useScrollEffect();

  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;