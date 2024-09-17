import React from 'react'
import PatientHeader from './PatientHeader'
import PatientSidebar from './PatientSidebar'
import { Outlet } from 'react-router-dom'

function PatientLayout() {
  return (
    <>
        <div className="h-[100vh] flex justify-between p-layout">
            <div className="w-[20%]  sidebar">
            <PatientSidebar/>
            </div>
            <div className="w-[80%] main">
            <PatientHeader/>
                <Outlet/>
            </div>
        </div>
    </>
  )
}

export default PatientLayout