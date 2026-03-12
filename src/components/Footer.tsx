import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="relative" style={{ width: '220px', height: '80px' }}>
                <img
                  src="/logo-png-lean.png"
                  alt="Premier Health Logo"
                  className="absolute inset-0 w-full h-full object-contain brightness-0 invert"
                  style={{
                    objectPosition: 'left center'
                  }}
                />
              </div>
            </div>
            <p className="text-white mb-6 leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/premierecareclinics"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/premierhealth.clinics/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/premier-care-641a68179?originalSubdomain=eg"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t('footer.quickLinks.title')}</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-white hover:text-white transition-colors">{t('footer.quickLinks.home')}</Link></li>
              <li><Link to="/departments" className="text-white hover:text-white transition-colors">{t('footer.quickLinks.vitaminDrips', 'Departments')}</Link></li>
              <li><Link to="/about" className="text-white hover:text-white transition-colors">{t('footer.quickLinks.about')}</Link></li>
              <li><Link to="/contact" className="text-white hover:text-white transition-colors">{t('footer.quickLinks.contact')}</Link></li>
              <li><a href="#" className="text-white hover:text-white transition-colors">{t('footer.quickLinks.privacy')}</a></li>
              <li><a href="#" className="text-white hover:text-white transition-colors">{t('footer.quickLinks.terms')}</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t('footer.contactInfo.title')}</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-white mr-3" />
                <span className="text-white">{t('footer.contactInfo.phone')}</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-white mr-3" />
                <span className="text-white">{t('footer.contactInfo.email')}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-white mr-3" />
                <span className="text-white">{t('footer.contactInfo.location')}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-white mr-3" />
                <span className="text-white">{t('footer.contactInfo.hours')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 w-full md:w-auto">
              <h4 className="text-sm font-semibold text-white mb-3 text-center md:text-left">{t('footer.paymentMethods')}</h4>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png"
                  alt="Visa"
                  className="h-6 md:h-8 w-auto opacity-70 hover:opacity-100 transition-opacity"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png"
                  alt="Mastercard"
                  className="h-6 md:h-8 w-auto opacity-70 hover:opacity-100 transition-opacity"
                />
                <img
                  src="https://www.valu.com.eg/assets/images/valu.webp"
                  alt="valU"
                  className="h-6 md:h-8 w-auto opacity-70 hover:opacity-100 transition-opacity"
                />
                <img
                  src="https://www.pfgrowth.com/wp-content/uploads/2023/03/tabby-logo-1.png"
                  alt="Tabby"
                  className="h-6 md:h-8 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKCy6jLahmGQdxAJRMr84-Rp1hsg-oiN_Emg&s"
                  alt="Tamara"
                  className="h-6 md:h-8 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>

            <div className="text-center md:text-right">
              <p className="text-white text-sm">
                {t('footer.copyright')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
