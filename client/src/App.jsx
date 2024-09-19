import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPages from './landinPage/LandingPages'
import AuthLayout from './components/auth/AuthLayout'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Appointment from './pages/patient/Appointment'
import History from './pages/patient/History'
import Billings from './pages/patient/Billings'
import Settings from './pages/patient/Settings'
import PatientLayout from './components/patient/PatientLayout'
import Home from './pages/patient/Home'
import { HospitalProvider } from './context/HospitalContext'
import Gallery from './landinPage/Gallery'
import Contact from './landinPage/Contact'


function App() {
  return (
    <div>
      <HospitalProvider>
        <Routes>
          <Route path='/' element={<LandingPages/>}/>
          <Route path='/gallery' element={<Gallery/>}/>
          <Route path='/contact' element={<Contact/>}/>

          <Route path='/auth' element={<AuthLayout/>}>
            <Route path='login' element={<Login/>}/>
            <Route path='register' element={<Register/>}/>
          </Route>
          <Route path='/user' element={<PatientLayout/>}>
            <Route path='appointment' element={<Appointment/>}/>
            <Route path='home' element={<Home/>}/>
            <Route path='history' element={<History/>}/>
            <Route path='billing' element={<Billings/>}/>
            <Route path='settings' element={<Settings/>}/>
          </Route>
          
        </Routes>
      </HospitalProvider>
    </div>
  )
}

export default App