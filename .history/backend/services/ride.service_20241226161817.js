const Ride = require('../models/ride.model')
const { baseFares, perKmFares, perMinFares } = require('../utils/constants')
const {getDirectionTimeService} = require('./map.service')
const crypto = require('crypto')

const getFareService = async (pickup, destination) => {
    if (!pickup || !destination) {
        throw new Error("All feilds are required!")
    }

    const distanceTime = await getDirectionTimeService(pickup, destination)

    const fares = {
        auto: baseFares.auto + (distanceTime.distance * perKmFares.auto) + (distanceTime.duration * perMinFares.auto),
        car: baseFares.car + (distanceTime.distance * perKmFares.car) + (distanceTime.duration * perMinFares.car),
        motorcycle: baseFares.motorcyle + (distanceTime.distance * perKmFares.motorcyle) + (distanceTime.duration * perMinFares.motorcyle),
    }
    return fares
}

const genrerateOtp = (numDigits)=>{
    const max = Math.pow(10, numDigits) - 1;
    const min = Math.pow(10, numDigits - 1);
  
    // Generate a random number and map it to the range [min, max]
    const randomBytes = crypto.randomBytes(4).readUInt32BE(0);
    const otp = min + (randomBytes % (max - min + 1));
  
    return otp.toString().padStart(numDigits, "0");
}

const createRideService = async (user, pickup, destination, vehicleType) => {

    const fares = await getFareService(pickup, destination)
    console.log(fares,vehicleType)

    const newRide = await Ride.create({
        user: user,
        pickup: pickup,
        destination: destination,
        fare: fares[vehicleType],
        vehicleType:vehicleType,
        otp:genrerateOtp(4) //send a 4 digit otp
    })

    return newRide
}

const getRideDetailsService = async (id)=>{

    const ride = await Ride.findById(id).select("+otp")
    return ride;
}

const confirmRideService = async (rideId,captainId)=>{
    
    await Ride.findByIdAndUpdate(rideId,{
        status:"accepted",
        captain:captainId
    })

    const ride = await Ride.findById(rideId).populate('user').populate('captain');

    return ride
}

module.exports = { createRideService,getFareService,getRideDetailsService,confirmRideService}