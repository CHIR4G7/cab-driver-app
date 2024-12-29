import React,{useState,useEffect} from 'react'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const MapComponent = () => {

  const [userLocation, setUserLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Get the user's location using the Geolocation API
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            zoom: 12,
          });
        },
        (err) => {
          setError("Unable to retrieve your location. Using default location.");
          console.error(err.message);
        }
      );
    } else {
      setError("Geolocation is not supported by your browser.");
    }
  }, []);

  return (
    <div style={{ height: "100vh", width: "100%" }}>
    {userLocation ? (
      <MapContainer
        center={userLocation}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
        />
        <Marker position={userLocation}>
          <Popup>You are here!</Popup>
        </Marker>
      </MapContainer>
    ) : (
      <p>{error || "Fetching your location..."}</p>
    )}
  </div>
  )
}

export default MapComponent
