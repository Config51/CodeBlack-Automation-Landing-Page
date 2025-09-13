import React, { useState, useEffect } from 'react';
import { Menu, X, Shield, ChevronRight } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-gray-800' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-blue-400" />
            <span className="text-xl font-bold text-white">AIScale Edge Automation</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-blue-400 transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('why-automation')} className="text-gray-300 hover:text-blue-400 transition-colors">
              Why Automation
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-gray-300 hover:text-blue-400 transition-colors">
              FAQ
            </button>
            <button onClick={() => scrollToSection('cta')} className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg transition-colors flex items-center space-x-2">
              <span>Book Your AI Strategy Call</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-white hover:text-blue-400 transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden bg-gray-900 border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('services')} className="block w-full text-left px-3 py-2 text-gray-300 hover:text-blue-400 transition-colors">
                Services
              </button>
              <button onClick={() => scrollToSection('why-automation')} className="block w-full text-left px-3 py-2 text-gray-300 hover:text-blue-400 transition-colors">
                Why Automation
              </button>
              <button onClick={() => scrollToSection('faq')} className="block w-full text-left px-3 py-2 text-gray-300 hover:text-blue-400 transition-colors">
                FAQ
              </button>
              <button onClick={() => scrollToSection('cta')} className="block w-full text-left px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors mt-4">
                Book Your AI Strategy Call
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;