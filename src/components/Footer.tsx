import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t } = useTranslation();
  
  const footerLinks = {
    [t('footer.company')]: [t('footer.aboutUs'), t('footer.careers'), t('footer.press'), t('footer.blog'), t('footer.contactUs')],
    [t('footer.services')]: [t('footer.domesticShipping'), t('footer.internationalShipping'), t('footer.onDemandDelivery'), t('footer.codServices'), t('footer.bulkShipping')],
    [t('footer.integration')]: ['Shopify', 'WooCommerce', 'Shopee', 'Lazada', 'TikTok Shop'],
    [t('footer.tools')]: [t('footer.rateCalculator'), t('footer.tracking'), t('footer.apiDocumentation'), t('footer.shippingLabels')],
    [t('footer.help')]: [t('nav.faq'), t('footer.helpCenter'), t('footer.termsOfService'), t('footer.privacyPolicy')],
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <div className="mb-4">
              <img 
                src="/images/easyparcel-logo.png" 
                alt="EasyParcel" 
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm mb-4">
              {t('footer.description')}
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter size={16} />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Youtube size={16} />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-bold mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => {
                  let linkPath = "#";
                  if (link === t('footer.aboutUs')) {
                    linkPath = "/about";
                  } else if (link === t('footer.contactUs')) {
                    linkPath = "/contact";
                  } else if (link === t('footer.tracking')) {
                    linkPath = "/track";
                  }
                  
                  return (
                    <li key={link}>
                      <Link 
                        to={linkPath} 
                        className="text-gray-400 text-sm hover:text-white transition-colors"
                      >
                        {link}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* App Store Badges */}
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex gap-3">
            <div className="bg-gray-800 px-4 py-2 rounded-lg">
              <p className="text-xs text-gray-400">{t('footer.downloadOnAppStore')}</p>
              <p className="font-bold">App Store</p>
            </div>
            <div className="bg-gray-800 px-4 py-2 rounded-lg">
              <p className="text-xs text-gray-400">{t('footer.getItOnGooglePlay')}</p>
              <p className="font-bold">Google Play</p>
            </div>
          </div>
          <p className="text-gray-400 text-sm">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}
