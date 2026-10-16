import { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import './styles/themes.css'
import './styles/fonts.css'
import { getSavedFont, applyFont } from './fonts'
import { getSavedTheme, applyTheme } from './theme'
import Sidebar from './pages/Sidebar'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import MapPage from './pages/MapPage'
import Settings from './components/Settings'
import Drivers from './pages/drivers-list'
import DriverProfile from './pages/drivers-profile'
import DriverApproval from './pages/driver-approval'
import Couriers from './pages/Couriers'
import Order from './pages/Order'
import Clients from './pages/Clients'
import Reports from './pages/Reports'
import Support from './pages/Support'
import OrderDetails from './pages/OrderDetails'
import CourierProfile from './pages/CourierProfile'
import Stores from './pages/Stores'
import StoreCreate from './pages/StoreCreate'
import StoreImport from './pages/StoreImport'

// Sahifa ochilishi bilan saqlangan mavzuni qo'llaymiz (komponentdan tashqarida)
applyTheme(getSavedTheme())
applyFont(getSavedFont())

function App() {
  const [collapsed, setCollapsed] = useState(false)
  const location = useLocation()
  const driversPage = location.pathname.startsWith('/drivers')

  return (
    <div className={driversPage ? 'app-layout drivers-shell' : 'app-layout'}>
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <div className="app-main">
        <Navbar />
        <div className="app-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/drivers" element={<Drivers />} />
            <Route path="/drivers/approval" element={<DriverApproval />} />
            <Route path="/drivers/:id" element={<DriverProfile key={location.pathname} />} />
            <Route path="/couriers" element={<Couriers />} />
            <Route path="/orders" element={<Order />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/support" element={<Support />} />
            <Route path="/orders/:id" element={<OrderDetails />} />
            <Route path="/couriers/:id" element={<CourierProfile />} />
            <Route path="/store" element={<Stores />} />
            <Route path="/store/new" element={<StoreCreate />} />
            <Route path="/store/import" element={<StoreImport />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App

