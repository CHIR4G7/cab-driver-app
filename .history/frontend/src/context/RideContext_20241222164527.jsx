import React, { useState } from 'react'
import { createContext } from 'react'

export const RideDataContext = createContext();

const RideContext = ({children}) => {

    const [captain,setCaptain] = useState(null)

    const updateCaptain = (captainDetails)=>{
        setCaptain(captainDetails);
    }

  return (
    <RideDataContext.Provider value={{captain,setCaptain,updateCaptain}}>
      {children}
    </RideDataContext.Provider>
  )
}

export default RideContext
