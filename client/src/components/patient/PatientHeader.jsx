import React from 'react'
import { RxAvatar } from "react-icons/rx";
import { FaRegBell, FaRegEnvelope, FaSearch} from "react-icons/fa";

function PatientHeader() {
  return (
    <>
        <div className="bg-gradient-to-r from-[#007cff] to-[#00c1ff] text-[#fff] p-1 w-full">
            <div className="flex justify-between items-center lg:px-5 logo">
                <div className=" logo">
                <p className='mb-3  lg:text-[20px] font-[lora] text-center'>Hey, Ojo</p>
                </div>
                <div className="space-x-3 flex pt-2 cons">
                    <div className="relative ">
                        <input type="search" id="default-search" class="block relative w-full p-[0.7rem] ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 placeholder-[#007cff] dark:text-white " placeholder="Search" required />
                        <span className='absolute text-[#007cff] top-3 ml-3'><FaSearch></FaSearch></span>
                        <button type="submit" class="text-[#007cff] hover:text-[#B9D9EB] absolute end-1 bottom-[0.15rem] bg-[#B9D9EB] border border-[#007cff] hover:bg-[#007cff] focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 ">Go</button>
                    </div>
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default PatientHeader