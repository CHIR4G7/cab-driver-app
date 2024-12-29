import React, { useContext } from 'react'
import { RideDataContext } from '../context/RideContext'

const FinishRide = () => {
    const {finishRide} = useContext(RideDataContext)
  return (
    <div className={`${finishRide ? '' : 'hidden'} absolute bottom-0 w-full bg-white`}>
      <span>Ride Summmary</span>
    </div>
  )
}

export default FinishRide
