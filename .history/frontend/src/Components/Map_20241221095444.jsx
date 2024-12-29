import React from 'react'
import Map, { Marker } from 'react-map-gl';

const MapComponent = () => {

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
      {error && <p>{error}</p>}
      <Map  initialViewState={userLocation}
        style={{ width: "100%", height: "100%" }}
        mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json">
           <Marker
          latitude={userLocation.latitude}
          longitude={userLocation.longitude}
          color="red"
        />
        </Map>
    </div>
  )
}

export default MapComponent
