import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <img
                src="https://premiercare-eg.com/assets/img/logo.png"
                alt="Premier Health Logo"
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Premier Health is Cairo's leading wellness center, specializing in premium IV vitamin therapy 
              and comprehensive health treatments. We're committed to helping you achieve optimal wellness 
              through innovative medical solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#vitamin-drips" className="text-gray-300 hover:text-white transition-colors">Vitamin Drips</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-primary-400 mr-3" />
                <span className="text-gray-300">+2 01200644663</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-primary-400 mr-3" />
                <span className="text-gray-300">info@premierhealth.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-primary-400 mr-3" />
                <span className="text-gray-300">New Cairo Medical District<br />Cairo, Egypt</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-primary-400 mr-3" />
                <span className="text-gray-300">Sat-Thu: 8AM-6PM<br />Fri: 2PM-8PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h4 className="text-sm font-semibold text-gray-400 mb-3">Accepted Payment Methods</h4>
              <div className="flex items-center space-x-4">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png"
                  alt="Visa"
                  className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png"
                  alt="Mastercard"
                  className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity"
                />
                <img
                  src="/image.png"
                  alt="valU"
                  className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity"
                />
                <img
                  src="https://tabby.ai/static/tabby-logo-light.svg"
                  alt="Tabby"
                  className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity"
                />
                <img
                  src="https://tamara.co/static/images/tamara-logo-white.svg"
                  alt="Tamara"
                  className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © 2025 Premier Health. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;