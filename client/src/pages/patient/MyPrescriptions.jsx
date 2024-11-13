import React from 'react'
import { Link } from 'react-router-dom'

function MyPrescriptions() {
  return (
    <>
        <div className="bg-gray-50 shadow-lg rounded-2xl p-8 max-w-4xl m-auto my-10 space-y-8">
    <div className="flex items-center justify-between border-b pb-4 mb-6">
        <h2 className="text-3xl font-bold text-gray-900">Patient Prescription History</h2>
        <Link
            to={'/doctor/portal'} 
            className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-5 py-2 rounded-lg shadow-md hover:from-blue-600 hover:to-indigo-700 transition duration-300"
        >
            Back to Portal
        </Link>
    </div>

    {/* Prescription Records */}
    <div className="space-y-6">
        {/* Prescription Card 1 */}
        <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition duration-300">
            <div className="flex justify-between items-center mb-2">
                <h4 className="text-xl font-semibold text-gray-800">Prescription Date: March 10, 2023</h4>
                <span className="text-sm text-gray-500">Dr. Emily Smith</span>
            </div>
            <div className="text-gray-700 space-y-2">
                <p><strong>Patient:</strong> John Doe</p>
                <p><strong>Medications:</strong> Paracetamol 500mg - 1 tablet twice a day</p>
                <p><strong>Dosage & Instructions:</strong> Take after meals; avoid alcohol.</p>
                <p><strong>Additional Notes:</strong> Monitor for any signs of dizziness.</p>
            </div>
        </div>

        {/* Prescription Card 2 */}
        <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition duration-300">
            <div className="flex justify-between items-center mb-2">
                <h4 className="text-xl font-semibold text-gray-800">Prescription Date: April 15, 2023</h4>
                <span className="text-sm text-gray-500">Dr. Michael Johnson</span>
            </div>
            <div className="text-gray-700 space-y-2">
                <p><strong>Patient:</strong> John Doe</p>
                <p><strong>Medications:</strong> Ibuprofen 400mg - 1 tablet every 6 hours as needed</p>
                <p><strong>Dosage & Instructions:</strong> Take with water; do not exceed 4 tablets in 24 hours.</p>
                <p><strong>Additional Notes:</strong> Stop use if stomach pain occurs.</p>
            </div>
        </div>

        {/* Prescription Card 3 */}
        <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition duration-300">
            <div className="flex justify-between items-center mb-2">
                <h4 className="text-xl font-semibold text-gray-800">Prescription Date: May 20, 2023</h4>
                <span className="text-sm text-gray-500">Dr. Sarah Lee</span>
            </div>
            <div className="text-gray-700 space-y-2">
                <p><strong>Patient:</strong> John Doe</p>
                <p><strong>Medications:</strong> Amoxicillin 250mg - 1 capsule three times a day for 7 days</p>
                <p><strong>Dosage & Instructions:</strong> Take with food; complete the full course.</p>
                <p><strong>Additional Notes:</strong> Notify if allergic reactions occur.</p>
            </div>
        </div>
    </div>
</div>









      {/* <div className="relative my-7 mx-3 overflow-x-auto bg-white  shadow-md  sm:rounded-lg ">
        <table className=" divide-y text-sm text-left w-full  m-auto rtl:text-right text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase ">
              <tr>
                  <th scope="col" className="px-6 py-3 bg-[#007ccfb6] text-white">Medication Name</th>
                  <th scope="col" className="px-6 py-3 ">Dosage</th>
                  <th scope="col" className="px-6 py-3 bg-[#007ccfb6] text-white">Created By</th>
                  <th scope="col" className="px-6 py-3 ">Date</th>
                  <th scope="col" className="px-6 py-3 bg-[#007ccfb6] text-white">Disease</th>
                  
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope="col" className="px-6 py-3 bg-[#007ccfb6] text-white">Chloroquine</td>
                <td scope="col" className="px-6 py-3 ">1-1-1 daily</td>
                <td scope="col" className="px-6 py-3 bg-[#007ccfb6] text-white">Dr. Olaoba Adenike</td>
                <td scope="col" className="px-6 py-3 ">12/12/2024</td>
                <td scope="col" className="px-6 py-3 bg-[#007ccfb6] text-white">Malaria +2</td>
              </tr>
            </tbody>
        </table>
      </div> */}
    </>
  )
}

export default MyPrescriptions