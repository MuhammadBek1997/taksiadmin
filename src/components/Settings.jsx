import React from 'react'
import '../styles/Settings.css'

const Settings = () => {
    return (
        <>
            <div className="overal-div">
                <div className="All">
                    <div className="contact">
                        <h3>Umumiy Sozlamalar</h3>

                        <div className='input-cont'>
                            <div className='input1'>
                                <p>Kompaniya nomi</p>
                                <input type="text" placeholder='Karavan Logistics LLC' />
                            </div>
                            <div className='input1'>
                                <p>Aloqa telefoni</p>
                                <input type="text" placeholder='+998 71 200 00 20' />
                            </div>
                        </div>

                        <div className="input-cont2">
                            <div className="input2">
                                <p>Toshkent (GMT+5)</p>
                                <input type="text" placeholder='Toshkent (GMT+5)' />
                            </div>

                        </div>

                        <div className="div-for-button">
                            <button>
                                Saqlash
                            </button>
                        </div>
                    </div>
                </div>
                <div className="middle">
                    <div className="comition">
                        <h3>Komissiya va Foizlar</h3>

                        <div className='input-cont'>
                            <div className='input1'>
                                <p>Taksi komissiyasi (%)</p>
                                <input type="text" placeholder='10.0' />
                            </div>
                            <div className='input1'>
                                <p>Kuryerlik komissiyasi (%)</p>
                                <input type="text" placeholder='15.0' />
                            </div>
                        </div>

                        <div className="div-for-button2">
                            <button>
                                Yangilash
                            </button>
                        </div>
                    </div>
                </div>

                <div className="END">
                    <div className="left-part">
                        <h3>Bildirishnomalar (SMS/Push)</h3>

                        <div className="line">
                            <p>Yangi buyurtma kelganda SMS yuborish</p>
                            <label className="switch">
                                <input type="checkbox" defaultChecked />
                                <span className="slider"></span>
                            </label>
                        </div>

                        <div className="line">
                            <p>Mijoz uchun push-xabarlar</p>
                            <label className="switch">
                                <input type="checkbox" defaultChecked />
                                <span className="slider"></span>
                            </label>
                        </div>

                        <div className="line">
                            <p>Haftalik hisobotlarni elektron pochtaga yuborish</p>
                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider"></span>
                            </label>
                        </div>
                    </div>

                    <div className="right-part">
                        <h3>Xavfsizlik Sozlamalari</h3>
                        <div className="input1">
                            <p>Joriy parol</p>
                            <input type="password" />
                        </div>
                        <div className="input1">
                            <p>Yangi parol</p>
                            <input type="password" placeholder="Yangi parolni kiriting" />
                        </div>
                        <div className="line">
                            <p>Ikki bosqichli autentifikatsiya (2FA)</p>
                            <label className="switch">
                                <input type="checkbox" defaultChecked />
                                <span className="slider"></span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>




        </>
    )
}

export default Settings