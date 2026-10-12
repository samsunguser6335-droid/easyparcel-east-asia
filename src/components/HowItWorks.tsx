import { useLanguage } from "../i18n/LanguageContext";
import { translations } from "../i18n/translations";
import { Search, ClipboardCheck, Truck } from "lucide-react";

export function HowItWorks() {
  const { t } = useLanguage();

  const steps = [
    {
      number: "01",
      icon: Search,
      title: t(translations.howItWorks.step1Title),
      desc: t(translations.howItWorks.step1Desc),
    },
    {
      number: "02",
      icon: ClipboardCheck,
      title: t(translations.howItWorks.step2Title),
      desc: t(translations.howItWorks.step2Desc),
    },
    {
      number: "03",
      icon: Truck,
      title: t(translations.howItWorks.step3Title),
      desc: t(translations.howItWorks.step3Desc),
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
            {t({ en: "Our Process", ar: "عمليتنا", ja: "プロセス" })}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
            {t(translations.howItWorks.title)}
          </h2>
          <p className="text-secondary/50 text-lg max-w-2xl mx-auto">
            {t(translations.howItWorks.subtitle)}
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connector line (hidden on mobile and last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 start-[60%] w-[80%] h-px bg-gradient-to-r from-accent/40 to-accent/10" />
              )}

              <div className="relative bg-secondary/[0.03] border border-accent/10 rounded-2xl p-8 hover:border-accent/30 transition-all duration-300 h-full">
                {/* Step Number */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <step.icon size={24} className="text-accent" />
                    </div>
                    <span className="absolute -top-2 -end-2 w-7 h-7 bg-accent text-primary text-xs font-bold rounded-full flex items-center justify-center">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-accent font-bold text-lg mb-4 tracking-wide">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-secondary/50 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
