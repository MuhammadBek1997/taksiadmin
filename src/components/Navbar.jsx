import React, { useState, useRef, useEffect } from 'react'
import '../styles/Navbar.css'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ArrowLeft, ChevronDown, Search, Bell } from 'lucide-react'

const LANGUAGES = [
    { code: 'uz', label: "O'zbek" },
    { code: 'en', label: 'English' },
    { code: 'ru', label: 'Русский' },
]

const Navbar = () => {
    const location = useLocation()
    const { t, i18n } = useTranslation()

    const [langOpen, setLangOpen] = useState(false)
    const langRef = useRef(null)

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (langRef.current && !langRef.current.contains(e.target)) {
                setLangOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const currentLang = LANGUAGES.find((l) => l.code === i18n.language) || LANGUAGES[0]

    const handleSelectLang = (code) => {
        i18n.changeLanguage(code)
        setLangOpen(false)
    }

    const titleKeys = {
        "/": "navbar.titles.dashboard",
        "/map": "navbar.titles.map",
        "/drivers": "navbar.titles.drivers",
        "/couriers": "navbar.titles.couriers",
        "/orders": "navbar.titles.orders",
        "/clients": "navbar.titles.clients",
        "/reports": "navbar.titles.reports",
        "/support": "navbar.titles.support",
        "/settings": "navbar.titles.settings",
        "/store/new": "storeFlow.newStoreTitle",
        "/store/import": "storeFlow.importTitle",
        "/store": "navbar.titles.store"
    }

    const currentTitleKey = titleKeys[location.pathname] || "navbar.titles.default"

    const orderMatch = location.pathname.match(/^\/orders\/(.+)$/)
    const courierMatch = location.pathname.match(/^\/couriers\/(.+)$/)

    let title = t(currentTitleKey)
    if (location.pathname === '/drivers') title = 'Taxi Haydovchilari'
    else if (location.pathname === '/drivers/approval') title = 'Haydovchilarni Tasdiqlash'
    else if (location.pathname.startsWith('/drivers/')) title = 'Haydovchi Profili'
    if (orderMatch) {
        title = `${t('navbar.titles.orderDetails')} • #${orderMatch[1]}`
    } else if (courierMatch) {
        title = `${t('navbar.titles.courierProfile')} • #${courierMatch[1]}`
    }

    return (
        <div className="navbar">
            <div className="navbar__heading">
                {location.pathname.startsWith('/drivers/') && (
                    <Link className="navbar__back" to="/drivers" aria-label="Orqaga qaytish" title="Orqaga qaytish">
                        <ArrowLeft size={18} />
                        <span>Orqaga</span>
                    </Link>
                )}
                <h2 className="navbar__title">{title}</h2>
            </div>

            <div className="navbar__right">
                <div className="navbar__search">
                    <Search size={16} />
                    <input type="text" placeholder={t('navbar.searchPlaceholder')} />
                    <kbd className="navbar__kbd">⌘K</kbd>
                </div>

                <button className="navbar__icon-btn">
                    <Bell size={18} />
                </button>

                <div className="lang-dropdown" ref={langRef}>
                    <button
                        className="lang-dropdown__btn"
                        onClick={() => setLangOpen((prev) => !prev)}
                    >
                        {currentLang.label}
                        <ChevronDown size={14} className={langOpen ? "lang-dropdown__arrow--open" : ""} />
                    </button>

                    {langOpen && (
                        <div className="lang-dropdown__menu">
                            {LANGUAGES.map((lang) => (
                                <div
                                    key={lang.code}
                                    className={`lang-dropdown__item ${lang.code === i18n.language ? "lang-dropdown__item--active" : ""}`}
                                    onClick={() => handleSelectLang(lang.code)}
                                >
                                    {lang.label}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className="navbar__profile">
                    <span className="navbar__avatar">SR</span>
                    <div className="navbar__profile-text">
                        <p className="navbar__name">Shoxrux R.</p>
                        <p className="navbar__role">{t('navbar.role')}</p>
                    </div>
                    <ChevronDown size={16} className="navbar__profile-arrow" />
                </div>
            </div>
        </div>
    )
}

export default Navbar

