import React,{useContext} from 'react'
import { RideDataContext } from '../context/RideContext';

const WaitingForDriver = () => {

    const {selecting,setSelecting,booking,setBooking,confirmRide,setConfirmRide,waitingForDriver,setWaitingForDriver} = useContext(RideDataContext)

  return (
    <div className={`${waitingForDriver ? '' : 'hidden'} fixed bottom-0 bg-white w-full`}>
      
    </div>
  )
}

export default WaitingForDriver
