import React from 'react';
import '../styles/Support.css';

function Support() {
  return (
    <div className="support-panel">
      {/* Qidiruv bo'limi */}
      <div className="support-search-wrapper">
        <div className="support-search-input-box">
          <svg
            className="support-search-icon"
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
            placeholder="Mijoz yoki ID bo'yicha qidirish..."
            className="support-search-input"
            readOnly
          />
        </div>
      </div>

      {/* Chatlar ro'yxati */}
      <div className="support-chats-container">
        {/* Active item */}
        <div className="support-item active">
          <div className="support-avatar-circle" />
          <div className="support-content">
            <div className="support-header">
              <span className="support-user-name">Diyorbek Toshpulatov</span>
              <span className="support-time">10:42</span>
            </div>
            <p className="support-message">Mening buyurtmam kechikmoqda, kuryer qaye...</p>
          </div>
        </div>

        {/* Regular item */}
        <div className="support-item">
          <div className="support-avatar-circle" />
          <div className="support-content">
            <div className="support-header">
              <span className="support-user-name">Sardor Ahmedov (Haydovchi)</span>
              <span className="support-time">10:35</span>
            </div>
            <p className="support-message">Ilovada manzil noto'g'ri ko'rsatilyapti</p>
          </div>
        </div>

        <div className="support-item">
          <div className="support-avatar-circle" />
          <div className="support-content">
            <div className="support-header">
              <span className="support-user-name">Kamola Umarova</span>
              <span className="support-time">Kecha</span>
            </div>
            <p className="support-message">Rahmat, muammo tezda hal qilindi!</p>
          </div>
        </div>

        {/* Unread item */}
        <div className="support-item">
          <div className="support-avatar-circle" />
          <div className="support-content">
            <div className="support-header">
              <span className="support-user-name">Rustam Karimov (Haydovchi)</span>
              <span className="support-time">Kecha</span>
            </div>
            <p className="support-message">Balansimdan pul yechib olinganiga tushunma...</p>
          </div>
          <div className="support-unread-badge" />
        </div>
      </div>
    </div>
  );
}

export default Support;