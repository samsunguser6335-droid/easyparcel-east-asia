import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

function FAQ() {
  const { t } = useTranslation();
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  // Create FAQ array using translation keys
  const faqs = [
    { id: '1', question: t('faq.q1'), answer: t('faq.a1') },
    { id: '2', question: t('faq.q2'), answer: t('faq.a2') },
    { id: '3', question: t('faq.q3'), answer: t('faq.a3') },
    { id: '4', question: t('faq.q4'), answer: t('faq.a4') },
    { id: '5', question: t('faq.q5'), answer: t('faq.a5') },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Image */}
          <div className="hidden lg:block">
            <img
              src="/images/faq-image.png"
              alt="FAQ"
              className="w-full rounded-xl shadow-lg"
            />
          </div>

          {/* Right Side - Accordion */}
          <div>
            <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-8">
              {t('faq.title')}
            </h1>

            <div className="space-y-3">
              {faqs.map((faq) => (
                <div key={faq.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                  <button
                    onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-medium text-gray-900 pr-4">{faq.question}</span>
                    <ChevronDown 
                      size={20} 
                      className={`text-[#F9278E] flex-shrink-0 transition-transform duration-200 ${
                        openFaq === faq.id ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {openFaq === faq.id && (
                    <div className="p-4 pt-0 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
