import React from 'react'
import '../styles/Sidebar.css'
import { MoveHorizontal } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Sidebar({ collapsed, setCollapsed }) {
    const { t } = useTranslation()

    return (
        <div className={`sidebar ${collapsed ? "sidebar--collapsed" : ""}`}>

            <button className="toggle-icon" onClick={() => setCollapsed(!collapsed)}>
                <MoveHorizontal size={20} className={collapsed ? "icon-rotated" : ""} />
            </button>
            <div className="karvon-part">
                <div className="black">
                    <img src="/K.png" alt="" />
                </div>
                <div className='h33'>
                    {!collapsed && <h3>{t('sidebar.companyName')}</h3>}
                </div>
            </div>
            <div className="facilities">
                <NavLink
                    to="/" end
                    className={({ isActive }) => `fac ${isActive ? "fac--active" : ""}`}
                >
                    <img src="/dashboard.png" alt="" />
                    {!collapsed && <p>{t('sidebar.dashboard')}</p>}
                </NavLink>
                <NavLink
                    to="/map"
                    className={({ isActive }) => `fac ${isActive ? "fac--active" : ""}`}
                >
                    <img src="/map.png" alt="" />
                    {!collapsed && <p>{t('sidebar.map')}</p>}
                </NavLink>
                <NavLink
                    to="/drivers"
                    className={({ isActive }) => `fac ${isActive ? "fac--active" : ""}`}
                >
                    <img src="/drivers.png" alt="" />
                    {!collapsed && <p>{t('sidebar.drivers')}</p>}
                </NavLink>
                <NavLink
                    to="/couriers"
                    className={({ isActive }) => `fac ${isActive ? "fac--active" : ""}`}
                >
                    <img src="/couriers.png" alt="" />
                    {!collapsed && <p>{t('sidebar.couriers')}</p>}
                </NavLink>
                <NavLink
                    to="/orders"
                    className={({ isActive }) => `fac ${isActive ? "fac--active" : ""}`}
                >
                    <img src="/orders.png" alt="" />
                    {!collapsed && <p>{t('sidebar.orders')}</p>}
                </NavLink>
                <NavLink
                    to="/clients"
                    className={({ isActive }) => `fac ${isActive ? "fac--active" : ""}`}
                >
                    <img src="/clients.png" alt="" />
                    {!collapsed && <p>{t('sidebar.clients')}</p>}
                </NavLink>
                <NavLink
                    to="/reports"
                    className={({ isActive }) => `fac ${isActive ? "fac--active" : ""}`}
                >
                    <img src="/reports.png" alt="" />
                    {!collapsed && <p>{t('sidebar.reports')}</p>}
                </NavLink>
                <NavLink
                    to="/support"
                    className={({ isActive }) => `fac ${isActive ? "fac--active" : ""}`}
                >
                    <img src="/support.png" alt="" />
                    {!collapsed && <p>{t('sidebar.support')}</p>}
                </NavLink>
                <NavLink
                    to="/settings"
                    className={({ isActive }) => `fac ${isActive ? "fac--active" : ""}`}
                >
                    <img src="/settings.png" alt="" />
                    {!collapsed && <p>{t('sidebar.settings')}</p>}
                </NavLink>
            </div>
            {!collapsed && (
                <div className="div-end">
                    <p>{t('sidebar.version')}</p>
                    <p>{t('sidebar.location')}</p>
                </div>
            )}
        </div>
    );
}