import React, { useState } from 'react';
import { Menu, X, Phone, MapPin, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary-600 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>{t('header.phone')}</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>{t('header.location')}</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4" />
            <span>{t('header.hours')}</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src="/logo-png.png"
                alt="Premier Health Logo"
                className="h-24 object-contain"
                style={{ 
                  width: 'auto',
                  transform: 'scale(2) translateX(-25%)',
                  transformOrigin: 'center left'
                }}
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-primary-600 font-medium transition-colors relative group">
                {t('header.nav.home')}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#plastic-surgery" className="text-gray-700 hover:text-primary-600 font-medium transition-colors relative group">
                {t('header.nav.plasticSurgery')}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#vitamin-drips" className="text-gray-700 hover:text-primary-600 font-medium transition-colors relative group">
                {t('header.nav.vitaminDrips')}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#doctors" className="text-gray-700 hover:text-primary-600 font-medium transition-colors relative group">
                {t('header.nav.doctors')}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#about" className="text-gray-700 hover:text-primary-600 font-medium transition-colors relative group">
                {t('header.nav.about')}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#contact" className="text-gray-700 hover:text-primary-600 font-medium transition-colors relative group">
                {t('header.nav.contact')}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <LanguageSwitcher />
              <button className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-2 rounded-full hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 font-medium shadow-lg">
                {t('header.nav.bookAppointment')}
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-gray-700 hover:text-primary-600 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-4">
                <a
                  href="#home"
                  className="text-gray-700 hover:text-primary-600 font-medium transition-colors relative group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('header.nav.home')}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a
                  href="#plastic-surgery"
                  className="text-gray-700 hover:text-primary-600 font-medium transition-colors relative group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('header.nav.plasticSurgery')}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a
                  href="#vitamin-drips"
                  className="text-gray-700 hover:text-primary-600 font-medium transition-colors relative group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('header.nav.vitaminDrips')}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a
                  href="#doctors"
                  className="text-gray-700 hover:text-primary-600 font-medium transition-colors relative group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('header.nav.doctors')}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a
                  href="#about"
                  className="text-gray-700 hover:text-primary-600 font-medium transition-colors relative group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('header.nav.about')}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a
                  href="#contact"
                  className="text-gray-700 hover:text-primary-600 font-medium transition-colors relative group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('header.nav.contact')}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <LanguageSwitcher />
                <button className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-2 rounded-full hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 font-medium shadow-lg w-fit">
                  {t('header.nav.bookAppointment')}
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;