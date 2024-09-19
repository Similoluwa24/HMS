import React from 'react'
import { Outlet } from 'react-router-dom'
import { MdLocalHospital } from 'react-icons/md'
import Header from '../../landinPage/Header'

function AuthLayout() {
  return (
    <>
        <div className='w-full h-[100vh] auth '>
          <header>
            <Header/>
          </header>
            
            <div className="lg:w-[40%]  m-auto  main">
                <Outlet/>
            </div>
            
        </div>
        
    </>
  )
}

export default AuthLayout