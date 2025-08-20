import React from 'react';
import { Zap, Shield, Clock, Heart, Brain, Droplets } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Instant Energy Boost",
      description: "Feel energized immediately with direct nutrient delivery to your bloodstream"
    },
    {
      icon: Shield,
      title: "Enhanced Immunity",
      description: "Strengthen your immune system with high-dose vitamin C and antioxidants"
    },
    {
      icon: Clock,
      title: "Quick Recovery",
      description: "Accelerate recovery from illness, workouts, or jet lag"
    },
    {
      icon: Heart,
      title: "Improved Wellness",
      description: "Support overall health with essential vitamins and minerals"
    },
    {
      icon: Brain,
      title: "Mental Clarity",
      description: "Enhance cognitive function and mental focus"
    },
    {
      icon: Droplets,
      title: "Superior Hydration",
      description: "Achieve optimal hydration levels more effectively than oral supplements"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose IV Vitamin Therapy?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the superior benefits of intravenous vitamin delivery for optimal health and wellness
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center mb-6">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Experience the Difference?</h3>
          <p className="text-lg mb-6 opacity-90">
            Join thousands of satisfied clients who have transformed their health with our premium IV therapy treatments
          </p>
          <button className="bg-white text-primary-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            Book Your Session Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Benefits;