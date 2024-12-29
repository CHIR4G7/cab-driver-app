const Ride = require('../models/ride.model')
const { getDirectionTime } = require('./maps.controllers')
const { baseFares, perKmFares, perMinFares } = require('../utils/constants')

const getFare = async (pickup, destination ) => {
    if (!pickup || !destination) {
        throw new Error("All feilds are required!")
    }

    const distanceTime = await getDirectionTime(pickup, destination)

    const fares = {
        auto: baseFares.auto + (distanceTime.distance * perKmFares.auto) + (distanceTime.duration * perMinFares.auto),
        car: baseFares.car + (distanceTime.distance * perKmFares.car) + (distanceTime.duration * perMinFares.car),
        motorcycle: baseFares.motorcyle + (distanceTime.distance * perKmFares.motorcyle) + (distanceTime.duration * perMinFares.motorcyle),
    }
    return fares
}

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
        
        return response.status(200).json({message:"New Ride Created",rideId:newRide._id})
    } catch (error) {
        return response.status(500).json({error:error.message})
    }
}

module.exports = {createRide}
