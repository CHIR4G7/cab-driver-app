const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
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
        unique:true
    },
    password:{
        type:String,
        required:true,
        select:false
    },
    socketID:{
        type:String
    }
})


module.exports = mongoose.model("user",userSchema);