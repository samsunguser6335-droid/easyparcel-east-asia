import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { heroSlides } from '../data/mockData';
import { QuoteWidget } from './QuoteWidget';

export function Hero() {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Translation keys for hero slides
  const heroSlideKeys = [
    { titleKey: 'hero.slide1Title', subtitleKey: 'hero.slide1Subtitle' },
    { titleKey: 'hero.slide2Title', subtitleKey: 'hero.slide2Subtitle' },
    { titleKey: 'hero.slide3Title', subtitleKey: 'hero.slide3Subtitle' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlideKeys.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [heroSlideKeys.length]);

  return (
    <section className="relative w-full min-h-[600px] md:min-h-[700px]">
      {/* Full-width Background Image Slider */}
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <img
              src={heroSlides[currentSlide].image}
              alt={t(heroSlideKeys[currentSlide].titleKey)}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Hero Content (Left Side) */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-12 lg:px-16 py-16 md:py-0">
        <div className="max-w-xl text-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
                {t(heroSlideKeys[currentSlide].titleKey)}
              </h1>
              <p className="text-base md:text-lg text-gray-200 mb-6">
                {t(heroSlideKeys[currentSlide].subtitleKey)}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Slide Indicators */}
          <div className="flex gap-2">
            {heroSlideKeys.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentSlide ? 'w-8 bg-primary' : 'w-2 bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Quote Widget - Floating Card (Desktop) */}
      <div className="hidden md:block absolute right-[10%] top-1/2 -translate-y-1/2 z-20 w-[400px]">
        <QuoteWidget />
      </div>

      {/* Quote Widget - Mobile (Below Image) */}
      <div className="md:hidden relative z-20 -mt-20 px-4">
        <div className="w-[90%] max-w-md mx-auto">
          <QuoteWidget />
        </div>
      </div>
    </section>
  );
}
