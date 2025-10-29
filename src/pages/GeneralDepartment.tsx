import React from 'react';
import { useTranslation } from 'react-i18next';

const GeneralDepartment: React.FC<{ departmentKey: string }> = ({ departmentKey }) => {
  const { t } = useTranslation();
  const departmentName = t(`departments.${departmentKey}`);
  const departmentTitle = t(`departments.${departmentKey}Title`, { defaultValue: departmentName });
  const departmentDescription = t(`departments.${departmentKey}Description`, { 
    defaultValue: t('departments.defaultDescription', 'Comprehensive services and treatments for your health and wellness.') 
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{departmentTitle}</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {departmentDescription}
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('departments.overview', 'Overview')}</h2>
          <p className="text-gray-600 mb-6">
            {t(`departments.${departmentKey}Overview`, { 
              defaultValue: t('departments.defaultOverview', 'Our department provides specialized care and treatment tailored to your needs. Our team of experienced professionals is dedicated to delivering high-quality services.') 
            })}
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('departments.services', 'Services')}</h2>
          
          <div className="space-y-4">
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-medium text-gray-900">{t('departments.service1', 'Consultation')}</h3>
              <p className="text-gray-600 mt-1">{t('departments.service1Description', 'Initial assessment and personalized treatment plan')}</p>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-medium text-gray-900">{t('departments.service2', 'Treatment')}</h3>
              <p className="text-gray-600 mt-1">{t('departments.service2Description', 'Professional treatment with advanced techniques')}</p>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-medium text-gray-900">{t('departments.service3', 'Follow-up')}</h3>
              <p className="text-gray-600 mt-1">{t('departments.service3Description', 'Ongoing care and monitoring of your progress')}</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg shadow-md p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">{t('departments.cta.title', 'Ready to Get Started?')}</h2>
          <p className="mb-6">{t('departments.cta.description', 'Contact our team to schedule your consultation today')}</p>
          <button className="bg-white text-primary-600 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
            {t('departments.cta.button', 'Book Appointment')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GeneralDepartment;