import { Hero } from '../components/Hero';
import { StatsCounter } from '../components/StatsCounter';
import { DeliveryServices } from '../components/DeliveryServices';
import { ProhibitedItems } from '../components/ProhibitedItems';
import { IntegrationsMarquee } from '../components/IntegrationsMarquee';
import { ShipMoreSpendLess } from '../components/ShipMoreSpendLess';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Package } from 'lucide-react';

export function Home() {
  const { t } = useTranslation();

  return (
    <div>
      {/* Top Banner - Track Your Parcel */}
      <section className="bg-[#F9278E] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left Side Content */}
            <div className="flex items-center gap-4">
              <Package size={48} className="text-white flex-shrink-0" />
              <div>
                <h2 className="text-white font-bold text-3xl mb-2">
                  {t('home.trackBanner.title')}
                </h2>
                <p className="text-white/90 text-base">
                  {t('home.trackBanner.subtitle')}
                </p>
              </div>
            </div>
            
            {/* Right Side Content */}
            <Link
              to="/track"
              className="bg-white text-[#F9278E] font-bold px-8 py-3 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all whitespace-nowrap"
            >
              {t('home.trackBanner.button')}
            </Link>
          </div>
        </div>
      </section>

      <Hero />
      {/* Spacer for the floating quote widget */}
      <div className="h-40 md:h-48"></div>
      
      {/* Track Your Parcel CTA Section */}
      <section className="py-12 px-4 bg-gradient-to-r from-[#F9278E] to-[#EC2687]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-white">
              <Package size={48} className="flex-shrink-0" />
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">
                  {t('track.trackYourParcel')}
                </h2>
                <p className="text-white/90">
                  {t('track.heroSubtitle')}
                </p>
              </div>
            </div>
            <Link
              to="/track"
              className="bg-white text-[#F9278E] font-bold px-8 py-3 rounded-lg hover:-translate-y-1 transition-transform shadow-lg whitespace-nowrap"
            >
              {t('track.trackButton')}
            </Link>
          </div>
        </div>
      </section>
      
      {/* Phase 2 Sections */}
      <StatsCounter />
      <DeliveryServices />
      <ProhibitedItems />
      <IntegrationsMarquee />
      <ShipMoreSpendLess />
    </div>
  );
}
