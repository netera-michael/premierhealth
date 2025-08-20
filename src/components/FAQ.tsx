import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is IV vitamin therapy?",
      answer: "IV vitamin therapy is a treatment that delivers vitamins, minerals, and other nutrients directly into your bloodstream through an intravenous drip. This method allows for 100% absorption of nutrients, bypassing the digestive system for maximum effectiveness."
    },
    {
      question: "Is IV vitamin therapy safe?",
      answer: "Yes, when administered by qualified medical professionals in a sterile environment. At Premier Health, all treatments are performed by licensed healthcare providers using sterile equipment and pharmaceutical-grade nutrients."
    },
    {
      question: "How long does a treatment take?",
      answer: "Most IV vitamin drip sessions take between 30-60 minutes, depending on the specific treatment and your individual needs. You can relax in our comfortable treatment rooms during the session."
    },
    {
      question: "How often should I get IV vitamin therapy?",
      answer: "The frequency depends on your individual health goals and needs. Some clients benefit from weekly sessions, while others prefer monthly treatments. Our medical team will create a personalized plan during your consultation."
    },
    {
      question: "What should I expect during my first visit?",
      answer: "Your first visit includes a comprehensive consultation with our medical team to assess your health goals and determine the best treatment plan. We'll review your medical history and answer any questions before beginning your treatment."
    },
    {
      question: "Are there any side effects?",
      answer: "IV vitamin therapy is generally well-tolerated with minimal side effects. Some clients may experience slight bruising at the injection site or a metallic taste during treatment. Our medical team monitors you throughout the session."
    },
    {
      question: "Can I eat before my treatment?",
      answer: "Yes, we recommend eating a light meal before your treatment to help prevent any potential dizziness. Staying hydrated before your appointment is also beneficial."
    },
    {
      question: "Do you accept insurance?",
      answer: "IV vitamin therapy is typically considered elective wellness treatment and is not covered by insurance. We offer competitive pricing and package deals to make treatments more affordable."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">
            Get answers to common questions about IV vitamin therapy
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-primary-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-primary-600 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <button className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-3 rounded-full font-semibold hover:from-primary-600 hover:to-secondary-600 transition-all duration-300">
            Contact Our Team
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;