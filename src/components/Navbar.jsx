import React from 'react'
import '../styles/Navbar.css'
import { useLocation } from 'react-router-dom'

const titles = {
    "/": "Dashboard",
    "/map": "Xarita",
    "/drivers": "Haydovchilar",
    "/couriers": "Kuryerlar",
    "/orders": "Buyurtmalar",
    "/clients": "Mijozlar",
    "/reports": "Hisobotlar",
    "/support": "Yordam",
    "/settings": "Tizim Sozlamalari",
}


const Navbar = () => {

    const location = useLocation()
    const currentTitle = titles[location.pathname] || "Sahifa"
    return (
        <div className="navbar">
            <h2 className="navbar__title">{currentTitle}</h2>

            <div className="navbar__right">
                <div className="navbar__search">
                    <img src="/search.png" alt="" />
                    <input type="text" placeholder="Qidiruv..." />
                </div>

                <button className="navbar__icon-btn">
                    <img src="/alarm-clock.png" alt="" />
                </button>

                <div className="navbar__profile">
                    <img src="/Avatar.png" alt="" className="navbar__avatar" />
                    <div className="navbar__profile-text">
                        <p className="navbar__name">Shoxrux R.</p>
                        <p className="navbar__role">Administrator</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar