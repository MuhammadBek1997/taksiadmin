import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ArrowLeft, ArrowRight, Upload, Download, FileSpreadsheet, Check, X, AlertCircle, Package, Utensils, Pill, Tag, Store, Link as LinkIcon, Copy, FileText } from 'lucide-react'
import { Steps } from '../components/store-ui'
import { BASE_STORES, IMPORT_SCHEMAS, readStoreData, readImportFile, requiredFields, validateImport, saveImport, downloadTemplate } from '../store-data'
import '../styles/StoreFlow.css'

const TYPES = [['products', Package], ['menu', Utensils], ['medicines', Pill], ['categories', Tag], ['inventory', FileText], ['stores', Store]]

export default function StoreImport() {
    const { t } = useTranslation()
    const f = key => t(`storeFlow.${key}`)
    const [type, setType] = useState('products')
    const [stores] = useState(() => [...BASE_STORES, ...readStoreData().stores])
    const [storeId, setStoreId] = useState(stores[0].id)
    const [step, setStep] = useState(0)
    const [file, setFile] = useState(null)
    const [table, setTable] = useState({ headers: [], rows: [] })
    const [mapping, setMapping] = useState([])
    const [busy, setBusy] = useState(false)
    const [error, setError] = useState('')
    const [notice, setNotice] = useState('')
    const [imported, setImported] = useState(0)
    const fileInput = useRef(null)
    const schema = IMPORT_SCHEMAS[type]
    const checked = validateImport(table.rows, mapping, type)
    const valid = checked.filter(row => !row.error)
    const invalid = checked.filter(row => row.error)
    const mapped = mapping.filter(Boolean)
    const mappingValid = requiredFields(type).every(key => mapped.includes(key)) && new Set(mapped).size === mapped.length
    const categoryCount = new Set(valid.map(row => row.value.category).filter(Boolean)).size

    function reset() { setFile(null); setTable({ headers: [], rows: [] }); setMapping([]); setStep(0); setError(''); setNotice(''); setImported(0); if (fileInput.current) fileInput.current.value = '' }
    async function upload(selected) {
        if (!selected || busy) return
        setBusy(true); setError(''); setNotice('')
        try {
            const result = await readImportFile(selected)
            const used = new Set()
            const normalize = value => value.toLowerCase().replace(/[^\p{L}\p{N}]/gu, '')
            const aliases = { name: ['nomi', 'mahsulotnomi', 'name', 'productname', 'название'], category: ['kategoriya', 'category', 'категория'], price: ['narx', 'narxsom', 'price', 'цена'], stock: ['qoldiq', 'ombordagiqoldiq', 'stock', 'остаток'], barcode: ['shtrixkod', 'barcode', 'штрихкод'], image: ['rasmhavolasi', 'rasmurl', 'imageurl', 'image', 'ссылканарисунок'], note: ['izoh', 'note', 'примечание'] }
            const nextMapping = result.headers.map(header => {
                const found = schema.find(key => !used.has(key) && [key, f(key), ...(aliases[key] || [])].some(alias => normalize(alias) === normalize(header)))
                if (found) used.add(found)
                return found || ''
            })
            setTable(result); setMapping(nextMapping); setFile(selected); setStep(1)
        } catch (err) { setError(f(['fileType', 'emptyFile', 'fileTooLarge', 'tooManyRows'].includes(err.message) ? err.message : 'invalidFile')) }
        finally { setBusy(false) }
    }
    async function template() {
        setBusy(true); setError('')
        try { await downloadTemplate(type, f) } catch { setError(f('templateFailed')) } finally { setBusy(false) }
    }
    function doImport() {
        if (!mappingValid || !valid.length || step !== 2) return
        try { saveImport(type, type === 'stores' ? null : storeId, valid.map(row => row.value)); setImported(valid.length); setStep(3); setError('') }
        catch { setError(f('saveFailed')) }
    }

    return <div className="sf-page sf-import">
        <div className="sf-import-toolbar"><div className="sf-import-tabs">{TYPES.map(([key, Icon]) => <button key={key} type="button" disabled={busy} className={type === key ? 'is-active' : ''} onClick={() => { setType(key); reset() }}><Icon size={14} />{f(`importTypes.${key}`)}</button>)}</div>{type !== 'stores' && <label className="sf-store-select"><Store size={16} /><select aria-label={f('targetStore')} value={storeId} disabled={busy || step === 3} onChange={event => setStoreId(event.target.value)}>{stores.map(store => <option key={store.id} value={store.id}>{store.name}</option>)}</select></label>}</div>
        <Steps labels={['uploadStep', 'mapStep', 'reviewStep', 'importStep'].map(f)} active={step} />
        <div className="sf-import-grid">
            <aside className="sf-aside">
                <section className="sf-card"><h3>{f('uploadedFile')}</h3>
                    {file && <div className="sf-file"><FileSpreadsheet size={22} /><div><strong>{file.name}</strong><small>{(file.size / 1024).toFixed(1)} KB · {table.rows.length.toLocaleString()} {f('rows')}</small></div><button type="button" aria-label={f('remove')} disabled={busy} onClick={reset}><X size={15} /></button></div>}
                    <label className={`sf-drop ${busy ? 'is-busy' : ''}`} onDragOver={event => event.preventDefault()} onDrop={event => { event.preventDefault(); upload(event.dataTransfer.files[0]) }}><Upload size={22} /><strong>{busy ? f('loading') : file ? f('replaceFile') : f('uploadFile')}</strong><small>.xlsx, .csv · {f('fileLimit')}</small><input ref={fileInput} type="file" accept=".xlsx,.csv" disabled={busy} onChange={event => { upload(event.target.files[0]); event.target.value = '' }} /></label>
                    <button className="st-btn sf-template" disabled={busy} onClick={template}><Download size={15} />{f('template')} (.xlsx)</button>
                </section>
                <section className="sf-card"><h3>{f('otherSources')}</h3>{[[FileSpreadsheet, 'Google Sheets', 'sheetsHint'], [LinkIcon, '1C / API', 'apiHint'], [Copy, f('copyStore'), 'copyHint']].map(([Icon, label, hint]) => <button key={hint} type="button" className="sf-source" onClick={() => setNotice(f(hint))}><Icon size={19} /><span><strong>{label}</strong><small>{f(hint === 'sheetsHint' ? 'byLink' : hint === 'apiHint' ? 'sync' : 'quickCopy')}</small></span><ArrowRight size={15} /></button>)}</section>
                <Link className="sf-back-link" to="/store"><ArrowLeft size={15} />{t('stores.title')}</Link>
            </aside>
            <div className="sf-import-content">
                {notice && <p className="sf-alert" role="status">{notice}</p>}
                {error && <p className="sf-alert sf-alert--error" role="alert">{error}</p>}
                {step === 0 && <section className="sf-card sf-empty"><div className="sf-empty-icon"><FileSpreadsheet size={35} /></div><h2>{f('uploadTitle')}</h2><p>{f('uploadHint')}</p><button className="st-btn st-btn--primary" disabled={busy} onClick={() => fileInput.current?.click()}><Upload size={16} />{f('uploadFile')}</button><small>{f('localOnly')}</small></section>}
                {step === 1 && <section className="sf-card sf-mapping"><div className="sf-mapping-head"><div><h2>{f('mapStep')}</h2><p className="sf-muted">{f('mappingHint')}</p></div><span className="sf-mapped">● {mapped.length} / {table.headers.length} {f('mapped')}</span></div>{table.headers.map((header, i) => <div className="sf-map-row" key={i}><span className="sf-source-column"><FileText size={14} />{header}</span><ArrowRight size={15} /><select aria-label={`${f('mapStep')}: ${header}`} value={mapping[i]} onChange={event => setMapping(prev => prev.map((value, index) => index === i ? event.target.value : value))}><option value="">— {f('skipColumn')} —</option>{schema.map(key => <option key={key} value={key} disabled={mapped.includes(key) && mapping[i] !== key}>{f(key)}{requiredFields(type).includes(key) ? ' *' : ''}</option>)}</select><span className={`sf-map-status ${mapping[i] ? 'is-valid' : ''}`}>{mapping[i] ? <Check size={14} /> : <span>—</span>}</span></div>)}<p className="sf-muted sf-mapping-note">{f('requiredColumns')}: {requiredFields(type).map(f).join(', ')}</p></section>}
                {step === 2 && <section className="sf-card"><h2>{f('reviewStep')}</h2><p className="sf-muted">{f('reviewHint')}</p><div className="sf-review-table"><table><thead><tr><th>#</th><th>{f(type === 'inventory' ? 'barcode' : 'name')}</th><th>{f('result')}</th></tr></thead><tbody>{checked.slice(0, 50).map(row => <tr key={row.row}><td>{row.row}</td><td>{row.value.name || row.value.barcode || '—'}</td><td className={row.error ? 'sf-error-text' : 'sf-success-text'}>{row.error ? f(row.error) : f('valid')}</td></tr>)}</tbody></table></div>{checked.length > 50 && <p className="sf-muted sf-note">{f('firstFifty')}</p>}</section>}
                {step === 3 && <section className="sf-card sf-empty"><div className="sf-success-icon"><Check size={34} /></div><h2>{f('importDone')}</h2><p>{imported.toLocaleString()} {f('importedRows')}</p><small>{f('localOnly')}</small><div className="sf-success-actions"><Link className="st-btn st-btn--primary" to="/store">{t('stores.title')}</Link><button className="st-btn" onClick={reset}>{f('anotherImport')}</button></div></section>}
                {(step === 1 || step === 2) && <><div className="sf-import-stats">{[[f('totalRows'), checked.length, ''], [f('valid'), valid.length, 'green'], [f('invalid'), invalid.length, 'red'], [f('categoriesCount'), categoryCount, 'amber']].map(([label, value, color]) => <div className={`sf-mini-stat ${color}`} key={label}><small>{label}</small><strong>{value.toLocaleString()}</strong></div>)}</div><div className="sf-import-footer"><span><AlertCircle size={15} />{invalid.length ? `${invalid.length} ${f('skipInvalid')}` : f('ready')}</span><div><button className="st-btn" onClick={() => setStep(step - 1)}><ArrowLeft size={15} />{f('back')}</button><button className="st-btn st-btn--primary" disabled={!mappingValid || !valid.length || busy} onClick={() => step === 1 ? setStep(2) : doImport()}>{step === 1 ? f('reviewStep') : `${f('importAction')} (${valid.length.toLocaleString()})`}<ArrowRight size={16} /></button></div></div></>}
            </div>
        </div>
    </div>
}
