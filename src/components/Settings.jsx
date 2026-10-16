import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
    SlidersHorizontal,
    Tag,
    Percent,
    Users,
    Bell,
    Plug,
    Shield,
    Car,
    Pencil,
    Plus,
    Check,
    Palette,
    Type,
} from 'lucide-react'
import { THEMES, getSavedTheme, applyTheme, saveTheme } from '../theme'
import { FONTS, getSavedFont, applyFont } from '../fonts'
import '../styles/Settings.css'

const TABS = [
    { key: 'general', icon: SlidersHorizontal },
    { key: 'tariffs', icon: Tag },
    { key: 'commission', icon: Percent },
    { key: 'staff', icon: Users },
    { key: 'notifications', icon: Bell },
    { key: 'integrations', icon: Plug },
    { key: 'security', icon: Shield },
    { key: 'appearance', icon: Palette },
    { key: 'fonts', icon: Type },
]

const THEME_GROUPS = ['default', 'men', 'women']

const TARIFFS = [
    { key: 'economy', cars: 'Cobalt, Nexia, Spark', start: '8,000', km: '1,800', wait: '500' },
    { key: 'comfort', cars: 'Gentra, Lacetti', start: '12,000', km: '2,400', wait: '700' },
    { key: 'business', cars: 'Malibu, Tracker', start: '20,000', km: '3,500', wait: '1,000' },
]

const STAFF = [
    { initials: 'SR', name: 'Shoxrux R.', email: 'admin@ddd.uz', role: 'admin', color: 'yellow' },
    { initials: 'NK', name: 'Nodira K.', email: 'nodira@ddd.uz', role: 'operator', color: 'blue' },
    { initials: 'US', name: "Ulug'bek S.", email: 'ulugbek@ddd.uz', role: 'finance', color: 'green' },
]

const RULE_KEYS = ['night', 'weather', 'auto', 'cash']

const Toggle = (props) => (
    <label className="set-switch">
        <input type="checkbox" {...props} />
        <span className="set-switch__slider"></span>
    </label>
)

const Settings = () => {
    const { t } = useTranslation()

    const [tab, setTab] = useState('tariffs')
    const [theme, setTheme] = useState(getSavedTheme)
    const [themeNotice, setThemeNotice] = useState('')
    const [font, setFont] = useState(getSavedFont)
    const [activeTariff, setActiveTariff] = useState('economy')
    const [rules, setRules] = useState({
        night: true,
        weather: true,
        auto: true,
        cash: false,
    })

    const toggleRule = (key) => {
        setRules((prev) => ({ ...prev, [key]: !prev[key] }))
    }

    const chooseTheme = (id) => {
        setTheme(id)
        setThemeNotice('')
    }

    useEffect(() => {
        if (tab !== 'appearance') return
        applyTheme(theme)
        return () => applyTheme(getSavedTheme())
    }, [tab, theme])

    const cancelTheme = () => {
        setTheme(getSavedTheme())
        applyTheme(getSavedTheme())
        setThemeNotice('')
    }

    const commitTheme = () => {
        try {
            saveTheme(theme)
            setThemeNotice('saved')
        } catch {
            setThemeNotice('saveError')
        }
    }

    /* ---------- BO'LIMLAR ---------- */

    const renderGeneral = () => (
        <div className="set-card">
            <h3 className="set-card__title">{t('settings.general.title')}</h3>
            <div className="set-form">
                <div className="set-field">
                    <label>{t('settings.general.companyName')}</label>
                    <input type="text" placeholder={t('settings.general.companyNamePlaceholder')} />
                </div>
                <div className="set-field">
                    <label>{t('settings.general.phone')}</label>
                    <input type="text" placeholder={t('settings.general.phonePlaceholder')} />
                </div>
                <div className="set-field">
                    <label>{t('settings.general.timezone')}</label>
                    <input type="text" placeholder={t('settings.general.timezone')} />
                </div>
            </div>
        </div>
    )

    const renderTariffs = () => (
        <div className="set-card">
            <div className="set-card__head">
                <div>
                    <h3 className="set-card__title">{t('settings.tariffs.title')}</h3>
                    <p className="set-card__sub">{t('settings.tariffs.subtitle')}</p>
                </div>
                <button className="set-btn set-btn--small">
                    <Plus size={14} />
                    {t('settings.tariffs.add')}
                </button>
            </div>

            <div className="set-tariffs">
                {TARIFFS.map((tf) => (
                    <div
                        key={tf.key}
                        className={`set-tariff ${activeTariff === tf.key ? 'set-tariff--active' : ''}`}
                        onClick={() => setActiveTariff(tf.key)}
                    >
                        <div className="set-tariff__head">
                            <div className="set-tariff__name">
                                <span className="set-tariff__icon"><Car size={16} /></span>
                                {t(`settings.tariffs.names.${tf.key}`)}
                            </div>
                            <button
                                className="set-tariff__edit"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <Pencil size={14} />
                            </button>
                        </div>
                        <p className="set-tariff__cars">{tf.cars}</p>
                        <div className="set-tariff__row">
                            <span>{t('settings.tariffs.startPrice')}</span>
                            <b>{tf.start} UZS</b>
                        </div>
                        <div className="set-tariff__row">
                            <span>{t('settings.tariffs.kmPrice')}</span>
                            <b>{tf.km} UZS</b>
                        </div>
                        <div className="set-tariff__row">
                            <span>{t('settings.tariffs.waiting')}</span>
                            <b>{tf.wait} UZS</b>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )

    const renderRules = () => (
        <div className="set-card">
            <h3 className="set-card__title">{t('settings.rules.title')}</h3>
            <div className="set-rules">
                {RULE_KEYS.map((key) => (
                    <div className="set-rule" key={key}>
                        <div>
                            <p className="set-rule__title">{t(`settings.rules.${key}.title`)}</p>
                            <p className="set-rule__desc">{t(`settings.rules.${key}.desc`)}</p>
                        </div>
                        <Toggle checked={rules[key]} onChange={() => toggleRule(key)} />
                    </div>
                ))}
            </div>
        </div>
    )

    const renderStaff = () => (
        <div className="set-card set-card--flush">
            <div className="set-card__head set-card__head--padded">
                <h3 className="set-card__title">{t('settings.staff.title')}</h3>
                <button className="set-btn set-btn--primary set-btn--small">
                    <Plus size={14} />
                    {t('settings.staff.add')}
                </button>
            </div>

            <div className="set-staff">
                <div className="set-staff__row set-staff__row--head">
                    <div>{t('settings.staff.colStaff')}</div>
                    <div>{t('settings.staff.colRole')}</div>
                </div>
                {STAFF.map((s) => (
                    <div className="set-staff__row" key={s.email}>
                        <div className="set-person">
                            <span className={`set-avatar set-avatar--${s.color}`}>{s.initials}</span>
                            <div>
                                <p className="set-person__name">{s.name}</p>
                                <p className="set-person__email">{s.email}</p>
                            </div>
                        </div>
                        <div>
                            <span className={`set-role set-role--${s.role}`}>
                                {t(`settings.staff.roles.${s.role}`)}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )

    const renderCommission = () => (
        <div className="set-card">
            <h3 className="set-card__title">{t('settings.commission.title')}</h3>
            <div className="set-form">
                <div className="set-field">
                    <label>{t('settings.commission.taxi')}</label>
                    <input type="text" placeholder="10.0" />
                </div>
                <div className="set-field">
                    <label>{t('settings.commission.courier')}</label>
                    <input type="text" placeholder="15.0" />
                </div>
            </div>
        </div>
    )

    const renderNotifications = () => (
        <div className="set-card">
            <h3 className="set-card__title">{t('settings.notifications.title')}</h3>
            <div className="set-rules">
                <div className="set-rule">
                    <p className="set-rule__title">{t('settings.notifications.newOrderSms')}</p>
                    <Toggle defaultChecked />
                </div>
                <div className="set-rule">
                    <p className="set-rule__title">{t('settings.notifications.clientPush')}</p>
                    <Toggle defaultChecked />
                </div>
                <div className="set-rule">
                    <p className="set-rule__title">{t('settings.notifications.weeklyEmail')}</p>
                    <Toggle />
                </div>
            </div>
        </div>
    )

    const renderSecurity = () => (
        <div className="set-card">
            <h3 className="set-card__title">{t('settings.security.title')}</h3>
            <div className="set-form">
                <div className="set-field">
                    <label>{t('settings.security.currentPassword')}</label>
                    <input type="password" />
                </div>
                <div className="set-field">
                    <label>{t('settings.security.newPassword')}</label>
                    <input type="password" placeholder={t('settings.security.newPasswordPlaceholder')} />
                </div>
            </div>
            <div className="set-rules">
                <div className="set-rule">
                    <p className="set-rule__title">{t('settings.security.twoFA')}</p>
                    <Toggle defaultChecked />
                </div>
            </div>
        </div>
    )

    const renderIntegrations = () => (
        <div className="set-card">
            <h3 className="set-card__title">{t('settings.tabs.integrations')}</h3>
            <p className="set-card__sub">{t('settings.integrations.empty')}</p>
        </div>
    )

    const renderAppearance = () => (
        <div className="set-card">
            <h3 className="set-card__title">{t('settings.theme.title')}</h3>
            <p className="set-card__sub">{t('settings.theme.subtitle')}</p>
            <div className="set-theme-groups">
            {THEME_GROUPS.map((group) => {
                const list = THEMES.filter((th) => th.group === group)
                if (list.length === 0) return null
                return (
                    <div className="set-theme-group" key={group}>
                       
                        <div className="set-themes">
                            {list.map((th) => (
                                <button
                                    key={th.id}
                                    type="button"
                                    className={`set-theme ${theme === th.id ? 'set-theme--active' : ''}`}
                                    onClick={() => chooseTheme(th.id)}
                                >
                                    <span className="set-theme__swatch">
                                        {th.colors.map((c) => (
                                            <i key={c} style={{ background: c }} />
                                        ))}
                                    </span>
                                    <span className="set-theme__name">{t(`settings.theme.names.${th.id}`)}</span>
                                    {theme === th.id && (
                                        <span className="set-theme__check"><Check size={14} /></span>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                )
            })}
            </div>
        </div>
    )

    const renderFonts = () => (
        <div className="set-card">
            <h3 className="set-card__title">{t('settings.fonts.title')}</h3>
            <p className="set-card__sub">{t('settings.fonts.subtitle')}</p>
            <div className="set-fonts" role="group" aria-label={t('settings.fonts.title')}>
                {FONTS.map((item) => (
                    <button
                        key={item.id}
                        type="button"
                        className={`set-font ${font === item.id ? 'set-font--active' : ''}`}
                        style={{ fontFamily: '"' + item.family + '", ' + item.fallback }}
                        aria-pressed={font === item.id}
                        onClick={() => { setFont(item.id); applyFont(item.id) }}
                    >
                        <span className="set-font__head">
                            <span className="set-font__name">{item.name}</span>
                            {font === item.id && <span className="set-font__check"><Check size={16} /></span>}
                        </span>
                        <span className="set-font__specimen" aria-hidden="true">Aa</span>
                        <span className="set-font__sample">{t('settings.fonts.sample')}</span>
                        <span className="set-font__numbers">0123456789 · 24,000 UZS</span>
                        <span className="set-font__description">{t(`settings.fonts.descriptions.${item.id}`)}</span>
                    </button>
                ))}
            </div>
            <p className="set-fonts__hint" role="status">{t('settings.fonts.saved')}</p>
        </div>
    )

    const renderContent = () => {
        switch (tab) {
            case 'general':
                return renderGeneral()
            case 'tariffs':
                return (
                    <>
                        {renderTariffs()}
                        <div className="set-two">
                            {renderRules()}
                            {renderStaff()}
                        </div>
                    </>
                )
            case 'commission':
                return renderCommission()
            case 'staff':
                return renderStaff()
            case 'notifications':
                return renderNotifications()
            case 'integrations':
                return renderIntegrations()
            case 'security':
                return renderSecurity()
            case 'appearance':
                return renderAppearance()
            case 'fonts':
                return renderFonts()
            default:
                return null
        }
    }

    return (
        <div className="set-page">
            <div className="set-layout">

                {/* CHAP MENYU */}
                <nav className="set-tabs">
                    {TABS.map(({ key, icon: Icon }) => (
                        <button
                            key={key}
                            className={`set-tab ${tab === key ? 'set-tab--active' : ''}`}
                            onClick={() => { cancelTheme(); setTab(key) }}
                        >
                            <Icon size={16} />
                            {t(`settings.tabs.${key}`)}
                        </button>
                    ))}
                </nav>

                {/* O'NG TOMON */}
                <div className="set-content">
                    {renderContent()}

                    {tab === 'appearance' && themeNotice && <p className="set-theme-notice" role={themeNotice === 'saveError' ? 'alert' : 'status'}>{t(`settings.theme.${themeNotice}`)}</p>}
                    {tab !== 'fonts' && <div className="set-footer">
                        <button className="set-btn" onClick={tab === 'appearance' ? cancelTheme : undefined}>{t('settings.footer.cancel')}</button>
                        <button className="set-btn set-btn--save" onClick={tab === 'appearance' ? commitTheme : undefined}>
                            <Check size={16} />
                            {t('settings.footer.save')}
                        </button>
                    </div>}
                </div>

            </div>
        </div>
    )
}

export default Settings
