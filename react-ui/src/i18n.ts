import i18n from 'i18next'
import { reactI18nextModule } from 'react-i18next'
import Backend from 'i18next-xhr-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import * as en from './locale/en.json'
import * as fr from './locale/fr.json'

const detectionOptions = {
  // order and from where user language should be detected
  order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],

  // keys or params to lookup language from
  lookupQuerystring: 'lng',
  lookupCookie: 'i18next',
  lookupLocalStorage: 'i18nextLng',
  lookupFromPathIndex: 0,
  lookupFromSubdomainIndex: 0,

  // cache user language on
  caches: ['localStorage', 'cookie'],
  excludeCacheFor: ['cimode'], // languages to not persist (cookie, localStorage)

  // optional expire and domain for set cookie
  cookieMinutes: 10,
  cookieDomain: 'myDomain',

  // optional htmlTag with lang attribute, the default is:
  htmlTag: document.documentElement
}

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(reactI18nextModule)
  .init({
    resources: {
      en,
      fr,
    },
    fallbackLng: 'en',
    debug: true,
    detection: detectionOptions,
    interpolation: {
      escapeValue: false,
      formatSeparator: ',',
    },
    react: {
      wait: true,
    },
  })

export default i18n