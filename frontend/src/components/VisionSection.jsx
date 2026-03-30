import React, { useState } from 'react';
import { Briefcase, Building2, GraduationCap, Shield, Sprout, ChevronDown } from 'lucide-react';
import { images } from '../utils/mock';

const VisionSection = ({ language, translations }) => {
  const t = translations[language];
  const [expandedPromise, setExpandedPromise] = useState(null);

  const promises = [
    {
      id: 1,
      icon: Briefcase,
      color: 'from-blue-500 to-blue-600',
      image: images.thematic.youthEmpowerment,
      ...t.vision.promise1
    },
    {
      id: 2,
      icon: Building2,
      color: 'from-orange-500 to-orange-600',
      image: images.thematic.infrastructure,
      ...t.vision.promise2
    },
    {
      id: 3,
      icon: GraduationCap,
      color: 'from-purple-500 to-purple-600',
      image: images.thematic.community,
      ...t.vision.promise3
    },
    {
      id: 4,
      icon: Shield,
      color: 'from-pink-500 to-pink-600',
      image: images.thematic.womenEmpowerment,
      ...t.vision.promise4
    },
    {
      id: 5,
      icon: Sprout,
      color: 'from-green-500 to-green-600',
      image: images.thematic.agriculture,
      ...t.vision.promise5
    }
  ];

  return (
    <section id="vision" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.vision.headline}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-green-500 mx-auto rounded-full" />
        </div>

        {/* Promises Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {promises.map((promise) => {
            const Icon = promise.icon;
            const isExpanded = expandedPromise === promise.id;

            return (
              <div
                key={promise.id}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-gray-100 hover:border-orange-200 ${
                  isExpanded ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Image Header */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={promise.image}
                    alt={promise.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${promise.color} opacity-80`} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                      <Icon size={40} className="text-white" strokeWidth={2} />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {promise.title}
                  </h3>
                  <p className={`text-sm font-semibold bg-gradient-to-r ${promise.color} bg-clip-text text-transparent mb-4`}>
                    {promise.tagline}
                  </p>

                  {/* Points */}
                  <div className={`space-y-2 transition-all duration-300 ${isExpanded ? 'max-h-96' : 'max-h-0 overflow-hidden'}`}>
                    {promise.points.map((point, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${promise.color} mt-2 flex-shrink-0`} />
                        <p className="text-sm text-gray-700">{point}</p>
                      </div>
                    ))}
                  </div>

                  {/* Expand Button */}
                  <button
                    onClick={() => setExpandedPromise(isExpanded ? null : promise.id)}
                    className={`mt-4 w-full flex items-center justify-center space-x-2 py-2 rounded-lg font-semibold text-sm transition-all ${
                      isExpanded
                        ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        : `bg-gradient-to-r ${promise.color} text-white hover:opacity-90`
                    }`}
                  >
                    <span>{isExpanded ? (language === 'en' ? 'Show Less' : 'குறைவாக காட்டு') : (language === 'en' ? 'Read More' : 'மேலும் வாசிக்க')}</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                    />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
