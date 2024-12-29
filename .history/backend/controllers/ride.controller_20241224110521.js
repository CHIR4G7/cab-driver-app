const Ride = require('../models/ride.model')
const { getDirectionTime } = require('./maps.controllers')
const { createRideService,getFareService } = require('../services/ride.service')


const createRide = async (request, response, next) => {

    const { pickup, destination, vehicleType } = request.body

    if (!pickup || !destination || !vehicleType) {
        return response.status(400).json({ error: "All Feilds required!" })
    }

    try {
        const ride = await createRideService(request.user, pickup, destination, vehicleType);
        return response.status(201).json({ message: "New Ride Created", ride: ride })
    } catch (error) {
        return response.status(500).json({ error: error.message })
    }
}

const getFare = async (request, response, next) => {

    const { pickup, destination } = request.body

    if (!pickup || !destination) {
        return response.status(400).json({ error: "All Feilds required!" })
    }
    return getFare

}

module.exports = { createRide }
