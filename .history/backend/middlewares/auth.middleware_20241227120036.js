const User = require('../models/user.schema');
const Captain = require('../models/captain.model')
const blacklistToken = require("../models/blacklistToken.model")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const authUser = async (request,response,next)=>{
    const token = request.cookies.user_token || request.headers.authorization.split(' ')[1];
    if(!token)
    {
        return response.status(401).json({"Error":"Token Not Found!"})
    }

    const isblacklist = await blacklistToken.findOne({token:token})
    if(isblacklist)
    {
        return response.status(401).json({"Error":"Unauthoized! Try with New Token!"})
    }

    try {
        const decoded = await jwt.verify(token,process.env.JWT_SECRET)
        const user = await User.findById(decoded._id)
        request.user = user;
        next();
    } catch (error) {
        return response.status(401).json({"Error":"Unauthorised"})
    }
}

const authCaptain = async (request,response,next)=>{
    const token = request.cookies.captain_token || request.headers.authorization.split(' ')[1];
    if(!token)
    {
        return response.status(401).json({"Error":"Token Not Found!"})
    }
    const isblacklist = await blacklistToken.findOne({token:token})
    if(isblacklist)
    {
        return response.status(401).json({"Error":"Unauthoized! Try with New Token!"})
    }

    try {
        const decoded = await jwt.verify(token,process.env.JWT_SECRET)
        const captain = await Captain.findById(decoded._id)
        request.captain = captain
        next();
    } catch (error) {
        return response.status(401).json({"Error":"Unauthoized! Try with New Token!"})
    }
}

module.exports = {authUser,authCaptain}