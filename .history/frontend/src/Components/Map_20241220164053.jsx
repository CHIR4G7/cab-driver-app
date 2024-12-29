import React, { useEffect,useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

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
  },[])

  return (
    <div className='h-screen w-full'>
      {userLocation ? (

          <MapContainer center={userLocation} zoom={13} style={{ height: "100%", width: "100%" }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
          />
          <Marker position={userLocation}>
            <Popup>You are here!</Popup>
          </Marker>
        </MapContainer>
        // <div>{userLocation[0]},{userLocation[1]}</div>
      ) : (<p>{error || `Fetching your location`}</p>)}
    </div>
  )
}

export default Map
