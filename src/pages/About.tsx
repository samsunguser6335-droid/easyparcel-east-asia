import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { 
  Info, Zap, FileCheck, Headphones, Route, Clock, Truck, PiggyBank, 
  Search, Home, Users, FileText, CheckCircle, Plug, Check 
} from 'lucide-react';

export function About() {
  const { t } = useTranslation();

  const whyPlatformCards = [
    {
      icon: Zap,
      title: t('about.whyPlatform.card1Title'),
      description: t('about.whyPlatform.card1Desc'),
    },
    {
      icon: FileCheck,
      title: t('about.whyPlatform.card2Title'),
      description: t('about.whyPlatform.card2Desc'),
    },
    {
      icon: Headphones,
      title: t('about.whyPlatform.card3Title'),
      description: t('about.whyPlatform.card3Desc'),
    },
    {
      icon: Route,
      title: t('about.whyPlatform.card4Title'),
      description: t('about.whyPlatform.card4Desc'),
    },
  ];

  const featureCards = [
    { icon: Clock, title: t('about.features.card1Title'), description: t('about.features.card1Desc') },
    { icon: Truck, title: t('about.features.card2Title'), description: t('about.features.card2Desc') },
    { icon: PiggyBank, title: t('about.features.card3Title'), description: t('about.features.card3Desc') },
    { icon: Search, title: t('about.features.card4Title'), description: t('about.features.card4Desc') },
    { icon: Home, title: t('about.features.card5Title'), description: t('about.features.card5Desc') },
    { icon: Users, title: t('about.features.card6Title'), description: t('about.features.card6Desc') },
    { icon: FileText, title: t('about.features.card7Title'), description: t('about.features.card7Desc') },
    { icon: CheckCircle, title: t('about.features.card8Title'), description: t('about.features.card8Desc') },
    { icon: Plug, title: t('about.features.card9Title'), description: t('about.features.card9Desc') },
  ];

  const eastAsiaCountries = [
    t('about.family.china'),
    t('about.family.japan'),
    t('about.family.southKorea'),
    t('about.family.taiwan'),
    t('about.family.hongKong'),
    t('about.family.macau'),
  ];

  const southeastAsiaCountries = [
    t('about.family.singapore'),
    t('about.family.malaysia'),
    t('about.family.thailand'),
    t('about.family.indonesia'),
  ];

  return (
    <div>
      {/* Section A: Hero */}
      <section className="bg-[#F2F4F8] py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-black text-black mb-6">
            {t('about.hero.title')}
          </h1>
          <p className="text-2xl text-[#666666]">
            {t('about.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Section B: Introduction & Notice */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-base text-[#666666] leading-relaxed mb-8 text-center">
            {t('about.intro.paragraph')}
          </p>
          
          {/* Alert Box */}
          <div className="bg-[#FFF8ED] border-l-4 border-[#F9278E] p-6 rounded-r-lg flex items-start gap-4">
            <Info className="text-[#F9278E] flex-shrink-0 mt-1" size={24} />
            <p className="text-base text-[#666666] leading-relaxed">
              {t('about.intro.notice')}
            </p>
          </div>
        </div>
      </section>

      {/* Section C: Why a Dedicated East Asia Platform? */}
      <section className="bg-[#F2F4F8] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-black mb-4">
              {t('about.whyPlatform.title')}
            </h2>
            <p className="text-base text-[#666666] max-w-3xl mx-auto">
              {t('about.whyPlatform.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyPlatformCards.map((card, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <card.icon className="text-[#F9278E] mb-4" size={40} />
                <h3 className="text-xl font-bold text-black mb-3">
                  {card.title}
                </h3>
                <p className="text-sm text-[#666666] leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section D: East Asia's All-in-One Local Courier Service Network */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="/images/about-network.png" 
              alt="East Asia Courier Network" 
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
          <div>
            <h2 className="text-4xl font-black text-black mb-6">
              {t('about.network.title')}
            </h2>
            <p className="text-base text-[#666666] leading-relaxed">
              {t('about.network.paragraph')}
            </p>
          </div>
        </div>
      </section>

      {/* Section E: Why EasyParcel East Asia? (Features Grid) */}
      <section className="bg-[#F2F4F8] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-black mb-4">
              {t('about.features.title')}
            </h2>
            <p className="text-base text-[#666666] max-w-3xl mx-auto">
              {t('about.features.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featureCards.map((card, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <card.icon className="text-[#F9278E] mb-4" size={32} />
                <h3 className="text-lg font-bold text-black mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-[#666666] leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section F: The EasyParcel Family */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-black mb-12 text-center">
            {t('about.family.title')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            {/* East Asia */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-black mb-6">
                {t('about.family.eastAsia')}
              </h3>
              <ul className="space-y-3">
                {eastAsiaCountries.map((country, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="text-[#F9278E]" size={20} />
                    <span className="text-base text-[#666666]">{country}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Southeast Asia */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-black mb-6">
                {t('about.family.southeastAsia')}
              </h3>
              <ul className="space-y-3">
                {southeastAsiaCountries.map((country, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="text-[#F9278E]" size={20} />
                    <span className="text-base text-[#666666]">{country}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="text-base text-[#666666] leading-relaxed max-w-4xl mx-auto text-center">
            {t('about.family.paragraph')}
          </p>
        </div>
      </section>

      {/* Section G: Our Commitment to East Asia */}
      <section className="bg-[#F2F4F8] py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-black text-black mb-6">
              {t('about.commitment.title')}
            </h2>
            <p className="text-base text-[#666666] leading-relaxed mb-6">
              {t('about.commitment.paragraph')}
            </p>
            
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3">
                <Check className="text-[#F9278E] flex-shrink-0 mt-1" size={20} />
                <span className="text-base text-[#666666]">{t('about.commitment.bullet1')}</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-[#F9278E] flex-shrink-0 mt-1" size={20} />
                <span className="text-base text-[#666666]">{t('about.commitment.bullet2')}</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-[#F9278E] flex-shrink-0 mt-1" size={20} />
                <span className="text-base text-[#666666]">{t('about.commitment.bullet3')}</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-[#F9278E] flex-shrink-0 mt-1" size={20} />
                <span className="text-base text-[#666666]">{t('about.commitment.bullet4')}</span>
              </li>
            </ul>

            <div className="bg-white p-6 rounded-lg border-l-4 border-[#F9278E]">
              <p className="text-base text-[#666666] leading-relaxed">
                <strong>{t('about.commitment.rememberTitle')}</strong> {t('about.commitment.remember')}
              </p>
            </div>
          </div>

          <div>
            <img 
              src="/images/about-commitment.png" 
              alt="Our Commitment to East Asia" 
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* Section H: Final CTA */}
      <section className="bg-[#F9278E] py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black text-white mb-6">
            {t('about.cta.title')}
          </h2>
          <p className="text-lg text-white mb-8 leading-relaxed">
            {t('about.cta.paragraph')}
          </p>
          <Link 
            to="/"
            className="inline-block bg-white text-[#F9278E] font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {t('about.cta.button')}
          </Link>
        </div>
      </section>
    </div>
  );
}
