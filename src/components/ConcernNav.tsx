import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const concerns = [
  { key: 'skinDiseases', link: '/departments/dermatology', emoji: '🔬' },
  { key: 'volumeLoss', link: '/departments/skincare', emoji: '✨' },
  { key: 'wrinkles', link: '/departments/skincare', emoji: '🪞' },
  { key: 'bodyShaping', link: '/departments/plastic-surgery', emoji: '💪' },
  { key: 'ivDrips', link: '/departments/vitamin-drips', emoji: '💉' },
  { key: 'scalpIssues', link: '/departments/dermatology', emoji: '🧴' },
  { key: 'generalSkin', link: '/departments/skincare', emoji: '🌿' },
];

const ConcernNav = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-primary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            {t('concernNav.title')}
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            {t('concernNav.description')}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
          {concerns.map((concern) => (
            <Link
              key={concern.key}
              to={concern.link}
              className="flex flex-col items-center text-center p-4 rounded-xl bg-white/10 hover:bg-white/20 transition-colors duration-200 group"
            >
              <span className="text-3xl mb-3">{concern.emoji}</span>
              <span className="text-sm font-medium text-white leading-tight">
                {t(`concernNav.items.${concern.key}`)}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConcernNav;
