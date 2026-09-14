import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Support from './components/Support'
import Chat from './components/Chat'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="app-container">
        {/* Chap tarafdagi Sidebar */}
        <Sidebar/>

        {/* O'ng tarafdagi asosiy qism */}
        <div className="main-wrapper">
          {/* Yuqoridagi Navbar */}
          <Navbar />

          {/* Asosiy kontent maydoni: Support va Chat yonma-yon joylashadi */}
          <main className="content-area">
            <Support />
            <Chat />
          </main>
        </div>
      </div>
    </>
  )
}

export default App