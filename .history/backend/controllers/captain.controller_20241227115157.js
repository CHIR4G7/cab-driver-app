const Captain = require('../models/captain.model')
const blacklistToken = require('../models/blacklistToken.model')
const {validationResult} = require('express-validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const registerCaptain = async (request,response,next)=>{

    try {
        const errors = await validationResult(request);
        if(!errors.isEmpty())
        {
            return response.status(400).json({"Error":errors.array()})
        }

        const {firstname,lastname,email,password,vehicle} = request.body

        const captain = await Captain.findOne({email});
        if(captain)
        {
            return response.status(200).json({"Message":"Captain With Email Already Exists!"})
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(password,salt);

        const newCaptain = await Captain.create({
            fullName:{
                firstName:firstname,
                lastName:lastname
            },
            email,
            password:hashedPass,
            vehicle
        })

        const token = await jwt.sign({
            _id:newCaptain._id
        },process.env.JWT_SECRET,{
            expiresIn:'24h'
        })
    
        return response.status(200).json({"token":token});

    } catch (error) {
        return response.status(400).json({"Error":error})
    }
}

const loginCaptain = async (request,response,next)=>{
    try {
        const errors = await validationResult(request)
        if(!errors.isEmpty())
        {
            return response.status(400).json({"Error":errors.array()})
        }
        const {email,password} = request.body;

        const captain = await Captain.findOne({email}).select('password')
        if(!captain)
            {
                return response.status(401).json({"Error":"Captain does not Exist Please Register!"})
            }
    
            const compare = await bcrypt.compare(password,captain.password);
    
            if(!compare)
            {
                return response.status(401).json({"Error":"Incorrect Password!"})
            }
            const token = await jwt.sign({
                _id:captain._id
            },process.env.JWT_SECRET,{
                expiresIn: '24h'
            })
            response.cookie("token",token,{
                httpOnly:false,
                secure:process.env.NODE_ENV === 'prod',
                maxAge:60*60*1000
            })
            return response.status(200).json({"Message":"Captain Found and can log in now!","token":token})
    } catch (error) {
        return response.status(400).json({"Error":error})
    }
}

const getCaptainProfile= async (request,response,next)=>{
    return response.status(200).json(request.captain)
}

const logoutCaptain = async (request,response,next)=>{
    const token = request.cookies.token || request.headers.authorization.split(' ')[1]
    await blacklistToken.create({
        token
    })
    return response.status(200).json({"Message":"Logged Out"})
}

module.exports = {registerCaptain,loginCaptain,getCaptainProfile,logoutCaptain}