import React from 'react';

function Billings() {
  const invoiceDetails = {
    patientName: 'John Doe',
    date: '2024-11-13',
    invoiceNumber: 'INV-1001',
    services: [
      { description: 'General Consultation', cost: 100 },
      { description: 'Blood Test', cost: 50 },
      { description: 'X-Ray Imaging', cost: 120 },
      { description: 'Medication', cost: 80 },
    ],
    totalAmount: 350,
  };

  return (
    <div className="bg-gray-50 shadow-lg rounded-2xl p-8 max-w-3xl m-auto my-10 space-y-8 border border-gray-200">
      <div className="flex justify-between items-center pb-4 border-b mb-6">
        <h2 className="text-3xl font-bold text-gray-900">Payment Invoice</h2>
        <p className="text-gray-600">Invoice #{invoiceDetails.invoiceNumber}</p>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between">
          <p className="text-lg font-semibold">Patient Name:</p>
          <p className="text-lg">{invoiceDetails.patientName}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-lg font-semibold">Date:</p>
          <p className="text-lg">{invoiceDetails.date}</p>
        </div>
      </div>

      <div className="mt-6 border-t pt-4">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Services Breakdown</h3>
        <div className="space-y-2">
          {invoiceDetails.services.map((service, index) => (
            <div key={index} className="flex justify-between border-b pb-2">
              <p className="text-gray-700">{service.description}</p>
              <p className="text-gray-700">${service.cost.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex justify-between items-center border-t pt-4">
        <h3 className="text-xl font-bold">Total Amount Due:</h3>
        <p className="text-xl font-bold text-indigo-600">${invoiceDetails.totalAmount.toFixed(2)}</p>
      </div>

      <div className="mt-8 text-right">
        <button className="bg-gradient-to-r from-green-500 to-teal-600 text-white px-6 py-2 rounded-lg shadow-md hover:from-green-600 hover:to-teal-700 transition duration-300">
          Pay Now
        </button>
      </div>
    </div>
  );
}

export default Billings;
