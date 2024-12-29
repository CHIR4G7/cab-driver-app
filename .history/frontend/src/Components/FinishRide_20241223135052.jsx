import React, { useContext } from 'react'
import { RideDataContext } from '../context/RideContext'

const FinishRide = () => {
    const {finishRide} = useContext(RideDataContext)
  return (
    <div className={`${finishRide ? '' : 'hidden'} absolute bottom-0 w-full bg-white`}>
        <div className='flex flex-col justify-center items-center'>
        <span className='font-medium text-2xl'>Ride Summmary</span>
        </div>
      
    </div>
  )
}

export default FinishRide
