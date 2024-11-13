import React from 'react';
import { FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function DoctorAppointment() {
  const appointments = [
    {
      patientName: 'Ojo Oluwapelumi',
      date: '2024-11-15',
      time: '10:00 AM',
      status: 'Pending',
    },
    {
      patientName: 'Michael Akin',
      date: '2024-11-16',
      time: '1:00 PM',
      status: 'Completed',
    },
    {
      patientName: 'Racheal Anthony',
      date: '2024-11-17',
      time: '3:30 PM',
      status: 'Pending',
    },
    {
      patientName: 'Josiah Esuku',
      date: '2024-11-18',
      time: '11:15 AM',
      status: 'Completed',
    },
  ];

  return (
    <div className="overflow-x-auto w-full mt-6">
      <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
        <thead className="bg-[#007cff] text-white">
          <tr>
            <th className="px-4 py-2 text-left font-medium">Patient Name</th>
            <th className="px-4 py-2 text-left font-medium">Date</th>
            <th className="px-4 py-2 text-left font-medium">Time</th>
            <th className="px-4 py-2 text-left font-medium">Status</th>
            <th className="px-4 py-2 text-center font-medium">Actions</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment, index) => (
            <tr key={index} className="hover:bg-gray-50 border-b">
              <td className="px-4 py-3 text-gray-800">{appointment.patientName}</td>
              <td className="px-4 py-3 text-gray-800">{appointment.date}</td>
              <td className="px-4 py-3 text-gray-800">{appointment.time}</td>
              <td className={`px-4 py-3 font-semibold ${appointment.status === 'Completed' ? 'text-green-600' : 'text-yellow-600'}`}>{appointment.status}</td>
              <td className="px-4 py-3 text-center">
                <button className="text-[#007cff] hover:text-blue-700">
                  <Link to={'/doctor/details'}><FaEye className="inline-block text-xl" /></Link>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DoctorAppointment;
