import React from 'react'

const ConfirmRide = ({confirmRide,setConfirmRide}) => {
  return (
    <div className={`${confirmRide ? '' : 'hidden'} w-full bg-white absolute fixed bottom-0`}>
      {console.log(confirmRide)}
      hi
    </div>
  )
}

export default ConfirmRide
