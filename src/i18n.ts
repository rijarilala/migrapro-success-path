
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translations
import commonFR from './locales/fr/common.json';
import commonEN from './locales/en/common.json';

// Configure i18next
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      fr: {
        common: commonFR
      },
      en: {
        common: commonEN
      }
    },
    lng: localStorage.getItem('i18nextLng') || navigator.language.split('-')[0] || 'fr', // Try to detect from browser or use stored preference
    fallbackLng: 'fr',
    ns: ['common'],
    defaultNS: 'common',
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
    react: {
      useSuspense: false // Important for server-side rendering
    }
  });

// Set the HTML lang attribute whenever the language changes
i18n.on('languageChanged', (lng) => {
  document.documentElement.lang = lng;
});

export default i18n;
