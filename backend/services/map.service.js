const axios = require('axios')
const Captain = require('../models/captain.model')

const getAdressCoordinateService = async (address)=>{

     const url = `https://maps.googleapis.com/maps/api/geocode/json`

     try {
        const response = await axios.get(url,{
            params:{
                address:address,
                key:process.env.GOOGLE_MAPS_API
            }
        })

        const { results } = response.data;
        if (results.length === 0) {
            return response.status(404).json({ error: "Address not found" });
        }
        const location = results[0].geometry.location; 
        return { latitude:location.lat,longitude:location.lng }
     } catch (error) {
        console.log(error.message)
        throw new Error(error.message)
     }
}

const getDirectionTimeService = async (origins,destinations,mode)=>{

     const url = `https://maps.googleapis.com/maps/api/distancematrix/json`

     try {
        const response = await axios.get(url,{
            params:{
                key:process.env.GOOGLE_MAPS_API,
                origins:origins,
                destinations:destinations,
                mode: mode || '"driving'
            }
        })

        const data = response.data;
        if (response.data.rows[ 0 ].elements[ 0 ].status === 'ZERO_RESULTS') {
            throw new Error('No routes found');
        }

        const distanceInMetres = data.rows[0].elements[0].distance.value
        const timeInSeconds = data.rows[0].elements[0].duration.value

        const distanceInKm = (distanceInMetres/1000).toFixed(2);
        const timeInMins = Math.ceil(timeInSeconds / 60)


        // const distanceInKm = 5;
        // const timeInMins = 10
        
        return {duration:timeInMins,distance:distanceInKm}
     } catch (error) {
        console.log(error.message)
        throw new Error(error.message)
     }

}

const getAutoCompleteResultsService = async (input)=>{
     const url =  `https://maps.googleapis.com/maps/api/place/autocomplete/json`

     try {
        const response = await axios.get(url,{
            params:{
                key:process.env.GOOGLE_MAPS_API,
                language:"en",
                types:"geocode",
                input:input
            }
        })
        const suggestions = response.data.predictions.map((prediction) => ({
            description: prediction.description,
            place_id: prediction.place_id,
          }));

          return suggestions
     } catch (error) {
        console.log(error.message)
        throw new Error(error.message)
     }
}

const getCaptainInRadiusService = async (latitude,longitude,radius)=>{

    //Radius in km : 6371

    const captains = await Captain.find({
        location:{
            $geoWithin:{
                $centerSphere:[[latitude,longitude],radius/6371]
            }
        }
    })
    return captains;
}

module.exports = {getAdressCoordinateService,getDirectionTimeService,getAutoCompleteResultsService,getCaptainInRadiusService}