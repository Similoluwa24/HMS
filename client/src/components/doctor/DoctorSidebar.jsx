import React, { useContext } from 'react';
import { BsJournalBookmark } from 'react-icons/bs';
import { CiLogout } from 'react-icons/ci';
import { IoHomeOutline, IoReceiptOutline, IoSettingsOutline } from 'react-icons/io5';
import { MdLocalHospital } from 'react-icons/md';
import { TbReportMedical } from "react-icons/tb";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import Cookies from 'js-cookie';

function DoctorSidebar() {
    const [state, dispatch] = useContext(AuthContext);
    const navigate = useNavigate();

    const logout = async () => {
        try {
            const res = await fetch('http://localhost:5000/user/logout', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
            });

            const data = await res.json();

            if (!res.ok) {
                console.log({ message: data });
            } else {
                dispatch({ type: 'LOGOUT', payload: null });
                localStorage.removeItem('user');
                Cookies.remove('token');
                navigate('/auth/login');
            }
        } catch (error) {
            console.log({ message: error.message });
        }
    };

    return (
        <div className="min-h-screen py-5 px-4 bg-white text-[#007cff] border-r border-gray-200 shadow-lg">
            <div className="mb-8 flex items-center justify-start space-x-2">
                <MdLocalHospital className="text-3xl lg:text-4xl p-2 bg-[#007cff] text-white rounded-full" />
                <p className="text-lg md:text-xl font-bold text-[#007cff]">OJ Hospital</p>
            </div>
            <div className="space-y-8">
                <ul className="space-y-6">
                    <li>
                        <Link to='home' className="flex items-center space-x-3 p-2 rounded-lg hover:bg-[#f0f4ff] hover:text-[#0056b3] transition-all">
                            <IoHomeOutline className="text-xl" />
                            <span className="text-sm md:text-base hidden lg:inline">My Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='appointment' className="flex items-center space-x-3 p-2 rounded-lg hover:bg-[#f0f4ff] hover:text-[#0056b3] transition-all">
                            <BsJournalBookmark className="text-xl" />
                            <span className="text-sm md:text-base hidden lg:inline">Appointment</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='prescription' className="flex items-center space-x-3 p-2 rounded-lg hover:bg-[#f0f4ff] hover:text-[#0056b3] transition-all">
                            <IoReceiptOutline className="text-xl" />
                            <span className="text-sm md:text-base hidden lg:inline">Prescription</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='diagnosis' className="flex items-center space-x-3 p-2 rounded-lg hover:bg-[#f0f4ff] hover:text-[#0056b3] transition-all">
                            <TbReportMedical className="text-xl" />
                            <span className="text-sm md:text-base hidden lg:inline">Diagnosis</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='settings' className="flex items-center space-x-3 p-2 rounded-lg hover:bg-[#f0f4ff] hover:text-[#0056b3] transition-all">
                            <IoSettingsOutline className="text-xl" />
                            <span className="text-sm md:text-base hidden lg:inline">Settings</span>
                        </Link>
                    </li>
                    <li>
                        <button onClick={logout} className="flex items-center space-x-2 p-2 rounded-xl bg-white hover:bg-red-100 shadow-sm hover:shadow-md transition-all w-full">
                            <CiLogout className="text-xl text-red-600" />
                            <span className="text-sm md:text-base hidden lg:inline text-red-600">Log Out</span>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default DoctorSidebar;
