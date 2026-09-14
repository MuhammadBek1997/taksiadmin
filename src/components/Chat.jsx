import React from 'react';
import '../styles/Chat.css';

function Chat() {
  return (
    <div className="chat-container">
      {/* Header */}
      <div className="chat-header">
        <div className="chat-user-info">
          <div className="chat-avatar-circle" />
          <div className="chat-user-details">
            <h3 className="chat-user-name">Diyorbek Toshpulatov</h3>
            <span className="chat-user-status">
              <span className="status-dot" /> Online
            </span>
          </div>
        </div>
        <button className="close-ticket-btn">Tiketni yopish</button>
      </div>

      {/* Messages */}
      <div className="chat-messages">
        <div className="chat-bubble-wrapper user">
          <div className="chat-bubble">
            <p className="chat-text">
              Assalomu alaykum, mening buyurtmam kechikmoqda. Kuryer hozir qayerda?
            </p>
            <span className="chat-time">10:40</span>
          </div>
        </div>

        <div className="chat-bubble-wrapper admin">
          <div className="chat-bubble">
            <p className="chat-text">
              Vaalaykum assalom! Hozir kuryer bilan bog'lanib aniqlashtirib beraman.
            </p>
            <span className="chat-time">10:41</span>
          </div>
        </div>

        <div className="chat-bubble-wrapper user">
          <div className="chat-bubble">
            <p className="chat-text">Rahmat, kutaman.</p>
            <span className="chat-time">10:42</span>
          </div>
        </div>
      </div>

      {/* Input section */}
      <div className="chat-input-wrapper">
        <input
          type="text"
          placeholder="Xabar yozing..."
          className="chat-input"
          readOnly
        />
        <button className="send-btn">Yuborish</button>
      </div>
    </div>
  );
}

export default Chat;