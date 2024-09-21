import React, { useContext } from 'react'
import Header from '../landinPage/Header'
import { PiAmbulanceLight } from "react-icons/pi";
import { FaUserDoctor } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import HospitalContext from '../context/HospitalContext'

function BookAppointment() {
  const {doctors}= useContext(HospitalContext)
  return (
    <div>
      <div className="pb-6 appoint">
        <Header/>
        <div className="text-start  flex flex-col  justify-center px-6 banner-3">
            <h1 className='text-white lg:text-7xl text-2xl font-[PT-Serif]'>Appointments</h1>
            <p className='text-white lg:text-xl text-[10px] font-[poppins]'>Our hospital gallery is a showcase of the various departments and facilities within our medical center. 
                Browse through our photo gallery to get a glimpse of our state-of-the-art equipment, modern facilities,
                and compassionate care. From our emergency department to our patient rooms,
                we're proud to provide a comfortable and healing environment for our patients and their loved ones</p>
        </div> 

        <div className="text-[#074cff] space-y-4 max-w-[75rem] mt-12 m-auto mx-5">
            <p className='lg:text-xl text-gray-600 text-lg font-[poppins]'>GET THE RIGHT MEDICAL CARE</p>
            <hr className=' h-[0.2rem]  w-[12%]  bg-[#0075FF]' />
            <h1 className='lg:text-5xl text-xl font-[poppins]'>Book with</h1>
            <h1 className='lg:text-6xl text-2xl  font-bold font-[poppins]'>your Doctors</h1>
            <p className=' lg:text-[1rem] text-[12px] pb-6 text-gray-600 font-[poppins]'>Get in touch with us to schedule an appointment,<br />
              ask a question, or share your feedback.  We're here to
                help. 
            </p>
         </div>
        <div className="lg:flex mx-5 pt-10 space-y-6 gap-7 contact-ux">
        <div className="lg:w-[30%] space-y-8 m-auto  tab">
                    <div className="icons space-y-3">
                      <div className="lg:flex justify-center icon">
                        <PiAmbulanceLight className="size-20 bg-white border border-[#007cff] p-6 text-[#074cff] rounded-full hover:bg-[#007CFF] hover:text-white "/>
                      </div>
                      <div className="lg:text-center text-[#074cff]  text">
                        <h1 className='font-[poppins] text-lg'>EMERGENCY CONTACT</h1>
                        <p className='font-[Roboto] text-[13px]'>free toll 24/7 <br /> 09084567395779</p>
                      </div>
                    </div>

                    <div className="icons text-[#074cff] space-y-3">
                      <div className=" lg:flex justify-center icon">
                          <FaUserDoctor className="size-20 bg-white border border-[#007cff] p-6 text-[#074cff] rounded-full hover:bg-[#007CFF] hover:text-white "/>
                      </div>
                      <div className="text text-[#074cff] lg:text-center">
                        <h1 className='font-[poppins] text-lg'>HOME VISIT</h1>
                        <p className='font-[Roboto] text-[13px]'>chargeable call <br /> 0959485930985</p>
                      </div>
                    </div>

                    <div className="icons space-y-3">
                      <div className="lg:flex justify-center icon">
                        <FaPhoneVolume className="size-20 bg-white border border-[#007cff] p-6 text-[#074cff] rounded-full hover:bg-[#007CFF] hover:text-white "/>
                      </div>
                      <div className="lg:text-center text-[#074cff] text">
                        <h1 className='font-[poppins] text-lg'>PHONE CONTACT</h1>
                        <p className='font-[Roboto] text-[13px]'>within work hours <br /> 850586940-30595</p>
                      </div>
                    </div>

                    </div>
                    <form action="" className='space-y-4 text-[#074cff] capitalize  lg:w-[70%]'>
                      <div className="">
                          <label for="name" class="block mb-1 text-sm font-medium">your name *</label>
                          <input type="text" id="name" class="bg-white border border-gray-300 text-[#007CFF] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="" required />
                      </div>
                      <div className="">
                          <label for="email" class="block mb-1 text-sm font-medium">your email *</label>
                          <input type="email" id="email" class="bg-white border border-gray-300 text-[#007CFF] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="" required />
                      </div>
                      <div className="">

                         <label for="doctor" class="block mb-1 text-sm font-medium">select your doctor *</label>
                          <select name="doctors" id="" class="bg-white border border-gray-300 text-[#007CFF] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="" required>
                            {doctors.map((item, index) =>(
                          <option value={item.id} className='divide-y-4'  >{`Dr. ${item.last_name} ${item.first_name} `}</option>
                        ))}
                        </select>
                      </div>
                      <div className="">
                          <label for="date" class="block mb-1 text-sm font-medium">select appointment date *</label>
                          <input type="date" id="date" class="bg-white border border-gray-300 text-[#007CFF] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="" required />
                      </div>
                      <div className="">
                          <label for="message" class="block mb-1 text-sm font-medium">your message *</label>
                          <textarea type="text" id="subject" rows="8" class="bg-white border border-gray-300 text-[#007CFF] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="" required />
                      </div>
                      <div className="bott0n">
                          <button type="submit" className='bg-[#007cff] text-[white] px-5 py-3 rounded-xl '>Book Appointment</button>
                      </div>
                    </form>
                   
                </div>
      </div>
    </div>
  )
}

export default BookAppointment