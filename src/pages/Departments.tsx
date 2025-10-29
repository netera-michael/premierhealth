import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Departments: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{t('departments.title', 'Departments')}</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('departments.description', 'Explore our various medical departments and specialized services')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Plastic Surgery Department */}
          <Link to="/departments/plastic-surgery" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">{t('departments.plasticSurgery')}</h2>
            <p className="text-gray-600 mb-4">
              {t('departments.plasticSurgeryDescription', 'Modern surgical procedures and aesthetic treatments')}
            </p>
            <button className="text-primary-600 hover:text-primary-800 font-medium">
              {t('departments.learnMore', 'Learn More')} →
            </button>
          </Link>

          {/* Dermatology Department */}
          <Link to="/departments/dermatology" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">{t('departments.dermatology')}</h2>
            <p className="text-gray-600 mb-4">
              {t('departments.dermatologyDescription', 'Skin care and treatment for various conditions')}
            </p>
            <button className="text-primary-600 hover:text-primary-800 font-medium">
              {t('departments.learnMore', 'Learn More')} →
            </button>
          </Link>

          {/* Skincare Department */}
          <Link to="/departments/skincare" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">{t('departments.skincare')}</h2>
            <p className="text-gray-600 mb-4">
              {t('departments.skincareDescription', 'Specialized skin care and rejuvenation treatments')}
            </p>
            <button className="text-primary-600 hover:text-primary-800 font-medium">
              {t('departments.learnMore', 'Learn More')} →
            </button>
          </Link>

          {/* Laser Department */}
          <Link to="/departments/laser" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">{t('departments.laser')}</h2>
            <p className="text-gray-600 mb-4">
              {t('departments.laserDescription', 'Advanced laser treatments and procedures')}
            </p>
            <button className="text-primary-600 hover:text-primary-800 font-medium">
              {t('departments.learnMore', 'Learn More')} →
            </button>
          </Link>

          {/* Wellness Department */}
          <Link to="/departments/wellness" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">{t('departments.wellness')}</h2>
            <p className="text-gray-600 mb-4">
              {t('departments.wellnessDescription', 'Holistic health and wellness programs')}
            </p>
            <button className="text-primary-600 hover:text-primary-800 font-medium">
              {t('departments.learnMore', 'Learn More')} →
            </button>
          </Link>

          {/* Physiotherapy Department */}
          <Link to="/departments/physiotherapy" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">{t('departments.physiotherapy')}</h2>
            <p className="text-gray-600 mb-4">
              {t('departments.physiotherapyDescription', 'Physical therapy and rehabilitation services')}
            </p>
            <button className="text-primary-600 hover:text-primary-800 font-medium">
              {t('departments.learnMore', 'Learn More')} →
            </button>
          </Link>

          {/* Osteopathy Department */}
          <Link to="/departments/osteopathy" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">{t('departments.osteopathy')}</h2>
            <p className="text-gray-600 mb-4">
              {t('departments.osteopathyDescription', 'Manual therapy and osteopathic treatments')}
            </p>
            <button className="text-primary-600 hover:text-primary-800 font-medium">
              {t('departments.learnMore', 'Learn More')} →
            </button>
          </Link>

          {/* Dental Department */}
          <Link to="/departments/dental" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">{t('departments.dental')}</h2>
            <p className="text-gray-600 mb-4">
              {t('departments.dentalDescription', 'Comprehensive dental care and treatments')}
            </p>
            <button className="text-primary-600 hover:text-primary-800 font-medium">
              {t('departments.learnMore', 'Learn More')} →
            </button>
          </Link>

          {/* OB-Gyn Department */}
          <Link to="/departments/ob-gyn" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">{t('departments.obGyn')}</h2>
            <p className="text-gray-600 mb-4">
              {t('departments.obGynDescription', 'Women\'s health and reproductive services')}
            </p>
            <button className="text-primary-600 hover:text-primary-800 font-medium">
              {t('departments.learnMore', 'Learn More')} →
            </button>
          </Link>

          {/* Vitamin Drips Department */}
          <Link to="/departments/vitamin-drips" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">{t('departments.vitaminDrips')}</h2>
            <p className="text-gray-600 mb-4">
              {t('departments.vitaminDripsDescription', 'IV vitamin therapy and nutritional infusions')}
            </p>
            <button className="text-primary-600 hover:text-primary-800 font-medium">
              {t('departments.learnMore', 'Learn More')} →
            </button>
          </Link>

          {/* Integrative Medicine Department */}
          <Link to="/departments/integrative-medicine" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">{t('departments.integrativeMedicine')}</h2>
            <p className="text-gray-600 mb-4">
              {t('departments.integrativeMedicineDescription', 'Combining traditional and alternative medicine')}
            </p>
            <button className="text-primary-600 hover:text-primary-800 font-medium">
              {t('departments.learnMore', 'Learn More')} →
            </button>
          </Link>

          {/* Fertility & IVF Department */}
          <Link to="/departments/fertility-ivf" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">{t('departments.fertilityIVF')}</h2>
            <p className="text-gray-600 mb-4">
              {t('departments.fertilityIVFDescription', 'Fertility treatments and IVF services')}
            </p>
            <button className="text-primary-600 hover:text-primary-800 font-medium">
              {t('departments.learnMore', 'Learn More')} →
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Departments;