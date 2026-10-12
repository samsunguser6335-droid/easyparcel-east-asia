import { useLanguage } from "../i18n/LanguageContext";
import { translations } from "../i18n/translations";
import { MapPin, Clock, Navigation } from "lucide-react";

export function Showroom() {
  const { t } = useLanguage();

  return (
    <section className="relative py-20 lg:py-28 bg-primary overflow-hidden">
      {/* Background Watermark Logo */}
      <img 
        src="/logo-watermark.png" 
        alt="" 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[700px] opacity-10 pointer-events-none z-0"
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
            {t(translations.showroom.title)}
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Video Player */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden border-2 border-accent/30 shadow-2xl shadow-accent/10">
              <video
                autoPlay
                loop
                muted
                playsInline
                controls
                className="w-full aspect-video bg-black"
              >
                <source src="/videos/showroom.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Showroom Details */}
          <div className="space-y-6">
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                <MapPin size={24} className="text-accent" />
              </div>
              <div>
                <h3 className="text-secondary font-semibold text-lg mb-1">
                  {t({ en: "Address", ar: "العنوان", ja: "住所" })}
                </h3>
                <p className="text-secondary/60">
                  {t(translations.showroom.address)}
                </p>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                <Clock size={24} className="text-accent" />
              </div>
              <div>
                <h3 className="text-secondary font-semibold text-lg mb-1">
                  {t({ en: "Opening Hours", ar: "ساعات العمل", ja: "営業時間" })}
                </h3>
                <p className="text-secondary/60">
                  {t(translations.showroom.hours)}
                </p>
              </div>
            </div>

            {/* Get Directions Button */}
            <div className="pt-4">
              <a
                href="https://maps.google.com/?q=Al+Aweer+Dubai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-primary font-bold text-lg rounded-full hover:bg-accent-light transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 group"
              >
                <Navigation size={20} className="group-hover:translate-x-1 transition-transform" />
                {t(translations.showroom.directionsBtn)}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
