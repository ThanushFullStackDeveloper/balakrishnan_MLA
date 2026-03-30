import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import LanguageToggle from './LanguageToggle';
import { candidateInfo } from '../utils/mock';

const Header = ({ language, setLanguage, translations }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo/Name */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl md:text-2xl">B</span>
            </div>
            <div>
              <h1 className={`font-bold text-lg md:text-xl ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
                {candidateInfo.name}
              </h1>
              <p className={`text-xs md:text-sm ${isScrolled ? 'text-orange-600' : 'text-orange-200'} font-semibold`}>
                BJP 2026
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className={`text-sm font-semibold transition-colors hover:text-orange-600 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => scrollToSection('vision')}
              className={`text-sm font-semibold transition-colors hover:text-orange-600 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {t.nav.vision}
            </button>
            <button
              onClick={() => scrollToSection('issues')}
              className={`text-sm font-semibold transition-colors hover:text-orange-600 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {t.nav.issues}
            </button>
            <button
              onClick={() => scrollToSection('achievements')}
              className={`text-sm font-semibold transition-colors hover:text-orange-600 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {t.nav.achievements}
            </button>
            <button
              onClick={() => scrollToSection('join')}
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-full font-semibold hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              {t.nav.join}
            </button>
          </nav>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <LanguageToggle language={language} setLanguage={setLanguage} />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-b-2xl py-4 px-4 space-y-3">
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-gray-700 font-semibold py-2 px-4 rounded-lg hover:bg-orange-50 transition-colors"
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => scrollToSection('vision')}
              className="block w-full text-left text-gray-700 font-semibold py-2 px-4 rounded-lg hover:bg-orange-50 transition-colors"
            >
              {t.nav.vision}
            </button>
            <button
              onClick={() => scrollToSection('issues')}
              className="block w-full text-left text-gray-700 font-semibold py-2 px-4 rounded-lg hover:bg-orange-50 transition-colors"
            >
              {t.nav.issues}
            </button>
            <button
              onClick={() => scrollToSection('achievements')}
              className="block w-full text-left text-gray-700 font-semibold py-2 px-4 rounded-lg hover:bg-orange-50 transition-colors"
            >
              {t.nav.achievements}
            </button>
            <button
              onClick={() => scrollToSection('join')}
              className="block w-full text-center bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all shadow-md"
            >
              {t.nav.join}
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
