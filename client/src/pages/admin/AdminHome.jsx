import React, { useContext } from 'react'
import { FaUserDoctor } from "react-icons/fa6";
import { CiUser } from "react-icons/ci";
import { BsJournalBookmark } from "react-icons/bs";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import HospitalContext from '../../context/HospitalContext';
import {Chart as ChartJS, defaults} from 'chart.js/auto'
import {Doughnut, Bar, Line} from 'react-chartjs-2'



defaults.maintainAspectRatio = false
defaults.responsive = true

defaults.plugins.title.display = true
defaults.plugins.title.align = "start"
defaults.plugins.title.fullSize = 20
defaults.plugins.title.color = 'black'
function AdminHome() {
    const {doctors, appointment, patient} = useContext(HospitalContext)
    
  return (
    <>
        <div className=' bg-[#F0F8FF]  space-y-5'>
            <div class="lg:px-24 lg:py-6 flex flex-col md:flex-row flex-wrap gap-4 justify-center items-center">
                    <div class="flex flex-col justify-center items-center text-center h-[100px] w-[200px] rounded-sm text-gray-500 border-t-2 border-[#007cff] bg-white cursor-pointer duration-300 card  red">
                        <CiUser className='inline size-8'/>
                        <p class="text-[1em] font-semibold tip">Users</p>
                        <p class="text-[0.7em] second-text">{`${patient.length} Users`}</p>
                    </div>

                <div class="flex flex-col justify-center items-center text-center h-[100px] w-[200px] rounded-sm text-gray-500 border-t-2 border-[#007cff] bg-white cursor-pointer duration-300 card blue">
                    <FaUserDoctor className='inline size-8'/>
                    <p class="text-[1em] font-semibold tip">Doctors</p>
                    <p class="text-[0.7em] second-text">{`${doctors.length} Doctors`}</p>
                </div>
                <div class="flex flex-col justify-center items-center text-center h-[100px] w-[200px] rounded-sm text-gray-500 border-t-2 border-[#007cff] bg-white cursor-pointer duration-300 card green">
                    <BsJournalBookmark className='inline size-8'/>
                    <p class="text-[1em] font-semibold tip">Appointment</p>
                    <p class="text-[0.7em] second-text">{`${appointment.length} Appointment`}</p>
                </div>
                <div class="flex flex-col justify-center items-center text-center h-[100px] w-[200px] rounded-sm text-gray-500 border-t-2 border-[#007cff] bg-white cursor-pointer duration-300 card green">
                    <FaMoneyBillTrendUp className='inline size-8'/>
                    <p class="text-[1em] font-semibold tip">Earnings</p>
                    <p class="text-[0.7em] second-text">{`150,000 Dollars`}</p>
                </div>
               
            </div>
            <div className="lg:px-16 px-3  space-y-8 graphs">
                <div className=" h-[50vh] w-[350px]  md:w-full p-3 rounded-sm text-gray-500 border-t-2 border-[#007cff] bg-white two">
                    <Line 
                        data={{
                            labels:["Jan", "Feb","Mar", "Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
                            datasets:[
                                {
                                    label:"New Patients",
                                    data:[5,8,10,20,45,65,23,45,23,43,76,10],
                                    borderColor:
                                         "rgba(79, 129, 189, 0.8)"
                                    
                                },
                                {
                                    label:"Old Patients",
                                    data:[15,28,49,10,15,25,53,15,43,63,16,90],
                                    borderColor:"rgba(170, 204, 153, 0.7)"
                                }
                            ]
                        }}
                        options={{
                            plugins:{
                                title:{
                                    text: 'Patient '
                                }
                            }
                        }}
                    />
                </div>
                <div className="flex justify-center flex-col lg:flex-row items-center gap-8">
                    <div className="md:w-[50%] w-[350px]  h-[50vh] p-3  rounded-sm text-gray-500 border-t-2 border-[#007cff] bg-white two">
                       <Doughnut
                        data={{
                            labels:["Malaria", "Typhoid", "Cholera","Cancer","Diabetes"],
                            datasets:[
                                {
                                    label:"Top Diseases",
                                    data:[40,20,30,50, 70],
                                    backgroundColor:[
                                        "rgba(255, 127, 80, 0.9)",
                                        "rgba(170, 204, 153, 0.7)",
                                        "rgba(79, 129, 189, 0.8)",
                                        "rgba(142, 68, 173, 0.8)",
                                        "rgba(152, 255, 229, 0.8)",
                                    ],
                                    borderColor:[
                                        "rgba(255, 127, 80, 0.9)",
                                        "rgba(170, 204, 153, 0.7)",
                                        "rgba(79, 129, 189, 0.8)",
                                        "rgba(142, 68, 173, 0.8)",
                                        "rgba(152, 255, 229, 0.8)",
                                    ]
                                }
                            ]
                        }}
                       />
                    </div>
                    <div className="md:w-[50%] w-[350px] h-[50vh] p-3  rounded-sm text-gray-500 border-t-2 border-[#007cff] bg-white two">
                        <Bar 
                            data={{
                                labels:["Mon", "Tues", "Wed","Thurs", "Fri", "Sat","Sun"],
                                datasets:[
                                    {
                                        label:"Appointment",
                                        data:[20,40,25,48,92,34,14],
                                        backgroundColor:[
                                            "rgba(152, 255, 229, 0.8)",
                                            "rgba(26, 188, 156, 0.9)",
                                            "rgba(245, 222, 179, 0.7)",
                                            "rgba(142, 68, 173, 0.8)",
                                            "rgba(255, 127, 80, 0.9)",
                                            "rgba(170, 204, 153, 0.7)",
                                            "rgba(79, 129, 189, 0.8)"
                                        ],
                                        borderRadius:5
                                    }
                                ]
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}   

export default AdminHome