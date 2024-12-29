const axios = require('axios')
const { getAdressCoordinateService } = require('../services/map.service')


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
       return response.status(500).json({ error: "Failed to fetch coordinates" });
    }
}

const getDirectionTime = async (request,response,next)=>{

    const {origins,destinations,mode} = request.body
    const url = `https://maps.googleapis.com/maps/api/distancematrix/json`

    if (!origins || !destinations) {
        return response.status(400).json({ error: "Origins and destinations are required." });
    }

    try {
        const result = await axios.get(url,{
            params:{
                key:process.env.GOOGLE_MAPS_API,
                origins:origins,
                destinations:destinations,
                mode: mode || "driving"
            }
        })

        const data = result.data;
        if (data.status !== "OK") {
            return response.status(500).json({ error: data.error_message || "API request failed." });
        }
        return response.status(200).json({duration:data.rows[0].elements[0].duration.text,distance:data.rows[0].elements[0].distance.text})
    } catch (error) {
        console.error("Error calling Distance Matrix API:", error.message);
        return response.status(500).json({ error: "Failed to fetch distance matrix data." })
    }
}

const getAutoCompleteResults = async (request,response,next)=>{

    const {input} = request.query
    const url =  `https://maps.googleapis.com/maps/api/place/autocomplete/json`

    if(!input)
    {
        return response.status(400).json({error:"Input query snot found!"})
    }

    try {
        const result = await axios.get(url,{
            params:{
                key:process.env.GOOGLE_MAPS_API,
                language:"en",
                types:"geocode",
                input:input
            }
        })

        const suggestions = result.data.predictions.map((prediction) => ({
            description: prediction.description,
            place_id: prediction.place_id,
          }));
      
          response.json(suggestions);
    } catch (error) {
        console.error("Error fetching autocomplete suggestions:", error.message);
        res.status(500).json({ error: "Failed to fetch autocomplete suggestions." });
    }
}
module.exports = {getAdressCoordinate,getDirectionTime,getAutoCompleteResults}