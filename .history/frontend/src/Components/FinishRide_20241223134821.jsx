import React, { useContext } from 'react'
import { RideDataContext } from '../context/RideContext'

const FinishRide = () => {
    const {finishRide} = useContext(RideDataContext)
  return (
    <div className={`${finishRide ? '' : 'hidden'} absolute bottom-0 w-full bg-white`}>
        <div className='flex flex-col'>
        <span>Ride Summmary</span>
        <div className='flex flex-row justify-between px-2'>

        </div>
        </div>
      
    </div>
  )
}

export default FinishRide
