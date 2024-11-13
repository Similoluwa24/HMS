import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdLocalHospital, MdOutlineInventory } from "react-icons/md";
import { BsJournalBookmark } from "react-icons/bs";
import { CiLogout, CiMoneyBill, CiStethoscope, CiCreditCard1 } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { SiAwsorganizations } from "react-icons/si";
import { GiMedicinePills } from "react-icons/gi";
import { RiAdminLine } from "react-icons/ri";
import { AuthContext } from '../../context/AuthContext';
import Cookies from 'js-cookie';
import useLogout from '../../hooks/useLogout';

function AdminSidebar() {
    const [state, dispatch] = useContext(AuthContext);
    const navigate = useNavigate();
    const logout = useLogout()

    const logoutHandler = async () => {
        logout()
    }
     

    return (
        <div className="h-full py-5 px-4 bg-white text-[#007cff] border-r border-gray-200 ">
            <div className="mb-8 flex items-center justify-start space-x-2">
                <MdLocalHospital className="text-3xl lg:text-4xl p-2 bg-[#007cff] text-white rounded-full" />
                <p className="text-lg lg:text-xl font-bold text-[#007cff]">OJ Hospital</p>
            </div>
            <div className="space-y-10">
                <ul className="space-y-8">
                    <li>
                        <Link to='/admin/home' className="flex items-center space-x-3 p-2 rounded-lg hover:bg-[#f0f4ff] hover:text-[#0056b3] transition-all">
                            <IoHomeOutline className="text-xl" />
                            <span className="text-sm lg:text-base hidden lg:inline">My Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/admin/allapp' className="flex items-center space-x-3 p-2 rounded-lg hover:bg-[#f0f4ff] hover:text-[#0056b3] transition-all">
                            <BsJournalBookmark className="text-xl" />
                            <span className="text-sm lg:text-base hidden lg:inline">Appointment</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/admin/allpa' className="flex items-center space-x-3 p-2 rounded-lg hover:bg-[#f0f4ff] hover:text-[#0056b3] transition-all">
                            <CiUser className="text-xl" />
                            <span className="text-sm lg:text-base hidden lg:inline">Patients</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/admin/alldoc' className="flex items-center space-x-3 p-2 rounded-lg hover:bg-[#f0f4ff] hover:text-[#0056b3] transition-all">
                            <CiStethoscope className="text-xl" />
                            <span className="text-sm lg:text-base hidden lg:inline">Doctors</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/admin/alladmin' className="flex items-center space-x-3 p-2 rounded-lg hover:bg-[#f0f4ff] hover:text-[#0056b3] transition-all">
                            <RiAdminLine className="text-xl" />
                            <span className="text-sm lg:text-base hidden lg:inline">Admin</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/admin/allpharm' className="flex items-center space-x-3 p-2 rounded-lg hover:bg-[#f0f4ff] hover:text-[#0056b3] transition-all">
                            <GiMedicinePills className="text-xl" />
                            <span className="text-sm lg:text-base hidden lg:inline">Pharmacy</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/admin/alldepart' className="flex items-center space-x-3 p-2 rounded-lg hover:bg-[#f0f4ff] hover:text-[#0056b3] transition-all">
                            <SiAwsorganizations className="text-xl" />
                            <span className="text-sm lg:text-base hidden lg:inline">Department</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/admin/allinvent' className="flex items-center space-x-3 p-2 rounded-lg hover:bg-[#f0f4ff] hover:text-[#0056b3] transition-all">
                            <MdOutlineInventory className="text-xl" />
                            <span className="text-sm lg:text-base hidden lg:inline">Inventory</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/admin/transactions' className="flex items-center space-x-3 p-2 rounded-lg hover:bg-[#f0f4ff] hover:text-[#0056b3] transition-all">
                            <CiCreditCard1 className="text-xl" />
                            <span className="text-sm lg:text-base hidden lg:inline">Payment</span>
                        </Link>
                    </li>
                    <li>
                        <button onClick={logoutHandler} className="flex items-center space-x-2 p-2 rounded-xl bg-white hover:bg-red-100 shadow-sm hover:shadow-md transition-all w-full">
                            <CiLogout className="text-xl text-red-600" />
                            <span className="text-sm md:text-base hidden lg:inline text-red-600">Log Out</span>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default AdminSidebar;
