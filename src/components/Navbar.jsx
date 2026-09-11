import React from 'react'
import '../styles/Navbar.css'

const Navbar = () => {
    return (
        <div className="navbar">
            <h2 className="navbar__title">Tizim Sozlamalari</h2>

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