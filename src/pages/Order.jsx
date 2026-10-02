import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Order.css'

const Order = () => {
    const navigate = useNavigate()

    return (
        <div className="ord-page">

            <div className="ord-toolbar">
                <div className="ord-search">
                    <img src="/search.png" alt="" className="ord-search__icon" />
                    <input type="text" placeholder="ID, mijoz yoki manzil bo'yicha..." />
                </div>

                <div className="ord-filters">
                    <button className="ord-filter ord-filter--active">Barchasi</button>
                    <button className="ord-filter">Yangi</button>
                    <button className="ord-filter">Jarayonda</button>
                    <button className="ord-filter">Yetkazildi</button>
                    <button className="ord-filter">Bekor qilindi</button>
                </div>

                <div className="ord-date">
                    <span>Sana: Bugun</span>
                    <img src="/arrow.png" alt="" />
                </div>
            </div>

            <div className="ord-table">

                <div className="ord-row ord-row--head">
                    <span>Order ID</span>
                    <span>Mijoz</span>
                    <span>Buyurtma tarkibi</span>
                    <span>Yetkazish manzili</span>
                    <span>Narx</span>
                    <span>Holati</span>
                    <span>Vaqt</span>
                    <span className="ord-right">Amal</span>
                </div>

                <div className="ord-row ord-row--link" onClick={() => navigate('/orders/TX-9902')}>
                    <span className="ord-id">#TX-9902</span>
                    <span className="ord-client">Malika Axmedova</span>
                    <span className="ord-muted">Chevrolet Cobalt (Xizmat)</span>
                    <span>Chilonzor metro bekati</span>
                    <span className="ord-price">24,000 UZS</span>
                    <span><b className="ord-status ord-status--done">Bajarildi</b></span>
                    <span className="ord-muted">10:42</span>
                    <span className="ord-right"><button className="ord-detail">Batafsil</button></span>
                </div>

                <div className="ord-row ord-row--link" onClick={() => navigate('/orders/CR-4029')}>
                    <span className="ord-id">#CR-4029</span>
                    <span className="ord-client">Farrux Aliev</span>
                    <span className="ord-muted">Fast-Food (Yetkazish)</span>
                    <span>Yunusobod 4-mavze, 12-uy, 45-xonadon</span>
                    <span className="ord-price">45,000 UZS</span>
                    <span><b className="ord-status ord-status--progress">Jarayonda</b></span>
                    <span className="ord-muted">10:39</span>
                    <span className="ord-right"><button className="ord-detail">Batafsil</button></span>
                </div>

                <div className="ord-row ord-row--link" onClick={() => navigate('/orders/TX-9905')}>
                    <span className="ord-id">#TX-9905</span>
                    <span className="ord-client">Dilshod Tojiev</span>
                    <span className="ord-muted">Chevrolet Gentra (Xizmat)</span>
                    <span>Aeroport Terminal 2</span>
                    <span className="ord-price">32,000 UZS</span>
                    <span><b className="ord-status ord-status--new">Yangi</b></span>
                    <span className="ord-muted">10:35</span>
                    <span className="ord-right"><button className="ord-detail">Batafsil</button></span>
                </div>

                <div className="ord-row ord-row--link" onClick={() => navigate('/orders/CR-4028')}>
                    <span className="ord-id">#CR-4028</span>
                    <span className="ord-client">Zuhra Karimova</span>
                    <span className="ord-muted">Hujjatlar (Kuryerlik)</span>
                    <span>Oloy bozori, Blok B</span>
                    <span className="ord-price">18,000 UZS</span>
                    <span><b className="ord-status ord-status--cancel">Bekor qilindi</b></span>
                    <span className="ord-muted">10:22</span>
                    <span className="ord-right"><button className="ord-detail">Batafsil</button></span>
                </div>

                <div className="ord-row ord-row--link" onClick={() => navigate('/orders/TX-9901')}>
                    <span className="ord-id">#TX-9901</span>
                    <span className="ord-client">Sherzod Umarov</span>
                    <span className="ord-muted">Chevrolet Cobalt (Xizmat)</span>
                    <span>Yunusobod krug</span>
                    <span className="ord-price">21,000 UZS</span>
                    <span><b className="ord-status ord-status--done">Bajarildi</b></span>
                    <span className="ord-muted">10:10</span>
                    <span className="ord-right"><button className="ord-detail">Batafsil</button></span>
                </div>

            </div>

            <div className="ord-footer">
                <p>Jami 1-5 dan 1,420 ta buyurtmadan ko'rsatilmoqda</p>
                <div className="ord-pagination">
                    <button className="ord-page-btn">Orqaga</button>
                    <button className="ord-page-btn ord-page-btn--active">1</button>
                    <button className="ord-page-btn">2</button>
                    <button className="ord-page-btn">3</button>
                    <button className="ord-page-btn">Keyingi</button>
                </div>
            </div>

        </div>
    )
}

export default Order