import React from 'react';
import { Brain, Cpu, Database, LineChart } from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: 'AI Consulting',
    description: 'Expert guidance on implementing AI solutions tailored to your business needs.'
  },
  {
    icon: Cpu,
    title: 'Machine Learning',
    description: 'Custom ML models that learn and adapt to your specific requirements.'
  },
  {
    icon: Database,
    title: 'Data Analytics',
    description: 'Transform raw data into actionable insights for informed decision-making.'
  },
  {
    icon: LineChart,
    title: 'Process Automation',
    description: 'Streamline operations with intelligent automation solutions.'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-cyan-400 text-center mb-16">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#1A1A1A] p-6 rounded-lg hover:transform hover:-translate-y-2 transition-all duration-300"
            >
              <service.icon className="h-12 w-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-cyan-400 mb-3">{service.title}</h3>
              <p className="text-white">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;