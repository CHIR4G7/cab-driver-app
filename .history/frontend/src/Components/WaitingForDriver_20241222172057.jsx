import React,{useContext} from 'react'
import { RideDataContext } from '../context/RideContext';

const WaitingForDriver = () => {

    const {selecting,setSelecting,booking,setBooking,confirmRide,setConfirmRide} = useContext(RideDataContext)
    
  return (
    <div>
      
    </div>
  )
}

export default WaitingForDriver
