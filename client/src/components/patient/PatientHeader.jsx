import React, { useContext, useState } from 'react';
import { RxAvatar } from "react-icons/rx";
import { FaRegBell, FaRegEnvelope, FaSearch } from "react-icons/fa";
import HospitalContext from '../../context/HospitalContext';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
function PatientHeader() {
  const { user } = useContext(HospitalContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [state, dispatch] = useContext(AuthContext);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

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
              {user?.user.first_name} {user?.user.last_name}
            </p>
            <RxAvatar className='text-2xl text-[#007cff] hover:text-blue-700' />
          </div>
          
          {/* Dropdown */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg border border-gray-200 z-10">
              <div className="p-4 border-b text-center">
                <RxAvatar className='text-4xl mx-auto text-[#007cff]' />
                <p className="mt-2 font-semibold text-gray-700">
                  {user?.user.first_name} {user?.user.last_name}
                </p>
                <p className="text-sm text-gray-500">{user?.user.email}</p>
              </div>
              <ul className="py-2 text-gray-700">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">View Profile</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Settings</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <button onClick={logout}>Logout</button></li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PatientHeader;
