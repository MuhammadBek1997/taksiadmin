import React from 'react'
import { useTranslation } from 'react-i18next'
import '../styles/AddDriver.css'

function AddDriver() {
  const { t } = useTranslation()

  return (
    <div className="add-driver">
      {/* ===== Sarlavha ===== */}
      <div className="ad-head">
        <h2 className="ad-title">
          {t('addDriver.title')}
          <span className="ad-count">12</span>
        </h2>

        <button type="button" className="ad-filter">
          {t('addDriver.filterAll', { value: 12 })}
          <img src="/images/chevron-down.png" alt="" />
        </button>
      </div>

      <div className="ad-grid">
        {/* ===== Chap: arizalar jadvali ===== */}
        <div className="ad-card">
          <table className="ad-table">
            <thead>
              <tr>
                <th>{t('addDriver.columns.name')}</th>
                <th>{t('addDriver.columns.phone')}</th>
                <th>{t('addDriver.columns.documents')}</th>
                <th>{t('addDriver.columns.actions')}</th>
              </tr>
            </thead>
            <tbody>
            <tr className="selected">
              <td>
                <div className="ad-user">
                  <span className="ad-avatar ad-avatar--yellow">SO</span>
                  <div className="ad-user-text">
                    <b>Sirojiddin Olimov</b>
                    <span>{t('addDriver.today')}, 09:30</span>
                  </div>
                </div>
              </td>
              <td>+998 90 991 22 33</td>
              <td><span className="ad-docs ad-docs--blue"><i></i>{t('addDriver.docs', { value: 3 })}</span></td>
              <td>
                <div className="ad-actions">
                  <button type="button" className="ad-btn ad-btn--reject">{t('addDriver.reject')}</button>
                  <button type="button" className="ad-btn ad-btn--approve">
                    <img src="/images/check-dark.png" alt="" />
                    {t('addDriver.approve')}
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="ad-user">
                  <span className="ad-avatar ad-avatar--blue">BR</span>
                  <div className="ad-user-text">
                    <b>Bekzod Rahmonov</b>
                    <span>{t('addDriver.today')}, 08:15</span>
                  </div>
                </div>
              </td>
              <td>+998 93 145 09 88</td>
              <td><span className="ad-docs ad-docs--amber"><i></i>{t('addDriver.docs', { value: 2 })}</span></td>
              <td>
                <div className="ad-actions">
                  <button type="button" className="ad-btn ad-btn--reject">{t('addDriver.reject')}</button>
                  <button type="button" className="ad-btn ad-btn--approve">
                    <img src="/images/check-dark.png" alt="" />
                    {t('addDriver.approve')}
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="ad-user">
                  <span className="ad-avatar ad-avatar--green">OY</span>
                  <div className="ad-user-text">
                    <b>Otabek Yusupov</b>
                    <span>{t('addDriver.yesterday')}, 18:40</span>
                  </div>
                </div>
              </td>
              <td>+998 94 300 11 22</td>
              <td><span className="ad-docs ad-docs--amber"><i></i>{t('addDriver.docs', { value: 1 })}</span></td>
              <td>
                <div className="ad-actions">
                  <button type="button" className="ad-btn ad-btn--reject">{t('addDriver.reject')}</button>
                  <button type="button" className="ad-btn ad-btn--approve">
                    <img src="/images/check-dark.png" alt="" />
                    {t('addDriver.approve')}
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="ad-user">
                  <span className="ad-avatar ad-avatar--yellow">AT</span>
                  <div className="ad-user-text">
                    <b>Asilbek Turdiev</b>
                    <span>{t('addDriver.yesterday')}, 15:10</span>
                  </div>
                </div>
              </td>
              <td>+998 99 876 54 32</td>
              <td><span className="ad-docs ad-docs--blue"><i></i>{t('addDriver.docs', { value: 3 })}</span></td>
              <td>
                <div className="ad-actions">
                  <button type="button" className="ad-btn ad-btn--reject">{t('addDriver.reject')}</button>
                  <button type="button" className="ad-btn ad-btn--approve">
                    <img src="/images/check-dark.png" alt="" />
                    {t('addDriver.approve')}
                  </button>
                </div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>

        {/* ===== O'ng: hujjatlar tahlili ===== */}
        <aside className="ad-card ad-panel">
          <h3 className="ad-panel-title">{t('addDriver.panel.title')}</h3>
          <p className="ad-panel-sub">Sirojiddin Olimov</p>

          <div className="ad-doc">
            <span className="ad-doc-label">{t('addDriver.panel.license')}</span>
            <div className="ad-preview">
              <img src="/images/image.png" alt="" />
              <span>{t('addDriver.panel.clickToView')}</span>
            </div>
            <div className="ad-note">
              <img src="/images/file-green.png" alt="" />
              {t('addDriver.panel.licenseNote')}
            </div>
          </div>

          <div className="ad-doc">
            <span className="ad-doc-label">{t('addDriver.panel.passport')}</span>
            <div className="ad-preview">
              <img src="/images/image.png" alt="" />
              <span>{t('addDriver.panel.clickToView')}</span>
            </div>
            <div className="ad-note">
              <img src="/images/file-green.png" alt="" />
              {t('addDriver.panel.passportNote')}
            </div>
          </div>

          <div className="ad-panel-buttons">
            <button type="button" className="ad-btn-lg ad-btn-lg--reject">
              <img src="/images/x-red.png" alt="" />
              {t('addDriver.reject')}
            </button>
            <button type="button" className="ad-btn-lg ad-btn-lg--approve">
              <img src="/images/check-dark.png" alt="" />
              {t('addDriver.approve')}
            </button>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default AddDriver