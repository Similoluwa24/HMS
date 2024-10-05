import React, { useContext, useEffect, useState } from 'react'
import { CiEdit } from 'react-icons/ci'
import { RiDeleteBinLine } from 'react-icons/ri'
import Modals from './Modals'
import { FaXmark } from 'react-icons/fa6'
import { TbTrashX } from 'react-icons/tb'
import HospitalContext from '../context/HospitalContext'

function DepartmentList() {
    const {department,addDepartment, deleteDepartment,editDepartment,editDepartmentHandler,updateDepartmentHandler} = useContext(HospitalContext)
    const [openAdd, setOpenAdd] = useState(false)
    const [openDelete, setOpenDelete] = useState(false)
    const [openEdit, setOpenEdit] = useState(false)
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState('')
    const [hod, setHod] = useState('')
    const [status, setStatus] = useState('')
    const [deleteId, setDeleteId] = useState(null)

    const handleSubmit = (e)=>{
        e.preventDefault()
        const newDepart = {
            name,
            description,
            date,
            hod,
            status
        }
        addDepartment(newDepart)
        setOpenAdd(false)
    }
    const handleDeleteClick = (id)=>{
        setDeleteId(id)
        setOpenDelete(true)
    }
    const handleDelete = () =>{
        deleteDepartment(deleteId)
        setOpenDelete(false)
    }
    const handleEditClick = (item)=>{
        editDepartmentHandler(item)
        setOpenEdit(true)
    }
    useEffect(()=>{
        if (editDepartment.edit === true) {
            setName(editDepartment.items.name)
            setDescription(editDepartment.items.description)
            setDate(editDepartment.items.date)
            setHod(editDepartment.items.hod)
            setStatus(editDepartment.items.status)
        }
    },[editDepartment])
    const editHandler = (e)=>{
        e.preventDefault()
        const updatedDept = {
            name,
            description,
            date,
            hod,
            status
        }
        updateDepartmentHandler(editDepartment.items.id, updatedDept)
        setOpenEdit(false)
    }
  return (
    <>
        <div className="space-y-4 m-4">
            <div className="flex justify-end">
                <button  onClick={()=>{setOpenAdd(true)}} className='bg-[#007cff] lg:p-2 text-[12px] font-[poppins] text-white rounded-lg'>Add Department +</button>
            </div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
                <table className=" divide-y text-sm text-left  min-w-[65rem] m-auto rtl:text-right text-gray-500 ">
                        <thead className="text-xs text-gray-700 uppercase ">
                            <tr>
                                <th scope="col" className="px-6 py-3 bg-[#007ccfb6] text-white">
                                    Department Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Description
                                </th>
                                <th scope="col" className="px-6 py-3 text-white bg-[#007ccfb6] ">
                                    Creation Date
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Department Head
                                </th>                               
                                <th scope="col" className="px-6 py-3">
                                    Status
                                </th>
                                <th scope="col" className="px-6 py-3 bg-[#007ccfb6] text-white">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {department?.map((item, index)=>(
                            <tr key={index} className="border-b border-gray-200 dark:border-gray-700">
                                <td className="px-6 py-4 bg-[#007ccfb6] text-white">{item.name}</td>
                                <td className="px-6 py-4 capitalize">{item.description}</td>
                                <td className="px-6 py-4 bg-[#007ccfb6] text-white">{item.date}</td>
                                <td className="px-6 py-4">{item.hod}</td>
                                <td className={`px-6 py-4 capitalize`}>               
                                    <span className={`${item.status === 'active'?'bg-green-200 text-green-950':'bg-gray-300 text-slate-950'} p-2 rounded-md`}>{item.status} </span></td>
                                <td className="px-6 py-4 bg-[#007ccfb6] text-white">
                                    <div className="flex space-x-3">
                                        <span onClick={()=>{handleEditClick(item)}}><CiEdit/></span>
                                        <span onClick={()=>{handleDeleteClick(item.id)}}><RiDeleteBinLine/></span>
                                    </div>
                                </td>
                            </tr>
                            ))}
                        </tbody>

                    </table>
                </div>

                {/* adding modal */}
                {openAdd &&
                    <Modals >
                    <div className="max-w-[30rem] py-4 space-y-2 m-auto">
                        <div className="flex justify-end">
                            <FaXmark onClick={()=>{setOpenAdd(false)}}/>
                        </div>
                        <form className='space-y-4' onSubmit={handleSubmit} action="">
                            <div className="flex gap-4">
                            <div className="w-[48%] ">
                                <label htmlFor="" className="block mb-2 text-sm font-medium">Department Name</label>
                                <input type="text" name="" id="" onChange={(e)=>{setName(e.target.value)}}  className="bg-gray-50 border border-gray-300 text-[#007CFF] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  placeholder-[#007CFF] dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>
                            <div className="w-[48%] ">
                                <label htmlFor="" className="block mb-2 text-sm font-medium">Description</label>
                                <input type="text" name="" id="" onChange={(e)=>{setDescription(e.target.value)}}  className="bg-gray-50 border border-gray-300 text-[#007CFF] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  placeholder-[#007CFF] dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>
                            </div>
                            <div className="flex gap-4">
                            <div className="w-[48%] ">
                                <label htmlFor="" className="block mb-2 text-sm font-medium">Creation Date</label>
                                <input type="date" name="" id="" onChange={(e)=>{setDate(e.target.value)}}  className="bg-gray-50 border border-gray-300 text-[#007CFF] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  placeholder-[#007CFF] dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>
                            <div className="w-[48%] ">
                                <label htmlFor="" className="block mb-2 text-sm font-medium">Department Head</label>
                                <input type="text" name="" id="" onChange={(e)=>{setHod(e.target.value)}}  className="bg-gray-50 border border-gray-300 text-[#007CFF] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  placeholder-[#007CFF] dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>
                            </div>
                            <div className="flex space-x-2 items-center">
                                <label htmlFor="status" className="block mb-2 text-sm font-medium">Status</label>
                                <select name="status" id="" onChange={(e)=>{setStatus(e.target.value)}} className="bg-gray-50 border border-gray-300 text-[#007CFF] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  placeholder-[#007CFF] dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required >
                                    <option value="">Select Status</option>
                                    <option value="active">Active</option>
                                    <option value="inactive">Inactive</option>
                                </select>
                            </div>
                            <div className="flex justify-center gap-5 m-auto">
                                <button type="" onClick={()=>{setOpenAdd(false)}} className="text-white hover:text-white border bg-gray-400 w-[200px]   font-medium rounded-md text-sm px-5 py-2.5 text-center me-2 mb-2    ">Cancel</button>      
                                <button type="submit" className="text-white hover:text-white border bg-[#007cff] w-[200px] border-blue-700 hover:bg-blue-800  font-medium rounded-md text-sm px-5 py-2.5 text-center me-2 mb-2    ">Create Department</button>
                            </div>
                        </form>
                    </div>
                    </Modals>
                }
                {/* adding modal end */}

                 {/* modal for delete */}
            {openDelete &&
                <Modals>
                    <div className="max-w-[30rem] py-4 space-y-2 m-auto">
                        <div className="flex justify-end">
                            <FaXmark onClick={()=>{setOpenDelete(false)}}/>
                        </div>
                        <div className="flex justify-center">
                        <TbTrashX className='size-16 p-3 bg-red-600 rounded-full text-white flex '/>
                        </div>
                        <div className="m-auto space-y-3 capitalize text-gray-600 text-center">
                            <p className=''>Are you sure you want to delete ?</p>
                            <ul className='space-x-3'>
                                <li>Name:Panadol</li>
                                <li>Company: GalaxoSmithKline</li>
                                <li>Expiry Date: 31/12/2030</li>
                                <li>stock: 145</li>                           
                            </ul>
                        </div>
                        <div className="flex justify-center gap-4 footer">
                            <button onClick={()=>{setOpenDelete(false)}} className='bg-gray-200 py-3 px-5   rounded-md '>Cancel</button>
                            <button onClick={handleDelete} className='bg-red-600 py-3 px-5  rounded-md'>Delete</button>
                        </div>
                    </div>
                </Modals>
            }
            {/* modal for delete */}

            {/* edit modal */}
            {openEdit &&
            <Modals >
                <div className="max-w-[30rem] py-4 space-y-2 m-auto">
                    <div className="flex justify-end">
                        <FaXmark onClick={()=>{setOpenEdit(false)}}/>
                    </div>
                    <form className='space-y-4' onSubmit={editHandler}  action="">
                        <div className="flex gap-4">
                        <div className="w-[48%] ">
                            <label htmlFor="" className="block mb-2 text-sm font-medium">Department Name</label>
                            <input type="text" name="" id="" value={name} onChange={(e)=>{setName(e.target.value)}}  className="bg-gray-50 border border-gray-300 text-[#007CFF] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  placeholder-[#007CFF] dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            {console.log(editDepartment)}
                        </div>
                        <div className="w-[48%] ">
                            <label htmlFor="" className="block mb-2 text-sm font-medium">Description</label>
                            <input type="text" name="" id="" value={description} onChange={(e)=>{setDescription(e.target.value)}}  className="bg-gray-50 border border-gray-300 text-[#007CFF] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  placeholder-[#007CFF] dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                        </div>
                        <div className="flex gap-4">
                        <div className="w-[48%] ">
                            <label htmlFor="" className="block mb-2 text-sm font-medium">Creation Date</label>
                            <input type="date" name="" id="" value={date} onChange={(e)=>{setDate(e.target.value)}}  className="bg-gray-50 border border-gray-300 text-[#007CFF] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  placeholder-[#007CFF] dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                        <div className="w-[48%] ">
                            <label htmlFor="" className="block mb-2 text-sm font-medium">Department Head</label>
                            <input type="text" name="" id="" value={hod} onChange={(e)=>{setHod(e.target.value)}}  className="bg-gray-50 border border-gray-300 text-[#007CFF] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  placeholder-[#007CFF] dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                        </div>
                        <div className="flex space-x-2 items-center">
                            <label htmlFor="status" className="block mb-2 text-sm font-medium">Status</label>
                            <select name="status" id="" value={status} onChange={(e)=>{setStatus(e.target.value)}} className="bg-gray-50 border border-gray-300 text-[#007CFF] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  placeholder-[#007CFF] dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required >
                                <option value="">Select Status</option>
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                            </select>
                        </div>
                        <div className="flex justify-center gap-5 m-auto">
                            <button type="" onClick={()=>{setOpenEdit(false)}} className="text-white hover:text-white border bg-gray-400 w-[200px]   font-medium rounded-md text-sm px-5 py-2.5 text-center me-2 mb-2    ">Cancel</button>      
                            <button type="submit" className="text-white hover:text-white border bg-[#007cff] w-[200px] border-blue-700 hover:bg-blue-800  font-medium rounded-md text-sm px-5 py-2.5 text-center me-2 mb-2    ">Create Department</button>
                        </div>
                    </form>
                </div>
             </Modals>
            }
            {/* edit modal */}
            </div>
    </>
  )
}

export default DepartmentList