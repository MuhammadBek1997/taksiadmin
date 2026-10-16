import React from 'react'
import { useTranslation } from 'react-i18next'
import '../styles/Dashboard.css'

function Dashboard() {
  const { t } = useTranslation()

  return (
    <div className="dashboard">
      {/* ===== Statistika kartalari ===== */}
      <div className="dash-stats">
        <div className="dash-card dash-stat">
          <div className="dash-stat-top">
            <span className="dash-stat-label">{t('dashboard.stats.activeDrivers')}</span>
            <span className="dash-trend"><img src="/images/trend-up.png" alt="" />+12.4%</span>
          </div>
          <span className="dash-stat-value">{t('dashboard.unitCount', { value: '342' })}</span>
          <span className="dash-stat-sub">{t('dashboard.vsYesterday')}</span>
        </div>

        <div className="dash-card dash-stat">
          <div className="dash-stat-top">
            <span className="dash-stat-label">{t('dashboard.stats.activeCouriers')}</span>
            <span className="dash-trend"><img src="/images/trend-up.png" alt="" />+8.2%</span>
          </div>
          <span className="dash-stat-value">{t('dashboard.unitCount', { value: '118' })}</span>
          <span className="dash-stat-sub">{t('dashboard.vsYesterday')}</span>
        </div>

        <div className="dash-card dash-stat">
          <div className="dash-stat-top">
            <span className="dash-stat-label">{t('dashboard.stats.totalOrders')}</span>
            <span className="dash-trend"><img src="/images/trend-up.png" alt="" />+15.1%</span>
          </div>
          <span className="dash-stat-value">{t('dashboard.unitCount', { value: '2,840' })}</span>
          <span className="dash-stat-sub">{t('dashboard.vsLastWeek')}</span>
        </div>

        <div className="dash-card dash-stat dash-stat--dark">
          <div className="dash-stat-top">
            <span className="dash-stat-label">{t('dashboard.stats.dailyRevenue')}</span>
            <span className="dash-trend dash-trend--yellow"><img src="/images/trend-up-dark.png" alt="" />+20.5%</span>
          </div>
          <span className="dash-stat-value">{t('dashboard.unitMln', { value: '32.4' })}</span>
          <span className="dash-stat-sub">{t('dashboard.vsTarget')}</span>
        </div>
      </div>

      {/* ===== Tushum dinamikasi ===== */}
      <div className="dash-card dash-chart-card">
        <div className="dash-chart-head">
          <div>
            <h3 className="dash-title">{t('dashboard.chart.title')}</h3>
            <p className="dash-subtitle">{t('dashboard.chart.subtitle')}</p>
          </div>

          <div className="dash-chart-tools">
            <div className="dash-legend">
              <span><i className="dot dot--dark"></i>{t('dashboard.chart.thisWeek')}</span>
              <span><i className="dot dot--gray"></i>{t('dashboard.chart.lastWeek')}</span>
            </div>
            <div className="dash-range">
              <button type="button" className="active">{t('dashboard.chart.week')}</button>
              <button type="button">{t('dashboard.chart.month')}</button>
              <button type="button">{t('dashboard.chart.year')}</button>
            </div>
          </div>
        </div>

        <div className="dash-chart">
          <span className="dash-grid-line dash-grid-line--1"></span>
          <span className="dash-grid-line dash-grid-line--2"></span>
          <span className="dash-grid-line dash-grid-line--3"></span>
          <span className="dash-grid-line dash-grid-line--4"></span>
          <img src="/images/revenue-chart.png" alt="" />
        </div>

        <div className="dash-days">
          <span>{t('dashboard.days.mon')}</span>
          <span>{t('dashboard.days.tue')}</span>
          <span>{t('dashboard.days.wed')}</span>
          <span>{t('dashboard.days.thu')}</span>
          <span>{t('dashboard.days.fri')}</span>
          <span>{t('dashboard.days.sat')}</span>
          <span>{t('dashboard.days.sun')}</span>
        </div>
      </div>

      {/* ===== Oxirgi faoliyatlar ===== */}
      <div className="dash-card dash-table-card">
        <div className="dash-table-head">
          <h3 className="dash-title">{t('dashboard.recent.title')}</h3>
          <a className="dash-link" href="#">{t('dashboard.recent.viewAll')}</a>
        </div>

        <table className="dash-table">
          <thead>
            <tr>
              <th>{t('dashboard.recent.time')}</th>
              <th>ID</th>
              <th>{t('dashboard.recent.type')}</th>
              <th>{t('dashboard.recent.description')}</th>
              <th>{t('dashboard.recent.status')}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="strong">10:42</td>
              <td className="muted">#TX-9902</td>
              <td><span className="dash-type dash-type--taxi"><img src="/images/car-yellow.png" alt="" />{t('dashboard.types.taxi')}</span></td>
              <td>Shoxrux R. → Chilonzor metro, Chevrolet Cobalt</td>
              <td><span className="dash-badge dash-badge--completed"><i></i>{t('dashboard.statuses.completed')}</span></td>
            </tr>
            <tr>
              <td className="strong">10:39</td>
              <td className="muted">#CR-4029</td>
              <td><span className="dash-type dash-type--courier"><img src="/images/box-dark.png" alt="" />{t('dashboard.types.courier')}</span></td>
              <td>Yetkazish: FastFood, 1-podezd → Yunusobod 4-mavze</td>
              <td><span className="dash-badge dash-badge--inProgress"><i></i>{t('dashboard.statuses.inProgress')}</span></td>
            </tr>
            <tr>
              <td className="strong">10:35</td>
              <td className="muted">#TX-9901</td>
              <td><span className="dash-type dash-type--taxi"><img src="/images/car-yellow.png" alt="" />{t('dashboard.types.taxi')}</span></td>
              <td>Alisher T. → Aeroport Terminal 2, Gentra</td>
              <td><span className="dash-badge dash-badge--completed"><i></i>{t('dashboard.statuses.completed')}</span></td>
            </tr>
            <tr>
              <td className="strong">10:22</td>
              <td className="muted">#CR-4028</td>
              <td><span className="dash-type dash-type--courier"><img src="/images/box-dark.png" alt="" />{t('dashboard.types.courier')}</span></td>
              <td>Hujjatlar yetkazish: Oloy bozori → Minor</td>
              <td><span className="dash-badge dash-badge--cancelled"><i></i>{t('dashboard.statuses.cancelled')}</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Dashboard