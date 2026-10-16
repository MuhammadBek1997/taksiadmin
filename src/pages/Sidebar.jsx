import React from 'react'
import '../styles/Sidebar.css'
import {
    MoveHorizontal,
    LayoutDashboard,
    MapPin,
    Car,
    Package,
    Store,
    ShoppingCart,
    Users,
    TrendingUp,
    MessageCircle,
    SlidersHorizontal,
} from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const ITEMS = [
    { to: '/', end: true, icon: LayoutDashboard, key: 'dashboard' },
    { to: '/map', icon: MapPin, key: 'map' },
    { to: '/drivers', icon: Car, key: 'drivers' },
    { to: '/couriers', icon: Package, key: 'couriers' },
    { to: '/store', icon: Store, key: 'store', badge: true },
    { to: '/orders', icon: ShoppingCart, key: 'orders' },
    { to: '/clients', icon: Users, key: 'clients' },
    { to: '/reports', icon: TrendingUp, key: 'reports' },
    { to: '/support', icon: MessageCircle, key: 'support' },
    { to: '/settings', icon: SlidersHorizontal, key: 'settings' },
]

export default function Sidebar({ collapsed, setCollapsed }) {
    const { t } = useTranslation()

    const companyName = t('sidebar.companyName')

    return (
        <div className={`sidebar ${collapsed ? 'sidebar--collapsed' : ''}`}>

            <button className="toggle-icon" onClick={() => setCollapsed(!collapsed)}>
                <MoveHorizontal size={18} />
            </button>

       {/* logo  */}
            <div className="sb-brand">
                <div className="sb-brand__logo">{companyName.charAt(0)}</div>
                {!collapsed && (
                    <div className="sb-brand__text">
                        <h3>{companyName}</h3>
                        <p>{t('sidebar.panel')}</p>
                    </div>
                )}
            </div>

           {/* menu  */}
            <nav className="sb-nav">
                {ITEMS.map(({ to, end, icon: Icon, key, badge }) => (
                    <NavLink
                        key={key}
                        to={to}
                        end={end}
                        title={collapsed ? t(`sidebar.${key}`) : undefined}
                        className={({ isActive }) => `sb-link ${isActive ? 'sb-link--active' : ''}`}
                    >
                        <Icon size={18} />
                        {!collapsed && <span className="sb-link__label">{t(`sidebar.${key}`)}</span>}
                    </NavLink>
                ))}
            </nav>

            {/* pastgi matn */}
            {!collapsed && (
                <div className="sb-footer">
                    <p>{t('sidebar.version')}</p>
                    <p>{t('sidebar.location')}</p>
                </div>
            )}
        </div>
    )
}