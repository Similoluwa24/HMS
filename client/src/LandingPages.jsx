import React from 'react'
import { Link } from 'react-router-dom' 
import { MdLocalHospital } from "react-icons/md";
import { CiMenuKebab } from "react-icons/ci";
import { MdOutlineEmergency, MdPregnantWoman } from "react-icons/md";
import { FaBedPulse, FaXRay } from "react-icons/fa6";
import { BsHeartPulse } from "react-icons/bs";
import { TbPhysotherapist } from "react-icons/tb";
import { GiMedicinePills } from "react-icons/gi";
import { FaHeartbeat,  FaBaby } from "react-icons/fa";


function LandingPages() {
  return (
    <>
        <div className="home">
          {/* Header Start */}
          <div className="flex bg-white justify-between px-6 py-2 header border-b-2 border-[#0000FF]  ">
            <div className=" logo">
              <MdLocalHospital className='inline size-12 p-2 border-r-2 border-[#0000FF] text-[#0000FF]'></MdLocalHospital>
              <p className='inline text-2xl p-2 text-[#0000FF]'>OJ Hospital</p>
            </div>
            <div className="text">
              <ul className='hidden lg:flex space-x-3 pr-3 header-list'>
                <li className='border  text-[15px] border-[#0000FF] hover:border-[#0000FF] hover:bg-[#0000FF] hover:text-white duration-200  p-3 rounded-lg text-[#0000FF]'><Link to=""> Find Doctors</Link></li>
                <li className='border  text-[15px] border-[#0000FF] hover:border-[#0000FF] hover:bg-[#0000FF] hover:text-white duration-200  p-3 rounded-lg text-[#0000FF]'><Link to="/auth/login">Login</Link></li>
                <li className='border  text-[15px] border-[#0000FF] hover:border-[#0000FF] hover:bg-[#0000FF] hover:text-white duration-200  p-3 rounded-lg text-[#0000FF]'><Link to="/auth/register"> Sign Up</Link></li>
                
              </ul>
            <div className="lg:hidden navbar">
              <CiMenuKebab className=' size-12 p-2 lg:hidden text-[#0000FF]'></CiMenuKebab>
            </div>
            </div>
          </div>
          {/* Header Ends */}
          {/* Banner Starts */}
          <div className="relative banner">
            <div className="text-[#0000FF] capitalize banner-text">
            <p className='text-5xl pl-6 pt-10 lg:text-7xl font-bold head'>Restoring Health,<br /> Renewing Hope</p>
            <p className='lg:text-lg text-[#0000FF] py-6 pl-3 commit font-semibold'>we are committed to helping our patients regain their health and well-being, while also 
              <br /> providing emotional support and encouragement.</p>
            </div>
            <div className="button">
            <button className='border  lg:text-[18px] text-center border-[#0000FF] font-normal hover:bg-white hover:text-[#0000FF] lg:ml-64 lg:w-[250px] h-14 hover:border-[#0000FF] bg-[#0000FF]  duration-200  p-3 rounded text-white ini'><Link to="">Book an appointment</Link></button>
            </div>
            <div className="absolute bottom-0 right-0 space-x-4 rounded-lg flex p-5 lg:space-x-12 text-white  testi">
              <div className="text-1">
                <p className='text-center text-4xl font-bold  '>10+</p>
                <p className='text-[15px] capitalize ini'>years experience</p>
              </div>
              <div className="text-2">
                <p className='text-center text-4xl font-bold  '>500+</p>
                <p className='text-[15px] capitalize ini'>satisfied patient</p>
              </div>
              <div className="text-3">
                <p className='text-center text-4xl font-bold  '>85%</p>
                <p className='text-[15px] capitalize ini'>client satisfaction rating</p>
              </div>
            </div>
              {/* banner done */}
          </div>
               {/* services */}
            <div className="bg-[#E1EBEE]  shadow-xl stage">
                <h1 className='text-center pt-7 font-[oswald] text-6xl font-bold text-[#0000FF] serve'>Our Services</h1>
               <div className="grid lg:grid-cols-2 gap-4 lg:max-w-[70rem] m-auto w-full py-5 px-2 service">

               <div className="min-w-fit   p-6 box-1 ">
                  <div className="lg:ml-52 icon">
                  <MdOutlineEmergency className='inline size-20  p-2   text-[#0000FF]'></MdOutlineEmergency>
                  </div>
                  <div className="texts">
                   <p className='lg:text-center font-[lora] text-[1.5rem] font-semibold text-[#0000FF]'>Emergency Care</p>
                   <p className='lg:text-center font-[oswald]  lg:text-lg font-light text-[#0000FF]'>OJ Hospital's Emergency Service provides 24/7 care for urgent medical needs.
                     The department is equipped to handle a range of emergencies, with a team of experienced staff, state-of-the-art equipment, and specialized care for pediatric patients. The 
                    service is committed to providing timely, effective, and compassionate care to patients in emergency situations.</p>
                  </div>
                </div>

                <div className="min-w-fit  p-5 box-2">
                  <div className=" icon">
                  <FaBedPulse className='inline size-20 lg:ml-48  p-2  text-[#0000FF]'></FaBedPulse>
                  </div>
                  <div className="texts">
                    <p className='lg:text-center font-[lora] text-[1.5rem] font-semibold text-[#0000FF]'>Inpatient Care</p>
                    <p className='lg:text-center font-[oswald]  lg:text-lg font-light text-[#0000FF]'>OJ Hospital's Inpatient Care provides personalized,
                       around-the-clock medical attention to patients who require hospitalization. Our team of skilled healthcare professionals
                       deliver high-quality, compassionate care in a comfortable and supportive environment.</p>
                  </div>
                </div>

                <div className="min-w-fit  p-5 box-3">
                  <div classlg:Name="icon">
                  <MdPregnantWoman className='inline size-24 lg:ml-52 p-2  text-[#0000FF]'></MdPregnantWoman>
                  </div>
                  <div className="texts">
                    <p className='lg:text-center font-[lora] text-[1.5rem] font-semibold text-[#0000FF]'>Maternity </p>
                    <p className='lg:text-center font-[oswald]  lg:text-lg font-light text-[#0000FF]'>OJ Hospital's Maternity Care offers a warm and welcoming
                       environment for expectant mothers, providing personalized care and support 
                      throughout pregnancy, childbirth, and postpartum. Our experienced team of obstetricians,
                       midwives, and nurses ensure a safe and joyful experience for new families. </p>
                  </div>
                </div>

                <div className="min-w-fit  p-5 box-4">
                  <div className="icon">
                      <GiMedicinePills className='inline size-20 lg:ml-52 p-2  text-[#0000FF]'></GiMedicinePills>
                  </div>
                  <div className="texts">
                     <p className='lg:text-center font-[lora] text-[1.5rem] font-semibold text-[#0000FF]'>Pharmacy </p> 
                     <p className='lg:text-center font-[oswald]  lg:text-lg font-light text-[#0000FF]'>OJ Hospital's Pharmacy provides convenient and efficient 
                      medication management services to our patients. Our team of licensed pharmacists and technicians work closely with healthcare providers to ensure accurate 
                      and timely dispensing of medications, as well as offer patient education and counseling to promote safe and effective use. </p> 
                  </div>
                </div>

                <div className="min-w-fit  p-5 box-5">
                  <div className="lg:ml-10 icon">
                    <FaHeartbeat className='inline size-20 lg:ml-48  p-2  text-[#0000FF]'></FaHeartbeat>
                  </div>
                  <div className="texts">
                    <p className='lg:text-center font-[lora] text-[1.5rem] font-semibold text-[#0000FF]'>Diagnostic Services</p>
                    <p className='lg:text-center font-[oswald]  lg:text-lg font-light text-[#0000FF]'>OJ Hospital's Diagnostic Services offers a comprehensive range of 
                      diagnostic tests and procedures to help diagnose and manage various medical conditions. Our state-of-the-art facilities and advanced technology, combined
                       with the expertise of our radiologists and technicians, enable accurate and timely diagnosis, allowing for effective treatment and care.</p>
                  </div>
                </div>

                <div className="min-w-fit  p-5 box-6">
                  <div className="lg:ml-12 icon">
                    <FaXRay className='inline size-20 lg:ml-48 p-2  text-[#0000FF]'></FaXRay>
                  </div>
                  <div className="texts">
                      <p className='lg:text-center font-[lora]  text-[1.5rem] font-semibold text-[#0000FF]'>Imaging and Radiology</p>
                      <p className='lg:text-center font-[oswald]  lg:text-lg font-light text-[#0000FF]'>OJ Hospital's Diagnostic Services offers a comprehensive range of diagnostic
                         tests and procedures to help diagnose and manage various medical conditions. Our state-of-the-art facilities and advanced technology, combined with the expertise 
                         of our radiologists and technicians,enable accurate and timely diagnosis, allowing for effective treatment and care.</p>
                  </div>
                </div>

                <div className="min-w-fit   p-5 box-7">
                  <div className="lg:ml-10 icon">
                    <TbPhysotherapist className='inline size-20 lg:ml-48  p-2  text-[#0000FF]'></TbPhysotherapist>
                  </div>
                  <div className="texts">
                    <p className='lg:text-center font-[lora] text-[1.5rem] font-semibold text-[#0000FF]'>Rehabilitation Services</p>
                    <p className='lg:text-center font-[oswald] lg:text-lg font-light text-[#0000FF]'> OJ Hospital, we offer comprehensive rehabilitation services designed to help
                       patients recover from injuries, illnesses, and surgeries. Our team of experienced therapists and healthcare professionals work together to provide personalized and
                        evidence-based care to help patients regain their strength, mobility, and independence.</p>
                  </div>
                </div>

                <div className="min-w-fit  p-5 box-7">
                  <div className="lg:ml-10 icon">
                    <FaBaby className='inline size-20 lg:ml-48  p-2  text-[#0000FF]'></FaBaby>
                  </div>
                  <div className="texts">
                    <p className='lg:text-center font-[lora] text-[1.5rem] font-semibold text-[#0000FF]'>Pediatric Services</p>
                    <p className='lg:text-center font-[oswald] lg:text-lg font-light text-[#0000FF]'>OJ Hospital is committed to providing comprehensive pediatric care for children of
                       all ages. Our team of experienced pediatricians and healthcare professionals are dedicated to delivering the highest quality medical services in a warm, caring, and
                        child-friendly environment.</p>
                  </div>
                </div>
              </div>
              {/* service done */}
            </div>
            {/* footer */}
            <footer>
              <p>Hospital</p>
            </footer>
            {/* footer end */}
        </div>
    </>
  )
}

export default LandingPages