import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Activity, Zap, Brain, Shield } from 'lucide-react';

const PeptiologyDepartment: React.FC = () => {
    const { t } = useTranslation();

    const benefitsIconMap = [
        <Shield className="w-6 h-6 text-primary-500" />,
        <Activity className="w-6 h-6 text-primary-500" />,
        <Zap className="w-6 h-6 text-primary-500" />,
        <Shield className="w-6 h-6 text-primary-500" />,
        <Zap className="w-6 h-6 text-primary-500" />,
        <Brain className="w-6 h-6 text-primary-500" />,
        <Shield className="w-6 h-6 text-primary-500" />
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Breadcrumb */}
            <div className="bg-gray-50 border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <nav className="flex items-center space-x-2 text-sm text-gray-600">
                        <Link to="/" className="hover:text-primary-600">{t('header.nav.home')}</Link>
                        <span>/</span>
                        <Link to="/departments" className="hover:text-primary-600">{t('header.nav.departments')}</Link>
                        <span>/</span>
                        <span className="text-gray-900 font-medium">{t('departments.peptiology')}</span>
                    </nav>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-primary-900 pt-24 pb-32">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1579152276503-346747df3466?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                        alt={t('peptiology.title')}
                        className="h-full w-full object-cover opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-900 to-transparent"></div>
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 uppercase tracking-tight">
                            {t('peptiology.title')}
                        </h1>
                        <p className="text-xl text-primary-100 mb-8 leading-relaxed">
                            {t('peptiology.description')}
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="bg-white text-primary-900 px-8 py-4 rounded-tl-2xl rounded-br-2xl rounded-tr-none rounded-bl-none font-bold hover:bg-primary-50 transition-all shadow-xl">
                                {t('peptiology.cta.button')}
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* What is Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-primary-500 pl-4 uppercase">
                                {t('peptiology.whatIs.title')}
                            </h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed italic">
                                {t('peptiology.whatIs.description')}
                            </p>
                        </div>
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Peptide Therapy"
                                className="rounded-2xl shadow-2xl relative z-10"
                            />
                            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-primary-100 rounded-2xl -z-0"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4 uppercase tracking-wider">{t('peptiology.benefits.title')}</h2>
                        <div className="w-20 h-1.5 bg-primary-500 mx-auto"></div>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {(t('peptiology.benefits.list', { returnObjects: true }) as string[]).map((benefit, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100 group">
                                <div className="mb-4">
                                    {benefitsIconMap[index] || <Check className="w-6 h-6 text-primary-500" />}
                                </div>
                                <p className="text-gray-700 font-medium leading-relaxed">{benefit}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Customized Care Section */}
            <section className="py-20 bg-white border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-primary-900 rounded-[3rem] overflow-hidden shadow-2xl relative">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-2 items-center">
                            <div className="p-12 md:p-20 relative z-10">
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 uppercase tracking-tight">
                                    {t('peptiology.customized.title')}
                                </h2>
                                <p className="text-xl text-primary-100/90 mb-10 leading-relaxed italic border-l-2 border-white/30 pl-6">
                                    {t('peptiology.customized.description')}
                                </p>
                                <button className="flex items-center space-x-2 bg-white text-primary-900 px-8 py-4 rounded-tl-2xl rounded-br-2xl rounded-tr-none rounded-bl-none font-bold hover:bg-gray-100 transition-all shadow-xl group">
                                    <span>{t('peptiology.cta.button')}</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                            <div className="hidden md:block relative h-full">
                                <img
                                    src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                                    alt="Customized Wellness"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PeptiologyDepartment;
