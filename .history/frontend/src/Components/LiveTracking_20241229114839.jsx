import React, { useEffect,useState } from 'react'
import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api'

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

  return (
    <div>
      Live Tracking
    </div>
  )
}

export default LiveTracking
