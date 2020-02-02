import i18n from 'i18next'
import {initReactI18next} from 'react-i18next'
import LanguageDetector, {CustomDetector, DetectorOptions} from 'i18next-browser-languagedetector'
import en from './locale/en.json'
import fr from './locale/fr.json'

const detectionOptions: DetectorOptions = {
  // order and from where user language should be detected
  order: ['customPath', 'localStorage', 'navigator'],
  lookupLocalStorage: 'i18nextLng',
  caches: ['localStorage'],
  excludeCacheFor: ['cimode']
}

const customPath: CustomDetector = {
  name: 'customPath',
  lookup: () => {
    let found
    if (typeof window !== 'undefined') {
      const language = window.location.pathname.match(/\/([a-zA-Z-]*)/g)
      if (language?.[0] === '/fr') {
        found = 'fr'
      } else {
        found = 'en'
      }
    }
    return found
  }
}

const languageDetector = new LanguageDetector(null, detectionOptions)
languageDetector.init(detectionOptions)
languageDetector.addDetector(customPath)

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en,
      fr,
    },
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      formatSeparator: ',',
    },
  })

export default i18n
