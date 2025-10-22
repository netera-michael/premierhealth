import React from 'react';
import { Star, Quote } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Testimonials = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5
    },
    {
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&q=80",
      rating: 5
    },
    {
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('testimonials.title')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('testimonials.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => {
            const testimonialsArray = t('testimonials.items', { returnObjects: true }) as Array<{ name: string; role: string; text: string }>;
            const testimonialData = testimonialsArray[index];

            return (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <div className="mb-6">
                  <Quote className="w-8 h-8 text-primary-300 mb-4" />
                  <p className="text-gray-600 leading-relaxed italic">"{testimonialData.text}"</p>
                </div>

                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonialData.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonialData.name}</h4>
                    <p className="text-sm text-gray-500">{testimonialData.role}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-primary-100 px-6 py-3 rounded-full">
            <Star className="w-5 h-5 text-primary-600 fill-current" />
            <span className="text-primary-700 font-semibold">{t('testimonials.rating')}</span>
            <span className="text-primary-600">• {t('testimonials.reviews')}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
