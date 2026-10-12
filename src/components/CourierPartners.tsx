import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Truck, Plane, Zap, DollarSign, Clock, FileText } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { couriers } from '../data/mockData';

export function CourierPartners() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  const courierCategories = [
    { id: 'all', label: t('couriers.allCouriers') },
    { id: 'domestic', label: t('couriers.domesticDelivery') },
    { id: 'international', label: t('couriers.internationalDelivery') },
    { id: 'on-demand', label: t('couriers.onDemandDelivery') },
    { id: 'cod', label: t('couriers.cashOnDelivery') },
    { id: 'next-day', label: t('couriers.nextDayDelivery') },
    { id: 'same-day', label: t('couriers.sameDayDelivery') },
    { id: 'paperless', label: t('couriers.paperlessDelivery') },
  ];

  const filteredCouriers = couriers.filter((courier) => {
    const matchesCategory = activeCategory === 'all' || courier.category.includes(activeCategory);
    const matchesSearch = courier.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categoryIcons = {
    all: Truck,
    domestic: Truck,
    international: Plane,
    'on-demand': Zap,
    cod: DollarSign,
    'next-day': Clock,
    'same-day': Clock,
    paperless: FileText,
  };

  return (
    <section className="py-16 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            {t('couriers.title')}
          </h2>
          <p className="text-text-dark text-lg max-w-2xl mx-auto">
            {t('couriers.subtitle')}
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[5px] p-6 text-center shadow-md hover:shadow-lg transition-shadow"
          >
            <p className="text-4xl font-black text-primary mb-2">60+</p>
            <p className="text-text-dark font-medium">{t('couriers.courierServices')}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-[5px] p-6 text-center shadow-md hover:shadow-lg transition-shadow"
          >
            <p className="text-4xl font-black text-primary mb-2">S$2.45</p>
            <p className="text-text-dark font-medium">{t('couriers.lowestLocalRate')}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-[5px] p-6 text-center shadow-md hover:shadow-lg transition-shadow"
          >
            <p className="text-4xl font-black text-primary mb-2">220+</p>
            <p className="text-text-dark font-medium">{t('couriers.countriesCovered')}</p>
          </motion.div>
        </div>

        {/* Tabbed Interface */}
        <div className="bg-white rounded-[5px] shadow-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Left Side - Vertical Tabs */}
            <div className="lg:w-64 border-b lg:border-b-0 lg:border-r border-gray-200">
              <div className="flex lg:flex-col overflow-x-auto lg:overflow-x-visible">
                {courierCategories.map((category) => {
                  const Icon = categoryIcons[category.id as keyof typeof categoryIcons] || Truck;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`flex items-center gap-3 px-6 py-4 text-left font-medium whitespace-nowrap transition-all ${
                        activeCategory === category.id
                          ? 'text-gray-900 border-l-4 border-primary bg-primary/5'
                          : 'text-text-dark hover:bg-gray-50 border-l-4 border-transparent'
                      }`}
                    >
                      <Icon size={18} />
                      <span className="text-sm">{category.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="flex-1 p-6">
              {/* Search Input */}
              <div className="mb-6">
                <div className="relative">
                  <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder={t('couriers.searchPlaceholder')}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border border-border-grey rounded-[5px] focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>
              </div>

              {/* Couriers Grid */}
              {filteredCouriers.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {filteredCouriers.map((courier) => (
                    <motion.div
                      key={courier.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                      className="bg-gray-50 rounded-[5px] p-4 flex items-center justify-center h-24 hover:shadow-md transition-shadow cursor-pointer"
                    >
                      <img
                        src={courier.logo}
                        alt={courier.name}
                        className="max-w-full max-h-full object-contain"
                      />
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-text-dark">{t('couriers.noCouriersFound')}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
