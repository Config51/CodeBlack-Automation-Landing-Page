import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Can automation actually benefit a small business like mine?',
      answer: 'Yes. Whether you\'re solo or scaling, automation removes repetitive work so you can focus on what matters most: growth.'
    },
    {
      question: 'How quickly can I see results from automation?',
      answer: 'Most clients see immediate impact. Your business starts running smoother from day one, with measurable time savings in the first week.'
    },
    {
      question: 'Will this work alongside my existing systems?',
      answer: 'Absolutely. We build automation that enhances your current workflow, not disrupts it. Your team keeps using the tools they love.'
    },
    {
      question: 'Do I need technical knowledge to use these solutions?',
      answer: 'Not at all. We handle the technical side. You get an easy-to-use system that just works, letting you focus on running your business.'
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'We\'re with you every step of the way. From setup to optimization, you get dedicated support to ensure your automation delivers maximum value.'
    },
    {
      question: 'Can the automation adapt as my business grows?',
      answer: 'That\'s exactly what it\'s designed for. Your automation scales with you, handling more volume without adding complexity or cost.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">COMMON QUESTIONS</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-800/50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-blue-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-blue-400 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;