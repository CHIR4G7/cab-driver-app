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

        const { results } = response.data;
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
        return {duration:data.rows[0].elements[0].duration.text,distance:data.rows[0].elements[0].distance.text}
     } catch (error) {
        throw new Error('Unable to fetch distance and time');
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
     } catch (error) {
        
     }
}

module.exports = {getAdressCoordinateService,getDirectionTimeService}