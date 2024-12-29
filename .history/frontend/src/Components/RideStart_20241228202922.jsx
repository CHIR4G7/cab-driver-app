import React, { useContext, useEffect } from 'react'
import { RideDataContext } from '../context/RideContext'
import { SocketContext } from '../context/SocketContext'

const RideStart = ({ride}) => {

    const {rideStarted,setRideStarted,setFinishRide} = useContext(RideDataContext)
    const {socket,sendMessage} = useContext(SocketContext)

    
    useEffect(()=>{
      sendMessage('ride-started',{rideId:ride._id})
    },[])
  

    if(!ride){
      return <div>Loading...</div>
    }

  return (
    <div className={`${rideStarted ? '' : 'hidden'} bottom-0 absolute bg-white w-full rounded-t-2xl`}>
        <div className='flex flex-col p-3'>
            <span className='font-medium text-2xl'>Ride Started</span>
            <div className='flex flex-row justify-between px-4'>
                <span className='font-medium text-xl mt-[2.5vh]'>4 km Away</span>
                <button className='mt-3  text-black bg-green-500  p-2 rounded-lg flex flex-row items-center justify-center gap-2' 
                onClick={(e)=>{
                    e.stopPropagation()
                    setFinishRide((prev)=>!prev)
                }}
           >Complete Ride</button>
            </div>
        </div>
      
    </div>
  )
}

export default RideStart
