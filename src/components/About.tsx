import React from 'react';
import { Shield, Award, Users, Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  const features = [
    { icon: Shield, key: 'safetyFirst', bgColor: 'bg-primary-100', iconColor: 'text-primary-600' },
    { icon: Award, key: 'premiumQuality', bgColor: 'bg-secondary-100', iconColor: 'text-secondary-600' },
    { icon: Users, key: 'expertTeam', bgColor: 'bg-primary-100', iconColor: 'text-primary-600' },
    { icon: Heart, key: 'personalizedCare', bgColor: 'bg-secondary-100', iconColor: 'text-secondary-600' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('about.title')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('about.description')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              {t('about.heading')}
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {t('about.paragraph1')}
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              {t('about.paragraph2')}
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">10+</div>
                <div className="text-gray-600">{t('about.stats.experience')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">5000+</div>
                <div className="text-gray-600">{t('about.stats.clients')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">15+</div>
                <div className="text-gray-600">{t('about.stats.treatments')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
                <div className="text-gray-600">{t('about.stats.safety')}</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center mr-4`}>
                      <IconComponent className={`w-6 h-6 ${feature.iconColor}`} />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900">{t(`about.features.${feature.key}.title`)}</h4>
                  </div>
                  <p className="text-gray-600">
                    {t(`about.features.${feature.key}.description`)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
