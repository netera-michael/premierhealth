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
    
    return (
      <div className="group flex flex-col items-center justify-center p-6 bg-white rounded-lg border border-gray-200 hover:border-primary-500 hover:shadow-lg transition-all duration-300 cursor-pointer">
        <div className="w-20 h-20 mb-4 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
          <img
            src="/plastic-surgery-icon.svg"
            alt={procedureName}
            className="w-full h-full object-contain"
          />
        </div>
        <h3 className="text-center text-gray-900 font-medium text-sm leading-tight">{procedureName}</h3>
      </div>
    );
  };

  // YouTube videos data - get from translations
  const youtubeVideos = t('plasticSurgery.videos.items', { returnObjects: true }) as Array<{
    id: string;
    title: string;
    thumbnail?: string;
  }>;

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

      {/* Page Hero Section */}
      <section className="pagehero relative overflow-hidden bg-gray-900">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1552693673-1bf958298935?ixlib=rb-4.1.0&auto=format&fit=crop&w=1920&q=80"
            alt={t('plasticSurgery.title')}
            className="h-full w-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {t('plasticSurgery.title')}
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              {t('plasticSurgery.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Face Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">{t('plasticSurgery.face.title')}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {faceProcedures.map((procedureKey) => (
              <ProcedureCard 
                key={procedureKey} 
                procedureKey={procedureKey} 
                section="face"
              />
            ))}
          </div>
        </section>

        {/* Body Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">{t('plasticSurgery.body.title')}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {bodyProcedures.map((procedureKey) => (
              <ProcedureCard 
                key={procedureKey} 
                procedureKey={procedureKey} 
                section="body"
              />
            ))}
          </div>
        </section>

        {/* Breast Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">{t('plasticSurgery.breast.title')}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {breastProcedures.map((procedureKey) => (
              <ProcedureCard 
                key={procedureKey} 
                procedureKey={procedureKey} 
                section="breast"
              />
            ))}
          </div>
        </section>

        {/* YouTube Videos Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">{t('plasticSurgery.videos.title', 'Videos')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {youtubeVideos && Array.isArray(youtubeVideos) && youtubeVideos.map((video: any, index: number) => {
              const thumbnail = video.thumbnail || `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`;
              return (
                <div 
                  key={index} 
                  className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                  onClick={() => window.open(`https://www.youtube.com/watch?v=${video.id}`, '_blank')}
                >
                  <div className="relative aspect-video bg-gray-200">
                    <img
                      src={thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src = 'https://placehold.co/800x450/365a74/ffffff?text=Video';
                      }}
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-white">
                    <h3 className="text-lg font-semibold text-gray-900">{video.title}</h3>
                  </div>
                </div>
              );
            })}
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
