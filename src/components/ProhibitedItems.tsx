import { XCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function ProhibitedItems() {
  const { t } = useTranslation();

  const leftColumnItems = [
    t('prohibited.foodPerishable'),
    t('prohibited.flammableMaterial'),
    t('prohibited.indecentMaterial'),
    t('prohibited.identificationDocuments'),
    t('prohibited.aerosol'),
    t('prohibited.liquidSubstances'),
    t('prohibited.electronicDevices'),
    t('prohibited.batteries'),
    t('prohibited.medicationSupplements'),
    t('prohibited.cosmeticSkincare'),
    t('prohibited.currency'),
    t('prohibited.improperPackaging'),
  ];

  const rightColumnItems = [
    t('prohibited.dangerousItems'),
    t('prohibited.usedRepairItems'),
    t('prohibited.hazardousGoods'),
    t('prohibited.tobaccoEcigarettes'),
    t('prohibited.drugs'),
    t('prohibited.religiousObjects'),
    t('prohibited.luggageContainingItems'),
    t('prohibited.illegalActivities'),
  ];

  return (
    <section className="bg-[#F2F4F8] py-20 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="flex items-center justify-center">
            <img 
              src="/images/prohibited-items.png" 
              alt="Shipping Restrictions - EasyParcel character holding a no-entry sign" 
              className="w-full h-auto max-w-md mx-auto"
            />
          </div>

          {/* Right Column - Content */}
          <div>
            {/* Heading */}
            <h2 className="text-4xl font-bold text-black mb-6">
              {t('prohibited.title')}
            </h2>

            {/* Paragraph 1 */}
            <p className="text-base text-[#666666] leading-relaxed mb-4">
              {t('prohibited.paragraph1')}
            </p>

            {/* CTA Link */}
            <a
              href="#"
              className="text-base text-[#F9278E] font-semibold hover:underline mb-4 inline-block"
            >
              {t('prohibited.ctaLink')}
            </a>

            {/* Paragraph 2 */}
            <p className="text-base text-[#666666] leading-relaxed mb-8">
              {t('prohibited.paragraph2')}
            </p>

            {/* Subheading */}
            <h3 className="text-2xl font-bold text-black mt-8 mb-6">
              {t('prohibited.japanProhibitedItems')}
            </h3>

            {/* Two-column list */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {/* Left column items */}
              <ul className="space-y-3">
                {leftColumnItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <XCircle size={20} className="text-[#DC2626] flex-shrink-0 mt-0.5" />
                    <span className="text-base text-[#333333]">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Right column items */}
              <ul className="space-y-3">
                {rightColumnItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <XCircle size={20} className="text-[#DC2626] flex-shrink-0 mt-0.5" />
                    <span className="text-base text-[#333333]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer links */}
            <div className="mt-6 space-y-3">
              <a
                href="#"
                className="text-base text-[#F9278E] font-semibold hover:underline block"
              >
                {t('prohibited.singaporeListLink')}
              </a>
              <a
                href="#"
                className="text-base text-[#F9278E] font-semibold hover:underline block"
              >
                {t('prohibited.internationalChecklistLink')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
