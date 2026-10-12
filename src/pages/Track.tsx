import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import { 
  Search, Package, Truck, Plane, MapPin, CheckCircle, 
  ArrowRight, PackageX, Clock
} from 'lucide-react';
import { mockTrackingData, getStatusBadgeColor, formatStatus } from '../data/mockTracking';

export function Track() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [trackingNumber, setTrackingNumber] = useState('');
  const [trackingData, setTrackingData] = useState<any>(null);
  const [notFound, setNotFound] = useState(false);

  // Read tracking number from URL on mount
  useEffect(() => {
    const urlTrackingNumber = searchParams.get('number');
    if (urlTrackingNumber) {
      setTrackingNumber(urlTrackingNumber);
      const data = mockTrackingData[urlTrackingNumber];
      if (data) {
        setTrackingData(data);
        setNotFound(false);
      } else {
        setNotFound(true);
        setTrackingData(null);
      }
    }
  }, [searchParams]);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingNumber.trim()) {
      navigate(`/track?number=${encodeURIComponent(trackingNumber.trim())}`);
    }
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'package': return Package;
      case 'truck': return Truck;
      case 'plane': return Plane;
      case 'map-pin': return MapPin;
      case 'check-circle': return CheckCircle;
      default: return Package;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Section A: Sophisticated Hero & Search */}
      <section className="bg-gradient-to-b from-[#F2F4F8] to-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side: Text & Search */}
            <div>
              <h1 className="text-4xl md:text-5xl font-black text-black mb-4">
                {t('track.heroTitle')}
              </h1>
              <p className="text-lg text-[#666666] mb-8">
                {t('track.heroSubtitle')}
              </p>

              {/* Search Box */}
              <form onSubmit={handleTrack}>
                <div className="bg-white rounded-xl shadow-lg p-2 flex items-center gap-2">
                  <div className="flex-1 flex items-center gap-3 px-4">
                    <Search className="text-gray-400 flex-shrink-0" size={20} />
                    <input
                      type="text"
                      value={trackingNumber}
                      onChange={(e) => setTrackingNumber(e.target.value)}
                      placeholder={t('track.placeholder')}
                      className="flex-1 py-3 text-base focus:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-[#F9278E] text-white font-bold px-6 py-3 rounded-lg hover:bg-[#EC2687] transition-colors whitespace-nowrap"
                  >
                    {t('track.trackButton')}
                  </button>
                </div>
              </form>
            </div>

            {/* Right Side: Image */}
            <div className="hidden lg:block">
              {/* Replace with your sophisticated tracking illustration/image */}
              <img 
                src="/images/tracking-hero.png" 
                alt="Tracking Illustration"
                className="w-full h-auto max-w-lg mx-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section B: Tracking Results */}
      {trackingData && (
        <section className="py-12 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            {/* Top Summary Card */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-8 border border-gray-100">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <div>
                  <p className="text-sm text-[#666666] mb-1">{t('track.trackingNumber')}</p>
                  <p className="text-2xl font-bold text-black">{trackingData.trackingNumber}</p>
                </div>
                <div className="flex items-center gap-4">
                  <div>
                    <p className="text-sm text-[#666666] mb-1">{t('track.courier')}</p>
                    <p className="text-lg font-semibold text-black">{trackingData.courier}</p>
                  </div>
                  <div className={`px-4 py-2 rounded-lg border ${getStatusBadgeColor(trackingData.status)}`}>
                    <p className="font-semibold">{formatStatus(trackingData.status)}</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-gray-100">
                <div>
                  <p className="text-sm text-[#666666] mb-2">{t('track.origin')} → {t('track.destination')}</p>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-black">{trackingData.origin}</span>
                    <ArrowRight size={16} className="text-[#F9278E]" />
                    <span className="font-semibold text-black">{trackingData.destination}</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-[#666666] mb-2">{t('track.estimatedDelivery')}</p>
                  <p className="font-semibold text-black">{trackingData.estimatedDelivery}</p>
                </div>
                <div>
                  <p className="text-sm text-[#666666] mb-2">{t('track.serviceType')}</p>
                  <p className="font-semibold text-black">{trackingData.serviceType}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-gray-100 mt-6">
                <div>
                  <p className="text-xs text-[#666666] mb-1">{t('track.weight')}</p>
                  <p className="text-sm font-semibold text-black">{trackingData.weight}</p>
                </div>
                <div>
                  <p className="text-xs text-[#666666] mb-1">{t('track.dimensions')}</p>
                  <p className="text-sm font-semibold text-black">{trackingData.dimensions}</p>
                </div>
                <div>
                  <p className="text-xs text-[#666666] mb-1">{t('track.origin')}</p>
                  <p className="text-sm font-semibold text-black">{trackingData.originCountry}</p>
                </div>
                <div>
                  <p className="text-xs text-[#666666] mb-1">{t('track.destination')}</p>
                  <p className="text-sm font-semibold text-black">{trackingData.destinationCountry}</p>
                </div>
              </div>
            </div>

            {/* Visual Timeline & Map */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Timeline */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold text-black mb-6">Shipment Journey</h2>
                <div className="space-y-0">
                  {trackingData.timeline.map((event: any, index: number) => {
                    const Icon = getIcon(event.icon);
                    const isLast = index === trackingData.timeline.length - 1;
                    const isCurrent = !event.completed && (index === 0 || trackingData.timeline[index - 1].completed);
                    
                    return (
                      <div key={index} className="flex gap-4">
                        {/* Timeline Line & Icon */}
                        <div className="flex flex-col items-center">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                            event.completed 
                              ? 'bg-[#F9278E] text-white' 
                              : isCurrent
                              ? 'bg-[#F9278E] text-white animate-pulse'
                              : 'bg-gray-200 text-gray-400'
                          }`}>
                            <Icon size={20} />
                          </div>
                          {!isLast && (
                            <div className={`w-0.5 h-16 ${
                              event.completed 
                                ? 'bg-[#F9278E]' 
                                : isCurrent
                                ? 'bg-[#F9278E] border-dashed border-l-2 border-[#F9278E] bg-transparent'
                                : 'bg-gray-200 border-dashed border-l-2 border-gray-300 bg-transparent'
                            }`} />
                          )}
                        </div>

                        {/* Content */}
                        <div className="flex-1 pb-8">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className={`text-lg font-bold ${
                              event.completed || isCurrent ? 'text-black' : 'text-gray-400'
                            }`}>
                              {event.status}
                            </h3>
                            <span className={`text-sm ${
                              event.completed || isCurrent ? 'text-[#666666]' : 'text-gray-400'
                            }`}>
                              {event.date} {event.time}
                            </span>
                          </div>
                          <p className={`text-sm ${
                            event.completed || isCurrent ? 'text-[#666666]' : 'text-gray-400'
                          }`}>
                            {event.location}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Map/Image Placeholder */}
              <div className="hidden lg:block">
                {/* Replace with a map or logistics network image */}
                <img 
                  src="/images/tracking-map.png" 
                  alt="Tracking Map"
                  className="w-full h-auto rounded-xl shadow-inner"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Section C: Empty / Error State */}
      {!trackingData && !notFound && (
        <section className="py-20 px-4 bg-white">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-24 h-24 mx-auto mb-6 bg-[#F2F4F8] rounded-full flex items-center justify-center">
              <Search size={48} className="text-gray-400" />
            </div>
            <h2 className="text-2xl font-bold text-black mb-3">
              {t('track.emptyTitle')}
            </h2>
            <p className="text-[#666666] mb-6">
              {t('track.emptyDescription')}
            </p>
            <p className="text-sm text-[#666666]">
              {t('track.sampleNumbers')}
            </p>
          </div>
        </section>
      )}

      {/* Not Found State */}
      {notFound && (
        <section className="py-20 px-4 bg-white">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-24 h-24 mx-auto mb-6 bg-red-50 rounded-full flex items-center justify-center">
              <PackageX size={48} className="text-red-400" />
            </div>
            <h2 className="text-2xl font-bold text-black mb-3">
              {t('track.notFoundTitle')}
            </h2>
            <p className="text-[#666666] mb-6">
              {t('track.notFoundDescription')}
            </p>
            <p className="text-sm text-[#666666] mb-8">
              {t('track.sampleNumbers')}
            </p>
            <Link
              to="/"
              className="inline-block bg-[#F9278E] text-white font-bold px-8 py-3 rounded-lg hover:bg-[#EC2687] transition-colors"
            >
              {t('common.getStarted')}
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}
