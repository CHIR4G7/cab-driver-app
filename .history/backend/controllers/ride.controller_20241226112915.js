const Ride = require('../models/ride.model')
const { getDirectionTime } = require('./maps.controllers')
const { createRideService,getFareService, getRideDetailsService } = require('../services/ride.service')
const {getCaptainInRadiusService,getAdressCoordinateService} = require('../services/map.service')

const createRide = async (request, response, next) => {

    const { pickup, destination, vehicleType } = request.body

    if (!pickup || !destination || !vehicleType) {
        return response.status(400).json({ error: "All Feilds required!" })
    }

    try {
        const ride = await createRideService(request.user, pickup, destination, vehicleType);
        response.status(201).json({ message: "New Ride Created", ride: ride })

        const pickupCoordinate = await getAdressCoordinateService(pickup);

        const captainsInRadius = await getCaptainInRadiusService(pickupCoordinate.longitude,pickupCoordinate.latitude,4); //ride within 4 Km radius
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

module.exports = { createRide,getFare ,getRideInfo}
