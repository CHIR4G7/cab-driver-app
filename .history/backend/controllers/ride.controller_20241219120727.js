const Ride = require('../models/ride.model')
const { getDirectionTime } = require('./maps.controllers')
const { baseFares, perKmFares, perMinFares } = require('../utils/constants')

const createRide = async (request,response,next)=>{

    const {user,pickup,destination,vehicleType} = request.body

    if(!user || !pickup || !destination || !vehicleType)
    {
        return response.status(400).json({error:"All Feilds required!"})
    }

    try {
        const fare = await getFare(pickup,destination);

        const newRide = await Ride.create({
            user:user,
            pickup:pickup,
            destination:destination,
            fare:fare[vehicleType]
        })
        
        return response.status(201).json({message:"New Ride Created",rideId:newRide._id})
    } catch (error) {
        return response.status(500).json({error:error.message})
    }
}

module.exports = {createRide}
