import { Check } from 'lucide-react'
import { useTranslation } from 'react-i18next'



export function Steps({ labels, active }) {
    const { t } = useTranslation()
    return <ol className="sf-steps">{labels.map((label, index) => <li key={label} className={index === active ? 'is-current' : index < active ? 'is-done' : ''} aria-current={index === active ? 'step' : undefined}>
        <span className="sf-step-number">{index < active ? <Check size={14} /> : index + 1}</span>
        <span><small>{t('storeFlow.step')} {index + 1}</small><strong>{label}</strong></span>
    </li>)}</ol>
}

export function Field({ label, required, children, ...props }) {
    return <label className="sf-field"><span>{label} {required && <b className="sf-required">*</b>}</span>{children || <input required={required} {...props} />}</label>
}
