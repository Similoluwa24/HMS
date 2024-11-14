const mongoose = require('mongoose');

const prescriptionSchema = new mongoose.Schema({
    patient:{
        type:String,
        required:true
    },
    dop:{
        type:String,
        required:true
    },
    ailment:{
        type:String,
        required:true
    },
    medication:{
        type:String,
        required:true
    },
    dosage:{
        type:String,
        required:true
    },
    notes:{
        type:String,
        required:true
    },
    doctor:{
        type:String,
        required:true
    }
})
module.exports = mongoose.model('Prescription', prescriptionSchema)