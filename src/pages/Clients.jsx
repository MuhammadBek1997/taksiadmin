import React from 'react'
import '../styles/Clients.css'

const Clients = () => {
    return (
        <>
            <div className="div-con-all">
                <div className="div-search">
                    <div className="in1">
                        <img src="/search.png" alt="" className='png-search' />
                        <input type="text" placeholder='Ism yoki telefon boyicha qidiruv...' />
                    </div>
                    <div className="in2">
                        <h4>Saralash: Eng faol mijozlar</h4>
                        <img src="" alt="" />
                    </div>
                </div>
                <div className="clients-table">
                    <div className="table-row table-row--head">
                        <p>Mijoz Ismi</p>
                        <p>Telefon Raqami</p>
                        <p>Ro'yxatdan o'tgan sana</p>
                        <p>Jami Buyurtmalar</p>
                        <p>Holati</p>
                        <p className="col-actions">Amallar</p>
                    </div>
                    <div className="table-row">
                        <p className="col-name"><span className="avatar-circle"></span>Jasur Shodiev</p>
                        <p>+998 90 987 65 43</p>
                        <p>10.05.2025</p>
                        <p className="col-bold">42 ta</p>
                        <div className='faol'>
                            Faol
                        </div>
                        <p className="col-actions">
                            <button className="icon-btn"><img src="/pen.png" alt="" /></button>
                            <button className="icon-btn"> <img src="/trash.png" alt="" /></button>
                        </p>
                    </div>
                    <div className="table-row">
                        <p className="col-name"><span className="avatar-circle"></span>Malika Karimova</p>
                        <p>+998 91 123 45 67</p>
                        <p>12.05.2025</p>
                        <p className="col-bold">18 ta</p>
                        <div className='faol'>
                            Faol
                        </div>
                        <p className="col-actions">
                            <button className="icon-btn"><img src="/pen.png" alt="" /></button>
                            <button className="icon-btn"> <img src="/trash.png" alt="" /></button>
                        </p>
                    </div>
                    <div className="table-row">
                        <p className="col-name"><span className="avatar-circle"></span>Bekzod Umarov</p>
                        <p>+998 93 456 78 90</p>
                        <p>15.05.2025</p>
                        <p className="col-bold">5 ta</p>
                        <div className='kutilmoqda'>
                            Kutilmoqda
                        </div>
                        <p className="col-actions">
                            <button className="icon-btn"><img src="/pen.png" alt="" /></button>
                            <button className="icon-btn"> <img src="/trash.png" alt="" /></button>
                        </p>
                    </div>
                    <div className="table-row">
                        <p className="col-name"><span className="avatar-circle"></span>Elena Petrova</p>
                        <p>+998 90 333 22 11</p>
                        <p>20.04.2025</p>
                        <p className="col-bold">124 ta</p>
                        <div className='faol'>
                            Faol
                        </div>
                        <p className="col-actions">
                            <button className="icon-btn"><img src="/pen.png" alt="" /></button>
                            <button className="icon-btn"> <img src="/trash.png" alt="" /></button>
                        </p>
                    </div>
                    <div className="table-row">
                        <p className="col-name"><span className="avatar-circle"></span>Otabek Yuldashev</p>
                        <p>+998 99 888 77 66</p>
                        <p>01.06.2025</p>
                        <p className="col-bold">0 ta</p>
                        <div className='nofaol'>
                            Nofaol
                        </div>
                        <p className="col-actions">
                            <button className="icon-btn"><img src="/pen.png" alt="" /></button>
                            <button className="icon-btn"> <img src="/trash.png" alt="" /></button>
                        </p>
                    </div>
                </div>
                <div className="table-footer">
                    <p>Jami 1-5 dan 1,420 ta mijozdan ko'rsatilmoqda</p>
                    <div className="pagination">
                        <button className="page-btn">Orqaga</button>
                        <button className="page-btn page-btn--active">1</button>
                        <button className="page-btn">2</button>
                        <button className="page-btn">3</button>
                        <button className="page-btn">Keyingi</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Clients