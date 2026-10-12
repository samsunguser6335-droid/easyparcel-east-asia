import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { translations } from './translations';

// Initialize i18n synchronously
i18n
  .use(initReactI18next)
  .init({
    resources: {
      ja: { translation: translations.ja },
      en: { translation: translations.en },
      zh: { translation: translations.zh },
    },
    lng: 'ja', // Japanese is the default language
    fallbackLng: 'ja',
    debug: false, // Set to true for debugging
    interpolation: {
      escapeValue: false, // React already escapes by default
    },
    react: {
      useSuspense: false, // Disable suspense to avoid loading issues
    },
  });

export default i18n;
