import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { readStoreData } from '../store-data'
import '../styles/StoreFlow.css'
import { useTranslation } from 'react-i18next'
import {
    Upload,
    Plus,
    Store as StoreIcon,
    Search,
    ChevronDown,
    LayoutGrid,
    ShoppingCart,
    Pill,
    Home,
    Utensils,
    Coffee,
    Wine,
    Croissant,
    Flower2,
    Smartphone,
    MapPin,
    Star,
    Eye,
    Pencil,
    Trash2,
} from 'lucide-react'
import '../styles/Stores.css'

const Stores = () => {
    const { t } = useTranslation()
    const location = useLocation()
    const [saved] = useState(readStoreData)

    return (
        <div className="st-page">
            {location.state?.storeCreated && <p className="sf-alert" role="status">{t('storeFlow.storeCreated')}</p>}

            {/* sarlavha & tugmala  */}
            <div className="st-head">
                <div>
                    <h1 className="st-title">{t('stores.title')}</h1>
                    <p className="st-subtitle">{t('stores.subtitle')}</p>
                </div>
                <div className="st-head__actions">
                    <Link to="/store/import" className="st-btn">
                        <Upload size={16} />
                        {t('stores.import')}
                    </Link>
                    <Link to="/store/new" className="st-btn st-btn--primary">
                        <Plus size={16} />
                        {t('stores.add')}
                    </Link>
                </div>
            </div>

           {/* statistika  */}
            <div className="st-stats">
                <div className="st-stat st-stat--dark">
                    <span className="st-stat__label">{t('stores.stats.total')}</span>
                    <span className="st-stat__value">{248 + saved.stores.length}</span>
                    <span className="st-stat__icon st-stat__icon--yellow"><StoreIcon size={16} /></span>
                </div>
                <div className="st-stat">
                    <span className="st-stat__label">{t('stores.stats.active')}</span>
                    <span className="st-stat__value">231</span>
                    <span className="st-stat__icon"><StoreIcon size={16} /></span>
                </div>
                <div className="st-stat">
                    <span className="st-stat__label">{t('stores.stats.moderation')}</span>
                    <span className="st-stat__value st-stat__value--warn">{9 + saved.stores.length}</span>
                    <span className="st-stat__icon"><StoreIcon size={16} /></span>
                </div>
                <div className="st-stat">
                    <span className="st-stat__label">{t('stores.stats.newMonth')}</span>
                    <span className="st-stat__value">+{17 + saved.stores.length}</span>
                    <span className="st-stat__icon"><Plus size={16} /></span>
                </div>
            </div>

            {/* kategoriya chiplari */}
            <div className="st-chips">
                <button className="st-chip st-chip--active">
                    <LayoutGrid size={14} />
                    {t('stores.categories.all')}
                    <span className="st-chip__count">248</span>
                </button>
                <button className="st-chip">
                    <ShoppingCart size={14} />
                    {t('stores.categories.market')}
                    <span className="st-chip__count">64</span>
                </button>
                <button className="st-chip">
                    <Pill size={14} />
                    {t('stores.categories.pharmacy')}
                    <span className="st-chip__count">38</span>
                </button>
                <button className="st-chip">
                    <Home size={14} />
                    {t('stores.categories.household')}
                    <span className="st-chip__count">21</span>
                </button>
                <button className="st-chip">
                    <Utensils size={14} />
                    {t('stores.categories.restaurant')}
                    <span className="st-chip__count">52</span>
                </button>
                <button className="st-chip">
                    <Coffee size={14} />
                    {t('stores.categories.cafe')}
                    <span className="st-chip__count">33</span>
                </button>
                <button className="st-chip">
                    <Wine size={14} />
                    {t('stores.categories.bar')}
                    <span className="st-chip__count">9</span>
                </button>
                <button className="st-chip">
                    <Croissant size={14} />
                    {t('stores.categories.bakery')}
                    <span className="st-chip__count">14</span>
                </button>
                <button className="st-chip">
                    <Flower2 size={14} />
                    {t('stores.categories.flowers')}
                    <span className="st-chip__count">8</span>
                </button>
                <button className="st-chip">
                    <Smartphone size={14} />
                    {t('stores.categories.electronics')}
                    <span className="st-chip__count">9</span>
                </button>
            </div>

            {/* qidiruv & filtr  */}
            <div className="st-toolbar">
                <div className="st-search">
                    <Search size={16} />
                    <input type="text" placeholder={t('stores.searchPlaceholder')} />
                </div>
                <div className="st-selects">
                    <button className="st-select">
                        {t('stores.filters.region')}
                        <ChevronDown size={14} />
                    </button>
                    <button className="st-select">
                        {t('stores.filters.status')}
                        <ChevronDown size={14} />
                    </button>
                    <button className="st-select">
                        {t('stores.filters.sort')}
                        <ChevronDown size={14} />
                    </button>
                </div>
            </div>

            {/* jadval  */}
            <div className="st-table">

                <div className="st-row st-row--head">
                    <div>{t('stores.headers.store')}</div>
                    <div>{t('stores.headers.type')}</div>
                    <div>{t('stores.headers.products')}</div>
                    <div>{t('stores.headers.ordersToday')}</div>
                    <div>{t('stores.headers.rating')}</div>
                    <div>{t('stores.headers.status')}</div>
                    <div>{t('stores.headers.actions')}</div>
                </div>

                {saved.stores.map(store => <div className="st-row" key={store.id}>
                    <div className="st-store"><span className="st-store__icon st-store__icon--amber"><StoreIcon size={18} /></span><div className="st-store__text"><p className="st-store__name">{store.name}</p><p className="st-store__addr"><MapPin size={11} />{store.address}</p></div></div>
                    <div><span className="st-type st-type--amber">{store.type === 'other' ? t('storeFlow.other') : t('stores.categories.' + store.type)}</span></div>
                    <div>{saved.imports.filter(batch => batch.storeId === store.id && ['products', 'menu', 'medicines'].includes(batch.type)).reduce((sum, batch) => sum + batch.rows.length, 0)}</div>
                    <div>0</div><div>—</div><div><span className="st-status st-status--pending">{t('stores.status.moderation')}</span></div>
                    <div><Link className="st-act" to="/store/import" title={t('stores.import')} aria-label={t('stores.import')}><Upload size={15} /></Link></div>
                </div>)}
                <div className="st-row">
                    <div className="st-store">
                        <span className="st-store__icon st-store__icon--amber"><ShoppingCart size={18} /></span>
                        <div className="st-store__text">
                            <p className="st-store__name">Korzinka</p>
                            <p className="st-store__addr"><MapPin size={11} />Chilonzor, Bunyodkor 12</p>
                        </div>
                    </div>
                    <div><span className="st-type st-type--amber"><ShoppingCart size={12} />{t('stores.categories.market')}</span></div>
                    <div>1,248</div>
                    <div>312</div>
                    <div className="st-rating"><Star size={14} fill="#f59e0b" stroke="#f59e0b" />4.8</div>
                    <div><span className="st-status st-status--active">{t('stores.status.active')}</span></div>
                    <div className="st-actions">
                        <button className="st-act"><Eye size={15} /></button>
                        <button className="st-act"><Pencil size={15} /></button>
                        <button className="st-act st-act--danger"><Trash2 size={15} /></button>
                    </div>
                </div>

                <div className="st-row">
                    <div className="st-store">
                        <span className="st-store__icon st-store__icon--green"><Pill size={18} /></span>
                        <div className="st-store__text">
                            <p className="st-store__name">Grand Pharm</p>
                            <p className="st-store__addr"><MapPin size={11} />Yunusobod 4-mavze</p>
                        </div>
                    </div>
                    <div><span className="st-type st-type--green"><Pill size={12} />{t('stores.categories.pharmacy')}</span></div>
                    <div>2,930</div>
                    <div>87</div>
                    <div className="st-rating"><Star size={14} fill="#f59e0b" stroke="#f59e0b" />4.9</div>
                    <div><span className="st-status st-status--active">{t('stores.status.active')}</span></div>
                    <div className="st-actions">
                        <button className="st-act"><Eye size={15} /></button>
                        <button className="st-act"><Pencil size={15} /></button>
                        <button className="st-act st-act--danger"><Trash2 size={15} /></button>
                    </div>
                </div>

                <div className="st-row">
                    <div className="st-store">
                        <span className="st-store__icon st-store__icon--red"><Utensils size={18} /></span>
                        <div className="st-store__text">
                            <p className="st-store__name">Evos</p>
                            <p className="st-store__addr"><MapPin size={11} />Amir Temur shoh ko'chasi</p>
                        </div>
                    </div>
                    <div><span className="st-type st-type--red"><Utensils size={12} />{t('stores.categories.restaurant')}</span></div>
                    <div>64</div>
                    <div>540</div>
                    <div className="st-rating"><Star size={14} fill="#f59e0b" stroke="#f59e0b" />4.7</div>
                    <div><span className="st-status st-status--active">{t('stores.status.active')}</span></div>
                    <div className="st-actions">
                        <button className="st-act"><Eye size={15} /></button>
                        <button className="st-act"><Pencil size={15} /></button>
                        <button className="st-act st-act--danger"><Trash2 size={15} /></button>
                    </div>
                </div>

                <div className="st-row">
                    <div className="st-store">
                        <span className="st-store__icon st-store__icon--amber"><Coffee size={18} /></span>
                        <div className="st-store__text">
                            <p className="st-store__name">Bon! Café</p>
                            <p className="st-store__addr"><MapPin size={11} />Mirobod, Afrosiyob 7</p>
                        </div>
                    </div>
                    <div><span className="st-type st-type--amber"><Coffee size={12} />{t('stores.categories.cafe')}</span></div>
                    <div>42</div>
                    <div>126</div>
                    <div className="st-rating"><Star size={14} fill="#f59e0b" stroke="#f59e0b" />4.6</div>
                    <div><span className="st-status st-status--active">{t('stores.status.active')}</span></div>
                    <div className="st-actions">
                        <button className="st-act"><Eye size={15} /></button>
                        <button className="st-act"><Pencil size={15} /></button>
                        <button className="st-act st-act--danger"><Trash2 size={15} /></button>
                    </div>
                </div>

                <div className="st-row">
                    <div className="st-store">
                        <span className="st-store__icon st-store__icon--blue"><Home size={18} /></span>
                        <div className="st-store__text">
                            <p className="st-store__name">Uy Ro'zg'or</p>
                            <p className="st-store__addr"><MapPin size={11} />Sergeli, Yangi Sergeli</p>
                        </div>
                    </div>
                    <div><span className="st-type st-type--blue"><Home size={12} />{t('stores.categories.household')}</span></div>
                    <div>860</div>
                    <div>24</div>
                    <div className="st-rating"><Star size={14} fill="#f59e0b" stroke="#f59e0b" />4.5</div>
                    <div><span className="st-status st-status--pending">{t('stores.status.moderation')}</span></div>
                    <div className="st-actions">
                        <button className="st-act"><Eye size={15} /></button>
                        <button className="st-act"><Pencil size={15} /></button>
                        <button className="st-act st-act--danger"><Trash2 size={15} /></button>
                    </div>
                </div>

                <div className="st-row">
                    <div className="st-store">
                        <span className="st-store__icon st-store__icon--purple"><Wine size={18} /></span>
                        <div className="st-store__text">
                            <p className="st-store__name">Sky Lounge Bar</p>
                            <p className="st-store__addr"><MapPin size={11} />Shayxontohur, Navoiy 30</p>
                        </div>
                    </div>
                    <div><span className="st-type st-type--purple"><Wine size={12} />{t('stores.categories.bar')}</span></div>
                    <div>38</div>
                    <div>17</div>
                    <div className="st-rating"><Star size={14} fill="#f59e0b" stroke="#f59e0b" />4.4</div>
                    <div><span className="st-status st-status--stopped">{t('stores.status.stopped')}</span></div>
                    <div className="st-actions">
                        <button className="st-act"><Eye size={15} /></button>
                        <button className="st-act"><Pencil size={15} /></button>
                        <button className="st-act st-act--danger"><Trash2 size={15} /></button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Stores