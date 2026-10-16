import React, { useState, useRef, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import '../styles/Navbar.css'

// Yo'l -> navbar.titles ichidagi kalit
const titleKeys = {
  '/': 'dashboard',
  '/dashboard': 'dashboard',
  '/map': 'map',
  '/drivers': 'drivers',
  '/couriers': 'couriers',
  '/stores': 'stores',
  '/orders': 'orders',
  '/clients': 'clients',
  '/reports': 'reports',
  '/support': 'support',
  '/settings': 'settings',
}

// Til tanlagichda ko'rsatiladigan ro'yxat
const LANGUAGES = [
  { code: 'uz', label: "O'zbekcha" },
  { code: 'en', label: 'English' },
  { code: 'ru', label: 'Русский' },
]

function Navbar() {
  const location = useLocation()
  const { t, i18n } = useTranslation()

  // '/drivers/1' kabi ichki yo'llarda ham birinchi qism ('/drivers') bo'yicha sarlavha olinadi
  const basePath = '/' + location.pathname.split('/')[1]
  // Sarlavha kaliti: maxsus sahifalar uchun alohida, qolganlari uchun birinchi qism bo'yicha
  let titleKey = titleKeys[basePath] || 'default'
  if (location.pathname === '/drivers/add') titleKey = 'driverApproval'
  else if (location.pathname.startsWith('/drivers/')) titleKey = 'driverProfile'

  // Til dropdown: ochiq/yopiq
  const [langOpen, setLangOpen] = useState(false)
  const langRef = useRef(null)

  // Dropdown tashqarisiga bosilganda avtomatik yopish
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const currentLang =
    LANGUAGES.find((l) => l.code === i18n.resolvedLanguage) || LANGUAGES[0]

  const handleSelectLang = (code) => {
    i18n.changeLanguage(code)
    setLangOpen(false)
  }

  return (
    <header className="navbar">
      <h1 className="navbar-title">{t(`navbar.titles.${titleKey}`)}</h1>

      <div className="navbar-right">
        {/* Til tanlagich */}
        <div className="lang-dropdown" ref={langRef}>
          <button
            type="button"
            className="lang-dropdown-btn"
            onClick={() => setLangOpen((prev) => !prev)}
          >
            {currentLang.label}
            <img
              className={`lang-dropdown-arrow ${langOpen ? 'lang-dropdown-arrow--open' : ''}`}
              src="/images/chevron-down.png"
              alt=""
            />
          </button>

          {langOpen && (
            <div className="lang-dropdown-menu">
              {LANGUAGES.map((lang) => (
                <div
                  key={lang.code}
                  className={`lang-dropdown-item ${lang.code === currentLang.code ? 'lang-dropdown-item--active' : ''}`}
                  onClick={() => handleSelectLang(lang.code)}
                >
                  {lang.label}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Qidiruv */}
        <div className="search-box">
          <img className="search-icon" src="/images/search.png" alt="" />
          <input type="text" placeholder={t('navbar.searchPlaceholder')} className="search-input" />
          <kbd className="search-kbd">⌘K</kbd>
        </div>

        {/* Bildirishnoma */}
        <button type="button" className="bell-btn">
          <img className="bell-icon" src="/images/bell.png" alt="" />
        </button>

        {/* Profil */}
        <div className="profile-block">
          <span className="profile-avatar">SR</span>
          <div className="profile-info">
            <span className="profile-name">Shoxrux R.</span>
            <span className="profile-role">{t('navbar.role')}</span>
          </div>
          <img className="profile-arrow" src="/images/chevron-down.png" alt="" />
        </div>
      </div>
    </header>
  )
}

export default Navbar
