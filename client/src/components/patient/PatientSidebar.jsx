import React from 'react'
import { Link } from 'react-router-dom'
import { MdLocalHospital } from "react-icons/md";
import { IoHomeSharp } from "react-icons/io5";
import { BsJournalBookmark } from "react-icons/bs";
import { VscHistory } from "react-icons/vsc";
import { CiMoneyBill } from "react-icons/ci";
import { IoSettingsOutline,  IoHomeOutline } from "react-icons/io5";
import { GiMedicinePills } from 'react-icons/gi';

function PatientSidebar() {
  return (
    <>
        <div class=" py-5 px-3 h-full bg-[#fff] text-[#007cff] border-r border-gray-200 ">
            <div className="user">
            <div className=" logo">
                    <MdLocalHospital className='lg:inline hidden size-12 lg:p-2 border-r-2 border-[#007cff] text-[#007cff]'></MdLocalHospital>
                    <p className='inline text-sm md:text-xl p-2 text-[#007cff]'>OJ Hospital</p>
                </div>
                
                <hr />
            </div>
            <div className="py-7 list">
                <ul className='font-[SUSE] px-3 space-y-10'>
                    <li>
                        <Link to='/user/home'><span><IoHomeOutline className='inline mr-2'></IoHomeOutline></span><span className='hidden lg:inline'> My Home</span></Link>
                    </li>
                    <li>
                        <Link to='/user/appointment'><span><BsJournalBookmark className='inline mr-2'></BsJournalBookmark></span> <span className='hidden lg:inline'>Appointment</span></Link>
                    </li>
                    <li>
                        <Link to='/user/history'><span><VscHistory className='inline mr-2'></VscHistory></span><span className='hidden lg:inline'>Treatment History</span></Link>
                    </li>
                    <li>
                        <Link to='/user/prescription'><span><GiMedicinePills className='inline mr-2'></GiMedicinePills></span><span className='hidden lg:inline'>Prescription</span></Link>
                    </li>
                    <li>
                        <Link to='billing'><span><CiMoneyBill className='inline mr-2'></CiMoneyBill></span><span className='hidden lg:inline'> Billings</span></Link>
                    </li>
                    <li>
                        <Link to='settings'><span><IoSettingsOutline className='inline mr-2'></IoSettingsOutline></span><span className='hidden lg:inline'> Settings</span></Link>
                    </li>
                </ul>
            </div>

        </div>
    </>
  )
}

export default PatientSidebar