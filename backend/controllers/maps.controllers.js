const axios = require('axios')
const { getAdressCoordinateService,getDirectionTimeService,getAutoCompleteResultsService } = require('../services/map.service')


const getAdressCoordinate = async (request,response,next)=>{

    const {address} = request.query
    
    if(!address)
    {
        return response.status(400).json({"Error":"Aress not found!"})
    }

    try {
        const coordinates = await getAdressCoordinateService(address)
        return response.status(200).json(coordinates)
    } catch (error) {
        console.error(error.message);
       return response.status(404).json({ error: "Failed to fetch coordinates" });
    }
}

const getDirectionTime = async (request,response,next)=>{

    const {origins,destinations,mode} = request.body

    if (!origins || !destinations) {
        return response.status(400).json({ error: "Origins and destinations are required." });
    }

    try {
      const distanceTime = await getDirectionTimeService(origins,destinations,mode)
      return response.status(200).json(distanceTime)
    } catch (error) {
        console.error("Error calling Distance Matrix API:", error.message);
        return response.status(500).json({ error: "Failed to fetch distance matrix data." })
    }
}

const getAutoCompleteResults = async (request,response,next)=>{

    const {input} = request.query
   

    if(!input)
    {
        return response.status(400).json({error:"Input query snot found!"})
    }

    try {
       const autoCompleteResults = await getAutoCompleteResultsService(input)
       return response.status(200).json(autoCompleteResults)
    } catch (error) {
        console.error("Error fetching autocomplete suggestions:", error.message);
        return response.status(500).json({ error: "Failed to fetch autocomplete suggestions." });
    }
}

module.exports = {getAdressCoordinate,getDirectionTime,getAutoCompleteResults}