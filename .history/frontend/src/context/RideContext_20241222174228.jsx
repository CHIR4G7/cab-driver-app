import React, { useState } from 'react'
import { createContext } from 'react'

export const RideDataContext = createContext();

const RideContext = ({children}) => {

   const [selecting, setSelecting] = useState(false) // while selecting the dpickup, and dropoff locations
   const [booking, setBooking] = useState(false) //while selecting cab,auto,mot and their fares to be displayed
   const [confirmRide,setConfirmRide] = useState(false)
   const [waitingForDriver,setWaitingForDriver] = useState(false)
   const [driverFound,setDriverFound] = useState(true)

  return (
    <RideDataContext.Provider value={{selecting,setSelecting,booking,setBooking,confirmRide,setConfirmRide,waitingForDriver,setWaitingForDriver,driverFound,setDriverFound}}>
      {children}
    </RideDataContext.Provider>
  )
}

export default RideContext
