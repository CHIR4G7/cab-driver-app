const mongoose = require('mongoose');

const captainSchema = new mongoose.Schema({
    fullName : {
        firstName : {
            type:String,
            required:true,
            minlength:[3,'First Name 3 Characters or long!']
        },
        lastName: {
            type:String,
            minlength:[3,'Last Name 3 Characters or long!']
        }
    },
    email:{
        type:String,
        required:true,
        lowercase:true,
        unique:true,
        match: [/^[a-z0-9]+@[a-z0-9]+\.[a-z]{2,}$/,'Please Enter Valid Email']

    },
    password:{
        type:String,
        required:true,
        select:false
    },
    socketID:{
        type:String
    },
    status : {
        type :String,
        enum:['Active','Inactive'],
        default :'Inactive'
    },
    vehicle : {
        color : {
            type : String,
            required:true,
            minlength : [3,"Colour must be 3 characters or long!"]
        },
        plate:{
            type : String,
            required:true,
            minlength : [3,"Plate Number must be 3 characters or long!"]
        },
        capacity:{
            type : Number,
            required:true,
            min : [1,"Capacity should be atleast 1!"]
        },
        typeVehicle :{
            type : String,
            enum: ['Car','Motorcycle','Auto'],
            required: true
        }
    },
    location : {
        latitude : {
            type :Number
        },
        longitude : {
            type:Number
        }
    }
})


module.exports = mongoose.model("captain",captainSchema);