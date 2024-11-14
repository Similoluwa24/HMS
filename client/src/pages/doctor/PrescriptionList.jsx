import React from 'react';
import { Link } from 'react-router-dom';

function PrescriptionList() {
  const prescriptions = [
    {
      id: 1,
      patientName: 'John Doe',
      date: '2024-11-01',
      ailment: 'Flu and throat infection',
      medications: 'Paracetamol 500mg - 1 tablet twice a day\nAmoxicillin 250mg - 1 capsule three times a day',
      instructions: 'Ensure to take with meals. Hydrate well.',
      notes: 'Patient is allergic to ibuprofen.',
    },
    {
      id: 2,
      patientName: 'Jane Smith',
      date: '2024-11-03',
      ailment: 'Type 2 Diabetes and hypertension',
      medications: 'Metformin 500mg - 1 tablet in the morning and evening\nLosartan 50mg - 1 tablet daily',
      instructions: 'Avoid excessive sugar intake.',
      notes: 'Monitor blood pressure weekly.',
    },
    // Add more prescriptions as needed
  ];

  return (
    <div className="bg-gray-50 shadow-lg rounded-2xl p-8 max-w-5xl m-auto my-10 space-y-8">
      <div className="flex items-center justify-between border-b pb-4 mb-6">
        <h2 className="text-3xl font-bold text-gray-900">Prescription List</h2>
        <div className="space-x-4">
          <Link 
            to={'/doctor/prescription'} 
            className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-5 py-2 rounded-lg shadow-md hover:from-blue-600 hover:to-indigo-700 transition duration-300"
          >
            Create New Prescription
          </Link>
          <Link 
            to={'/doctor/home'} 
            className="bg-gradient-to-r from-blue-300 to-purple-600 text-white px-5 py-2 rounded-lg shadow-md hover:from-blue-600 hover:to-indigo-700 transition duration-300"
          >
            Back to Home
          </Link>
        </div>
      </div>

      <div className="space-y-6">
        {prescriptions.map((prescription) => (
          <div key={prescription.id} className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <div className="flex justify-between">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Patient: {prescription.patientName}</h3>
            <p className='text-gray-400 font-[poppins]'>Dr. Ojo Oluwapelumi Beatrice</p>
            </div>
            <p className="text-sm text-gray-600 mb-2">Date: {prescription.date}</p>
            <p className="text-sm text-gray-600 mb-4">Ailment: {prescription.ailment}</p>
            <div className="mb-3">
              <h4 className="font-semibold text-gray-700">Medications:</h4>
              <pre className="whitespace-pre-wrap text-gray-700 bg-gray-50 rounded-md p-3 border border-gray-200">{prescription.medications}</pre>
            </div>
            <div className="mb-3">
              <h4 className="font-semibold text-gray-700">Dosage & Instructions:</h4>
              <p className="text-gray-700">{prescription.instructions}</p>
            </div>
            <div className="mb-3">
              <h4 className="font-semibold text-gray-700">Additional Notes:</h4>
              <p className="text-gray-700">{prescription.notes}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PrescriptionList;
