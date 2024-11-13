import React from 'react';

function AppointmentDetails() {
  

  return (
    <div className="p-6 bg-white border border-gray-200 shadow-md rounded-lg max-w-4xl mx-auto mt-8">
      <h2 className="text-2xl font-semibold text-[#007cff] mb-4">Appointment Details</h2>
      <div className="space-y-3">
        <p><strong>Patient Name:</strong> John Doe</p>
        <p><strong>Date:</strong> 2024-11-15</p>
        <p><strong>Time:</strong> 10:00 AM</p>
        <p><strong>Status:</strong> Pending</p>
      </div>

      <div className="mt-6 flex justify-between">
        <button 
          
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg">
          Confirm
        </button>
        <button 
           
          className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg">
          Cancel
        </button>
      </div>
    </div>
  );
}

export default AppointmentDetails;
