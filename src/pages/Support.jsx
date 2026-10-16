import React from 'react'
import { useTranslation } from 'react-i18next'
import '../styles/Support.css'

function Support() {
  const { t } = useTranslation()

  return (
    <div className="support">
      {/* ===== Chap: murojaatlar ro'yxati ===== */}
      <aside className="sup-list">
        <div className="sup-list-head">
          <h2>{t('support.title')}</h2>
          <button type="button" className="sup-square-btn">
            <img src="/images/sliders-dark.png" alt="" />
          </button>
        </div>

        <div className="sup-tabs">
          <button type="button" className="active">{t('support.tabs.open')} <em>12</em></button>
          <button type="button">{t('support.tabs.inProgress')} <em>5</em></button>
          <button type="button">{t('support.tabs.closed')}</button>
        </div>

        <div className="sup-search">
          <img src="/images/search.png" alt="" />
          <input type="text" placeholder={t('support.searchPlaceholder')} />
        </div>

        <div className="sup-items">
          <div className="sup-item active">
            <span className="sup-avatar sup-avatar--yellow">AT</span>
            <div className="sup-item-body">
              <div className="sup-item-top">
                <b>Alisher Temirov</b>
                <span>10:44</span>
              </div>
              <p className="sup-item-msg">
                <span className="sup-tag sup-tag--driver">{t('support.tags.driver')}</span>
                Balansga pul tushmadi, 2 kundan beri...
              </p>
            </div>
            <span className="sup-unread">2</span>
          </div>
          <div className="sup-item">
            <span className="sup-avatar sup-avatar--blue">OQ</span>
            <div className="sup-item-body">
              <div className="sup-item-top">
                <b>Olim Qodirov</b>
                <span>10:40</span>
              </div>
              <p className="sup-item-msg">
                <span className="sup-tag sup-tag--courier">{t('support.tags.courier')}</span>
                Mijoz manzilda yo'q, nima qil...
              </p>
            </div>
            <span className="sup-unread">1</span>
          </div>
          <div className="sup-item">
            <span className="sup-avatar sup-avatar--green">MS</span>
            <div className="sup-item-body">
              <div className="sup-item-top">
                <b>Malika Saidova</b>
                <span>10:31</span>
              </div>
              <p className="sup-item-msg">
                <span className="sup-tag sup-tag--client">{t('support.tags.client')}</span>
                Buyurtma #CR-4029 kechikyapti
              </p>
            </div>
          </div>
          <div className="sup-item">
            <span className="sup-avatar sup-avatar--yellow">K—</span>
            <div className="sup-item-body">
              <div className="sup-item-top">
                <b>Korzinka — Chilonzor</b>
                <span>10:12</span>
              </div>
              <p className="sup-item-msg">
                <span className="sup-tag sup-tag--store">{t('support.tags.store')}</span>
                Import faylida xato chiqyapti
              </p>
            </div>
          </div>
          <div className="sup-item">
            <span className="sup-avatar sup-avatar--purple">BK</span>
            <div className="sup-item-body">
              <div className="sup-item-top">
                <b>Bobur Karimov</b>
                <span>09:58</span>
              </div>
              <p className="sup-item-msg">
                <span className="sup-tag sup-tag--client">{t('support.tags.client')}</span>
                Haydovchi qo'pol muomala qildi
              </p>
            </div>
          </div>
          <div className="sup-item">
            <span className="sup-avatar sup-avatar--yellow">SA</span>
            <div className="sup-item-body">
              <div className="sup-item-top">
                <b>Sardor Ahmedov</b>
                <span>09:20</span>
              </div>
              <p className="sup-item-msg">
                <span className="sup-tag sup-tag--driver">{t('support.tags.driver')}</span>
                Ilova yangilanmayapti
              </p>
            </div>
          </div>
        </div>
      </aside>

      {/* ===== O'rta: chat ===== */}
      <section className="sup-chat">
        <div className="sup-chat-head">
          <span className="sup-avatar sup-avatar--yellow">AT</span>
          <div className="sup-chat-user">
            <b>Alisher Temirov</b>
            <span className="sup-chat-status">
              <i></i>
              {t('drivers.statuses.online')} · {t('support.tags.driver')} · #DR-8890 · {t('support.ticket')} #SP-1042
            </span>
          </div>
          <div className="sup-chat-actions">
            <button type="button" className="sup-square-btn">
              <img src="/images/phone.png" alt="" />
            </button>
            <button type="button" className="sup-close-btn">
              <img src="/images/check-white.png" alt="" />
              {t('support.close')}
            </button>
          </div>
        </div>

        <div className="sup-messages">
          <span className="sup-date">{t('support.today')}</span>

          <div className="sup-msg sup-msg--in">
            Assalomu alaykum. 2 kundan beri balansimga pul tushmayapti, 14 ta safar qilganman.
            <span className="sup-time">10:38</span>
          </div>

          <div className="sup-msg sup-msg--out">
            Va alaykum assalom, Alisher! Hozir tekshirib ko'raman. Qaysi kartaga yechmoqchi edingiz?
            <span className="sup-time">10:40 <img src="/images/check-check.png" alt="" /></span>
          </div>

          <div className="sup-msg sup-msg--in">
            Uzcard, oxiri 4417. Ilovada "Kutilmoqda" deb turibdi.
            <span className="sup-time">10:42</span>
          </div>

          <div className="sup-note">
            <img src="/images/wallet-amber.png" alt="" />
            {t('support.paymentSent', { id: '#PAY-77120' })}
          </div>

          <div className="sup-msg sup-msg--in">
            Rahmat, kutyapman. Bugun tushadimi?
            <span className="sup-time">10:44</span>
          </div>

          <p className="sup-typing">{t('support.typing', { name: 'Alisher' })}</p>
        </div>

        <div className="sup-composer">
          <div className="sup-quick">
            <button type="button">{t('support.quick.checking')}</button>
            <button type="button">{t('support.quick.until')}</button>
            <button type="button">{t('support.quick.resolved')}</button>
          </div>

          <div className="sup-input">
            <img className="sup-clip" src="/images/paperclip.png" alt="" />
            <input type="text" placeholder={t('support.messagePlaceholder')} />
            <button type="button" className="sup-send">
              <img src="/images/send.png" alt="" />
            </button>
          </div>
        </div>
      </section>

      {/* ===== O'ng: ma'lumot paneli ===== */}
      <aside className="sup-info">
        <span className="sup-avatar sup-avatar--yellow sup-avatar--xl">AT</span>
        <h3 className="sup-info-name">Alisher Temirov</h3>
        <p className="sup-info-phone">+998 90 123 45 67</p>

        <div className="sup-info-badges">
          <span className="sup-pill sup-pill--green"><i></i>{t('drivers.statuses.online')}</span>
          <span className="sup-pill sup-pill--gray"><img src="/images/star.png" alt="" />4.9</span>
        </div>

        <div className="sup-info-actions">
          <button type="button">
            <img src="/images/user.png" alt="" />
            {t('support.profile')}
          </button>
          <button type="button">
            <img src="/images/phone.png" alt="" />
            {t('support.call')}
          </button>
          <button type="button" className="danger">
            <img src="/images/ban-red.png" alt="" />
            {t('support.block')}
          </button>
        </div>

        <div className="sup-card sup-card--gray">
          <span className="sup-card-title">{t('support.info.title')}</span>
          <dl className="sup-dl">
            <div><dt>{t('support.info.id')}</dt><dd>#SP-1042</dd></div>
            <div><dt>{t('support.info.subject')}</dt><dd>To'lov / balans</dd></div>
            <div><dt>{t('support.info.opened')}</dt><dd>{t('support.today')}, 10:38</dd></div>
            <div><dt>{t('support.info.assignee')}</dt><dd>Shoxrux R.</dd></div>
            <div>
              <dt>{t('support.info.priority')}</dt>
              <dd><span className="sup-pill sup-pill--red"><i></i>{t('support.info.high')}</span></dd>
            </div>
          </dl>
        </div>

        <div className="sup-card sup-card--outline">
          <span className="sup-card-title">{t('support.info.relatedTrip')}</span>
          <div className="sup-trip-top">
            <b>#TX-9902</b>
            <span className="sup-pill sup-pill--green"><i></i>{t('dashboard.statuses.completed')}</span>
          </div>
          <p className="sup-trip-route">Bodomzor → Chilonzor metro</p>
          <p className="sup-trip-price">24,000 UZS · {t('support.today')}, 09:12</p>
        </div>
      </aside>
    </div>
  )
}

export default Support