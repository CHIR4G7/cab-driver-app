const mongoose = require('mongoose');

const rideSchema = new mongoose.Schema({
    pickup : {
        type : String,
        required:true
    },
    destination:{
        type:String,
        required:true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    captain:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Captain',
    },
    fare:{
        type: Number,
        required:true
    },
    status:{
        type: String,
        enum : ['pending','accepted','completed','cancelled','ongoing'],
        default:'pending'
    },
    duration:{ // in seconds
        type: Number
    },
    distance:{ //in meters
        type: Number,
    },
    paymentID:{
        type: String
    },
    orderID:{
        type:String
    },
    signature:{
        type:String
    }
})

module.exports = mongoose.model("ride",rideSchema)