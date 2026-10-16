import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import '../styles/Sidebar.css'

// key -> sidebar.* ichidagi tarjima kaliti, img -> public/images/ ichidagi ikonka
const menu = [
  { to: '/dashboard', key: 'dashboard', img: '/images/layout.png' },
  { to: '/map', key: 'map', img: '/images/pin.png' },
  { to: '/drivers', key: 'drivers', img: '/images/car.png' },
  { to: '/couriers', key: 'couriers', img: '/images/package.png' },
  { to: '/stores', key: 'stores', img: '/images/store.png', badge: true },
  { to: '/orders', key: 'orders', img: '/images/cart.png' },
  { to: '/clients', key: 'clients', img: '/images/users.png' },
  { to: '/reports', key: 'reports', img: '/images/chart.png' },
  { to: '/support', key: 'support', img: '/images/msg.png' },
  { to: '/settings', key: 'settings', img: '/images/sliders.png' },
]

function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const { t } = useTranslation()
  const { pathname } = useLocation()

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed)
  }

  const companyName = t('sidebar.companyName')

  return (
    <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      {/* Logo + Toggle */}
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <div className="logo-icon">{companyName.charAt(0)}</div>
          {!isCollapsed && (
            <div className="logo-text">
              <span className="logo-name">{companyName}</span>
              <span className="logo-sub">{t('sidebar.adminPanel')}</span>
            </div>
          )}
        </div>

        <button
          className="toggle-btn"
          onClick={toggleSidebar}
          title={isCollapsed ? t('sidebar.open') : t('sidebar.close')}
        >
          <img className="toggle-icon" src="/images/chevron.png" alt="" />
        </button>
      </div>

      {/* Menu */}
      <nav className="sidebar-nav">
        <ul className="sidebar-menu">
          {menu.map((item) => (
            <li key={item.to}>
              {/* Bosh sahifa ('/') ham Dashboard hisoblanadi */}
              <NavLink
                to={item.to}
                className={({ isActive }) => {
                  const active = isActive || (item.to === '/dashboard' && pathname === '/')
                  return `menu-item ${active ? 'active' : ''}`
                }}
                title={t(`sidebar.${item.key}`)}
              >
                <img className="menu-icon" src={item.img} alt="" />
                {!isCollapsed && <span className="menu-label">{t(`sidebar.${item.key}`)}</span>}
                {!isCollapsed && item.badge && <span className="menu-badge">{t('sidebar.new')}</span>}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Pastki qism */}
      {!isCollapsed && (
        <div className="sidebar-footer">
          <p className="version">{t('sidebar.version')}</p>
          <p className="location">{t('sidebar.location')}</p>
        </div>
      )}
    </aside>
  )
}

export default Sidebar