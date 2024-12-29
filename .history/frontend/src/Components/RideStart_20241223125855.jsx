import React, { useContext } from 'react'
import { RideDataContext } from '../context/RideContext'

const RideStart = () => {

    const {rideStarted,setRideStarted} = useContext(RideDataContext)

  return (
    <div className={`${ride} bottom-0 absolute`}>
      ride staretd
    </div>
  )
}

export default RideStart
