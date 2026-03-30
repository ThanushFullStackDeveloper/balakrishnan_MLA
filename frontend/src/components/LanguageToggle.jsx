import React from 'react';
import { Button } from './ui/button';

const LanguageToggle = ({ language, setLanguage }) => {
  return (
    <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full p-1 shadow-md">
      <Button
        variant={language === 'ta' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => setLanguage('ta')}
        className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
          language === 'ta'
            ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700'
            : 'text-gray-700 hover:bg-gray-100'
        }`}
      >
        தமிழ்
      </Button>
      <Button
        variant={language === 'en' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => setLanguage('en')}
        className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
          language === 'en'
            ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700'
            : 'text-gray-700 hover:bg-gray-100'
        }`}
      >
        EN
      </Button>
    </div>
  );
};

export default LanguageToggle;
