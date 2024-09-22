import React, { useContext, useState } from 'react'
import Header from '../landinPage/Header'
import { Link } from 'react-router-dom'
import About from '../landinPage/About'
import HospitalContext from '../context/HospitalContext'

function AboutPage() {
    const {faq} = useContext(HospitalContext)
    const [selected, setSelected] = useState(null)

    const toggle = (i) =>{
        if (selected === i) {
            return setSelected(null)
        }
        setSelected(i)
    }
  return (
    <div>
        <div className="abt">
            <Header/>
            <div className="banner-5">
                <div className="space-y-7 content">
                    <div className="text-white py-24 space-y-3 mx-5">
                            <p className='lg:text-xl  text-lg font-[poppins]'>About Us</p>
                            <hr className=' h-[0.2rem]  w-[12%]  bg-[#0075FF]' />                           
                            <h1 className='lg:text-6xl text-2xl  font-bold font-[poppins]'>General Information</h1>
                            <p className=' lg:text-[1rem] text-[12px] pb-6  font-[poppins]'>Get in touch with us to schedule an appointment,<br />
                            ask a question, or share your feedback.  We're here to
                                help. 
                            </p>
                            <div className="space-x-4 BOT0N">
                                <Link to='/doctors' className='bg-[#007cff] text-[white] px-5 py-3 rounded '>
                                <button>View Our Team</button>
                                </Link>
                                <Link to='/appointment' className='bg-[#043040] text-[white] px-5 py-3 rounded '>
                                <button>Book A Visit</button>
                                </Link>
                            </div>
                    </div>
                </div>
            </div>
                <div className="text-[#007cff] mt-6 space-y-3 mx-5">
                        <p className='lg:text-xl text-gray-600 text-lg font-[poppins]'>FREQUENTLY ASKED QUESTIONS</p>
                        <hr className=' h-[0.2rem]  w-[12%]  bg-[#0075FF]' />
                        <h1 className='lg:text-5xl text-xl font-[poppins]'>Our Patients and</h1>
                        <h1 className='lg:text-6xl text-2xl  font-bold font-[poppins]'>OJ Hospitals Doctors</h1>
                        <p className=' lg:text-[1rem] text-[12px] pb-6 text-gray-600 font-[poppins]'>Committed to delivering exceptional patient
                             care, our team of dedicated healthcare <br /> professionals works tirelessly to provide compassionate, high-quality medical 
                             services to our community
                        </p>
                  </div>

                <div className="grid lg:grid-cols-2 lg:max-w-[70rem] mt-12 m-auto wrapper">
                    <div className=" space-y-3 img">
                        <img src="/image/abt.jpg" alt="" className='h-[290px] rounded' />
                        <img src="/image/abt2.jpg" alt="" className='h-[290px] rounded' />
                    </div>
                    <div className=" space-y-3 accordion">
                        {faq.map((item, i) =>(
                            <div className="bg-[whitesmoke] space-y-3 lg:w-[500px] p-2 item">
                                <div  className="flex justify-between title" onClick={()=>toggle(i)}>
                                    <h1 className='font-bold text-[#004cff] text-[1rem] font-[poppins] '>{item.question} </h1>
                                    <span>{selected === i ? "-" : "+" }</span>
                                </div>
                                <div className={selected === i ? "contet show" :"contet"}>
                                    <p>{item.answer} </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            
        </div>
    </div>
  )
}

export default AboutPage