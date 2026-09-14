import React, { useState } from 'react';
import '../styles/Sidebar.css';

function Sidebar() {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <aside className={`sidebar-container ${isCollapsed ? 'collapsed' : ''}`}>
            <div>
                {/* Header: Logo va Toggle */}
                <div className="sidebar-header">
                    <div className="logo-box">
                        <div className="logo-icon">K</div>
                        {!isCollapsed && <span className="logo-text">Karavan</span>}
                    </div>

                    <button className="toggle-btn" onClick={toggleSidebar} title="Sidebar toggle">
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            style={{
                                transform: isCollapsed ? 'rotate(180deg)' : 'rotate(0deg)',
                                transition: 'transform 0.3s ease',
                            }}
                        >
                            <polyline points="15 18 9 12 15 6" />
                        </svg>
                    </button>
                </div>

                {/* Menu Items */}
                <nav className="sidebar-menu">
                    {/* Dashboard */}
                    <div className="menu-item">
                        <svg className="menu-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 20V10" />
                            <path d="M12 20V4" />
                            <path d="M6 20v-6" />
                            <rect x="3" y="18" width="18" height="2" rx="1" />
                        </svg>
                        {!isCollapsed && <span className="menu-text">Dashboard</span>}
                    </div>

                    {/* Map */}
                    <div className="menu-item">
                        <svg className="menu-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z" />
                            <circle cx="12" cy="10" r="3" />
                        </svg>
                        {!isCollapsed && <span className="menu-text">Map</span>}
                    </div>

                    {/* Drivers */}
                    <div className="menu-item">
                        <svg className="menu-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                            <circle cx="12" cy="7" r="4" />
                        </svg>
                        {!isCollapsed && <span className="menu-text">Drivers</span>}
                    </div>

                    {/* Couriers */}
                    <div className="menu-item">
                        <svg className="menu-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                            <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                            <line x1="12" y1="22.08" x2="12" y2="12" />
                        </svg>
                        {!isCollapsed && <span className="menu-text">Couriers</span>}
                    </div>

                    {/* Orders */}
                    <div className="menu-item">
                        <svg className="menu-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="9" cy="21" r="1" />
                            <circle cx="20" cy="21" r="1" />
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                        </svg>
                        {!isCollapsed && <span className="menu-text">Orders</span>}
                    </div>

                    {/* Clients */}
                    <div className="menu-item">
                        <svg className="menu-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M17 21v-2a4 4 0 0 0-3-3.87" />
                            <path d="M9 21v-2a4 4 0 0 1 3-3.87" />
                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                            <circle cx="9" cy="7" r="4" />
                        </svg>
                        {!isCollapsed && <span className="menu-text">Clients</span>}
                    </div>

                    {/* Reports */}
                    <div className="menu-item">
                        <svg className="menu-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                            <polyline points="17 6 23 6 23 12" />
                        </svg>
                        {!isCollapsed && <span className="menu-text">Reports</span>}
                    </div>

                    {/* Support (Active) */}
                    <div className="menu-item active">
                        <svg className="menu-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                            <circle cx="12" cy="9" r="0.5" fill="currentColor" />
                            <path d="M12 11v2" />
                        </svg>
                        {!isCollapsed && <span className="menu-text">Support</span>}
                        <div className="active-indicator" />
                    </div>

                    {/* Settings */}
                    <div className="menu-item">
                        <svg className="menu-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="3" />
                            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                        </svg>
                        {!isCollapsed && <span className="menu-text">Settings</span>}
                    </div>
                </nav>
            </div>

            {/* Footer */}
            {!isCollapsed && (
                <div className="sidebar-footer">
                    <p className="version">v2.4.0 (Monochrome)</p>
                    <p className="location">Toshkent, UZ</p>
                </div>
            )}
        </aside>
    );
}

export default Sidebar;