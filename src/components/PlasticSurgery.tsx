import React from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronRight } from 'lucide-react';

const PlasticSurgery = () => {
  const { t } = useTranslation();

  return (
    <section id="plastic-surgery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('plasticSurgery.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('plasticSurgery.description')}
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t('plasticSurgery.intro.title')}
              </h3>
              <p className="text-gray-600 mb-4">
                {t('plasticSurgery.intro.description')}
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-primary-600 mt-0.5 mr-2" />
                  <span>{t('plasticSurgery.intro.feature1')}</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-primary-600 mt-0.5 mr-2" />
                  <span>{t('plasticSurgery.intro.feature2')}</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-primary-600 mt-0.5 mr-2" />
                  <span>{t('plasticSurgery.intro.feature3')}</span>
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-center w-full h-80">
              <img
                src="https://images.unsplash.com/photo-1552693673-1bf958298935?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2073"
                alt="Plastic surgery procedures"
                className="w-full h-full object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Procedure Categories */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            {t('plasticSurgery.categories.title')}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Face Procedures */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-primary-600 p-6">
                <h4 className="text-xl font-bold text-white">
                  {t('plasticSurgery.categories.face.title')}
                </h4>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {Array.from({ length: 9 }).map((_, index) => (
                    <li key={index} className="flex items-center">
                      <ChevronRight className="w-4 h-4 text-primary-600 mr-2" />
                      <span>{t(`plasticSurgery.categories.face.procedures.${index}`) || `Procedure ${index + 1}`}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Body Procedures */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-primary-600 p-6">
                <h4 className="text-xl font-bold text-white">
                  {t('plasticSurgery.categories.body.title')}
                </h4>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {Array.from({ length: 11 }).map((_, index) => (
                    <li key={index} className="flex items-center">
                      <ChevronRight className="w-4 h-4 text-primary-600 mr-2" />
                      <span>{t(`plasticSurgery.categories.body.procedures.${index}`) || `Body Procedure ${index + 1}`}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Breast Procedures */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-primary-600 p-6">
                <h4 className="text-xl font-bold text-white">
                  {t('plasticSurgery.categories.breast.title')}
                </h4>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <li key={index} className="flex items-center">
                      <ChevronRight className="w-4 h-4 text-primary-600 mr-2" />
                      <span>{t(`plasticSurgery.categories.breast.procedures.${index}`) || `Breast Procedure ${index + 1}`}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl shadow-xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            {t('plasticSurgery.cta.title')}
          </h3>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            {t('plasticSurgery.cta.description')}
          </p>
          <button className="bg-white text-primary-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg">
            {t('plasticSurgery.cta.button')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default PlasticSurgery;