import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { candidateInfo, translations } from '../utils/mock';

const Footer = ({ language }) => {
  const t = translations[language];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-2xl">B</span>
              </div>
              <div>
                <h3 className="font-bold text-xl">{candidateInfo.name}</h3>
                <p className="text-orange-400 text-sm font-semibold">BJP 2026</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              {t.footer.slogan}
            </p>
            <p className="text-gray-400 text-xs leading-relaxed">
              {t.footer.trust}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-orange-400">{t.footer.quickLinks}</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-orange-400 transition-colors text-sm"
                >
                  {t.nav.about}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('vision')}
                  className="text-gray-300 hover:text-orange-400 transition-colors text-sm"
                >
                  {t.nav.vision}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('issues')}
                  className="text-gray-300 hover:text-orange-400 transition-colors text-sm"
                >
                  {t.nav.issues}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('achievements')}
                  className="text-gray-300 hover:text-orange-400 transition-colors text-sm"
                >
                  {t.nav.achievements}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('join')}
                  className="text-gray-300 hover:text-orange-400 transition-colors text-sm"
                >
                  {t.nav.join}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-orange-400">{t.footer.contact}</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${candidateInfo.campaignPhone}`}
                  className="flex items-start space-x-3 text-gray-300 hover:text-orange-400 transition-colors group"
                >
                  <Phone size={18} className="mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">{candidateInfo.campaignPhone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${candidateInfo.campaignEmail}`}
                  className="flex items-start space-x-3 text-gray-300 hover:text-orange-400 transition-colors group"
                >
                  <Mail size={18} className="mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">{candidateInfo.campaignEmail}</span>
                </a>
              </li>
              <li>
                <div className="flex items-start space-x-3 text-gray-300">
                  <MapPin size={18} className="mt-1 flex-shrink-0" />
                  <span className="text-sm">{candidateInfo.campaignAddress}</span>
                </div>
              </li>
            </ul>

            {/* Social Media */}
            <div className="mt-6">
              <h5 className="font-semibold text-sm mb-4 text-orange-400">{t.footer.followUs}</h5>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 hover:bg-orange-600 rounded-full flex items-center justify-center transition-all transform hover:scale-110"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 hover:bg-orange-600 rounded-full flex items-center justify-center transition-all transform hover:scale-110"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 hover:bg-orange-600 rounded-full flex items-center justify-center transition-all transform hover:scale-110"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 hover:bg-orange-600 rounded-full flex items-center justify-center transition-all transform hover:scale-110"
                >
                  <Youtube size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400 text-center md:text-left">
              © 2026 {candidateInfo.name} Campaign. {language === 'en' ? 'All rights reserved.' : 'அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.'}
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <button className="hover:text-orange-400 transition-colors">
                {language === 'en' ? 'Privacy Policy' : 'தனியுரிமை கொள்கை'}
              </button>
              <span>|</span>
              <button className="hover:text-orange-400 transition-colors">
                {language === 'en' ? 'Terms of Service' : 'சேவை விதிமுறைகள்'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
