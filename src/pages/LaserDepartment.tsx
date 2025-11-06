import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const LaserDepartment: React.FC = () => {
  const { t } = useTranslation();

  // Laser treatments
  const laserTreatments = [
    'laserHairRemoval',
    'laserTattooRemoval'
  ];

  // Laser devices
  const laserDevices = [
    'cynosure',
    'splendorX',
    'fotona',
    'clarityII',
    'gentleMaxPro'
  ];

  const ItemCard = ({ itemKey, section }: { itemKey: string; section: 'treatments' | 'devices' }) => {
    const itemName = t(`laser.${section}.${itemKey}`);
    
    return (
      <div className="group flex flex-col items-center justify-center p-6 bg-white rounded-lg border border-gray-200 hover:border-primary-500 hover:shadow-lg transition-all duration-300 cursor-pointer">
        <div className="w-20 h-20 mb-4 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
          <img
            src="/laser.png"
            alt={itemName}
            className="w-full h-full object-contain"
          />
        </div>
        <h3 className="text-center text-gray-900 font-medium text-sm leading-tight">{itemName}</h3>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-primary-600">Home</Link>
            <span>/</span>
            <Link to="/departments" className="hover:text-primary-600">Departments</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{t('laser.title')}</span>
          </nav>
        </div>
      </div>

      {/* Page Hero Section */}
      <section className="pagehero relative overflow-hidden bg-gray-900">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.1.0&auto=format&fit=crop&w=1920&q=80"
            alt={t('laser.title')}
            className="h-full w-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {t('laser.title')}
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              {t('laser.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Laser Treatments Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">{t('laser.treatments.title', 'Laser Treatments')}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-4">
            {laserTreatments.map((treatmentKey) => (
              <ItemCard 
                key={treatmentKey} 
                itemKey={treatmentKey}
                section="treatments"
              />
            ))}
          </div>
        </section>

        {/* Laser Devices Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">{t('laser.devices.title', 'Laser Devices')}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-4">
            {laserDevices.map((deviceKey) => (
              <ItemCard 
                key={deviceKey} 
                itemKey={deviceKey}
                section="devices"
              />
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl shadow-xl p-8 md:p-12 text-center text-white mt-16">
          <h2 className="text-3xl font-bold mb-4">{t('laser.cta.title')}</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">{t('laser.cta.description')}</p>
          <button className="bg-white text-primary-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg">
            {t('laser.cta.button')}
          </button>
        </section>
      </div>
    </div>
  );
};

export default LaserDepartment;
