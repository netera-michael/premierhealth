import React from 'react';
import { useTranslation } from 'react-i18next';
import { Clock, Tag, Check, Calendar } from 'lucide-react';

const VitaminDripsDepartment: React.FC = () => {
  const { t } = useTranslation();

  const treatments = [
    'energyBoost',
    'immunityShield',
    'mentalClarity',
    'beautyGlow',
    'detoxCleanse'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-primary-900 text-white py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1583830379747-195159d0de82?q=80&w=2070&auto=format&fit=crop"
            alt={t('vitaminDrips.title')}
            className="h-full w-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {t('vitaminDrips.title')}
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-primary-100/90">
            {t('vitaminDrips.description')}
          </p>
        </div>
      </div>

      {/* Treatments Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((key) => (
            <div key={key} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col">
              <div className="p-8 flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {t(`vitaminDrips.treatments.${key}.name`)}
                </h3>
                <p className="text-gray-600 mb-6">
                  {t(`vitaminDrips.treatments.${key}.description`)}
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-2 text-primary-500" />
                    <span>{t(`vitaminDrips.treatments.${key}.duration`)}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Tag className="w-4 h-4 mr-2 text-primary-500" />
                    <span>{t(`vitaminDrips.treatments.${key}.price`)}</span>
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-6">
                  <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                    {t('vitaminDrips.keyBenefits')}
                  </h4>
                  <ul className="space-y-2">
                    {/* We assume benefits is an array in standard simple JSON, but i18next return objects/arrays differently depending on config. 
                        Safe approach for array access in code with returnObjects: true */}
                    {(t(`vitaminDrips.treatments.${key}.benefits`, { returnObjects: true }) as string[]).map((benefit: string, index: number) => (
                      <li key={index} className="flex items-start text-sm text-gray-600">
                        <Check className="w-4 h-4 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-6 bg-gray-50 border-t border-gray-100">
                <button className="w-full flex items-center justify-center space-x-2 bg-primary-600 text-white py-3 px-6 rounded-tl-2xl rounded-br-2xl rounded-tr-none rounded-bl-none font-semibold hover:bg-primary-700 transition-all duration-300 shadow-md hover:shadow-lg">
                  <Calendar className="w-5 h-5" />
                  <span>{t('vitaminDrips.bookTreatment')}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white py-16 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t('vitaminDrips.cta.title')}
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            {t('vitaminDrips.cta.description')}
          </p>
          <button className="btn-modern text-lg py-4 px-8">
            {t('vitaminDrips.cta.button')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VitaminDripsDepartment;