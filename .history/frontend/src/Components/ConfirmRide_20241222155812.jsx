import React from 'react'

const ConfirmRide = ({confirmRide,setConfirmRide}) => {
  return (
    <div className={`${confirmRide ? '' : 'hidden'} w-full bg-white absolute bottom-0`}>
        <span className='font-medium tex-xl'>Finding You a Driver</span>
    </div>
  )
}

export default ConfirmRide
