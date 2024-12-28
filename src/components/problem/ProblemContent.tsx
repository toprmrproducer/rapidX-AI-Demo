import React from 'react';
import { Clock, MessageSquare, TrendingDown } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import ProblemCard from './ProblemCard';
import Container from '../layout/Container';

const problems = [
  {
    icon: Clock,
    title: "Missing leads because of slow response times?"
  },
  {
    icon: MessageSquare,
    title: "Overwhelmed by customer support requests?"
  },
  {
    icon: TrendingDown,
    title: "Losing sales due to lack of real-time engagement?"
  }
];

const ProblemContent = () => {
  return (
    <Container>
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
        Is Your Business <span className="text-cyan-400">Struggling</span> to Keep Up with Demands?
      </h2>
      
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {problems.map((problem, index) => (
          <ProblemCard
            key={index}
            icon={problem.icon}
            title={problem.title}
            delay={index * 200}
          />
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <a
          href="#solutions"
          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition-colors group"
        >
          See How We Can Help
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </Container>
  );
};

export default ProblemContent;