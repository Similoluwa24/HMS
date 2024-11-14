import React, { useContext } from 'react';
import { BsJournalBookmark } from 'react-icons/bs';
import { CiLogout } from 'react-icons/ci';
import { IoHomeOutline, IoReceiptOutline, IoSettingsOutline } from 'react-icons/io5';
import { MdLocalHospital } from 'react-icons/md';
import { TbReportMedical } from "react-icons/tb";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import Cookies from 'js-cookie';
import useLogout from '../../hooks/useLogout';

function DoctorSidebar() {
    const [state, dispatch] = useContext(AuthContext);
    const navigate = useNavigate();
    const logout = useLogout()

    const logoutHandler = async () => {
        logout()
    };

    return (
        <div className="min-h-svh py-5 px-4 bg-white text-[#007cff] border-r border-gray-200 shadow-lg">
            <div className="mb-8 flex items-center justify-start space-x-2">
                <MdLocalHospital className="text-3xl lg:text-4xl p-2 bg-[#007cff] text-white rounded-full" />
                <p className="text-lg lg:text-xl font-bold text-[#007cff]">OJ Hospital</p>
            </div>
            <div className="space-y-8">
                <ul className="space-y-6">
                    <li>
                        <Link to='home' className="flex items-center space-x-4 p-3 rounded-xl bg-white hover:bg-[#e3f2fd] shadow-sm hover:shadow-md transition-all">
                            <IoHomeOutline className="text-2xl text-[#007cff]" />
                            <span className="text-lg font-medium text-gray-700">Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='appointment' className="flex items-center space-x-4 p-3 rounded-xl bg-white hover:bg-[#e3f2fd] shadow-sm hover:shadow-md transition-all">
                            <BsJournalBookmark className="text-2xl text-[#007cff]" />
                            <span className="text-lg font-medium text-gray-700">Appointments</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='prescription' className="flex items-center space-x-4 p-3 rounded-xl bg-white hover:bg-[#e3f2fd] shadow-sm hover:shadow-md transition-all">
                            <IoReceiptOutline className="text-2xl text-[#007cff]" />
                            <span className="text-lg font-medium text-gray-700">Prescriptions</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='diagnosis' className="flex items-center space-x-4 p-3 rounded-xl bg-white hover:bg-[#e3f2fd] shadow-sm hover:shadow-md transition-all">
                            <TbReportMedical className="text-2xl text-[#007cff]" />
                            <span className="text-lg font-medium text-gray-700">Diagnosis</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='settings' className="flex items-center space-x-4 p-3 rounded-xl bg-white hover:bg-[#e3f2fd] shadow-sm hover:shadow-md transition-all">
                            <IoSettingsOutline className="text-2xl text-[#007cff]" />
                            <span className="text-lg font-medium text-gray-700">Settings</span>
                        </Link>
                    </li>
                    <li>
                        <button onClick={logoutHandler} className="flex items-center space-x-4 p-3 rounded-xl bg-white hover:bg-red-100 shadow-sm hover:shadow-md transition-all w-full">
                            <CiLogout className="text-2xl text-red-600" />
                            <span className="text-lg font-medium text-red-600">Log Out</span>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default DoctorSidebar;
