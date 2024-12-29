import React, { useEffect,useState } from 'react'


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
    <div className="h-screen w-full">
      {userLocation ? (
       <>{userLocation}</>
      ) : (
        <p>{error || "Fetching your location..."}</p>
      )}
    </div>
  )
}

export default Map
