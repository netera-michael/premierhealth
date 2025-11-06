import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Send } from 'lucide-react';

interface ProcedurePageProps {
  procedureKey: string;
  section: 'face' | 'body' | 'breast';
}

const ProcedurePage: React.FC<ProcedurePageProps> = ({ procedureKey, section }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    emailAddress: '',
    department: 'plastic-surgery',
    query: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const procedureName = t(`plasticSurgery.${section}.procedures.${procedureKey}`);
  const procedureDescription = t(`plasticSurgery.procedures.${procedureKey}.description`, { defaultValue: '' });
  const procedureDetails = t(`plasticSurgery.procedures.${procedureKey}.details`, { returnObjects: true, defaultValue: [] }) as string[];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'YOUR_WEB3FORMS_ACCESS_KEY',
          name: formData.fullName,
          email: formData.emailAddress,
          phone: formData.mobileNumber,
          department: formData.department,
          message: formData.query,
          subject: `Appointment Request for ${procedureName}`,
          to_email: 'info@premierhealth.com',
          from_name: 'Premier Health Website'
        })
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        setFormData({
          fullName: '',
          mobileNumber: '',
          emailAddress: '',
          department: 'plastic-surgery',
          query: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
            <Link to="/departments/plastic-surgery" className="hover:text-primary-600">{t('plasticSurgery.title')}</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{procedureName}</span>
          </nav>
        </div>
      </div>

      {/* Page Hero Section */}
      <section className="pagehero relative overflow-hidden bg-gray-900">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1552693673-1bf958298935?ixlib=rb-4.1.0&auto=format&fit=crop&w=1920&q=80"
            alt={procedureName}
            className="h-full w-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {procedureName}
            </h1>
            {procedureDescription && (
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
                {procedureDescription}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Procedure Details */}
        {procedureDetails && Array.isArray(procedureDetails) && procedureDetails.length > 0 && (
          <section className="mb-16">
            <div className="prose prose-lg max-w-none">
              <div className="space-y-4 text-gray-700">
                {procedureDetails.map((detail, index) => (
                  <p key={index}>{detail}</p>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Appointment Request Form */}
        <section className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl shadow-xl p-8 md:p-12 text-white mt-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">{t('plasticSurgery.cta.title')}</h2>
            <p className="text-lg mb-8 text-center text-white/90">{t('plasticSurgery.cta.description')}</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-white mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-white/30 rounded-lg bg-white/10 text-white placeholder-white/50 focus:ring-2 focus:ring-white focus:border-transparent"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="mobileNumber" className="block text-sm font-medium text-white mb-2">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    id="mobileNumber"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-white/30 rounded-lg bg-white/10 text-white placeholder-white/50 focus:ring-2 focus:ring-white focus:border-transparent"
                    placeholder="Enter your mobile number"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="emailAddress" className="block text-sm font-medium text-white mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="emailAddress"
                  name="emailAddress"
                  value={formData.emailAddress}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-white/30 rounded-lg bg-white/10 text-white placeholder-white/50 focus:ring-2 focus:ring-white focus:border-transparent"
                  placeholder="Enter your email address"
                  required
                />
              </div>

              <div>
                <label htmlFor="department" className="block text-sm font-medium text-white mb-2">
                  Department
                </label>
                <select
                  id="department"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-white/30 rounded-lg bg-white/10 text-white focus:ring-2 focus:ring-white focus:border-transparent"
                >
                  <option value="plastic-surgery" className="text-gray-900">Plastic Surgery</option>
                </select>
              </div>

              <div>
                <label htmlFor="query" className="block text-sm font-medium text-white mb-2">
                  Query/Comments (If Any)
                </label>
                <textarea
                  id="query"
                  name="query"
                  rows={4}
                  value={formData.query}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-white/30 rounded-lg bg-white/10 text-white placeholder-white/50 focus:ring-2 focus:ring-white focus:border-transparent"
                  placeholder="Tell us about your query or any comments..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white text-primary-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5 mr-2" />
                {isSubmitting ? 'Submitting...' : t('plasticSurgery.cta.button')}
              </button>

              {submitStatus === 'success' && (
                <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  Thank you for your request! We'll get back to you during our business hours.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                  Sorry, there was an error submitting your request. Please try again or call us directly.
                </div>
              )}
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProcedurePage;

