import React from 'react'
import Map, { Marker } from 'react-map-gl';

const Map = () => {

  const [userLocation, setUserLocation] = useState({
    latitude: 37.7749, // Default latitude
    longitude: -122.4194, // Default longitude
    zoom: 12,
  });
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
    <div className='h-screen w-screen'>
      
    </div>
  )
}

export default Map
