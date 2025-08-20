import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Ahmed",
      role: "Business Executive",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "The energy boost drip has completely transformed my daily productivity. I feel more energized and focused than I have in years. The team at Premier Health is incredibly professional."
    },
    {
      name: "Dr. Mohamed Hassan",
      role: "Physician",
      image: "https://images.pexels.com/photos/612608/pexels-photo-612608.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "As a medical professional myself, I appreciate the high standards and quality of care at Premier Health. Their IV therapy treatments are top-notch and delivered with excellence."
    },
    {
      name: "Layla Mansour",
      role: "Fitness Enthusiast",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "The recovery drip after my workouts has been a game-changer. I recover faster and feel stronger. The facility is beautiful and the staff is amazing."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover why thousands of clients trust Premier Health for their wellness journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <div className="mb-6">
                <Quote className="w-8 h-8 text-primary-300 mb-4" />
                <p className="text-gray-600 leading-relaxed italic">"{testimonial.text}"</p>
              </div>

              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-primary-100 px-6 py-3 rounded-full">
            <Star className="w-5 h-5 text-primary-600 fill-current" />
            <span className="text-primary-700 font-semibold">4.9/5 Average Rating</span>
            <span className="text-primary-600">• 500+ Reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;