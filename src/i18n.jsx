import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import uzTranslation from '../public/locales/uz.json'
import enTranslation from '../public/locales/en.json'
import ruTranslation from '../public/locales/ru.json'

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'uz',
        supportedLngs: ['uz', 'ru', 'en'],
        debug: false,
        resources: {
            uz: { translation: uzTranslation },
            en: { translation: enTranslation },
            ru: { translation: ruTranslation },
        },
    })

export default i18n