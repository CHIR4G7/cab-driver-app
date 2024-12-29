const axios = require('axios')

const getAdressCoordinateService = async (address)=>{

     const url = `https://maps.googleapis.com/maps/api/geocode/json`

     try {
        const response = await axios.get(url,{
            params:{
                address:address,
                key:process.env.GOOGLE_MAPS_API
            }
        })

        const { results } = result.data;
        if (results.length === 0) {
            return response.status(404).json({ error: "Address not found" });
        }
        const location = results[0].geometry.location; 
        return { lat:location.lat,lng:location.lng }
     } catch (error) {
        console.log(error)
        throw error
     }
}

const getDirectionTimeService = async (origin,destination)=>{

     const url = `https://maps.googleapis.com/maps/api/distancematrix/json`

}

module.exports = {getAdressCoordinateService}