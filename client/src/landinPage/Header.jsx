import React from 'react'
import { MdLocalHospital } from "react-icons/md";
import { CiMenuKebab } from "react-icons/ci";
import { Link } from 'react-router-dom' 

function Header() {
  return (
    <div>
        <div className="flex fixe z-10 w-full bg-white justify-between items-center px-6 py-2 header border-b-2 border-[#007cff]  ">
            <div className=" logo">
              <MdLocalHospital className='inline size-12 p-2 border-r-2 border-[#007cff] text-[#007cff]'></MdLocalHospital>
              <p className='inline text-2xl p-2 text-[#007cff]'>OJ Hospital</p>
            </div>
            <div className="text">
              <ul className='hidden lg:flex space-x-3 pr-3 header-list'>
                <li className=''><Link to="/">Home</Link></li>
                <li className=''><Link to="/about"> About</Link></li>
                <li className=''><Link to="/service"> Services </Link></li>
                <li className=''><Link to="/doctors"> Department</Link></li>
                <li className=''><Link to="/gallery">Gallery</Link></li>
                <li className=''><Link to="/auth/login"> Log In</Link></li>
                <li className=''><Link to="/contact">Contact</Link></li>
              </ul>
            <div className="lg:hidden navbar">
              <CiMenuKebab className='size-12 p-2 lg:hidden text-[#007cff]'></CiMenuKebab>
            </div>
            </div>
            <div className="button">
            <button className='hidden lg:inline border border-[#007cff] hover:bg-[#007cff] p-2 rounded-full hover:text-white text-[#007cff] ini'><Link to="/appointment"> Appointment</Link></button>
            </div>
          </div>
    </div>
  )
}

export default Header