import React, { useState } from 'react'
import { createContext } from 'react'

const CaptainDataContext = createContext();

const CaptainContext = ({children}) => {

    const [captain,setCaptain] = useState(null)

    const updateCaptain = (captainDetails)=>{
        setCaptain(captainDetails);
    }

  return (
    <CaptainDataContext.Provider value={{captain,setCaptain,updateCaptain}}>
      {children}
    </CaptainDataContext.Provider>
  )
}

export default CaptainContext
