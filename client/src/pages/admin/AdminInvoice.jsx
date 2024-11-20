import React, { useState, useContext } from 'react';
import HospitalContext from '../../context/HospitalContext';
import { useNavigate } from 'react-router-dom';

function AdminInvoice() {
  const { department,showHide } = useContext(HospitalContext);
  
  const [patientId, setPatientId] = useState('');
  const [issuedDate, setIssuedDate] = useState('');
  const [patientAddress, setPatientAddress] = useState('');
  const [services, setServices] = useState([{ name: '', cost: 0 }]);
  const navigate = useNavigate()

  // Add a new empty service
  const addService = () => {
    setServices([...services, { name: '', cost: 0 }]);
  };

  // Update a service
  const updateService = (index, field, value) => {
    const updatedServices = [...services];
    updatedServices[index][field] = field === 'cost' ? parseFloat(value) || 0 : value;
    setServices(updatedServices);
  };

  // Calculate total cost
  const totalCost = services.reduce((sum, service) => sum + service.cost, 0);
  const invoiceData = {
    patientId,
    issuedDate,
    patientAddress,
    services,
    totalCost,
  };
  // Submit form
  const handleSubmit = async(e) => {
    e.preventDefault()
    const res = await fetch('http://localhost:5000/invoice/add',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      credentials:'include',
      body:JSON.stringify(invoiceData)
    })
    const data = await res.json()
    console.log(data);
    
    if (!res.ok) {
      console.log(data);
      showHide('error','an error occured')     
    } else {
      showHide('success','Invoice Created')
      navigate('/admin/transactions')
    }
   
  };

  return (
    <div className="bg-gray-50 shadow-lg rounded-2xl p-8 max-w-4xl m-auto my-10 space-y-8">
      <h1 className="text-gray-400 font-bold text-lg">Add Invoice</h1>

          <form  onSubmit={handleSubmit} action="">

          <div>
            <label>Patient ID:</label>
            <input type="text"  onChange={(e) => setPatientId(e.target.value)} className="block w-full border px-4 py-2 rounded mt-2"  placeholder="Enter patient ID" />
          </div>

          <div>
            <label>Invoice Date:</label>
            <input type="date"   onChange={(e) => setIssuedDate(e.target.value)} className="block w-full border px-4 py-2 rounded mt-2" />
          </div>

          <h2 className="text-gray-700 font-semibold mt-4">Services</h2>
          {services.map((service, index) => (
            <div key={index} className="flex gap-4 items-center mt-2">
              <input type="text"placeholder="Service Name"  onChange={(e) => updateService(index, 'name', e.target.value)}  className="border px-4 py-2 rounded w-1/2" />
              <input  type="number"  placeholder="Cost"    onChange={(e) => updateService(index, 'cost', e.target.value)}  className="border px-4 py-2 rounded w-1/4"  />
            </div>
          ))}
          <button type='button' onClick={addService} className="text-blue-500 mt-2">
            + Add Service
          </button>

          {/* Addresses */}
          <div>
            <label>Patient Address:</label>
            <textarea   onChange={(e) => setPatientAddress(e.target.value)}  className="block w-full border px-4 py-2 rounded mt-2" placeholder="Enter patient address" />
          </div>

          {/* Total Cost */}
          <h3 className="text-right text-lg font-semibold mt-4">
            Total Cost: <s>N</s>{totalCost.toFixed(2)}
          </h3>

          {/* Submit Button */}
          <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4 w-full">
            Submit Invoice
          </button>
      </form>
    </div>
  );
}

export default AdminInvoice;
