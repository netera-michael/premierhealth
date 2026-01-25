import React from 'react';
import { ArrowRight, Star, Shield, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pb-32 lg:pb-36">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-primary-600">
                <Star className="w-5 h-5 fill-current" />
                <span className="font-medium">{t('hero.badge')}</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {t('hero.title')}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {t('hero.description')}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-modern px-8 py-4 flex items-center justify-center group">
                {t('hero.bookTreatment')}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>

            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-8 pt-8">
              <div className="flex items-center space-x-2">
                <Shield className="w-6 h-6 text-primary-600" />
                <span className="text-gray-700 font-medium">{t('hero.stats.medicalTeam')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-6 h-6 text-secondary-600" />
                <span className="text-gray-700 font-medium">{t('hero.stats.experience')}</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop"
                alt="Cosmetic Treatment"
                className="rounded-2xl shadow-2xl w-full h-[600px] object-cover"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-primary-200 to-secondary-200 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-gradient-to-tr from-secondary-200 to-primary-200 rounded-full opacity-20 blur-3xl"></div>
          </div>
        </div>
      </div>

      {/* Floating Stats */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block z-20 w-full max-w-2xl px-4">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl mx-auto">
          <div className="flex items-center space-x-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600">5000+</div>
              <div className="text-sm text-gray-600">{t('hero.stats.clients')}</div>
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary-600">15+</div>
              <div className="text-sm text-gray-600">{t('hero.stats.treatments')}</div>
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600">100%</div>
              <div className="text-sm text-gray-600">{t('hero.stats.safety')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
