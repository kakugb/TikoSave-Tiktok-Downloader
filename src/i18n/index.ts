import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

// Define the custom detector
const customDetector = {
  name: 'custom',
  lookup() {
    return 'en'; // Always return 'en' as the default
  },
};

i18n
  .use(HttpApi)
  .use(
    new LanguageDetector(null, {
      order: ['custom', 'cookie', 'localStorage', 'path', 'subdomain', 'htmlTag'],
      caches: ['cookie'],
      lookupCookie: 'i18next',
      lookupLocalStorage: 'i18nextLng',
    }).addDetector(customDetector) // Add the custom detector
  )
  .use(initReactI18next)
  .init({
    supportedLngs: ['en', 'de', 'id', 'uk', 'ko', 'ja', 'pl', 'ar', 'nl', 'tr', 'pt', 'es', 'fr'],
    fallbackLng: 'en',
    detection: {
      order: ['custom', 'cookie', 'localStorage', 'path', 'subdomain', 'htmlTag'],
      caches: ['cookie'],
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    debug: true, // Enable debug to log detection details
  });

export default i18n;