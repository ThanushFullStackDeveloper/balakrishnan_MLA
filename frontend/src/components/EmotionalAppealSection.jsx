import React from 'react';
import { Heart } from 'lucide-react';
import { Button } from './ui/button';

const EmotionalAppealSection = ({ language, translations }) => {
  const t = translations[language];

  const scrollToJoin = () => {
    document.getElementById('join')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-orange-600 via-orange-500 to-green-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Icon */}
        <div className="flex justify-center mb-8">
          <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
            <Heart size={40} className="text-white" fill="white" />
          </div>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8">
          {t.emotional.headline}
        </h2>

        {/* Content */}
        <div className="space-y-6 mb-10">
          {t.emotional.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-lg md:text-xl text-white/95 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* CTA */}
        <Button
          size="lg"
          onClick={scrollToJoin}
          className="bg-white text-orange-600 hover:bg-orange-50 font-bold text-lg px-10 py-7 rounded-full shadow-2xl hover:shadow-white/50 transition-all transform hover:scale-110"
        >
          {language === 'en' ? 'Join the Movement Today' : 'இன்றே இயக்கத்தில் சேருங்கள்'}
        </Button>
      </div>
    </section>
  );
};

export default EmotionalAppealSection;
