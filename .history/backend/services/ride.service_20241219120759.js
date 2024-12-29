const Ride = require('../models/ride.model')

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

const createRideService = async ()=>{

}

module.exports = {createRideService}