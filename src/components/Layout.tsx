import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Footer from './Footer';
import LanguageSwitcher from './LanguageSwitcher';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();
  const location = useLocation();

  // Check if the current path is the home page
  const isHomePage = location.pathname === '/';

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
              <div className="relative" style={{ width: '220px', height: '80px' }}>
                <Link to="/">
                  <img
                    src="/logo-png-lean.png"
                    alt="Premier Health Logo"
                    className="absolute inset-0 w-full h-full object-contain"
                    style={{
                      objectPosition: 'left center'
                    }}
                  />
                </Link>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link 
                to="/" 
                className={`text-gray-700 hover:text-primary-600 font-medium transition-colors relative group ${isHomePage ? 'font-bold' : ''}`}
              >
                {t('header.nav.home')}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              
              {/* Departments Dropdown */}
              <div className="relative group">
                <button className="text-gray-700 hover:text-primary-600 font-medium transition-colors relative">
                  {t('header.nav.departments')}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
                </button>
                <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="py-2">
                    <Link 
                      to="/departments/plastic-surgery" 
                      className="block px-4 py-2 text-gray-700 hover:bg-primary-100 hover:text-primary-600 transition-colors"
                    >
                      {t('departments.plasticSurgery')}
                    </Link>
                    <Link 
                      to="/departments/dermatology" 
                      className="block px-4 py-2 text-gray-700 hover:bg-primary-100 hover:text-primary-600 transition-colors"
                    >
                      {t('departments.dermatology')}
                    </Link>
                    <Link 
                      to="/departments/skincare" 
                      className="block px-4 py-2 text-gray-700 hover:bg-primary-100 hover:text-primary-600 transition-colors"
                    >
                      {t('departments.skincare')}
                    </Link>
                    <Link 
                      to="/departments/laser" 
                      className="block px-4 py-2 text-gray-700 hover:bg-primary-100 hover:text-primary-600 transition-colors"
                    >
                      {t('departments.laser')}
                    </Link>
                    <Link 
                      to="/departments/vitamin-drips" 
                      className="block px-4 py-2 text-gray-700 hover:bg-primary-100 hover:text-primary-600 transition-colors"
                    >
                      {t('departments.vitaminDrips')}
                    </Link>
                  </div>
                </div>
              </div>
              
              <Link 
                to="/about" 
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors relative group"
              >
                {t('header.nav.about')}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors relative group"
              >
                {t('header.nav.contact')}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
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
                <Link
                  to="/"
                  className={`text-gray-700 hover:text-primary-600 font-medium transition-colors relative group ${isHomePage ? 'font-bold' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('header.nav.home')}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                
                {/* Mobile Departments Menu */}
                <div className="relative">
                  <button className="text-gray-700 hover:text-primary-600 font-medium transition-colors relative flex justify-between w-full">
                    <span>{t('header.nav.departments')}</span>
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>
                  <div className="ml-4 mt-2 space-y-2 border-l-2 border-gray-200 pl-4">
                    <Link 
                      to="/departments/plastic-surgery" 
                      className="block py-1 text-gray-700 hover:text-primary-600 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {t('departments.plasticSurgery')}
                    </Link>
                    <Link 
                      to="/departments/dermatology" 
                      className="block py-1 text-gray-700 hover:text-primary-600 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {t('departments.dermatology')}
                    </Link>
                    <Link 
                      to="/departments/skincare" 
                      className="block py-1 text-gray-700 hover:text-primary-600 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {t('departments.skincare')}
                    </Link>
                    <Link 
                      to="/departments/laser" 
                      className="block py-1 text-gray-700 hover:text-primary-600 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {t('departments.laser')}
                    </Link>
                    <Link 
                      to="/departments/vitamin-drips" 
                      className="block py-1 text-gray-700 hover:text-primary-600 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {t('departments.vitaminDrips')}
                    </Link>
                  </div>
                </div>
                
                <Link
                  to="/about"
                  className="text-gray-700 hover:text-primary-600 font-medium transition-colors relative group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('header.nav.about')}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link
                  to="/contact"
                  className="text-gray-700 hover:text-primary-600 font-medium transition-colors relative group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('header.nav.contact')}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <LanguageSwitcher />
                <button className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-2 rounded-full hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 font-medium shadow-lg w-fit">
                  {t('header.nav.bookAppointment')}
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Page Content */}
      <main>
        {children}
      </main>
      
      {/* Footer */}
      <Footer />
    </>
  );
};

export default Layout;