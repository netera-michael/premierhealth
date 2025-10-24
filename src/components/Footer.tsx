import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="relative" style={{ width: '220px', height: '80px' }}>
                <img
                  src="/logo-png-lean.png"
                  alt="Premier Health Logo"
                  className="absolute inset-0 w-full h-full object-contain"
                  style={{
                    objectPosition: 'left center'
                  }}
                />
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t('footer.quickLinks.title')}</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">{t('footer.quickLinks.home')}</a></li>
              <li><a href="#vitamin-drips" className="text-gray-300 hover:text-white transition-colors">{t('footer.quickLinks.vitaminDrips')}</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">{t('footer.quickLinks.about')}</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">{t('footer.quickLinks.contact')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{t('footer.quickLinks.privacy')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{t('footer.quickLinks.terms')}</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t('footer.contactInfo.title')}</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-primary-400 mr-3" />
                <span className="text-gray-300">{t('footer.contactInfo.phone')}</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-primary-400 mr-3" />
                <span className="text-gray-300">{t('footer.contactInfo.email')}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-primary-400 mr-3" />
                <span className="text-gray-300">{t('footer.contactInfo.location')}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-primary-400 mr-3" />
                <span className="text-gray-300">{t('footer.contactInfo.hours')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h4 className="text-sm font-semibold text-gray-400 mb-3">{t('footer.paymentMethods')}</h4>
              <div className="flex items-center space-x-4">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png"
                  alt="Visa"
                  className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png"
                  alt="Mastercard"
                  className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity"
                />
                <img
                  src="https://www.valu.com.eg/assets/images/valu.webp"
                  alt="valU"
                  className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity"
                />
                <img
                  src="https://tabby.ai/static/tabby-logo-light.svg"
                  alt="Tabby"
                  className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity"
                />
                <img
                  src="https://tamara.co/static/images/tamara-logo-white.svg"
                  alt="Tamara"
                  className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>

            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                {t('footer.copyright')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
