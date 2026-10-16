import { useState } from 'react'
import { Check, X, FileCheck2, Image } from 'lucide-react'
import '../styles/Drivers.css'

const applications = [
 {id:1,name:'Sirojiddin Olimov',initials:'SO',phone:'+998 90 991 22 33',date:'Bugun, 09:30',documents:3,color:'yellow'},
 {id:2,name:'Bekzod Rahmonov',initials:'BR',phone:'+998 93 145 09 88',date:'Bugun, 08:15',documents:2,color:'blue'},
 {id:3,name:'Otabek Yusupov',initials:'OY',phone:'+998 94 300 11 22',date:'Kecha, 18:40',documents:1,color:'green'},
 {id:4,name:'Asilbek Turdiev',initials:'AT',phone:'+998 99 876 54 32',date:'Kecha, 15:10',documents:3,color:'yellow'},
]
export default function DriverApproval() {
 const [rows,setRows]=useState(applications)
 const [selected,setSelected]=useState(applications[0])
 const [filter,setFilter]=useState('all')
 const [notice,setNotice]=useState('')
 const [preview,setPreview]=useState('')
 function decide(driver,approved) {
   const next=rows.filter(r=>r.id!==driver.id)
   setRows(next);setSelected(next.find(r=>filter==='all'||r.documents===Number(filter))||null)
   setNotice(driver.name+(approved?' tasdiqlandi.':' rad etildi.'))
 }
 const visible=rows.filter(r=>filter==='all'||r.documents===Number(filter))
 return <section className="drivers-page driver-approval-page"><div className="driver-approval-heading"><h3>Kutilayotgan arizalar <span>{rows.length}</span></h3><select className="driver-sort" aria-label="Hujjat bo‘yicha filtr" value={filter} onChange={e=>{const value=e.target.value;setFilter(value);setSelected(rows.find(r=>value==='all'||r.documents===Number(value))||null)}}><option value="all">Barchasi ({rows.length})</option><option value="3">3 dona hujjat</option><option value="2">2 dona hujjat</option><option value="1">1 dona hujjat</option></select></div>
 <div className="driver-approval-layout"><div><div className="driver-card driver-table-wrap"><table className="driver-table driver-approval-table"><thead><tr>{['ISM FAMILIYA','TELEFON','HUJJATLAR','AMALLAR'].map(h=><th key={h}>{h}</th>)}</tr></thead><tbody>{visible.map(d=><tr key={d.id} className={selected?.id===d.id?'selected':''}><td><button className="driver-person" onClick={()=>setSelected(d)}><span className={'driver-avatar '+d.color}>{d.initials}</span><span><strong>{d.name}</strong><small>{d.date}</small></span></button></td><td>{d.phone}</td><td><span className={'driver-doc-count '+(d.documents===3?'blue':'yellow')}>● {d.documents} dona hujjat</span></td><td><div className="driver-approval-actions"><button className="driver-button driver-button--red" onClick={()=>decide(d,false)}>Rad etish</button><button className="driver-button driver-button--yellow" onClick={()=>decide(d,true)}><Check size={14}/>Tasdiqlash</button></div></td></tr>)}{!visible.length&&<tr><td colSpan={4} className="driver-empty">Ariza topilmadi</td></tr>}</tbody></table></div>{notice&&<p className="driver-notice" role="status">{notice}</p>}</div>
 <aside className="driver-card driver-review"><h3>Hujjatlar tahlili</h3><p className="driver-muted">{selected?.name||'Ariza tanlanmagan'}</p>{selected&&<>{[['Haydovchilik Guvohnomasi (AB toifa)','Haqiqiy: Amal qilish muddati 2030-yilgacha'],['Pasport / ID Card','Tekshirildi: 01-1049283-92 taqdim etildi']].map(([label,message])=><div className="driver-review-document" key={label}><h4>{label}</h4><button className="driver-document-preview" onClick={()=>setPreview(label)}><Image size={24}/><span>Ko‘rish uchun bosing</span></button><p className="driver-verification"><FileCheck2 size={14}/>{message}</p></div>)}<div className="driver-review-buttons"><button className="driver-button driver-button--red" onClick={()=>decide(selected,false)}><X size={16}/>Rad etish</button><button className="driver-button driver-button--yellow" onClick={()=>decide(selected,true)}><Check size={16}/>Tasdiqlash</button></div></>}</aside></div>
 {preview&&<div className="driver-modal-backdrop"><div className="driver-card driver-modal"><button className="driver-modal-close" aria-label="Yopish" onClick={()=>setPreview('')}><X size={20}/></button><h3>{preview}</h3><p>Hujjat rasmi hali serverga ulanmagan.</p></div></div>}
 </section>
}

