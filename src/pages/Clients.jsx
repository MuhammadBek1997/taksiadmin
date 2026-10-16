import React from 'react'
import { useTranslation } from 'react-i18next'
import {
    Users,
    Ban,
    Search,
    ChevronDown,
    Download,
    ChevronLeft,
    ChevronRight,
    Star,
    Eye,
    Pencil,
} from 'lucide-react'
import '../styles/Clients.css'

const Clients = () => {
    const { t } = useTranslation()

    return (
        <div className="cl-page">

            {/* statistika  */}
            <div className="cl-stats">
                <div className="cl-stat cl-stat--dark">
                    <span className="cl-stat__label">{t('clients.stats.total')}</span>
                    <span className="cl-stat__value">48,210</span>
                    <span className="cl-stat__icon cl-stat__icon--yellow"><Users size={16} /></span>
                </div>
                <div className="cl-stat">
                    <span className="cl-stat__label">{t('clients.stats.newMonth')}</span>
                    <span className="cl-stat__value">+2,340</span>
                    <span className="cl-stat__icon"><Users size={16} /></span>
                </div>
                <div className="cl-stat">
                    <span className="cl-stat__label">{t('clients.stats.active')}</span>
                    <span className="cl-stat__value">21,904</span>
                    <span className="cl-stat__icon"><Users size={16} /></span>
                </div>
                <div className="cl-stat">
                    <span className="cl-stat__label">{t('clients.stats.blocked')}</span>
                    <span className="cl-stat__value">86</span>
                    <span className="cl-stat__icon"><Ban size={16} /></span>
                </div>
            </div>

           {/* qidiruv + tablar + saralsh  */}
            <div className="cl-toolbar">
                <div className="cl-search">
                    <Search size={16} />
                    <input type="text" placeholder={t('clients.searchPlaceholder')} />
                </div>

                <div className="cl-tabs">
                    <button className="cl-tab cl-tab--active">{t('clients.tabs.all')}</button>
                    <button className="cl-tab">{t('clients.tabs.active')}</button>
                    <button className="cl-tab">{t('clients.tabs.new')}</button>
                    <button className="cl-tab">{t('clients.tabs.blocked')}</button>
                </div>

                <div className="cl-actions">
                    <button className="cl-btn">
                        {t('clients.sort.label')} {t('clients.sort.orders')}
                        <ChevronDown size={14} />
                    </button>
                    <button className="cl-btn">
                        <Download size={16} />
                        {t('clients.export')}
                    </button>
                </div>
            </div>

          {/* jadval  */}
            <div className="cl-table">
                <div className="cl-table__scroll">

                    <div className="cl-row cl-row--head">
                        <span>{t('clients.headers.client')}</span>
                        <span>{t('clients.headers.phone')}</span>
                        <span>{t('clients.headers.orders')}</span>
                        <span>{t('clients.headers.spend')}</span>
                        <span>{t('clients.headers.lastOrder')}</span>
                        <span>{t('clients.headers.rating')}</span>
                        <span>{t('clients.headers.status')}</span>
                        <span>{t('clients.headers.actions')}</span>
                    </div>

                    <div className="cl-row">
                        <span className="cl-person">
                            <i className="cl-avatar cl-avatar--yellow">MS</i>
                            <span className="cl-person__text">
                                <b className="cl-person__name">Malika Saidova</b>
                                <small className="cl-person__id">#CL-30210</small>
                            </span>
                        </span>
                        <span>+998 90 555 12 34</span>
                        <span>148</span>
                        <span>4.2 {t('clients.units.mln')}</span>
                        <span>{t('clients.when.today')}, 10:39</span>
                        <span className="cl-rating"><Star size={13} fill="#f59e0b" stroke="#f59e0b" />4.9</span>
                        <span><b className="cl-status cl-status--active">{t('clients.status.active')}</b></span>
                        <span className="cl-acts">
                            <button className="cl-act"><Eye size={15} /></button>
                            <button className="cl-act"><Pencil size={15} /></button>
                            <button className="cl-act cl-act--danger"><Ban size={15} /></button>
                        </span>
                    </div>

                    <div className="cl-row">
                        <span className="cl-person">
                            <i className="cl-avatar cl-avatar--blue">BK</i>
                            <span className="cl-person__text">
                                <b className="cl-person__name">Bobur Karimov</b>
                                <small className="cl-person__id">#CL-30211</small>
                            </span>
                        </span>
                        <span>+998 93 777 45 45</span>
                        <span>96</span>
                        <span>3.1 {t('clients.units.mln')}</span>
                        <span>{t('clients.when.today')}, 10:35</span>
                        <span className="cl-rating"><Star size={13} fill="#f59e0b" stroke="#f59e0b" />4.8</span>
                        <span><b className="cl-status cl-status--active">{t('clients.status.active')}</b></span>
                        <span className="cl-acts">
                            <button className="cl-act"><Eye size={15} /></button>
                            <button className="cl-act"><Pencil size={15} /></button>
                            <button className="cl-act cl-act--danger"><Ban size={15} /></button>
                        </span>
                    </div>

                    <div className="cl-row">
                        <span className="cl-person">
                            <i className="cl-avatar cl-avatar--green">DA</i>
                            <span className="cl-person__text">
                                <b className="cl-person__name">Dilnoza Aliyeva</b>
                                <small className="cl-person__id">#CL-30212</small>
                            </span>
                        </span>
                        <span>+998 94 120 30 40</span>
                        <span>74</span>
                        <span>5.6 {t('clients.units.mln')}</span>
                        <span>{t('clients.when.today')}, 10:37</span>
                        <span className="cl-rating"><Star size={13} fill="#f59e0b" stroke="#f59e0b" />5.0</span>
                        <span><b className="cl-status cl-status--vip">{t('clients.status.vip')}</b></span>
                        <span className="cl-acts">
                            <button className="cl-act"><Eye size={15} /></button>
                            <button className="cl-act"><Pencil size={15} /></button>
                            <button className="cl-act cl-act--danger"><Ban size={15} /></button>
                        </span>
                    </div>

                    <div className="cl-row">
                        <span className="cl-person">
                            <i className="cl-avatar cl-avatar--yellow">AM</i>
                            <span className="cl-person__text">
                                <b className="cl-person__name">Aziza Mirzayeva</b>
                                <small className="cl-person__id">#CL-30213</small>
                            </span>
                        </span>
                        <span>+998 97 880 11 22</span>
                        <span>31</span>
                        <span>820 {t('clients.units.thousand')}</span>
                        <span>{t('clients.when.today')}, 10:22</span>
                        <span className="cl-rating"><Star size={13} fill="#f59e0b" stroke="#f59e0b" />4.4</span>
                        <span><b className="cl-status cl-status--active">{t('clients.status.active')}</b></span>
                        <span className="cl-acts">
                            <button className="cl-act"><Eye size={15} /></button>
                            <button className="cl-act"><Pencil size={15} /></button>
                            <button className="cl-act cl-act--danger"><Ban size={15} /></button>
                        </span>
                    </div>

                    <div className="cl-row">
                        <span className="cl-person">
                            <i className="cl-avatar cl-avatar--purple">KT</i>
                            <span className="cl-person__text">
                                <b className="cl-person__name">Kamola Tursunova</b>
                                <small className="cl-person__id">#CL-30214</small>
                            </span>
                        </span>
                        <span>+998 99 300 44 55</span>
                        <span>12</span>
                        <span>410 {t('clients.units.thousand')}</span>
                        <span>{t('clients.when.yesterday')}, 21:10</span>
                        <span className="cl-rating"><Star size={13} fill="#f59e0b" stroke="#f59e0b" />4.6</span>
                        <span><b className="cl-status cl-status--new">{t('clients.status.new')}</b></span>
                        <span className="cl-acts">
                            <button className="cl-act"><Eye size={15} /></button>
                            <button className="cl-act"><Pencil size={15} /></button>
                            <button className="cl-act cl-act--danger"><Ban size={15} /></button>
                        </span>
                    </div>

                    <div className="cl-row">
                        <span className="cl-person">
                            <i className="cl-avatar cl-avatar--yellow">RN</i>
                            <span className="cl-person__text">
                                <b className="cl-person__name">Rustam Nazarov</b>
                                <small className="cl-person__id">#CL-30215</small>
                            </span>
                        </span>
                        <span>+998 90 222 33 44</span>
                        <span>5</span>
                        <span>96 {t('clients.units.thousand')}</span>
                        <span>03.10.2026</span>
                        <span className="cl-rating"><Star size={13} fill="#f59e0b" stroke="#f59e0b" />3.1</span>
                        <span><b className="cl-status cl-status--blocked">{t('clients.status.blocked')}</b></span>
                        <span className="cl-acts">
                            <button className="cl-act"><Eye size={15} /></button>
                            <button className="cl-act"><Pencil size={15} /></button>
                            <button className="cl-act cl-act--danger"><Ban size={15} /></button>
                        </span>
                    </div>

                </div>
            </div>

           {/* footerr + sahifa  */}
            <div className="cl-footer">
                <p>{t('clients.footer.showing', { from: 1, to: 6, total: '48,210' })}</p>
                <div className="cl-pagination">
                    <button className="cl-page-btn">
                        <ChevronLeft size={14} />
                        {t('clients.pagination.prev')}
                    </button>
                    <button className="cl-page-btn cl-page-btn--num cl-page-btn--active">1</button>
                    <button className="cl-page-btn cl-page-btn--num">2</button>
                    <button className="cl-page-btn cl-page-btn--num">3</button>
                    <button className="cl-page-btn">
                        {t('clients.pagination.next')}
                        <ChevronRight size={14} />
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Clients