import React from 'react'
import { MdLocalHospital } from "react-icons/md";
import { CiMenuKebab } from "react-icons/ci";
import { Link } from 'react-router-dom' 

function Header() {
  return (
    <div>
        <div className="flex fixe z-10 w-full bg-white justify-between items-center px-6 py-2 header border-b-2 border-[#007CFF]  ">
            <div className=" logo">
              <MdLocalHospital className='inline size-12 p-2 border-r-2 border-[#007CFF] text-[#007CFF]'></MdLocalHospital>
              <p className='inline text-2xl p-2 text-[#007CFF]'>OJ Hospital</p>
            </div>
            <div className="text">
              <ul className='hidden lg:flex space-x-3 pr-3 header-list'>
                <li className=''><Link to="/">Home</Link></li>
                <li className=''><a href="#service"> Services </a></li>
                <li className=''><a href="#about"> About</a></li>
                <li className=''><a href="#hod"> Department</a></li>
                <li className=''><Link to="/gallery">Gallery</Link></li>
                <li className=''><Link to="/auth/login"> Log In</Link></li>
                <li className=''><Link to="/contact">Contact</Link></li>
              </ul>
            <div className="lg:hidden navbar">
              <CiMenuKebab className='size-12 p-2 lg:hidden text-[#007CFF]'></CiMenuKebab>
            </div>
            </div>
            <div className="button">
            <button className='hidden lg:inline border border-[#007cff] hover:bg-[#007cff] p-2 rounded-full hover:text-white text-[#007CFF] ini'><Link to=""> Appointment</Link></button>
            </div>
          </div>
    </div>
  )
}

export default Header