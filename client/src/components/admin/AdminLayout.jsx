import React, { useState } from 'react'
import AdminSidebar from './AdminSidebar'
import { Outlet } from 'react-router-dom'

function AdminLayout() {
  const [open, setOpen] = useState(false)
  return (
    <div>
        <div className=" flex">
            <div className="lg:w-[15%]  side">
                <AdminSidebar/>
            </div>
            <div className="overflow-x-scroll bg-[#F0F8FF] lg:bg-inherit w-[85%] lg:overflow-auto main">
                <Outlet/>
            </div>
        </div>
    </div>
  )
}

export default AdminLayout