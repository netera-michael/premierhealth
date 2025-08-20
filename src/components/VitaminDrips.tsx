import React from 'react';
import { Zap, Shield, Brain, Sparkles, Leaf, ArrowRight } from 'lucide-react';

const VitaminDrips = () => {
  const treatments = [
    {
      icon: Zap,
      name: "Energy Boost Drip",
      description: "Combat fatigue and boost energy levels with B-complex vitamins, vitamin C, and essential minerals.",
      benefits: ["Increased energy", "Reduced fatigue", "Enhanced metabolism", "Improved mood"],
      duration: "45 minutes",
      price: "1,200 EGP"
    },
    {
      icon: Shield,
      name: "Immunity Shield",
      description: "Strengthen your immune system with high-dose vitamin C, zinc, and powerful antioxidants.",
      benefits: ["Stronger immunity", "Faster recovery", "Antioxidant protection", "Reduced inflammation"],
      duration: "50 minutes",
      price: "1,400 EGP"
    },
    {
      icon: Brain,
      name: "Mental Clarity",
      description: "Enhance cognitive function and mental focus with brain-boosting nutrients and amino acids.",
      benefits: ["Improved focus", "Better memory", "Mental clarity", "Stress reduction"],
      duration: "40 minutes",
      price: "1,300 EGP"
    },
    {
      icon: Sparkles,
      name: "Beauty Glow",
      description: "Achieve radiant skin and healthy hair with collagen-boosting vitamins and antioxidants.",
      benefits: ["Glowing skin", "Stronger hair", "Anti-aging effects", "Collagen support"],
      duration: "55 minutes",
      price: "1,500 EGP"
    },
    {
      icon: Leaf,
      name: "Detox Cleanse",
      description: "Eliminate toxins and support liver function with glutathione and detoxifying nutrients.",
      benefits: ["Liver support", "Toxin elimination", "Improved digestion", "Enhanced wellness"],
      duration: "60 minutes",
      price: "1,600 EGP"
    }
  ];

  return (
    <section id="vitamin-drips" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Premium IV Vitamin Treatments</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our carefully crafted vitamin drip formulations, each designed to target specific health and wellness goals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((treatment, index) => {
            const IconComponent = treatment.icon;
            return (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{treatment.name}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>{treatment.duration}</span>
                      <span className="text-primary-600 font-semibold">{treatment.price}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">{treatment.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {treatment.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 flex items-center justify-center group">
                  Book This Treatment
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Not Sure Which Treatment is Right for You?</h3>
            <p className="text-gray-600 mb-6">
              Our medical team will help you choose the perfect vitamin drip based on your individual health needs and goals.
            </p>
            <button className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-3 rounded-full font-semibold hover:from-primary-600 hover:to-secondary-600 transition-all duration-300">
              Schedule Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VitaminDrips;