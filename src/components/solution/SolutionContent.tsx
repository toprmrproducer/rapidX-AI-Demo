import React from 'react';
import { MessageSquare, Users, ShoppingCart } from 'lucide-react';
import SolutionCard from './SolutionCard';
import Container from '../layout/Container';

const solutions = [
  {
    icon: Users,
    title: "Lead Generation Bots",
    description: "Capture, qualify, and engage leads 24/7 without lifting a finger."
  },
  {
    icon: MessageSquare,
    title: "Customer Support Bots",
    description: "Resolve customer queries instantly, reduce churn, and delight your audience."
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce Integrations",
    description: "Seamlessly handle product recommendations, transactions, and support."
  }
];

const SolutionContent = () => {
  return (
    <Container>
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
        AI Chatbots <span className="text-cyan-400">Tailored</span> to Your Business Needs
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {solutions.map((solution, index) => (
          <SolutionCard
            key={index}
            {...solution}
            delay={index * 200}
          />
        ))}
      </div>
    </Container>
  );
};

export default SolutionContent;