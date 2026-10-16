import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ArrowLeft, ArrowRight, Upload, Image as ImageIcon, Check, Clock, Tag, MapPin, FileText } from 'lucide-react'
import { Field, Steps } from '../components/store-ui'
import { CATEGORIES } from '../store-categories'
import { DRAFT_KEY, saveStore } from '../store-data'
import '../styles/StoreFlow.css'

const EMPTY = { type: 'market', name: '', legalName: '', taxId: '', phone: '', address: '', hours: '08:00–23:00', commission: '12', minimum: '30000', region: 'Chilonzor', delivery: '25–35', lat: '', lng: '', logo: '', cover: '', documents: [], productsNote: '' }
function initialDraft() {
    try { const saved = JSON.parse(localStorage.getItem(DRAFT_KEY)); return { ...EMPTY, ...saved, documents: saved?.documents || [] } } catch { return EMPTY }
}

export default function StoreCreate() {
    const { t } = useTranslation()
    const f = key => t(`storeFlow.${key}`)
    const navigate = useNavigate()
    const [data, setData] = useState(initialDraft)
    const [step, setStep] = useState(0)
    const [message, setMessage] = useState('')
    const [error, setError] = useState('')
    const [coordinates, setCoordinates] = useState(false)
    const update = (key, value) => { setData(prev => ({ ...prev, [key]: value })); setMessage('') }
    const input = key => ({ value: data[key], onChange: event => update(key, event.target.value) })
    const category = data.type === 'other' ? f('other') : t(`stores.categories.${data.type}`)
    const complete = [!!data.type, ['name', 'legalName', 'taxId', 'phone', 'address'].every(key => data[key].trim()), !!data.hours && !!data.region && step > 0, data.documents.length > 0, !!data.productsNote]
    const count = complete.filter(Boolean).length
    const labels = ['basic', 'location', 'documents', 'products'].map(key => f(key))

    async function uploadImage(event, key) {
        const file = event.target.files[0]
        if (!file) return
        if (!['image/png', 'image/jpeg', 'image/webp'].includes(file.type) || file.size > 1024 * 1024) { setError(f('imageLimit')); return }
        const reader = new FileReader()
        reader.onload = () => { update(key, reader.result); setError('') }
        reader.onerror = () => setError(f('invalidFile'))
        reader.readAsDataURL(file)
    }
    function saveDraft() {
        try { localStorage.setItem(DRAFT_KEY, JSON.stringify(data)); setMessage(f('draftSaved')); setError('') }
        catch { setError(f('saveFailed')) }
    }
    function next(event) {
        event.preventDefault(); setError(''); setMessage('')
        if (step === 0 && !/^\d{9}$/.test(data.taxId.replace(/\s/g, ''))) { setError(f('invalidTaxId')); return }
        if (step < 3) { setStep(step + 1); return }
        try { saveStore(data) } catch { setError(f('saveFailed')); return }
        try { localStorage.removeItem(DRAFT_KEY) } catch { /* The store was saved successfully. */ }
        navigate('/store', { state: { storeCreated: true } })
    }

    return <div className="sf-page">
        <div className="sf-breadcrumb"><Link to="/store"><ArrowLeft size={15} />{t('stores.title')}</Link><span>/</span><strong>{f('newStore')}</strong></div>
        <Steps active={step} labels={labels} />
        <div className="sf-create-grid">
            <form className="sf-card sf-main-form" onSubmit={next}>
                {step === 0 && <>
                    <h2>{f('storeType')}</h2><p className="sf-muted">{f('typeHint')}</p>
                    <div className="sf-categories">{CATEGORIES.map(([key, Icon, color]) => <button type="button" key={key} className={`sf-category ${data.type === key ? 'is-selected' : ''}`} aria-pressed={data.type === key} onClick={() => update('type', key)}><span className={`st-store__icon st-store__icon--${color}`}><Icon size={20} /></span><span>{key === 'other' ? f('other') : t(`stores.categories.${key}`)}</span></button>)}</div>
                    <div className="sf-divider" /><h2>{f('basic')}</h2>
                    <div className="sf-fields">
                        <Field label={f('name')} required {...input('name')} placeholder="Korzinka — Chilonzor" maxLength={100} />
                        <Field label={f('legalName')} required {...input('legalName')} placeholder={'“Anglesey Food” MChJ'} maxLength={120} />
                        <Field label={f('taxId')} required {...input('taxId')} pattern="[0-9 ]{9,12}" title={f('taxHint')} placeholder="305 123 456" />
                        <Field label={f('phone')} required {...input('phone')} type="tel" pattern="\+?[0-9 ()-]{9,20}" placeholder="+998 71 200 00 00" />
                        <div className="sf-full"><Field label={f('address')} required {...input('address')} placeholder={f('addressPlaceholder')} maxLength={200} /></div>
                    </div>
                    <div className="sf-fields sf-fields--three">
                        <Field label={f('hours')} {...input('hours')} />
                        <Field label={f('commission')} type="number" min="0" max="100" step="0.1" {...input('commission')} />
                        <Field label={f('minimum')} type="number" min="0" {...input('minimum')} />
                    </div>
                </>}
                {step === 1 && <>
                    <h2>{f('location')}</h2><p className="sf-muted">{f('locationHint')}</p>
                    <div className="sf-fields">
                        <Field label={f('region')} required {...input('region')} />
                        <Field label={f('hours')} required {...input('hours')} placeholder="08:00–23:00" />
                        <div className="sf-full"><Field label={f('address')} required {...input('address')} /></div>
                        <Field label={f('delivery')} {...input('delivery')} placeholder="25–35" />
                    </div>
                    <button type="button" className="sf-map-button" onClick={() => setCoordinates(!coordinates)}><MapPin size={18} />{f('coordinates')}</button>
                    {coordinates && <div className="sf-fields"><Field label={f('latitude')} type="number" min="-90" max="90" step="any" {...input('lat')} /><Field label={f('longitude')} type="number" min="-180" max="180" step="any" {...input('lng')} /></div>}
                </>}
                {step === 2 && <>
                    <h2>{f('documents')}</h2><p className="sf-muted">{f('documentsHint')}</p>
                    <label className="sf-drop"><Upload size={23} /><strong>{f('uploadDocuments')}</strong><small>PDF, PNG, JPG · {f('optional')}</small><input type="file" multiple accept=".pdf,.png,.jpg,.jpeg" onChange={event => { const files = [...event.target.files]; if (files.some(file => file.size > 20 * 1024 * 1024)) { setError(f('fileTooLarge')); return } update('documents', files.map(file => ({ name: file.name, size: file.size }))); setError('') }} /></label>
                    <p className="sf-muted sf-note">{f('documentLocal')}</p>
                    {data.documents.map((file, index) => <div className="sf-document" key={`${file.name}-${index}`}><FileText size={18} /><span>{file.name}</span><button type="button" className="sf-text-button" onClick={() => update('documents', data.documents.filter((_, i) => i !== index))}>{f('remove')}</button></div>)}
                </>}
                {step === 3 && <>
                    <h2>{f('products')}</h2><p className="sf-muted">{f('productsHint')}</p>
                    <div className="sf-review"><strong>{data.name}</strong><span>{category} · {data.address}</span><span>{data.phone} · {data.hours}</span></div>
                    <Field label={f('productsNote')}><textarea rows={5} {...input('productsNote')} placeholder={f('productsNoteHint')} /></Field>
                    <p className="sf-muted sf-note">{f('localOnly')}</p>
                </>}
                {error && <p className="sf-alert sf-alert--error" role="alert">{error}</p>}
                {message && <p className="sf-alert" role="status">{message}</p>}
                <div className="sf-form-footer">
                    {step ? <button type="button" className="st-btn" onClick={() => setStep(step - 1)}><ArrowLeft size={15} />{f('back')}</button> : <Link to="/store" className="st-btn">{f('cancel')}</Link>}
                    <div><button type="button" className="st-btn sf-soft" onClick={saveDraft}>{f('saveDraft')}</button><button className="st-btn st-btn--primary" type="submit">{step === 3 ? f('create') : f('next')}<ArrowRight size={16} /></button></div>
                </div>
            </form>
            <aside className="sf-aside">
                <section className="sf-card sf-preview"><div className="sf-preview-head"><strong>{f('preview')}</strong><span className="sf-live">● {f('live')}</span></div><div className="sf-cover">{data.cover ? <img src={data.cover} alt={f('cover')} /> : <><ImageIcon size={24} /><span>{f('cover')} (1200×600)</span></>}</div><div className="sf-preview-body"><div className="sf-preview-name"><div className="sf-preview-logo">{data.logo ? <img src={data.logo} alt={f('logo')} /> : (data.name[0] || 'K')}</div><div><strong>{data.name || f('newStore')}</strong><small>★ {f('new')} · {category}</small></div></div><div className="sf-pills"><span><Clock size={12} />{data.delivery} {f('minutes')}</span><span><Tag size={12} />{f('min')} {Number(data.minimum || 0).toLocaleString()}</span></div></div></section>
                <section className="sf-card"><h3>{f('branding')}</h3><div className="sf-upload-pair">{['logo', 'cover'].map(key => <label className="sf-upload" key={key}>{data[key] ? <img src={data[key]} alt={f(key)} /> : <Upload size={19} />}<strong>{f(key)}</strong><small>{key === 'logo' ? '512×512' : '1200×600'} · PNG</small><input type="file" accept="image/png,image/jpeg,image/webp" onChange={event => uploadImage(event, key)} /></label>)}</div><p className="sf-muted sf-note">{f('imageLimit')}</p></section>
                <section className="sf-card"><div className="sf-progress-head"><h3>{f('completion')}</h3><span>{count} / 5</span></div><progress value={count} max={5} />{['storeType', 'basic', 'location', 'documents', 'products'].map((key, i) => <div className={`sf-checklist ${complete[i] ? 'is-done' : ''}`} key={key}><span>{complete[i] && <Check size={11} />}</span>{f(key)}</div>)}</section>
            </aside>
        </div>
    </div>
}
