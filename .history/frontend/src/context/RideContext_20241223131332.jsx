import React, { useState } from 'react'
import { createContext } from 'react'

export const RideDataContext = createContext();

const RideContext = ({children}) => {

  //users
   const [selecting, setSelecting] = useState(false) // while selecting the dpickup, and dropoff locations
   const [booking, setBooking] = useState(false) //while selecting cab,auto,mot and their fares to be displayed
   const [confirmRide,setConfirmRide] = useState(false)
   const [waitingForDriver,setWaitingForDriver] = useState(false)
   const [driverFound,setDriverFound] = useState(true)

   //for captains
   const [rideFound,setRideFound] = useState(true)
   const [rideStarted,setRideStarted] = useState(false)
   const [confirmRideCaptain,setConfirmRideCaptain] = useState(false);

  return (
    <RideDataContext.Provider value={{selecting,setSelecting,booking,setBooking,confirmRide,setConfirmRide,waitingForDriver,setWaitingForDriver,driverFound,setDriverFound,rideFound,setRideFound,rideStarted,setRideStartedconfirmRideCaptain,setConfirmRideCaptain}}>
      {children}
    </RideDataContext.Provider>
  )
}

export default RideContext
