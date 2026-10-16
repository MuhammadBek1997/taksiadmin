import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import '../styles/Drivers.css'

function Drivers() {
  const { t } = useTranslation()
  const navigate = useNavigate()

  return (
    <div className="drivers">
      {/* ===== Yuqori panel ===== */}
      <div className="drv-toolbar">
        <div className="drv-search">
          <img src="/images/search.png" alt="" />
          <input type="text" placeholder={t('drivers.searchPlaceholder')} />
        </div>

        <div className="drv-toolbar-right">
          <div className="drv-filter">
            <button type="button" className="active">{t('drivers.filters.all')} <em>142</em></button>
            <button type="button">{t('drivers.filters.online')} <em>86</em></button>
            <button type="button">{t('drivers.filters.offline')} <em>56</em></button>
          </div>

          <button type="button" className="drv-sort">
            {t('drivers.sortLabel', { value: t('drivers.sortRating') })}
            <img src="/images/chevron-down.png" alt="" />
          </button>

          <button type="button" className="drv-add" onClick={() => navigate('/drivers/add')}>
            <img src="/images/plus.png" alt="" />
            {t('drivers.addDriver')}
          </button>
        </div>
      </div>

      {/* ===== Jadval ===== */}
      <div className="drv-card">
        <table className="drv-table">
          <thead>
            <tr>
              <th>{t('drivers.columns.name')}</th>
              <th>{t('drivers.columns.phone')}</th>
              <th>{t('drivers.columns.car')}</th>
              <th>{t('drivers.columns.status')}</th>
              <th>{t('drivers.columns.rating')}</th>
              <th>{t('drivers.columns.actions')}</th>
            </tr>
          </thead>
          <tbody>
            <tr className="drv-row" onClick={() => navigate('/drivers/1')}>
              <td>
                <div className="drv-user">
                  <span className="drv-avatar drv-avatar--yellow">AT</span>
                  <div className="drv-user-text">
                    <b>Alisher Temirov</b>
                    <span>#DR-8890</span>
                  </div>
                </div>
              </td>
              <td className="muted">+998 90 123 45 67</td>
              <td>
                <span className="drv-car">Chevrolet Cobalt</span>
                <span className="drv-plate"><b>01</b><i></i><b>A 777 BB</b></span>
              </td>
              <td><span className="drv-badge drv-badge--online"><i></i>{t('drivers.statuses.online')}</span></td>
              <td><span className="drv-rating"><img src="/images/star.png" alt="" />4.9</span></td>
              <td className="drv-actions-cell" onClick={(e) => e.stopPropagation()}>
                <div className="drv-actions">
                  <button type="button" className="drv-icon-btn" title={t('drivers.view')}><img src="/images/eye.png" alt="" /></button>
                  <button type="button" className="drv-icon-btn" title={t('drivers.edit')}><img src="/images/pencil.png" alt="" /></button>
                  <button type="button" className="drv-icon-btn drv-icon-btn--danger" title={t('drivers.delete')}><img src="/images/trash.png" alt="" /></button>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="drv-user">
                  <span className="drv-avatar drv-avatar--blue">SA</span>
                  <div className="drv-user-text">
                    <b>Sardor Ahmedov</b>
                    <span>#DR-8891</span>
                  </div>
                </div>
              </td>
              <td className="muted">+998 93 321 09 87</td>
              <td>
                <span className="drv-car">Chevrolet Lacetti</span>
                <span className="drv-plate"><b>01</b><i></i><b>O 303 OO</b></span>
              </td>
              <td><span className="drv-badge drv-badge--busy"><i></i>{t('drivers.statuses.busy')}</span></td>
              <td><span className="drv-rating"><img src="/images/star.png" alt="" />4.8</span></td>
              <td className="drv-actions-cell">
                <div className="drv-actions">
                  <button type="button" className="drv-icon-btn" title={t('drivers.view')}><img src="/images/eye.png" alt="" /></button>
                  <button type="button" className="drv-icon-btn" title={t('drivers.edit')}><img src="/images/pencil.png" alt="" /></button>
                  <button type="button" className="drv-icon-btn drv-icon-btn--danger" title={t('drivers.delete')}><img src="/images/trash.png" alt="" /></button>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="drv-user">
                  <span className="drv-avatar drv-avatar--green">JQ</span>
                  <div className="drv-user-text">
                    <b>Javohir Qodirov</b>
                    <span>#DR-8892</span>
                  </div>
                </div>
              </td>
              <td className="muted">+998 94 999 88 77</td>
              <td>
                <span className="drv-car">Chevrolet Gentra</span>
                <span className="drv-plate"><b>01</b><i></i><b>X 505 XX</b></span>
              </td>
              <td><span className="drv-badge drv-badge--online"><i></i>{t('drivers.statuses.online')}</span></td>
              <td><span className="drv-rating"><img src="/images/star.png" alt="" />4.7</span></td>
              <td className="drv-actions-cell">
                <div className="drv-actions">
                  <button type="button" className="drv-icon-btn" title={t('drivers.view')}><img src="/images/eye.png" alt="" /></button>
                  <button type="button" className="drv-icon-btn" title={t('drivers.edit')}><img src="/images/pencil.png" alt="" /></button>
                  <button type="button" className="drv-icon-btn drv-icon-btn--danger" title={t('drivers.delete')}><img src="/images/trash.png" alt="" /></button>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="drv-user">
                  <span className="drv-avatar drv-avatar--yellow">RK</span>
                  <div className="drv-user-text">
                    <b>Rustam Karimov</b>
                    <span>#DR-8893</span>
                  </div>
                </div>
              </td>
              <td className="muted">+998 97 111 22 33</td>
              <td>
                <span className="drv-car">Chevrolet Spark</span>
                <span className="drv-plate"><b>01</b><i></i><b>M 101 MM</b></span>
              </td>
              <td><span className="drv-badge drv-badge--offline"><i></i>{t('drivers.statuses.offline')}</span></td>
              <td><span className="drv-rating"><img src="/images/star.png" alt="" />4.5</span></td>
              <td className="drv-actions-cell">
                <div className="drv-actions">
                  <button type="button" className="drv-icon-btn" title={t('drivers.view')}><img src="/images/eye.png" alt="" /></button>
                  <button type="button" className="drv-icon-btn" title={t('drivers.edit')}><img src="/images/pencil.png" alt="" /></button>
                  <button type="button" className="drv-icon-btn drv-icon-btn--danger" title={t('drivers.delete')}><img src="/images/trash.png" alt="" /></button>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="drv-user">
                  <span className="drv-avatar drv-avatar--purple">MA</span>
                  <div className="drv-user-text">
                    <b>Murod Aliyev</b>
                    <span>#DR-8894</span>
                  </div>
                </div>
              </td>
              <td className="muted">+998 99 444 55 66</td>
              <td>
                <span className="drv-car">Chevrolet Nexia 3</span>
                <span className="drv-plate"><b>01</b><i></i><b>B 202 BB</b></span>
              </td>
              <td><span className="drv-badge drv-badge--online"><i></i>{t('drivers.statuses.online')}</span></td>
              <td><span className="drv-rating"><img src="/images/star.png" alt="" />4.6</span></td>
              <td className="drv-actions-cell">
                <div className="drv-actions">
                  <button type="button" className="drv-icon-btn" title={t('drivers.view')}><img src="/images/eye.png" alt="" /></button>
                  <button type="button" className="drv-icon-btn" title={t('drivers.edit')}><img src="/images/pencil.png" alt="" /></button>
                  <button type="button" className="drv-icon-btn drv-icon-btn--danger" title={t('drivers.delete')}><img src="/images/trash.png" alt="" /></button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ===== Pastki panel ===== */}
      <div className="drv-footer">
        <span className="drv-info">{t('drivers.showing', { from: 1, to: 5, total: 142 })}</span>

        <div className="drv-pagination">
          <button type="button" className="drv-page-nav"><img src="/images/arrow-left.png" alt="" />{t('drivers.prev')}</button>
          <button type="button" className="active">1</button>
          <button type="button">2</button>
          <button type="button">3</button>
          <button type="button" className="drv-page-nav">{t('drivers.next')}<img src="/images/arrow-right.png" alt="" /></button>
        </div>
      </div>
    </div>
  )
}

export default Drivers