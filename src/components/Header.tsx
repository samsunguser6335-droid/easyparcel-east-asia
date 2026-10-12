import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Truck, Plug, Star, Plane, Globe, Bike, Package, Zap, Search } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './LanguageSwitcher';

export function Header() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [activeServiceCategory, setActiveServiceCategory] = useState<string>('delivery');

  // Simple dropdown items
  const dropdownItems = {
    [t('nav.couriers')]: [t('nav.allCouriers'), t('nav.domestic'), t('nav.international'), t('nav.comparePrices')],
    [t('nav.pricing')]: [t('nav.rateCalculator'), t('nav.volumeDiscounts'), t('nav.enterprisePlans')],
    [t('nav.about')]: [t('nav.aboutUs'), t('nav.contact')],
    [t('nav.resources')]: [t('nav.blog'), t('nav.helpCenter'), t('nav.apiDocs'), t('nav.tutorials')],
  };

  // Services mega menu categories
  const serviceCategories = [
    {
      id: 'delivery',
      icon: Truck,
      title: t('services.domestic'),
      description: 'Fast local delivery',
      links: [
        { icon: Package, label: t('services.domesticTitle') },
        { icon: Plane, label: t('services.internationalTitle') },
        { icon: Bike, label: t('services.onDemandTitle') },
      ]
    },
    {
      id: 'integrations',
      icon: Plug,
      title: t('nav.integration'),
      description: 'Connect your store',
      links: [
        { icon: Globe, label: 'Shopify' },
        { icon: Globe, label: 'WooCommerce' },
        { icon: Globe, label: 'Shopee' },
      ]
    },
    {
      id: 'features',
      icon: Star,
      title: t('nav.features'),
      description: 'Exclusive features',
      links: [
        { icon: Zap, label: 'Auto Waybills' },
        { icon: Zap, label: 'Bulk Shipping' },
        { icon: Zap, label: 'API Access' },
      ]
    },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img 
                src="/images/easyparcel-logo.png" 
                alt="EasyParcel" 
                className="h-12 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              {/* Services - Mega Menu */}
              <div
                className="relative group"
                onMouseEnter={() => setActiveMegaMenu('services')}
                onMouseLeave={() => setActiveMegaMenu(null)}
              >
                <button className="flex items-center gap-1 text-sm font-medium text-gray-700 group-hover:text-[#F9278E] transition-colors">
                  {t('nav.services')}
                  <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                </button>

                <AnimatePresence>
                  {activeMegaMenu === 'services' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-[800px] bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden"
                    >
                      <div className="flex">
                        {/* Left Column - Categories */}
                        <div className="w-1/3 bg-gray-50 p-4">
                          {serviceCategories.map((category) => (
                            <div
                              key={category.id}
                              onMouseEnter={() => setActiveServiceCategory(category.id)}
                              className={`flex items-start gap-3 p-3 rounded-lg cursor-pointer transition-all mb-2 ${
                                activeServiceCategory === category.id
                                  ? 'bg-white shadow-md'
                                  : 'hover:bg-white/50'
                              }`}
                            >
                              <category.icon size={20} className="text-[#F9278E] mt-1" />
                              <div>
                                <p className="font-semibold text-gray-900">{category.title}</p>
                                <p className="text-xs text-gray-500">{category.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Middle Column - Details */}
                        <div className="w-1/3 p-4 border-l border-gray-100">
                          {serviceCategories.map((category) => (
                            activeServiceCategory === category.id && (
                              <div key={category.id}>
                                {category.links.map((link, idx) => (
                                  <Link
                                    key={idx}
                                    to="#"
                                    className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 transition-colors mb-1"
                                  >
                                    <link.icon size={16} className="text-gray-600" />
                                    <span className="text-sm text-gray-700">{link.label}</span>
                                  </Link>
                                ))}
                              </div>
                            )
                          ))}
                        </div>

                        {/* Right Column - CTA */}
                        <div className="w-1/3 p-6 bg-gradient-to-br from-pink-50 to-purple-50 border-l border-gray-100">
                          <h4 className="font-bold text-gray-900 mb-2">Happy Clients Speak Up</h4>
                          <p className="text-sm text-gray-600 mb-4">
                            "EasyParcel transformed our shipping operations. We save over 30% on delivery costs!"
                          </p>
                          <p className="text-xs text-gray-500 mb-4">- Sarah Chen, E-commerce Owner</p>
                          <button className="w-full px-4 py-2 text-sm font-medium text-[#F9278E] border border-[#F9278E] rounded-md hover:bg-[#F9278E] hover:text-white transition-colors">
                            {t('nav.signup')}
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Simple Dropdowns */}
              {Object.keys(dropdownItems).map((item, index) => {
                // Check if this is the About dropdown
                const isAboutDropdown = item === t('nav.about');
                
                return (
                  <div key={item} className="flex items-center gap-6">
                    <div
                      className="relative group"
                      onMouseEnter={() => setActiveMegaMenu(item)}
                      onMouseLeave={() => setActiveMegaMenu(null)}
                    >
                      <Link 
                        to={isAboutDropdown ? "/about" : "#"}
                        className="flex items-center gap-1 text-sm font-medium text-gray-700 group-hover:text-[#F9278E] transition-colors"
                      >
                        {item}
                        <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                      </Link>

                      <AnimatePresence>
                        {activeMegaMenu === item && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2"
                          >
                            {dropdownItems[item as keyof typeof dropdownItems].map((subItem) => {
                              // Determine the correct link path
                              let linkPath = "#";
                              if (subItem === t('nav.aboutUs')) {
                                linkPath = "/about";
                              } else if (subItem === t('nav.contact')) {
                                linkPath = "/contact";
                              }
                              
                              return (
                                <Link
                                  key={subItem}
                                  to={linkPath}
                                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#F9278E] transition-colors"
                                >
                                  {subItem}
                                </Link>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* FAQ Link - Right after About */}
                    {isAboutDropdown && (
                      <Link 
                        to="/faq"
                        className="text-sm font-medium text-gray-700 hover:text-[#F9278E] transition-colors"
                      >
                        {t('nav.faq')}
                      </Link>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Right Side */}
            <div className="flex items-center gap-3">
              {/* Tracking Button */}
              <Link 
                to="/track"
                className="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#F9278E] transition-colors rounded-md hover:bg-pink-50"
              >
                <Search size={16} />
                {t('nav.tracking')}
              </Link>

              {/* Language Switcher */}
              <LanguageSwitcher />

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2 text-gray-700 hover:text-primary transition-colors"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50 lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-white z-50 lg:hidden overflow-y-auto"
            >
              <div className="p-4">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xl font-black text-primary">Menu</span>
                  <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-gray-700">
                    <X size={24} />
                  </button>
                </div>

                <nav className="space-y-2">
                  {/* Services */}
                  <div>
                    <button className="w-full flex items-center justify-between px-4 py-3 text-left font-medium text-gray-700 hover:bg-bg-light rounded-lg">
                      {t('nav.services')}
                      <ChevronDown size={16} />
                    </button>
                    <div className="pl-4 space-y-1">
                      {serviceCategories.map((category) => (
                        <Link
                          key={category.id}
                          to="#"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-4 py-2 text-sm text-gray-600 hover:text-primary"
                        >
                          {category.title}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Other dropdowns */}
                  {Object.keys(dropdownItems).map((item) => {
                    const isAboutDropdown = item === t('nav.about');
                    
                    return (
                      <div key={item}>
                        <button className="w-full flex items-center justify-between px-4 py-3 text-left font-medium text-gray-700 hover:bg-bg-light rounded-lg">
                          {item}
                          <ChevronDown size={16} />
                        </button>
                        <div className="pl-4 space-y-1">
                          {dropdownItems[item as keyof typeof dropdownItems].map((subItem) => {
                            // Determine the correct link path
                            let linkPath = "#";
                            if (subItem === t('nav.aboutUs')) {
                              linkPath = "/about";
                            } else if (subItem === t('nav.contact')) {
                              linkPath = "/contact";
                            }
                            
                            return (
                              <Link
                                key={subItem}
                                to={linkPath}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block px-4 py-2 text-sm text-gray-600 hover:text-primary"
                              >
                                {subItem}
                              </Link>
                            );
                          })}
                        </div>
                        
                        {/* FAQ Link - Right after About */}
                        {isAboutDropdown && (
                          <Link
                            to="/faq"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-4 py-3 text-sm font-medium text-gray-700 hover:text-[#F9278E] hover:bg-pink-50 rounded-lg transition-colors"
                          >
                            {t('nav.faq')}
                          </Link>
                        )}
                      </div>
                    );
                  })}
                </nav>

                {/* Tracking Link for Mobile */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <Link
                    to="/track"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-gray-700 hover:text-[#F9278E] hover:bg-pink-50 rounded-lg transition-colors"
                  >
                    <Search size={16} />
                    {t('nav.tracking')}
                  </Link>
                </div>

                <div className="mt-6 space-y-3">
                  <LanguageSwitcher />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
