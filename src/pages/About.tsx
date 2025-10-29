import React from 'react';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{t('about.title')}</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('about.description')}
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('about.heading')}</h2>
          <p className="text-gray-600 mb-6">{t('about.paragraph1')}</p>
          <p className="text-gray-600 mb-6">{t('about.paragraph2')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('about.stats.experience')}</h3>
            <p className="text-gray-600">{t('about.stats.clients')}</p>
            <p className="text-gray-600">{t('about.stats.treatments')}</p>
            <p className="text-gray-600">{t('about.stats.safety')}</p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-medium text-gray-900">{t('about.features.safetyFirst.title')}</h3>
              <p className="text-gray-600">{t('about.features.safetyFirst.description')}</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-medium text-gray-900">{t('about.features.premiumQuality.title')}</h3>
              <p className="text-gray-600">{t('about.features.premiumQuality.description')}</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-medium text-gray-900">{t('about.features.expertTeam.title')}</h3>
              <p className="text-gray-600">{t('about.features.expertTeam.description')}</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-medium text-gray-900">{t('about.features.personalizedCare.title')}</h3>
              <p className="text-gray-600">{t('about.features.personalizedCare.description')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;