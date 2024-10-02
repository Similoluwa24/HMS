import React, { useContext, useState } from 'react'
import { CiEdit } from 'react-icons/ci'
import { RiDeleteBinLine } from "react-icons/ri";
import HospitalContext from '../context/HospitalContext';
import { Link } from 'react-router-dom';
import Modals from './Modals';
import { TbTrashX } from 'react-icons/tb';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AppointmentList() {
  const {appointment, deleteAppointment,editAppointmentHandler} = useContext(HospitalContext)
  const [modal, setModal] = useState(false)
  const [search, setSearch] = useState('')
  const [appointmentIdToDelete, setAppointmentIdToDelete] = useState(null)
  const notify = ()=>{
    toast.success(`Appointment Deleted`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
  }
  
  const handleDeleteClick = (id) => {
    setModal(true)
    setAppointmentIdToDelete(id)
  }

  const handleDelete = () => {
    deleteAppointment(appointmentIdToDelete)
    setModal(false)
    notify()
  }

  
  return (

    <>
             <div className="my-4 flex gap-3 justify-between b0tt0n">
                <input type="search" id="default-search" onChange={(e)=>{setSearch(e.target.value)}} className="block w-[75%] p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search By Firstname..." required />
                <Link to='/admin/createapp' className='bg-[#007cff] md:p-2 text-[12px] md:text-[0.7rem] font-[poppins] text-white rounded-lg'>Add New Appointment + </Link>
           </div>
           <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
              <table className=" divide-y text-sm text-left min-w-[65rem] m-auto rtl:text-right text-gray-500 ">
                <thead className="text-xs text-gray-700 uppercase ">
                    <tr>
                        <th scope="col" className="px-6 py-3 bg-[#007ccfb6] text-white">
                            ID
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Full Name
                        </th>
                        <th scope="col" className="px-6 py-3 ">
                            Email
                        </th>
                        <th scope="col" className="px-6 py-3 text-white bg-[#007ccfb6] ">
                            Doctor
                        </th>
                        <th scope="col" className="px-6 py-3">
                           Appointment Date
                        </th>
                        <th scope="col" className="px-6 py-3">
                           Appointment Time
                        </th>
                        <th scope="col" className="px-6 py-3 bg-[#007ccfb6] text-white">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                      {appointment.filter((item)=>{
                        return search.toLowerCase() === ""? item : item.first_name.toLowerCase().includes(search)
                      }).map((item, index) => (

                        <tr key={index} className="border-b border-gray-200 dark:border-gray-700">
                            <td scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap bg-[#007ccfb6] ">
                                {item.id}
                            </td>
                            <td className="px-6 capitalize py-4">
                                {`${item.first_name} ${item.last_name}`}
                            </td>
                            <td className="px-6 py-4">
                                {item.email}
                            </td>
                            <td className="px-6 py-4 bg-[#007ccfb6] text-white">
                                {item.doctor}
                            </td>
                            <td className="px-6 py-4">
                                {item.date}
                            </td>
                            <td className="px-6 py-4">
                                {item.time}
                            </td>
                            <td className="px-6 space-x-2 text-center py-4 bg-[#007ccfb6] text-white">                        
                               <Link to={`/admin/editapp/${item.id}`} onClick={()=>{editAppointmentHandler({item})}}> <span ><CiEdit className='inline'/></span></Link>
                                <span onClick={()=> handleDeleteClick(item.id)}><RiDeleteBinLine className='inline'/></span>
                                {/* <span onClick={()=>{deleteAppointment(item.id)}}><RiDeleteBinLine className='inline'/></span> */}
                            </td>
                        </tr>            
              ))}
                </tbody>
            </table>

          {modal &&
            <Modals>
                <div className="max-w-[30rem] py-4 space-y-2 m-auto">
                    <div className="flex justify-end">
                        <button onClick={()=>{setModal(false)}} className='text-end'>X</button>
                    </div>
                     <div className="flex justify-center">
                    <TbTrashX className='size-16 p-3 bg-red-600 rounded-full text-white flex '/>
                     </div>
                     <div className="m-auto space-y-3 capitalize text-gray-600 text-center">
                         <p className=''>are you sure you want to delete ?</p>
                         <p className='capitalize'>Are you sure you want to deactivate your account? All of your data will be permanently removed.
                         This action cannot be undone.</p>
                     </div>
                     <div className="flex justify-center gap-4 footer">
                        <button onClick={()=>{setModal(false)}} className='bg-gray-200 py-3 px-5   rounded-md '>Cancel</button>
                        <button onClick={handleDelete} className='bg-red-600 py-3 px-5  rounded-md'>Delete</button>
                     </div>
                </div>
            </Modals>
          } 
         <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme={'colored'}
              />
      </div>
    </>
  )
}

export default AppointmentList;