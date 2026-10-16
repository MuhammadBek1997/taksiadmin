import { useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { Phone, Mail, Car, Pencil, FileCheck2, Download, X } from 'lucide-react'
import { DriverStatus, driverData } from './drivers-list'
import '../styles/Drivers.css'

export default function DriverProfile() {
  const { id } = useParams()
  const [params, setParams] = useSearchParams()
  const original = driverData.find(d=>d.id===id)
  const [driver, setDriver] = useState(original || driverData[0])
  const [blocked, setBlocked] = useState(false)
  const [notice, setNotice] = useState('')
  const editing = params.get('edit') === '1'
  if (!original) return <section className="drivers-page"><h3>Haydovchi topilmadi</h3><a href="/drivers">Ro‘yxatga qaytish</a></section>
  return <section className="drivers-page driver-profile-layout">
    <aside className="driver-card driver-profile-card"><div className="driver-cover"/><div className="driver-profile-body">
      <div className={'driver-avatar driver-avatar--large '+driver.color}>{driver.initials}</div><h2>{driver.name}</h2><p className="driver-muted">ID: #{driver.id}</p><DriverStatus>{blocked?'Offline':driver.status}</DriverStatus>
      <div className="driver-contact-list">{[[Phone,'TELEFON RAQAM',driver.phone],[Mail,'ELEKTRON POCHTA','alisher.t@ddd.uz'],[Car,'MASHINA MODELI & PLITASI',driver.car+' ('+driver.plate+')']].map(([Icon,label,value])=><div className="driver-contact" key={label}><span><Icon size={19}/></span><div><small>{label}</small><p>{value}</p></div></div>)}</div>
      <div className="driver-profile-buttons"><button className="driver-button driver-button--black" onClick={()=>setParams({edit:'1'})}><Pencil size={17}/>Tahrirlash</button><button className="driver-button driver-button--red" onClick={()=>setBlocked(!blocked)}>{blocked?'Blokdan chiqarish':'Bloklash'}</button></div>
    </div></aside>
    <div className="driver-profile-main"><div className="driver-stat-grid">{[['Jami buyurtmalar','1,240 ta'],['Jami daromad','38.2 mln UZS'],["O‘rtacha reyting",'4.92 / 5']].map(([label,value],i)=><div className={'driver-card driver-stat '+(i===1?'highlight':'')} key={label}><p>{label}</p><strong>{value}</strong></div>)}</div>
      <section className="driver-card driver-documents"><h3>Hujjatlar va ruxsatnomalar</h3><div>{['Haydovchilik guvohnomasi','Pasport nusxasi (ID)'].map(label=><article className="driver-document" key={label}><span className="driver-file-icon"><FileCheck2 size={21}/></span><div><strong>{label}</strong><small>Yuklangan: 12.01.2025</small></div><button aria-label={label+'ni yuklab olish'} onClick={()=>setNotice('Hujjat fayli hali serverga ulanmagan.')}><Download size={19}/></button></article>)}</div>{notice&&<p className="driver-notice" role="status">{notice}</p>}</section>
      <section className="driver-card driver-trips"><h3>Oxirgi safarlar tarixi</h3><div className="driver-table-wrap"><table className="driver-table"><thead><tr>{['SANA/VAQT','KETISH MANZILI','BORISH MANZILI','NARXI','HOLATI'].map(x=><th key={x}>{x}</th>)}</tr></thead><tbody>{[['Bugun, 09:12','Bodomzor','Oloy Bozori','24,000 UZS'],['Bugun, 08:30',"G‘ofur G‘ulom",'Chilonzor metro','32,000 UZS'],['Kecha, 18:45','Yunusobod 12','Minor','18,000 UZS']].map(row=><tr key={row[0]}>{row.map((x,i)=><td key={x} className={i===0?'driver-ink':''}>{x}</td>)}<td><DriverStatus>Bajarildi</DriverStatus></td></tr>)}</tbody></table></div></section>
    </div>
    {editing&&<div className="driver-modal-backdrop"><form className="driver-card driver-modal" onSubmit={e=>{e.preventDefault();const data=new FormData(e.currentTarget);setDriver({...driver,name:data.get('name'),phone:data.get('phone')});setParams({})}}><button type="button" className="driver-modal-close" aria-label="Yopish" onClick={()=>setParams({})}><X size={20}/></button><h3>Haydovchini tahrirlash</h3><label>Ism familiya<input name="name" defaultValue={driver.name} required/></label><label>Telefon<input name="phone" defaultValue={driver.phone} required/></label><button className="driver-button driver-button--yellow">Saqlash</button></form></div>}
  </section>
}

