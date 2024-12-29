import React from 'react'

const ConfirmRide = ({confirmRide,setConfirmRide}) => {
  return (
    <div className={`${confirmRide ? '' : 'hidden'} w-full bg-black`}>
      {console.log(confirmRide)}
      hi
    </div>
  )
}

export default ConfirmRide
