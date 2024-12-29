import React from 'react'
import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api'

const LiveTracking = () => {

    const [currentPostion,setCurrentPosition] = useState({
        latitude : '',
        longitude: ''
    })

  return (
    <div>
      Live Tracking
    </div>
  )
}

export default LiveTracking
