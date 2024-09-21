import React from 'react'
import Header from '../landinPage/Header'
import { Link } from 'react-router-dom'
import About from '../landinPage/About'

function AboutPage() {
  return (
    <div>
        <div className="abt">
            <Header/>
            <div className="banner-5">
                <div className=" content">
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
            <About/>

            </div>
        </div>
    </div>
  )
}

export default AboutPage