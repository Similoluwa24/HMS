import React, { useContext } from 'react'
import { CiDroplet } from "react-icons/ci";
import { BsHeartPulse } from "react-icons/bs";
import { BsThermometer } from "react-icons/bs";
import {  IoPersonCircleOutline } from "react-icons/io5";
import { GiDna1 } from "react-icons/gi";
import doc from '../../assets/welcome.png'
import bp from '../../assets/blood-pressure.png'
import hr from '../../assets/heart-rate.png'
import geno from '../../assets/geno.png'
import thermo from '../../assets/thermo.jpg'
import { FaCheck, FaXmark } from 'react-icons/fa6';
import HospitalContext from '../../context/HospitalContext';
import Appointment from './Appointment';

function Home() {
  const {user, isAuthenticated} = useContext(HospitalContext)
  // console.log( user, isAuthenticated);
  
  
  return (
    <>
    <div className="bg-[whitesmoke] sm:space-y-4">
      <div className=" py-7">
        <div className="w-[80%] border-t-2 border-[#007cff] rounded-md mx-auto p-3 flex gap-2 h-[30vh] bg-white ">
          <div className="w-[40%]">
            <img src={doc} className='' alt="" />
          </div>
          <div className="w-[60%] ">
            <h2 className='text-gray-500 text-[15px]  lg:text-lg font-[poppins] '>Welcome Back</h2>
                <h1 className='text-[#007cff] text-[16px] lg:text-2xl font-[poppins]'>
                  {`${user?.user.first_name} ${user?.user.last_name}!`}
                </h1>
            <p className='text-gray-500 text-[7px] lg:text-[13px] font-[poppins]'>We would like to take this opportunity to welcome you to our practice and to thank you 
              for choosing our physicians to participate in your healthcare. We look forward to providing 
              you with personalized, comprehensive health care focusing on wellness and prevention.</p>
          </div>
        </div>
      </div>
      <div className="lg:px-24 lg:py-6 flex flex-col  md:flex-row flex-wrap gap-4 justify-center items-center">
                    <div className="flex justify-around items-center rounded-md text-center h-[150px] w-[200px]  text-gray-500 border-t-2 border-[#007cff] bg-white cursor-pointer duration-300 card  red">
                        {/* <CiDroplet className='inline size-8'/> */}
                        <img src={bp} className='inline size-14' alt="" />
                        <div className="">
                        <p className="text-[0.8] font-semibold tip">Blood Type</p>
                        <p className="text-[1.3em] font-bold text-[#007cff] font-[poppins] tracking-wide second-text">{`${user?.user.btype}`}</p>                        
                        </div>
                    </div>

                <div className="flex justify-around items-center rounded-md text-center h-[150px] w-[200px]  text-gray-500 border-t-2 border-[#007cff] bg-white cursor-pointer duration-300 card blue">
                    {/* <BsHeartPulse className='inline size-8'/> */}
                    <img src={hr} alt="" />
                    <div className="">
                    <p className="text-[0.8] font-semibold tip">Blood Pressure</p>
                    <p className="text-[1.3em] font-bold text-[#007cff] font-[poppins] tracking-wide second-text">{` 110/90`}</p>
                    </div>
                </div>
                <div className="flex justify-around items-center rounded-md text-center h-[150px] w-[200px]  text-gray-500 border-t-2 border-[#007cff] bg-white cursor-pointer duration-300 card green">
                    {/* <BsThermometer className='inline size-8'/> */}
                    <img src={thermo} className='inline w-[5rem] h-[5rem] ' alt="" />
                    <div className="">
                    <p className="text-[0.8] font-semibold tip">Temperature</p>
                    <p className="text-[1.3em] font-bold text-[#007cff] font-[poppins] tracking-wide second-text">{` 36°C`}</p>
                   </div>
                </div>
                <div className="flex justify-around items-center rounded-md text-center h-[150px] w-[200px]  text-gray-500 border-t-2 border-[#007cff] bg-white cursor-pointer duration-300 card green">
                    {/* <GiDna1 className='inline size-8'/> */}
                    <img src={geno} alt="" />
                    <div className="">
                    <p className="text-[0.8em] font-semibold tip">Genotype</p>
                    <p className="text-[1.3em] font-bold text-[#007cff] font-[poppins] tracking-wide second-text">{`${user?.user.genotype}`}</p>
                  </div>
                </div>
               
            </div>
            <div className="flex flex-col lg:flex-row gap-4 mx-4">
              <div className="lg:w-[70%] h-[50vh] rounded-md bg-white ">
                <p className='p-2 font-xl text-gray-500 text-center font-semibold font-[poppins] tracking-wide'>Appointments</p>
              <div className="relative overflow-x-auto shadow-md  sm:rounded-lg ">
              
                    <Appointment/>
                </div>
              </div>
              <div className="lg:w-[30%] h-[50vh] rounded-md bg-white ">
                <p className='p-2 font-xl text-gray-500 text-center font-semibold font-[poppins] tracking-wide'>My Prescriptions</p>
                <table className=" divide-y text-sm text-left min-w-[20rem] m-auto rtl:text-right text-gray-500 ">
                  <thead className="text-xs text-gray-700 uppercase ">
                    <tr>
                      <th scope="col" className="px-6 py-4">Medication Name</th>
                      <th scope="col" className="px-6 py-4">Dosage</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-6 py-4">Chloroquine</td>
                      <td className="px-6 py-4">1-1-1 daily</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
    </div>
    </>
  )
}

export default Home