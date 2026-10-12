import { motion } from 'framer-motion';
import { Truck, Globe, Plane, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface ServiceCard {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  image: string;
  color: string;
  ctaText: string;
  linkUrl: string;
}

export function DeliveryServices() {
  const { t } = useTranslation();
  
  const services: ServiceCard[] = [
    {
      title: t('services.domestic'),
      subtitle: t('services.domesticTitle'),
      description: t('services.domesticDesc'),
      icon: Truck,
      image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&q=80',
      color: '#F9278E',
      ctaText: t('services.domesticCta'),
      linkUrl: '#',
    },
    {
      title: t('services.intraRegion'),
      subtitle: t('services.intraRegionTitle'),
      description: t('services.intraRegionDesc'),
      icon: Plane,
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80',
      color: '#0984E3',
      ctaText: t('services.intraRegionCta'),
      linkUrl: '#',
    },
    {
      title: t('services.outsideEastAsia'),
      subtitle: t('services.outsideEastAsiaTitle'),
      description: t('services.outsideEastAsiaDesc'),
      icon: Globe,
      image: 'https://images.unsplash.com/photo-1607349913338-fca6f7fc44d0?w=600&q=80',
      color: '#00B894',
      ctaText: t('services.outsideEastAsiaCta'),
      linkUrl: 'https://easyparcel.com/sg/',
    },
    {
      title: t('services.globalTracking'),
      subtitle: t('services.globalTrackingTitle'),
      description: t('services.globalTrackingDesc'),
      icon: Zap,
      image: 'https://images.unsplash.com/photo-1601599963565-b7f49deb0b53?w=600&q=80',
      color: '#FDCB6E',
      ctaText: t('services.globalTrackingCta'),
      linkUrl: 'https://easyparcel.com/sg/track',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            {t('services.title')}
          </h2>
          <p className="text-text-dark text-lg">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
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
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span
                    className="px-4 py-1 rounded-full text-white text-xs font-bold"
                    style={{ backgroundColor: service.color }}
                  >
                    {service.title}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <service.icon size={24} style={{ color: service.color }} />
                  <h3 className="text-xl font-bold text-gray-900">
                    {service.subtitle}
                  </h3>
                </div>
                <p className="text-text-dark text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>
                {index !== 0 && (
                  <a 
                    href={service.linkUrl}
                    target={service.linkUrl.startsWith('http') ? '_blank' : undefined}
                    rel={service.linkUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-primary font-bold text-sm hover:underline flex items-center gap-1"
                  >
                    {service.ctaText} <span>→</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
