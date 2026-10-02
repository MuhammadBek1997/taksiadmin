import React from 'react'
import '../styles/Settings.css'
import { useTranslation } from 'react-i18next'

const Settings = () => {
    const { t } = useTranslation()

    return (
        <>
            <div className="overal-div">
                <div className="All">
                    <div className="contact">
                        <h3>{t('settings.general.title')}</h3>

                        <div className='input-cont'>
                            <div className='input1'>
                                <p>{t('settings.general.companyName')}</p>
                                <input type="text" placeholder={t('settings.general.companyNamePlaceholder')} />
                            </div>
                            <div className='input1'>
                                <p>{t('settings.general.phone')}</p>
                                <input type="text" placeholder={t('settings.general.phonePlaceholder')} />
                            </div>
                        </div>

                        <div className="input-cont2">
                            <div className="input2">
                                <p>{t('settings.general.timezone')}</p>
                                <input type="text" placeholder={t('settings.general.timezone')} />
                            </div>
                        </div>

                        <div className="div-for-button">
                            <button>
                                {t('settings.general.save')}
                            </button>
                        </div>
                    </div>
                </div>
                <div className="middle">
                    <div className="comition">
                        <h3>{t('settings.commission.title')}</h3>

                        <div className='input-cont'>
                            <div className='input1'>
                                <p>{t('settings.commission.taxi')}</p>
                                <input type="text" placeholder='10.0' />
                            </div>
                            <div className='input1'>
                                <p>{t('settings.commission.courier')}</p>
                                <input type="text" placeholder='15.0' />
                            </div>
                        </div>

                        <div className="div-for-button2">
                            <button>
                                {t('settings.commission.update')}
                            </button>
                        </div>
                    </div>
                </div>

                <div className="END">
                    <div className="left-part">
                        <h3>{t('settings.notifications.title')}</h3>

                        <div className="line">
                            <p>{t('settings.notifications.newOrderSms')}</p>
                            <label className="switch">
                                <input type="checkbox" defaultChecked />
                                <span className="slider"></span>
                            </label>
                        </div>

                        <div className="line">
                            <p>{t('settings.notifications.clientPush')}</p>
                            <label className="switch">
                                <input type="checkbox" defaultChecked />
                                <span className="slider"></span>
                            </label>
                        </div>

                        <div className="line">
                            <p>{t('settings.notifications.weeklyEmail')}</p>
                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider"></span>
                            </label>
                        </div>
                    </div>

                    <div className="right-part">
                        <h3>{t('settings.security.title')}</h3>
                        <div className="input1">
                            <p>{t('settings.security.currentPassword')}</p>
                            <input type="password" />
                        </div>
                        <div className="input1">
                            <p>{t('settings.security.newPassword')}</p>
                            <input type="password" placeholder={t('settings.security.newPasswordPlaceholder')} />
                        </div>
                        <div className="line">
                            <p>{t('settings.security.twoFA')}</p>
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