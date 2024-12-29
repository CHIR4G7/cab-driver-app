const Ride = require('../models/ride.model')
const User = require('../models/user.schema')
const { getDirectionTime } = require('./maps.controllers')
const { createRideService,getFareService, getRideDetailsService, confirmRideService } = require('../services/ride.service')
const {getCaptainInRadiusService,getAdressCoordinateService} = require('../services/map.service')
const { sendMessageToSocketId } = require('../socket')
const { validationResult } = require('express-validator')

const createRide = async (request, response, next) => {

    const { pickup, destination, vehicleType } = request.body

    if (!pickup || !destination || !vehicleType) {
        return response.status(400).json({ error: "All Feilds required!" })
    }

    try {
        
        const ride = await createRideService(request.user, pickup, destination, vehicleType);
        response.status(201).json({ message: "New Ride Created", ride: ride })

        //remove otp
        const rideForCaptain = await Ride.findById(ride._id).populate("user")
        rideForCaptain.otp = ""

        const pickupCoordinate = await getAdressCoordinateService(pickup);

        const captainsInRadius = await getCaptainInRadiusService(pickupCoordinate.latitude,pickupCoordinate.longitude,2); //ride within 4 Km radius

        // console.log(captainsInRadius)
        //get Socketids of al the captains in radius
        captainsInRadius.map((captain)=>{
            sendMessageToSocketId(captain.socketID,{
                event:'new-ride',
                data:rideForCaptain
            })
        })
    } catch (error) {
        console.log(error.message)
        return response.status(500).json({ error: error.message })
    }
}

const getFare = async (request, response, next) => {

    const { pickup, destination } = request.body

    if (!pickup || !destination) {
        return response.status(400).json({ error: "All Feilds required!" })
    }
    try {
        const fares = await getFareService(pickup,destination)
        return response.status(200).json({ message: "Fares Found", fares:fares })
    } catch (error) {
        return response.status(500).json({ error: error.message })
    }

}

const getRideInfo = async (request,response,next)=>{

    const {id} = request.body

    if(!id){
        return response.status(400).json({ error: "All Feilds required!" })
    }

    try {
        const ride = await getRideDetailsService(id);
        return response.status(200).json({ message: "Ride Found", ride:ride });
    } catch (error) {
        return response.status(500).json({ error: error.message })
    }
}

const confirmRide = async (request,response,next)=>{
    const errors = validationResult(request)
    if(!errors.isEmpty()){
        return response.status(400).json({"Error":errors.array()})
    }
    const {rideId} = request.body
    if(!rideId){
        return response.status(400).json({ error: "All Feilds required!" })
    }

    
    try {
        const ride = await confirmRideService(rideId,request.captain._id)
        const user = await User.findById(ride.user._id)
        sendMessageToSocketId(user.socketID,{
            event:'ride-confirmed',
            data:ride.ride
        })
        return response.status(200).json({message:"Ride Confirmed",ride:ride})
    } catch (error) {
        console.log(error,request.captain)
        return response.status(500).json({ error: error.message })
    }
}

module.exports = { createRide,getFare ,getRideInfo,confirmRide}
