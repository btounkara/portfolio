import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { en, fr } from './languages';

i18n
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: 'en',
    lng: 'fr',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          and: 'and',
          ...en,
        },
      },
      fr: {
        translation: {
          and: 'et',
          ...fr,
        },
      },
    },
  });

export default i18n;
