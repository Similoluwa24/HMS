import React from 'react'
import { Link } from 'react-router-dom'

function DrPrescription() {
  return (
    <>
      <div className="bg-gray-50 shadow-lg rounded-2xl p-8 max-w-4xl m-auto my-10 space-y-8">
    <div className="flex items-center justify-between border-b pb-4 mb-6">
        <h2 className="text-3xl font-bold text-gray-900">Prescription Form</h2>
        <Link 
            to={'/doctor/portal'} 
            className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-5 py-2 rounded-lg shadow-md hover:from-blue-600 hover:to-indigo-700 transition duration-300"
        >
            Back to Portal
        </Link>
    </div>

    <form className="bg-white rounded-lg p-6 shadow-md space-y-6">
        {/* Patient Name Field */}
        <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Patient Name</label>
            <input 
                type="text" 
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter patient name"
            />
        </div>

        {/* Date of Prescription Field */}
        <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Date of Prescription</label>
            <input 
                type="date" 
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
        </div>

        {/* Medications Field */}
        <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Medications</label>
            <textarea 
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                rows="4"
                placeholder="Enter prescribed medications and details (e.g., Paracetamol 500mg - 1 tablet twice a day)"
            ></textarea>
        </div>

        {/* Dosage and Instructions Field */}
        <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Dosage & Instructions</label>
            <textarea 
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                rows="3"
                placeholder="Provide specific dosage and any special instructions"
            ></textarea>
        </div>

        {/* Additional Notes Field */}
        <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Additional Notes</label>
            <textarea 
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                rows="3"
                placeholder="Add any additional notes or warnings"
            ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-right">
            <button 
                type="submit" 
                className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:from-indigo-600 hover:to-blue-700 transition duration-300"
            >
                Submit Prescription
            </button>
        </div>
    </form>
</div>

    </>
  )
}

export default DrPrescription