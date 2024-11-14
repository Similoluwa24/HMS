import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import HospitalContext from '../../context/HospitalContext';

function Diagnosis() {
    const {user,showHide} = useContext(HospitalContext)
    const [diagnosis, setDiagnosis] = useState('')
    const [doctor, setDoctor] = useState('')
    const [plan, setPlan] = useState('')
    const [medication, setMedication] = useState('')
    const [notes, setNotes] = useState('')

    const addDiagnosis = async(e)=>{
        e.preventDefault()
        const res = await fetch('qwertyui',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            credentials:'include',
            body:JSON.stringify({diagnosis,doctor,plan,medication,notes})
        })
        const data = await res.json()
        if (!res.ok) {
            console.log(data);
            showHide('error',data.errMessage)
        } else {
            showHide('success','Diagnosis Added!')
        }
    }
    
    
  return (
    <>
        <div className="bg-gray-50 shadow-lg rounded-2xl p-8 max-w-4xl m-auto my-10 space-y-8">
    <div className="flex items-center justify-between border-b pb-4 mb-6">
        <h2 className="text-3xl font-bold text-gray-900">New Diagnosis Form</h2>
        <Link 
            to={'/user/patient-history'} 
            className="bg-gradient-to-r from-green-500 to-teal-600 text-white px-5 py-2 rounded-lg shadow-md hover:from-green-600 hover:to-teal-700 transition duration-300"
        >
            Back to History
        </Link>
    </div>

    <form className="bg-white rounded-lg p-6 shadow-md space-y-6">
        {/* Diagnosis Field */}
        <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Diagnosis</label>
            <input 
                type="text" 
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Enter diagnosis"
                onChange={(e)=>{setDiagnosis(e.target.value)}}
            />
        </div>

        {/* Doctor Field */}
        <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Doctor</label>
            <input 
                type="text"
                value={`Dr. ${user?.user.first_name}  ${user?.user.last_name}`}
                disabled
                className="w-full border border-gray-300 capitalize rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Enter doctor's name"
                onChange={(e)=>{setDoctor(e.target.value)}}
            />
        </div>

        {/* Treatment Plan Field */}
        <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Treatment Plan</label>
            <textarea 
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
                rows="3"
                placeholder="Describe the treatment plan"
                onChange={(e)=>{setPlan(e.target.value)}}
            ></textarea>
        </div>

        {/* Medications Field */}
        <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Medications</label>
            <input 
                type="text" 
                onChange={(e)=>{setMedication(e.target.value)}}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="List medications (comma-separated)"
            />
        </div>

        {/* Notes Field */}
        <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Notes</label>
            <textarea 
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
                rows="4"
                placeholder="Additional notes or observations"
                onChange={(e)=>{setNotes(e.target.value)}}
            ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-right">
            <button 
                type="submit" 
                className="bg-gradient-to-r from-teal-500 to-green-600 text-white px-6 py-2 rounded-lg shadow-md hover:from-teal-600 hover:to-green-700 transition duration-300"
            >
                Submit Diagnosis
            </button>
        </div>
    </form>
</div>

    </>
  )
}

export default Diagnosis