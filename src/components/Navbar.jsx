import React, { useState, useRef, useEffect } from 'react'
import '../styles/Navbar.css'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ChevronDown } from 'lucide-react'

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
    }

    const currentTitleKey = titleKeys[location.pathname] || "navbar.titles.default"

    const orderMatch = location.pathname.match(/^\/orders\/(.+)$/)
    const title = orderMatch
        ? `${t('navbar.titles.orderDetails')} • #${orderMatch[1]}`
        : t(currentTitleKey)

    return (
        <div className="navbar">
            <h2 className="navbar__title">{title}</h2>

            <div className="navbar__right">
                <div className="navbar__search">
                    <img src="/search.png" alt="" />
                    <input type="text" placeholder={t('navbar.searchPlaceholder')} />
                </div>

                <button className="navbar__icon-btn">
                    <img src="/alarm-clock.png" alt="" />
                </button>

                {}
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
                    <img src="/Avatar.png" alt="" className="navbar__avatar" />
                    <div className="navbar__profile-text">
                        <p className="navbar__name">Shoxrux R.</p>
                        <p className="navbar__role">{t('navbar.role')}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar