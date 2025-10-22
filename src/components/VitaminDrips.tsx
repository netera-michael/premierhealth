import React from 'react';
import { Zap, Shield, Brain, Sparkles, Leaf, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const VitaminDrips = () => {
  const { t } = useTranslation();

  const treatments = [
    {
      icon: Zap,
      key: 'energyBoost'
    },
    {
      icon: Shield,
      key: 'immunityShield'
    },
    {
      icon: Brain,
      key: 'mentalClarity'
    },
    {
      icon: Sparkles,
      key: 'beautyGlow'
    },
    {
      icon: Leaf,
      key: 'detoxCleanse'
    }
  ];

  return (
    <section id="vitamin-drips" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('vitaminDrips.title')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('vitaminDrips.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((treatment, index) => {
            const IconComponent = treatment.icon;
            return (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{t(`vitaminDrips.treatments.${treatment.key}.name`)}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>{t(`vitaminDrips.treatments.${treatment.key}.duration`)}</span>
                      <span className="text-primary-600 font-semibold">{t(`vitaminDrips.treatments.${treatment.key}.price`)}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">{t(`vitaminDrips.treatments.${treatment.key}.description`)}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">{t('vitaminDrips.keyBenefits')}</h4>
                  <ul className="space-y-2">
                    {(t(`vitaminDrips.treatments.${treatment.key}.benefits`, { returnObjects: true }) as string[]).map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 flex items-center justify-center group">
                  {t('vitaminDrips.bookTreatment')}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('vitaminDrips.cta.title')}</h3>
            <p className="text-gray-600 mb-6">
              {t('vitaminDrips.cta.description')}
            </p>
            <button className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-3 rounded-full font-semibold hover:from-primary-600 hover:to-secondary-600 transition-all duration-300">
              {t('vitaminDrips.cta.button')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VitaminDrips;
