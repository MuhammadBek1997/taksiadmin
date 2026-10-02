import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import '../styles/CourierProfile.css'

const couriersData = {
    'CR-1201': {
        name: 'Jasur Shokirov',
        status: 'Online',
        statusType: 'done',
        phone: '+998 90 321 44 55',
        email: 'jasur.s@karavan.uz',
        transport: 'Velosiped (Green Bike)',
        deliveries: '420 ta',
        earnings: '9.6 mln UZS',
        rating: '4.90 / 5',
        avgTime: '18 daqiqa',
    },
    'CR-1204': {
        name: 'Olim Qodirov',
        status: 'Jarayonda',
        statusType: 'progress',
        phone: '+998 99 110 50 60',
        email: 'olim.q@karavan.uz',
        transport: 'Motoroller (Yadea Electric)',
        deliveries: '542 ta',
        earnings: '12.8 mln UZS',
        rating: '4.88 / 5',
        avgTime: '22 daqiqa',
    },
    'CR-1207': {
        name: 'Fayzulla Karimov',
        status: 'Online',
        statusType: 'done',
        phone: '+998 97 450 11 22',
        email: 'fayzulla.k@karavan.uz',
        transport: 'Skuter (Honda Tact)',
        deliveries: '389 ta',
        earnings: '8.1 mln UZS',
        rating: '4.80 / 5',
        avgTime: '20 daqiqa',
    },
    'CR-1211': {
        name: 'Diyor Ismoilov',
        status: 'Offline',
        statusType: 'cancel',
        phone: '+998 93 540 88 99',
        email: 'diyor.i@karavan.uz',
        transport: 'Chevrolet Spark (01 | O 202 XX)',
        deliveries: '601 ta',
        earnings: '15.2 mln UZS',
        rating: '4.50 / 5',
        avgTime: '27 daqiqa',
    },
    'CR-1215': {
        name: 'Sherzod Tojiev',
        status: 'Online',
        statusType: 'done',
        phone: '+998 90 990 00 11',
        email: 'sherzod.t@karavan.uz',
        transport: 'Piyoda (Sumka bilan)',
        deliveries: '275 ta',
        earnings: '5.4 mln UZS',
        rating: '4.60 / 5',
        avgTime: '31 daqiqa',
    },
}

const deliveries = [
    { date: 'Bugun, 10:15', id: '#CR-8821', address: "Shota Rustaveli ko'chasi, 24-uy", price: '15,000 UZS', status: 'done', label: 'Bajarildi' },
    { date: 'Bugun, 08:44', id: '#CR-8799', address: 'Chilonzor 3-kvartal, 12-uy', price: '18,000 UZS', status: 'done', label: 'Bajarildi' },
    { date: 'Kecha, 19:10', id: '#CR-8710', address: "Mustaqillik shoh ko'chasi, 102", price: '12,000 UZS', status: 'cancel', label: 'Bekor qilingan' },
]

const CourierProfile = () => {
    const navigate = useNavigate()
    const { id } = useParams()                       // manzildagi :id qismini oladi, masalan "CR-1204"
    const courier = couriersData[id]                  // shu id'ga mos ma'lumotni topadi

    if (!courier) {
        return (
            <div className="cp-page">
                <button className="cp-back" onClick={() => navigate('/couriers')}>
                    <ArrowLeft size={16} />
                    Orqaga
                </button>
                <p>Kuryer topilmadi.</p>
            </div>
        )
    }

    return (
        <div className="cp-page">

            <button className="cp-back" onClick={() => navigate('/couriers')}>
                <ArrowLeft size={16} />
                Orqaga
            </button>

            <div className="cp-card cp-profile">
                <img src="/Avatar.png" alt="" className="cp-profile__avatar" />

                <h3 className="cp-profile__name">{courier.name}</h3>
                <p className="cp-profile__id">ID: #{id}</p>

                <b className={`cp-status cp-status--${courier.statusType}`}>{courier.status}</b>

                <div className="cp-divider"></div>

                <div className="cp-field">
                    <span className="cp-field__label">Telefon raqam</span>
                    <span className="cp-field__value">{courier.phone}</span>
                </div>
                <div className="cp-field">
                    <span className="cp-field__label">Elektron pochta</span>
                    <span className="cp-field__value">{courier.email}</span>
                </div>
                <div className="cp-field">
                    <span className="cp-field__label">Transport turi</span>
                    <span className="cp-field__value">{courier.transport}</span>
                </div>
            </div>

            <div className="cp-col">

                <div className="cp-stats">
                    <div className="cp-stat">
                        <span className="cp-stat__label">Total Deliveries</span>
                        <span className="cp-stat__value">{courier.deliveries}</span>
                    </div>
                    <div className="cp-stat">
                        <span className="cp-stat__label">Total Earnings</span>
                        <span className="cp-stat__value">{courier.earnings}</span>
                    </div>
                    <div className="cp-stat">
                        <span className="cp-stat__label">Average Rating</span>
                        <span className="cp-stat__value">{courier.rating}</span>
                    </div>
                    <div className="cp-stat">
                        <span className="cp-stat__label">Avg. Time</span>
                        <span className="cp-stat__value">{courier.avgTime}</span>
                    </div>
                </div>

                <div className="cp-card cp-table-card">
                    <h4 className="cp-table-title">Oxirgi yetkazib berishlar</h4>

                    <div className="cp-row cp-row--head">
                        <span>Sana/Vaqt</span>
                        <span>Buyurtma ID</span>
                        <span>Borish manzili</span>
                        <span>Xizmat haqi</span>
                        <span className="cp-right">Holati</span>
                    </div>

                    {deliveries.map((d) => (
                        <div className="cp-row" key={d.id}>
                            <span className="cp-muted">{d.date}</span>
                            <span className="cp-id">{d.id}</span>
                            <span>{d.address}</span>
                            <span className="cp-price">{d.price}</span>
                            <span className="cp-right">
                                <b className={`cp-badge cp-badge--${d.status}`}>{d.label}</b>
                            </span>
                        </div>
                    ))}
                </div>

            </div>

        </div>
    )
}

export default CourierProfile