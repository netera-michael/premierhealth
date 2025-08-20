import React from 'react';
import { UserCheck, Stethoscope, Droplets, Heart } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: UserCheck,
      title: "Consultation",
      description: "Meet with our medical team to discuss your health goals and determine the best treatment plan for you."
    },
    {
      icon: Stethoscope,
      title: "Medical Assessment",
      description: "Our licensed physicians conduct a thorough health assessment to ensure treatment safety and effectiveness."
    },
    {
      icon: Droplets,
      title: "IV Treatment",
      description: "Relax in our comfortable treatment rooms while receiving your personalized vitamin drip therapy."
    },
    {
      icon: Heart,
      title: "Follow-up Care",
      description: "We monitor your progress and adjust your treatment plan to ensure optimal results and continued wellness."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Treatment Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience our comprehensive approach to wellness with our proven 4-step treatment process
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>

        {/* Process Flow Connector */}
        <div className="hidden lg:block relative mt-16">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-200 via-secondary-200 to-primary-200 transform -translate-y-1/2"></div>
          <div className="flex justify-between items-center">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="w-4 h-4 bg-primary-500 rounded-full border-4 border-white shadow-lg"></div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Begin Your Wellness Journey?</h3>
            <p className="text-lg mb-6 opacity-90">
              Schedule your consultation today and discover how IV vitamin therapy can transform your health
            </p>
            <button className="bg-white text-primary-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;