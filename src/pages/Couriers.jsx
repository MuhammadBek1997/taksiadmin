import React from 'react'
import '../styles/Couriers.css'

const Couriers = () => {
    return (
        <div className="couriers-div">
            <input type="text" placeholder="Ism yoki transport raqami bo'yicha..." className="input-transport" />

            <div className="saralash">
                Saralash: Transport
                <img src="/arrow.png" alt="" />
            </div>
            <div className="new-kuryer">
                <img src="/plus.png" alt="" />
                Yangi kuryer
            </div>
            <div className="clients-table">
                <div className="table-row table-row--head">
                    <p>Kuryer Ismi</p>
                    <p>Telefon raqami</p>
                    <p>Transport Turi</p>
                    <p>Holati</p>
                    <p>Reyting</p>
                    <p className="col-actions">Amallar</p>
                </div>
                <div className="table-row">
                    <p className="col-name"><span className="avatar-circle"></span>Jasur Shokirov</p>
                    <p>+998 90 321 44 55</p>
                    <p className="col-transport">
                        <img src="/box.png" alt="" />
                        Velosiped (Green Bike)
                    </p>
                    <div className="faol">Online</div>
                    <p className="col-bold">
                        <img src="/star.png" alt="" />
                        4.9
                    </p>
                    <p className="col-actions">
                        <button className="icon-btn"><img src="/pen.png" alt="" /></button>
                        <button className="icon-btn"><img src="/trash.png" alt="" /></button>
                    </p>
                </div>
                <div className="table-row">
                    <p className="col-name"><span className="avatar-circle"></span>Olim Qodirov</p>
                    <p>+998 99 110 50 60</p>
                    <p className="col-transport">
                        <img src="/box.png" alt="" />
                        Motoroller (Yadea)
                    </p>
                    <div className="waiting">Jarayonda</div>
                    <p className="col-bold">
                        <img src="/star.png" alt="" />
                        4.7
                    </p>
                    <p className="col-actions">
                        <button className="icon-btn"><img src="/pen.png" alt="" /></button>
                        <button className="icon-btn"><img src="/trash.png" alt="" /></button>
                    </p>
                </div>
                <div className="table-row">
                    <p className="col-name"><span className="avatar-circle"></span>Fayzulla Karimov</p>
                    <p>+998 97 450 11 22</p>
                    <p className="col-transport">
                        <img src="/box.png" alt="" />
                        Skuter (Honda Tact)
                    </p>
                    <div className="faol">Online</div>
                    <p className="col-bold">
                        <img src="/star.png" alt="" />
                        4.8
                    </p>
                    <p className="col-actions">
                        <button className="icon-btn"><img src="/pen.png" alt="" /></button>
                        <button className="icon-btn"><img src="/trash.png" alt="" /></button>
                    </p>
                </div>
                <div className="table-row">
                    <p className="col-name"><span className="avatar-circle"></span>Diyor Ismoilov</p>
                    <p>+998 93 540 88 99</p>
                    <p className="col-transport">
                        <img src="/box.png" alt="" />
                        Chevrolet Spark (01 | O 202 XX)
                    </p>
                    <div className="nofaol">Offline</div>
                    <p className="col-bold">
                        <img src="/star.png" alt="" />
                        4.5
                    </p>
                    <p className="col-actions">
                        <button className="icon-btn"><img src="/pen.png" alt="" /></button>
                        <button className="icon-btn"><img src="/trash.png" alt="" /></button>
                    </p>
                </div>
                <div className="table-row">
                    <p className="col-name"><span className="avatar-circle"></span>Sherzod Tojiev</p>
                    <p>+998 90 990 00 11</p>
                    <p className="col-transport">
                        <img src="/box.png" alt="" />
                        Piyoda (Sumka bilan)
                    </p>
                    <div className="faol">Online</div>
                    <p className="col-bold">
                        <img src="/star.png" alt="" />
                        4.6
                    </p>
                    <p className="col-actions">
                        <button className="icon-btn"><img src="/pen.png" alt="" /></button>
                        <button className="icon-btn"><img src="/trash.png" alt="" /></button>
                    </p>
                </div>
            </div>
            <div className="table-footer">
                <p>Jami 1-5 dan 84 ta kuryerdan ko'rsatilmoqda</p>
                <div className="pagination">
                    <button className="page-btn">Orqaga</button>
                    <button className="page-btn page-btn--active">1</button>
                    <button className="page-btn">2</button>
                    <button className="page-btn">Keyingi</button>
                </div>
            </div>
        </div>
    )
}

export default Couriers