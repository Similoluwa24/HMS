import React, { useContext, useState } from 'react';
import { RxAvatar } from "react-icons/rx";
import { FaRegBell, FaRegEnvelope, FaSearch } from "react-icons/fa";
import HospitalContext from '../../context/HospitalContext';
import { AuthContext } from '../../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import useLogout from '../../hooks/useLogout';
function PatientHeader() {
  const { user } = useContext(HospitalContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [state, dispatch] = useContext(AuthContext);
  const navigate = useNavigate();
  const logout = useLogout

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const logoutHandler = async () => {
     logout()
  };

  return (
    <div className="bg-white shadow-md p-4 w-full flex justify-between items-center border-b border-gray-200">
      {/* Search bar or logo placeholder */}
      <div className="flex items-center space-x-3">
        <FaSearch className="text-[#007cff] cursor-pointer" />
        <input
          type="text"
          placeholder="Search..."
          className="border rounded-full px-4 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-[#007cff]"
        />
      </div>
      
      <div className="flex items-center space-x-4">
        <FaRegBell className="text-[#007cff] cursor-pointer hover:text-blue-700 transition duration-200" />
        <FaRegEnvelope className="text-[#007cff] cursor-pointer hover:text-blue-700 transition duration-200" />
        
        <div className="relative">
          <div onClick={toggleDropdown} className="flex items-center space-x-2 cursor-pointer">
            <p className="font-medium text-sm text-gray-700">
              {user?.first_name} {user?.last_name}
            </p>
            <RxAvatar className='text-2xl text-[#007cff] hover:text-blue-700' />
          </div>
          
          {/* Dropdown */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg border border-gray-200 z-10">
              <div className="p-4 border-b text-center">
                <RxAvatar className='text-4xl mx-auto text-[#007cff]' />
                <p className="mt-2 font-semibold text-gray-700">
                  {user?.first_name} {user?.last_name}
                </p>
                <p className="text-sm text-gray-500">{user?.email}</p>
              </div>
              <ul className="py-2 text-gray-700">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer"><Link to={'profile'}>View Profile</Link></li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer"><Link to={'settings'}> Settings</Link></li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <button onClick={logoutHandler}>Logout</button></li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PatientHeader;
