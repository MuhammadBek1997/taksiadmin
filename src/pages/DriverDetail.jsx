import React from 'react'
import { useTranslation } from 'react-i18next'
import '../styles/DriverDetail.css'

function DriverDetail() {
  const { t } = useTranslation()

  return (
    <div className="driver-detail">
      {/* ===== Chap tomon: profil kartasi ===== */}
      <aside className="dd-card dd-profile">
        <div className="dd-banner"></div>

        <div className="dd-profile-body">
          <span className="dd-avatar">AT</span>
          <h2 className="dd-name">Alisher Temirov</h2>
          <p className="dd-id">{t('driverDetail.id', { id: '#DR-8890' })}</p>
          <span className="dd-badge dd-badge--online"><i></i>{t('drivers.statuses.online')}</span>

          <div className="dd-info">
            <div className="dd-info-row">
              <span className="dd-info-icon"><img src="/images/phone.png" alt="" /></span>
              <div className="dd-info-text">
                <span className="dd-info-label">{t('driverDetail.phone')}</span>
                <span className="dd-info-value">+998 90 123 45 67</span>
              </div>
            </div>
            <div className="dd-info-row">
              <span className="dd-info-icon"><img src="/images/mail.png" alt="" /></span>
              <div className="dd-info-text">
                <span className="dd-info-label">{t('driverDetail.email')}</span>
                <span className="dd-info-value">alisher.t@ddd.uz</span>
              </div>
            </div>
            <div className="dd-info-row">
              <span className="dd-info-icon"><img src="/images/car-dark.png" alt="" /></span>
              <div className="dd-info-text">
                <span className="dd-info-label">{t('driverDetail.car')}</span>
                <span className="dd-info-value">Chevrolet Cobalt (01 | A 777 BB)</span>
              </div>
            </div>
          </div>

          <div className="dd-buttons">
            <button type="button" className="dd-btn dd-btn--dark">
              <img src="/images/pencil-white.png" alt="" />
              {t('driverDetail.edit')}
            </button>
            <button type="button" className="dd-btn dd-btn--danger">{t('driverDetail.block')}</button>
          </div>
        </div>
      </aside>

      {/* ===== O'ng tomon ===== */}
      <div className="dd-main">
        {/* Statistika */}
        <div className="dd-stats">
          <div className="dd-card dd-stat">
            <span className="dd-stat-label">{t('driverDetail.stats.totalOrders')}</span>
            <span className="dd-stat-value">{t('dashboard.unitCount', { value: '1,240' })}</span>
          </div>
          <div className="dd-card dd-stat dd-stat--yellow">
            <span className="dd-stat-label">{t('driverDetail.stats.totalIncome')}</span>
            <span className="dd-stat-value">{t('dashboard.unitMln', { value: '38.2' })}</span>
          </div>
          <div className="dd-card dd-stat">
            <span className="dd-stat-label">{t('driverDetail.stats.avgRating')}</span>
            <span className="dd-stat-value">4.92 / 5</span>
          </div>
        </div>

        {/* Hujjatlar */}
        <div className="dd-card dd-section">
          <h3 className="dd-title">{t('driverDetail.documents.title')}</h3>
          <div className="dd-docs">
            <div className="dd-doc">
              <span className="dd-doc-icon"><img src="/images/file-green.png" alt="" /></span>
              <div className="dd-doc-text">
                <b>{t('driverDetail.documents.license')}</b>
                <span>{t('driverDetail.documents.uploaded', { date: '12.01.2025' })}</span>
              </div>
              <button type="button" className="dd-doc-btn" title={t('driverDetail.documents.download')}>
                <img src="/images/download.png" alt="" />
              </button>
            </div>
            <div className="dd-doc">
              <span className="dd-doc-icon"><img src="/images/file-green.png" alt="" /></span>
              <div className="dd-doc-text">
                <b>{t('driverDetail.documents.passport')}</b>
                <span>{t('driverDetail.documents.uploaded', { date: '12.01.2025' })}</span>
              </div>
              <button type="button" className="dd-doc-btn" title={t('driverDetail.documents.download')}>
                <img src="/images/download.png" alt="" />
              </button>
            </div>
          </div>
        </div>

        {/* Oxirgi safarlar */}
        <div className="dd-card dd-section dd-section--table">
          <h3 className="dd-title">{t('driverDetail.trips.title')}</h3>
          <table className="dd-table">
            <thead>
              <tr>
                <th>{t('driverDetail.trips.date')}</th>
                <th>{t('driverDetail.trips.from')}</th>
                <th>{t('driverDetail.trips.to')}</th>
                <th>{t('driverDetail.trips.price')}</th>
                <th>{t('driverDetail.trips.status')}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="strong">{t('driverDetail.trips.today')}, 09:12</td>
                <td className="muted">Bodomzor</td>
                <td className="muted">Oloy Bozori</td>
                <td className="muted">24,000 UZS</td>
                <td><span className="dd-badge dd-badge--online"><i></i>{t('dashboard.statuses.completed')}</span></td>
              </tr>
              <tr>
                <td className="strong">{t('driverDetail.trips.today')}, 08:30</td>
                <td className="muted">G'ofur G'ulom</td>
                <td className="muted">Chilonzor metro</td>
                <td className="muted">32,000 UZS</td>
                <td><span className="dd-badge dd-badge--online"><i></i>{t('dashboard.statuses.completed')}</span></td>
              </tr>
              <tr>
                <td className="strong">{t('driverDetail.trips.yesterday')}, 18:45</td>
                <td className="muted">Yunusobod 12</td>
                <td className="muted">Minor</td>
                <td className="muted">18,000 UZS</td>
                <td><span className="dd-badge dd-badge--online"><i></i>{t('dashboard.statuses.completed')}</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default DriverDetail