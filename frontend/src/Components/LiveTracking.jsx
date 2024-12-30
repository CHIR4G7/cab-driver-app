import React, { useState, useEffect,useRef } from 'react'
import { LoadScript,GoogleMap, DirectionsRenderer,Marker } from '@react-google-maps/api'

const containerStyle = {
    width: '100%',
    height: '100%',
};

const center = {
    lat: -3.745,
    lng: -38.523
};

const LiveTracking = ({rideDetails}) => {
    const [ currentPosition, setCurrentPosition ] = useState(center);
    const [directions,setDirections] = useState(null)
    const mapRef = useRef(null)

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            setCurrentPosition({
                lat: latitude,
                lng: longitude
            });
        });

        const watchId = navigator.geolocation.watchPosition((position) => {
            const { latitude, longitude } = position.coords;
            setCurrentPosition({
                lat: latitude,
                lng: longitude
            });
        });

        return () => navigator.geolocation.clearWatch(watchId);
    }, []);

    useEffect(() => {
        const updatePosition = () => {
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords;

                // console.log('Position updated:', latitude, longitude);
                setCurrentPosition({
                    lat: latitude,
                    lng: longitude
                });
            });
        };

        updatePosition(); // Initial position update

        const intervalId = setInterval(updatePosition, 1000); // Update every 10 seconds

    }, []);

    useEffect(()=>{
        if(rideDetails){
            const directionsService = new google.maps.DirectionsService();
            directionsService.route({
                origin:rideDetails.pickup,
                destination:rideDetails.destination,
                travelMode:google.maps.TravelMode.DRIVING
            }),
            (result,status)=>{
                if(status===google.maps.DirectionsStatus.OK){
                    setDirections(result)
                }else{
                    console.error(`error fetching directions ${result}`)
                }
            }
        }
    },[rideDetails])

    return (
        <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={currentPosition}
                zoom={15}
                options={false}
                onLoad={(map)=>(mapRef.current = map)}
            >
                {directions && <DirectionsRenderer directions={directions} />}
                <AdvancedMarker position={currentPosition} map={mapRef}/>
            </GoogleMap>
       </LoadScript>
    )
}

export default LiveTracking