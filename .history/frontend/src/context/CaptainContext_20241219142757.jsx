import React, { useState } from 'react'
import { createContext } from 'react'

const CaptainDataContext = createContext();

const CaptainContext = () => {

    const [captain,setCaptain] = useState(null)

    const updateCaptain = (captainDetails)=>{
        setCaptain(captainDetails);
    }

  return (
    <div>
      
    </div>
  )
}

export default CaptainContext
