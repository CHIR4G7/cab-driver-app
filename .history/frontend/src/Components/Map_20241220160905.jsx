import React, { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const Map = () => {

  const [userLocation, setUserLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(()=>{
    if("geolocation" in navigator){
      navigator.geolocation.getCurrentPosition((position)=>{
        const {latitude,longitude} = position.coords
        setUserLocation([latitude,longitude])
      }),
      (err)=>{
        console.error("Error fetching location:", err.message);
        setError("Unable to fetch your location. Please enable location services.");
      }
    }else{
      setError("Geolocation is not supported by your browser.");
    }
  },[])

  return (
    <div className='h-screen w-full'>
      
    </div>
  )
}

export default Map
