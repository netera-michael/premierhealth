import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const categories = [
  {
    key: 'ivDripTherapy',
    link: '/departments/vitamin-drips',
    image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=800&auto=format&fit=crop',
  },
  {
    key: 'dermatology',
    link: '/departments/dermatology',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop',
  },
  {
    key: 'aesthetics',
    link: '/departments/skincare',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=800&auto=format&fit=crop',
  },
  {
    key: 'bodyContouring',
    link: '/departments/plastic-surgery',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=800&auto=format&fit=crop',
  },
];

const ServiceCategories = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('serviceCategories.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('serviceCategories.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.key}
              to={cat.link}
              className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 block"
            >
              <div className="aspect-[3/4] relative">
                <img
                  src={cat.image}
                  alt={t(`serviceCategories.items.${cat.key}.title`)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {t(`serviceCategories.items.${cat.key}.title`)}
                  </h3>
                  <p className="text-sm text-white/80 mb-3">
                    {t(`serviceCategories.items.${cat.key}.subtitle`)}
                  </p>
                  <span className="inline-flex items-center text-sm font-medium text-white group-hover:gap-2 transition-all">
                    {t('serviceCategories.explore')}
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;
