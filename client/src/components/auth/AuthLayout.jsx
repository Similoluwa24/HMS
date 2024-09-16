import React from 'react'
import { Outlet } from 'react-router-dom'

function AuthLayout() {
  return (
    <>
        <div className='flex flex-wrap lg:flex-nowrap justify-between '>
            <div className="w-full bg-[#E1EBEE] text-[#0000ff] auth-layout">
            AuthLayout
            </div>
            <div className="w-full bg-[#0000ff] main">
                <Outlet/>
            </div>
        </div>
    </>
  )
}

export default AuthLayout