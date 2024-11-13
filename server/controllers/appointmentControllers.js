const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Appointment = require("../models/appointment");
const ErrorHandler = require('../utils/errorHandler')
const user = require('../models/user')


exports.createAppointment = catchAsyncErrors(async (req,res) => {
    
     req.body.user = req.user.id
    const appointment = await Appointment.create(req.body)
    res.status(201).json({
        status:"success",
        appointment
    })
})
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
    const findApp = await Appointment.find().populate('user')
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
    const findApp = await Appointment.find({ user: req.user.id }).populate('user');
  
    res.status(200).json({
      status: 'success',
      findApp: Array.isArray(findApp) ? findApp : [findApp],
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