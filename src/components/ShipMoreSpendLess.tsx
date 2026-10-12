import { motion } from 'framer-motion';
import { Gift, Users, Tag } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface FeatureCard {
  badge: string;
  badgeColor: string;
  title: string;
  description: string;
  cta: string;
  image: string;
}

export function ShipMoreSpendLess() {
  const { t } = useTranslation();
  
  const features: FeatureCard[] = [
    {
      badge: t('shipMore.rewardPoints'),
      badgeColor: '#6C5CE7',
      title: t('shipMore.rewardTitle'),
      description: t('shipMore.rewardDesc'),
      cta: t('shipMore.redeemNow'),
      image: 'https://images.unsplash.com/photo-1607349913338-fca6f7fc44d0?w=600&q=80',
    },
    {
      badge: t('shipMore.referralProgramme'),
      badgeColor: '#F9278E',
      title: t('shipMore.referralTitle'),
      description: t('shipMore.referralDesc'),
      cta: t('shipMore.referNow'),
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80',
    },
    {
      badge: t('shipMore.promoCode'),
      badgeColor: '#00B894',
      title: t('shipMore.promoTitle'),
      description: t('shipMore.promoDesc'),
      cta: t('shipMore.getPromoCodeNow'),
      image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&q=80',
    },
  ];

  return (
    <section className="py-16 bg-bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            {t('shipMore.title')}
          </h2>
          <p className="text-text-dark text-lg">
            {t('shipMore.subtitle')}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-[5px] shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span
                    className="px-4 py-1 rounded-full text-white text-xs font-bold"
                    style={{ backgroundColor: feature.badgeColor }}
                  >
                    {feature.badge}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-text-dark text-sm mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <button className="text-primary font-bold text-sm hover:underline flex items-center gap-1">
                  {feature.cta} <span>→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
