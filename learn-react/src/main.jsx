import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './components/Navbar.jsx'
import Mainpage from './components/Mainpage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
    <div className='flex font-["sf-regular"]'>
    <Navbar/>
    <Mainpage/>
    </div>
  </React.StrictMode>,
)
