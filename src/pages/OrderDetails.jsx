import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import '../styles/OrderDetails.css'

const OrderDetails = () => {
    const navigate = useNavigate()

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
                        <b className="od-status">Jarayonda</b>
                    </div>

                    <div className="od-item">
                        <span className="od-item__name"><b>2x</b>Double Cheeseburger (Evos)</span>
                        <span className="od-item__price">44,000 UZS</span>
                    </div>
                    <div className="od-item">
                        <span className="od-item__name"><b>1x</b>Kartoshka Fri</span>
                        <span className="od-item__price">12,000 UZS</span>
                    </div>
                    <div className="od-item">
                        <span className="od-item__name"><b>1x</b>Coca-Cola 1.5L</span>
                        <span className="od-item__price">10,000 UZS</span>
                    </div>

                    <div className="od-sums">
                        <div className="od-sum">
                            <span>Oraliq jami:</span>
                            <span>66,000 UZS</span>
                        </div>
                        <div className="od-sum">
                            <span>Yetkazib berish haqi:</span>
                            <span>15,000 UZS</span>
                        </div>
                        <div className="od-sum od-sum--total">
                            <span>Jami to'lov:</span>
                            <span>81,000 UZS</span>
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
                        <span className="od-field__value">Farrux Aliev</span>
                    </div>
                    <div className="od-field">
                        <span className="od-field__label">Telefon</span>
                        <span className="od-field__value">+998 90 911 88 44</span>
                    </div>
                    <div className="od-field">
                        <span className="od-field__label">Yetkazib berish manzili</span>
                        <span className="od-field__value">Yunusobod tumani, 4-mavze, 12-uy, 45-xonadon</span>
                    </div>
                </div>

                <div className="od-card">
                    <h4 className="od-block-title">Biriktirilgan kuryer</h4>

                    <div className="od-courier">
                        <img src="/Avatar.png" alt="" className="od-courier__avatar" />
                        <div>
                            <p className="od-courier__name">Olim Qodirov</p>
                            <p className="od-courier__meta">ID: #CR-1204 • Motoroller</p>
                        </div>
                    </div>

                    <div className="od-divider"></div>

                    <div className="od-field">
                        <span className="od-field__label">Kuryer telefoni</span>
                        <span className="od-field__value">+998 99 110 50 60</span>
                    </div>
                    <div className="od-field">
                        <span className="od-field__label">Hozirgi holat</span>
                        <span className="od-field__value od-field__value--warn">Buyurtmani olib ketmoqda</span>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default OrderDetails