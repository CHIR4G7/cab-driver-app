import React, { useEffect,useState } from 'react'
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
        console.log(latitude,longitude)
        setUserLocation([latitude,longitude])
      }),
      (err)=>{
        console.log("Error fetching location:", err.message);
        setError("Unable to fetch your location. Please enable location services.");
      }
    }else{
      setError("Geolocation is not supported by your browser.");
    }
  },[userLocation])

  return (
    <div className='h-screen w-full'>
      {userLocation ? (
        //   <MapContainer center={userLocation} zoom={13} style={{ height: "100%", width: "100%" }}>
        //   <TileLayer
        //     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        //     attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
        //   />
        //   <Marker position={userLocation}>
        //     <Popup>You are here!</Popup>
        //   </Marker>
        // </MapContainer>
        <div>{userLocation}</div>
      ) : (<p>{error || `${error}`}</p>)}
    </div>
  )
}

export default Map
