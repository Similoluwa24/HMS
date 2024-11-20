const mongoose = require('mongoose');
const User = require('./user')

const prescriptionSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.ObjectId,
        ref:'User',
        required:true
    },
    patient: {
        name: { type: String, required: true },
        age: { type: Number, required: true },
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
        type:mongoose.Schema.ObjectId,
        ref:'User',
        required:true
    }
})
module.exports = mongoose.model('Prescription', prescriptionSchema)