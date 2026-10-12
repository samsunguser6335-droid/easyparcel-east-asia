import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Truck, Plane, Zap, MapPin, Calculator } from 'lucide-react';

export function QuoteWidget() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<'domestic' | 'international' | 'on-demand'>('domestic');

  const tabs = [
    { id: 'domestic' as const, label: t('hero.domestic'), icon: Truck },
    { id: 'international' as const, label: t('hero.international'), icon: Plane },
    { id: 'on-demand' as const, label: t('hero.onDemand'), icon: Zap },
  ];

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="bg-white rounded-xl shadow-xl overflow-hidden"
    >
        {/* Title */}
        <div className="px-6 pt-6 pb-4">
          <h3 className="text-2xl font-bold text-gray-900">
            {t('hero.getInstantQuotes')}
          </h3>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center gap-2 py-4 px-6 font-medium transition-all ${
                activeTab === tab.id
                  ? 'text-[#F9278E] border-b-2 border-[#F9278E]'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <tab.icon size={18} />
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Form */}
        <div className="p-6">
          {/* Row 1: From */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              {t('hero.from')}:
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {/* Left: Country + State */}
              <div className="grid grid-cols-2 gap-2">
                <select className="px-3 py-2.5 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#F9278E]/20 focus:border-[#F9278E]">
                  <option value="SG">🇸🇬 Singapore</option>
                  <option value="CN">🇨🇳 China</option>
                  <option value="HK">🇭🇰 Hong Kong</option>
                  <option value="JP">🇯🇵 Japan</option>
                  <option value="MO">🇲🇴 Macau</option>
                  <option value="MN">🇲🇳 Mongolia</option>
                  <option value="KR">🇰🇷 South Korea</option>
                  <option value="TW">🇹🇼 Taiwan</option>
                </select>
                <input
                  type="text"
                  placeholder="Enter address..."
                  className="px-3 py-2.5 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#F9278E]/20 focus:border-[#F9278E]"
                />
              </div>
              {/* Right: Postcode + Address Book Button */}
              <div className="relative">
                <input
                  type="text"
                  placeholder={t('hero.postcode')}
                  maxLength={6}
                  className="w-full px-3 py-2.5 pr-10 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#F9278E]/20 focus:border-[#F9278E]"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-gray-400 hover:text-[#F9278E] transition-colors">
                  <MapPin size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Row 2: To */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              {t('hero.to')}:
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {/* Left: Country + State */}
              <div className="grid grid-cols-2 gap-2">
                <select className="px-3 py-2.5 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#F9278E]/20 focus:border-[#F9278E]">
                  <option value="SG">🇸🇬 Singapore</option>
                  <option value="CN">🇨🇳 China</option>
                  <option value="HK">🇭🇰 Hong Kong</option>
                  <option value="JP">🇯🇵 Japan</option>
                  <option value="MO">🇲🇴 Macau</option>
                  <option value="MN">🇲🇳 Mongolia</option>
                  <option value="KR">🇰🇷 South Korea</option>
                  <option value="TW">🇹🇼 Taiwan</option>
                </select>
                <input
                  type="text"
                  placeholder="Enter address..."
                  className="px-3 py-2.5 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#F9278E]/20 focus:border-[#F9278E]"
                />
              </div>
              {/* Right: Postcode + Address Book Button */}
              <div className="relative">
                <input
                  type="text"
                  placeholder={t('hero.postcode')}
                  maxLength={8}
                  className="w-full px-3 py-2.5 pr-10 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#F9278E]/20 focus:border-[#F9278E]"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-gray-400 hover:text-[#F9278E] transition-colors">
                  <MapPin size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Row 3: Weight & Action */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              {t('hero.weight')}:
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {/* Left: Weight Input + Calculator Button */}
              <div className="relative">
                <input
                  type="number"
                  placeholder="kg"
                  step="0.1"
                  className="w-full px-3 py-2.5 pr-10 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#F9278E]/20 focus:border-[#F9278E]"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-gray-400 hover:text-[#F9278E] transition-colors">
                  <Calculator size={16} />
                </button>
              </div>
              {/* Right: Quote & Book Button */}
              <button className="w-full py-2.5 bg-[#F9278E] text-white font-bold rounded-md hover:bg-[#EC2687] transition-colors">
                {t('hero.quoteAndBook')}
              </button>
            </div>
          </div>

          {/* Footer Link */}
          <div className="text-center pt-2">
            <p className="text-sm text-gray-600">
              {t('hero.sendMoreParcelsAtATime')}{' '}
              <a href="#" className="text-[#F9278E] font-medium hover:underline">
                {t('hero.here')}
              </a>
            </p>
          </div>
        </div>
      </motion.div>
  );
}
