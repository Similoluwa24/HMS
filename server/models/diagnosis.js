const mongoose = require('mongoose');

const diagnosisSchema = new mongoose.Schema({
    diagnosis:{
        type:String,
        required:true
    },
    doctor:{
        type:String,
        required:true
    },
    plan:{
        type:String,
        required:true
    },
    medication:{
        type:String,
        required:true
    },
    notes:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('Diagnosis', diagnosisSchema)