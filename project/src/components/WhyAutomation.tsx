import React from 'react';
import { Clock, TrendingUp, Zap } from 'lucide-react';

const WhyAutomation: React.FC = () => {
  const benefits = [
    {
      icon: Clock,
      title: 'Build a 24/7 Business',
      subtitle: 'Your business runs while you sleep',
      description: 'Let automation handle the routine tasks. Your business keeps running and growing even when you\'re offline.',
      cta: 'See How It Works'
    },
    {
      icon: TrendingUp,
      title: 'Scale Without the Stress',
      subtitle: 'Growth without growing pains',
      description: 'Handle 3x more business without hiring. Automation scales instantly to match your needs, no training required.',
      cta: 'See How It Works'
    },
    {
      icon: Zap,
      title: '10x Your Productivity',
      subtitle: 'Do more with what you have',
      description: 'Turn repetitive tasks into automated workflows. Free up your time to focus on strategy and growth.',
      cta: 'See How It Works'
    }
  ];

  return (
    <section id="why-automation" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">AUTOMATION THAT DELIVERS</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 hover:border-blue-500/50 hover:bg-gray-800/50 transition-all duration-300 group text-center"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:from-blue-600/40 group-hover:to-purple-600/40 transition-all duration-300">
                  <benefit.icon className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{benefit.title}</h3>
                <h4 className="text-lg text-blue-400 mb-4">{benefit.subtitle}</h4>
                <p className="text-gray-300 leading-relaxed mb-6">{benefit.description}</p>
              </div>

              <button className="text-blue-400 hover:text-blue-300 font-semibold transition-colors">
                {benefit.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAutomation;