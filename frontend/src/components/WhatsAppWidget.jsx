import React, { useState } from 'react';
import { MessageCircle, X, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { candidateInfo, getWhatsAppMessage } from '../utils/mock';

const WhatsAppWidget = ({ language, translations }) => {
  const [isOpen, setIsOpen] = useState(false);
  const t = translations[language];

  const handleWhatsAppClick = () => {
    const message = getWhatsAppMessage(language);
    window.open(`https://wa.me/${candidateInfo.whatsappNumber}?text=${message}`, '_blank');
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {isOpen && (
          <div className="absolute bottom-20 right-0 w-80 bg-white rounded-2xl shadow-2xl border-2 border-green-100 overflow-hidden animate-in slide-in-from-bottom-4 mb-2">
            {/* Header */}
            <div className="bg-gradient-to-r from-green-600 to-green-500 p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <MessageCircle size={20} className="text-green-600" />
                </div>
                <div>
                  <h4 className="text-white font-bold">{t.whatsapp.headline}</h4>
                  <p className="text-green-100 text-xs">{t.whatsapp.followers}</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 rounded-lg p-1 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="p-4 space-y-3">
              <p className="text-gray-700 font-semibold text-sm">
                {language === 'en' ? 'Get instant updates on:' : 'உடனடி தகவல்களைப் பெறுங்கள்:'}
              </p>
              {t.whatsapp.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{benefit}</span>
                </div>
              ))}

              <Button
                onClick={handleWhatsAppClick}
                className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white font-bold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 mt-4"
              >
                <MessageCircle className="mr-2" size={18} />
                {t.whatsapp.button}
              </Button>
            </div>
          </div>
        )}

        {/* Main Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full shadow-2xl hover:shadow-green-500/50 transition-all transform hover:scale-110 flex items-center justify-center group"
        >
          {isOpen ? (
            <X size={28} className="group-hover:rotate-90 transition-transform" />
          ) : (
            <MessageCircle size={28} className="group-hover:scale-110 transition-transform" />
          )}
        </button>

        {/* Pulse Animation */}
        {!isOpen && (
          <div className="absolute inset-0 w-16 h-16 bg-green-500 rounded-full animate-ping opacity-20" />
        )}
      </div>
    </>
  );
};

export default WhatsAppWidget;
