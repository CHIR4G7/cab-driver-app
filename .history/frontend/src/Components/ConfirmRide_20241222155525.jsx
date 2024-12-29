import React from 'react'

const ConfirmRide = ({confirmRide,setConfirmRide}) => {
  return (
    <div className={`${confirmRide ? '' : 'hidden'} w-full bg-white absolute bottom-0`}>
        <span></span>
    </div>
  )
}

export default ConfirmRide
