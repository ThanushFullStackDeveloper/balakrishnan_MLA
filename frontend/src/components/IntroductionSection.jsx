import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { images } from '../utils/mock';

const IntroductionSection = ({ language, translations }) => {
  const t = translations[language];

  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.introduction.headline}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-green-500 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={images.candidate.gallery1}
                alt="Balakrishnan with community"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-2xl shadow-2xl">
              <p className="text-4xl font-bold">10+</p>
              <p className="text-sm font-semibold">{language === 'en' ? 'Years Service' : 'வருட சேவை'}</p>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="prose prose-lg max-w-none">
              {t.introduction.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-700 leading-relaxed text-base md:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Trust Elements */}
            <div className="grid sm:grid-cols-3 gap-4 pt-6">
              <div className="bg-white rounded-xl p-4 shadow-md border-2 border-orange-100 hover:border-orange-300 transition-all transform hover:scale-105">
                <CheckCircle2 className="text-green-600 mb-2" size={28} />
                <p className="text-sm font-bold text-gray-900">{t.introduction.trust1}</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md border-2 border-orange-100 hover:border-orange-300 transition-all transform hover:scale-105">
                <CheckCircle2 className="text-green-600 mb-2" size={28} />
                <p className="text-sm font-bold text-gray-900">{t.introduction.trust2}</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md border-2 border-orange-100 hover:border-orange-300 transition-all transform hover:scale-105">
                <CheckCircle2 className="text-green-600 mb-2" size={28} />
                <p className="text-sm font-bold text-gray-900">{t.introduction.trust3}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
