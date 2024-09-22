import React from 'react'
import { CiDroplet } from "react-icons/ci";
import { BsHeartPulse } from "react-icons/bs";
import { BsThermometer } from "react-icons/bs";
import {  IoPersonCircleOutline } from "react-icons/io5";

function Home() {
  return (
    <div className='bg-[#fff] flex flex-col lg:flex-row  w-full h-screen'>
      {/* setion 1 */}
        <section className=' lg:w-[80%]'>
          {/* vital boxes */}
          <div className="flex flex-col lg:flex-row gap-3 m-5 boxes">
            <div className="box-1 rounded-md h-[150px] md:w-[250px] w-[150px] md:h-[250px] text-[#fff] bg-gradient-to-r from-[#004cff] to-[#00c1ff]  ">
              <div className="mx-12 md:mx-24 mt-6 icon">
                <CiDroplet className='size-8 md:size-20'></CiDroplet>
              </div>
              <div className="lg:mt-5 md:space-y-3 icon-text">
                <p className='text-center font-semibold font-[SUSE] md:text-2xl'>Blood Pressure</p>
                <p className='text-center font-bold font-[SUSE] md:text-3xl'>100/70</p>
              </div>
            </div>
            <div className="box-2 rounded-md h-[150px] md:w-[250px] w-[150px] md:h-[250px] text-[#004cff] bg-[#fff] ">
                <div className="mx-12 md:mx-20 mt-6 icon">
                  <BsHeartPulse className='size-8 md:size-20'></BsHeartPulse>
                </div>
                  <div className="lg:mt-5 md:space-y-3 icon-text">
                    <p className='text-center font-semibold font-[SUSE] md:text-2xl'>Heart Rate</p>
                    <p className='text-center font-bold font-[SUSE] md:text-3xl uppercase'>78 bmp</p>
                  </div>
            </div>
            <div className="box-3 h-[150px] md:w-[250px] rounded-md w-[150px] md:h-[250px] text-[#fff] bg-gradient-to-r from-[#004cff] to-[#00c1ff]  ">
                <div className="mx-12 md:mx-20 mt-6 icon">
                  <BsThermometer className='size-8 md:size-20'></BsThermometer>
                </div>
                  <div className="lg:mt-5 md:space-y-3 icon-text">
                    <p className='text-center font-semibold font-[SUSE] md:text-2xl'>Temperature</p>
                    <p className='text-center font-bold font-[SUSE] md:text-3xl'>33.6 °C</p>
                  </div>
                </div>
          </div>
          {/* vital boxes end */}
        </section>
        {/* section 2 */}
        <div className="bg-[#B9D9EB] w-[100%] lg:w-[20%] h-screen boxes-2">
        lorem200
        </div>
    </div>
  )
}

export default Home