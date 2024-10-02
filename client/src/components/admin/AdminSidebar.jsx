import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdLocalHospital } from "react-icons/md";
import { BsJournalBookmark } from "react-icons/bs";
import { VscHistory } from "react-icons/vsc";
import { CiLogout, CiMoneyBill } from "react-icons/ci";
import { IoSettingsOutline,  IoHomeOutline } from "react-icons/io5";
import { FaUserDoctor } from "react-icons/fa6";
import { CiUser } from "react-icons/ci";

function AdminSidebar() {
    const [selected, setSelected] = useState(null)
    const toggle = (i)=>{
        if (selected === i) {
            return setSelected(null)
        }
        setSelected(i)
    }
  return (
    <>
                <div className=" py-5 px-3 h-full bg-[#fff] text-[#007cff] border-r border-gray-200 ">
            <div className="user">
            <div className=" logo">
                    <MdLocalHospital className='lg:inline hidden size-12 lg:p-2 border-r-2 border-[#007cff] text-[#007cff]'></MdLocalHospital>
                    <p className='inline text-sm lg:text-lg p-2 text-[#007cff]'>OJ Hospital</p>
                </div>
                
                <hr />
            </div>
            <div className="py-7 list">
                <ul className='font-[SUSE] px-3 space-y-10'>
                    <li>
                        <Link to='/admin/home'><span><IoHomeOutline className='inline mr-2'></IoHomeOutline></span><span className='hidden lg:inline'> My Home</span></Link>
                    </li>
                    <li>
                        <Link to='/admin/allapp'><span><BsJournalBookmark className='inline mr-2'></BsJournalBookmark></span> <span className='hidden lg:inline'>Appointment</span></Link>
                    </li>
                    <li>
                        <Link to='/admin/allpa' onClick={()=>{toggle(i)}} className='flex justify-between'>
                        <div className="">
                        <span><CiUser className='inline mr-2'></CiUser></span>
                        <span className='hidden lg:inline'>Patients</span>
                        </div>
                        <div className="">
                             
                        </div>
                        </Link>
                        {/* <div className="">
                            <ul>
                                <li>All Patients</li>
                                <li>Add Patient</li>
                                <li>Edit Patient</li>
                            </ul>
                        </div> */}
                    </li>
                    <li>
                        <Link to='alldoc'><span><FaUserDoctor className='inline mr-2'></FaUserDoctor></span><span className='hidden lg:inline'> Doctors</span></Link>
                    </li>
                    <li>
                        <Link to='transactions'><span><CiMoneyBill className='inline mr-2'></CiMoneyBill></span><span className='hidden lg:inline'> Transactions</span></Link>
                    </li>
                    <li>
                        <Link to='settings'><span><IoSettingsOutline className='inline mr-2'></IoSettingsOutline></span><span className='hidden lg:inline'> Settings</span></Link>
                    </li>
                    <li>
                        <button ><span><CiLogout className='inline mr-2'></CiLogout></span><span className='hidden lg:inline'> Log Out</span></button>
                    </li>
                </ul>
            </div>

        </div>
    </>
  )
}

export default AdminSidebar