import React from 'react';
import { ArrowRight, MessageCircle, Heart } from 'lucide-react';
import { Button } from './ui/button';
import { images, candidateInfo, getWhatsAppMessage } from '../utils/mock';

const HeroSection = ({ language, translations }) => {
  const t = translations[language];

  const handleWhatsAppClick = () => {
    const message = getWhatsAppMessage(language);
    window.open(`https://wa.me/${candidateInfo.whatsappNumber}?text=${message}`, '_blank');
  };

  const scrollToJoin = () => {
    document.getElementById('join')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${images.thematic.heroBackground})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-orange-900/95 via-orange-800/90 to-green-900/85" />
        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)'
          }} />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-white space-y-6 md:space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm font-semibold">BJP Candidate 2026</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              {t.hero.headline}
            </h1>

            {/* Subheadline */}
            <p className="text-xl sm:text-2xl font-semibold text-orange-100">
              {t.hero.subheadline}
            </p>

            {/* Description */}
            <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-xl">
              {t.hero.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                onClick={scrollToJoin}
                className="bg-white text-orange-600 hover:bg-orange-50 font-bold text-base px-8 py-6 rounded-full shadow-2xl hover:shadow-orange-500/50 transition-all transform hover:scale-105 group"
              >
                {t.hero.ctaPrimary}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
              <Button
                size="lg"
                onClick={scrollToJoin}
                variant="outline"
                className="bg-green-600 hover:bg-green-700 text-white border-2 border-white/30 font-bold text-base px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105 group"
              >
                <Heart className="mr-2" size={20} />
                {t.hero.ctaSecondary}
              </Button>
            </div>

            {/* WhatsApp CTA */}
            <Button
              onClick={handleWhatsAppClick}
              variant="ghost"
              className="bg-green-500/20 hover:bg-green-500/30 text-white border border-green-400/50 font-semibold rounded-full px-6 py-3 backdrop-blur-sm transition-all group"
            >
              <MessageCircle className="mr-2 group-hover:scale-110 transition-transform" size={20} />
              {t.hero.ctaWhatsapp}
            </Button>
          </div>

          {/* Candidate Image */}
          <div className="relative">
            <div className="relative z-10">
              {/* Main Image Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img
                  src={images.candidate.hero}
                  alt={candidateInfo.name}
                  className="w-full h-auto object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                
                {/* Badge on Image */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                  <h3 className="font-bold text-gray-900 text-lg">{candidateInfo.nameEnglish}</h3>
                  <p className="text-orange-600 font-semibold text-sm">{candidateInfo.role}</p>
                  <p className="text-gray-600 text-sm">{candidateInfo.constituency}</p>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-green-500 rounded-full opacity-20 blur-2xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-orange-500 rounded-full opacity-20 blur-3xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
