import React from 'react';
import { useTranslation } from 'react-i18next';

const PlasticSurgeryDepartment: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{t('departments.plasticSurgery')}</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('plasticSurgery.description')}
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('plasticSurgery.intro.title')}</h2>
          <p className="text-gray-600 mb-6">{t('plasticSurgery.intro.description')}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-900">{t('plasticSurgery.intro.feature1')}</h3>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-900">{t('plasticSurgery.intro.feature2')}</h3>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-900">{t('plasticSurgery.intro.feature3')}</h3>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('plasticSurgery.categories.title')}</h2>
          
          <div className="space-y-8">
            {/* Face Procedures */}
            <div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">{t('plasticSurgery.categories.face.title')}</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {Object.keys(t('plasticSurgery.categories.face.procedures', { returnObjects: true })).map((key) => (
                  <li key={key} className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>{t(`plasticSurgery.categories.face.procedures.${key}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Body Procedures */}
            <div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">{t('plasticSurgery.categories.body.title')}</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {Object.keys(t('plasticSurgery.categories.body.procedures', { returnObjects: true })).map((key) => (
                  <li key={key} className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>{t(`plasticSurgery.categories.body.procedures.${key}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Breast Procedures */}
            <div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">{t('plasticSurgery.categories.breast.title')}</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {Object.keys(t('plasticSurgery.categories.breast.procedures', { returnObjects: true })).map((key) => (
                  <li key={key} className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>{t(`plasticSurgery.categories.breast.procedures.${key}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg shadow-md p-8 mt-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">{t('plasticSurgery.cta.title')}</h2>
          <p className="mb-6">{t('plasticSurgery.cta.description')}</p>
          <button className="bg-white text-primary-600 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
            {t('plasticSurgery.cta.button')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlasticSurgeryDepartment;