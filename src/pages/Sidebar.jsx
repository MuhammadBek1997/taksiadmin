import React, { useState } from 'react'
import '../styles/Sidebar.css'
import { ArrowLeft } from 'lucide-react'

export default function Sidebar({ collapsed, setCollapsed }) {


    return (
        <div className={`sidebar ${collapsed ? "sidebar--collapsed" : ""}`}>



            <button className="toggle-icon" onClick={() => setCollapsed(!collapsed)}>
                <ArrowLeft size={20} className={collapsed ? "icon-rotated" : ""} />
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
                <div className="fac">
                    <img src="/dashboard.png" alt="" />
                    {!collapsed && <p>Dashboard</p>}
                </div>
                <div className="fac">
                    <img src="/map.png" alt="" />
                    {!collapsed && <p>Map</p>}
                </div>
                <div className="fac">
                    <img src="/drivers.png" alt="" />
                    {!collapsed && <p>Drivers</p>}
                </div>
                <div className="fac">
                    <img src="/couriers.png" alt="" />
                    {!collapsed && <p>Couriers</p>}
                </div>
                <div className="fac">
                    <img src="/orders.png" alt="" />
                    {!collapsed && <p>Orders</p>}
                </div>
                <div className="fac">
                    <img src="/clients.png" alt="" />
                    {!collapsed && <p>Clients</p>}
                </div>
                <div className="fac">
                    <img src="/reports.png" alt="" />
                    {!collapsed && <p>Reports</p>}
                </div>
                <div className="fac">
                    <img src="/support.png" alt="" />
                    {!collapsed && <p>Support</p>}
                </div>
                <div className="fac">
                    <img src="/settings.png" alt="" />
                    {!collapsed && <p>Settings</p>}
                </div>
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
