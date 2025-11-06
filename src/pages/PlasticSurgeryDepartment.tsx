import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const PlasticSurgeryDepartment: React.FC = () => {
  const { t } = useTranslation();

  // Face procedures
  const faceProcedures = [
    'blepharoplasty',
    'buccalFatRemoval',
    'septoplasty',
    'otoplasty',
    'facelift',
    'rhinoplasty',
    'neckLift',
    'doubleChinLiposuction',
    'chinAugmentation'
  ];

  // Body procedures
  const bodyProcedures = [
    'brachioplasty',
    'panniculectomy',
    'bodyContouring360',
    'tummyTuck',
    'glutealAugmentation',
    'thighLift',
    'mommyMakeover',
    'bodyLiftSurgery',
    'jPlasma',
    'fatGrafting',
    'liposuction'
  ];

  // Breast procedures
  const breastProcedures = [
    'breastImplantRemoval',
    'breastLift',
    'breastAugmentation',
    'breastReduction',
    'gynecomastia'
  ];

  const ProcedureCard = ({ procedureKey, section }: { procedureKey: string; section: 'face' | 'body' | 'breast' }) => {
    const procedureName = t(`plasticSurgery.${section}.procedures.${procedureKey}`);
    
    // Generate a unique image based on procedure key for variety
    const imageId = procedureKey.length + section.length;
    const imageUrl = `https://images.unsplash.com/photo-${1552693673 + imageId}?ixlib=rb-4.1.0&auto=format&fit=crop&w=600&h=400&q=80`;
    
    return (
      <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 bg-white cursor-pointer">
        <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200">
          <img
            src={imageUrl}
            alt={procedureName}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = `https://placehold.co/600x400/365a74/ffffff?text=${encodeURIComponent(procedureName)}`;
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-white font-bold text-lg leading-tight drop-shadow-lg">{procedureName}</h3>
        </div>
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
            <span className="text-gray-900 font-medium">{t('plasticSurgery.title')}</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{t('plasticSurgery.title')}</h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-4xl">
            {t('plasticSurgery.description')}
          </p>
        </div>

        {/* Face Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">{t('plasticSurgery.face.title')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            {faceProcedures.map((procedureKey) => (
              <ProcedureCard key={procedureKey} procedureKey={procedureKey} section="face" />
            ))}
          </div>
        </section>

        {/* Body Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">{t('plasticSurgery.body.title')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {bodyProcedures.map((procedureKey) => (
              <ProcedureCard key={procedureKey} procedureKey={procedureKey} section="body" />
            ))}
          </div>
        </section>

        {/* Breast Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">{t('plasticSurgery.breast.title')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {breastProcedures.map((procedureKey) => (
              <ProcedureCard key={procedureKey} procedureKey={procedureKey} section="breast" />
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl shadow-xl p-8 md:p-12 text-center text-white mt-16">
          <h2 className="text-3xl font-bold mb-4">{t('plasticSurgery.cta.title')}</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">{t('plasticSurgery.cta.description')}</p>
          <button className="bg-white text-primary-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg">
            {t('plasticSurgery.cta.button')}
          </button>
        </section>
      </div>
    </div>
  );
};

export default PlasticSurgeryDepartment;
