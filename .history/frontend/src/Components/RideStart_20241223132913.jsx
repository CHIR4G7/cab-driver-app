import React, { useContext } from 'react'
import { RideDataContext } from '../context/RideContext'

const RideStart = () => {

    const {rideStarted,setRideStarted} = useContext(RideDataContext)

  return (
    <div className={`${rideStarted ? '' : 'hidden'} bottom-0 absolute bg-white w-full rounded-t-lg`}>
        <div className='flex flex-col p-3'>
            <span className='font-medium text-2xl'>Ride Started</span>
            <div className='flex flex-row justify-between px-4'>
                <span className='font-medium text-xl mt-[1.9vh]'>4 km Away</span>
                <button className='mt-3  text-black bg-green-500  p-2 rounded-lg flex flex-row items-center justify-center gap-2' 
           >Complete Ride</button>
            </div>
        </div>
      
    </div>
  )
}

export default RideStart
