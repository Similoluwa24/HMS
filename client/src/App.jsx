import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPages from './LandingPages'
import AuthLayout from './components/auth/AuthLayout'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPages/>}/>
        <Route path='/auth' element={<AuthLayout/>}>
          <Route path='login' element={<Login/>}/>
          <Route path='register' element={<Register/>}/>
        </Route>
        
      </Routes>
    </div>
  )
}

export default App