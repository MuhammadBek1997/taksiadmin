import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import Drivers from './pages/Drivers'
import DriverDetail from './pages/DriverDetail'
import AddDriver from './pages/AddDriver'
import Support from './pages/Support'
import './App.css'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Support from './components/Support'
import Chat from './components/Chat'


function App() {
  return (
    <div className="app">
      <Sidebar />

      <div className="main-content">
        <Navbar />

        <div className="page-content">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />

            <Route path="/drivers" element={<Drivers />} />
            <Route path="/drivers/add" element={<AddDriver />} />
            <Route path="/drivers/:id" element={<DriverDetail />} />

            <Route path="/support" element={<Support />} />

            {/* Hali yasalmagan sahifalar (bo'sh) */}
            <Route path="/map" element={null} />
            <Route path="/couriers" element={null} />
            <Route path="/stores" element={null} />
            <Route path="/orders" element={null} />
            <Route path="/clients" element={null} />
            <Route path="/reports" element={null} />
            <Route path="/settings" element={null} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App