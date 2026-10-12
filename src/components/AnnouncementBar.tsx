import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function AnnouncementBar() {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // Create announcement messages array using translation keys
  const announcementMessages = [
    { text: t('announcements.message1'), cta: t('announcements.cta1') },
    { text: t('announcements.message2'), cta: t('announcements.cta2') },
    { text: t('announcements.message3'), cta: t('announcements.cta3') },
    { text: t('announcements.message4'), cta: t('announcements.cta4') },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcementMessages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [announcementMessages.length]);

  if (!isVisible) return null;

  return (
    <div className="bg-primary text-white py-2 px-4 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-4">
        <button
          onClick={() => setCurrentIndex((prev) => (prev - 1 + announcementMessages.length) % announcementMessages.length)}
          className="hidden sm:block hover:opacity-80 transition-opacity"
        >
          <ChevronLeft size={16} />
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-3 text-sm font-medium"
          >
            <span className="hidden sm:inline">{announcementMessages[currentIndex].text}</span>
            <span className="sm:hidden text-xs">{announcementMessages[currentIndex].text}</span>
            <button className="bg-accent-yellow text-gray-900 px-3 py-1 rounded-full text-xs font-bold hover:scale-105 transition-transform">
              {announcementMessages[currentIndex].cta}
            </button>
          </motion.div>
        </AnimatePresence>

        <button
          onClick={() => setCurrentIndex((prev) => (prev + 1) % announcementMessages.length)}
          className="hidden sm:block hover:opacity-80 transition-opacity"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 hover:opacity-80 transition-opacity"
      >
        <X size={16} />
      </button>
    </div>
  );
}
