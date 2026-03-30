import React from 'react';
import { CheckCircle } from 'lucide-react';

const LeadCaptureSection = ({ language, translations }) => {
  const t = translations[language];

  return (
    <section id="join" className="py-16 md:py-24 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.leadCapture.headline}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-green-500 mx-auto rounded-full mb-6" />
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            {t.leadCapture.description}
          </p>
        </div>

        {/* Google Form Embed */}
        <div className="bg-white rounded-3xl shadow-2xl p-4 md:p-8 border-2 border-orange-100">
          <div className="w-full overflow-hidden rounded-xl">
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSdKL_Ay9DaK2z_u4mrDKr8_zohCWrykKrmqFImDu1Guaq9ZFw/viewform?embedded=true" 
              width="100%" 
              height="1400" 
              frameBorder="0" 
              marginHeight="0" 
              marginWidth="0"
              className="w-full"
              title="Campaign Contact Form"
            >
              Loading…
            </iframe>
          </div>
          
          {/* Trust Message */}
          <div className="mt-6 flex items-start space-x-3 bg-green-50 p-4 rounded-xl">
            <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
            <p className="text-sm text-gray-700">
              {t.leadCapture.privacy}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadCaptureSection;
