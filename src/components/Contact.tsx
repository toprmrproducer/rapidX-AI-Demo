import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-black border-t border-cyan-400/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-cyan-400 text-center mb-16">Contact Us</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-transparent border border-cyan-400 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-transparent border border-cyan-400 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 bg-transparent border border-cyan-400 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                ></textarea>
              </div>
              <button className="w-full bg-cyan-400 text-black font-bold py-3 px-8 rounded-lg hover:bg-cyan-300 transition-colors duration-300">
                Send Message
              </button>
            </form>
          </div>
          
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <Mail className="h-6 w-6 text-cyan-400" />
              <span className="text-white">contact@xamplifyai.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="h-6 w-6 text-cyan-400" />
              <span className="text-white">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="h-6 w-6 text-cyan-400" />
              <span className="text-white">123 Innovation Street, Tech City, TC 12345</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;