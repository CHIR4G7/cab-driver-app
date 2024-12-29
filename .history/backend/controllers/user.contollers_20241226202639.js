const User = require('../models/user.schema')
const blacklistToken = require('../models/blacklistToken.model')
const {validationResult} = require('express-validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const { response } = require('../app');

const registerUser = async (request,response,next)=>{
    
    const errors = validationResult(request)
    if(!errors.isEmpty())
    {
        return response.status(400).json({"Error":errors.array()})
    }

    const {firstname,lastname,email,password} = request.body;

    //Check if user with similar emial already esists
    const existingUSer = await User.findOne({email});
    if(existingUSer)
    {
        return response.status(200).json({"Message":"User With Email Already Exists!"})
    }

    // Converting PassWord using JWT

    // STEP-1 CREATE SALT AND HASH PASSWORD
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password,salt);

    //STEP-2 NOW CREATE A NEW USER FOR DATABASE
    const newuser = await User.create({
        fullName:{
            firstName:firstname,
            lastName:lastname
        },
        email,
        password:hashedPass
    })

    //STEP-3 GENERATE TOKEN
    const token = await jwt.sign({
        _id:newuser._id
    },process.env.JWT_SECRET,{
        expiresIn:'3h'
    })

    return response.status(200).json({"token":token});
}

const loginUser = async (request,response,next)=>{
    try {
        const errors = await validationResult(request)
        if(!errors.isEmpty())
        {
            return response.status(400).json({"Error":errors.array()})
        }
        const {email,password} = request.body;

        const user = await User.findOne({email}).select('password')
        if(!user)
        {
            return response.status(401).json({"Error":"User does not Exist Please Register!"})
        }

        const compare = await bcrypt.compare(password,user.password);

        if(!compare)
        {
            return response.status(401).json({"Error":"Incorrect Password!"})
        }
        const token = await jwt.sign({
            _id:user._id
        },process.env.JWT_SECRET,{
            expiresIn: '3h'
        })
        response.cookie("token",token,{
            httpOnly:false,
            secure:process.env.NODE_ENV === 'prod',
            maxAge:60*60*1000
        })
        return response.status(200).json({"Message":"User Found and can log in now!","token":token})
    } catch (error) {
        throw new Error(error)
    }
}

const getUserProfile = async (request,response,next)=>{
    console.log(request.user)
    return response.status(200).json(request.user);
}

const logoutUser = async (request,response,next)=>{
    // request.clearCookie('token')
    const token = request.cookies.token || request.headers.authorization.split(' ')[1]
    await blacklistToken.create({
        token
    })
    return response.status(200).json({"Message":"Logged Out"})
}

module.exports = {registerUser,loginUser,getUserProfile,logoutUser}