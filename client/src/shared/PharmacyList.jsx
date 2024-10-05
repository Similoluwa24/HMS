import React, { useContext, useEffect, useState } from 'react'
import { CiEdit } from 'react-icons/ci'
import { RiDeleteBinLine } from "react-icons/ri";
import Modals from './Modals'
import { TbTrashX } from 'react-icons/tb';
import { FaXmark } from "react-icons/fa6";
import HospitalContext from '../context/HospitalContext';
import { useNavigate } from 'react-router-dom';

function PharmacyList() {
    const {addPharmacy, pharmacy, deletePharmacy, editPharmacy, editPharmacyHandler, updatePharmacyHandler} = useContext(HospitalContext)
    const [openDelete, setOpenDelete] = useState(false)
    const [openAdd, setOpenAdd] = useState(false)
    const [openEdit, setOpenEdit] = useState(false)
    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [cName, setCname] = useState('')
    const [pDate, setPdate] = useState('')
    const [price, setPrice] = useState('')
    const [eDate, setEdate] = useState('')
    const [stock, setStock] = useState('')
    const [deleteId, setDeleteId] =  useState(null)
    const [editId, setEditId] =  useState(null)
    const navigate = useNavigate()

    const handleSubmit = (e)=>{
        e.preventDefault()
        const newMed = {
            name,
            category,
            cName,
            pDate,
            price,
            eDate,
            stock
        }
        addPharmacy(newMed)
        setOpenAdd(false)
    }
    const handleDeleteClick  = (id) =>{
        setDeleteId(id)
        setOpenDelete(true)
    } 
    const handleEditClick  = (item) =>{
        editPharmacyHandler(item)
        setOpenEdit(true)
    } 

    const handleDelete = ()=> {
        deletePharmacy(deleteId)
        setOpenDelete(false)
    }
    
   useEffect(()=>{
    if (editPharmacy.edit === true) {
        setName(editPharmacy.items.name)
        setCategory(editPharmacy.items.category)
        setCname(editPharmacy.items.cName)
        setPrice(editPharmacy.items.price)
        setPdate(editPharmacy.items.pDate)
        setEdate(editPharmacy.items.eDate)
        setStock(editPharmacy.items.stock)
    }
   },[editPharmacy])

   const editSubmitHandler = (e)=>{
    e.preventDefault()
    const updatedMed = {
        name,
        category,
        cName,
        price,
        pDate,
        eDate,
        stock
    }
    updatePharmacyHandler(editPharmacy.items.id, updatedMed)
    setOpenEdit(false)
   }
  return (
    <>
        <div className="space-y-4 m-4">
            <div className="flex justify-end">
                <button onClick={()=>{setOpenAdd(true)}}  className='bg-[#007cff] lg:p-2 text-[12px] font-[poppins] text-white rounded-lg'>Add Medications +</button>
            </div>
            <div className="relative overflow-x-auto  shadow-md sm:rounded-lg ">
                <table className=" divide-y text-sm text-left  min-w-[65rem] m-auto rtl:text-right text-gray-500 ">
                        <thead className="text-xs text-gray-700 uppercase ">                       
                            <tr>
                                <th scope="col" className="px-6 py-3 bg-[#007ccfb6] text-white">
                                    Medicine Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Category
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Company Name
                                </th>
                                <th scope="col" className="px-6 py-3 text-white bg-[#007ccfb6] ">
                                    Purchase Date
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Price
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Expiry Date
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Stock
                                </th>
                                <th scope="col" className="px-6 py-3 bg-[#007ccfb6] text-white">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {pharmacy.map((item,index)=>(

                            <tr key={index} className="border-b capitalize border-gray-200 dark:border-gray-700">
                                <td className="px-6 py-4 bg-[#007ccfb6] text-white">{item.name} </td>
                                <td className="px-6 py-4">{item.category}</td>
                                <td className="px-6 py-4">{item.cName}</td>
                                <td className="px-6 py-4 bg-[#007ccfb6] text-white">{item.pDate}</td>
                                <td className="px-6 py-4">{item.price}</td>
                                <td className="px-6 py-4">{item.eDate}</td>
                                <td className="px-6 py-4">{item.stock}</td>
                                <td className="px-6 py-4 bg-[#007ccfb6] text-white">
                                    <div className="flex space-x-3">
                                        <span onClick={()=>{handleEditClick(item)}}>< CiEdit/></span>
                                        <span onClick={()=>{handleDeleteClick(item.id)}}><RiDeleteBinLine/></span>
                                    </div>
                                </td>
                            </tr>
                            ))}
                        </tbody>

                    </table>
                </div>
            </div>

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
                            <p className=''>are you sure you want to delete ?</p>
                            <ul className='space-x-3'>
                                <li>Name:Panadol</li>
                                <li>Company: GalaxoSmithKline</li>
                                <li>Expiry Date: 31/12/2030</li>
                                <li>stock: 145</li>                           
                            </ul>
                        </div>
                        <div className="flex justify-center gap-4 footer">
                            <button onClick={()=>{setOpenDelete(false)}} className='bg-gray-200 py-3 px-5   rounded-md '>Cancel</button>
                            <button  onClick={handleDelete} className='bg-red-600 py-3 px-5  rounded-md'>Delete</button>
                        </div>
                    </div>
                </Modals>
            }
            {/* modal for delete */}
            {/* modal for adding */}
                {openAdd &&
                    <Modals>
                    <div className="max-w-[30rem] py-4 space-y-2 m-auto">
                        <div className="flex justify-end ">
                            <FaXmark onClick={()=>{setOpenAdd(false)}}/>
                        </div>
                        <form action="" className='space-y-3' onSubmit={handleSubmit}>
                            <div className="flex gap-3">
                                <div className="w-[48%] ">
                                    <label htmlFor="" className="block mb-2 text-sm font-medium">Medicine Name</label>
                                    <input type="text" name="" id="" onChange={(e)=>{setName(e.target.value)}} className="bg-gray-50 border border-gray-300 text-[#007CFF] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  placeholder-[#007CFF] dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                </div>
                                <div className="w-[48%] ">
                                    <label htmlFor="" className="block mb-2 text-sm font-medium">Category</label>
                                    <input type="text" name="" id="" onChange={(e)=>{setCategory(e.target.value)}}  className="bg-gray-50 border border-gray-300 text-[#007CFF] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  placeholder-[#007CFF] dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                            </div>
                            </div>
                            <div className="flex gap-3">
                                <div className="w-[48%] ">
                                    <label htmlFor="" className="block mb-2 text-sm font-medium">Company Name</label>
                                    <input type="text" name="" id="" onChange={(e)=>{setCname(e.target.value)}}  className="bg-gray-50 border border-gray-300 text-[#007CFF] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  placeholder-[#007CFF] dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                </div>
                                <div className="w-[48%] ">
                                    <label htmlFor="" className="block mb-2 text-sm font-medium">Purchase Date</label>
                                    <input type="date" name="" id="" onChange={(e)=>{setPdate(e.target.value)}}  className="bg-gray-50 border border-gray-300 text-[#007CFF] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  placeholder-[#007CFF] dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                            </div>
                            </div>
                            <div className="flex gap-3">
                                <div className="w-[48%] ">
                                    <label htmlFor="" className="block mb-2 text-sm font-medium">Price</label>
                                    <input type="text" name="" id="" onChange={(e)=>{setPrice(e.target.value)}}  className="bg-gray-50 border border-gray-300 text-[#007CFF] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  placeholder-[#007CFF] dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                </div>
                                <div className="w-[48%] ">
                                    <label htmlFor="" className="block mb-2 text-sm font-medium">Expiry Date</label>
                                    <input type="date" name="" id="" onChange={(e)=>{setEdate(e.target.value)}}  className="bg-gray-50 border border-gray-300 text-[#007CFF] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  placeholder-[#007CFF] dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                            </div>
                            </div>
                            <div className="flex  gap-3">
                                <div className="w-[48%] ">
                                    <label htmlFor="" className="block mb-2 text-sm font-medium">Quantity In Stock</label>
                                    <input type="text" name="" id="" onChange={(e)=>{setStock(e.target.value)}}  className="bg-gray-50 border border-gray-300 text-[#007CFF] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  placeholder-[#007CFF] dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                </div>
                            
                            </div>
                            <div className="flex justify-start gap-5 m-auto">
                                <button type="" onClick={()=>{setOpenAdd(false)}} className="text-white hover:text-white border bg-gray-400 w-[200px]   font-medium rounded-md text-sm px-5 py-2.5 text-center me-2 mb-2    ">Cancel</button>      
                                <button type="submit" className="text-white hover:text-white border bg-[#007cff] w-[200px] border-blue-700 hover:bg-blue-800  font-medium rounded-md text-sm px-5 py-2.5 text-center me-2 mb-2    ">Create Medications</button>
                            </div>
                        </form>
                    </div>
                    </Modals>
                }
            {/* modal for adding */}


              {/* modal for editing */}
              {openEdit && 
                    <Modals>
                    <div className="max-w-[30rem] py-4 space-y-2 m-auto">
                        <div className="flex justify-end ">
                            <FaXmark onClick={()=>{setOpenEdit(false)}}/>
                        </div>
                        <form  className='space-y-3' onSubmit={editSubmitHandler} action="" >
                            <div className="flex gap-3">
                                <div className="w-[48%] ">
                                    <label htmlFor="" className="block mb-2 text-sm font-medium">Medicine Name</label>
                                    <input type="text" name="" value={name} id="" onChange={(e)=>{setName(e.target.value)}} className="bg-gray-50 border border-gray-300 text-[#007CFF] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  placeholder-[#007CFF] dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                               {console.log(editPharmacy)
                               }
                                </div>
                                <div className="w-[48%] ">
                                    <label htmlFor="" className="block mb-2 text-sm font-medium">Category</label>
                                    <input type="text" name="" value={category} id="" onChange={(e)=>{setCategory(e.target.value)}}  className="bg-gray-50 border border-gray-300 text-[#007CFF] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  placeholder-[#007CFF] dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                            </div>
                            </div>
                            <div className="flex gap-3">
                                <div className="w-[48%] ">
                                    <label htmlFor="" className="block mb-2 text-sm font-medium">Company Name</label>
                                    <input type="text" name="" id="" value={cName} onChange={(e)=>{setCname(e.target.value)}}  className="bg-gray-50 border border-gray-300 text-[#007CFF] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  placeholder-[#007CFF] dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                </div>
                                <div className="w-[48%] ">
                                    <label htmlFor="" className="block mb-2 text-sm font-medium">Purchase Date</label>
                                    <input type="date" name="" id="" value={pDate} onChange={(e)=>{setPdate(e.target.value)}}  className="bg-gray-50 border border-gray-300 text-[#007CFF] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  placeholder-[#007CFF] dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                            </div>
                            </div>
                            <div className="flex gap-3">
                                <div className="w-[48%] ">
                                    <label htmlFor="" className="block mb-2 text-sm font-medium">Price</label>
                                    <input type="text" name="" id="" value={price} onChange={(e)=>{setPrice(e.target.value)}}  className="bg-gray-50 border border-gray-300 text-[#007CFF] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  placeholder-[#007CFF] dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                </div>
                                <div className="w-[48%] ">
                                    <label htmlFor="" className="block mb-2 text-sm font-medium">Expiry Date</label>
                                    <input type="date" name="" id="" value={eDate} onChange={(e)=>{setEdate(e.target.value)}}  className="bg-gray-50 border border-gray-300 text-[#007CFF] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  placeholder-[#007CFF] dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                            </div>
                            </div>
                            <div className="flex  gap-3">
                                <div className="w-[48%] ">
                                    <label htmlFor="" className="block mb-2 text-sm font-medium">Quantity In Stock</label>
                                    <input type="text" name="" id="" value={stock} onChange={(e)=>{setStock(e.target.value)}}  className="bg-gray-50 border border-gray-300 text-[#007CFF] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  placeholder-[#007CFF] dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                </div>
                            
                            </div>
                            <div className="flex justify-start gap-5 m-auto">
                                <button type=""  className="text-white hover:text-white border bg-gray-400 w-[200px]   font-medium rounded-md text-sm px-5 py-2.5 text-center me-2 mb-2    ">Cancel</button>      
                                <button type="submit" className="text-white hover:text-white border bg-[#007cff] w-[200px] border-blue-700 hover:bg-blue-800  font-medium rounded-md text-sm px-5 py-2.5 text-center me-2 mb-2    ">Update Medications</button>
                            </div>
                        </form>
                    </div>
                    </Modals>
              }
                
            {/* modal for editing */}

            
    </>
  )
}

export default PharmacyList