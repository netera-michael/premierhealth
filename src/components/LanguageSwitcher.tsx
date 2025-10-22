import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ru' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 text-gray-700 hover:text-primary-600 font-medium transition-colors"
      aria-label="Switch language"
    >
      <Globe className="w-5 h-5" />
      <span className="uppercase">{i18n.language === 'en' ? 'RU' : 'EN'}</span>
    </button>
  );
};

export default LanguageSwitcher;
