import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import '../styles/OrderDetails.css'


const ordersData = {
    'TX-9902': {
        statusLabel: 'Bajarildi',
        statusType: 'done',
        items: [
            { qty: '1x', name: 'Taksi xizmati (Chevrolet Cobalt)', price: '21,000 UZS' },
        ],
        subtotal: '21,000 UZS',
        delivery: '3,000 UZS',
        total: '24,000 UZS',
        clientName: 'Malika Axmedova',
        clientPhone: '+998 90 123 45 67',
        address: 'Chilonzor metro bekati',
        courierName: 'Jasur Shokirov',
        courierId: 'CR-1201',
        courierTransport: 'Velosiped',
        courierPhone: '+998 90 321 44 55',
        courierStatus: 'Safar yakunlandi',
        courierStatusType: 'ok',
    },
    'CR-4029': {
        statusLabel: 'Jarayonda',
        statusType: 'progress',
        items: [
            { qty: '2x', name: 'Double Cheeseburger (Evos)', price: '44,000 UZS' },
            { qty: '1x', name: 'Kartoshka Fri', price: '12,000 UZS' },
            { qty: '1x', name: 'Coca-Cola 1.5L', price: '10,000 UZS' },
        ],
        subtotal: '66,000 UZS',
        delivery: '15,000 UZS',
        total: '81,000 UZS',
        clientName: 'Farrux Aliev',
        clientPhone: '+998 90 911 88 44',
        address: 'Yunusobod tumani, 4-mavze, 12-uy, 45-xonadon',
        courierName: 'Olim Qodirov',
        courierId: 'CR-1204',
        courierTransport: 'Motoroller',
        courierPhone: '+998 99 110 50 60',
        courierStatus: 'Buyurtmani olib ketmoqda',
        courierStatusType: 'warn',
    },
    'TX-9905': {
        statusLabel: 'Yangi',
        statusType: 'new',
        items: [
            { qty: '1x', name: 'Taksi xizmati (Chevrolet Gentra)', price: '32,000 UZS' },
        ],
        subtotal: '32,000 UZS',
        delivery: '0 UZS',
        total: '32,000 UZS',
        clientName: 'Dilshod Tojiev',
        clientPhone: '+998 97 450 11 22',
        address: 'Aeroport Terminal 2',
        courierName: 'Fayzulla Karimov',
        courierId: 'CR-1207',
        courierTransport: 'Skuter',
        courierPhone: '+998 97 450 11 22',
        courierStatus: 'Kuryer biriktirilmoqda',
        courierStatusType: 'warn',
    },
    'CR-4028': {
        statusLabel: 'Bekor qilindi',
        statusType: 'cancel',
        items: [
            { qty: '1x', name: 'Hujjatlar yetkazish (Kuryerlik)', price: '18,000 UZS' },
        ],
        subtotal: '18,000 UZS',
        delivery: '0 UZS',
        total: '18,000 UZS',
        clientName: 'Zuhra Karimova',
        clientPhone: '+998 93 540 88 99',
        address: 'Oloy bozori, Blok B',
        courierName: 'Diyor Ismoilov',
        courierId: 'CR-1211',
        courierTransport: 'Avtomobil',
        courierPhone: '+998 93 540 88 99',
        courierStatus: 'Mijoz tomonidan bekor qilindi',
        courierStatusType: 'cancel',
    },
    'TX-9901': {
        statusLabel: 'Bajarildi',
        statusType: 'done',
        items: [
            { qty: '1x', name: 'Taksi xizmati (Chevrolet Cobalt)', price: '19,000 UZS' },
        ],
        subtotal: '19,000 UZS',
        delivery: '2,000 UZS',
        total: '21,000 UZS',
        clientName: 'Sherzod Umarov',
        clientPhone: '+998 90 990 00 11',
        address: 'Yunusobod krug',
        courierName: 'Sherzod Tojiev',
        courierId: 'CR-1215',
        courierTransport: 'Piyoda',
        courierPhone: '+998 90 990 00 11',
        courierStatus: 'Safar yakunlandi',
        courierStatusType: 'ok',
    },
}

const OrderDetails = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const order = ordersData[id]

    if (!order) {
        return (
            <div className="od-page">
                <button className="od-back" onClick={() => navigate('/orders')}>
                    <ArrowLeft size={16} />
                    Orqaga
                </button>
                <p>Buyurtma topilmadi.</p>
            </div>
        )
    }

    return (
        <div className="od-page">

            <button className="od-back" onClick={() => navigate('/orders')}>
                <ArrowLeft size={16} />
                Orqaga
            </button>

            <div className="od-col">
                <div className="od-card">

                    <div className="od-card__head">
                        <h3 className="od-card__title">Buyurtma tarkibi</h3>
                        <b className={`od-status od-status--${order.statusType}`}>{order.statusLabel}</b>
                    </div>

                    {order.items.map((item, i) => (
                        <div className="od-item" key={i}>
                            <span className="od-item__name"><b>{item.qty}</b>{item.name}</span>
                            <span className="od-item__price">{item.price}</span>
                        </div>
                    ))}

                    <div className="od-sums">
                        <div className="od-sum">
                            <span>Oraliq jami:</span>
                            <span>{order.subtotal}</span>
                        </div>
                        <div className="od-sum">
                            <span>Yetkazib berish haqi:</span>
                            <span>{order.delivery}</span>
                        </div>
                        <div className="od-sum od-sum--total">
                            <span>Jami to'lov:</span>
                            <span>{order.total}</span>
                        </div>
                    </div>

                </div>

                <div className="od-line"></div>
            </div>

         
            <div className="od-col">

                <div className="od-card">
                    <h4 className="od-block-title">Mijoz ma'lumotlari</h4>

                    <div className="od-field">
                        <span className="od-field__label">Mijoz ismi</span>
                        <span className="od-field__value">{order.clientName}</span>
                    </div>
                    <div className="od-field">
                        <span className="od-field__label">Telefon</span>
                        <span className="od-field__value">{order.clientPhone}</span>
                    </div>
                    <div className="od-field">
                        <span className="od-field__label">Yetkazib berish manzili</span>
                        <span className="od-field__value">{order.address}</span>
                    </div>
                </div>

                <div className="od-card">
                    <h4 className="od-block-title">Biriktirilgan kuryer</h4>

                    <div className="od-courier">
                        <img src="/Avatar.png" alt="" className="od-courier__avatar" />
                        <div>
                            <p className="od-courier__name">{order.courierName}</p>
                            <p className="od-courier__meta">ID: #{order.courierId} • {order.courierTransport}</p>
                        </div>
                    </div>

                    <div className="od-divider"></div>

                    <div className="od-field">
                        <span className="od-field__label">Kuryer telefoni</span>
                        <span className="od-field__value">{order.courierPhone}</span>
                    </div>
                    <div className="od-field">
                        <span className="od-field__label">Hozirgi holat</span>
                        <span className={`od-field__value od-field__value--${order.courierStatusType}`}>
                            {order.courierStatus}
                        </span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default OrderDetails