import React from 'react';
import { MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const locations = [
  { key: 'fairmontNileCity' },
  { key: 'edncSodic' },
  { key: 'arkanPlaza' },
];

const Locations = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('locations.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('locations.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {locations.map((location) => (
            <div
              key={location.key}
              className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mb-6">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t(`locations.items.${location.key}.name`)}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t(`locations.items.${location.key}.address`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
