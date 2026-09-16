import React, { useState } from 'react'
import '../styles/Sidebar.css'
import { MoveHorizontal } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { Settings } from 'lucide-react';


export default function Sidebar({ collapsed, setCollapsed }) {
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
                    {!collapsed && <h3>Karavan</h3>}
                </div>
            </div>


            <div className="facilities">
                <NavLink
                    to="/"  end
                    className={({ isActive }) => `fac ${isActive ? "fac--active" : ""}`}
                >
                    <img src="/dashboard.png" alt="" />
                    {!collapsed && <p>Dashboard</p>}
                </NavLink>
                <NavLink
                    to="/map"
                    className={({ isActive }) => `fac ${isActive ? "fac--active" : ""}`}
                >
                    <img src="/map.png" alt="" />
                    {!collapsed && <p>Map</p>}
                </NavLink>
                <NavLink
                    to="/drivers"
                    className={({ isActive }) => `fac ${isActive ? "fac--active" : ""}`}
                >
                    <img src="/drivers.png" alt="" />
                    {!collapsed && <p>Drivers</p>}
                </NavLink>
                <NavLink
                    to="/couriers"
                    className={({ isActive }) => `fac ${isActive ? "fac--active" : ""}`}
                >
                    <img src="/couriers.png" alt="" />
                    {!collapsed && <p>Couriers</p>}
                </NavLink>
                <NavLink
                    to="/orders"
                    className={({ isActive }) => `fac ${isActive ? "fac--active" : ""}`}
                >
                    <img src="/orders.png" alt="" />
                    {!collapsed && <p>Orders</p>}
                </NavLink>
                <NavLink
                    to="/clients"
                    className={({ isActive }) => `fac ${isActive ? "fac--active" : ""}`}
                >
                    <img src="/clients.png" alt="" />
                    {!collapsed && <p>Clients</p>}
                </NavLink>
                <NavLink
                    to="/reports"
                    className={({ isActive }) => `fac ${isActive ? "fac--active" : ""}`}
                >
                    <img src="/reports.png" alt="" />
                    {!collapsed && <p>Reports</p>}
                </NavLink>
                <NavLink
                    to="/support"
                    className={({ isActive }) => `fac ${isActive ? "fac--active" : ""}`}
                >
                    <img src="/support.png" alt="" />
                    {!collapsed && <p>Support</p>}
                </NavLink>
                <NavLink
                    to="/settings"
                    className={({ isActive }) => `fac ${isActive ? "fac--active" : ""}`}
                >
                    <img src="/settings.png" alt="" />
                    {!collapsed && <p>Settings</p>}
                </NavLink>
            </div>
            {!collapsed && (
                <div className="div-end">
                    <p>v2.4.0 (Monochrome)</p>
                    <p>Toshkent, UZ</p>
                </div>
            )}
        </div>
    );
}