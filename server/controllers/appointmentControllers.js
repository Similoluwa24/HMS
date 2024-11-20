const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Appointment = require("../models/appointment");
const ErrorHandler = require('../utils/errorHandler')
const User = require('../models/user')
const mongoose = require('mongoose');



exports.createAppointment = catchAsyncErrors(async (req,res) => {
  // Ensure the user is authenticated and their id is available
  req.body.user = req.user.id;

  const { first_name, last_name, email, doctor, date, time, message } = req.body;

  // Validate if all required fields are present in the request body
  if (!first_name || !last_name || !email || !doctor || !date || !time || !message) {
      return res.status(400).json({ message: 'Please provide all required fields: first_name, last_name, email, doctor, date, time, message.' });
  }

  // Check if the doctor exists in the User collection
  const doctorExists = await User.findById(doctor);
  if (!doctorExists) {
      return res.status(400).json({ message: 'Doctor not found' });
  }

  // Create a new appointment using the provided data
  const appointment = await Appointment.create({
      user: req.user.id, // User is automatically assigned from the authenticated user
      first_name,
      last_name,
      email,
      doctor,
      date,
      time,
      message
  });

  // Send response with the created appointment
  res.status(201).json({
      status: "success",
      appointment
  });
});
exports.deleteAppointment = catchAsyncErrors(async (req, res, next) => {
    const deleteApp = await Appointment.findById(req.params.id)
    if (!deleteApp) {
        return next(new ErrorHandler('Appointment not Found', 401))
    }
     await deleteApp.deleteOne()
     res.status(200).json({
        status:"success",
        message:"Item deleted"
     })
    
})
exports.findAppointment = catchAsyncErrors(async(req,res)=>{
    const findApp = await Appointment.find()
                                    .populate('user', 'first_name last_name email')
                                    .populate('doctor', 'first_name last_name email');
    res.status(200).json({
        status:"success",
        findApp
    })
})
exports.findAppointmentByUserId = catchAsyncErrors(async (req, res) => {
    // Ensure req.user exists and has an ID
    if (!req.user || !req.user.id) {
      return res.status(400).json({
        status: 'Fail',
        message: 'User ID not found in request',
      });
    }
  
    // Find appointments based on the user's ID
    const findApp = await Appointment.find({ user: req.user.id })
                                    .populate('user')
                                    .populate('doctor');
  
    res.status(200).json({
      status: 'success',
      findApp
    });
});
  
exports.editAppointment = catchAsyncErrors(async (req,res) => {
    const editApp = await Appointment.findByIdAndUpdate(req.params.id,req.body,{
        runValidators:true,
        new:true,
        useFindAndModify:false
    })
    res.status(200).json({
        status:"success",
        editApp
    })
})

exports.getAppointmentsByDoctor = catchAsyncErrors(async (req, res) => {
 
console.log(req.user);

     // Ensure req.user exists and has an ID
    if (!req.user || !req.user.id) {
      return res.status(400).json({
        status: 'Fail',
        message: 'User ID not found in request',
      });
    }
  

    // Fetch the appointments for the specific doctor using req.user.id
    const appointments = await Appointment.find({ doctor: req.user.id })
        .populate('user', 'first_name last_name email') // Populating user details if needed
        .populate('doctor', 'first_name last_name email'); // Populating doctor details if needed

    // If no appointments found, return a message
    if (!appointments || appointments.length === 0) {
        return res.status(404).json({ message: 'No appointments found for this doctor' });
    }

    // Return the list of appointments
    res.status(200).json({ appointments });
});

