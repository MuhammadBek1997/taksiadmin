import React from 'react';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <header className="navbar-section">
      <div className="navbar-container">
        {/* Chap tomondagi sarlavha */}
        <div className="navbar-title-wrapper">
          <h1 className="navbar-title">Qo'llab-quvvatlash suhbatlari</h1>
        </div>

        {/* O'ng tomondagi elementlar (Search, Notification, User) */}
        <div className="navbar-actions">
          {/* Qidiruv qutisi */}
          <div className="navbar-search-box">
            <svg
              className="search-icon"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              placeholder="Qidiruv..."
              className="navbar-search-input"
            />
          </div>

          {/* Bildirishnoma (Notification/Alarm) tugmasi */}
          <button className="navbar-notification-btn" aria-label="Notifications">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="13" r="8" />
              <path d="M12 9v4l2 2" />
              <path d="M5 3L2 6" />
              <path d="M22 6l-3-3" />
              <path d="M6.38 18.7L4 21" />
              <path d="M17.64 18.67L20 21" />
            </svg>
          </button>

          {/* Foydalanuvchi profili */}
          <div className="navbar-user-profile">
            <img
              src="/images/Avatar.png"
              alt="Shoxrux R."
              className="user-avatar"
            />
            <div className="user-details">
              <span className="user-name">Shoxrux R.</span>
              <span className="user-role">Administrator</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;