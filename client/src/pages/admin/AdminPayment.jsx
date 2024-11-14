import React from 'react';
import { FaRegEye } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

function AdminPayment() {
  const invoices = [
    {
      id: 1,
      patientName: 'John Doe',
      date: '2024-11-01',
      amount: '$250.00',
      status: 'Paid',
    },
    {
      id: 2,
      patientName: 'Jane Smith',
      date: '2024-11-05',
      amount: '$150.00',
      status: 'Pending',
    },
    {
      id: 3,
      patientName: 'Michael Johnson',
      date: '2024-11-08',
      amount: '$300.00',
      status: 'Paid',
    },
    {
      id: 4,
      patientName: 'Emily Davis',
      date: '2024-11-10',
      amount: '$200.00',
      status: 'Overdue',
    },
  ];

  return (
    <div className="bg-gray-50 shadow-lg rounded-2xl p-8 max-w-5xl m-auto my-10">
      <div className="flex items-center justify-between border-b pb-4 mb-6">
        <h2 className="text-3xl font-bold text-gray-900">Invoice List</h2>
        <Link
          to={'/admin/home'}
          className="bg-gradient-to-r from-green-400 to-blue-600 text-white px-5 py-2 rounded-lg shadow-md hover:from-green-500 hover:to-blue-700 transition duration-300"
        >
          Back to Dashboard
        </Link>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-6 text-left text-gray-600 font-semibold border-b">Invoice ID</th>
              <th className="py-3 px-6 text-left text-gray-600 font-semibold border-b">Patient Name</th>
              <th className="py-3 px-6 text-left text-gray-600 font-semibold border-b">Date</th>
              <th className="py-3 px-6 text-left text-gray-600 font-semibold border-b">Amount</th>
              <th className="py-3 px-6 text-left text-gray-600 font-semibold border-b">Status</th>
              <th className="py-3 px-6 text-left text-gray-600 font-semibold border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice) => (
              <tr key={invoice.id} className="border-b hover:bg-gray-50">
                <td className="py-3 px-6 text-gray-700">{invoice.id}</td>
                <td className="py-3 px-6 text-gray-700">{invoice.patientName}</td>
                <td className="py-3 px-6 text-gray-700">{invoice.date}</td>
                <td className="py-3 px-6 text-gray-700">{invoice.amount}</td>
                <td className={`py-3 px-6 text-gray-700 font-semibold ${
                  invoice.status === 'Paid' ? 'text-green-600' :
                  invoice.status === 'Pending' ? 'text-yellow-600' :
                  'text-red-600'
                }`}>{invoice.status}</td>
                <td className="py-3 px-6 text-gray-700"><FaRegEye/></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminPayment;
