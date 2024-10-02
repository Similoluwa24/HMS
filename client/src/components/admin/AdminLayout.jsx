import React from 'react'
import AdminSidebar from './AdminSidebar'
import { Outlet } from 'react-router-dom'

function AdminLayout() {
  return (
    <div>
        <div className=" flex">
            <div className=" side">
                <AdminSidebar/>
            </div>
            <div className="overflow-x-scroll lg:overflow-auto main">
                <Outlet/>
            </div>
        </div>
    </div>
  )
}

export default AdminLayout