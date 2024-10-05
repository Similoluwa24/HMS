import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdLocalHospital,MdOutlineInventory } from "react-icons/md";
import { BsJournalBookmark } from "react-icons/bs";
import { CiLogout, CiMoneyBill, CiStethoscope,CiCreditCard1 } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { SiAwsorganizations } from "react-icons/si";
import { GiMedicinePills } from "react-icons/gi";
import { RiAdminLine } from "react-icons/ri";



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
                        <Link to='/admin/allpa'><span><CiUser className='inline mr-2'></CiUser></span><span className='hidden lg:inline'>Patients</span></Link>
                      
                    </li>
                    <li>
                        <Link to='alldoc'><span><CiStethoscope className='inline mr-2'></CiStethoscope></span><span className='hidden lg:inline'> Doctors</span></Link>
                    </li>
                    <li>
                        <Link to='alladmin'><span><RiAdminLine className='inline mr-2'></RiAdminLine></span><span className='hidden lg:inline'> Admin</span></Link>
                    </li>
                    <li>
                        <Link to='/admin/allpharm'><span><GiMedicinePills className='inline mr-2'></GiMedicinePills></span><span className='hidden lg:inline'> Pharmacy</span></Link>
                    </li>
                    <li>
                        <Link to='/admin/alldepart'><span><SiAwsorganizations className='inline mr-2'></SiAwsorganizations></span><span className='hidden lg:inline'> Department</span></Link>
                    </li>
                    <li>
                        <Link to='/admin/allinvent'><span><MdOutlineInventory className='inline mr-2'></MdOutlineInventory></span><span className='hidden lg:inline'> Inventory</span></Link>
                    </li>
                    <li>
                        <Link to='transactions'><span><CiCreditCard1 className='inline mr-2'></CiCreditCard1></span><span className='hidden lg:inline'> Payment</span></Link>
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