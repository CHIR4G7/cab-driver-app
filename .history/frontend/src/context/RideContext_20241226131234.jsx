import React, { useState } from 'react'
import { createContext } from 'react'

export const RideDataContext = createContext();

const RideContext = ({children}) => {

  //users
   const [selecting, setSelecting] = useState(false) // while selecting the dpickup, and dropoff locations
   const [booking, setBooking] = useState(false) //while selecting cab,auto,mot and their fares to be displayed
   const [confirmRide,setConfirmRide] = useState(false)
   const [waitingForDriver,setWaitingForDriver] = useState(false)
   const [driverFound,setDriverFound] = useState(false)

   //for captains
   const [rideFound,setRideFound] = useState(false); // for pop ups whenever reides are avialbale
   const [rideStarted,setRideStarted] = useState(false) // opem the ride has started page
   const [confirmRideCaptain,setConfirmRideCaptain] = useState(false); //for opening the cofirm rdide and enter otp

   const [finishRide,setFinishRide] = useState(false); //for both user and captain this will define the payement summary

  return (
    <RideDataContext.Provider value={{selecting,setSelecting,booking,setBooking,confirmRide,setConfirmRide,waitingForDriver,setWaitingForDriver,driverFound,setDriverFound,rideFound,setRideFound,rideStarted,setRideStarted,confirmRideCaptain,setConfirmRideCaptain,finishRide,setFinishRide}}>
      {children}
    </RideDataContext.Provider>
  )
}

export default RideContext
