import React from 'react';
import { Shield, Award, Users, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Premier Health</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leading the way in premium wellness and IV therapy treatments in Cairo, Egypt
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Your Trusted Partner in Wellness
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At Premier Health, we combine cutting-edge medical technology with personalized care 
              to deliver exceptional IV therapy and wellness treatments. Our state-of-the-art facility 
              in Cairo provides a luxurious, safe environment for your health journey.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              With over 10 years of experience in wellness medicine, our team of certified medical 
              professionals is dedicated to helping you achieve optimal health through innovative 
              vitamin drip therapies and comprehensive wellness solutions.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">10+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">5000+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">15+</div>
                <div className="text-gray-600">Treatment Types</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
                <div className="text-gray-600">Safety Record</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                  <Shield className="w-6 h-6 text-primary-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900">Safety First</h4>
              </div>
              <p className="text-gray-600">
                All treatments follow strict medical protocols with certified healthcare professionals.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mr-4">
                  <Award className="w-6 h-6 text-secondary-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900">Premium Quality</h4>
              </div>
              <p className="text-gray-600">
                We use only the highest quality vitamins and minerals from trusted suppliers.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-primary-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900">Expert Team</h4>
              </div>
              <p className="text-gray-600">
                Our medical team includes licensed physicians and certified IV therapy specialists.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mr-4">
                  <Heart className="w-6 h-6 text-secondary-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900">Personalized Care</h4>
              </div>
              <p className="text-gray-600">
                Every treatment is customized to your specific health needs and wellness goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;