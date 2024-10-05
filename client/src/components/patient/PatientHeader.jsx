import React from 'react'
import { RxAvatar } from "react-icons/rx";
import { FaRegBell, FaRegEnvelope, FaSearch} from "react-icons/fa";

function PatientHeader() {
  return (
    <>
        <div className=" text-[#007cff] p-3 w-full">
            <div className="flex justify-end space-x-2 items-center lg:px-5 logo">
                <p>Ojo Oluwapelumi</p>
                <RxAvatar className='size-8'/>
            </div>
        </div>
    </>
  )
}

export default PatientHeader