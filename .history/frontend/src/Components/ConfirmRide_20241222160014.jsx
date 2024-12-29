import React from 'react'
import Rings from "react-loader-spinner"

const ConfirmRide = ({confirmRide,setConfirmRide}) => {
  return (
    <div className={`${confirmRide ? '' : 'hidden'} w-full bg-white absolute bottom-0`}>
        <span className='font-medium text-xl'>Finding You a Driver</span>
        <div>
            
        </div>
    </div>
  )
}

export default ConfirmRide
