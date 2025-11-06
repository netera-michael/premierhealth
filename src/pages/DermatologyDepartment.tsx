import React from 'react';
import {
  Sparkles,
  ShieldCheck,
  Stethoscope,
  Microscope,
  ThermometerSun,
  SunMedium,
  Droplet,
  ArrowRight,
  CheckCircle2,
  Leaf,
  Timer,
  HeartPulse,
  UserCheck
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const toArray = <T,>(value: unknown, fallback: T[] = []): T[] =>
  Array.isArray(value) ? (value as T[]) : fallback;

const DermatologyDepartment: React.FC = () => {
  const { t } = useTranslation();

  const heroHighlights = toArray<string>(
    t('dermatologyDepartment.hero.highlights', { returnObjects: true })
  );

  const introParagraphs = toArray<string>(
    t('dermatologyDepartment.intro.paragraphs', { returnObjects: true })
  );

  const serviceGroups = toArray<{
    title: string;
    description: string;
    items: string[];
  }>(t('dermatologyDepartment.services.groups', { returnObjects: true }));

  const conditions = toArray<string>(
    t('dermatologyDepartment.conditions.items', { returnObjects: true })
  );

  const technologies = toArray<{
    title: string;
    description: string;
  }>(t('dermatologyDepartment.technologies.items', { returnObjects: true }));

  const experienceStats = toArray<{
    value: string;
    label: string;
  }>(t('dermatologyDepartment.experience.stats', { returnObjects: true }));

  const experienceBullets = toArray<string>(
    t('dermatologyDepartment.experience.bullets', { returnObjects: true })
  );

  const careProcess = toArray<{
    title: string;
    description: string;
  }>(t('dermatologyDepartment.process.steps', { returnObjects: true }));

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-primary-600">Home</Link>
            <span>/</span>
            <Link to="/departments" className="hover:text-primary-600">Departments</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{t('departments.dermatology')}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 pt-8">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1594046781833-599bdd059b0f?auto=format&fit=crop&w=1600&q=80"
            alt={t('dermatologyDepartment.hero.imageAlt')}
            className="h-full w-full object-cover opacity-20"
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:flex lg:items-center lg:gap-16 lg:px-8 lg:py-24">
          <div className="max-w-2xl space-y-8">
            <span className="inline-flex items-center rounded-full bg-white/80 px-4 py-1 text-sm font-semibold text-primary-600 shadow-sm">
              <Sparkles className="mr-2 h-4 w-4" />
              {t('dermatologyDepartment.hero.badge')}
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              {t('dermatologyDepartment.hero.title')}
            </h1>
            <p className="text-lg text-gray-600 sm:text-xl">
              {t('dermatologyDepartment.hero.description')}
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {heroHighlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-center rounded-2xl bg-white/90 px-4 py-3 shadow-sm backdrop-blur-sm"
                >
                  <ShieldCheck className="mr-3 h-5 w-5 text-primary-500" />
                  <span className="text-sm font-medium text-gray-700">{highlight}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 px-8 py-3 text-base font-semibold text-white transition-transform duration-300 hover:scale-[1.02] hover:from-primary-600 hover:to-secondary-600">
                {t('dermatologyDepartment.hero.primaryAction')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="inline-flex items-center justify-center rounded-full border-2 border-primary-500 px-8 py-3 text-base font-semibold text-primary-600 transition-colors duration-300 hover:bg-primary-50">
                {t('dermatologyDepartment.hero.secondaryAction')}
              </button>
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl space-y-20 px-4 py-16 sm:px-6 lg:px-8">
        {/* Intro */}
        <section className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              {t('dermatologyDepartment.intro.title')}
            </h2>
            {introParagraphs.map((paragraph, index) => (
              <p key={index} className="text-lg leading-relaxed text-gray-600">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="grid gap-4">
            <div className="rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 p-6 text-white shadow-lg">
              <h3 className="mb-4 text-xl font-semibold">
                {t('dermatologyDepartment.intro.highlight.title')}
              </h3>
              <p className="text-sm leading-relaxed text-white/90">
                {t('dermatologyDepartment.intro.highlight.description')}
              </p>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-lg">
              <div className="flex items-start space-x-4">
                <Stethoscope className="h-10 w-10 text-primary-500" />
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {t('dermatologyDepartment.intro.consultants.title')}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {t('dermatologyDepartment.intro.consultants.description')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              {t('dermatologyDepartment.services.title')}
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
              {t('dermatologyDepartment.services.description')}
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {serviceGroups.map((group, index) => (
              <div key={index} className="group flex flex-col rounded-2xl bg-white p-8 shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                  {index === 0 && <ThermometerSun className="h-6 w-6" />}
                  {index === 1 && <Leaf className="h-6 w-6" />}
                  {index === 2 && <Sparkles className="h-6 w-6" />}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{group.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{group.description}</p>
                <ul className="mt-6 space-y-3">
                  {toArray(group.items).map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start text-sm text-gray-600">
                      <CheckCircle2 className="mr-3 mt-0.5 h-4 w-4 text-primary-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Conditions Treated */}
        <section className="rounded-3xl bg-white p-10 shadow-xl">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center">
            <div className="lg:w-1/3">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                {t('dermatologyDepartment.conditions.title')}
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                {t('dermatologyDepartment.conditions.description')}
              </p>
            </div>
            <div className="grid flex-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {conditions.map((condition, index) => (
                <div key={index} className="flex items-center rounded-2xl border border-gray-100 bg-gray-50 px-5 py-4 shadow-sm transition-colors duration-300 hover:border-primary-200 hover:bg-primary-50">
                  <Droplet className="mr-3 h-5 w-5 text-primary-500" />
                  <span className="text-sm font-medium text-gray-700">{condition}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              {t('dermatologyDepartment.technologies.title')}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              {t('dermatologyDepartment.technologies.description')}
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {technologies.map((technology, index) => (
              <div key={index} className="rounded-2xl bg-white p-8 shadow-lg transition-shadow duration-300 hover:shadow-xl">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-secondary-100 text-secondary-600">
                  {index === 0 && <Microscope className="h-6 w-6" />}
                  {index === 1 && <SunMedium className="h-6 w-6" />}
                  {index === 2 && <Sparkles className="h-6 w-6" />}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{technology.title}</h3>
                <p className="mt-3 text-sm text-gray-600">{technology.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="grid gap-10 rounded-3xl bg-gradient-to-r from-primary-600 to-secondary-600 p-10 text-white lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold sm:text-4xl">
              {t('dermatologyDepartment.experience.title')}
            </h2>
            <p className="text-lg text-white/90">
              {t('dermatologyDepartment.experience.description')}
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {experienceBullets.map((bullet, index) => (
                <div key={index} className="flex items-start rounded-2xl bg-white/10 p-4">
                  <HeartPulse className="mr-3 h-5 w-5 flex-shrink-0 text-white" />
                  <p className="text-sm text-white/90">{bullet}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-4">
            {experienceStats.map((stat, index) => (
              <div key={index} className="rounded-2xl bg-white/10 p-6 text-center">
                <div className="text-4xl font-bold">{stat.value}</div>
                <div className="mt-2 text-sm text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Patient Journey */}
        <section className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              {t('dermatologyDepartment.process.title')}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              {t('dermatologyDepartment.process.description')}
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-4">
            {careProcess.map((step, index) => (
              <div key={index} className="relative rounded-2xl bg-white p-6 shadow-lg">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                  {index === 0 && <UserCheck className="h-6 w-6" />}
                  {index === 1 && <Microscope className="h-6 w-6" />}
                  {index === 2 && <Timer className="h-6 w-6" />}
                  {index === 3 && <ShieldCheck className="h-6 w-6" />}
                </div>
                <span className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary-500 text-sm font-semibold text-white">
                  {index + 1}
                </span>
                <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                <p className="mt-3 text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* CTA */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-r from-primary-500 to-secondary-500 px-8 py-12 text-center text-white shadow-xl sm:px-12">
          <h2 className="text-3xl font-bold sm:text-4xl">
            {t('dermatologyDepartment.cta.title')}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            {t('dermatologyDepartment.cta.description')}
          </p>
          <button className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-base font-semibold text-primary-600 transition-colors duration-300 hover:bg-gray-100">
            {t('dermatologyDepartment.cta.button')}
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default DermatologyDepartment;
