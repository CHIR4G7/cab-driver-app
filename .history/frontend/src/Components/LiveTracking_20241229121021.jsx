import React, { useEffect,useState } from 'react'
import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api'

const containerStyle = {
    width: '100%',
    height: '100%',
};

const LiveTracking = () => {

    const [currentPostion,setCurrentPosition] = useState({
        latitude : '',
        longitude: ''
    })

    useEffect(()=>{
        navigator.geolocation.getCurrentPosition((position)=>{
            setCurrentPosition({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            })
        })

        const watchId = navigator.geolocation.watchPosition((position)=>{
            setCurrentPosition({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            })
        })

        return ()=>navigator.geolocation.clearWatch(watchId)

    },[])

    useEffect(() => {
        const updatePosition = () => {
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords;

                console.log('Position updated:', latitude, longitude);
                setCurrentPosition({
                    lat: latitude,
                    lng: longitude
                });
            });
        };

        updatePosition(); // Initial position update

        const intervalId = setInterval(updatePosition, 1000); // Update every 10 seconds

    }, []);

  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API}>
        <GoogleMap
        mapContainerStyle={containerStyle}
        center={currentPostion}
        zoom={15}
        >
            <Marker position={currentPostion} />
        </GoogleMap>
    </LoadScript>
  )
}

export default LiveTracking
