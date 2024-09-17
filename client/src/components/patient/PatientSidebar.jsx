import React from 'react'
import { Link } from 'react-router-dom'
import { MdLocalHospital } from "react-icons/md";
import { IoHomeSharp } from "react-icons/io5";
import { BsJournalBookmark } from "react-icons/bs";
import { VscHistory } from "react-icons/vsc";
import { CiMoneyBill } from "react-icons/ci";
import { IoSettingsOutline,  IoHomeOutline } from "react-icons/io5";

function PatientSidebar() {
  return (
    <>
        <div class=" py-5 px-3 h-full bg-[#D0F0C0] text-[#00401A] border-r border-gray-200 ">
            <div className="user">
            <div className=" logo">
                    <MdLocalHospital className='inline size-12 p-2 border-r-2 border-[#00401A] text-[#00401A]'></MdLocalHospital>
                    <p className='inline text-2xl p-2 text-[#00401A]'>OJ Hospital</p>
                </div>
                
                <hr />
            </div>
            <div className="py-7 list">
                <ul className='font-[SUSE] px-3 space-y-10'>
                    <li>
                        <Link to='/user/home'><span><IoHomeOutline className='inline mr-2'></IoHomeOutline></span> My Home</Link>
                    </li>
                    <li>
                        <Link to='/user/appointment'><span><BsJournalBookmark className='inline mr-2'></BsJournalBookmark></span> Appointment</Link>
                    </li>
                    <li>
                        <Link to='/user/history'><span><VscHistory className='inline mr-2'></VscHistory></span>Treatment History</Link>
                    </li>
                    <li>
                        <Link to='billing'><span><CiMoneyBill className='inline mr-2'></CiMoneyBill></span>Billings</Link>
                    </li>
                    <li>
                        <Link to='settings'><span><IoSettingsOutline className='inline mr-2'></IoSettingsOutline></span>Settings</Link>
                    </li>
                </ul>
            </div>

        </div>
    </>
  )
}

export default PatientSidebar