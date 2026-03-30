import React from 'react';
import { TrendingUp } from 'lucide-react';
import { images } from '../utils/mock';

const AchievementsSection = ({ language, translations }) => {
  const t = translations[language];

  const stats = [
    t.achievements.stat1,
    t.achievements.stat2,
    t.achievements.stat3,
    t.achievements.stat4,
    t.achievements.stat5
  ];

  return (
    <section id="achievements" className="py-16 md:py-24 bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.achievements.headline}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-green-500 mx-auto rounded-full" />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all p-6 text-center border-2 border-orange-100 hover:border-orange-300 transform hover:scale-105"
            >
              <div className="flex items-center justify-center mb-3">
                <TrendingUp className="text-orange-600" size={24} />
              </div>
              <p className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">
                {stat.number}
              </p>
              <p className="text-sm md:text-base font-semibold text-gray-700">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Gallery & Qualities */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Gallery */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform">
                <img
                  src={images.candidate.gallery2}
                  alt="Community work"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform">
                <img
                  src={images.candidate.gallery3}
                  alt="Campaign rally"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform">
                <img
                  src={images.candidate.gallery4}
                  alt="Community event"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform">
                <img
                  src={images.thematic.villageCommunity}
                  alt="Village visit"
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>
          </div>

          {/* Leadership Qualities */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              {language === 'en' ? 'Leadership Qualities' : 'தலைமைப் பண்புகள்'}
            </h3>
            {t.achievements.qualities.map((quality, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all border-l-4 border-orange-500"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">{index + 1}</span>
                </div>
                <p className="text-gray-700 font-medium leading-relaxed">{quality}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
