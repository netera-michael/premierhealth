import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Droplets, 
  Zap, 
  Circle, 
  Activity,
  Wind
} from 'lucide-react';

const SkincareDepartment: React.FC = () => {
  const { t } = useTranslation();

  // Skincare treatments with icons
  const skincareTreatments = [
    { key: 'oxygenLab', icon: Wind },
    { key: 'stemCells', icon: Sparkles },
    { key: 'hyperpigmentation', icon: Circle },
    { key: 'skinPeels', icon: Droplets },
    { key: 'hydraFacial', icon: Activity }
  ];

  const TreatmentCard = ({ treatmentKey, IconComponent }: { treatmentKey: string; IconComponent: React.ComponentType<any> }) => {
    const treatmentName = t(`skincare.treatments.${treatmentKey}`);
    
    return (
      <div className="group flex flex-col items-center justify-center p-6 bg-white rounded-lg border border-gray-200 hover:border-primary-500 hover:shadow-lg transition-all duration-300 cursor-pointer">
        <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <IconComponent className="w-10 h-10 text-white" />
        </div>
        <h3 className="text-center text-gray-900 font-medium text-sm leading-tight">{treatmentName}</h3>
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
            <span className="text-gray-900 font-medium">{t('skincare.title')}</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{t('skincare.title')}</h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-4xl">
            {t('skincare.description')}
          </p>
        </div>

        {/* Skincare Treatments Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">{t('skincare.treatments.title', 'Skincare')}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-4">
            {skincareTreatments.map((treatment) => (
              <TreatmentCard 
                key={treatment.key} 
                treatmentKey={treatment.key}
                IconComponent={treatment.icon}
              />
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl shadow-xl p-8 md:p-12 text-center text-white mt-16">
          <h2 className="text-3xl font-bold mb-4">{t('skincare.cta.title')}</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">{t('skincare.cta.description')}</p>
          <button className="bg-white text-primary-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg">
            {t('skincare.cta.button')}
          </button>
        </section>
      </div>
    </div>
  );
};

export default SkincareDepartment;
