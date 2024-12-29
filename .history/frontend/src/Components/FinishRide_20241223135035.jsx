import React, { useContext } from 'react'
import { RideDataContext } from '../context/RideContext'

const FinishRide = () => {
    const {finishRide} = useContext(RideDataContext)
  return (
    <div className={`${finishRide ? '' : 'hidden'} absolute bottom-0 w-full bg-white`}>
        <div className='flex flex-col justify-center'>
        <span>Ride Summmary</span>
        </div>
      
    </div>
  )
}

export default FinishRide
