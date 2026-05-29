import React, { useState } from 'react';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      q: 'Is pest control safe for pets and children?',
      a: 'Yes! We use eco-certified, child & pet-safe chemicals approved by government health departments. Our technicians are trained to apply treatments in a way that keeps your family safe.'
    },
    {
      q: 'How long does treatment take?',
      a: 'Typically 45 minutes to 2 hours depending on your home size. Most treatments work within 24-48 hours, with full results visible within a week.'
    },
    {
      q: 'Do I need to leave my home during treatment?',
      a: 'We recommend leaving for 1-2 hours after treatment. Our team will guide you on precautions. Many customers stay in other rooms while we treat their kitchen/bedroom.'
    },
    {
      q: 'What if pests return?',
      a: 'We offer a 1-year warranty. If pests return within the warranty period, we\'ll provide free follow-up treatment. Just give us a call.'
    },
    {
      q: 'How fast can you schedule?',
      a: 'We offer same-day or next-day appointments in most areas. Call +91 8939 320 492 or book online for instant confirmation.'
    },
    {
      q: 'Do you serve areas outside Chennai?',
      a: 'Yes! We serve Velachery, Tambaram, Pallavaram, Chromepet, OMR, Anna Nagar, and 20+ other areas around Chennai. Call to confirm your area.'
    }
  ];

  return (
    <section className="bg-gray-50 rounded-lg p-6 sm:p-8 mb-8">
      <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2 text-center">
        Common Questions
      </h2>
      <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
        Most customers ask these. Got more questions? Call us at +91 8939 320 492
      </p>

      <div className="space-y-3 max-w-2xl mx-auto">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            {/* Question */}
            <button
              onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
              className="w-full flex justify-between items-start p-4 sm:p-5 hover:bg-gray-50 transition-colors text-left"
            >
              <span className="font-semibold text-gray-900 text-sm sm:text-base flex-1 pr-4">
                {faq.q}
              </span>
              <span className="text-primary font-bold text-xl flex-shrink-0">
                {openFAQ === i ? '−' : '+'}
              </span>
            </button>

            {/* Answer */}
            {openFAQ === i && (
              <div className="px-4 sm:px-5 pb-4 sm:pb-5 bg-gray-50 border-t border-gray-200">
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  {faq.a}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-8 text-center">
        <p className="text-gray-600 mb-4">Still have questions?</p>
        <a
          href="tel:+918939320492"
          className="inline-block bg-primary text-white px-6 py-3 rounded font-semibold hover:bg-green-700 transition-colors"
        >
          Call Now: +91 8939 320 492
        </a>
      </div>
    </section>
  );
};

export default FAQSection;
