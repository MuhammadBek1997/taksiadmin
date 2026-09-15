import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Sidebar from './pages/Sidebar'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import MapPage from './pages/MapPage'
import Settings from './components/Settings'
import Drivers from './pages/Drivers'
import Couriers from './pages/Couriers'
import Order from './pages/Order'
import Clients from './pages/Clients'
import Reports from './pages/Reports'
import Support from './pages/Support'

function App() {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className="app-layout">
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <div className="app-main">
        <Navbar />
        <div className="app-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/drivers" element={<Drivers />} />
            <Route path="/couriers" element={<Couriers />} />
            <Route path="/orders" element={<Order />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App