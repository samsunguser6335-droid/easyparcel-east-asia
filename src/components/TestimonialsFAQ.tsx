import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Star, Play } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function TestimonialsFAQ() {
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

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'E-commerce Business Owner',
      rating: 5,
      text: 'EasyParcel has transformed our shipping operations. We save over 30% on delivery costs every month. The platform is intuitive and the customer support is exceptional!',
    },
    {
      name: 'Michael Tan',
      role: 'Online Retailer',
      rating: 5,
      text: 'The integration with our Shopify store was seamless. Now we can compare rates and book shipments in seconds. Highly recommended for any e-commerce business!',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Testimonials Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Side - Text & Awards */}
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
              {t('testimonials.title')}
            </h2>
            <p className="text-text-dark text-lg mb-8">
              {t('testimonials.subtitle')}
            </p>

            {/* Award Badges */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-bg-light px-6 py-3 rounded-[5px] flex items-center gap-2">
                <Star size={20} className="text-accent-yellow fill-accent-yellow" />
                <span className="font-bold text-sm">{t('testimonials.bestShippingPlatform')}</span>
              </div>
              <div className="bg-bg-light px-6 py-3 rounded-[5px] flex items-center gap-2">
                <Star size={20} className="text-accent-yellow fill-accent-yellow" />
                <span className="font-bold text-sm">{t('testimonials.topRatedByCustomers')}</span>
              </div>
            </div>

            {/* Testimonial Cards */}
            <div className="space-y-4">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-bg-light rounded-[5px] p-6"
                >
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-accent-yellow fill-accent-yellow" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-text-dark">{testimonial.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side - Video */}
          <div className="flex items-center">
            <div className="relative w-full aspect-video rounded-[5px] overflow-hidden shadow-xl bg-gray-900">
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80"
                alt="EasyParcel Video"
                className="w-full h-full object-cover opacity-50"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-20 h-20 bg-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                  <Play size={32} className="text-white ml-1" fill="white" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Image */}
          <div className="hidden lg:block">
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80"
              alt="Customer Support"
              className="w-full h-full object-cover rounded-[5px] shadow-lg"
            />
          </div>

          {/* Right Side - Accordion */}
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8">
              {t('testimonials.frequentlyAskedQuestions')}
            </h2>

            <div className="space-y-3">
              {faqs.slice(0, 5).map((faq) => (
                <div key={faq.id} className="border border-border-grey rounded-[5px] overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-medium text-gray-900 pr-4">{faq.question}</span>
                    <motion.div
                      animate={{ rotate: openFaq === faq.id ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown size={20} className="text-primary flex-shrink-0" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {openFaq === faq.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="p-4 pt-0 text-text-dark leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqs.slice(0, 5).map((faq) => ({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: faq.answer,
                },
              })),
            }),
          }}
        />
      </div>
    </section>
  );
}
