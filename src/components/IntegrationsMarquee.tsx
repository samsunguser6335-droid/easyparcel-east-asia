import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { integrations } from '../data/mockData';

export function IntegrationsMarquee() {
  const { t } = useTranslation();
  // Duplicate the array for seamless infinite scroll
  const doubledIntegrations = [...integrations, ...integrations];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            {t('integrations.title')}
          </h2>
          <p className="text-text-dark text-lg">
            {t('integrations.subtitle')}
          </p>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Scrolling Track */}
        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-6 animate-marquee"
            style={{ minWidth: 'max-content' }}
          >
            {doubledIntegrations.map((integration, index) => (
              <div
                key={`${integration.id}-${index}`}
                className="flex-shrink-0 w-36 h-36 bg-white rounded-full shadow-md hover:shadow-xl transition-shadow flex items-center justify-center p-6 group relative"
              >
                <img
                  src={integration.logo}
                  alt={integration.name}
                  className="max-w-full max-h-full object-contain"
                />
                {/* Tooltip */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 transition-opacity bg-gray-900 text-white text-xs px-3 py-1 rounded whitespace-nowrap">
                  {integration.name}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Decorative Dots */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-bg-light rounded-full opacity-50" />
        <div className="absolute top-3/4 right-1/3 w-4 h-4 bg-bg-light rounded-full opacity-50" />
        <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-bg-light rounded-full opacity-50" />
      </div>
    </section>
  );
}
