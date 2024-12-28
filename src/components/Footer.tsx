import React from 'react';
import { Github, Twitter, Linkedin, Brain } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Brain className="h-8 w-8 text-cyan-400" />
              <span className="ml-2 text-cyan-400 text-xl font-bold">XAmplify AI</span>
            </div>
            <p className="text-white/80 max-w-md">
              Empowering businesses with next-generation AI solutions to drive innovation and growth.
            </p>
          </div>
          
          <div>
            <h3 className="text-cyan-400 font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Services', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-white/80 hover:text-cyan-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-cyan-400 font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-white/80 hover:text-cyan-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-white/80 hover:text-cyan-400 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-white/80 hover:text-cyan-400 transition-colors">
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-center text-white/60">
            © {new Date().getFullYear()} XAmplify AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;