import React, { useContext } from 'react'
import { RideDataContext } from '../context/RideContext'

const RideStart = () => {

    const {rideStarted,setRideStarted} = useContext(RideDataContext)

  return (
    <div className={`${rideStarted ? '' : 'hidden'} bottom-0 absolute bg-white w-full`}>
        <div className='flex flex-col p-3'>
            <span className='font-medium text-2xl'>Ride Started</span>
            <div className='flex flex-row'>
                <span>4 km Away</span>
            </div>
        </div>
      
    </div>
  )
}

export default RideStart
