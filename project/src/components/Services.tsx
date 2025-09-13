import React from 'react';
import { MessageCircle, Calendar, Globe, Smartphone } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: MessageCircle,
      title: 'AI Customer Support & CRM',
      description: 'Transform your customer service with 24/7 AI support that integrates seamlessly with your CRM.',
      features: ['24/7 Automated Support', 'Instant Lead Qualification', 'Seamless CRM Integration', 'Multi-Channel Support']
    },
    {
      icon: Calendar,
      title: 'Smart Scheduling',
      description: 'Eliminate scheduling hassles with intelligent booking that handles everything automatically.',
      features: ['Smart Calendar Management', 'Automated Reminders', 'Multi-timezone Support', 'Integration with Popular Tools']
    },
    {
      icon: Globe,
      title: 'High-Converting Websites',
      description: 'Get a high-performance website that converts visitors into customers with built-in AI features.',
      features: ['Conversion-Optimized Design', 'Built-in AI Features', 'Mobile-First Approach', 'Fast Performance']
    },
    {
      icon: Smartphone,
      title: 'Custom App Development',
      description: 'Build powerful, scalable applications with AI capabilities and automation built-in.',
      features: ['Native & Cross-Platform Apps', 'AI-Powered Features', 'Cloud Integration', 'Automated Testing']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 group"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600/30 transition-colors">
                  <service.icon className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
              </div>

              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-sm text-gray-400">{feature}</span>
                  </div>
                ))}
              </div>
              <button className="text-blue-400 hover:text-blue-300 font-semibold transition-colors">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;