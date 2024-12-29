import React,{useContext} from 'react'
import { RideDataContext } from '../context/RideContext';

const WaitingForDriver = () => {

    const {selecting,setSelecting,booking,setBooking,confirmRide,setConfirmRide,waitingForDriver,setWaitingForDriver} = useContext(RideDataContext)

  return (
    <div className={`${waitingForDriver ? '' : 'hidden'} w-full bg-white absolute bottom-0 flex flex-col items-center rounded-xl p-2 pb-4 `}>
      hi
    </div>
  )
}

export default WaitingForDriver
