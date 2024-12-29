const Ride = require('../models/ride.model')
const { getDirectionTime } = require('./maps.controllers')


const createRide = async (request,response,next)=>{

    const {user,pickup,destination,vehicleType} = request.body

    if(!user || !pickup || !destination || !vehicleType)
    {
        return response.status(400).json({error:"All Feilds required!"})
    }

    try {
        const ride = await crea(pickup,destination);

        return response.status(201).json({message:"New Ride Created",rideId:newRide._id})
    } catch (error) {
        return response.status(500).json({error:error.message})
    }
}

module.exports = {createRide}
