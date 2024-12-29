import React, { useContext } from 'react'
import { RideDataContext } from '../context/RideContext'

const RideStart = () => {

    const {rideStarted,setRideStarted} = useContext(RideDataContext)

  return (
    <div className={`${rideStarted ? '' : 'hidden'} bottom-0 absolute bg-white w-full`}>
        <div className='flex flex-col p-3'>
            <span className='font-medium text-2xl'>Ride Started</span>
            <div className='flex flex-row justify-between px-4'>
                <span>4 km Away</span>
                <button className='mt-3 border-2 border-black text-white bg-black  p-1 rounded-lg flex flex-row items-center justify-center gap-2' 
           >Complete Ride</button>
            </div>
        </div>
      
    </div>
  )
}

export default RideStart
