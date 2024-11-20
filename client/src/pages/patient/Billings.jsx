import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Billings() {
  const params = useParams()
    const showIn = params.id
    const [details,setDetails] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(()=>{
        const fetchInvoice = async () => {
          const res = await fetch(`http://localhost:5000/invoice/admin/${showIn}`,{
            method:'GET',
            headers:{
              'Content-Type':'application/json'
            },
            credentials:'include'
          })
          const data = await res.json()
          console.log(data.invoice);
          
          if (!res.ok) {
            console.log(data);
          } else {
            setDetails(data.invoice)
           setLoading(false)
          }
          
        }
        fetchInvoice()
      },[showIn])

  return (
    <>
    <div className="bg-gray-50 shadow-lg rounded-2xl p-8 max-w-3xl m-auto my-10 space-y-8 border border-gray-200">
  {details.map((detail, index) => (
    <div key={index} className="mb-6">
      <div className="flex justify-between items-center pb-4 border-b">
        <h2 className="text-3xl font-bold text-gray-900">Payment Invoice</h2>
        <p className="text-gray-600">Invoice #INV-{detail._id}</p>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between">
          <p className="text-lg font-semibold">Patient Name:</p>
          <p className="text-lg">{detail.patientId.first_name} {detail.patientId.last_name}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-lg font-semibold">Date:</p>
          <p className="text-lg">{new Date(detail.issuedDate).toDateString()}</p>
        </div>
      </div>

      <div className="mt-6 border-t pt-4">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Services Breakdown</h3>
        <div className="space-y-2">
          {detail.services.map((service, serviceIndex) => (
            <div key={serviceIndex} className="flex justify-between border-b pb-2">
              <p className="text-gray-700">{service.name}</p>
              <p className="text-gray-700"><s>N</s>{service.cost.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex justify-between items-center border-t pt-4">
        <h3 className="text-xl font-bold">Total Amount Due:</h3>
        <p className="text-xl font-bold text-indigo-600"><s>N</s>{detail.totalCost.toFixed(2)}</p>
      </div>

      <div className="mt-8 text-right">
        <button className="bg-gradient-to-r from-green-500 to-teal-600 text-white px-6 py-2 rounded-lg shadow-md hover:from-green-600 hover:to-teal-700 transition duration-300">
          Pay Now
        </button>
      </div>
    </div>
  ))}
</div>
    </>
  );
}

export default Billings;
