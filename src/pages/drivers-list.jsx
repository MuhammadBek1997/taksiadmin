import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, Plus, Eye, Pencil, Trash2, Star, ChevronLeft, ChevronRight } from 'lucide-react'
import '../styles/Drivers.css'

export const driverData = [
  { id: 'DR-8890', name: 'Alisher Temirov', initials: 'AT', phone: '+998 90 123 45 67', car: 'Chevrolet Cobalt', plate: '01 | A 777 BB', status: 'Online', rating: 4.9, color: 'yellow' },
  { id: 'DR-8891', name: 'Sardor Ahmedov', initials: 'SA', phone: '+998 93 321 09 87', car: 'Chevrolet Lacetti', plate: '01 | O 303 OO', status: 'Busy', rating: 4.8, color: 'blue' },
  { id: 'DR-8892', name: 'Javohir Qodirov', initials: 'JQ', phone: '+998 94 999 88 77', car: 'Chevrolet Gentra', plate: '01 | X 505 XX', status: 'Online', rating: 4.7, color: 'green' },
  { id: 'DR-8893', name: 'Rustam Karimov', initials: 'RK', phone: '+998 97 111 22 33', car: 'Chevrolet Spark', plate: '01 | M 101 MM', status: 'Offline', rating: 4.5, color: 'yellow' },
  { id: 'DR-8894', name: 'Murod Aliyev', initials: 'MA', phone: '+998 99 444 55 66', car: 'Chevrolet Nexia 3', plate: '01 | B 202 BB', status: 'Online', rating: 4.6, color: 'purple' },
]

export function DriverStatus({ children }) {
  return <span className={'driver-status driver-status--' + (children === 'Busy' ? 'busy' : children === 'Offline' ? 'offline' : 'online')}>{children}</span>
}
export default function DriversList() {
  const navigate = useNavigate()
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('Barchasi')
  const [sort, setSort] = useState('rating')
  const [rows, setRows] = useState(driverData)
  const visible = rows.filter(d => (filter === 'Barchasi' || d.status === filter) && (d.name + d.phone + d.plate + d.car).toLowerCase().includes(search.trim().toLowerCase())).sort((a,b) => sort === 'name' ? a.name.localeCompare(b.name) : sort === 'rating' ? b.rating-a.rating : 0)
  return <section className="drivers-page">
    <div className="driver-toolbar">
      <label className="driver-search"><Search size={18}/><input value={search} onChange={e => setSearch(e.target.value)} placeholder="Ism yoki transport raqami bo'yicha qidiruv..." aria-label="Haydovchini qidirish"/></label>
      <div className="driver-tabs">{[['Barchasi',rows.length],['Online',rows.filter(d=>d.status==='Online').length],['Offline',rows.filter(d=>d.status==='Offline').length]].map(([name,count]) => <button key={name} className={filter===name?'active':''} onClick={()=>setFilter(name)}>{name} <small>{count}</small></button>)}</div>
      <select className="driver-sort" aria-label="Saralash" value={sort} onChange={e=>setSort(e.target.value)}><option value="rating">Saralash: Reyting</option><option value="name">Saralash: Ism</option></select>
      <button className="driver-button driver-button--yellow" onClick={()=>navigate('/drivers/approval')}><Plus size={18}/>Yangi haydovchi</button>
    </div>
    <div className="driver-card driver-table-wrap"><table className="driver-table"><thead><tr>{['ISM FAMILIYA','TELEFON RAQAMI','MASHINA MODELI VA DAVLAT RAQAMI','HOLATI','REYTING','AMALLAR'].map(h=><th key={h}>{h}</th>)}</tr></thead><tbody>
      {visible.map(d=><tr key={d.id}><td><button className="driver-person" onClick={()=>navigate('/drivers/'+d.id)}><span className={'driver-avatar '+d.color}>{d.initials}</span><span><strong>{d.name}</strong><small>#{d.id}</small></span></button></td><td>{d.phone}</td><td><div className="driver-car">{d.car}<span className="driver-plate">{d.plate}</span></div></td><td><DriverStatus>{d.status}</DriverStatus></td><td><span className="driver-rating"><Star size={13} fill="#ffb800" strokeWidth={0}/>{d.rating.toFixed(1)}</span></td><td><div className="driver-actions"><button aria-label={d.name+' profilini ko‘rish'} onClick={()=>navigate('/drivers/'+d.id)}><Eye size={17}/></button><button aria-label={d.name+' profilini tahrirlash'} onClick={()=>navigate('/drivers/'+d.id+'?edit=1')}><Pencil size={17}/></button><button className="danger" aria-label={d.name+'ni o‘chirish'} onClick={()=>{if(window.confirm(d.name+' ro‘yxatdan o‘chirilsinmi?'))setRows(previous=>previous.filter(r=>r.id!==d.id))}}><Trash2 size={17}/></button></div></td></tr>)}
      {!visible.length && <tr><td colSpan={6} className="driver-empty">Haydovchi topilmadi</td></tr>}
    </tbody></table></div>
    <div className="driver-table-footer"><p>Jami {visible.length ? '1-'+visible.length : '0'} dan {rows.length} ta haydovchidan ko'rsatilmoqda</p><div className="driver-pagination"><button disabled><ChevronLeft size={16}/>Orqaga</button><button className="active">1</button><button disabled>Keyingi<ChevronRight size={16}/></button></div></div>
  </section>
}


