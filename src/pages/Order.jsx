import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import {
    ShoppingCart,
    Clock,
    Ban,
    Search,
    Calendar,
    ChevronDown,
    Download,
    ChevronLeft,
    ChevronRight,
    Car,
    Package,
    Store,
} from 'lucide-react'
import '../styles/Order.css'

const TYPE_ICONS = { taxi: Car, courier: Package, store: Store }

const TAB_KEYS = ['all', 'taxi', 'courier', 'store']

const TAB_COUNTS = { all: 2840, taxi: 1920, courier: 610, store: 310 }


const ORDERS = [
    { id: 'TX-9902', client: 'Shoxrux R.', type: 'taxi', from: 'Bodomzor', to: 'Chilonzor metro', courier: 'Alisher T.', amount: '24,000', time: '10:42', status: 'done' },
    { id: 'CR-4029', client: 'Malika S.', type: 'courier', from: 'FastFood, 1-podezd', to: 'Yunusobod 4-mavze', courier: 'Olim Q.', amount: '15,000', time: '10:39', status: 'progress' },
    { id: 'ST-2211', client: 'Dilnoza A.', type: 'store', from: 'Korzinka — Chilonzor', to: 'Qatortol 18', courier: 'Jasur Sh.', amount: '186,500', time: '10:37', status: 'new' },
    { id: 'TX-9901', client: 'Bobur K.', type: 'taxi', from: 'Amir Temur xiyoboni', to: 'Aeroport Terminal 2', courier: 'Sardor A.', amount: '58,000', time: '10:35', status: 'done' },
    { id: 'CR-4028', client: 'Aziza M.', type: 'courier', from: 'Oloy bozori', to: 'Minor', courier: 'Fayzulla K.', amount: '18,000', time: '10:22', status: 'cancel' },
    { id: 'ST-2210', client: 'Kamola T.', type: 'store', from: 'Grand Pharm', to: 'Yunusobod 12', courier: 'Sherzod T.', amount: '74,000', time: '10:15', status: 'done' },
]

const Order = () => {
    const navigate = useNavigate()
    const { t } = useTranslation()

    const [tab, setTab] = useState('all')
    const [query, setQuery] = useState('')
    const [page, setPage] = useState(1)

    const q = query.trim().toLowerCase()

    const rows = ORDERS.filter((o) => {
        if (tab !== 'all' && o.type !== tab) return false
        if (!q) return true
        return [o.id, o.client, o.from, o.to, o.courier]
            .join(' ')
            .toLowerCase()
            .includes(q)
    })

    const total = q ? rows.length : TAB_COUNTS[tab]

    return (
        <div className="ord-page">

         {/* statistika kartalar */}
            <div className="ord-stats">
                <div className="ord-stat ord-stat--dark">
                    <span className="ord-stat__label">{t('orders.stats.today')}</span>
                    <span className="ord-stat__value">2,840</span>
                    <span className="ord-stat__icon ord-stat__icon--yellow"><ShoppingCart size={16} /></span>
                </div>
                <div className="ord-stat">
                    <span className="ord-stat__label">{t('orders.stats.progress')}</span>
                    <span className="ord-stat__value">126</span>
                    <span className="ord-stat__icon"><Clock size={16} /></span>
                </div>
                <div className="ord-stat">
                    <span className="ord-stat__label">{t('orders.stats.done')}</span>
                    <span className="ord-stat__value">2,602</span>
                    <span className="ord-stat__icon"><ShoppingCart size={16} /></span>
                </div>
                <div className="ord-stat">
                    <span className="ord-stat__label">{t('orders.stats.cancelled')}</span>
                    <span className="ord-stat__value">112</span>
                    <span className="ord-stat__icon"><Ban size={16} /></span>
                </div>
            </div>

            {/* tablar qidiruv tugmalar */}
            <div className="ord-toolbar">
                <div className="ord-tabs">
                    {TAB_KEYS.map((key) => (
                        <button
                            key={key}
                            className={`ord-tab ${tab === key ? 'ord-tab--active' : ''}`}
                            onClick={() => setTab(key)}
                        >
                            {t(`orders.tabs.${key}`)}
                            <span className="ord-tab__count">{TAB_COUNTS[key].toLocaleString('en-US')}</span>
                        </button>
                    ))}
                </div>

                <div className="ord-search">
                    <Search size={16} />
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder={t('orders.searchPlaceholder')}
                    />
                </div>

                <div className="ord-actions">
                    <button className="ord-btn">
                        <Calendar size={16} />
                        {t('orders.date')}
                        <ChevronDown size={14} />
                    </button>
                    <button className="ord-btn">
                        <Download size={16} />
                        {t('orders.export')}
                    </button>
                </div>
            </div>

            {/* jadval */}
            <div className="ord-table">
                <div className="ord-table__scroll">

                    <div className="ord-row ord-row--head">
                        <span>{t('orders.headers.id')}</span>
                        <span>{t('orders.headers.client')}</span>
                        <span>{t('orders.headers.type')}</span>
                        <span>{t('orders.headers.route')}</span>
                        <span>{t('orders.headers.courier')}</span>
                        <span>{t('orders.headers.amount')}</span>
                        <span>{t('orders.headers.time')}</span>
                        <span>{t('orders.headers.status')}</span>
                    </div>

                    {rows.map((o) => {
                        const TypeIcon = TYPE_ICONS[o.type]
                        return (
                            <div
                                key={o.id}
                                className="ord-row ord-row--link"
                                onClick={() => navigate(`/orders/${o.id}`)}
                            >
                                <span className="ord-id">#{o.id}</span>
                                <span>{o.client}</span>
                                <span>
                                    <b className={`ord-type ord-type--${o.type}`}>
                                        <TypeIcon size={12} />
                                        {t(`orders.types.${o.type}`)}
                                    </b>
                                </span>
                                <span className="ord-route">
                                    <span className="ord-route__line">
                                        <i className="ord-dot ord-dot--from"></i>{o.from}
                                    </span>
                                    <span className="ord-route__line">
                                        <i className="ord-dot ord-dot--to"></i>{o.to}
                                    </span>
                                </span>
                                <span>{o.courier}</span>
                                <span>{o.amount} UZS</span>
                                <span>{o.time}</span>
                                <span>
                                    <b className={`ord-status ord-status--${o.status}`}>
                                        {t(`orders.status.${o.status}`)}
                                    </b>
                                </span>
                            </div>
                        )
                    })}

                </div>
            </div>

            {/* FOOTER + SAHIFALASH */}
            <div className="ord-footer">
                <p>
                    {t('orders.footer.showing', {
                        from: rows.length ? 1 : 0,
                        to: rows.length,
                        total: total.toLocaleString('en-US'),
                    })}
                </p>
                <div className="ord-pagination">
                    <button
                        className="ord-page-btn"
                        onClick={() => setPage((p) => Math.max(1, p - 1))}
                    >
                        <ChevronLeft size={14} />
                        {t('orders.pagination.prev')}
                    </button>
                    {[1, 2, 3].map((n) => (
                        <button
                            key={n}
                            className={`ord-page-btn ord-page-btn--num ${page === n ? 'ord-page-btn--active' : ''}`}
                            onClick={() => setPage(n)}
                        >
                            {n}
                        </button>
                    ))}
                    <button
                        className="ord-page-btn"
                        onClick={() => setPage((p) => Math.min(3, p + 1))}
                    >
                        {t('orders.pagination.next')}
                        <ChevronRight size={14} />
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Order