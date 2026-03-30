import React from 'react';
import { Droplet, Car, Users, Heart, Stethoscope } from 'lucide-react';

const IssuesSection = ({ language, translations }) => {
  const t = translations[language];

  const issues = [
    {
      icon: Droplet,
      color: 'from-blue-500 to-cyan-500',
      ...t.issues.water
    },
    {
      icon: Car,
      color: 'from-gray-600 to-gray-700',
      ...t.issues.roads
    },
    {
      icon: Users,
      color: 'from-purple-500 to-indigo-500',
      ...t.issues.youth
    },
    {
      icon: Sprout,
      color: 'from-green-600 to-emerald-600',
      ...t.issues.farmers
    },
    {
      icon: Stethoscope,
      color: 'from-red-500 to-pink-500',
      ...t.issues.healthcare
    }
  ];

  return (
    <section id="issues" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.issues.headline}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-green-500 mx-auto rounded-full" />
        </div>

        {/* Issues Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-orange-500 via-orange-400 to-green-500 rounded-full" />

          <div className="space-y-12">
            {issues.map((issue, index) => {
              const Icon = issue.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col md:gap-12`}
                >
                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ${isEven ? 'md:text-right' : 'md:text-left'} text-left`}>
                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all p-6 md:p-8 border-2 border-gray-100 hover:border-orange-200 transform hover:scale-105 duration-300">
                      <div className={`flex items-center space-x-3 mb-4 ${isEven ? 'md:flex-row-reverse md:space-x-reverse' : ''}`}>
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${issue.color} flex items-center justify-center flex-shrink-0`}>
                          <Icon size={24} className="text-white" strokeWidth={2} />
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                          {issue.title}
                        </h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        {issue.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Icon */}
                  <div className="hidden md:flex w-2/12 justify-center">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${issue.color} flex items-center justify-center shadow-lg border-4 border-white z-10`}>
                      <Icon size={28} className="text-white" strokeWidth={2.5} />
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block w-5/12" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const Sprout = ({ size, className, strokeWidth }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M7 20h10" />
    <path d="M10 20c5.5-2.5.8-6.4 3-10" />
    <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z" />
    <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z" />
  </svg>
);

export default IssuesSection;
