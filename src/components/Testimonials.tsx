import { useLanguage } from "../i18n/LanguageContext";
import { translations } from "../i18n/translations";
import { Star } from "lucide-react";

export function Testimonials() {
  const { t, lang } = useLanguage();

  const testimonials = [
    {
      name: "Ahmed Al-Rashid",
      date: {
        en: "March 2025",
        ar: "مارس 2025",
        ja: "2025年3月",
      },
      review: t(translations.testimonials.review1),
      initial: "A",
    },
    {
      name: "Khalid Al-Mansoori",
      date: {
        en: "January 2025",
        ar: "يناير 2025",
        ja: "2025年1月",
      },
      review: t(translations.testimonials.review2),
      initial: "K",
    },
    {
      name: "Fatima Al-Zaabi",
      date: {
        en: "November 2024",
        ar: "نوفمبر 2024",
        ja: "2024年11月",
      },
      review: t(translations.testimonials.review3),
      initial: "F",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
            {t(translations.testimonials.heading)}
          </h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={24} className="fill-accent text-accent" />
            ))}
          </div>
          <p className="text-secondary/60 text-sm font-medium">
            {t(translations.testimonials.ratingText)}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-secondary/[0.03] border border-accent/10 rounded-2xl p-6 hover:border-accent/30 transition-all duration-300"
            >
              {/* Customer Info */}
              <div className="flex items-center gap-4 mb-4">
                {/* Avatar */}
                <div className="w-12 h-12 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center">
                  <span className="text-accent font-bold text-lg">
                    {testimonial.initial}
                  </span>
                </div>
                <div className="flex-1">
                  <h4 className="text-secondary font-semibold">
                    {testimonial.name}
                  </h4>
                  <p className="text-secondary/50 text-sm">
                    {testimonial.date[lang]}
                  </p>
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-accent text-accent" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-secondary/70 text-sm leading-relaxed">
                {testimonial.review}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
