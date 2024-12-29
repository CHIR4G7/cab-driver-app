import React, { useContext } from 'react'
import { RideDataContext } from '../context/RideContext'

const RideStart = () => {

    const {rideStarted,setRideStarted} = useContext(RideDataContext)

  return (
    <div className={`${rideStarted ? '' : 'hidden'} bottom-0 absolute bg-white w-full`}>
        <div className='flex flex-col'>
            <span className='font-bold'>Ride Started</span>
        </div>
      
    </div>
  )
}

export default RideStart
