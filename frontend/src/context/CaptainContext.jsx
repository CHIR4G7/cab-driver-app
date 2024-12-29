import React, { useState } from 'react'
import { createContext } from 'react'

export const CaptainDataContext = createContext();

const CaptainContext = ({children}) => {

    const [captain,setCaptain] = useState(null)

    const updateCaptain = (captainDetails)=>{
      // You will have to send a backend api call t update the captain status in the backend everytime this functions is called
        setCaptain(captainDetails);
    }

  return (
    <CaptainDataContext.Provider value={{captain,setCaptain,updateCaptain}}>
      {children}
    </CaptainDataContext.Provider>
  )
}

export default CaptainContext
