import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Settings from './components/Settings.jsx'
import { MoveHorizontal } from 'lucide-react'
import Sidebar from './pages/Sidebar.jsx'

function App() {
  let [collapsed, setCollapsed] = useState(false)
  return (
    
    <div className="app-layout">
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />


      <div className="app-main">
        <Navbar />
        <div className="app-content">
          <Settings />
        </div>
      </div>
    </div>
  )
}

export default App
